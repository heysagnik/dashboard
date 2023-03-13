import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export interface CountdownTimerHandles {
  start: () => void;
  reset: () => void;
}

interface Props {
  seconds?: number;
  onElapsed?: () => void;
}

const CountdownTimer = React.forwardRef<CountdownTimerHandles, Props>((props, ref) => {
  const { seconds = 3, onElapsed } = props;

  const [isCountdownActive, setIsCountdownActive] = React.useState<boolean>(false);
  const [recCountdown, setRecCountdown] = React.useState<number>(seconds);

  const recCountdownRef = React.useRef<number>(recCountdown);
  const countdownIntervalRef = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    return () => {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
      setIsCountdownActive(false);
    };
  }, []);

  React.useImperativeHandle(ref, () => ({
    start: () => {
      resetTimeout();
      setIsCountdownActive(true);
      startTimeout();
    },
    reset: () => {
      resetTimeout();
    }
  }));

  const tick = () => {
    if (recCountdownRef.current <= 1) {
      resetTimeout();
      onElapsed && onElapsed();
      return;
    }

    setRecCountdown((recCountdown) => recCountdown - 1);
    recCountdownRef.current = recCountdownRef.current - 1;
    startTimeout();
  };

  const startTimeout = function () {
    countdownIntervalRef.current = setTimeout(tick, 1000);
  };

  const resetTimeout = function () {
    if (countdownIntervalRef.current) {
      clearTimeout(countdownIntervalRef.current);
    }

    setIsCountdownActive(false);
    recCountdownRef.current = seconds;
    setRecCountdown(seconds);
  };

  if (!isCountdownActive) return null;

  return (
    <>
      <Box
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="rgba(0, 0, 0, .45)"
        borderRadius="30px"
        width={'400px'}
        height={'261px'}
        top='100px'
      >
        <Text
          className="countdown-text"
          color="#fff"
          fontFamily="Akkurat"
          fontSize="54pt"
          fontWeight="bold"
        >
          {recCountdown}
        </Text>
      </Box>
    </>
  );
});

export default CountdownTimer;
