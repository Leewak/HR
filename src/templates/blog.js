import * as React from "react"
import { graphql, Link } from "gatsby"

import InnerLayout from "../components/innerlayout"
import Seo from "../components/seo"
import PostTile from "../components/blog/post"

const BlogPage = ({ data }) => (
  <InnerLayout title="Blog">
    { data.allPosts.nodes.map((node) => {
      if(node.slug == null) {
        return;
      }
      return <PostTile img={node.featured_image} title={node.title} excerpt={node.excerpt} slug={node.slug} published={node.published} />
    }) }
  </InnerLayout>
)

export const query = graphql`
  query {
    allPosts {
      nodes {
        title
        slug
        featured_image
        published
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Blog" />

export default BlogPage
