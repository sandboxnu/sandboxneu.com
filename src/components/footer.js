import React from "react"
import PropTypes from "prop-types"
import Section from "../styles/Section"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import banner from "images/sandbox-banner.png"

const GrayBackground = styled.div`
  background: #eaecf0;
`

const Navigate = styled.div`
  padding-right: 30%;
  color: #2a426b;
`

const Contact = styled.div`
  padding-right: 30%;
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

const SocialLogo = styled(FontAwesomeIcon)`
  color: ${props => props.color};
`

const SizedLogo = styled.object`
  height: 40px;
  width: 121px;
  color: #2a426b;
`

const FooterLogo = () => <SizedLogo data={banner}>Banner</SizedLogo>

const SocialInfo = ({ info, icon }) => {
  return (
    <StyledSocial>
      <a href={info.url}>
        <SocialLogo icon={icon} color="#2a426b" />
      </a>
    </StyledSocial>
  )
}

const InfoLink = ({ dest, text }) => {
  return <StyledLink href={dest}>{text}</StyledLink>
}

const StyledLink = styled.div`
  padding-bottom: 5%;
  padding-top: 5%;
  text-decoration: none;
  color: #2a426b;
`

const StyledSocial = styled.div`
  margin-right: 20px;
`

const Footer = ({ pages, email, facebook, linkedin, instagram }) => (
  <footer>
    <GrayBackground>
      <FlexSection>
        <FooterLogo />
        <FooterInfo>
          <Navigate>
            <span>NAVIGATE</span>
            <InfoLink dest="/" text="home" />
            <InfoLink dest="https://forms.gle/aZB5fGMEBKB4uDLU7" text="join" />
          </Navigate>
          <Contact>
            <span>CONTACT</span>
            <InfoLink
              dest="mailto:info@sandboxneu.com"
              text="info@sandboxneu.com"
            />
            <SocialSection>
              <SocialInfo info={facebook} icon={faFacebookF} />
              <SocialInfo info={linkedin} icon={faLinkedin} />
              <SocialInfo info={instagram} icon={faInstagram} />
            </SocialSection>
          </Contact>
        </FooterInfo>
      </FlexSection>
    </GrayBackground>
  </footer>
)

const SocialType = PropTypes.exact({
  url: PropTypes.string,
})

Footer.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
  email: PropTypes.string.isRequired,
  instagram: SocialType.isRequired,
  facebook: SocialType.isRequired,
  linkedin: SocialType.isRequired,
}

export default Footer
