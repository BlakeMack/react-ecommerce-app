export function gridSize(i) {
  if (i % 3 === 0) {
    return ("wide")
  } else if (i % 4 === 0) {
    return ("tall")
  } else {
    return ('')
  }
}
