import { Open_Sans } from "next/font/google"
import { HorizontalScrollList } from "./HorizontalScrollList"
import { Card, CardBody } from "@nextui-org/react"
import avatar from "@/public/564385f9-61ea-45a9-983c-008144501e0a.jpg"
import Star from "@/public/Star yellow.svg"
import { Montserrat } from "next/font/google"
import Image from "next/image"

const montserrat = Montserrat({ subsets: ["latin-ext"] })
const opensans = Open_Sans({ subsets: ["latin"] })

export function Testimonials() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <p className="font-bold text-4xl">
          What do <span className="text-[#fe6f61]">students</span> say about us?
        </p>
        <p className="text-[#979797] font-medium">
          What do our 10k+ Students have to say about their experience with ROR{" "}
        </p>
      </div>
      <HorizontalScrollList>
        {Array.from({ length: 10 }).map((_, idx) => (
          <div key={idx}>
            <Card className="w-[310px] border-1 border-[#D8D8D8]">
              <CardBody
                className={"flex flex-col p-4 gap-3 " + opensans.className}
              >
                <p className="text-xs text-[#2A2A2A] h-20 overflow-hidden line-clamp-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="flex justify-between">
                  <div className="flex gap-3 items-center">
                    <Image
                      src={avatar}
                      alt="avatar"
                      className="rounded-full h-8 w-auto"
                    />
                    <div>
                      <p className="text-lg font-semibold">Ram Kapoor</p>
                      <p className="text-[0.6rem] leading-none text-[#979797]">
                        St. Stephens College
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className={"font-semibold " + montserrat.className}>4</p>
                    <Image src={Star} alt="star" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </HorizontalScrollList>
    </div>
  )
}
