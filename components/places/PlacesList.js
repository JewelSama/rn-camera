import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'
import { Colors } from '../../constants/colors'

const PlacesList = ({places}) => {
    
// if(!places) {
//     return (<View style={styles.fallBackContainer}>
//                  <Text style={styles.fallBackText}>No Places Added Yet- add some</Text>
//              </View>
//     )

// }
return(
<View>
    {!places || places.length=== 0 || places === "" ? (
        <View style={styles.fallBackContainer}>
                          <Text style={styles.fallBackText}>No Places Added Yet- add some</Text>
                      </View>
    ) : (
        <FlatList data={places} 
         keyExtractor={(item) => item.id}
         renderItem={({item}) => <PlaceItem place={item} />}
         />
    )}
</View>
)

    
    // if(!places || places.length === 0){
    //     return (<View style={styles.fallBackContainer}>
    //         <Text style={styles.fallBackText}>No Places Added Yet- add some</Text>
    //     </View>
    //     )
    // } else {
    //     return (
    //     <FlatList data={places} 
    //     keyExtractor={(item) => item.id}
    //     renderItem={({item}) => <PlaceItem place={item} />}
    //     />
    //     )
    // }
}

export default PlacesList

const styles = StyleSheet.create({
    fallBackContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    fallBackText: {
        fontSize: 16,
        color: Colors.primary200
    }
})