"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
  User,
} from "@nextui-org/react";
import Login from "./Login";
import { ChevronDown, Headset, Heart, Menu } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { GoogleOAuthToken } from "@/actions/auth/handleOauthGoogle";
import Link from "next/link";
import { executeLocalStorageAction, LocalStorageItems } from "@/utils/auth/executeLocalStorageAction";
import { useRecoilState, useRecoilValue} from "recoil";
import { LoginModalAtom } from "@/utils/state/LoginModalAtom";
import { authAtom } from "@/utils/auth/authAtom";

export default function Navbar() {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const [loginModalState, setLoginModalState] = useRecoilState(LoginModalAtom);
  const [userDetails, setUserDetails] = useState<GoogleOAuthToken>();
  const authState = useRecoilValue(authAtom)
  
  useEffect(() => {
    const token = executeLocalStorageAction({actionType:"get",itemName:LocalStorageItems.OAuth});
    if (!!token) {
      const decoded: GoogleOAuthToken = jwtDecode(token.credential);
      setUserDetails(decoded);
    }
  }, []);

  return (
    <div className="flex justify-between p-3 bg-background items-center sticky">
      <div>ROR</div>
      <div className="flex gap-4">
      <Button  endContent={<ChevronDown />} startContent={<Headset />}>
          Support
        </Button>
      <Link href={"/wishlist"}>
      <Button startContent={<Heart/>}>
        My Wishlist
      </Button>
      </Link>
      {!authState.isAuthenticated &&
      <><Button
            className="bg-primary-gradient text-white"
            variant="flat"
            onClick={() => setLoginModalState({ isOpen: !loginModalState.isOpen })}
          >
            Login
          </Button><Login isOpen={isOpen} onOpenChange={onOpenChange} /></>
      
      }  
       
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
              <DropdownItem>
              <Link href={"/bookings"}>
              My bookings
              </Link>
                </DropdownItem>
              <DropdownItem color="danger">Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </div>
    </div>
  );
}
