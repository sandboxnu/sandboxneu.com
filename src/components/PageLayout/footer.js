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
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  SB_NAVY,
  SB_ORANGE,
  SB_SALMON,
  SB_LIGHT_GREY,
  SB_SALMON_RGBA,
  lightenDarkenColor,
} from "@colors"
import banner from "images/sandbox-banner-blue.svg"
import EmailSubscription from "../emailSubscription"

const GrayBackground = styled.div`
  background: #eaecf0;
`

const Navigate = styled.div`
  color: ${SB_NAVY};
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  margin-top: 15px;
  @media (min-width: 1000px) {
    margin-right: 8px;
  }
`

const Header = styled.span`
  letter-spacing: 0.15em;
`

const Contact = styled.div`
  color: ${SB_NAVY};
  padding-left: 0;
  justify-content: center;
  display: flex;
  height: 25px;
  @media (min-width: 1000px) {
    justify-content: flex-end;
  }
`

const FlexSection = styled(Section)`
  padding-top: 50px;
  padding-bottom: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
const FooterInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 750px) {
    float: right;
  }
`

const SocialSection = styled.div`
  padding-top: 10px;
  display: flex;
  margin-left: 12px;
  :last-child:after {
    margin-right: 0;
  }
  @media (min-width: 1000px) {
    margin-left: 0;
  }
`

const SocialLogo = styled(FontAwesomeIcon)`
  color: ${props => props.color};
  max-width: 20px;
  transition: color 0.3s;
  font-size: 20px;

  &:hover {
    color: ${SB_NAVY};
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

  &:hover {
    cursor: pointer;
  }
`

const StyledLink = styled.a`
  display: block;
  padding-top: 10px;
  text-decoration: none;
  color: #bbbdc0;
  transition: color 0.3s;
  padding-right: 5px;
  &:hover {
    color: ${SB_NAVY};
  }
  :after {
    content: " |";
    padding-left: 5px;
    color: #bbbdc0;
  }
  :last-child:after {
    content: "";
  }
`

const MailingListWrapper = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: block;
    padding-left: 64px;

    * > input {
      border: none;
      font-size: 12px;
      width: 300px;
      box-shadow: none;
    }

    * > span {
      background-color: ${SB_SALMON_RGBA(0.8)};
    }
    * > button {
      background-color: ${SB_SALMON};
      border: 3px solid ${SB_SALMON};
      border-left: none;
      font-size: 14px;
      padding-top: 2px;
      padding-bottom: 5px;

      &:hover {
        background-color: ${lightenDarkenColor(SB_SALMON, 30)};
        border: 3px solid ${lightenDarkenColor(SB_SALMON, 30)};
        border-left: none;
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
  padding-top: 10px;
  display: block;
  color: ${SB_NAVY};
  font-size: 16px;
`

const FooterLogo = () => <SizedLogo data={banner}>Banner</SizedLogo>

const SocialInfo = ({ info, icon }) => {
  return (
    <StyledSocial>
      <a href={info}>
        <SocialLogo icon={icon} color={"#bbbdc0"} />
      </a>
    </StyledSocial>
  )
}

const InfoLink = props => {
  return <StyledLink href={props.dest}>{props.children}</StyledLink>
}

const HostedBy = styled.div`
  background-color: #c4c4c4;
  padding: 5px 12px;
  border-radius: 5px;
  color: white;
  font-family: Andale Mono, monospace;
  font-size: 14px;
  width: fit-content;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  display: inline-flex;

  @media (min-width: 1000px) {
    margin-right: 15px;
  }
`

const Vercel = styled.a`
  color: white;
  font-family: Andale Mono, monospace;
  font-size: 14px;
  transition: 0.2s ease-out;

  &:hover {
    color: ${SB_NAVY};
  }
`
const Info = styled.div``

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
        <MailingListWrapper>
          <MailingListHeader>Subscribe to Our Newsletter</MailingListHeader>
          <EmailSubscription inputBG={SB_LIGHT_GREY} inputColor={SB_NAVY} />
        </MailingListWrapper>
        <Info>
          <Contact>
            <SocialSection>
              <SocialInfo info={`mailto:${email}`} icon={faEnvelope} />
              <SocialInfo info={facebook.url} icon={faFacebookF} />
              <SocialInfo info={linkedin.url} icon={faLinkedin} />
              <SocialInfo info={instagram.url} icon={faInstagram} />
              <SocialInfo info={github.url} icon={faGithub} />
              <SocialInfo info={slack.url} icon={faSlack} />
            </SocialSection>
          </Contact>
          <FooterInfo>
            <Navigate>
            {pages.map(p => (  <InfoLink key={p.name} dest={p.route}>{p.name}</InfoLink>))}
            </Navigate>
            <HostedBy>
              Sandbox &copy; 2021 hosted by&nbsp;
              <Vercel href="https://vercel.com?utm_source=sandbox">
                Vercel
              </Vercel>
            </HostedBy>
          </FooterInfo>
        </Info>
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
