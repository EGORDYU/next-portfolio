import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
  <Component {...pageProps}/>
  <footer>
  © Egor Dyuzhev {new Date().getFullYear()} GPLv3
  </footer>
  </>
  )
   
}
