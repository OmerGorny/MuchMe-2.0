import  React,{useState,useEffect,useContext} from 'react';
import {ActivityIndicator,ScrollView,SafeAreaView,View,Text,StyleSheet, FlatList,TouchableOpacity,Image}from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
import { AppContext } from '../context/AppContext';
import { OrderKitchen } from '../classes/OrderKitchen';

const KitchenManagement=({navigation})=>{
    const [isLoading,setisLoading]=useState(true);
    const [data,setData]=useState([]);
    const[selectedDish,setSelectedDish]=useState([])
    const[currentDay,setCurrentDay]=useState(new Date().toString().slice(0,15))

    
    const {dataRestaurants,setDataRestaurants,isLoadingRes,listOfCart,
        dishesRes1,photoDishes1,listToKitchen,setListToKitchen,dataHistory
     }=useContext(AppContext)

    
     

    useEffect(()=>{
         handleData();  
        
        
       
    },[dataHistory])

    const handleData=()=>{
        let newArr=[...dataHistory]
        setListToKitchen(newArr)
    }
   
    console.log("check",dataHistory)
    const orders=listToKitchen.map((dish,index)=>{ return dish.date.toString().slice(0,15)===currentDay ?
                                                    
                                               <View key={index}>
                                                <Text style={[styles.title]}> order-ID: {dish.id}</Text>
                                                <Text style={[styles.titleType]}> order-Type: {dish.orderType}</Text>
                                                <Text style={[styles.textTitle3]}>hour Of Order: {dish.hourOfOrder} </Text>
                                                <Text style={[styles.textTitle3]}>hour ready: {dish.hourReady} </Text>
                                                <Text style={[styles.textTitle3]}>dish code: {dish.DishCode}  </Text>
                                                <Text style={[styles.textTitle3]}>dish name: {dish.dishName}  </Text>
                                                <Text style={[styles.textTitle3]}>total UNITS: {dish.units} </Text>
                                                <View style={{alignSelf:'center'}}>
                                                <TouchableOpacity
                onPress={()=>doneDish(dish)}
                   >
                   {selectedDish.includes(dish.id) ?
                  
                    <Octicons name="dot-fill" size={55} color="green" />
                   :
                   <Octicons name="dot" size={55} color="black" />
                   }
                
                </TouchableOpacity>
                    </View>
    </View>
    
   
:
null
}
    )
    
   
    
    const DelDoneDishes=()=>{
        let arr=[]
        let filterArr=[]
        arr=[...listToKitchen]
        filterArr=arr.filter(item=>!selectedDish.includes(item.id)) // בדיקה מול מערך האיידים של המנות הנבחרות לרשימת כל ההזמנות שנשלחו למסעדה ומחיקה של כל אותם המנות המסומנות
        arr=[...filterArr]
        setListToKitchen(arr)
       
    }
    const doneDish=(item)=>{

        if(selectedDish.includes(item.id)){
            let arr=[]
            arr=[...selectedDish]
           let filterArr= arr.filter(id=>item.id!==id)
            arr=[...filterArr]
            setSelectedDish(arr)
           
            return
        }
        let newArr=[]
        newArr=[...selectedDish,item.id]
        setSelectedDish(newArr)
        

    }
  

    
  


return(
    <SafeAreaView>
    <View style={{height:'100%'}}>
    <Text style={[styles.textTitle1,{marginTop:30}]}>Orders...</Text>
    <TouchableOpacity 
    onPress={DelDoneDishes}
    style={styles.buttonHistory} >
    <Text style={styles.buttonText}>Clean done Dishes</Text>
    </TouchableOpacity>
   <ScrollView style={{width:'80%',alignContent:'center',alignSelf:'center' ,borderRadius:20,borderWidth:0.5,borderColor:'black'}} backgroundColor='white' >
    <View>

{orders[0]===null ? <Text style={styles.resTitle}>No Orders today yet...!</Text> :

orders }
    </View>
    </ScrollView>
   
    
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
    buttonHistory:{
        backgroundColor:'green',
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
        marginTop:40,
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
    textTitle2:{
        fontFamily:'Bangers',
        fontSize:40,
        color:'white',
        textAlign:'center',
        marginTop:15 
    },
    title:{
        fontFamily:'Bangers',
        fontSize:18,
        color:'black',
        marginTop:2,
        backgroundColor:'green',
        borderWidth:1,
        borderColor:'black',
        borderRadius:20

    },
    titleType:{
        fontFamily:'Bangers',
        fontSize:18,
        color:'black',
        marginTop:2,
        textAlign:'center',
        backgroundColor:'green',
        borderWidth:1,
        borderColor:'black',
        borderRadius:20

    },
    textTitle3:{
        fontFamily:'Bangers',
        fontSize:18,
        color:'black',
        marginTop:2,
        marginLeft:28
    },
    textTitle:{
        fontFamily:'Bangers',
        alignSelf:'center',
        fontSize:28,
        color:'white',
        marginTop:15,
        textAlign:'left',
        marginLeft:18,
        backgroundColor:'black',
        borderRadius:50,
        borderWidth:2,
        borderColor:'white'
    },
    imageCat:{
        
        width:100,
        height:100,
    },
    item:{
        marginBottom:20,
        padding:15,
        color:'black',
        opacity:0.8,
        marginTop:10,
        shadowColor:'black',
        shadowOffset:0.5,
        shadowOffset:{width:0,height:4},
        shadowRadius:8,
        elevation:5,
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:2,
        borderRadius:5,
        borderLeftWidth:15,
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
export default KitchenManagement;
