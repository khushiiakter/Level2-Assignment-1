function formatString(input: string, toUpper?: boolean): string {
   if(toUpper === false ){
    return input.toLowerCase();
   } else{
    return input.toUpperCase();
   }
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
      
    return items.filter(i => i.rating >= 4);
}



function concatenateArrays<T>(...arrays: T[][]): T[] {

     return arrays.reduce((combined, currentArray )=> [...combined, ...currentArray], []);
}




class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number){
        this.make = make;
        this.year = year; 
    }

    getInfo(): string{
        return  `Make: ${this.make}, Year: ${this.year}`
    }
}
class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string){
        super(make, year);
        this.model = model;
    }

    getModel(): string{
        return  `Model: ${this.model}`
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");





function processValue(value: string | number): number {
    if (typeof value === 'number'){
        return value*2;
    } else{
        return value.length;
    }
}



interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if(products.length === 0){
        return null;
    }

    return products.reduce((prev , current)=> {
        if (current.price > prev.price ) {
            return current;
        }else{
            return prev;
        }
    })
  }

  
  
  
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend";
    } else{
        return "Weekday";
    }
  }
 

  
  
async function squareAsync(n: number): Promise<number> {
    if(n < 0){
        throw new Error('Negative number not allowed');
    }

    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(n*n);
        }, 1000);
    })
}

