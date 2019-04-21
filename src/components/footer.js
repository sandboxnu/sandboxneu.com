import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Logo from "./logo"
import Img from "gatsby-image"

const GrayBackground = styled.div`
  background: #EAECF0;
`

const SizedLogo = styled(Logo)`
  height: 72.24px;
  width: 236px;
  position: absolute;
  left: 9.03%;
  right: 74.58%;
  top: 23.75%;
  bottom: 52.17%;
`

const Footer = ({ pages, email, facebook, linkedin }) => (
  <footer>
    <GrayBackground>
      <SizedLogo />
      <Img fixed={facebook.icon.childImageSharp.fixed} />
      Footer
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
