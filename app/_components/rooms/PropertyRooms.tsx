"use client"
import { Properties } from "@/utils/types/sanity.types"
import CustomCarousel from "../carousel/Carousel"
import Image from "next/image"
import { urlForImage } from "@/utils/image"
import { Button, Card, CardBody, CardFooter, Chip } from "@nextui-org/react"
import styled from "styled-components"
import { getRoomType } from "@/utils/rooms/hooks/getRoomType"
import { useMutation } from "@tanstack/react-query"
import { getLocalStorageToken } from "@/actions/utils/getLocalStorageToken"
import toast from "react-hot-toast"
import { useHandleError } from "@/actions/error/useHandleError"
import { CircleCheckBig } from "lucide-react"
import { addToWishlist } from "@/actions/wishlist/addToWishlist"

interface Props{
    rooms:Properties['rooms']
    propertyName:string
}
const RoomInfo = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  width: 100%;
  letter-spacing: 0.05em;
  display:flex;
  flex-direction:row;
  gap:0.5rem;
`;
const StyledChip = ({text}:{text:string})=>{
    return(
        <div className="w-full sm:text-medium bg-background text-xs 942:text-medium xl:text-xs 768:min-w-[7rem] 942:w-full  flex items-center gap-2 rounded-lg text-center p-2 ">
           <CircleCheckBig className="text-primary" size={16}/>
          {text}
        </div>
    )
}
interface Params{
    roomType:string
    roomId:string
    roomImages:string[]
}
export default function PropertyRooms(props:Props) {
  const {rooms} = props
  const {handleError} =useHandleError()
  const addToWishListMutation = useMutation({
    mutationFn:async (params:Params)=> {
      const res = await addToWishlist({
        propertyName:props.propertyName,
        propertyType:JSON.stringify([params.roomType]),
        isRoom:true,
        propertyId:params.roomId,
        propertyImages:JSON.stringify(params.roomImages),
        token:getLocalStorageToken()
      })
      return res
    },
    onMutate:()=>{
      toast.dismiss()
      toast.loading('Adding to wishlist')
    },
    onError:(err)=>{
      toast.dismiss()
      handleError(err)
    },
    onSuccess:()=>{
      toast.dismiss()
      toast.success('Added to wishlist')
    }
  })
  const handleAddToWishList= async (params:Params)=>{
    addToWishListMutation.mutate(params)
  }
  return (
    <div className=" flex flex-col gap-8 mt-2">
        <span className="text-lg tracking-wider">Showing <span className="text-primary bg-background p-1 rounded-full font-bold">{rooms.length}</span>  Results</span>
    <div className="py-2 p-1 grid xl:grid-cols-3 bg-background rounded-lg md:grid-cols-2 gap-2">
    {
            rooms?.map((room,i)=>{
                const [accomodationType,roomType] = getRoomType(room.roomType??'').split('-')
                return(
            <Card key={i} >
                <CardBody className="flex 768:flex-col 942:flex-row flex-row gap-2">
                <CustomCarousel carouselClassName="max-w-[15rem] sm:max-w-[22rem] 768:max-w-full 942:max-w-[20rem] ">
                        {room.images?.map((image,i)=>
                            <Image key={i} className="h-full"  alt="room-image" src={urlForImage(image)} width={400} height={400} />
                        )}
                    </CustomCarousel>
                <div className="flex-col flex flex-1 items-center gap-2 justify-between">
                  <div className="flex gap-2 sm:gap-6 w-full 768:mb-2 942:mb-0 768:overflow-x-scroll 768:flex-row 768:gap-2 942:flex-col flex-col"> 
                  <StyledChip text={accomodationType}/>
                         <StyledChip text={roomType}/>
                         <StyledChip text={`Floor ${room.floorNo}`}/>
                         <StyledChip text={`Room ${room.roomNo}`}/>
                  </div>
                        
                <div className="w-full  flex flex-col gap-2 ">
                <Button size="lg" className="bg-secondary-light" radius="none" variant="flat">
                    Price {room.price}
                </Button>
                <Button size="lg" radius="none" onClick={()=>handleAddToWishList({
                    roomType:room.roomType??'',
                    roomId:room._key,
                    roomImages:room.images?.map((image)=>urlForImage(image))??[]
                })} color="secondary">
                    Add to wishlist
                </Button>  
                <Button size="lg" radius="none" color="primary">
                    Book now
                </Button>  
                </div>
                </div> 
                </CardBody> 
                <CardFooter>
        
                </CardFooter>
                </Card>

                )
            }
                
            )
        }

    </div>
    </div>
  )
}
