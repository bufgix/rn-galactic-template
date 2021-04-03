import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgRight(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#Right_svg__clip0)">
        <Path d="M23 22H1a1 1 0 000 2h22a1 1 0 000-2zM23 16.5H4.5a1 1 0 000 2H23a1 1 0 000-2zM23 11H1a1 1 0 000 2h22a1 1 0 000-2zM23 5.5H4.5a1 1 0 000 2H23a1 1 0 100-2zM1 2h22a1 1 0 100-2H1a1 1 0 000 2z" />
      </G>
      <Defs>
        <ClipPath id="Right_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgRight;
