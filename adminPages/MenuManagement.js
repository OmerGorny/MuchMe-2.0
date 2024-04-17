import  React,{useState,useEffect,useContext} from 'react';
import {ActivityIndicator,SafeAreaView,View,Text,StyleSheet, FlatList, TouchableOpacity,Image}from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AppContext } from '../context/AppContext';

const MenuManagement=({navigation})=>{
    const [isLoading,setisLoading]=useState(true);
    const [data,setData]=useState([]);
    const[selectedDish,setSelectedDish]=useState([])


    const {dataRestaurants,setDataRestaurants,isLoadingRes,
           dishesRes1,photoDishes1,
        }=useContext(AppContext)
    useEffect(()=>{
        getListPhotos();
        return()=>{
            
        }
    },[])



    const delDish=(item)=>{
        let arr=[]
        let filterArr=[]
        arr=[...data]
        filterArr=arr.filter(dish=>dish.id!==item.id)
        arr=[...filterArr]
        setData(arr)

    }
    const DelDoneDishes=()=>{
        let arr=[]
        let filterArr=[]
        arr=[...data]
        filterArr=arr.filter(item=>!selectedDish.includes(item.id)) // בדיקה מול מערך האיידים של המנות הנבחרות לרשימת כל ההזמנות שנשלחו למסעדה ומחיקה של כל אותם המנות המסומנות
        arr=[...filterArr]
        setData(arr)
       
    }
    const doneDish=(item)=>{

        if(selectedDish.includes(item.id)){
            let arr=[]
            arr=[...selectedDish]
           let filterArr= arr.filter(id=>item.id!==id)
            arr=[...filterArr]
            setSelectedDish(arr)
            console.log("arr",arr)
            return
        }
        let newArr=[]
        newArr=[...selectedDish,item.id]
        setSelectedDish(newArr)
        console.log(selectedDish)

    }
    getListPhotos=()=>{
        const apiURL='https://jsonplaceholder.typicode.com/photos?_limit=20&_page=1';
        fetch(apiURL)
        .then((res)=>res.json())
        .then((resJson)=>{
            setData(resJson);
        }).catch((error)=>{
            console.log('Error:',error);
        }).finally(()=>setisLoading(false));
    }

    
    renderOrderDishes=({item,index})=>{

        return(



            <SafeAreaView>
            
            <View onPress={()=>doneDish(item)}
            style={[styles.item,{
                marginTop:11,
                height:150,
                backgroundColor:'white',
                flexDirection:'row',
                marginBottom:5,
            }]}
            >
                <View style={styles.containerTitle} >
                <Text style={styles.resTitle}>{item.dishName}</Text>
                <Image
                style={styles.image}
                source={photoDishes1[index].photoURL}
                rezieMode='contain'
                />
                </View>
                <View  style={styles.containerAbout}>
                <Text style={styles.resAbout}>About: </Text>
                    <Text>{item.about}</Text>
                    <Text style={styles.price}>Price:<MaterialCommunityIcons name="currency-ils" size={12} color="black" />{item.price}</Text>
                </View>

            <TouchableOpacity onPress={()=>navigation.navigate("Update")}>
                <MaterialCommunityIcons name="update" size={28} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.del}
            onPress={()=>delDish(item)}
            >
                <MaterialCommunityIcons   name="delete" size={28} color="black" />
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        )
    }


return(
    <SafeAreaView>
    <View style={{height:'100%'}}>
    <Text style={[styles.textTitle2,{marginTop:30}]}>Menu Update...</Text>
    <TouchableOpacity  onPress={()=>navigation.navigate("NewDish")}
    style={styles.buttonHistory} >
    <Text style={styles.buttonText}>Add New Dish </Text>
    </TouchableOpacity>
    {isLoadingRes ? <View style={[styles.indicatorContainer, styles.horizontal]} > 
    <ActivityIndicator 
    size='large'
    color='#D2042D'
    />
    </View> :(
        <FlatList 
        data={dishesRes1}
        renderItem={renderOrderDishes}
        keyExtractor={item=>`key-${item.DishCode}`}
        />
    )}
    </View>
   
</SafeAreaView>
)
}
const styles=StyleSheet.create({
    buttonText:{
        fontFamily:'Bangers',
        fontSize:20,
        color:'white'
       
    },
    price:{
        position:'absolute',
         bottom: 0
    },
    del:{
        position:'absolute',
        bottom:2,
        right:5
        
    },
    buttonHistory:{
        backgroundColor:'#D2042D',
        textAlign:'center',
        alignSelf:'center',
        borderRadius:150,
        borderColor:'black',
        borderWidth:2,
        width:150,
        justifyContent:'center',
        alignItems:'center',
        height:50,
    },
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
        color:'black'
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
export default MenuManagement;
