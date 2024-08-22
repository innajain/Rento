
import { Skeleton } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"

export default function Campuses() {
 const campuses =[{
    title:"North Campus",
    img:"/img.jpg"
 },
    {
    title:"South Campus",
    img:"",
    },
    {
     title:"Off Campus",
     img:"",
    }
]
  return (
    <div className="grid mt-12 grid-cols-3 gap-8 px-12">
     {campuses.map((campus,i)=>
     <Link key={i} href={`campus/${i+1}`} >
      <Image className="rounded-xl" loading="lazy" height={400} width={400} alt="campusImage" src={campus.img?campus.img:campuses[0].img}/>
      <span>{campus.title}</span>     
     </Link>
  
     )}
    </div>
  )
}
