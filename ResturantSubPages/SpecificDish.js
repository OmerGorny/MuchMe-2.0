import  React,{useEffect,useState,useContext} from 'react';
import {Alert,Modal,Image,Text,View,StyleSheet,TextInput,TouchableOpacity,ImageBackground}from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AppContext } from '../context/AppContext';
import {User} from '../classes/User';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const SpecificDish=(props)=>{
   
 
    const image=require('../assets/back3.jpg')

    const {
        listOfOrder,setListOfOrder,
        currentUser,setCurrentUser
        }=useContext(AppContext)



      
    const addToOrderHandler=(dish)=>{
        let listOfORDER=[...listOfOrder]
        let user=currentUser;
       let index=listOfORDER.findIndex(item=>item.DishCode===dish.DishCode)
      // אין אפשרות להזמין את אותו קוד מנה פעמיים רק לעדכן את מס היחידות של אותו קוד מנה
        if(index!==-1){// אם נמצא אז תתעדכן אותה המנה לפי מס היחידות שירשום המשתמש
          listOfORDER[index]={DishCode:dish.DishCode,
            dishName:dish.dishName,
            about:dish.about,
            photoURL:props.photo,
            price:dish.price*props.dishNum,
            resID:dish.resID,
            units:props.dishNum,
            userID:user.userID};
          setListOfOrder(listOfORDER)
          props.onChange(false)
          return
        }
      
       
      // הוספת מנה ע"י בחירת המשתמש לרשימת ההכנה
      // להוסיף פרופ של מזהה משתמש
        let arr=[];
         arr=[{DishCode:props.dish.DishCode,
            dishName:props.dish.dishName,
            about:props.dish.about,
            photoURL:props.photo,
            price:props.dish.price*props.dishNum,
            resID:props.dish.resID,
            units:props.dishNum,
            userID:user.userID},...listOfOrder]
            
 //עדכון תצוגת כמות הזמנות בעגלה למשתמש
         setListOfOrder(arr)
         // איפוס מס יחידות
         props.SetDishNum(1);
        
    // סגירת מודל
         props.onChange(false)
         return

    }

    
    return(

<Modal  transparent visible={props.visible} >
 


<View style={[styles.modalBackGround]} >
<ImageBackground source={image} >
        <View style={[styles.modalContainer]}>
       

        <View style={{alignItems:'flex-end'}} >

<View >
    <TouchableOpacity onPress={()=>props.onChange(false)}>
        <Feather name="x" size={34} color="white" />
    </TouchableOpacity>
</View>
</View>
        <View style={{alignItems:'center'}}>
    <Image source={props.photo}  
        style={{height:250,width:250,borderRadius:50,}}
    />
    </View>
      
    <Text style={[styles.resTitle,{marginVertical:10,color:'white',backgroundColor:"black",borderRadius:50,borderColor:'#D2042D',borderWidth:1.5}]}>{props.dish.dishName}</Text>
   

    <Text style ={[styles.resAbout,{marginVertical:10,color:'white'}]} >about:</Text>
    <Text style={{marginBottom:15,color:'white'}}>{props.dish.about}</Text>
    

   
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{marginLeft:15}} >
            <TouchableOpacity onPress={()=>{props.SetDishNumI(props.dishNum)}}  >
            <FontAwesome5 name="plus" size={24} color="white" style={{backgroundColor:"black",borderRadius:50}} />
        </TouchableOpacity>
        <Text style={{marginLeft:4,fontFamily:'Bangers',fontSize:18,color:'white'}}> {props.dishNum}</Text>
        <TouchableOpacity onPress={()=>{props.SetDishNumD(props.dishNum+1)}} >
        <FontAwesome5 name="minus" size={24} color="white" style={{backgroundColor:"black",borderRadius:50}}  />
        </TouchableOpacity>
        
        </View>


        <View style={{marginRight:15}} >
        <TouchableOpacity 
        onPress={()=>addToOrderHandler(props.dish)}
        style={[styles.buttonHistory,{marginTop:10}]} >
   <Text style={styles.buttonText}>Add To Order </Text>
   </TouchableOpacity>
   
 
        </View>
        
</View>
<View style={{backgroundColor:'black',borderRadius:50,borderColor:'#D2042D',borderWidth:1.5}} > 
<Text style ={{fontFamily:'Bangers',fontSize:22,color:'white',borderColor:'black',alignSelf:'center',}} >price: <MaterialCommunityIcons name="currency-ils" size={12} color="white" />{props.dish.price*props.dishNum} </Text>
</View>

 

        </View>
</ImageBackground>
        
    

</View>

</Modal>
    )
} 
export const styles=StyleSheet.create({
    
    buttonHistory:{
        backgroundColor:'black',
        width:110,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        marginTop:40,
        marginBottom:20
    },
    divider2:{
        width:'100%',
        height:2,
        backgroundColor:'black',
        marginTop:5,
        marginBottom:5
        },
    buttonText:{
        fontFamily:'Bangers',
        fontSize:20,
        color:'white',
       
        borderWidth:1.5,
        borderRadius:50
       
    },
    modalContainer:{
        width:'80%',
        borderColor:'black',
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
        fontSize:22,
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
        textAlign:'center',
        color:'black',
        fontSize:20
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
export default SpecificDish;