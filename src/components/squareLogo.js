import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledSVG = styled.svg`
  #Path {
    transition: fill 0.3s;
    fill: ${props => props.fillColor};
  }
  #Shadow {
    transition: fill 0.3s;
    fill: ${props => props.shadowColor};
  }
`

const SquareLogo = ({ size = "20px", color = "white", dropShadow = false }) => {
  const [displayShadow, setDisplayShadow] = useState(false)
  const fillColor = color === "white" ? "#fff" : "#2a426b"
  const shadowColor =
    color === "white" ? "rgb(227, 231, 236)" : "rgb(118, 135, 162)"
  if (displayShadow !== dropShadow) {
    if (!displayShadow) {
      setTimeout(() => setDisplayShadow(dropShadow), 200)
    } else {
      setDisplayShadow(dropShadow)
    }
  }
  return (
    <StyledSVG
      width={size}
      height={size}
      viewBox={`0 0 783 1070`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fillColor={fillColor}
      shadowColor={shadowColor}
    >
      <title>light_blue_shovel</title>
      <defs>
        <filter id="dropshadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="30" id="shovelBlur" />
          <feOffset dx="3" dy="3" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        filter={displayShadow && "url(#dropshadow)"}
      >
        <g id="light_blue_shovel" fillRule="nonzero">
          <path
            d="M0.171631,462.446 L0.171631,459.437 C0.171631,455.811 3.66005,450.955 7.21685,449.108 L249.216,320.243 C258.382,315.386 268.984,320.243 268.984,329.955 C268.984,339.668 268.984,336.659 268.984,362.172 C268.984,367.028 265.427,371.269 261.938,373.116 L94.0165,460.599 L261.938,545.073 C265.495,546.92 268.984,551.161 268.984,555.402 C268.984,580.915 268.984,578.521 268.984,587.618 C268.984,597.331 258.382,602.187 249.216,597.331 L7.21685,472.775 C3.66005,470.928 0.171631,466.071 0.171631,462.446 Z"
            id="Path"
          />
          <path
            d="M513.855,555.402 C513.855,551.161 516.66,546.92 520.901,545.073 L688.139,460.599 L520.901,373.116 C516.66,371.269 513.855,367.028 513.855,362.172 C513.855,336.659 513.855,339.668 513.855,329.955 C513.855,320.243 524.457,315.386 533.623,320.243 L775.622,449.108 C779.111,450.955 782.667,455.811 782.667,459.437 L782.667,462.446 C782.667,466.071 779.111,470.928 775.622,472.775 L533.623,597.331 C524.457,602.187 513.855,597.331 513.855,587.618 C513.855,578.521 513.855,580.915 513.855,555.402 Z"
            id="Path"
          />
          <path
            d="M324.593,1015.19 L146.479,963.613 C143.265,962.655 140.597,960.398 139.092,957.252 C137.587,954.105 137.314,950.343 138.34,946.855 C159.954,875.924 198.669,754.651 215.7,739.671 C235.399,722.366 276.029,729.274 298.464,734.952 C332.801,743.638 376.303,762.79 385.469,788.098 C393.54,810.328 360.708,933.859 340.393,1005.47 C339.436,1008.96 337.179,1011.97 334.237,1013.75 C331.296,1015.53 327.739,1016.08 324.593,1015.19 Z"
            id="Path"
          />
          <path
            d="M320.489,983.791 C319.736,983.586 318.642,982.97 317.684,981.534 C311.528,972.231 316.385,935.637 331.775,875.514 C350.858,801.026 336.289,794.46 292.992,774.897 C291.624,774.282 288.477,772.845 289.093,769.699 C289.298,768.536 290.119,766.621 293.334,766.347 C302.773,765.458 355.646,776.471 363.854,806.088 C369.668,826.881 329.175,965.733 324.524,981.465 C324.045,982.97 322.746,983.996 321.241,983.996 C321.104,983.928 320.831,983.859 320.489,983.791 Z"
            id="Shadow"
            opacity="0.41"
          />
          <path
            d="M438.684,127.696 C416.112,105.124 408.862,69.5558 418.301,36.7922 L426.577,8.33779 C428.219,2.66059 433.828,-0.759412 439.026,0.745388 L594.363,45.7526 C599.629,47.2574 602.502,53.1398 600.86,58.817 L593.952,82.757 C574.321,150.541 493.883,182.963 438.684,127.696 Z M455.237,49.1042 C450.107,77.1482 465.223,104.645 491.01,112.101 C516.797,119.556 544.225,104.44 554.896,77.969 L455.237,49.1042 Z"
            id="Path"
          />
          <path
            d="M339.71,708.139 L297.78,695.964 C294.224,694.938 292.172,691.244 293.198,687.687 L437.18,190.625 C438.206,187.068 441.899,185.016 445.456,186.042 L487.385,198.217 C490.942,199.243 492.994,202.937 491.968,206.493 L347.986,703.556 C346.892,707.113 343.198,709.165 339.71,708.139 Z"
            id="Path"
          />
        </g>
      </g>
    </StyledSVG>
  )
}

SquareLogo.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  dropShadow: PropTypes.bool,
}

export default SquareLogo
