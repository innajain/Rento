import { Open_Sans } from "next/font/google"
import { Heading } from "./Heading"

const opensans = Open_Sans({ subsets: ["latin"] })

export function WhereWeOperate() {
  return (
    <div className="flex flex-col gap-12">
      <Heading
        titleBeforeRed="Where we"
        red="operate"
        titleAfterRed=""
        subHeading="Trusted student lodging near key universities and bustling zones in Delhi."
      />
      <div className={"flex gap-5 " + opensans.className}>
        {Object.keys(data).map((item) => (
          <div key={item} className="flex flex-col flex-1 gap-3">
            <p className="text-[#FE6F61] font-bold text-lg mb-1">{item}</p>
            {data[item].map((item) => (
              <p key={item} className="text-sm text-[#666666] font-semibold">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}



const data: {
  [key: string]: string[]
} = {
  "South Delhi": [
    "Malviya Nagar",
    "Saket",
    "Hauz Khas",
    "Kalkaji",
    "Greater Kailash",
    "Lajpat Nagar",
    "Green Park",
    "Vasant Kunj",
    "Sheikh Sarai",
    "Satya Niketan",
    "Chirag Delhi",
    "Bikaji Cama Place",
    "Munirka",
    "Safdarjung Enclave",
    "Mehrauli",
  ],
  "North Delhi": [
    "Mukherjee Nagar",
    "Kamla Nagar",
    "Hudson Lane",
    "Model Town",
    "GTB Road",
    "Old Rajinder Nagar",
    "Shakti Nagar",
    "Vijay Nagar",
    "Patel Nagar",
    "Karol Bagh",
    "Outram Lines",
    "Roop Nagar",
    "Kingsway Camp",
  ],
  "East Delhi": [
    "Laxmi Nagar",
    "Mayur Vihar (Phase I)",
    "Mayur Vihar (Phase II)",
    "Mayur Vihar (Phase III)",
    "Preet Vihar",
    "Karkardooma",
    "Vasundhara Nagar",
    "IP Extension",
    "Shakarpur",
    "Patparganj",
    "Pandav Nagar",
    "Anand Vihar",
    "Geeta Colony",
    "Ghaziabad",
  ],
  "West Delhi": [
    "Janakpuri",
    "Uttam Nagar",
    "Rajouri Garden",
    "Vikaspuri",
    "Subhash Nagar",
    "Tilak Nagar",
    "Paschim Vihar",
    "Dwarka Mor",
    "Naraina Vihar",
    "Tagore Garden",
    "Moti Nagar",
    "Kirti Nagar",
  ],
}
