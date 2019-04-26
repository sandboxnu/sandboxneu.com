import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import { SectionContent } from "../styles/Section"
import styled from "styled-components"

const Container = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 100;
`

const ContentContainer = styled(SectionContent)`
  height: 4em;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

const Button = styled.a`
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
`

const Nav = ({ siteTitle }) => (
  <Container>
    <ContentContainer>
      <Logo size="3em" />
      <ButtonContainer>
        <Button href="https://forms.gle/aZB5fGMEBKB4uDLU7">Join Us</Button>
      </ButtonContainer>
    </ContentContainer>
  </Container>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
