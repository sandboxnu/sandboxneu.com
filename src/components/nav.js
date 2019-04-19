import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import styled from "styled-components"

const Container = styled.div`
  position: fixed;
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 20px;
`

const SizedLogo = styled(Logo)`
  height: 40px;
  width: 121px;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

const Button = styled.a`
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  color: #27426c;
`

const Nav = ({ siteTitle }) => (
  <Container>
    <SizedLogo />
    <ButtonContainer>
      <Button href="https://forms.gle/aZB5fGMEBKB4uDLU7">Join Us</Button>
    </ButtonContainer>
  </Container>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
