import  React from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity,ScrollView,SafeAreaView,ImageBackground}from 'react-native';
const AdminHome=({navigation})=>{
const image=require("../assets/back3.jpg");

    return(
        <ImageBackground source={image} style={styles.container} >
    
        <Image
        source={require('../assets/food_icon1.png')}
        resizeMode='center'
        style={styles.image}/>
    
    
    <Text style={styles.textBody}>choose your section </Text>

    <SafeAreaView>


    <TouchableOpacity style={styles.buttonHistory}  onPress={()=>{navigation.navigate('MenuManagement')}}>

<Text style={styles.buttonText}>Menu Management </Text>
</TouchableOpacity>
    <TouchableOpacity style={styles.buttonHistory}  onPress={()=>{navigation.navigate('KitchenManagement')}}>

<Text style={styles.buttonText}>Kitchen Management </Text>
</TouchableOpacity>


<TouchableOpacity style={styles.buttonHistory}  onPress={()=>{navigation.navigate('TablesManagement')}}>
           


<Text style={styles.buttonText}>Tables Management </Text>
</TouchableOpacity>


    </SafeAreaView>


    </ImageBackground>
    )
}
const styles = StyleSheet.create({
    userImg: {
      height: 150,
      width: 150,
      borderRadius: 75,
    },
    userName: {
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
      borderWidth: 2,
      borderRadius: 3,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginHorizontal: 5,
    },
    userBtnTxt: {
      color: '#000',
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
        fontFamily:'Bangers',
      fontSize: 30,
     
      marginBottom: 5,
      textAlign: 'center',
    },
    userInfoSubTitle: {
        fontFamily:'Bangers',
      fontSize: 12,
      color: '#666',
      textAlign: 'center',
    },
    buttonText:{
        fontFamily:'Bangers',
        fontSize:20,
        color:'white'
       
    },
    buttonHistory:{
        backgroundColor:'#D2042D',
        borderRadius:150,
        borderColor:'black',
        borderWidth:2,
        width:200,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        marginTop:20,
        marginBottom:20
    },
    buttonLoved:{
        
        backgroundColor:'#D2042D',
        width:200,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        marginTop:20,
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
    icon:{
        marginTop:25
    },
    input: {
        marginVertical:10,
        width:250,
        height: 20,
        margin: 10,
        borderWidth: 2,
        borderColor:'#D2042D',
        padding: 10,
      },
    image:{
        width:400,
        height:250,
        marginVertical:10
    },
    textTitle:{
        fontFamily:'bakery',
        fontSize:40,
         
    },
    textTitle2:{
        fontFamily:'Bangers',
        fontSize:40,
        color:'white'
         
    },
    textTitle3:{
        fontFamily:'planetbe',
        fontSize:40,
         
    },
    textBody:{
        fontFamily:'Bangers',
        fontSize:26,
        color:'white'
    },
     buttonText:{
        fontFamily:'Bangers',
        fontSize:20,
        color:'white'
       
    },
    button:{
        backgroundColor:'#D2042D',
        width:100,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        marginTop:20,
        marginLeft:80
    },
  });
export default AdminHome;