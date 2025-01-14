"use client"
import { Button, Input } from "@nextui-org/react"
import { SearchIcon } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import SearchIconSvg from "@/public/Magnifer.svg"
import Image from "next/image"
interface CollgeNameAndId {
  collegeName: string
  collegeId: string
}
interface Props {
  collegeNamesAndIdsArr: CollgeNameAndId[]
  mt?: number
}
export default function HomePageSearchForm(props: Props) {
  const [collegeName, setCollegeName] = useState<string>("")
  const [filteredColleges, setFilteredColleges] = useState<CollgeNameAndId[]>(
    []
  )
  const inputRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  props.mt = props.mt ?? 0

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setCollegeName("")
        setFilteredColleges([])
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const rankedColleges = props.collegeNamesAndIdsArr
      .filter((college) =>
        college.collegeName.toLowerCase().includes(collegeName.toLowerCase())
      )
      .sort(
        (a, b) =>
          calculateRelevance(b.collegeName, collegeName) -
          calculateRelevance(a.collegeName, collegeName)
      )

    setFilteredColleges(rankedColleges)
  }, [collegeName, props.collegeNamesAndIdsArr])

  const calculateRelevance = (name: string, query: string): number => {
    if (name.toLowerCase() === query.toLowerCase()) return 3
    if (name.toLowerCase().startsWith(query.toLowerCase())) return 2
    if (name.toLowerCase().includes(query.toLowerCase())) return 1
    return 0
  }

  return (
    <form
      className="flex gap-2 w-[50rem] mx-auto"
      style={{ marginTop: props.mt }}
    >
      <div className="flex lg:w-full md:w-[85vw] flex-col">
        <div ref={inputRef} className="relative w-full">
          <input
            className="h-16 rounded-full px-8 w-full outline-none"
            placeholder="Search for your desired college, location or PG"
            onChange={(e) => setCollegeName(e.target.value)}
          />
          <Button
            className="w-[48px] h-[48px] rounded-full p-0 m-0 absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#fe6f61]"
            isIconOnly
          >
            <Image src={SearchIconSvg} alt="search" width={24} height={24} />
          </Button>
        </div>

        {!!collegeName && filteredColleges.length > 0 && (
          <div
            ref={dropdownRef}
            className="max-h-[50vh] overflow-y-auto mt-20 absolute z-[100] p-2 rounded-xl shadow-xl border border-primary bg-white flex flex-col gap-4 scrollbar-hide w-[50rem]"
          >
            {filteredColleges.map((collegeNameAndIdIObj, index) => (
              <Link
                href={`/college/${collegeNameAndIdIObj.collegeId}`}
                className="hover:bg-gray-200 p-3 rounded-lg"
                key={index}
              >
                {collegeNameAndIdIObj.collegeName}
              </Link>
            ))}
          </div>
        )}
      </div>
    </form>
  )
}
