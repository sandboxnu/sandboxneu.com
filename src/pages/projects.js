import React from "react";
import Layout from "../components/PageLayout/layout";
import SEO from "../components/seo";


const ProjectPage = ({ data }) => {
    return (
        <Layout page="projects">
            <SEO title="projects" keywords={[`projects`, `Office Hours`, `SearchNEU`, `GraduateNU`]} />
        </Layout>
    )
}

export default ProjectPage