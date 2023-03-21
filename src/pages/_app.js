import MiseEnPage from '@/component/MiseEnPage'
import { LockerContextProvider } from '@/context/lockerContext'
import { UserContextProvider } from '@/context/userContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps, oui }) {

  return (
      <UserContextProvider>
        <LockerContextProvider>
          <MiseEnPage>
            <Component {...pageProps} />
          </MiseEnPage>
        </LockerContextProvider>
      </UserContextProvider>
  )
  
}
