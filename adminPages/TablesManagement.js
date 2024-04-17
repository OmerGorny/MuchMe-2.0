import  React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity,ScrollView,SafeAreaView,ImageBackground}from 'react-native';
import { TextInput } from 'react-native-paper';
const TablesManagement=()=>{
    const[numOfSeat,setNumOfSeat]=useState();
    const[totalSeats,setTotalSeats]=useState();
    const image=require("../assets/back3.jpg");

    return(
        <ImageBackground  source={image} style={styles.container} >
        <SafeAreaView>
            

            
        <Image
        source={require('../assets/food_icon1.png')}
        resizeMode='center'
        style={styles.image}/>
        <Text style={styles.textTitle2}>Tables Management </Text>

        <TextInput  
            style={styles.input}
            onChangeText={(num)=>setNumOfSeat(num)}
            value={numOfSeat}
            keyboardType='numeric'
            placeholder="Free-Tables"
            left={ <TextInput.Icon style={styles.icon} name="table"/>}
          />
          <TextInput  
            style={styles.input}
            keyboardType='numeric'
            onChangeText={(num)=>setTotalSeats(num)}
            value={totalSeats}
            placeholder="Total-Tables"
            left={ <TextInput.Icon style={styles.icon} name="table"/>}
          />


                <View style={styles.userInfoWrapper}>
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>{numOfSeat} </Text>
                    <Text style={styles.userInfoSubTitle}>Free-Tables</Text>
                </View>
             
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>{totalSeats} </Text>
                    <Text style={styles.userInfoSubTitle}>Total-Tables </Text>
                </View>
                </View>
   
        </SafeAreaView>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    userInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
      },
      userInfoItem: {
        justifyContent: 'center',
      },
      userInfoTitle: {
          color:'white',
          fontFamily:'Bangers',
          fontSize: 30,
          backgroundColor:'#D2042D',
        borderRadius:150,
       
        marginBottom: 5,
        textAlign: 'center',
      },
      userInfoSubTitle: {
          fontFamily:'Bangers',
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
      },
    input: {
        marginVertical:10,
        width:250,
        height: 20,
        margin: 10,
        borderWidth: 2,
        alignSelf:'center',
        borderColor:'#D2042D',
        padding: 10,
      },
      icon:{
        marginTop:25
    },
image:{
    width:400,
    height:250,
    alignSelf:'center'
    
},
textTitle2:{
    fontFamily:'Bangers',
    fontSize:40,
    color:'white',
    alignSelf:'center'
     
},
})
export default TablesManagement;