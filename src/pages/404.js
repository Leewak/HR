import * as React from "react"


import InnerLayout from "../components/innerlayout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <InnerLayout title="404: Not Found">
    <p>The route doesn't exist</p>
  </InnerLayout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
