import React from 'react';
import { number, string } from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

import { getRotation } from 'utils/helpers';
import { DARK_GREY } from 'constants/styles';

const BackArrow = ({ color = DARK_GREY, height = 35, width = 35, direction }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
    <G rotation={getRotation(direction)} origin={`${width / 2}, ${height / 2}`}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6958 5.78133C16.1014 5.37382 16.1014 4.71313 15.6958 4.30563C15.2903 3.89812 14.6328 3.89812 14.2272 4.30563L7.30416 11.2621C6.89861 11.6697 6.89861 12.3303 7.30416 12.7379L14.2272 19.6944C14.6328 20.1019 15.2903 20.1019 15.6958 19.6944C16.1014 19.2869 16.1014 18.6262 15.6958 18.2187L9.50707 12L15.6958 5.78133Z"
        fill={color}
      />
    </G>
  </Svg>
);

BackArrow.propTypes = {
  color: string,
  height: number,
  width: number,
  direction: string,
};

export default BackArrow;
