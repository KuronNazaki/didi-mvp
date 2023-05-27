import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const Route = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#36373B"
      d="M10.793 1.333h-5.58c-2.433 0-3.88 1.447-3.88 3.874v5.58c0 2.426 1.447 3.873 3.874 3.873h5.58c2.426 0 3.873-1.447 3.873-3.873v-5.58c.007-2.427-1.44-3.874-3.867-3.874Z"
      opacity={0.4}
    />
    <Path
      fill="#36373B"
      d="m11.567 6.034-1.56 5.027c-.373 1.193-2.046 1.213-2.44.026l-.466-1.38a1.263 1.263 0 0 0-.807-.806l-1.387-.467c-1.18-.393-1.16-2.08.034-2.44l5.026-1.567c.987-.3 1.914.627 1.6 1.607Z"
    />
  </Svg>
);
export default Route;
