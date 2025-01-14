import n1 from "@/public/n1.png"
import n2 from "@/public/n2.png"
import n3 from "@/public/n3.png"
import n4 from "@/public/n4.png"
import n5 from "@/public/n5.png"
import o1 from "@/public/o1.png"
import o2 from "@/public/o2.png"
import o3 from "@/public/o3.png"
import o4 from "@/public/o4.png"
import o5 from "@/public/o5.png"
import s1 from "@/public/s1.png"
import s2 from "@/public/s2.png"
import s3 from "@/public/s3.png"
import s4 from "@/public/s4.png"
import s5 from "@/public/s5.png"
import Image from "next/image"

export function PopularAreas() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <p className="font-bold text-4xl">
          Popular areas for <span className="text-[#fe6f61]">students</span> in
          Delhi
        </p>
        <p className="text-[#979797] font-medium">
          Book student accommodations near universities around Delhi
        </p>
      </div>
      <div className="flex flex-col gap-12">
        {campuses.map((campus, index) => {
          return (
            <div
              key={index}
              className="flex p-2 py-4 rounded-3xl flex-col gap-4 bg-gradient-to-r from-[#FE6F61] to-[#FF5544]"
            >
              <span className="text-2xl text-white text-center font-bold">
                {campus.campus}
              </span>
              <div className="flex justify-evenly">
                {campus.images.map((image, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-2">
                      {index !== 4 ? (
                        <Image
                          src={image.image}
                          alt="image"
                          width={200}
                          height={200}
                        />
                      ) : (
                        <Image
                          className="rounded-2xl border-[10px]"
                          src={image.image}
                          alt="image"
                          width={200}
                          height={200}
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const campuses = [
  {
    campus: "North Campus",
    images: [
      {
        image: n1,
        name: "Kamalanagar",
      },
      {
        image: n2,
        name: "Kalyan Vihar",
      },
      {
        image: n3,
        name: "Roop Nagar",
      },
      {
        image: n4,
        name: "Ghanta Ghar",
      },
      {
        image: n5,
        name: "Shakti Nagar",
      },
    ],
  },
  {
    campus: "South Campus",
    images: [
      {
        image: s1,
        name: "Staya Niketan",
      },
      {
        image: s2,
        name: "Moti Bagh",
      },
      {
        image: s3,
        name: "Vasant Vihar",
      },
      {
        image: s4,
        name: "Naraina Vihar",
      },
      {
        image: s5,
        name: "Rajouri Garden",
      },
    ],
  },
  {
    campus: "Off Campus",
    images: [
      {
        image: o1,
        name: "Laxmi Nagar",
      },
      {
        image: o2,
        name: "Mukherjee Nagar",
      },
      {
        image: o3,
        name: "Old Rajendra Nagar",
      },
      {
        image: o4,
        name: "Karol Bagh",
      },
      {
        image: o5,
        name: "Hauz Khas",
      },
    ],
  },
]
