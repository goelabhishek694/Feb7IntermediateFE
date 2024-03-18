// function runAlgo(amount,cb){
//     console.log("processing amount");
//     //emulation of payment gateway 
//     // 1. get details from bank 
//     // 2. deduct amount 
//     // 3. get success message from bank
//     // 4. show success msg to customer 
//     setTimeout(function(){
//         console.log("payment done");
//         cb();
//         cb();
//         cb();
//         cb();
//         cb();
//     },1000)
// }

function runAlgo(){
    return new Promise(function(resolve,reject){
        console.log("processing amount");
        setTimeout(function(){
            console.log("payment done");
            resolve()
            // reject()
            resolve()
            resolve()
            resolve()
            resolve()
        },1000)
    })
}
module.exports={
    runAlgo
}