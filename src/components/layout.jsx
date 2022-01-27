import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.css"

// Font AwesomeのCSSを先読みする
import "@fortawesome/fontawesome-svg-core/styles.css"
// Font Awesomeのコンポーネント内でCSSを適用しないよう設定
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
