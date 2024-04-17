import  React,{useEffect,useState} from 'react';
import {Image,Text,View,StyleSheet,TextInput,TouchableOpacity}from 'react-native';
import { ApplicationProvider,IconRegistry,Icon, Layout } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';




const Search=()=>{
    const[searchNote,setSearchNote]=useState()
    
const search=()=>{

}
const clear=()=>{

}

    return(

        <View style={styles.container}>
        <Image
        source={require('../assets/food_icon1.png')}
        resizeMode='center'
        style={styles.image}/>
     
      

<View style={{flexDirection:'row'}}>
<TextInput fontFamily='Bangers' placeholder='Search...' value={searchNote} onChangeText={(text)=>setSearchNote(text)}  placeholderTextColor={'#D2042D'} style={[styles.input,{borderRadius:3}]}></TextInput>
<TouchableOpacity style={[styles.searchButton,{width:50,marginLeft:5}]}  onPress={()=>search()}>
<IconRegistry icons={EvaIconsPack}/>
<ApplicationProvider {...eva}theme={eva.light}/>
<Icon name='search' fill="white" style={{width:22,height:50}}></Icon>
</TouchableOpacity >
<TouchableOpacity style={[styles.searchButton,{marginLeft:5}]} onPress={()=>clear()}>

    <Text style={styles.searchButtonText}>Clear </Text>
</TouchableOpacity>

        </View>
        </View>
    )
}
export const styles=StyleSheet.create({
    noteContainer:{
    paddingTop:10,
    paddingHorizontal:20,
    marginBottom:70,
    opacity:0.9,
    
    },
    container:{
        marginBottom:400,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:400,
        height:250,
        marginVertical:10
    },
    heading:{
        fontSize:30,
        fontWeight:'700',
        color:'#D2042D'
    },
    divider:{
    width:'100%',
    height:2,
    backgroundColor:'#D2042D'
    ,
    marginTop:5,
    marginBottom:5
    },
        item:{
            marginBottom:20,
            padding:15,
            color:'black',
            opacity:0.8,
            marginTop:10,
            shadowColor:'#D2042D',
            shadowOffset:0.5,
            shadowOffset:{width:0,height:4},
            shadowRadius:8,
            elevation:5,
            backgroundColor:'white',
            borderColor:'#D2042D',
            borderWidth:2,
            borderRadius:5,
            borderLeftWidth:15,
        },
    
        headingContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        },
        button:{
            backgroundColor:'#D2042D',
            width:50,
            borderRadius:100,
            justifyContent:'center',
            alignItems:'center',
            marginLeft:10,
            height:50,
        },
        buttonText:{
            color:'white',
            fontSize:32,
            fontWeight:'800'
    
        },
        scrollView:{
            marginBottom:70
        },
        note:{
            flexDirection:'row',
            width:'75%'
        },
        index:{
    
            fontWeight:'700',
            fontSize:19,
            alignSelf:'center'
        },
        text:{
            fontWeight:'700',
            fontSize:17,
            alignSelf:'center'
        },
        delete:{
            color:'#D2042D',
            fontWeight:'700',
            fontSize:15
        },
        input:{
            height:40,
            paddingHorizontal:20,
            width:230,
            fontSize:22,
            color:'black',
            fontFamily:'Bangers',
            opacity:0.8,
            shadowColor:'#D2042D',
            shadowOpacity:0.4,
            shadowOffset:{width:0,height:4},
            shadowRadius:8,
            elevation:5,
            backgroundColor:'white',
            borderColor:'#D2042D',
            borderWidth:2,
            borderRadius:5
        },
    
    searchContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:8
    },
    searchButton:{
    backgroundColor:'#D2042D',
    alignItems:"center",
    justifyContent:'center',  
    width:60,  
    borderRadius:5,
    height:40
    },
    
    searchButtonText:{
    fontFamily:'Bangers',
    color:'white',
    fontSize:16
    },
    emptyNoteContainer:{
    alignItems:'center',
    marginTop:240
    },
    emptyNoteText:{
    color:'#D2042D',
    fontWeight:'600',
    fontSize:15
    },
        dateContainer:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },
    
        
    })

export default Search;
