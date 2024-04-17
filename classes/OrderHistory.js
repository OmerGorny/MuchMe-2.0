export class OrderHistory {
  constructor(id,DishCode,dishName,resID,units,hourOfOrder,hourReady,userID,photoURL,date,orderType) {
    this.id=id;
    this.DishCode=DishCode;
    this.dishName=dishName;
    this.resID=resID;
    this.units=units;
    this.hourOfOrder=hourOfOrder;
    this.hourReady=hourReady;
    this.userID=userID;
    this.photoURL=photoURL;
    this.date=date;
    this.orderType=orderType;   
  }
}