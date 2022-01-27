import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Seo = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          lang
          description
          siteUrl
          location
          fbappid
        }
      }
    }
  `)

  const title = props.pageTitle
    ? `${props.pageTitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title

  const description = props.pageDesc || data.site.siteMetadata.description

  const url = props.pagePath
    ? `${data.site.siteMetadata.siteUrl}${props.pagePath}`
    : data.site.siteMetadata.siteUrl

  const imgUrl = props.pageImg
    ? `${data.site.siteMetadata.siteUrl}${props.pageImg}`
    : `${data.site.siteMetadata.siteUrl}/thumb.jpg`

  const imgWidth = props.pageImgWidth || 1280
  const imgHeight = props.pageImgHeight || 640

  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:location" content={data.site.siteMetadata.location} />

      <meta property="fb:app_id" content={data.site.siteMetadata.fbappid} />

      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={imgWidth} />
      <meta property="og:image:height" content={imgHeight} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl} />
    </Helmet>
  )
}
export default Seo
