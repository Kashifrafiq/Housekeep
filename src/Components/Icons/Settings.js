import React from 'react'
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg'

const SettingsIcon = props => (
  <View
    style={[
      StyleSheet.absoluteFill,
      { alignItems: 'center', justifyContent: 'center' },
    ]}>
    <Svg width={25} height={25} viewBox="0 0 14 15" fill="none" {...props}>
      <Path
        d="M12.387 7.23c.018.347.018.693 0 1.04l.847.492c.292.182.401.428.329.738a6.845 6.845 0 0 1-1.778 3.035c-.237.237-.501.274-.793.11l-.848-.493c-.291.2-.592.374-.902.52v.984c0 .347-.164.565-.492.656a6.704 6.704 0 0 1-3.5 0c-.328-.09-.492-.31-.492-.656v-.984a6.407 6.407 0 0 1-.903-.52l-.847.493c-.292.164-.556.127-.793-.11A6.845 6.845 0 0 1 .438 9.5c-.073-.31.036-.556.328-.738l.847-.492V7.23l-.847-.492C.474 6.556.365 6.31.437 6a6.844 6.844 0 0 1 1.778-3.035c.237-.237.501-.274.793-.11l.847.493c.292-.2.593-.374.903-.52v-.984c0-.347.164-.565.492-.657a6.704 6.704 0 0 1 3.5 0c.328.092.492.31.492.657v.984c.31.146.61.32.902.52l.848-.493c.292-.164.556-.127.793.11A6.845 6.845 0 0 1 13.562 6c.073.31-.036.556-.328.738l-.847.492Zm-1.45 1.723c.11-.565.165-.966.165-1.203 0-.237-.055-.638-.165-1.203l1.204-.684a5.716 5.716 0 0 0-.93-1.613l-1.203.684a9.763 9.763 0 0 0-.711-.547 2.137 2.137 0 0 0-.52-.301c-.182-.091-.464-.21-.847-.356V2.363a5.34 5.34 0 0 0-1.86 0V3.73c-.528.201-.902.365-1.12.493-.201.109-.52.346-.958.71L2.79 4.25a5.718 5.718 0 0 0-.93 1.613l1.204.684c-.11.565-.165.966-.165 1.203 0 .237.055.638.164 1.203l-1.203.684c.22.583.529 1.12.93 1.613l1.203-.684c.438.365.757.611.957.739.219.11.593.264 1.121.465v1.367a5.339 5.339 0 0 0 1.86 0V11.77c.383-.146.665-.256.847-.329.183-.09.356-.191.52-.3.164-.128.4-.32.71-.575l1.204.684c.401-.492.71-1.03.93-1.613l-1.204-.684ZM5.141 5.891c.51-.51 1.13-.766 1.859-.766.73 0 1.349.255 1.86.766.51.51.765 1.13.765 1.859 0 .73-.255 1.349-.766 1.86-.51.51-1.13.765-1.859.765-.73 0-1.349-.255-1.86-.766a2.531 2.531 0 0 1-.765-1.859c0-.73.255-1.349.766-1.86Zm.93 2.789c.255.255.564.383.929.383.365 0 .674-.128.93-.383.255-.256.383-.565.383-.93 0-.365-.128-.674-.383-.93A1.266 1.266 0 0 0 7 6.437c-.365 0-.674.128-.93.383a1.266 1.266 0 0 0-.383.93c0 .365.128.674.383.93Z"
        fill={props.color}
      />
    </Svg>
  </View>
)

export default SettingsIcon