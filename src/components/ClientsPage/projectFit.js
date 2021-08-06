import { SB_INK, SB_SALMON } from "@colors"
import Button from "components/ClientsPage/button"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Header } from "styles/components/Header"
import Section from "styles/components/Section"

const ProjectFitSection = styled(Section)`
  background-color: white;
  margin: 0 auto;
  padding: 0em 2em 5em 2em;

  @media (min-width: 1000px) {
    max-width: 100vw;
    margin-top: 120px;
  }
`

const ProjectFitHeader = styled(Header)`
  letter-spacing: 0.02em;
`

const ProjectFitReasonSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ProjectFitReasonWrapper = styled.div`
  width: 33%;
  min-width: 400px;
  padding: 0em 3em 0em 0em;
  @media (max-width: 600px) {
    width: 100%;
    min-width: 100%;
    padding: 0em;
    margin-bottom: 30px;
  }
`

const ProjectFitReasonHeader = styled.h4`
  color: ${SB_SALMON};
  font-family: "Montserrat";
  font-size: 22px;
`

const ProjectFitReasonBody = styled.p`
  color: ${SB_INK};
  font-family: "Montserrat";
  font-size: 18px;
  line-height: 1.5;
`

const ProjectFitButtonWrapper = styled.div`
  margin-top: 60px;
  @media (max-width: 600px) {
    margin-top: 30px;
    margin-bottom: 50px;
  }
`

const ProjectFit = ({ projectFitReasons }) => {
  return (
    <ProjectFitSection>
      <ProjectFitHeader>
        Is your project a good fit for Sandbox?
      </ProjectFitHeader>
      <ProjectFitReasonSection>
        {projectFitReasons.map((reason, index) => (
          <ProjectFitReasonWrapper key={`reason-${index}`}>
            <ProjectFitReasonHeader>{reason.header}</ProjectFitReasonHeader>
            <ProjectFitReasonBody>{reason.body}</ProjectFitReasonBody>
            {reason.buttons.map((button, bIndex) => (
              <ProjectFitButtonWrapper>
                <Button
                  key={`reason-${index}-button-${bIndex}`}
                  name={button.name}
                  route={button.route}
                ></Button>
              </ProjectFitButtonWrapper>
            ))}
          </ProjectFitReasonWrapper>
        ))}
      </ProjectFitReasonSection>
    </ProjectFitSection>
  )
}

ProjectFit.propTypes = {
  projectFitReasons: PropTypes.arrayOf(
    PropTypes.exact({
      header: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      buttons: PropTypes.arrayOf(
        PropTypes.exact({
          name: PropTypes.string.isRequired,
          route: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
}

export default ProjectFit
