import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps}/>
      <footer className="text-center py-4">
        © Egor Dyuzhev {new Date().getFullYear()} GPLv3
      </footer>
    </ThemeProvider>
  )
}
