import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Who from "../components/who"
import Mission from "../components/mission"
import Builds from "../components/builds"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`sandbox`, `neu`, `northeastern`, `university`]}
    />
    <Hero />
    <Who />
    <Mission />
    <Builds />
  </Layout>
)

export default IndexPage
