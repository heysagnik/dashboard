import React from 'react';
import { Box, Button, IconButton } from '@chakra-ui/react';
import { RecordState } from 'types/index';
import { FiTrash2, FiPlay, FiRefreshCcw,FiShare, FiLoader, FiCheck, FiSquare, FiDownload } from 'react-icons/fi';

type Props = {
  recordState: RecordState;
  isLoadingPreview: boolean;
  isReviewing: boolean;
  startRecording: () => void;
  cancelRecording: () => void;
  stopRecording: () => void;
  downloadRecording: () => void;
  reset: () => void;
};

const RecordingControls: React.FC<Props> = ({
  recordState,
  isLoadingPreview,
  isReviewing,
  startRecording,
  cancelRecording,
  stopRecording,
  downloadRecording,
  reset,
}) => {
  const renderRecordingControl = React.useCallback(() => {
    if (isReviewing) {
      return null;
    } else if (recordState === RecordState.IDLE) {
      return (
        
        <IconButton colorScheme="green" onClick={startRecording} icon={<FiPlay/>} aria-label='' rounded={'full'} variant='solid'/>
      );
    } else if (recordState === RecordState.PREPARING) {
      return (
        <IconButton colorScheme="yellow" onClick={cancelRecording} icon={<FiTrash2/>} aria-label='' rounded={'full'} variant='solid'/>
      );
    } else if (recordState === RecordState.RECORDING) {
      return (
        <IconButton colorScheme="red" onClick={stopRecording} icon={<FiSquare/>} aria-label='' rounded={'full'} variant='solid'/>
      );
    }
  }, [recordState, isReviewing]);

  return (
    <Box
      display="flex"
      position={'relative'}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"

    >
      <Box margin="8px 0">{renderRecordingControl()}</Box>
      <Box margin="8px 0">
        <IconButton
          colorScheme="blue"
          onClick={downloadRecording}
          disabled={!isReviewing || isLoadingPreview}
          icon={<FiDownload/>}
          aria-label=''
          variant='solid'
        >
          {isLoadingPreview ? <FiLoader/> : <FiCheck/>}
        </IconButton>
      </Box>
      <Box margin="8px 0">
        <IconButton onClick={reset} icon={<FiRefreshCcw/>} aria-label='' variant='solid'/>
      </Box>
    </Box>
  );
};

export default RecordingControls;
