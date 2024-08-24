"use client"
import { Properties } from "@/utils/types/sanity.types"
import CustomCarousel from "../carousel/Carousel"
import Image from "next/image"
import { urlForImage } from "@/utils/image"
import { Button, Card, CardBody, Chip } from "@nextui-org/react"
import styled from "styled-components"
import { getRoomType } from "@/utils/rooms/hooks/getRoomType"
import { addToWishlist } from "@/actions/wishlist/addToWishlist"
import { useMutation } from "@tanstack/react-query"
import { getLocalStorageToken } from "@/actions/utils/getLocalStorageToken"
import toast from "react-hot-toast"
import { useHandleError } from "@/actions/error/useHandleError"
import { CircleCheckBig } from "lucide-react"

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
        <div className="w-full bg-background flex items-center gap-2 rounded-lg text-center  p-2">
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
    <div className="p-4  flex flex-col gap-8 mt-2">
        <span className="text-lg tracking-wider">Showing <span className="text-primary bg-background p-1 rounded-full font-bold">{rooms.length}</span>  Results</span>
    <div className=" py-2 px-2 xl:grid-cols-3 bg-background rounded-lg lg:grid-cols-2 gap-2">
    {
            rooms?.map((room,i)=>{
                const [accomodationType,roomType] = getRoomType(room.roomType??'').split('-')
                return(
                    <Card className="max-w-[45vw]" key={i} >
                <CardBody className="flex flex-row gap-2">
                <CustomCarousel carouselStyle={{maxWidth:"20rem"}}>
                        {room.images?.map((image,i)=>
                            <Image key={i} alt="room-image" src={urlForImage(image)} width={400} height={400} />
                        )}
                    </CustomCarousel>
                <div className="flex  flex-col items-center gap-2 flex-1">
                         <StyledChip text={accomodationType}/>
                         <StyledChip text={roomType}/>
                         <StyledChip text={`Floor ${room.floorNo}`}/>
                         <StyledChip text={`Room ${room.roomNo}`}/>
                <div className="mt-auto w-full flex flex-col gap-2 mb-4">
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
                </Card>

                )
            }
                
            )
        }

    </div>
    </div>
  )
}
