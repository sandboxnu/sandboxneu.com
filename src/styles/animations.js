import { keyframes } from "styled-components"

/**
 * This function generates the keyframes for an individual slide-in of the
 * cascading slide-in animation.
 * The mental model to use with this function is to see the whole cascade
 * as a single animation. That way, you can accurately determine what percent
 * through that animation you want a certain FadeInSlideUp to happen at.
 * @param {*} percent percent through the total animation to finish this motion
 * @param {*} slideLength CSS y-value to slide upwards by
 * @param {*} images whether or not the moving elements contain images
 */
export const FadeInSlideUp = (
  percent,
  slideLength = "15px",
  images = false
) => {
  // TODO research if percent can be higher than 100 for CSS keyframes
  const delay = images ? 0.1 : 0 // delay so that images can load a little
  const percentOfTotal = 0.3 // each sub-animation will last 30% of total
  let lowPercent
  if (percent < percentOfTotal) {
    lowPercent = 0
  } else {
    lowPercent = percent - percentOfTotal
  }

  const midPercent = percent - percentOfTotal / 2

  return keyframes`
    0% {
      opacity: 0;
      transform: translate(0, ${slideLength});
    }

    ${Math.round((lowPercent * 0.9 + delay) * 100)}% {
      opacity: 0;
      transform: translate(0, ${slideLength});
    }

    ${Math.round((midPercent * 0.9 + delay) * 100)}% {
      opacity: 0;
      transform: translate(0, ${slideLength * 0.3});
    }

    ${Math.round((percent * 0.9 + delay) * 100)}% {
      opacity: 1;
      transform: translate(0, 0);
    }

    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  `
}
