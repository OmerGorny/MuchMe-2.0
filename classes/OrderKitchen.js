
import { KitchenDish } from "./KitchenDish";
export class OrderKitchen {
    
    constructor(id,DishCode,about,dishName,photoURL,price,resID,units,hourOfOrder,hourReady,userID,orderType) {
      this.id=id;
      this.DishCode=DishCode;
      this.about=about;
      this.dishName=dishName;
      this.photoURL=photoURL;
      this.price=price;
      this.resID=resID;
      this.units=units;
      this.hourOfOrder=hourOfOrder;
      this.hourReady=hourReady;
      this.userID=userID;
      this.orderType=orderType;
    }

 
  }