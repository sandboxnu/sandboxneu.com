import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`sandbox`, `neu`, `northeastern`, `university`]}
      />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
  }
`

export default IndexPage
