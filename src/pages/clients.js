import ClientProcess from "components/ClientsPage/clientProcess"
import ClientPageIntroduction from "components/ClientsPage/introduction"
import ProjectFit from "components/ClientsPage/projectFit"
import Quote from "components/ClientsPage/quote"
import Layout from "components/PageLayout/layout"
import SEO from "components/seo"
import { graphql } from "gatsby"
import React from "react"

const ClientPage = ({ data }) => {
  const node = data.clientPage.edges[0].node
  return (
    <Layout page="clients">
      <SEO title="clients" keywords={[`clients`, `researchers`, "projects"]} />
      <ClientPageIntroduction
        reasonsToWorkWithSandbox={node.reasonsToWorkWithSandbox}
      />
      <Quote />
      <ClientProcess
        clientProcessSteps={node.clientProcessSteps}
        clientApplicationInfo={node.clientApplicationInfo}
      />
      <ProjectFit projectFitReasons={node.projectFitReasons} />
    </Layout>
  )
}

export const query = graphql`
  query ClientPageQuery {
    clientPage: allClientsJson {
      edges {
        node {
          reasonsToWorkWithSandbox
          clientApplicationInfo
          clientProcessSteps {
            header
            body
          }
          projectFitReasons {
            header
            body
            buttons {
              name
              route
            }
          }
        }
      }
    }
  }
`

export default ClientPage
