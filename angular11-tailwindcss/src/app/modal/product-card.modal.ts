export interface productCardModal {
  id?: number;
  price?: string;
  title?: string;
  featureImg?: string;
  text?: string,
  quantity?: string,
}
export class Product { 
 
  constructor(
    public productID:number,    
    public name: string ,   
    public price:number
    ) {
      this.productID = this.productID;
      this.name = this.name;
      this.price = this.price;
  }

  // productID:number ;
  // name: string ;
  // price:number;

}