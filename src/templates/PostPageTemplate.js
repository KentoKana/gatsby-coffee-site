import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../components/image"

import animations from "../components/animations"
import { StyleRoot } from "radium"

import "../styles/pages/post-page.scss"
const CoffeeDrinkTemplate = ({ data }) => {
  useStaticQuery(graphql`
    query($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          path
          title
          featureImage
        }
      }
    }
  `)
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <StyleRoot>
        <section className="post-page">
          <div className="post-page__image-container" style={animations.fadeIn}>
            <Image
              className="post-page__feature-image"
              filename={frontmatter.featureImage}
              alt={frontmatter.title}
            />
            <h1 className="post-page__heading" style={animations.slideInUp}>
              {frontmatter.title}
            </h1>
          </div>
          <div className="container">
            <div
              className="post-page__content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>
      </StyleRoot>
    </Layout>
  )
}

export default CoffeeDrinkTemplate
