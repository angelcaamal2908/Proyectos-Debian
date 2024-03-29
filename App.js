/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, Fragment} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import ButtonCustom from './components/button';
import ActionButtons from './components/actionButtons';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handlePlus10 = this.handlePlus10.bind(this);

  }

  handleUp() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct + 1 });
  }
  
  handleDown() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct - 1 });
  }
  
  handleReset() {
    this.setState({ counter: 0 });
  }

  handlePlus10(){
    const {counter: ct} = this.state;
    this.setState({counter: ct + 10});

  }

  render() {
    const { counter } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>

            <ButtonCustom action={this.handleDown} label="-"/>

            <View style={styles.counterContainer}>
              <Text style={styles.counter}>{counter}</Text>
            </View>

            <ButtonCustom action={this.handleUp} label="+"/>
        </View>

        <View style={styles.subcontainerReset}>
           <ActionButtons reset={this.handleReset} plus={this.handlePlus10}/>
        </View>
      </View>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
  },
  subcontainer: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  resetContainer: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  subcontainerReset: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold',
  },
  btnReset: {
    height: 50,
    width: 150,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;