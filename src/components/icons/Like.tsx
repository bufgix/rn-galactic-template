import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgLike(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M23.3 5.076a6.583 6.583 0 00-10.446-1.71L12 4.147l-.827-.753a6.522 6.522 0 00-5.688-1.806A6.472 6.472 0 00.7 5.075a6.4 6.4 0 001.21 7.469l9.373 9.656a.997.997 0 001.434 0l9.36-9.638A6.414 6.414 0 0023.3 5.076z" />
    </Svg>
  );
}

export default SvgLike;
