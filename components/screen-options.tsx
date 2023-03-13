/* eslint-disable jsx-a11y/no-onchange */
import { ChangeEvent } from 'react';
import { Box, Button, FormControl, FormLabel, Select } from '@chakra-ui/react';
import AudioBars from './audio-bars';

type DeviceItems = MediaDeviceInfo[];

type DeviceList = {
  video: DeviceItems;
  audio: DeviceItems;
};

type Props = {
  isLoadingPreview: boolean;
  isMicDeviceEnabled: boolean;
  isRecording: boolean;
  deviceList: DeviceList;
  audioLevel: number;
  selectVideo: (evt: ChangeEvent<HTMLSelectElement>) => void;
  selectAudio: (evt: ChangeEvent<HTMLSelectElement>) => void;
  enableMicForScreenshare: () => void;
  isMuted: boolean;
  muteAudioTrack: (muted: boolean) => void;
};

const ScreenOptions: React.FC<Props> = ({
  isLoadingPreview,
  isRecording,
  isMicDeviceEnabled,
  deviceList,
  audioLevel,
  selectAudio,
  enableMicForScreenshare,
  isMuted,
  muteAudioTrack,
}) => {
  return (
    <Box>
      {isLoadingPreview && 'Loading preview...'}
      {isMicDeviceEnabled ? (
        <Box display="flex" alignItems="center" marginTop="20px">
          <Box marginRight="20px">
            <AudioBars muteAudioTrack={muteAudioTrack} isMuted={isMuted} audioLevel={audioLevel} />
          </Box>
          <FormControl>
            <FormLabel htmlFor="audio-devices" marginBottom="0">
              Audio devices
            </FormLabel>
            <Select
              id="audio-devices"
              onChange={selectAudio}
              disabled={isRecording}
              title={isRecording ? 'Cannot change audio devices while recording' : ''}
            >
              {deviceList.audio.map(({ label, deviceId }) => (
                <option key={deviceId} value={deviceId}>
                  {label}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>
      ) : (
        <Button marginTop="20px" onClick={enableMicForScreenshare}>
          Enable microphone
        </Button>
      )}
    </Box>
  );
};

export default ScreenOptions;
