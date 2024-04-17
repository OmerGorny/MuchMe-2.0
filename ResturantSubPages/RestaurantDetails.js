import  React,{useEffect,useState} from 'react';
import {Modal,Image,Text,View,StyleSheet,TouchableOpacity,Button,Alert,ImageBackground}from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from "react-native-paper"
import DateTimePickerModal from "react-native-modal-datetime-picker";



const RestaurantDetails=(props)=>{
    const image=require('../assets/back3.jpg')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        let pickedDate=JSON.stringify(date)
        pickedDate=pickedDate.substring(1,11)
        Alert.alert(
            'Date-Order Confirm',
            'You Choose on: '+pickedDate+' let us find you available hours.' ,
            [
                {
                    text:`No`,
                    onPress:()=>console.log('No Pressed'),
                    style:'cancel'
                },
                {
                    text:'Yes',
                     onPress:()=>{props.SetDate(pickedDate)
                        
                     }
                }
            ]
        )
        
        hideDatePicker();
      };



    const addToOrderHandler=()=>{
        //שכלול מחיר המנה לפי כמות מנות קאונטר
        // הוספת המנה לרשימת ההזמנה
        props.onChange(false)

   }

    return(
<Modal  transparent visible={props.visible}  >


<DateTimePickerModal
        isVisible={isDatePickerVisible}// poprs.visibleResModal
        mode="date"
        onConfirm={handleConfirm} // props.
        onCancel={hideDatePicker}
      />

<View style={styles.modalBackGround} >
        <View style={[styles.modalContainer]}>
<ImageBackground source={image} >

        <View style={{alignItems:'flex-end'}} >

<View >
    <TouchableOpacity onPress={()=>props.onChange(false)}>
        <Feather name="x" size={34} color="white" />
    </TouchableOpacity>
</View>
</View>

        <View style={{alignItems:'center',backgroundColor:"black",borderRadius:50,borderColor:'#D2042D',borderWidth:1.5}}>
        <Text style={{fontFamily:'Bangers',fontSize:28,color:'white'}}>Order Table </Text>
    <Image source={require('../assets/table.jpg')}  
        style={{height:150,width:250,borderRadius:50}}
    />
    </View>
    <View style={{height:'20%'}}>
      
    <Text style={{marginVertical:5,color:'white',left:15 ,fontFamily:'Bangers',fontSize:20}}>{props.item.resName}</Text>
    <Text style ={{color:'white',left:15}} >Open at: {props.item.openHour} , Closes at: {props.item.closeHour} </Text>

    <Text style ={{color:'white',left:15}} >{props.item.about}</Text>

    <Text style ={{marginVertical:5,color:'white',left:15}} >call us: {props.item.phone}</Text>
    </View>

    <View style={styles.divider2}/>
<View style={{flexDirection:'column',justifyContent:'space-between'}}>



        <View style={{position:'absolute',right:10}} >
            <TouchableOpacity 
             onPress={()=>{props.SetGuestNumI(props.guestNum)}}
             >
       <FontAwesome5 name="plus-circle" size={24} color="#D2042D"  />
        </TouchableOpacity>



        <Text style={{marginLeft:4,fontFamily:'Bangers',color:'white',fontSize:18}}>{props.guestNum} </Text>
        <TouchableOpacity 
        onPress={()=>{props.SetGuestNumD(props.guestNum)}}
         >
        <FontAwesome name="minus-circle" size={26} color="#D2042D" />
        </TouchableOpacity>
        </View>
        <Text style={{left:15,marginVertical:30,fontFamily:'Bangers',fontSize:18,color:'white'}}>Number of Guest's</Text>
</View>
  <View>
    <TouchableOpacity 
        onPress={showDatePicker}
        style={[styles.buttonDate]} >
   <Text style={styles.buttonText}>Choose Date </Text>
   </TouchableOpacity>
   </View>
   <View style={styles.divider2}/>

     <View style={{alignItems:'center'}} >
        <TouchableOpacity 
        onPress={addToOrderHandler}
        style={[styles.buttonHistory]} >
   <Text style={styles.buttonText}>Order Table </Text>
   </TouchableOpacity>
        </View>


</ImageBackground>
        </View>
        
    

</View>

</Modal>
    )
}
export const styles=StyleSheet.create({
    divider2:{
        width:'100%',
        height:2,
        backgroundColor:'black',
        marginTop:5,
        marginBottom:5
        },
    input: {
        alignSelf:'center',
        width:250,
        height: 20,
        margin: 10,
        borderWidth: 2,
        borderColor:'#D2042D',
        padding: 10,
      },
      icon:{
        marginTop:25
    },
    
    buttonHistory:{
        backgroundColor:'black',
        width:160,
        borderRadius:40,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        height:50,
        marginBottom:10
    },
    buttonDate:{
        backgroundColor:'#D2042D',
        width:100,
        borderRadius:40,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        
        height:50,
        marginBottom:20
    },
    
    buttonText:{
        fontFamily:'Bangers',
        fontSize:20,
        color:'white'
       
    },
    modalContainer:{
        width:'90%',
        
        paddingHorizontal:20,
        paddingVertical:30,
       
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
export default RestaurantDetails;