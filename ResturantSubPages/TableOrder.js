import React from 'react'
import { SafeAreaView ,Text,StyleSheet,Header, ScrollView,View,TouchableOpacity} from 'react-native'
import { useTheme } from 'react-native-paper'
import CartCard from './CartCard'
import { MaterialCommunityIcons } from '@expo/vector-icons';



const TableOrder=()=>{




    return(
<Text></Text>
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
        borderRadius:50
    },
    textTitle2:{
        fontFamily:'Bangers',
        fontSize:40,
        color:'black',
        textAlign:'center',
        marginTop:15 
    },
    textTitle1:{
        fontFamily:'Bangers',
        fontSize:28,
        color:'black',
        marginTop:15,
        textAlign:'left',
        marginLeft:18
    },
    totalPrice:{
        fontFamily:'Bangers',
        fontSize:24,
        color:'black',
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
export default TableOrder;