import { keyframes } from "styled-components"
/**
 * This function generates the keyframes for an individual slide-in of the
 * cascading slide-in animation.
 * The mental model to use with this function is to see the whole cascade
 * as a single animation. That way, you can accurately determine what percent
 * through that animation you want a certain FadeInSlideUp to happen at.
 * @param {*} percent percent through the total animation to finish this motion
 * @param {*} slideLength y-value to slide upwards by
 */
export const FadeInSlideUp = (percent, slideLength = "15px") => {
  // TODO research if percent can be higher than 100 for CSS keyframes
  let lowPercent
  if (percent < 0.3) {
    lowPercent = 0
  } else {
    lowPercent = percent - 0.3 // animation will last 20% of allotted time
  }

  return keyframes`
    0% {
      opacity: 0;
      transform: translate(0, ${slideLength});
    }

    ${Math.round(lowPercent * 100)}% {
      opacity: 0;
      transform: translate(0, ${slideLength});
    }

    ${Math.round(percent * 100)}% {
      opacity: 1;
      transform: translate(0, 0);
    }

    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  `
}
