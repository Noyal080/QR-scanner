import { Camera } from "expo-camera";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  Dimensions,
} from "react-native";

const QRScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scannedData, setScannedData] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isScanningAllowed, setIsScanningAllowed] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
    setIsCameraOpen(status === "granted");
  };

  const handleBarCodeScanned = ({ type, data }) => {
    if (isScanningAllowed) {
      setScannedData(data);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      setIsScanningAllowed(false);
    }
  };

  const toggleCamera = () => {
    setIsCameraOpen(!isCameraOpen);
    setScannedData(null);
    setIsScanningAllowed(true);
  };

  return (
    <View style={styles.container}>
      <Button
        title={isCameraOpen ? "Close Camera" : "Open Camera"}
        onPress={isCameraOpen ? toggleCamera : requestCameraPermission}
      />
      {hasPermission === false && <Text>No access to camera</Text>}
      {hasPermission && isCameraOpen && (
        <>
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.back}
            onBarCodeScanned={handleBarCodeScanned}
            ratio="16:9"
          />
          {scannedData && (
            <Text style={styles.scanDataText}> {scannedData} </Text>
          )}
        </>
      )}
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: windowWidth,
    height: windowHeight * 0.8,
  },
  scanDataText: {
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
  },
});

export default QRScanner;
