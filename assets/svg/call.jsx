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
      d="M17.685 21.315 12.78 26.22a36.84 36.84 0 0 1-1.575-1.485A42.62 42.62 0 0 1 7.02 19.83c-1.23-1.71-2.22-3.42-2.94-5.115C3.36 13.005 3 11.37 3 9.81c0-1.02.18-1.995.54-2.895C3.9 6 4.47 5.16 5.265 4.41 6.225 3.465 7.275 3 8.385 3c.42 0 .84.09 1.215.27.39.18.735.45 1.005.84l3.48 4.905c.27.375.465.72.6 1.05.135.315.21.63.21.915 0 .36-.105.72-.315 1.065-.195.345-.48.705-.84 1.065l-1.14 1.185a.803.803 0 0 0-.24.6c0 .12.015.225.045.345.045.12.09.21.12.3.27.495.735 1.14 1.395 1.92.675.78 1.395 1.575 2.175 2.37a35.39 35.39 0 0 0 1.59 1.485Z"
      opacity={0.4}
    />
    <Path
      fill="#8A8A8E"
      d="M32.954 27.494c0 .42-.075.855-.225 1.275-.045.12-.09.24-.15.36a6.19 6.19 0 0 1-1.02 1.53c-.735.81-1.545 1.395-2.46 1.77-.015 0-.03.015-.045.015a7.577 7.577 0 0 1-2.88.555c-1.53 0-3.165-.36-4.89-1.095-1.725-.735-3.45-1.725-5.16-2.97-.585-.435-1.17-.87-1.725-1.335l4.905-4.905c.42.315.795.555 1.11.72.075.03.165.075.27.12.12.045.24.06.375.06.255 0 .45-.09.615-.255l1.14-1.125c.375-.375.735-.66 1.08-.84.345-.21.69-.315 1.065-.315.285 0 .585.06.915.195.33.135.675.33 1.05.585l4.965 3.525c.39.27.66.585.825.96.15.375.24.75.24 1.17Z"
    />
  </Svg>
)
export default SvgComponent