export interface productCardModal {
  product_id?: number;
  price?: string;
  brand?: string;
  image_url?: string;
  title?: string,
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

// brand
// category
// description
// image_url
// price
// product_id
// product_name

}