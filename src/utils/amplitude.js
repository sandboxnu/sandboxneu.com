import a from "amplitude-js/amplitude"

export const amplitudeInit = () => {
  a.getInstance().init("b03da34a4b82cd670be2217a0d5e0938")
}

export const amplitudeLogEvent = () => {
  a.getInstance().logEvent("test 1")
}
