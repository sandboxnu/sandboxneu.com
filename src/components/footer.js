import React from "react"
import PropTypes from "prop-types"
import Section from "../styles/Section"
import styled from "styled-components"
import Logo from "./logo"
import Img from "gatsby-image"

const GrayBackground = styled.div`
  background: #eaecf0;
`

const SizedLogo = styled(Logo)`
  height: 40px;
  width: 121px;
`

const Navigate = styled.div`
  padding-right: 30%;
  color: #2a426b;
`

const Contact = styled.div`
  color: #2a426b;
`

const FlexSection = styled(Section)`
  padding-top: 50px;
  padding-bottom: 70px;
  display: flex;
  justify-content: space-between;
`
const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

const SocialSection = styled.div`
  display: flex;
`

const SocialInfo = ({ info }) => {
  return (
    <StyledSocial>
      <a href={info.url}>
        <Img fixed={info.icon.childImageSharp.fixed} />
      </a>
    </StyledSocial>
  )
}

const StyledSocial = styled.div`
  margin-right: 20px;
`

const Footer = ({ pages, email, facebook, linkedin }) => (
  <footer>
    <GrayBackground>
      <FlexSection>
        <SizedLogo />
        <FooterInfo>
          <Navigate>
            <h>NAVIGATE</h>
            <p>home</p>
          </Navigate>
          <Contact>
            <h>CONTACT</h>
            <p>sandboxneu@gmail.com</p>
            <SocialSection>
              <SocialInfo info={facebook} />
              <SocialInfo info={linkedin} />
            </SocialSection>
          </Contact>
        </FooterInfo>
      </FlexSection>
    </GrayBackground>
  </footer>
)

const SocialType = PropTypes.exact({
  icon: PropTypes.object,
  url: PropTypes.string,
})

Footer.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
  email: PropTypes.string.isRequired,
  facebook: SocialType.isRequired,
  linkedin: SocialType.isRequired,
}

export default Footer
