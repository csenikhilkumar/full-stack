import { atom,selector } from "recoil";

export const counterAtom = atom ({ // this is atom 
  default:0,
  key:"counter"
})

export const eveSelector =selector({ // this is selector in the recoil library
    key:"isEvenSelector", // selector key it is used for identy the selector where is ,it is used
    get:function({get}){ // get key is retun the function in the function argument the get function is called , get function is the pure function 
        const currentCount =get (counterAtom); // the selector is depends on counterAtom and selector is used the counterAtom using get function 
        const isEven=(currentCount%2==0) // this line of code is math of selector , selector is even or odd 
        return isEven // the functon is return isven variable 
    }
})