import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Seo = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          lang
          description
        }
      }
    }
  `)

  const title = props.pageTitle ? `${props.pageTitle} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title
  const description = props.pageDesc || data.site.siteMetadata.description

  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
export default Seo
