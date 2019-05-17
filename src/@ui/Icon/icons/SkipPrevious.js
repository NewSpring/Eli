import React from 'react';
import PropTypes from 'prop-types';
import { Svg } from '../../Svg';
import makeIcon from './makeIcon';

const Icon = makeIcon(({ size = 32, fill, ...otherProps } = {}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...otherProps}>
    <Svg.Path
      d="M11.846 4.168v15.67c0 1.238-.772 1.534-1.725.658l-7.4-6.805c-.95-.87-.96-2.3-.01-3.18l7.44-6.97c.95-.88 1.71-.59 1.71.64zm-1.625 0c0-.118-.01-.176 0-.165.07.155.24.328.52.43.28.103.53.09.7.026.02-.01-.04.03-.13.11l-7.44 6.98c-.32.3-.31.78.01 1.08l7.4 6.8c.09.08.14.11.13.11-.162-.06-.41-.07-.68.03-.26.1-.43.27-.5.42-.002.01.008-.05.008-.16V4.17zm11.78 0v15.67c0 1.238-.75 1.523-1.69.633l-7.47-7.12c-.93-.89-.91-2.31.05-3.18l7.38-6.67c.95-.87 1.73-.57 1.73.67zm-1.62 0c0-.115-.01-.17 0-.16.07.148.24.313.49.413.26.1.51.1.67.04.02 0-.03.03-.12.11l-7.38 6.66c-.32.29-.33.78-.012 1.08l7.47 7.13c.09.09.14.12.125.11-.173-.07-.433-.09-.712.02-.274.1-.45.28-.52.44-.004.01.006-.04.006-.16V4.17z"
      fill={fill}
    />
  </Svg>
));

Icon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
};

export default Icon;
