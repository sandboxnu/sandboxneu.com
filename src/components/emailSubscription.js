import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"
import {
  SB_SALMON,
  SB_LIGHT_SALMON,
  SB_SALMON_RGBA,
  SB_NAVY_RGBA,
  lightenDarkenColor,
} from "@colors"

const Form = styled.form``
const InputField = styled.input`
    color: white !important;
    display: inline-block;
    border: 3px solid ${SB_SALMON};
    background-color: ${SB_SALMON_RGBA(0.5)} !important;
    width: 500px;
    padding: 5px 10px;
    font-family: Andale Mono, monospace;

    &::placeholder {
        color: white;
    }

    &:focus {
        outline: none;
    }
}
`
const Submit = styled.button`
  display: inline-block;
  color: white;
  background-color: ${SB_SALMON};
  border: 3px solid ${SB_SALMON};
  border-left: none;
  padding-top: 4px;
  padding-bottom: 4px;
  font-style: italic;
  transition: background 0.2s ease-out;
  font-size: 18px;

  &:hover {
    background-color: ${lightenDarkenColor(SB_SALMON, 30)};
  }

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
`

const Response = styled.span`
  display: block;
  background-color: ${SB_NAVY_RGBA(0.8)};
  padding: 5px 10px;
  color: white;
  width: fit-content;
  border-radius: 5px;
  margin-top: 4px;
  font-size: 18px;

  & > a {
    color: white;
  }
`

const EmailSubscription = () => {
  const [email, setEmail] = useState("")
  const [result, setResult] = useState("")

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email).then(data => {
      setResult(data)
    })
  }

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <InputField
        type="text"
        id="mail"
        name="email"
        onChange={handleEmailChange}
        placeholder="subscribe to our mailing list"
        required
      />
      <Submit type="submit">subscribe</Submit>
      {result && <Response dangerouslySetInnerHTML={{ __html: result.msg }} />}
    </Form>
  )
}

export default EmailSubscription
