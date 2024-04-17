import  React,{useEffect,useState,useContext,useRef} from 'react';
import {Image,Text,View,StyleSheet,ImageBackground,Button,TextInput,TouchableOpacity,ActivityIndicator,FlatList, ScrollView}from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SpecificDish from './SpecificDish';
import CartPage from './CardPage';
import { FontAwesome5 } from '@expo/vector-icons';
import RestaurantDetails from './RestaurantDetails';
import { AppContext } from '../context/AppContext';
import ArrOfCategories from '../imageLists/arrOfCategories'
import {Category} from '../classes/Category';





const SpecificRestaurant=({navigation,route})=>{
    const image=require('../assets/back3.jpg')
    const {item,dishesRes1,photoDishes1}=route.params;

    const refContainer = useRef(); 
     const[arrCategoryObj,setArrCategoryObj]=useState([])
 
     

    useEffect(()=>{
        GetArrOfCategoriesDishes();
       },[dishesRes1])
const GetArrOfCategoriesDishes=()=>{
    let dishes=dishesRes1
    let arrOfCategories=[];
    let category="";
    category=dishes[0].category;
    arrOfCategories.push(new Category(category,1))
for(let i=0;i<dishes.length;i++){
    if(dishes[i].category!==category){
        category=dishes[i].category
        arrOfCategories.push(new Category(category,i))    
    }

}   
 setArrCategoryObj(arrOfCategories);
}

 
    

    
    
    const[dish,setDish]=useState(dishesRes1[0]);
    const[photo,setPhoto]=useState(photoDishes1[0])
    const[like,setLike]=useState(false)
    const [isLoading,setisLoading]=useState(false);
    const [data,setData]=useState([]);
    
    const[selectedDishLike,setSelectedDishLike]=useState([])

    //modal specific-dish hooks
    const[visible,setVisible]=useState(false);
    const[dishNum,setDishNum]=useState(1)
  
    
    //modal specific-res hooks
    const[visibleResModal,setVisibleResModal]=useState(false);
    const[guestNum,setGuestNum]=useState(1)
    const [date, setDate] = useState()



    const {
        listOfOrder,setListOfOrder,dataLikedRes,setDataLikedRes,dataLikedDishes,setDataLikedDishes,currentUser
        }=useContext(AppContext)

        const[cart,setCart]=useState(listOfOrder.length)
        
    useEffect(()=>{
        setCart(listOfOrder.length)
       },[listOfOrder])
 

    






        const likedDish=(item)=>{
            let user=currentUser

        if(selectedDishLike.includes(item.DishCode)){
            let arrLiked=[]
            arrLiked=[...dataLikedDishes]
            let arr=[]
            arr=[...selectedDishLike]
           let filterArr= arr.filter(id=>item.DishCode!==id)
           
           let filterLikedArr=arrLiked.filter(dish=>item.DishCode!==dish.DishCode)
 
           arrLiked=[...filterLikedArr]
            arr=[...filterArr]
            setSelectedDishLike(arr)
            setDataLikedDishes(arrLiked)
            return
        }
        let newLiked=[]
        newLiked=[{DishCode:item.DishCode,
            dishName:item.dishName,
            about:item.about,
            photoURL:item.photoURL,
            category:item.category,
            price:item.price,
            resID:item.resID,
            userID:user.userID}
        ,...dataLikedDishes]

        let newArr=[]
        newArr=[...selectedDishLike,item.DishCode]
        setSelectedDishLike(newArr)
        setDataLikedDishes(newLiked)
       
    }
    
    const dateHandler=(pickedDate)=>{
        setDate(pickedDate)
        
    }
    const SetCartLength=(num)=>{
        setCart(num);
    }
    const SetDishNum=()=>{
        setDishNum(1);
    }
    
    const dishNumHandlerIncrease=()=>{
        setDishNum(dishNum+1)
    }

    const dishNumHandlerDecrease=(num)=>{
        if(dishNum==1)
        {
            return;
        }
        else
        {
        setDishNum(dishNum-1)
        }
    }

    const guestNumHandlerIncrease=()=>{
        if(guestNum==10)
        {
            return;
        }
        else
        {
        setGuestNum(guestNum+1)
        }
        
    }
    const guestNumHandlerDecrease=()=>{
        if(guestNum==1)
        {
            return;
        }
        else
        {
        setGuestNum(guestNum-1)
        }
    }

    const onVisibleResHandler=()=>{
        setVisibleResModal(!visibleResModal) 
    }
    const onVisibleHandler=(item,photo)=>{
        // בזמן פתיחת מודל מנה פותח מודל ,מעביר את המנה הנבחרת ע"י המשתמש והתמונה
        setVisible(!visible);
        setDish(item);
        
        setPhoto(photo)
        
    }
  
   const onPressHandler=()=>{
setLike(!like)


   }


 



   renderCategories=({item,index})=>{
    return(
        <TouchableOpacity
        onPress={()=>{refContainer.current.scrollToIndex({index:item.index,animated:true})}}
        style={[styles.itemCategory,{
            width:100,
            height:40,
            backgroundColor:'black',
            marginHorizontal:5,
            borderColor:'#D2042D',
            borderWidth:0.5,
            marginTop:15,
        }]}
        >
            <View style={styles.catImageContainer}>
        
            <Text style={styles.catTitle}> {item.category} </Text>
            <Text>
            </Text>

            </View>
        </TouchableOpacity>
    )
}


renderDishes=({item,index})=>{
    return(
        <TouchableOpacity
        onPress={()=>onVisibleHandler(item,photoDishes1[index].photoURL) }
        style={[styles.item,{
            marginTop:11,
            height:150,
            backgroundColor:'black',
            borderColor:'#D2042D',
            borderWidth:1,
            flexDirection:'row',
            borderRadius:20
        }]} >
            <View style={styles.containerTitle} >
            <Text style={styles.resTitle}>{item.dishName}</Text>
            <Image
            style={styles.image}
            source={photoDishes1[index].photoURL}
            rezieMode='contain'
            />
 
            </View>

            <View style={styles.containerAbout}>
                <Text style={styles.resAbout}>About: </Text>
                
                <Text style={{color:'white'}}>{item.about}</Text>
                <Text style={styles.price}>Price: <MaterialCommunityIcons name="currency-ils" size={12} color="white" />{item.price}</Text>
                
            </View>
                        <TouchableOpacity  onPress={()=>likedDish(item)}>
  {selectedDishLike.includes(item.DishCode) ?
     <FontAwesome name="heart" size={25} color="red" />
    :
   <Feather name="heart" size={25} color="white" />
}
</TouchableOpacity>
        </TouchableOpacity>
    )
}


    return(
<SafeAreaView >
<ImageBackground source={image} >
<View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<SpecificDish onChange={onVisibleHandler} photo={photo}   dish={dish} visible={visible}  dishNum={dishNum} SetDishNumD={dishNumHandlerDecrease}  SetDishNumI={dishNumHandlerIncrease} SetDishNum={SetDishNum}/> 
</View>



<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<RestaurantDetails onChange={onVisibleResHandler} visible={visibleResModal} SetDate={dateHandler} item={item} guestNum={guestNum}  SetGuestNumD={guestNumHandlerDecrease} SetGuestNumI={guestNumHandlerIncrease}  />
</View>



<View style={{width:'100%',height:'20%'}}>
        <Image
        source={require('../assets/DishImages/resCode1_PizzaHut/resPHOTO/menuPizzaHut.jpg')}
        resizeMode='stretch'
        style={{width:'auto',height:'100%'}}
        />
</View>

<View style={{ width:'100%',height:'10%',borderRadius:150,backgroundColor:'black',borderColor:'#D2042D',borderWidth:1}}>
<View style={[styles.indicatorContainer, styles.horizontal]}>
<View style={{flex:0.7}}>
<TouchableOpacity
onPress={onVisibleResHandler }
>
<Text style={[styles.resTitle,{marginTop:5,fontSize:20,color:'white'}]}>  <Ionicons name="ios-reorder-four" size={32} color="white" /> {item.resName}  </Text>
</TouchableOpacity>

</View>


<View style={{flex:0.2,marginTop:12}}>
<TouchableOpacity  onPress={onPressHandler}>
  {like?
     <FontAwesome name="heart" size={30} color="red" />
    :
   <Feather name="heart" size={30} color="white" />
}

</TouchableOpacity>
</View>

<View style={{flex:0.2,marginTop:12}}>

<TouchableOpacity 
onPress={onVisibleResHandler}
>
<FontAwesome name="table" size={30} color="white" />
</TouchableOpacity>

</View>



<View style={{flex:0.2,marginBottom:5}}>
<Text style={{marginRight:10, backgroundColor:'#D2042D',borderRadius:50,fontFamily:'Bangers',fontSize:13,textAlign:'center',color:'white'}}>{cart}</Text>
<TouchableOpacity 
onPress={()=>{ navigation.navigate('CardPage')}}
>
{cart>0?
<MaterialCommunityIcons name="cart-heart" size={32} color="white" />
:
<MaterialCommunityIcons name="cart-outline" size={32} color="white" />
}
</TouchableOpacity>

</View>






</View>
</View>
<View style={{ width:'100%',height:'10%',borderRadius:150}}>
<FlatList 
            data={arrCategoryObj}
            horizontal
            renderItem={renderCategories}
            keyExtractor={(item,index)=>`key-${item.index}`}
            contentContainerStyle={{paddingRight:40}}
            />
</View>


<View style={{height: "60%",justifyContent:'flex-start'}} >
            
            {isLoading ? <View style={[styles.indicatorContainer, styles.horizontal]} > 
            <ActivityIndicator 
            size='large'
            color='#D2042D'
            />
            </View> :(
                <FlatList
                במקרה שגלישה לקטגוריה קורסת מאזין לקריסה ומחכה חצי שנייה
                onScrollToIndexFailed={info=>{
                    const wait = new Promise(resolve => setTimeout(resolve, 500));
                    wait.then(() => {
                     refContainer.current?.scrollToIndex({ index: info.index, animated: true });
                   });
                }}
                ref={refContainer}
                data={dishesRes1}
                renderItem={renderDishes}
                
                keyExtractor={dish=>`key-${dish.DishCode}`}
                ListFooterComponent={<View />}
            ListFooterComponentStyle={{height:100}}
                />
            )}
              </View>
              </ImageBackground>
</SafeAreaView>
    )

}



export const styles=StyleSheet.create({
   
    header:{
        width:'100%',
        height:40,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      },
      indicatorContainer: {
        flex: 1,
        justifyContent: "center"
      },
    like:{
        right:0
        
    },
    container:{
        flex:1,
    },
    
    heading:{
        fontSize:30,
        fontWeight:'700',
        color:'#D2042D'
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
        color:'black'
    },
        
        headingContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        },
       
   
    price:{
        color:'white',
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
        color:'white',
        fontSize:16
    },
    catTitle:{
        fontFamily:'Bangers',
        marginTop:10,
        color:'white',
        fontSize:16
    },
    resAbout:{
        fontFamily:'Bangers',
        color:'white',
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
        color:'black'
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
    itemCategory:{
        justifyContent:'flex-start'
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

    export default SpecificRestaurant;