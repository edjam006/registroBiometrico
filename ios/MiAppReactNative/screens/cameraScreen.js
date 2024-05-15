import React from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.front}
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
        onFacesDetected={face => console.log(face)}
      />
    </View>
  );
};

export default CameraScreen;
