import { View, Text, StyleSheet } from 'react-native'

interface Props {
  children: string
}

const Hello = (props: Props): JSX.Element => {
  const { children } = props
  return (
        <View>
            <Text style={styles.text}>Hello World!!!!!! {children}</Text>
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
