import React from "react"
import shovelUrl from "../images/white_shovel.svg"

const Logo = ({ size = "20px" }) => (
  <object
    type="image/svg+xml"
    data={shovelUrl}
    style={{
      height: size,
      width: size,
    }}
  />
)

export default Logo
