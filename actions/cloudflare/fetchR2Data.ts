import { handleAction } from "@/utils/handleAction";
import { S3Client, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
    region: "auto",
    endpoint: "https://220c10dcefc010788cf016f5e8c6ec0c.r2.cloudflarestorage.com",
    credentials: {
        accessKeyId: 'c0b541eaa62d7b78c5f8eb2d2c7ee2c2',
        secretAccessKey: 'f7d34568bdd09385da3db4b1a027399f5508340143b363a0a8bc9f316c814eaf',
    },
});

export const  fetchR2Data = async ()=> handleAction(async() =>{
    const { Contents } = await s3.send(new ListObjectsV2Command({ Bucket: 'rorimages' }));
        if (!Contents) return [];
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];

        const groupedImages: { [key: string]: { key: string, images: string[] } } = {};
        for (const item of Contents) {
            const folderName = item.Key!.split('/')[0]; 
            if (!groupedImages[folderName]) {
                groupedImages[folderName] = { key: folderName, images: [] };
            }

            const isImage = imageExtensions.some(ext => item.Key!.toLowerCase().endsWith(ext));
            if (isImage) {
            
                const signedUrl = await getSignedUrl(s3, new GetObjectCommand({
                    Bucket: 'rorimages',
                    Key: item.Key,
                }), { expiresIn: 3600 }); 

            
                groupedImages[folderName].images.push(signedUrl);
            }
        }

    
        const result = Object.values(groupedImages).map(folder => ({
            ...folder,
            images: folder.images.length > 0 ? folder.images : [], 
        }));

    
        result.sort((a, b) => (a.images.length === 0 ? 1 : 0) - (b.images.length === 0 ? 1 : 0));

        return result;

}) 
        