import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgStyle(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M22.044 0H1.956A1.959 1.959 0 000 1.954v20.088A1.959 1.959 0 001.956 24h20.088A1.959 1.959 0 0024 22.042V1.954A1.959 1.959 0 0022.044 0zM21 22l-18 .04a1 1 0 01-1-1L1.958 3a1 1 0 011-1L21 1.956a1 1 0 011 1V21a1 1 0 01-1 1z" />
      <Path d="M4.5 8.5h15a1 1 0 100-2h-15a1 1 0 000 2zM4.5 13.5h15a1 1 0 000-2h-15a1 1 0 000 2zM4.5 18.5h6a1 1 0 000-2h-6a1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgStyle;
