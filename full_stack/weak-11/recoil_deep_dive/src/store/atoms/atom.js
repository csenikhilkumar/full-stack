import {atom,selector} from "recoil"

export const MyNetworks = atom({
    key:"my_network",
    default:102
})

export const Job = atom({
    key:"Job",
    default:0
})

export const Massagings = atom({
    key:"Massaging",
    default:0
})

export const Notifications= atom({
    key:"notification",
    default:6
})

export const TotalNotification = selector({
    key :"total",
    get:function({get}){
        const Notification=get(Notifications)
        const Massaging=get(Massagings)
        const MyNetwork=get(MyNetworks)
        const Jobs = get(Job)
        return Notification + Massaging + MyNetwork + Jobs
    }
})