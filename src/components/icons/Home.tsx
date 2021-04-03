import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgHome(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M16 .997H8a1.5 1.5 0 00-1.5 1.5v19a1.5 1.5 0 001.5 1.5h8a1.5 1.5 0 001.5-1.5v-19a1.5 1.5 0 00-1.5-1.5zM3 2.497H1.5a1.5 1.5 0 00-1.5 1.5v16a1.5 1.5 0 001.5 1.5H3a1.5 1.5 0 001.5-1.5v-16a1.5 1.5 0 00-1.5-1.5zM22.5 2.497H21a1.5 1.5 0 00-1.5 1.5v16a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 001.5-1.5v-16a1.5 1.5 0 00-1.5-1.5z" />
    </Svg>
  );
}

export default SvgHome;
