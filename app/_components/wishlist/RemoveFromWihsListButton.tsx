"use client"
import { useHandleError } from "@/actions/error/useHandleError";
import { getLocalStorageToken } from "@/actions/utils/getLocalStorageToken";
import { removeFromWishlist } from "@/actions/wishlist/removeFromWishList";
import { Button, ButtonProps } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
interface Props{
    propertyId:string
}
export default function RemoveFromWihsListButton(props:ButtonProps & Props) {
  const{ handleError} = useHandleError()
  const removeFromWhisListMutation = useMutation({
    mutationFn:async ()=> {
      const token = getLocalStorageToken()
      await removeFromWishlist({
        propertyId:props.propertyId,
        token
      })
    },
    onMutate:()=>{
      toast.dismiss()
      toast.loading('Removing from wishlist')
    },
    onError:(err)=>{
     toast.dismiss()
     handleError(err)
    },
    onSuccess:()=>{
        toast.dismiss()
        toast.success('Removed from wishlist')
    }
  })
  const handleClick = ()=>{
    removeFromWhisListMutation.mutate()
  }
  return (
    <Button onClick={handleClick} {...props} color="danger" className="text-white">
        Remove from Whishlist
    </Button>
  )
}
