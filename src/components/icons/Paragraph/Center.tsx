import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgCenter(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M22 23.748H2a1.25 1.25 0 110-2.5h20a1.25 1.25 0 110 2.5zM22 2.748H2a1.25 1.25 0 010-2.5h20a1.25 1.25 0 110 2.5zM20 9.748H4a1.25 1.25 0 010-2.5h16a1.25 1.25 0 110 2.5zM17.5 16.748h-11a1.25 1.25 0 110-2.5h11a1.25 1.25 0 110 2.5z" />
    </Svg>
  );
}

export default SvgCenter;
