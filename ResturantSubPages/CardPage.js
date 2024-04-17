import React,{useState,useContext,useEffect} from 'react'
import { Alert,SafeAreaView ,Text,StyleSheet,Header, ScrollView,View,TouchableOpacity,ImageBackground} from 'react-native'
import { useTheme } from 'react-native-paper'
import CartCard from './CartCard'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import CheckoutTableOrder from './CheckoutTableOrder';
import CheckoutTakeAway from './CheckoutTakeAway';
import { AppContext } from '../context/AppContext';


const CartPage=({navigation})=>{
    const [checked, setChecked] = React.useState('TakeAway')
    const image=require('../assets/back3.jpg')
        //modal specific-dish hooks
        
        const[visibleTakeAway,setVisibleTakeAway]=useState(false);
        const[visibleOrderTable,setVisibleOrderTable]=useState(false);
        const[dishNum,setDishNum]=useState(1)

       
     

        const {
            listOfOrder,setListOfOrder
            }=useContext(AppContext)




            useEffect(()=>{
               
               },[listOfOrder])


        const visibleHandler=()=>{
            if(units===0){

                Alert.alert(
                    "CART IS EMPTY!!!",
                    "Please add some food...",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  );
                return;
            }
            if(checked=='TakeAway'){
            setVisibleTakeAway(!visibleTakeAway)
            }
            else{        
            setVisibleOrderTable(!visibleOrderTable)
            }
        }
        const onVisibleOrderTable=()=>{
            
        }
        
       // maps all dishes of user selection
            const listToCart = listOfOrder.map((item,index)=> <CartCard item={item} key={index}/>) 
         //reduce the prices of all dishes by user   
            let prices=listOfOrder.reduce(function(prev,currnt){
                return prev+ +currnt.price
            },0)
            let units=listOfOrder.reduce(function(prev,currnt){
                return prev+ +currnt.units
            },0)
        
        
        
            
            
return(
   <SafeAreaView >
     <ImageBackground source={image} >
   <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<CheckoutTableOrder navigation={navigation} onChange={visibleHandler} listOfOrder={listOfOrder} visible={visibleOrderTable} /> 
</View>


<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<CheckoutTakeAway navigation={navigation} onChange={visibleHandler} listOfOrder={listOfOrder} visible={visibleTakeAway}  />
</View>



    <Text style={styles.textTitle2}>Order Cart</Text>
    <View style={styles.divider2}/>
    <ScrollView style={[styles.content,{height:'45%'}]}>
   
    {listToCart.length===0?<Text style={{color:'#D2042D',fontFamily:'Bangers',fontSize:30,textAlign:'center'}}> cart is empty</Text> 
    :listToCart}
    </ScrollView>
    <View style={styles.divider2}/>
    <View style={{width:'80%',alignContent:'center',alignSelf:'center' ,borderRadius:20,borderWidth:0.5,borderColor:'white'}} backgroundColor='black'>  
     
     <View style={{flexDirection:'row'}}>
    <Text style={[styles.textTitle1]}>Total-Price: </Text>
    <Text  style={[styles.totalPrice]} ><MaterialCommunityIcons name="currency-ils" size={18} color="white" /> {prices} </Text>
    </View>
    <View style={{flexDirection:'row'}}>
    <Text style={[styles.textTitle1]}>Total-Units: </Text>
    <Text  style={[styles.totalPrice]} > {units} </Text>
    </View>

</View>

    <View style={styles.divider2}/>
    
    <View style={{flexDirection:'row',height:'10%',width:'90%',alignContent:'center',alignSelf:'center' ,borderRadius:20,borderWidth:0.5,borderColor:'white',backgroundColor:'black'}}> 
    <View style={{position:'absolute',left:60}} >
    <Text style={{fontFamily:'Bangers',fontSize:18,color:'white'}} >Order On Table </Text>
    <RadioButton
        value="TableOrder"
        status={ checked === 'TableOrder' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('TableOrder')}
      />
      </View>

      <View style={{position:'absolute',right:60}}>
      <Text style={{fontFamily:'Bangers',fontSize:18,color:'white'}}>Take Away </Text>
      <RadioButton
        value="TakeAway"
        status={ checked === 'TakeAway' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('TakeAway')}
      />
    </View>
    </View>
    
    <View style={{alignContent:'center',alignItems:'center'}} >
    <TouchableOpacity style={styles.buttonCheckout}  onPress={visibleHandler}>
    <Text style={styles.buttonText}>checkout </Text>
    </TouchableOpacity>
    </View>
    </ImageBackground>
   </SafeAreaView>
)
}
export const styles=StyleSheet.create({
    buttonText:{
        fontFamily:'Bangers',
        fontSize:20,
        color:'white'
    },
    buttonCheckout:{
        backgroundColor:'#D2042D',
        width:200,
        justifyContent:'center',
        alignItems:'center',
        margin:'auto',
        height:50,
        marginTop:10,
        marginBottom:10,
        borderRadius:50,
        borderColor:'white',
        borderWidth:0.5
    },
    textTitle2:{
        backgroundColor:'black',
        borderRadius:50,
        borderWidth:0.5,
        borderColor:"white",
        fontFamily:'Bangers',
        fontSize:40,
        color:'white',
        textAlign:'center',
        marginTop:15 
    },
    textTitle1:{
        fontFamily:'Bangers',
        fontSize:28,
        color:'white',
        marginTop:15,
        textAlign:'left',
        marginLeft:18
    },
    totalPrice:{
        fontFamily:'Bangers',
        fontSize:24,
        color:'white',
        position:'absolute',
        right:3,
        marginTop:15,
        marginRight:18
    },

    container:{
        flex:1,
        backgroundColor:'white',

    },
    content:{
        marginHorizontal:29,
        paddingBottom:32
    },
    titleSection:{
        marginLeft:16,
    },
    actions:{
        width:95,
        height:30,
        borderRadius:20,
        backgroundColor:'rgba(0,0,0,0.06)'

    },
    delete:{
        width:53,
        height:55,
        borderRadius:20,
        borderWidth:1,
        backgroundColor:'#ff3d00',
    },
    card:{
        marginTop:32,
    },
    image:{
        width:124,
        height:121,
        borderRadius:20,
        backgroundColor:'#808080'
    },
    titleSection:{
        marginLeft:16,

    },
    totalSelection:{
        marginTop:32
    },
    divider:{
        height:1,
        borderColor:'#DDDDDD',
        borderStyle:'dashed',
        borderWidth:1,
        alignSelf:'stretch',
        flex:1,
        marginHorizontal:29,
        marginTop:5,
    },
    divider2:{
        width:'100%',
        height:2,
        backgroundColor:'black',
        marginTop:5,
        marginBottom:5
        },
    button:{
        marginTop:32,
        alignSelf:'center',
        paddingHorizontal:36,
        
    }


})
export default CartPage;