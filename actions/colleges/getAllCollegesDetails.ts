'use server'
import { handleAction } from "@/utils/handleAction"
import { sanityClient } from "@/utils/sanityClient"
enum CollegeDetails{
    name,
    campus,
    location,
    properties,
    majorAreas,
    _id,
}
type CollegeDetail = keyof typeof CollegeDetails
export const getAllCollegesDetails = async (...fields:CollegeDetail[]|[]) => handleAction({
    action: async ()=> {
        const query = fields.length===0?'*[_type == "colleges"]':`*[_type == "colleges" ]{${fields.join(",")}}`
        const colleges = await sanityClient.fetch(query)
        return colleges
    },
    errorMessage:"Error in getCollegeDetails"
})

