// OLD COLORS
export const SB_LIGHT_BLUE = "#BBE4ED"

export const SB_LIGHT_BLUE_RGBA = a => `rgba(187, 228, 237, ${a})`

// CURRENT COLORS
export const SB_NAVY = "#2A426B"
export const SB_ORANGE = "#FEB729"
export const SB_SALMON = "#FA8072"
export const SB_LIGHT_NAVY = "#B2B9C4"
export const SB_Light_ORANGE = "#FFE9C0"
export const SB_LIGHT_SALMON = "#FED9D5"
export const SB_LIGHT_GREY = "#EAECF0"

export const SB_NAVY_RGBA = a => `rgba(42, 66, 107, ${a})`
export const SB_ORANGE_RGBA = a => `rgba(254, 183, 41, ${a})`
export const SB_SALMON_RGBA = a => `rgba(250, 128, 114, ${a})`
export const SB_LIGHT_NAVY_RGBA = a => `rgba(178, 185, 196, ${a})`
export const SB_LIGHT_ORANGE_RGBA = a => `rgba(255, 233, 192, ${a})`
export const SB_LIGHT_SALMON_RGBA = a => `rgba(254, 217, 213, ${a})`
export const SB_LIGHT_GREY_RGBA = a => `rgba(234, 236, 240, ${a})`

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
