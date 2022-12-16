import * as React from 'react';
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";


export default function AnimateView (props) {
    const show = props.in;
    const [hidden, setHidden] = React.useState(!show);
    const offset = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
          transform: [{ translateX: offset.value * 255 }],
        };
      });

    React.useEffect();
    return (!hidden && 
        <Animated.View style={[animatedStyles]} >

        </Animated.View>
    )
}