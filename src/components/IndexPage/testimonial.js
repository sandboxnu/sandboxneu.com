import React from "react"
import PropTypes from "prop-types"
import Body from "styles/Body"
import { lightenDarkenColor, SB_NAVY } from "@colors"
import Section from "styles/Section"
import styled from "styled-components"

const SectionPad = styled(Section)`
  margin-top: -40px;
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

const ButtonContainer = styled.div`
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.a`
  background-color: ${SB_NAVY};
  transition: background-color 0.3s;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.15em;
  color: #fff;
  font-size: 1.2em;
  border: none;
  cursor: pointer;
  padding: 0.7em 2em;
  margin: auto;
  display: block;

  &:hover {
    background-color: ${lightenDarkenColor(SB_NAVY, 20)};
  }
`

const Testimonial = ({ quote, author, role, email, form }) => (
  <SectionPad>
    <Content>
      <Body dangerouslySetInnerHTML={{ __html: quote }} />
      <AuthorInfo>{author}</AuthorInfo>
      <AuthorInfo>{role}</AuthorInfo>
      <br />
      <Body>
        Think you could take advantage of computation in your research? Email us
        at <a href={`mailto:${email}`}>{email}</a> or fill out our form - it
        only takes a few minutes!
      </Body>
      <ButtonContainer>
        <Button href={form}>Work with us</Button>
      </ButtonContainer>
    </Content>
  </SectionPad>
)

Testimonial.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  role: PropTypes.string,
  email: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
}

export default Testimonial
