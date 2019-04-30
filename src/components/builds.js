import React from "react"
import PropTypes from "prop-types"
import { HeaderLineBelow } from "styles/Header"
import styled from "styled-components"
import Project from "./project.js"
import Section from "styles/Section"

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 1000px) {
    justify-content: space-between;
  }
`

const Builds = ({ title, projects }) => (
  <Section>
    <HeaderLineBelow>
      <span>{title}</span>
    </HeaderLineBelow>
    <ProjectContainer>
      {projects.map(p => (
        <Project
          title={p.title}
          tags={p.tags}
          backgroundImage={p.image}
          description={p.description}
          github={p.gitLink}
          key={p.title}
        />
      ))}
    </ProjectContainer>
  </Section>
)

Builds.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      gitLink: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Builds
