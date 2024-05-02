interface UpdateWithOptions{
  name?: string;
  descripcion?: string;
  price?: number;
}
export class Product {
  /*public id:string;
  public name:string;
  public descripcion?:string;
  public price:number;*/

  constructor(
    public id: string,
    public name: string,
    public descripcion: string,
    public price: number
  ) { }

  updateWith({name,descripcion,price, }: UpdateWithOptions)
    {
      this.name=  name ?? this.name;
      this.descripcion=  descripcion ?? this.descripcion;
      this.price=  price ?? this.price;
    }  
}
