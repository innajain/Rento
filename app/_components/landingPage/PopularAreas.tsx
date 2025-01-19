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
              className="flex py-6 rounded-3xl flex-col gap-5 bg-gradient-to-b from-[#FE6F61] to-[#FF5544]"
            >
              <span className="text-2xl text-white text-center font-bold">
                {campus.campus}
              </span>
              <div className="flex justify-evenly">
                {campus.images.map((image, index) => {
                  return (
                    <div
                      key={image.name}
                      className="flex aspect-square relative w-[200px]"
                    >
                      <Image
                        className="rounded-2xl border-[10px]"
                        src={image.image}
                        alt="image"
                        width={300}
                        height={300}
                      />
                      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-md bg-[#FE6F61] w-3/4 rounded-lg text-center p-1 text-nowrap overflow-hidden text-ellipsis">
                        {image.name}
                      </p>
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
        image: "/n1.png",
        name: "Kamalanagar",
      },
      {
        image: "/n2.png",
        name: "Kalyan Vihar",
      },
      {
        image: "/n3.png",
        name: "Roop Nagar",
      },
      {
        image: "/n4.png",
        name: "Ghanta Ghar",
      },
      {
        image: "/n5.png",
        name: "Shakti Nagar",
      },
    ],
  },
  {
    campus: "South Campus",
    images: [
      {
        image: "/s1.png",
        name: "Staya Niketan",
      },
      {
        image: "/s2.png",
        name: "Moti Bagh",
      },
      {
        image: "/s3.png",
        name: "Vasant Vihar",
      },
      {
        image: "/s4.png",
        name: "Naraina Vihar",
      },
      {
        image: "/s5.png",
        name: "Rajouri Garden",
      },
    ],
  },
  {
    campus: "Off Campus",
    images: [
      {
        image: "/o1.png",
        name: "Laxmi Nagar",
      },
      {
        image: "/o2.png",
        name: "Mukherjee Nagar",
      },
      {
        image: "/o3.png",
        name: "Old Rajendra Nagar",
      },
      {
        image: "/o4.png",
        name: "Karol Bagh",
      },
      {
        image: "/o5.png",
        name: "Hauz Khas",
      },
    ],
  },
]
