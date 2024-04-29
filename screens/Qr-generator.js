import React, { useRef } from "react";
import { View, Alert, Button } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { captureRef } from "react-native-view-shot";
import { saveToLibraryAsync } from "expo-media-library";
import ViewShot from "react-native-view-shot";

const QRGenerator = () => {
  const qrCodeRef = useRef();
  const saveQRCode = async () => {
    try {
      const uri = await captureRef(qrCodeRef, {
        format: "png",
        quality: 1,
        height: 200,
        width: 200,
      });

      await saveToLibraryAsync(uri);

      Alert.alert("Success", "QR code saved to gallery.");
    } catch (error) {
      console.error("Error saving QR code:", error);
      Alert.alert("Error", "Failed to save QR code.");
    }
  };
  const dummyData = [
    {
      eventName: "Party for April",
      date: "2024-04-29",
      address: "Satungal",
      phone: "9862524308",
    },
  ];
  const jsonString = JSON.stringify(dummyData);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ViewShot ref={qrCodeRef} options={{ format: "png", quality: 1 }}>
        <QRCode value={jsonString} size={200} />
      </ViewShot>
      <Button title="Save QR Code" onPress={saveQRCode} />
    </View>
  );
};
export default QRGenerator;
