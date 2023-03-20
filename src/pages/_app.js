import MiseEnPage from '@/component/MiseEnPage'
import '@/styles/globals.css'

export default function App({ Component, pageProps, oui }) {

  return (

      <MiseEnPage>
        <Component {...pageProps} />
      </MiseEnPage>



  )
  
}
