"use client"
import { Properties } from "@/utils/types/sanity.types"
import CustomCarousel from "../carousel/Carousel"
import Image from "next/image"
import { urlForImage } from "@/utils/image"
import { Button, Card, CardBody, Chip } from "@nextui-org/react"
import styled from "styled-components"
import { getRoomType } from "@/utils/rooms/hooks/getRoomType"
import { addToWishlist } from "@/actions/wishlist/addToWishlist"

interface Props{
    rooms:Properties['rooms']
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
        <div className="w-full bg-gray-200 rounded-lg text-center text-sm p-2">
          {text}
        </div>
    )
}

export default function PropertyRooms(props:Props) {
  const {rooms} = props
  const handleAddToWishList= async ()=>{
    // await addToWishlist({
        
    // })

  }
  return (
    <div>
        <span>Showing {rooms?.length} results</span>
    <div className="grid grid-cols-2 gap-2 p-4">
    {
            rooms?.map((room,i)=>{
                const [accomodationType,roomType] = getRoomType(room.roomType??'').split('-')
                return(
                    <Card key={i} >
                <CardBody className="flex flex-row gap-2">
                <CustomCarousel carouselStyle={{maxWidth:"20rem"}}>
                        {room.images?.map((image,i)=>
                            <Image key={i} alt="room-image" src={urlForImage(image)} width={400} height={400} />
                        )}
                    </CustomCarousel>
                <div className="flex flex-col items-center gap-4 flex-1">
                         <StyledChip text={accomodationType}/>
                         <StyledChip text={roomType}/>
                         <StyledChip text={`Floor ${room.floorNo}`}/>
                         <StyledChip text={`Room ${room.roomNo}`}/>
                <div className="mt-auto w-full flex flex-col gap-2 mb-6">
                <Button variant="flat">
                    Price {room.price}
                </Button>
                <Button onClick={handleAddToWishList} color="primary">
                    Add to wishlist
                </Button>  
                <Button  color="primary">
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
