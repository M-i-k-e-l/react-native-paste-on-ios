/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            {/*
              Bug when:
              container has: flexDirection: 'row'
              TextInput has: textAlign: 'center'  +  placeholder
            */}
            <View
              style={[
                styles.inputContainerJustStyling,
                styles.inputContainerBug,
              ]}>
              <Text>Cannot paste --></Text>
              <TextInput
                style={[styles.inputJustStyling, styles.inputBug]}
                placeholder="Longer placeholder"
              />
            </View>

            {/*
              Bug when:
              container has: flexDirection: 'row'
              TextInput has: textAlign: 'center'  +  placeholder
            */}
            <View
              style={[
                styles.inputContainerJustStyling,
                styles.inputContainerBug,
              ]}>
              <Text>Can paste --></Text>
              <TextInput
                style={[styles.inputJustStyling, styles.inputBug]}
                placeholder="Placeholder"
              />
            </View>

            {/*
              no placeholder --> no bug
            */}
            <View
              style={[
                styles.inputContainerJustStyling,
                styles.inputContainerBug,
              ]}>
              <Text>Can paste --></Text>
              <TextInput style={[styles.inputJustStyling, styles.inputBug]} />
            </View>

            {/*
              no flexDirection: 'row' --> no bug
            */}
            <View style={styles.inputContainerJustStyling}>
              <Text>Can paste --></Text>
              <TextInput
                style={[styles.inputJustStyling, styles.inputBug]}
                placeholder="Placeholder"
              />
            </View>

            {/*
              no textAlign: 'center' --> no bug
            */}
            <View
              style={[
                styles.inputContainerJustStyling,
                styles.inputContainerBug,
              ]}>
              <Text>Can paste --></Text>
              <TextInput
                style={styles.inputJustStyling}
                placeholder="Placeholder"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  inputContainerBug: {
    flexDirection: 'row',
  },
  inputContainerJustStyling: {
    marginVertical: 20,
  },
  inputBug: {
    textAlign: 'center',
  },
  inputJustStyling: {
    minWidth: 100,
    backgroundColor: Colors.lighter,
  },
});

export default App;
