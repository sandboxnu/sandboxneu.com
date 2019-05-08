import { useEffect } from "react"
import a from "amplitude-js/amplitude"

export const amplitudeInit = () => {
  a.getInstance().init("b03da34a4b82cd670be2217a0d5e0938")
}

export const amplitudeLogEvent = (eventName, props) => {
  a.getInstance().logEvent(eventName, props)
}

export const useAmplitudeLogEvent = eventName => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      amplitudeInit()
      amplitudeLogEvent(eventName, { hostname: window.location.hostname })
    } else {
      console.log(`Amplitude event ${eventName} triggered.`)
    }
  }, [])
}
