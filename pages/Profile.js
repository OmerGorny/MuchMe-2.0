import  React,{useEffect,useState,useContext} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {StyleSheet,View,Text,Image,TouchableOpacity,ScrollView,SafeAreaView, ImageBackground}from 'react-native';
import {AppContext} from '../context/AppContext';
const Profile=({navigation,route,...props})=>{
const image=require('../assets/back3.jpg')


    return(
      
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <View
             style={styles.container}
             >
          <ImageBackground source={image} resizeMode="cover" style={{justifyContent:'center',height:'100%'}}>
             <Image style={[styles.userImg,{marginTop:20}]} source={require('../assets/food_icon1.png')} />
             <Text style={styles.userName}>{props.user.fullName}</Text>
             <View style={styles.userBtnWrapper}>
                <TouchableOpacity style={styles.userBtn}   
                onPress={()=>{
                    navigation.navigate('Edit')}}>
        
                
                    <Text style={styles.userBtnTxt}>Edit </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userBtn}>
                    <Text style={styles.userBtnTxt}>Logout </Text>
                </TouchableOpacity>
             </View>

             <View style={styles.userInfoWrapper}>
                <View style={styles.userInfoItem}>
                    <Text style={[styles.userInfoTitle,{marginLeft:15}]}>22 </Text>
                    <Text style={[styles.userInfoSubTitle,{width:'120%',marginRight:5}]}> Total-Orders </Text>
                </View>
             
                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}><MaterialCommunityIcons name="currency-ils" size={22} color="white" />1,000 </Text>
                    <Text style={styles.userInfoSubTitle}>Total-Spend</Text>
                </View>
                </View>

                <TouchableOpacity style={styles.buttonHistory} 
                 onPress={()=>navigation.navigate('OrderHistory')}>
                
                  
               
                                                                
                            
                <Text style={styles.buttonText}>Order-History </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonLovedRes}  onPress={()=>{navigation.navigate('LovedRes')}}>
                <Text style={styles.buttonText}>Loved-Restaurants </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonLoved}  onPress={()=>{navigation.navigate('LovedDishes')}}>
                <Text style={styles.buttonText}>Loved-Dishes </Text>
                </TouchableOpacity>

                   
        </ImageBackground>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userImg: {
      alignSelf:'center',
      height: 150,
      width: 150,
      borderRadius: 75,
    },
    userName: {
      alignSelf:'center',
      color:'white',
        fontFamily:'Bangers',
      fontSize: 20,
      marginTop: 10,
      marginBottom: 10,
    },
    aboutUser: {
        fontFamily:'Bangers',
      fontSize: 12,
      fontWeight: '600',
      color: '#666',
      textAlign: 'center',
      marginBottom: 10,
    },
    userBtnWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginBottom: 10,
    },
    userBtn: {
      borderColor: '#D2042D',
      borderWidth: 3,
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginHorizontal: 5,
    },
    userBtnTxt: {
      color: 'white',
      fontFamily:'Bangers'
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
     
      marginBottom: 5,
      textAlign: 'center',
    },
    userInfoSubTitle: {
      color:'white',
      borderColor:'#D2042D',
      borderWidth:3,
      fontFamily:'Bangers',
      fontSize: 12,
      backgroundColor:'black',
      borderRadius:50,
      textAlign: 'center',
    },
    buttonText:{
        fontFamily:'Bangers',
        fontSize:20,
        color:'white'
       
    },
    buttonHistory:{
      borderRadius:150,
        borderWidth:2,
        backgroundColor:'#D2042D',
        width:200,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        height:50,
        marginTop:10,
        marginBottom:20
    },
    buttonLoved:{
      alignSelf:'center',
        borderRadius:150,
        borderWidth:2,
        backgroundColor:'#D2042D',
        width:200,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        marginTop:20,
    },
    buttonLovedRes:{
      alignSelf:'center',
      borderRadius:150,
      borderWidth:2,
      backgroundColor:'#D2042D',
      width:200,
      justifyContent:'center',
      alignItems:'center',
      height:50,
      marginTop:5,
  },
  });
export default Profile;