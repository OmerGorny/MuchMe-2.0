import  React,{useState,useEffect, useContext} from 'react';
import {ActivityIndicator,SafeAreaView,View,Text,StyleSheet, FlatList, TouchableOpacity,Image, ImageBackground}from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {AppContext}from '../context/AppContext'

const OrderHistory=({route})=>{
    const image=require('../assets/back3.jpg')
    const{dataHistory,setDataHistory,isLoadingRes,dishesRes1,photoDishes1,currentUser}=useContext(AppContext)
     
    const [dataForUser,setDataForUser]=useState([]);
    const orderHistoryByUser=()=>{
        let user=currentUser
        let arr=[...dataHistory]
        let newArr=[];
        for(let i=0;i<arr.length;i++){
            if(arr[i].userID===user.userID){
                newArr.push(arr[i]);
            }
        }
        newArr=[...newArr];
        setDataForUser(newArr)

    }

   

    useEffect(()=>{
        orderHistoryByUser();
       },[dataHistory])
 

    const delDish=(item)=>{
        let arr=[]
        let filterArr=[]
        arr=[...dataForUser]
        filterArr=arr.filter((dish,index)=>index!==item) // בדיקה מול מערך האיידים של המנות הנבחרות לרשימת כל ההזמנות שנשלחו למסעדה ומחיקה של כל אותם המנות המסומנות
        arr=[...filterArr]
        setDataHistory(arr)
        
        
    }

    renderDishesHistory=({item,index})=>{


        return(
            <TouchableOpacity
            style={[styles.item,{
                marginTop:11,
                height:150,
                backgroundColor:'white',
                flexDirection:'row'
            }]}

            
            >
                
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
                    <Text style={styles.date}  >{item.date}</Text>
                </View>

                <TouchableOpacity onPress={()=>delDish(index)}>
                <Feather name="delete" size={24} color="black" />
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }



    return(
        <SafeAreaView>
        <ImageBackground source={image} >
            <View style={{height: "100%"}}>
            
            <Text style={styles.textTitle1}> <Octicons name="history" size={40} color="white" /> Order-History</Text>
            
            {isLoadingRes ? <View style={[styles.indicatorContainer, styles.horizontal]} > 
            <ActivityIndicator 
            size='large'
            color='#D2042D'
            />
            </View> :(
                <FlatList 
                data={dataForUser}
                renderItem={renderDishesHistory}
                keyExtractor={(item,index)=>`key-${index}`}
                />
            )}
              </View>
              </ImageBackground>
              </SafeAreaView>
              )

}
const styles=StyleSheet.create({
    container:{
       
    },
    date:{
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
        color:'white',
        marginTop:25,
        marginBottom:5,
        fontFamily:'Bangers',
        fontSize:40,
        
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
export default OrderHistory;