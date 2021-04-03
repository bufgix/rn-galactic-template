import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgClose(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#Close_svg__clip0)">
        <Path d="M14.3 12.179a.25.25 0 010-.354l9.263-9.262A1.501 1.501 0 0021.439.442L12.177 9.7a.25.25 0 01-.354 0L2.56.442A1.5 1.5 0 10.439 2.563l9.26 9.262a.252.252 0 01.055.273.25.25 0 01-.054.081L.439 21.442a1.501 1.501 0 002.122 2.121l9.262-9.263a.25.25 0 01.354 0l9.262 9.263a1.5 1.5 0 102.122-2.121L14.3 12.179z" />
      </G>
      <Defs>
        <ClipPath id="Close_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgClose;
