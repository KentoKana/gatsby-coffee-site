import React from "react"
import Image from "./image"
import { Link } from "gatsby"

import "../styles/partials/_post-card.scss"

const PostCard = ({ post }) => {
  return (
    <Link aria-label={post.node.frontmatter.title} className="post-card" to={post.node.frontmatter.path}>
      <div className="post-card__container">
        <Image
          filename={post.node.frontmatter.featureImage}
          alt={post.node.frontmatter.title}
          className="post-card__image"
        />
        <h3 className="post-card__heading">{post.node.frontmatter.title}</h3>
      </div>
    </Link>
  )
}

export default PostCard
