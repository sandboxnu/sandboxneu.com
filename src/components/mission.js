import React from "react"
import PropTypes from "prop-types"
import Section from "../styles/Section"
import Header from "../styles/Header"

const Mission = ({ title, principles }) => (
  <Section>
    <Header>Ethics as a Mission</Header>
    <p>
      We'll make some big ol' huge mountains! There's too many complicated
      things in our life already. All you're worried about is this nice outside
      shape. Always follow the angles. Don't just cover it all up -- leave these
      spots!
    </p>
  </Section>
)

Mission.propTypes = {
  title: PropTypes.string.isRequired,
  principles: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Mission
