import  React,{useEffect,useState,useContext} from 'react';
import {Modal,Image,Text,View,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator,FlatList, Animated, ScrollView}from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AppContext } from '../context/AppContext';
import { OrderKitchen } from '../classes/OrderKitchen';


const CheckoutTableOrder=(props)=>{
    
    const[selectedHour,setSelectedHour]=useState('i am seating')
    const orderType="OnTable";
    const [shouldShow, setShouldShow] = useState(false);
    const [hourList,setHourList]=useState([
        {hour:'i am seating',key:1},
        {hour:'12-30',key:2},
        {hour:'13-00',key:3},
        {hour:'13-30',key:4},
        {hour:'14-00',key:5},
        {hour:'14-30',key:6},
        {hour:'15-00',key:7},
        {hour:'15-30',key:8},
        {hour:'16-00',key:9},
        {hour:'16-30',key:10},
        {hour:'17-00',key:11},
        {hour:'17-30',key:12},
        {hour:'18-00',key:13},
        {hour:'18-30',key:14},
        {hour:'19-00',key:15},
        {hour:'19-30',key:16},
        {hour:'20-00',key:17},
        {hour:'20-30',key:18},
    ])
    
    const {
        listOfCart,setListOfCart,setListOfOrder,orderID,setOrderID
        }=useContext(AppContext)


    const addToOrderHandler=()=>{
        let arr=[...props.listOfOrder];
        let newArr=[...listOfCart]
        const hourOrder=new Date();
        let len=newArr.length
        let orderNum=orderID;
        let hour=hourOrder.getHours()+":"+hourOrder.getMinutes();
        arr.forEach((item,index)=>{
            newArr[len+index]=new OrderKitchen(orderNum,item.DishCode
                ,item.about
                ,item.dishName
                ,item.photoURL
                ,item.price
                ,item.resID
                ,item.units
                ,hour
                ,selectedHour
                ,item.userID
                ,orderType
                )
        } 
        
        )
     
// חילוק מספרי הזמנה שיוצגו בדף מנהל מטבח      
      
        orderNum++;
       setOrderID(orderNum)
       console.log("_--------------------",newArr)
        setListOfCart(newArr)


        //שכלול מחיר המנה לפי כמות מנות קאונטר
        // הוספת המנה לרשימת ההזמנה
        props.onChange(false)
        props.navigation.navigate('OrderDetails',{item:newArr})
        



   }
   // אין אפשרות לקחת פחות ממנה 1

  const selectedItem=(item)=>{

    let hour=item
   

  }

   return(

<Modal  transparent visible={props.visible}  >


<View style={styles.modalBackGround} >

       <View style={[styles.modalContainer]}>

       <View style={{alignItems:'flex-end'}} >

<View >
   <TouchableOpacity onPress={()=>props.onChange(false)}>
       <Feather name="x" size={34} color="black" />
   </TouchableOpacity>
</View>

</View>
       <View style={{alignItems:'center'}}>
   <Image source={require('../assets/table.jpg')}  
       style={{height:160,width:200,borderRadius:50}}
   />
   <View style={{alignContent:'center',alignItems:'center'}}>
   <TouchableOpacity style={styles.buttonCheckout}  onPress={()=>setShouldShow(!shouldShow)}>
    <Text style={styles.buttonText}>find me hour </Text>
    </TouchableOpacity>
   </View>
    <View style={styles.divider2}/>
   </View>

   <View style={{height:'30%'}}>
    {shouldShow ?  (
        <FlatList 
   visible={false}
   data={hourList}
   keyExtractor={item=>`key-${item.key}`}
   renderItem={({item})=>(
    <TouchableOpacity onPress={()=>setSelectedHour(item.hour)}>
    <View  style={{marginBottom:5,marginTop:5,backgroundColor:'#D2042D',borderRadius:150}}>
    <Text  style={item.hour===selectedHour ?styles.selectedButtonText:styles.buttonText } > {item.hour} </Text>
    </View>
    </TouchableOpacity>
   )}
   />
        
    ):null} 
  
   </View>

   <View style={styles.divider2}/>

   <View style={{alignContent:'center',alignItems:'center'}} >
    <TouchableOpacity onPress={addToOrderHandler} style={styles.buttonCheckout}  >
    <Text style={styles.buttonText}>Pay </Text>
    </TouchableOpacity>
  
    </View>


       </View>
       
   

</View>

</Modal>
   )
} 
export const styles=StyleSheet.create({
  
    buttonHistory:{
        backgroundColor:'#D2042D',
        width:110,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        marginTop:50,
    },
    buttonCheckout:{
        backgroundColor:'black',
        width:200,
        justifyContent:'center',
        alignItems:'center',
        margin:'auto',
        height:50,
        marginTop:20,
        borderRadius:50
    },
    buttonText:{
        color:'white',
        fontFamily:'Bangers',
        fontSize:22,
        alignSelf:'center'
    },
    selectedButtonText:{
        color:'black',
        fontFamily:'Bangers',
        fontSize:22,
        alignSelf:'center'
    },
   modalContainer:{
       width:'80%',
       backgroundColor:'white',
       paddingHorizontal:20,
       paddingVertical:30,
       borderRadius:20,
       elevation:50,

   },
   modalBackGround:{
       flex:1,
       backgroundColor:'rgba(0,0,0,0.5)',
       justifyContent:"center",
       alignItems:'center'
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
  
   resTitle:{
       fontFamily:'Bangers',
       color:'black',
       fontSize:26,
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
      
       divider2:{
        width:'100%',
        height:2,
        backgroundColor:'black',
        marginTop:5,
        marginBottom:5
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
export default CheckoutTableOrder;






