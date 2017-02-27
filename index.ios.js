/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback
} from 'react-native';

var Sound = require('react-native-sound');

const requireAudio = require('./cutloli.mp3');

export default class soundtest extends Component {

  componentWillMount() {
    Sound.setCategory('Ambient', true);
    this.soundClip = new Sound(requireAudio, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      } 
    });
  }

  play() {
    this.soundClip.getCurrentTime((seconds, isPlaying) => {
      if (isPlaying) {
        this.soundClip.setCurrentTime(0);
      } else {
        this.soundClip.play();
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => this.play()}
        >
          <Image source={require('./lil21.png')} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('soundtest', () => soundtest);
