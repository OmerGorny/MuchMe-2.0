import React,{useEffect,useState,useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './pages/Profile';
import Resturants from './pages/Restaurants';
import Search from './pages/Search';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Edit from './ProfileSubPages/Edit';
import LovedDishes from './ProfileSubPages/LovedDishes';
import OrderHistory from './ProfileSubPages/OrderHistory';
import LovedRes from './ProfileSubPages/LovedRes';
import SpecificRestaurant from './ResturantSubPages/SpecificRestaurant';
import CartPage from './ResturantSubPages/CardPage';
import CategoryRes from './ResturantSubPages/CategoryRes';
import TableOrder from './ResturantSubPages/TableOrder';
import AdminHome from './adminPages/AdminHome';
import MenuManagement from './adminPages/MenuManagement'
import KitchenManagement from './adminPages/KitchenManagement'
import TablesManagement from './adminPages/TablesManagement'
import Update from './adminPages/Update';
import NewDish from './adminPages/NewDish';
import OrderDetails from './ResturantSubPages/OrderDetails';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AppProvider } from './context/AppContext';
const Stack= createNativeStackNavigator();

const TabHomeScreen=({navigation,route})=>{
   
  const{item}=route.params;
  console.log("item",item)


  const profile='Profile';
  const search='Search';
  const resturants='Resturants';
  const Tab= createBottomTabNavigator();
  

  return(
    <AppProvider>
    <Tab.Navigator initialRouteName={profile}
    screenOptions={({route})=>({
    tabBarStyle:{
        backgroundColor:'black',
        activeTintColor:'red'   
    },
    tabBarIcon:({focused,color,size})=>{
        let iconName;
        let rn=route.name;

        if(rn===profile)
        {
            iconName=focused?'man':'man-outline'
        }
        else if(rn===search){
            iconName=focused?'search':'search'
        }
        else if(rn===resturants){
            iconName=focused?'fast-food':'fast-food-outline'
        }

        return<Ionicons name={iconName} size={size} color={'#D2042D'}/>
    }
})}>
<Tab.Screen options={{headerShown:false}} name={profile}   > 
     {props=> <Profile {...props} user={item} /> }
        </Tab.Screen>
        <Tab.Screen options={{headerShown:false}} name={search} component={Search} />
        <Tab.Screen options={{headerShown:false}} name={resturants} component={Resturants}  />

</Tab.Navigator>
</AppProvider>
  )
}

export default function App() {



  return (
    <AppProvider>
    <NavigationContainer>
      <Stack.Navigator>


      {/* Pages */}
        <Stack.Screen options={{headerShown:false}} name="Login">

          {props=> <Login {...props} /> }
        </Stack.Screen>

        <Stack.Screen options={{headerShown:false}} name="SignUp">

         {props=> <SignUp {...props}/> }
        </Stack.Screen>

        <Stack.Screen options={{headerShown:false}} name="Home">
          {props=> <TabHomeScreen {...props} />}
         
          </Stack.Screen>
          
{/* profile sub pages */}
          <Stack.Screen  options={{headerShown:false}}  name="Edit">
        {props=><Edit {...props} />}
    </Stack.Screen>

    <Stack.Screen  options={{headerShown:false}}  name="LovedDishes">
        {props=><LovedDishes {...props} />}
        </Stack.Screen>

        <Stack.Screen  options={{headerShown:false}}  name="OrderHistory">
        {props=><OrderHistory {...props} />}
        </Stack.Screen>

        <Stack.Screen  options={{headerShown:false}}  name="LovedRes">
        {props=><LovedRes {...props} />}
        </Stack.Screen>

{/* resturant sub pages */}
        <Stack.Screen  options={{headerShown:false}}  name="SpecificRestaurant">
        {props=><SpecificRestaurant {...props} />}
        </Stack.Screen>

        <Stack.Screen  options={{headerShown:false}}  name="CardPage">
        {props=><CartPage {...props} />}
        </Stack.Screen>


        <Stack.Screen  options={{headerShown:false}}  name="CategoryRes">
        {props=><CategoryRes {...props} />}
        </Stack.Screen>



        <Stack.Screen  options={{headerShown:false}}  name="TableOrder">
        {props=><TableOrder {...props} />}
        </Stack.Screen>

        <Stack.Screen  options={{headerShown:false}}  name="OrderDetails">
        {props=><OrderDetails {...props} />}
        </Stack.Screen>

{/* admin pages */}
        <Stack.Screen  options={{headerShown:false}}  name="AdminHome">
        {props=><AdminHome {...props} />}
        </Stack.Screen>


        <Stack.Screen  options={{headerShown:false}}  name="MenuManagement">
        {props=><MenuManagement {...props} />}
        </Stack.Screen>

        <Stack.Screen  options={{headerShown:false}}  name="KitchenManagement">
        {props=><KitchenManagement {...props} />}
        </Stack.Screen>

        <Stack.Screen  options={{headerShown:false}}  name="TablesManagement">
        {props=><TablesManagement {...props} />}
        </Stack.Screen>

        <Stack.Screen  options={{headeShown:false}}  name="Update">
        {props=><Update {...props} />}
        </Stack.Screen>

        <Stack.Screen  options={{headerShown:false}}  name="NewDish">
        {props=><NewDish {...props} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
