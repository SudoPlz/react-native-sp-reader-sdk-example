/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ReaderSDK from 'react-native-sp-reader-sdk';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
  }

  componentDidMount() {
    this.fireUpReaderSDK();
  }

  async fireUpReaderSDK() {
    const readerSdk = new ReaderSDK();


    // initialize the sdk
    readerSdk.initSdk();

    // find out if logged in
    readerSdk.isLoggedIn()
      .then(loggedIn => {
        console.log(`loggedIn: ${loggedIn}`)
        // isLoggedIn is either true or false
      });

     // login with an auth code
    readerSdk.authorizeWithCode("1234567").then((yo) => {
      alert(`yo: ${yo}`)
      // success
    }).catch((err) => {
      // failure
      alert(`err: ${err}`)
    })
/*

   


    // set other settings
    readerSdk.setCheckoutParameters(
      ReaderSDK
        .AdditionalPaymentTypes
        .MANUAL_CARD_ENTRY, // additional payment types
      null, // tip percentages arr
      tipsEnabled, // tips enabled
      false, // custom tip field visible
      false, // separate tip screen visible
      true, // skip receipt
      false, // always require signature
      false, // allow split tender
    );

    // present the settings screen
    readerSdk.presentReaderSettingsScreen(
      true, // animate modal window
    );

    

    readerSdk.requestPermissions() // so try asking for permissions (needed for iOS)
      .then((permissions) => {
        if (permissions != null) {
          let permissionsGranted;
          if (notAndroid) {
            const {
              appLocationPermission,
              deviceLocationEnabled,
              appRecordingPermission,
            } = permissions;
            // do sth?
          }
        }
      });

    // readerSdk.checkoutWithAmount(
    //     100, // amount to pay (in cents)
    //     'This is a transaction', // transaction notes
    // ).then((result) => { // transactionRequestWithCentsAmount success

    //   // Do something with the result
    // })
    // .catch((e) => { // checkoutWithAmount error
    // });

    // readerSdk.deauthorize(); // logout
    */
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
