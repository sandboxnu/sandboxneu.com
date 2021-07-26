import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { SB_SALMON, SB_NAVY_RGBA, lightenDarkenColor } from "@colors"

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const InputField = styled.input`
    color: #000;
    text-decoration: none;
    display: inline-block;
    box-shadow: 0 3px 10px 0 #aaa;
    border: 3px solid #fff;
    border-radius: 30px 0 0 30px;
    width: 500px;
    padding: 5px 10px;
    font-family: Andale Mono, monospace;

    &::placeholder {
        color: #B6B6B6;
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
  border-radius: 0 30px 30px 0;
  padding: 3.7px 10px 4.3px 10px;
  font-style: italic;
  transition: background 0.2s ease-out;
  font-size: 18px;

  &:hover {
    background-color: ${lightenDarkenColor(SB_SALMON, 30)};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
`

const Main = styled.div`
  display: flex;
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

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addToMailchimp(email).then((data) => {
      setResult(data)
    })
  }

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Main>
        <InputField
          type="text"
          id="mail"
          name="email"
          onChange={handleEmailChange}
          placeholder="example@mail.com"
          required
        />
        <Submit type="submit">subscribe</Submit>
      </Main>
      {result && <Response dangerouslySetInnerHTML={{ __html: result.msg }} />}
    </Form>
  )
}

export default EmailSubscription
