import * as React from "react"
import { graphql } from "gatsby"
import InnerLayout from "../components/innerlayout"

const InnerTemplate = ({ data }) => (
  <InnerLayout title={data.posts.title}>
    <div className="w-full px-4">
      <img src={data.posts.featured_image} className="w-full object-cover mx-auto" style={{ maxWidth: `800px`, paddingBottom: `2em` }} />
      <div className="font-normal" dangerouslySetInnerHTML={{ __html: data.posts.body }}>
      </div>
    </div>
  </InnerLayout>
)

export const query = graphql`
  query($id: String) {
      posts(id: {eq: $id}) {
        title
        featured_image
        body
      }
  }
`

export default InnerTemplate
