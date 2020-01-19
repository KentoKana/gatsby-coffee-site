import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/postCard"
import SEO from "../components/seo"
import animations from "../components/animations"
import { StyleRoot } from "radium"

import "../styles/pages/post-list-page.scss"
const PostListPageTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.pagesJson.title} />
      <section className="post-list-page">
        <div className="post-list-page__container">
          <StyleRoot>
            <h1 className="container" style={animations.fadeInRight}>
              {data.pagesJson.title}
            </h1>
            <div className="container" style={animations.fadeInLeft}>
              {data.allMarkdownRemark.edges.map((post, index) => (
                <React.Fragment key={index}>
                  <PostCard post={post} />
                </React.Fragment>
              ))}
            </div>
          </StyleRoot>
        </div>
      </section>
    </Layout>
  )
}

export const postListPageQuery = graphql`
  query($postType: String!, $path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { postType: { eq: $postType } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            featureImage
          }
          rawMarkdownBody
        }
      }
    }
    pagesJson(path: { eq: $path }) {
      title
    }
  }
`

export default PostListPageTemplate
