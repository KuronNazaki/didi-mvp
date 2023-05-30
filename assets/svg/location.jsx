import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <Path
      fill="#8A8A8E"
      d="M30.932 12.675c-1.575-6.93-7.62-10.05-12.93-10.05h-.015c-5.295 0-11.355 3.105-12.93 10.035-1.755 7.74 2.985 14.295 7.275 18.42a8.154 8.154 0 0 0 5.67 2.295c2.04 0 4.08-.765 5.655-2.295 4.29-4.125 9.03-10.665 7.275-18.405Z"
      opacity={0.4}
    />
    <Path
      fill="#8A8A8E"
      d="M18.002 20.19a4.725 4.725 0 1 0 0-9.45 4.725 4.725 0 0 0 0 9.45Z"
    />
  </Svg>
)
export default SvgComponent
