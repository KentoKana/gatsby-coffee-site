import fadeIn from "react-animations/lib/fadeIn"
import fadeInLeft from "react-animations/lib/fadeInLeft"
import fadeInRight from "react-animations/lib/fadeInRight"
import slideInUp from "react-animations/lib/slideInUp"

import Radium from "radium"

const animations = {
  fadeIn: {
    animation: "x 0.5s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
  fadeInLeft: {
    animation: "x 0.5s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
  fadeInRight: {
    animation: "x 0.5s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
  },
  slideInUp: {
    animation: "x 0.3s",
    animationName: Radium.keyframes(slideInUp, "slideInUp"),
  },
}

export default animations
