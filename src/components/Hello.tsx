import { View, Text, StyleSheet } from 'react-native'

const Hello = (): JSX.Element => {
  return (
        <View>
            <Text style={styles.text}>Hello World!!!!!!</Text>
        </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'red',
    fontSize: 30,
    padding: 15
  }
})

export default Hello
