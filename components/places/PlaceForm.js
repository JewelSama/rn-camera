import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Colors } from '../../constants/colors'

const PlaceForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')

    const ChangeTitleHandler = (enteredText) => {
        setEnteredTitle(enteredText)
    }


  return (
    <View>
      <ScrollView style={styles.form}>
        <View>
            <Text style={styles.label}>Title</Text>
            <TextInput  style={styles.input} onChangeText={ChangeTitleHandler} value={enteredTitle} />
        </View>  
      </ScrollView> 
    </View>
  )
}

export default PlaceForm

const styles = StyleSheet.create({
    form: {
        padding: 24
    },
    label: {
        fontWeight: "bold",
        marginBottom: 4,
        color: Colors.primary500
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100
    }
})