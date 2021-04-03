import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgFontChanger(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#FontChanger_svg__clip0)">
        <Path d="M23 19.99a1 1 0 000-2h-.981a.251.251 0 01-.237-.17L17.108 4.139a1.14 1.14 0 00-2.216 0L10.218 17.82a.251.251 0 01-.237.17H9a1 1 0 000 2h4a1 1 0 000-2h-.377a.247.247 0 01-.2-.1.25.25 0 01-.034-.226l1.2-3.5a.25.25 0 01.237-.169h4.362a.252.252 0 01.237.169l1.2 3.5a.25.25 0 01-.236.331H19a1 1 0 000 2l4-.005zm-8.327-8a.25.25 0 01-.247-.214.25.25 0 01.01-.117l1.327-3.884a.25.25 0 01.473 0l1.327 3.884a.25.25 0 01-.236.331h-2.654zM6.25 18.489h-1.5a.25.25 0 01-.25-.25V15.99a1 1 0 10-2 0v2.249a.25.25 0 01-.25.25H.75a.75.75 0 00-.6 1.2l2.75 3.667a.75.75 0 001.2 0l2.75-3.666a.751.751 0 00-.6-1.201zM6.85 4.29L4.1.623a.778.778 0 00-1.2 0L.15 4.29a.75.75 0 00.6 1.2h1.5a.25.25 0 01.25.25v2.25a1 1 0 002 0V5.74a.25.25 0 01.25-.25h1.5a.75.75 0 00.6-1.2z" />
      </G>
      <Defs>
        <ClipPath id="FontChanger_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgFontChanger;
