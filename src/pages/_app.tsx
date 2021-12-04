import { AppProps } from "next/app";
import { ChakraProvider, Link } from "@chakra-ui/react"
import '../styles/article.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <div style={{ minHeight: "100vh", position: "relative", paddingBottom: "120px", boxSizing: "border-box" }}>
        <Component {...pageProps} />
        <footer style={{ width: "100%", background: "#eeeeee", textAlign: "center", height: "120px", position: "absolute", bottom: 0, lineHeight:"120px" }}>
          <Link href="/">fluixyz</Link>
        </footer>
      </div>
    </ChakraProvider>
  )
}

export default MyApp;
