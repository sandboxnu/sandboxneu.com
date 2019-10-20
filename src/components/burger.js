import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default class Burger extends React.Component {
  render() {
    return (
      <ul>
        {this.props.pages.map(p => (
          <ListLink to={p.route}>{p.name}</ListLink>
        ))}
      </ul>
    )
  }
}
