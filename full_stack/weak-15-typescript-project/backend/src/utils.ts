export function Random (length:number){
     let options = "dqiwfgqftgwuegf7832r8712rfgi"
     let ans = ""
     for(let i = 0 ;i<options.length;i++){
       ans+=options[Math.floor((Math.random()*length))]
}
return ans;
}