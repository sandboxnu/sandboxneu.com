export const SB_LIGHT_BLUE = "#BBE4ED"
export const SB_NAVY = "#2A426B"
export const SB_ORANGE = "#FEB729"
export const SB_YELLOW = "#FEE781"

export const SB_LIGHT_BLUE_RGBA = a => `rgba(187, 228, 237, ${a})`
export const SB_NAVY_RGBA = a => `rgba(42, 66, 107, ${a})`
export const SB_ORANGE_RGBA = a => `rgba(254, 183, 41, ${a})`
export const SB_YELLOW_RGBA = a => `rgba(254, 231, 129, ${a})`

// https://css-tricks.com/snippets/javascript/lighten-darken-color/
export const lightenDarkenColor = (col, amt) => {
  var usePound = false

  if (col[0] === "#") {
    col = col.slice(1)
    usePound = true
  }

  var num = parseInt(col, 16)

  var r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  var b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  var g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16)
}
