import React from "react";
import Layout from "../components/PageLayout/layout";
import SEO from "../components/seo";


const StudentPage = ({ data }) => {
    return (
        <Layout page="students">
            <SEO title="students" keywords={[`students`, `developers`, `designers`, `projects`]} />
        </Layout>
    )
}

export default StudentPage