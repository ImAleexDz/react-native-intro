import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner'

export default function App() {

  useEffect(() => {
    // Solicitar los permisos para usar la camara
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
    })()
  }, []);

  return (
    <View style={styles.container}>
      <BarCodeScanner
      onBarCodeScanned={({ type, data }) => {
        alert('Ya hice scan: ' + data)
      }}
        style={StyleSheet.absoluteFillObject}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
