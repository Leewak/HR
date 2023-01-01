import * as React from "react"
import { graphql } from "gatsby"
import InnerLayout from "../components/innerlayout"

const InnerTemplate = ({ data }) => (
  <InnerLayout title={data.pages.title}>
    <div dangerouslySetInnerHTML={{ __html: data.pages.body }}></div>
  </InnerLayout>
)

export const query = graphql`
  query ($id: String) {
    pages(id: { eq: $id }) {
      title
      body
    }
  }
`

export default InnerTemplate
