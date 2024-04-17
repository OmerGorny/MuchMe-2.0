import  React,{useState,useEffect,useContext} from 'react';
import {ActivityIndicator,SafeAreaView,View,Text,StyleSheet, FlatList, TouchableOpacity,Image, ScrollView, ImageBackground}from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {AppContext}from '../context/AppContext'
const LovedDishes=()=>{
    const image=require('../assets/back3.jpg')
   
    const{dataLikedDishes,setDataLikedDishes,isLoadingRes,dishesRes1,photoDishes1,currentUser}=useContext(AppContext)


    const [dataForUser,setDataForUser]=useState([]);
    const orderByUser=()=>{
      
        let user=currentUser
        let arr=[...dataLikedDishes]
        let newArr=[];
        for(let i=0;i<arr.length;i++){
            if(arr[i].userID===user.userID){
                newArr.push(arr[i]);
            }
        }
       
        setDataForUser(newArr)

    }


    useEffect(()=>{
        orderByUser();
       },[dataLikedDishes])
 
    const delDish=(item)=>{
        let arr=[]
        let filterArr=[]
        arr=[...dataForUser]
        filterArr=arr.filter(dish=>dish.DishCode!==item) // בדיקה מול מערך האיידים של המנות הנבחרות לרשימת כל ההזמנות שנשלחו למסעדה ומחיקה של כל אותם המנות המסומנות
        arr=[...filterArr]
        setDataForUser(arr)
        
       
        
    }
    renderLoved=({item,index})=>{

        return(
            <TouchableOpacity
            style={[styles.item,{
                marginTop:11,
                height:150,
                backgroundColor:'white',
                flexDirection:'row'
            }]} >
            
    
                <View style={styles.containerTitle} >
                <Text style={styles.resTitle}>{item.dishName}</Text>
                <Image
                style={styles.image}
                source={item.photoURL}
                rezieMode='contain'
                />
                </View>
                <View style={styles.containerAbout}>
                    <Text style={styles.resAbout}>About: </Text>
                    <Text>{item.about}</Text>
                    <Text style={styles.price}>Price:{item.price}<MaterialCommunityIcons name="currency-ils" size={12} color="black" /></Text>
                </View>
                <TouchableOpacity onPress={()=>{delDish(item.DishCode)}}>
                <Feather name="delete" size={24} color="black" />
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }



    return(
        
        <SafeAreaView>
        <ImageBackground source={image}>
            <View style={{height: "100%"}} >
            <Text style={styles.textTitle1}> <AntDesign name="heart" size={40} color="red" /> Loved-Dishes</Text>
            
            {isLoadingRes ? <View style={[styles.indicatorContainer, styles.horizontal]} > 
            <ActivityIndicator 
            size='large'
            color='#D2042D'
            />
            </View> :(
                <FlatList 
                data={dataForUser}
                renderItem={renderLoved}
                keyExtractor={item=>`key-${item.DishCode}`}
                />
            )}
              </View>
              </ImageBackground>
              </SafeAreaView>
              
              )

}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    price:{
        position:'absolute',
         bottom: 0
    },
    containerTitle:{
        
        flex:0.4
    },
    containerAbout:{
        flex:0.6
    
    },
    resTitle:{
        fontFamily:'Bangers',
        color:'black',
        fontSize:16
    },
    resAbout:{
        fontFamily:'Bangers',
        color:'black',
        fontSize:13
    },
    textTitle2:{
        marginTop:5,
        marginBottom:5,
        fontFamily:'Bangers',
        fontSize:40,
        color:'black'
    },
    textTitle1:{
        marginTop:25,
        marginBottom:5,
        fontFamily:'Bangers',
        fontSize:40,
        color:'white'
    },

    wrapButton:{
        alignItems:'center',
        marginHorizontal:50,
        padding:20,
        backgroundColor:'orange'
        },
    txtFontSize:{
        fontSize:20
    },
    image:{
        width:100,
        height:100,
    },
    catImageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    },
    imageCat:{
        
        width:100,
        height:100,
    },
    item:{
        borderWidth:0.5,
        padding:8,
        borderRadius:10,
        justifyContent:'center'
    },
    indicatorContainer: {
        flex: 1,
        justifyContent: "center"
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      }
     


})
export default LovedDishes;