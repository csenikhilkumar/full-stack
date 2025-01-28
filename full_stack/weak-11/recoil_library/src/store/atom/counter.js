import { atom } from "recoil";

export const counterAtom = atom({   // definnig the atom as varible counterAtom 
    default:0,
    key:"counter"
})