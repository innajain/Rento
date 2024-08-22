
import { Button, Link } from "@nextui-org/react";
import {Hotel, School} from "lucide-react"
export default function SecondaryNavbar() {
    const secondaryNavItems = [
        {
          icon: <School  color="gray" />,
          text: 'Pg',
        },
        {
          icon: <Hotel color="gray" />,
          text: 'Hostels',
        },

      ];
      
  return (
    <div className="hidden sm:flex gap-8 justify-center mt-6 mb-6">
    {secondaryNavItems.map((item, i) => (
      <div key={i}>
        <Link href="#">
         <Button className="flex  gap-4">
            {item.icon}
            <span className="text-sm tracking-wider">{item.text}</span>
         </Button>
        </Link>
      </div>
    ))}
    </div>
  )
}
