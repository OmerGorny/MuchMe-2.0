import  React,{useState,useEffect,useContext} from 'react';
import {ActivityIndicator,SafeAreaView,View,Text,StyleSheet,ImageBackground, FlatList, TouchableOpacity,Image}from 'react-native';
import {AppContext} from '../context/AppContext';
import ArrOfCategories from '../imageLists/arrOfCategories';

const Resturants=({navigation})=>{
    const image=require('../assets/back3.jpg')

    const[dataForCategoryPage,setDataForCategoryPage]=useState([]);
  
    const[catBurger,setCatBurger]=useState([]);
    const[catPizza,setCatPizza]=useState([]);
    const[catMiddleEast,setCatMiddleEast]=useState([]);
    const[catSushi,setCatSushi]=useState([]);  
    const[isLoadingCategory,setIsLoadingCategory]=useState(true);
  
    const {dataRestaurants,setDataRestaurants
        ,photosRes,isloadingRes,
        isLoading,setisLoadingRes,
        dishesRes1,setDishesRes1,
        photosCategory,setPhotosCategory,
        photoDishes1,setPhotoDishes1,
        imagesBurger,setImagesBurger,
        listOfOrder,setListOfOrder
        }=useContext(AppContext)

        
    
      
   
        useEffect(()=>{
           categoryDataHandler();
          },[dataRestaurants])
    
    //categories restaurants


    const  categoryDataHandler=()=>{
        let burger=[],pizza=[],sushi=[],middle=[]
   
        let restaurants=[...dataRestaurants]
        for(let i=0; i<restaurants.length;i++){
       
           if( restaurants[i].category==='Burger')
           {
            burger.push(restaurants[i])
           }
           else if(restaurants[i].category==='Pizza'){
            pizza.push(restaurants[i])
           }
           else if(restaurants[i].category==='Sushi'){
            sushi.push(restaurants[i])
           }
           else{
            middle.push(restaurants[i])
           }
        }
        setCatBurger(burger)
        setCatMiddleEast(middle)
        setCatPizza(pizza)
        setCatSushi(sushi)
        setIsLoadingCategory(false);
      }

   

    const categoryHandler=(item)=>{
        let data=[]

        if(item.category==='Burger'){
            data=catBurger;
           setDataForCategoryPage(data);
            
        }
        else if(item.category==='Pizza'){
            data=catPizza;
            setDataForCategoryPage(data);
        }
        else if(item.category==='Sushi'){
            data=catSushi;
            setDataForCategoryPage(data);
        }
        else{
            data=catMiddleEast;
            setDataForCategoryPage(data);
            
        }
        navigation.navigate('CategoryRes',{data:data,item,isLoadingCategory,imagesBurger})
       
    }



  
 
 
  
 
    renderCategories=({item,index})=>{
        return(
            <TouchableOpacity
            onPress={()=>categoryHandler(item)}
            style={[styles.item,{
                marginLeft:11,
                width:150,
                height:150,
                backgroundColor:'white',
            }]}
            >
                <View style={styles.catImageContainer}>
            
                <Text style={styles.resTitle}>{item.category} </Text>
                {/*  */}
                <Text>{item.category===('Burger')?catBurger.length
                :(item.category==='Pizza')?catPizza.length
                :(item.category==='Sushi')?catSushi.length
                :catMiddleEast.length}
                </Text>

                <Image
                
                style={styles.imageCat}
                source={photosCategory[index].image}
                
                resizeMode='contain'
                />
                </View>
            </TouchableOpacity>
        )
    }
    renderResturants=({item,index})=>{

        return(
            <TouchableOpacity onPress={()=>{navigation.navigate('SpecificRestaurant',{item:item,dishesRes1,photoDishes1})}}
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
                source={photosRes[index].photoURL}
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
        <SafeAreaView style={{flex:1}}>
          <ImageBackground source={image} >
        <View >
        <View >
        <Text style={styles.textTitle1}>Categories...</Text>
        </View>
        {isloadingRes ? <View style={[styles.indicatorContainer, styles.horizontal]} > 
        <ActivityIndicator 
        size='large'
        color='#D2042D'
        />
        </View> :(
            <FlatList 
            data={ArrOfCategories}
            horizontal
            renderItem={renderCategories}
            keyExtractor={item=>`key-${item.id}`}
            contentContainerStyle={{paddingRight:40}}
            />
        )}

          </View>
    

            <View style={{height:'100%'}}>
            
        <Text style={styles.textTitle2}>Resturants...</Text>
       
        {isloadingRes ? <View style={[styles.indicatorContainer, styles.horizontal]} > 
        <ActivityIndicator 
        size='large'
        color='#D2042D'
        />
        </View> :(
            <FlatList  
            data={dataRestaurants}
            renderItem={renderResturants}
            keyExtractor={item=>`key-${item.resID}`}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{height:500}}
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
        marginTop:5,
        marginBottom:5,
        fontFamily:'Bangers',
        fontSize:40,
        color:'#D2042D',
      
        
    },
    textTitle1:{
        color:'#D2042D',
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
        height:80,
    },
    catImageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    },
    imageCat:{
        
        width:120,
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
export default Resturants;
