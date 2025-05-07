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
}


 