import { ChangeEvent } from 'react';
import { Box, Flex, Select } from "@chakra-ui/react";
import AudioBars from './audio-bars';

type DeviceItems = MediaDeviceInfo[];

type DeviceList = {
video: DeviceItems;
audio: DeviceItems;
};

type Props = {
isLoadingPreview: boolean,
isRecording: boolean,
deviceList: DeviceList,
audioLevel: number,
selectVideo: (evt: ChangeEvent<HTMLSelectElement>) => void,
selectAudio: (evt: ChangeEvent<HTMLSelectElement>) => void,
isMuted: boolean,
muteAudioTrack: (muted: boolean) => void,
};

const CameraOptions: React.FC<Props> = ({
                        isLoadingPreview,
                        isRecording,
                        deviceList,
                        audioLevel,
                        selectVideo,
                        selectAudio,
                        isMuted,
                        muteAudioTrack,
                        }) => {
                            return (
                                    <>
                                    <Box>
                                            {isLoadingPreview && 'Loading preview...'}
                                    </Box>
                                    <Flex direction="column" mt="20px">
                                                <Select onChange={selectVideo} isDisabled={isRecording} title={isRecording ? 'Cannot change audio devices while recording' : ''}>
                                                {deviceList.video.map(({ label, deviceId }) => (
                                            <option key={deviceId} value={deviceId}>{label}</option>
                                    ))}
                                                </Select>
                                    <Flex alignItems="center" mt="20px">
                                        <Box className="audio-bars">
                                            <AudioBars muteAudioTrack={muteAudioTrack} isMuted={isMuted} audioLevel={audioLevel} />
                                        </Box>
                                        <Select onChange={selectAudio} isDisabled={isRecording} title={isRecording ? 'Cannot change audio devices while recording' : ''}>
                                        {deviceList.audio.map(({ label, deviceId }) => (
                                        <option key={deviceId} value={deviceId}>{label}</option>
                                        ))}
                                        </Select>
                                    </Flex>
                                    </Flex>
                                    </>
);
};

export default CameraOptions;