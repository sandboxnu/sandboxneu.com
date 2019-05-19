export const capitalize = string => {
  if (typeof string !== "string") {
    console.log("Tring to capitalize a non-string: ", string)
    return "" // don't break when given bad input, but give a useful error
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}
