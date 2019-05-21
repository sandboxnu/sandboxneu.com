import React from "react"
import PropTypes from "prop-types"
import Body from "styles/Body"
import { HeaderLineBelow } from "styles/Header"
import Section from "styles/Section"
import styled from "styled-components"

const SectionPad = styled(Section)`
  padding-top: 0px;
`

const Content = styled.div`
  max-width: 600px;
  margin: 0px auto;
`

const AuthorInfo = styled(Body)`
  text-align: right;
  font-style: italic;
`

const Testimonial = ({ quote, author, role }) => (
  <SectionPad>
    <HeaderLineBelow>Work with us</HeaderLineBelow>
    <Content>
      <Body dangerouslySetInnerHTML={{ __html: quote }} />
      <AuthorInfo>{author}</AuthorInfo>
      <AuthorInfo>{role}</AuthorInfo>
      <br />
      <Body>
        Think you could take advantage of computation in your research? Please
        reach out to us at research@sandboxneu.com
      </Body>
    </Content>
  </SectionPad>
)

Testimonial.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  role: PropTypes.string,
}

export default Testimonial
