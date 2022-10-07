let place = document.querySelector ('.place')

let Memory = {
    Foods : [ 'hamburger', 'hot-dog', 'KFC', 'Lunchbox', 'Donar' ],
    Beverage : [ 'Coke', 'Fanta', 'Pepsi', 'Dena', 'Still water' ],
    Snacks : [ 'Fri', 'Chocolate', 'Ice-cream', 'Rollton' ]
}
let date = new Date
let activity = true 
if (date > 22  ){
    activity  = false
} else if (date < 7) {
    activity = false
}

let order =  (time, work) => {
    return new Promise((resolve, reject) => {
        if(activity){
            setTimeout(() => {
                resolve(work()) 
            }, time)
        } else{
            reject(place.innerHTML += ' Max Way is closed, please come later! => ')
        }
    } )
}
order(2000, ()=>{ console.log(` ${Memory.Foods[0]} has been selected by our client 🍟 `) })
.then(()=>{
    return order( 3000,()  =>  place.innerHTML +=' Production is started => ') 
})
.then(() => {
    return order( 4000, () =>  place.innerHTML += ' Ingredients have been prepared => ' )
})
.then(()=>{
    return order( 5000, () =>  place.innerHTML += ` ${Memory.Beverage[0]} and ${Memory.Beverage[1]} were added to account => `)
})
.then (() => {
    return order ( 2000, () =>  place.innerHTML += ' Bottles are being prepared for liquids => ') 
})
.then (()=>{
    return order (3000, () =>place.innerHTML +=`  ${Memory.Snacks[0]} and ${Memory.Snacks[1] } have recently been ready and you can take them 😁 => `) 
})
.then (() => {
    return order( 2000, () =>  place.innerHTML +=' All products that you booked are ready to eat, bon apetit😋 => ') 
})
.catch(()=>{
    place.innerHTML +=` We are closed! => `;
})
.finally(()=>{
    place.innerHTML +='Thank you for coming';
})