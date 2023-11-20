import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'

const HomeIcon = props => (
  <View
    style={[
      StyleSheet.absoluteFill,
      { alignItems: 'center', justifyContent: 'center' },
    ]}>
    <Svg width={30} height={30} viewBox="0 0 16 13" fill="none" {...props}>
      <Path
        d="M15.71 6.504a.44.44 0 0 1 .165.355c0 .11-.037.2-.11.274l-.273.328a.414.414 0 0 1-.328.164c-.11 0-.2-.036-.273-.11l-.766-.6V12a.779.779 0 0 1-.273.602.779.779 0 0 1-.602.273h-3.5a.864.864 0 0 1-.629-.273.818.818 0 0 1-.246-.602V9.156h-1.75V12a.779.779 0 0 1-.273.602.779.779 0 0 1-.602.273h-3.5a.864.864 0 0 1-.629-.273.818.818 0 0 1-.246-.602V6.914l-.738.602a.47.47 0 0 1-.301.109.414.414 0 0 1-.328-.164l-.274-.328a.438.438 0 0 1-.109-.274.44.44 0 0 1 .164-.355L7.016.98A1.52 1.52 0 0 1 8 .625c.365 0 .693.118.984.355l3.829 3.145V2.594c0-.146.072-.219.218-.219h.875c.146 0 .219.073.219.219v2.625l1.586 1.285Zm-2.898 5.059V5.82L8 1.883 3.187 5.82v5.742h2.626V8.72c0-.237.082-.438.246-.602a.865.865 0 0 1 .628-.273h2.625c.237 0 .438.09.602.273a.779.779 0 0 1 .274.602v2.844h2.624Z"
        fill={props.color}
      />
    </Svg>
  </View>
)

export default HomeIcon