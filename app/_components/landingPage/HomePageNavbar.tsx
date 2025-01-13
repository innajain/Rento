"use client"
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
  User,
} from "@nextui-org/react"
import Login from "../Login"
import { ChevronDown, Headset, Heart, Menu } from "lucide-react"
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import { GoogleOAuthToken } from "@/actions/auth/handleOauthGoogle"
import Link from "next/link"
import {
  executeLocalStorageAction,
  LocalStorageItems,
} from "@/utils/auth/executeLocalStorageAction"
import { useRecoilState, useRecoilValue } from "recoil"
import { LoginModalAtom } from "@/utils/state/LoginModalAtom"
import { authAtom } from "@/utils/auth/authAtom"
import Image from "next/image"
import Support from "@/public/Headphones Round.svg"
import Wishlist from "@/public/Heart.svg"

export default function HomePageNavbar() {
  const { onOpen, isOpen, onOpenChange } = useDisclosure()
  const [loginModalState, setLoginModalState] = useRecoilState(LoginModalAtom)
  const [userDetails, setUserDetails] = useState<GoogleOAuthToken>()
  const authState = useRecoilValue(authAtom)

  useEffect(() => {
    const token = executeLocalStorageAction({
      actionType: "get",
      itemName: LocalStorageItems.OAuth,
    })
    if (!!token) {
      const decoded: GoogleOAuthToken = jwtDecode(token.credential)
      setUserDetails(decoded)
    }
  }, [])

  return (
    <div className="w-full flex justify-between items-center text-white py-8 px-20">
      <Link className="text-3xl font-bold" href="/">
        ROR
      </Link>
      <div className="flex gap-7">
        <Link href="/support" className="flex gap-3 items-center">
          <Image src={Support} alt="support" width={20} height={20} />
          Support
        </Link>
        <Link href={"/wishlist"} className="flex gap-3 items-center">
          <Image src={Wishlist} alt="support" width={20} height={20} />
          Support
        </Link>
        {!authState.isAuthenticated && (
          <>
            <Button
              className="bg-[#FE6F61] text-white rounded-full font-semibold"
              variant="solid"
              onPress={() =>
                setLoginModalState({ isOpen: !loginModalState.isOpen })
              }
            >
              Login/ Sign Up
            </Button>
            <Login isOpen={isOpen} onOpenChange={onOpenChange} />
          </>
        )}

        {userDetails?.email_verified && authState.isAuthenticated && (
          <Dropdown>
            <DropdownTrigger>
              <Button
                endContent={
                  <User
                    name=""
                    avatarProps={{ src: userDetails?.picture!, size: "sm" }}
                  />
                }
                startContent={<Menu />}
              />
            </DropdownTrigger>
            <DropdownMenu variant="flat">
              <DropdownItem key="bookings">
                <Link href={"/bookings"}>My bookings</Link>
              </DropdownItem>
              <DropdownItem color="danger" key="logout">
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </div>
    </div>
  )
}
