
import React,{useState,useEffect,useContext,createContext} from 'react'
import { User } from '../classes/User';
import ArrOfCategories from '../imageLists/arrOfCategories';
import ArrOfResDishes1 from '../imageLists/arrOfDishes1';
import arrOfResPhotos from '../imageLists/arrOfResPhotos';
import categoryBurger from '../imageLists/categoryBurger';





const AppContext=createContext();

const AppProvider=({children})=>{
    // USER CONTEXT PROFILE PAGE//

    const[usersList,setUsersList]=useState([]);
    const[currentUser,setCurrentUser]=useState(new User());
    const [isLoading,setisLoading]=useState(true);

    //data by user
    const [dataLikedDishes,setDataLikedDishes]=useState([]);
    const [dataLikedRes,setDataLikedRes]=useState([]);
    const [dataHistory,setDataHistory]=useState([]);
  
    //restaurants context Restaurant page// 
    const[dataRestaurants,setDataRestaurants]=useState([])
    const[photosCategory,setPhotosCategory]=useState(ArrOfCategories)
    const[photosRes,setPhotosRes]=useState(arrOfResPhotos) 
    const [isLoadingRes,setisLoadingRes]=useState(true);

  
    

    //dishes by Res
    const[dishesRes1,setDishesRes1]=useState([]);
    const[photoDishes1,setPhotoDishes1]=useState(ArrOfResDishes1)
    
    //Categories restaurant hooks
    const[imagesBurger,setImagesBurger]=useState(categoryBurger);

    //userOrder
    const[listOfOrder,setListOfOrder]=useState([]);
    
   
    //userOrderToKitchen
    const[listOfCart,setListOfCart]=useState([]);
    const[orderID,setOrderID]=useState(0);

    const[listToKitchen,setListToKitchen]=useState([])
    const[orderNumber,setOrderNumber]=useState(0);


    
    
    useEffect(()=>{
        GetAllRestaurants();
        GetAllDishesByResID(1);
        GetAllUsers();
        GetAllOrderHistory();
           
      },[])
     
     


     ///// get all orders

     const GetAllUsers = async () => {
        const apiGetAllUsers='http://proj15.ruppin-tech.co.il/api/MunchMe/GetAllUsers';
        const allUsers = await fetch(apiGetAllUsers, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
            })
        })
            .then(res => {
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                if (res.ok) {
                    return res.json()
                }
                else
                    return null;
    
            })
            .then(
                (result) => {
                    console.log("GetallUsers = ", result);
                    return result
                },
                (error) => {
                    console.log("err GET=", error);
                });
    
        setUsersList(allUsers);
        
    };
 
    
    

    const GetAllOrderHistory = async () => {
        const apiGetAllOrderHistory='http://proj15.ruppin-tech.co.il/api/MunchMe/GetAllOrderHistory';
        const allOrders = await fetch(apiGetAllOrderHistory, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
            })
        })
            .then(res => {
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                if (res.ok) {
                    return res.json()
                }
                else
                    return null;
    
            })
            .then(
                (result) => {
                    // console.log("GetallOrdersHistory = ", result);
                    return result
                },
                (error) => {
                    console.log("err GET=", error);
                });
    
        setDataHistory(allOrders);
        // reduceOrderID(allOrders)
        
    };
 






      // category functions//////////////////////////////////////////////////////////////////
  
      //////////////////////////////////////////////////////////////////

      const GetAllDishesByResID = async (resID) => {
        const apiURL=`http://proj15.ruppin-tech.co.il/api/MuchMe/GetAllDishesByID/${resID}`;

        const allReses = await fetch(apiURL, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
            })
        })
            .then(res => {
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                if (res.ok) {
                    return res.json()
                }
                else
                    return null;

            })
            .then(
                (result) => {
                    // console.log("GetAllDishes = ", result);
                    setDishesRes1(result)
                    return result
                },
                (error) => {
                    console.log("err GET=", error);
                }).finally(()=>{setisLoadingRes(false)});
      };


      // Restaurants Api//////////////////////////////////////////////////////////////////
      const GetAllRestaurants = async () => {
        const apiURL='http://proj15.ruppin-tech.co.il/api/MuchMe/GetAllRestaurants';

        const allReses = await fetch(apiURL, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
            })
        })
            .then(res => {
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                if (res.ok) {
                    return res.json()
                }
                else
                    return null;

            })
            .then(
                (result) => {
                    // console.log("GetAllRestaurants = ", result);
                    setDataRestaurants(result)
                    return result
                },
                (error) => {
                    console.log("err GET=", error);
                }).finally(()=>{setisLoadingRes(false)});
        
        
      };
      //////////////////////////////////////////////////////////////////

// Profile Apis//////////////////////////////////////////////////////////////////
      


      //////////////////////////////////////////////////////////////////
    return(
        <AppContext.Provider value={{isLoading,setisLoading
        ,dataLikedDishes,setDataLikedDishes
        ,dataLikedRes,setDataLikedRes
        ,dataHistory,setDataHistory
        ,setDataRestaurants,dataRestaurants
        ,photosRes,isLoadingRes,setisLoadingRes,
        dishesRes1,setDishesRes1,
        photosCategory,setPhotosCategory,
        photoDishes1,setPhotoDishes1,
        imagesBurger,setImagesBurger,
        listOfOrder,setListOfOrder,
        listOfCart,setListOfCart,
        orderID,setOrderID,
        listToKitchen,setListToKitchen,
        orderNumber,setOrderNumber,
        usersList,setUsersList,
        currentUser,setCurrentUser
        }}>

            {children}
        </AppContext.Provider>
    )
}
export {AppContext,AppProvider}
 