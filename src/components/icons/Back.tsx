import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgBack(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M12.567 1.258A10.822 10.822 0 002.818 8.4a.25.25 0 01-.27.163l-1.69-.254a.514.514 0 00-.485.213.5.5 0 00-.02.53l2.678 4.7a.5.5 0 00.786.107l3.77-3.746a.5.5 0 00-.279-.85l-1.715-.256a.25.25 0 01-.192-.35 8.259 8.259 0 117.866 11.59 1.25 1.25 0 00.045 2.5h.047a10.749 10.749 0 0010.414-11.142A10.752 10.752 0 0012.567 1.26v-.002z" />
    </Svg>
  );
}

export default SvgBack;
