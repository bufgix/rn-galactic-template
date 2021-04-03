import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgApps(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M8.25 11.25h7.5A1.752 1.752 0 0017.5 9.5V2A1.752 1.752 0 0015.75.25h-7.5A1.752 1.752 0 006.5 2v7.5a1.752 1.752 0 001.75 1.75zM8.75 5V4a1.5 1.5 0 011.5-1.5h1a.5.5 0 010 1h-1a.5.5 0 00-.5.5v1a.5.5 0 11-1 0zM9.25 12.75h-7.5A1.752 1.752 0 000 14.5V22a1.752 1.752 0 001.75 1.75h7.5A1.752 1.752 0 0011 22v-7.5a1.752 1.752 0 00-1.75-1.75zm-4 2.75a.5.5 0 01-.5.5h-1a.5.5 0 00-.5.5v1a.5.5 0 01-1 0v-1a1.5 1.5 0 011.5-1.5h1a.5.5 0 01.5.5zM22.25 12.75h-7.5A1.752 1.752 0 0013 14.5V22a1.752 1.752 0 001.75 1.75h7.5A1.752 1.752 0 0024 22v-7.5a1.752 1.752 0 00-1.75-1.75zm-4 2.75a.5.5 0 01-.5.5h-1a.5.5 0 00-.5.5v1a.5.5 0 01-1 0v-1a1.5 1.5 0 011.5-1.5h1a.5.5 0 01.5.5z" />
    </Svg>
  );
}

export default SvgApps;
