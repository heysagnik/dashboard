import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/react";

type Props = {
  activeSource: 'camera' | 'screen' | '',
  onChange: (source: 'camera' | 'screen') => void
};

const VideoSourceToggle: React.FC<Props> = ({ activeSource, onChange }) => {
  return (
    <Box className="tabs" px='40'>
      <Button 
        className={`tab ${activeSource === 'camera' ? 'active' : ''}`} 
        onClick={() => onChange('camera')}
        variant={activeSource === 'camera' ? 'solid' : 'outline'}
        colorScheme="gray"
        borderRadius="20px"
        marginRight="20px"
      >
        Camera
      </Button>
      <Button 
        className={`tab ${activeSource === 'screen' ? 'active' : ''}`}
        onClick={() => onChange('screen')} 
        variant={activeSource === 'screen' ? 'solid' : 'outline'}
        colorScheme="gray"
        borderRadius="20px"
      >
        Screenshare
      </Button>
    </Box>
  );
};

export default VideoSourceToggle;
