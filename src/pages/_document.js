import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

//custom document that can update html and body tags that are used to update a page
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script id="theme-switcher" strategy='beforeInteractive'>
          {`
            if(localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
              document.documentElement.classList.add("dark");
            } else {
              docuemnt.documentElement.classList.remove("dark");
            }
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
