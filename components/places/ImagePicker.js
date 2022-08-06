import { View, Text, Button, Alert, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker'
import { Colors } from '../../constants/colors'

const ImagePicker = () => {
    const [pickedImage, setpickedImage] = useState()
    const [cameraPessionInformation, requestPermission] = useCameraPermissions()

    const verifyPermissions = async() => {

        
        if(cameraPessionInformation.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission()

            
            return permissionResponse.granted
        }
        if(cameraPessionInformation.status === PermissionStatus.DENIED){
            Alert.alert('Insufficient Permissions', 'You need to grant camera permissions to use this app'
            );
            return false;
        }

        return true;
    }

    const takeImageHandler = async() => {
       const hasPermission = await verifyPermissions();
       if(!hasPermission){
        return;
       }
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });
        setpickedImage(image.uri)
    }

    let imagePreview = <Text>No Image taken yet</Text>

    if(pickedImage){
        imagePreview = <Image style={styles.image} source={{uri: pickedImage}} />
             
    }

  return (
    <View>
        <View style={styles.imagePreview}>
            {imagePreview}
        </View>
            <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  )
}

export default ImagePicker

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius:4
    },
    image: {
        width: '100%',
        height: '100%'
    }
})