import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgCheck(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#Check_svg__clip0)">
        <Path d="M23.374.287a1.5 1.5 0 00-2.093.345L7.246 20.2 2.56 15.511A1.502 1.502 0 000 16.571a1.5 1.5 0 00.439 1.061l5.935 5.934a1.524 1.524 0 002.279-.186l15.066-21a1.5 1.5 0 00-.345-2.093z" />
      </G>
      <Defs>
        <ClipPath id="Check_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgCheck;
