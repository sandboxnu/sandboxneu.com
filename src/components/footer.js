import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import SquareLogo from "./squareLogo"
import Img from "gatsby-image"

const SizedLogo = styled(SquareLogo)`
  height: 40px;
  width: 121px;
`

const Footer = ({ pages, email, facebook, linkedin }) => (
  <footer>
    <SizedLogo />
    <Img fixed={facebook.icon.childImageSharp.fixed} />
    Footer
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
