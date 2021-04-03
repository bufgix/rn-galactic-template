import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgShare(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#Share_svg__clip0)">
        <Path d="M20.5 9a2 2 0 00-2-2h-3.25a.25.25 0 00-.25.25v1.5a.25.25 0 00.25.25H18a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-12A.5.5 0 016 9h2.75A.25.25 0 009 8.749v-1.5A.25.25 0 008.748 7H5.5a2 2 0 00-2 2v13a2 2 0 002 2h13a2 2 0 002-2V9z" />
        <Path d="M10.5 11a1.5 1.5 0 103 0V5.75a.25.25 0 01.25-.25h1.75a1 1 0 00.7-1.708l-3.5-3.5a1 1 0 00-1.414 0l-3.5 3.5A1 1 0 008.5 5.5h1.75a.25.25 0 01.25.25V11z" />
      </G>
      <Defs>
        <ClipPath id="Share_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgShare;
