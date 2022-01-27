import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.css"

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
