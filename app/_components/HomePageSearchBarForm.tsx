"use client"
import { Button, Input } from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
interface CollgeNameAndId{
  collegeName: string;
  collegeId: string;
}
interface Props{
  collegeNamesAndIdsArr: CollgeNameAndId[]
}
export default function HomePageSearchForm(props:Props) {
  const [collegeName, setCollegeName] = useState<string>("")
  const [filteredColleges, setFilteredColleges] = useState<CollgeNameAndId[]>([]);

  const calculateRelevance = (name: string, query: string): number => {
    if (name.toLowerCase() === query.toLowerCase()) return 3;
    if (name.toLowerCase().startsWith(query.toLowerCase())) return 2;
    if (name.toLowerCase().includes(query.toLowerCase())) return 1;
    return 0;
  };

  useEffect(() => {
    const rankedColleges = props.collegeNamesAndIdsArr
      .filter((college) => college.collegeName.toLowerCase().includes(collegeName.toLowerCase()))
      .sort((a, b) => calculateRelevance(b.collegeName, collegeName) - calculateRelevance(a.collegeName, collegeName));

    setFilteredColleges(rankedColleges);
  }, [collegeName, props.collegeNamesAndIdsArr]);

  return (
    <form  className="flex mt-[5rem] gap-2 relative w-[50rem] mx-auto "> 
  <div className="w-full flex flex-col">
  <Input onChange={(e)=>setCollegeName(e.target.value)} isClearable
        onClear={()=>setCollegeName("")}
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "border-primary",
            "border-1",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-primary mb-0.5 dark:text-white/90  pointer-events-none flex-shrink-0" />
        }  size="lg"/>
    {!!collegeName && 
     <div className="top-[100%] mt-4 absolute w-full max-w-[43rem] z-[100] p-2 rounded-xl shadow-xl border border-primary bg-white flex flex-col gap-4">
         {filteredColleges.map((collegeNameAndIdIObj, index) => (
          <Link href={`/college/${collegeNameAndIdIObj.collegeId}`} className="hover:bg-gray-200 p-3 rounded-lg" key={index}>{collegeNameAndIdIObj.collegeName}</Link>
        ))}
     </div>
    }

  </div>
   
   <Button className="bg-primary text-white" size="lg">
        Search
    </Button>
    </form>
  )
}
