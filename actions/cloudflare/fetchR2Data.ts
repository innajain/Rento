import {
    S3Client,
    ListObjectsV2Command
} from "@aws-sdk/client-s3";

export async function fetchR2Data() {
    const s3 = new S3Client({
        region: "auto",
        endpoint: "https://220c10dcefc010788cf016f5e8c6ec0c.r2.cloudflarestorage.com", 
        credentials: {
            accessKeyId: 'c0b541eaa62d7b78c5f8eb2d2c7ee2c2', 
            secretAccessKey: 'f7d34568bdd09385da3db4b1a027399f5508340143b363a0a8bc9f316c814eaf', 
        }
    });

    try {
        const params = {
            Bucket: 'rorimages', // Your bucket name
        };

        const { Contents } = await s3.send(new ListObjectsV2Command(params));
        return Contents;
    } catch (error) {
        console.error(error);
        return [];
    }
}
