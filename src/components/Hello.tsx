import { View, Text, StyleSheet, type TextStyle } from 'react-native'

interface Props {
  children: string
  bang?: boolean
  style?: TextStyle
}

const Hello = (props: Props): JSX.Element => {
  const { children, bang, style } = props
  return (
        <View>
          <Text style={[styles.text, style]}>
            Hello World {children}{bang === true ? '○' : '×'}
          </Text>
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
