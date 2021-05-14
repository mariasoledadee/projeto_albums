import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from  './src/components/AlbumList';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Rotas from './src/components/Rotas';

export default function App() {
  return (
    <SafeAreaProvider>
      <Rotas/>
    </SafeAreaProvider>
  );
}


