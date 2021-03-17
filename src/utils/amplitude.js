import { useEffect } from "react"
import a from "amplitude-js"

export const amplitudeInit = () => {
  a.getInstance().init("b03da34a4b82cd670be2217a0d5e0938", null, {
    includeReferrer: true,
  })
}

export const amplitudeLogEvent = (eventName, props = {}) => {
  if (process.env.NODE_ENV !== "development") {
    amplitudeInit()
    a.getInstance().logEvent(eventName, {
      ...props,
      hostname: window.location.hostname,
    })
  } else {
    console.log(`Amplitude event ${eventName} triggered with props:`, props)
  }
}

export const useAmplitudeLogEvent = (eventName, props) => {
  useEffect(() => {
    amplitudeLogEvent(eventName, props)
  }, [])
}
