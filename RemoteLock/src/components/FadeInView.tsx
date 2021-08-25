import React, {useRef, ReactNode} from 'react';
import {Animated} from 'react-native';

type FadeInViewProps = {
  children: ReactNode;
};

const FadeInView = ({children}: FadeInViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}>
      {children}
    </Animated.View>
  );
};

export default FadeInView;
