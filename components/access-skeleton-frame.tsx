import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/react";

type Props = {
  onClick: () => void;
  text: any;
};

const AccessSkeletonFrame: React.FC<Props> = ({ onClick, text }) => {
  return (
    <>
      <Box className="video-box" width={'400px'} height='261px' border={'2px solid #ccc'} margin={'0 auto'} borderRadius='30px' />
      <Box className="button" top='-160px' position='relative' minWidth={'440px'}>
        <Button variant="solid" onClick={onClick} w="100%" rounded='20px'>
          {text}
        </Button>
      </Box>
    </>
  );
};

export default AccessSkeletonFrame;
