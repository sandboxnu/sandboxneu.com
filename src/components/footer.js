import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import styled from "styled-components"
import SquareLogo from "./squareLogo"

const SizedLogo = styled(SquareLogo)`
  height: 40px;
  width: 121px;
`

const GrayBackground = styled.div`
  background: #EAECF0;
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
