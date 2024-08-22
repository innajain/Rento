"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { LockIcon, MailIcon } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";

interface Params {
  isOpen?: boolean;
  onOpenChange?: () => void;
}

import { handleOAuthGoogleLogin } from "@/actions/auth/handleOauthGoogle";
import toast from "react-hot-toast";
import { executeLocalStorageAction, LocalStorageItems } from "@/utils/auth/executeLocalStorageAction";
export default function Login(params: Params) {
  const { isOpen, onOpenChange } = params;
  const handleLoginSuccess = async (response:any) => {
    const token = await handleOAuthGoogleLogin(response)
    if(token){
      executeLocalStorageAction({actionType:"set",itemName:LocalStorageItems.Token,item:token})
      executeLocalStorageAction({actionType:"set",itemName:LocalStorageItems.OAuth,item:response})
      toast.success('Login Successful')
    }else{
      toast.error('Login Failed. Try again')
    }
   
  };
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="flat" >
                  Close
                </Button>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                   handleLoginSuccess(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
