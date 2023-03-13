import { Box, Button } from "@chakra-ui/react";
import { FiMic, FiMicOff } from "react-icons/fi";


type Props = {
  audioLevel: number,
  isMuted: boolean,
  muteAudioTrack: (mute: boolean) => void
};

const AudioBars: React.FC<Props> = ({ audioLevel, isMuted, muteAudioTrack }) => {
  const audioLevelThresholds = [0, 5, 10, 15, 20, 25];

  const toggleMuted = () => muteAudioTrack(!isMuted);

  return (
    <Box display="flex" alignItems="center" rounded={'10px'}>
      <Button
        leftIcon={isMuted ? <FiMic /> : <FiMicOff />}
        variant="ghost"
        size="sm"
        onClick={toggleMuted}
      >
        {isMuted ? 'Unmute audio' : 'Mute audio'}
      </Button>
      {[...Array(audioLevelThresholds.length)].map((_, i) => (
        <Box
          key={i}
          bg={audioLevel > audioLevelThresholds[i] ? 'gray.800' : 'gray.300'}
          w="30px"
          h="5px"
          mr={i === audioLevelThresholds.length - 1 ? 0 : 2}
        />
      ))}
    </Box>
  );
};

export default AudioBars;
