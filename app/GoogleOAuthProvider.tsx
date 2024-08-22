'use client'
import { GoogleOAuthProvider } from '@react-oauth/google'

export default function GoogleOAuthProviderComponent({children}:{children:React.ReactNode}) {
  return (
    <GoogleOAuthProvider clientId="344642180190-942io7bpib3evhokbe1hehqu8g04m4k5.apps.googleusercontent.com">
        {children}
    </GoogleOAuthProvider>
  )
}
