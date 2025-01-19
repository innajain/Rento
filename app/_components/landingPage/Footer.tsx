import twitter from "@/public/icons8-twitter-bird.svg"
import linkedin from "@/public/icons8-linkedin.svg"
import instagram from "@/public/icons8-instagram.svg"
import facebook from "@/public/icons8-facebook.svg"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <div className="bg-[#FE6F61] h-[250px] flex items-center py-10 text-white">
      {/* Title */}
      <Link
        href="/"
        className="flex-1 h-full flex items-center justify-center text-6xl font-bold"
      >
        ROR
      </Link>

      {/* Divider */}
      <div className="h-full w-[1px] bg-[#CCCCCC]" />

      {/* Contact Us Section */}
      <div className="flex-1 h-full flex justify-center items-center flex-col gap-5">
        <p className="text-2xl font-semibold">CONTACT US!</p>
        <div className="text-lg">
          <a href="tel:+91987654321" className="block">
            +91 987654321
          </a>
          <a href="mailto:ror@gmail.com" className="block">
            ror@gmail.com
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="h-full w-[1px] bg-[#CCCCCC]" />

      {/* Follow Us Section */}
      <div className="flex-1 h-full flex flex-col justify-center items-center gap-5">
        <p className="text-2xl font-semibold">FOLLOW US!</p>
        <div className="flex gap-3">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Image src={twitter} alt="twitter" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Image src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Image src={instagram} alt="instagram" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Image src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  )
}
