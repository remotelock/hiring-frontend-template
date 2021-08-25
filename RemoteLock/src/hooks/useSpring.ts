import {useEffect, useMemo} from 'react';
import {Animated} from 'react-native';

export interface SpringAnimationConfig {
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export function useSpring(
  value: {to: number},
  config?: SpringAnimationConfig,
): Animated.Value {
  const animatedValue = useMemo(() => {
    return new Animated.Value(value.to);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const animation = Animated.spring(animatedValue, {
      ...config,
      toValue: value.to,
      useNativeDriver: true,
    });
    animation.start();
    return () => animation.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value.to]);
  return animatedValue;
}
