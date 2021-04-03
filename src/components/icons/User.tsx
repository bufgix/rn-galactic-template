import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgUser(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M12 12.5a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 01-4-4 3.886 3.886 0 01.294-1.47.255.255 0 01.152-.143.249.249 0 01.208.023 9.572 9.572 0 007.025 1.126.25.25 0 01.3.215c.012.083.019.166.021.249a4 4 0 01-4 4zM12 13.5A9.51 9.51 0 002.5 23a.5.5 0 00.5.5h18a.5.5 0 00.5-.5 9.51 9.51 0 00-9.5-9.5z" />
    </Svg>
  );
}

export default SvgUser;
