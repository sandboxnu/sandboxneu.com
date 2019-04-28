import React from "react"
import PropTypes from "prop-types"
import Section from "../styles/Section"
import { HeaderLineBelow } from "../styles/Header"
import Body from "../styles/Body"
import styled from "styled-components"
import Project from "./project.js"

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;  
`

const Builds = ({ title, p1 }) => (
  <Section>
    <HeaderLineBelow><span>{title}</span></HeaderLineBelow>
      <ProjectContainer>
        <Project 
          title = "Allostasis"
          tags = {["React", "Node.js", "Allostasis", "Psychology", "Game"]}/>
        <Project 
          title = "Empathic Accuracy"
          tags = {["React", "Node.js", "Video", "Emotion", "Psychology"]}/>
        <Project 
          title = "Predictive Affect"
          tags = {["React", "Node.js", "Images", "Psychology"]}/>
      </ProjectContainer>
  </Section>
)

Builds.propTypes = {
  title: PropTypes.string.isRequired,
  p1: PropTypes.string.isRequired,
}

export default Builds
