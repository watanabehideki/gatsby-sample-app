import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCheckSquare,
  faClock,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons"
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons"

// Contentfulから取得したrichText内の要素を扱う定数
const options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2>
        <FontAwesomeIcon icon={faCheckSquare} />
        {children}
      </h2>
    ),

    // richText内の画像を表示
    [BLOCKS.EMBEDDED_ASSET]: node => (
      <GatsbyImage
        image={node.data.target.gatsbyImageData}
        alt={
          node.data.target.description
            ? node.data.target.description
            : node.data.target.title
        }
      />
    ),
  },
}

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <div>
        <div className="eyecatch">
          <figure>
            <GatsbyImage
              image={data.contentfulBlogPost.eyecatch.gatsbyImageData}
              alt={data.contentfulBlogPost.eyecatch.description}
            />
          </figure>
        </div>
        <article className="content">
          <div className="container">
            <h1 className="bar">{data.contentfulBlogPost.title}</h1>
            <aside className="info">
              <time dateTime={data.contentfulBlogPost.publishDate}>
                <FontAwesomeIcon icon={faClock} />
                {data.contentfulBlogPost.publishDateJP}
              </time>
              <div className="cat">
                <FontAwesomeIcon icon={faFolderOpen} />
                <ul>
                  {data.contentfulBlogPost.category.map(cat => (
                    <li className={cat.categorySlug} key={cat.id}>
                      {cat.category}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            <div className="postbody">
              {renderRichText(data.contentfulBlogPost.content, options)}
            </div>
            <ul className="postlink">
              <li className="prev">
                <a href="base-blogpost.html" rel="prev">
                  <FontAwesomeIcon icon={faChevronCircleLeft} />
                  <span>前の記事</span>
                </a>
              </li>
              <li className="next">
                <Link to={`/`} rel="next">
                  <span>次の記事</span>
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </Layout>
  )
}
export default BlogPost

export const query = graphql`
  query {
    contentfulBlogPost {
      title
      publishDateJP: publishDate(formatString: "YYYY年 MM月 DD日")
      publishDate
      category {
        category
        categorySlug
        id
      }
      eyecatch {
        gatsbyImageData(layout: FULL_WIDTH)
        description
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(layout: FULL_WIDTH)
            title
            description
          }
        }
      }
    }
  }
`
