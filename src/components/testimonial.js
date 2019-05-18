import React from "react"
import PropTypes from "prop-types"
import Body from "styles/Body"
import { HeaderLineBelow } from "styles/Header"
import Section from "styles/Section"
import styled from "styled-components"

const Content = styled.div`
  max-width: 600px;
  margin: 0px auto;
`

const AuthorInfo = styled(Body)`
  text-align: right;
  font-style: italic;
`

const B = styled.span`
  font-weight: bold;
`

const I = styled.span`
  font-style: italic;
`

const Testimonial = ({ quote, author, role }) => (
  <Section>
    <HeaderLineBelow>Work with us</HeaderLineBelow>
    <Content>
      <Body>
        “The <B>brilliant</B> and <B>diligent</B> engineers of Sandbox are,
        without exaggeration, <B>indispensable</B> to my research. I came to
        them with a challenging problem, and they delivered a solution that is{" "}
        <B>twice as professional</B> as I'd hoped, in <B>half the time</B> I'd
        expected. To any scientists in need of computational expertise:{" "}
        <I>look no further than Sandbox.</I>”
      </Body>
      <AuthorInfo>Dr. David E. Melnikoff</AuthorInfo>
      <AuthorInfo>Yale University</AuthorInfo>
      <br />
      <Body>
        Think you could take advantage of computation in your research? Please
        reach out to us at research@sandboxneu.com
      </Body>
    </Content>
  </Section>
)

export default Testimonial
