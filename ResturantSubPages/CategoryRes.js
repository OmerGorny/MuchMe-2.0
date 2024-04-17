import { isLoading } from 'expo-font';
import  React,{useState,useEffect,useContext} from 'react';
import {ActivityIndicator,SafeAreaView,View,Text,StyleSheet, FlatList, TouchableOpacity,Image,ImageBackground}from 'react-native';
import { AppContext } from '../context/AppContext';

const CategoryRes=({navigation,route})=>{
    const image=require('../assets/back3.jpg')

    // const [data,setData]=useState([]);
    const{data,item,isLoadingCategory,imagesBurger}=route.params;
    const[isLoading,setIsLoading]=useState(false) 
          
   

    

 

    renderResturants=({item,index})=>{

        return(
            <TouchableOpacity onPress={()=>{navigation.navigate('SpecificRestaurant',{item})}}
            style={[styles.item,{
                marginTop:11,
                height:150,
                backgroundColor:'white',
                flexDirection:'row',
                marginBottom:5,
            }]}

            
            >
                
                <View style={styles.containerTitle} >
                <Text style={styles.resTitle}>{item.resName}</Text>
                <Text >{item.city}</Text>
                <Image
                style={styles.image}
                source={imagesBurger[index].image}
                rezieMode='contain'
                />
                </View>
                <View style={styles.containerAbout}>
                    <Text style={styles.resAbout}>About: </Text>
                    <Text>{item.about}</Text>

                    <Text style={styles.resHours}>{item.openHour}/{item.closeHour}</Text>

                </View>
            </TouchableOpacity>
           
           
        )
    }



    return(

        
          <ImageBackground style={{height:'100%'}} source={image} >
        
        <View>
            <Text style={styles.textTitle2}> {item.category} </Text>
            {isLoading ? <View style={[styles.indicatorContainer, styles.horizontal]} > 
            <ActivityIndicator 
            size='large'
            color='#D2042D'
            />
            </View> :(
                <FlatList 
                data={data}
                renderItem={renderResturants}
                keyExtractor={item=>`key-${item.resID}`}
                />
            )}
            </View>
            </ImageBackground>
      
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    resHours:{
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
        marginTop:25,
       
        fontFamily:'Bangers',
        fontSize:40,
        color:'#D2042D'
    },
    textTitle1:{
        marginTop:25,
        marginBottom:5,
        fontFamily:'Bangers',
        fontSize:40,
        color:'black'
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
        height:80,
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
export default CategoryRes;