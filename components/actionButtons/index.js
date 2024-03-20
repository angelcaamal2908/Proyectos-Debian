import React, { Component, Fragment } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

class ActionButtons extends Component {
  render() {
    const { reset, plus } = this.props;
    return (
      <Fragment>
      <TouchableOpacity
          style={styles.btnReset} // Añade margen a la derecha para separar los botones
          onPress={reset}
        >
          <Text style={styles.btnTxt}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnReset}
          onPress={plus} // Llama a la función increaseByTen cuando se presiona el botón
        >
          <Text style={styles.btnTxt}>+ 10</Text>
        </TouchableOpacity>
        </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  resetContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  btnReset: {
    height: 50,
    width: 100,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  btnTxt: {
    fontSize: 20,
  },
});

export default ActionButtons;
