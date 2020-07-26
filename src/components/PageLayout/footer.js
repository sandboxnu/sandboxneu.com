import React from "react"
import PropTypes from "prop-types"
import Section from "styles/components/Section"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
  faGithub,
  faSlack,
} from "@fortawesome/free-brands-svg-icons"

import {
  SB_NAVY,
  SB_ORANGE,
  SB_NAVY_RGBA,
  SB_LIGHT_GREY,
  lightenDarkenColor,
} from "@colors"
import banner from "images/sandbox-banner-blue.svg"
import EmailSubscription from "../emailSubscription"

const GrayBackground = styled.div`
  background: #eaecf0;
`

const Navigate = styled.div`
  color: ${SB_NAVY};
`

const Header = styled.span`
  letter-spacing: 0.15em;
`

const Contact = styled.div`
  padding-left: 1em;
  color: ${SB_NAVY};

  @media (min-width: 750px) {
    padding-left: 4em;
  }
`

const FlexSection = styled(Section)`
  padding-top: 50px;
  padding-bottom: 70px;
  display: flex;
  justify-content: center;

  @media (min-width: 750px) {
    justify-content: space-between;
  }
`
const FooterInfo = styled.div`
  display: flex;
  justify-content: center;
`

const SocialSection = styled.div`
  padding-top: 10px;
  display: flex;
`

const SocialLogo = styled(FontAwesomeIcon)`
  color: ${props => props.color};
  max-width: 14px;
  transition: color 0.3s;

  &:hover {
    color: ${SB_ORANGE};
  }
`

const SizedLogo = styled.object`
  display: none;

  @media (min-width: 750px) {
    display: block;
    height: 40px;
    width: 121px;
    color: ${SB_NAVY};
  }
`

const StyledSocial = styled.div`
  margin-right: 20px;
`

const StyledLink = styled.a`
  display: block;
  padding-top: 10px;
  text-decoration: none;
  color: ${SB_NAVY};
  transition: color 0.3s;
  &:hover {
    color: ${SB_ORANGE};
  }
`

const MailingListWrapper = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: block;
    padding-left: 64px;

    * > input {
      border: 3px solid ${SB_NAVY};
      font-size: 12px;
      width: 300px;
    }

    * > button {
      background-color: ${SB_NAVY};
      border: 3px solid ${SB_NAVY};
      border-left: none;
      font-size: 14px;
      padding-top: 2px;
      padding-bottom: 5px;

      &:hover {
        background-color: ${lightenDarkenColor(SB_NAVY, 30)};
      }
    }

    * > span {
      font-size: 14px;
      max-width: 300px;
    }
  }
`

const MailingListHeader = styled(Header)`
  padding-bottom: 10px;
  display: block;
  color: ${SB_NAVY};
`

const FooterLogo = () => <SizedLogo data={banner}>Banner</SizedLogo>

const SocialInfo = ({ info, icon }) => {
  return (
    <StyledSocial>
      <a href={info.url}>
        <SocialLogo icon={icon} color={SB_NAVY} />
      </a>
    </StyledSocial>
  )
}

const InfoLink = ({ dest, text }) => {
  return <StyledLink href={dest}>{text}</StyledLink>
}

const Zeit = styled.div`
  margin-top: 20px;
`

const Footer = ({
  pages,
  email,
  facebook,
  linkedin,
  instagram,
  github,
  slack,
}) => (
  <footer>
    <GrayBackground>
      <FlexSection>
        <FooterLogo />
        <FooterInfo>
          <Navigate>
            <Header>NAVIGATE</Header>
            <InfoLink dest="/" text="home" />
            <InfoLink dest="/about" text="about" />
            <InfoLink dest="/portfolio" text="portfolio" />
            <InfoLink dest="/apply" text="apply" />
            <InfoLink dest="/team" text="team" />
          </Navigate>
          <Contact>
            <Header>CONTACT</Header>
            <InfoLink dest={`mailto:${email}`} text="info@sandboxneu.com" />
            <SocialSection>
              <SocialInfo info={facebook} icon={faFacebookF} />
              <SocialInfo info={linkedin} icon={faLinkedin} />
              <SocialInfo info={instagram} icon={faInstagram} />
              <SocialInfo info={github} icon={faGithub} />
              <SocialInfo info={slack} icon={faSlack} />
            </SocialSection>
            <Zeit>
              Hosted by{" "}
              <a href="https://vercel.com?utm_source=sandbox">Vercel</a>
            </Zeit>
          </Contact>
          <MailingListWrapper>
            <MailingListHeader>SUBSCRIBE TO OUR MAILING LIST</MailingListHeader>
            <EmailSubscription inputBG={SB_LIGHT_GREY} inputColor={SB_NAVY} />
          </MailingListWrapper>
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
  slack: SocialType.isRequired,
}

export default Footer
