import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFound = ({ location }) => {
  return (
    <Layout>
      <Seo pageTitle="ページが見つかりません" pagePath={location.pathname}/>
      <div style={{ padding: "20vh 0", textAlign: "center" }}>
        <h1>Not Found</h1>
        <h2>お探しのページが見つかりませんでした</h2>
      </div>
    </Layout>
  )
}

export default NotFound
