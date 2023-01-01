import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Features from "../components/home/features"
import Testimonials from "../components/home/testimonials"

const IndexPage = () => (
  <Layout>
    <Features />
    <Testimonials />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
