const account1 ={
    owner:"kishore",
    movements:[200, -2000 , 100 ,5000],
    pin:1111
};
const account2 ={
    owner:"shanjana",
    movements:[2000, -200 , 1000 ,500],
    pin:2222
};
const account3 ={
    owner:"vasanth",
    movements:[900, -9000 , 700 ,8000],
    pin:3333
};

const data  =[account1,account2,account3]
let num = 0;
const limit =2000;

let opacity1 = document.querySelector('.app')
let push =  document.querySelector('.login__input--user')
let push1 =  document.querySelector('.login__input--pin')
let amount = document.querySelector(".balance__value")
let reqamount = document.querySelector(".form__input--loan-amount")
let transferacc = document.querySelector(".form__input--to")
let transferamount = document.querySelector(".form__input--amount")
let Movements = document.querySelector(".movements")
let movementsRow = document.querySelector(".movements__row")
function login() {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);

        if (data[i].owner==push.value&&data[i].pin==push1.value) {
            opacity1.style.opacity=1
           

            if (data[i].owner=="kishore") {
                amount.innerHTML = "7000$"
                movementsRow.remove()
            }

            else if (data[i].owner=="shanjana") {
                amount.innerHTML = "8000$"
                movementsRow.remove()
            }

            else if (data[i].owner=="vasanth") {
                amount.innerHTML = "9000$"
                movementsRow.remove()
            }
            
            return
       }
       
    }
    popupsection()
    console.log("invalid");
}
let close =document.querySelector('.bts')
let popup = document.querySelector('.pop')


function popupsection() {
    popup.style.display='block'
}
function closebutton() {
    popup.style.display='none'
}

function reqloan() {
  for (let i = 0; i< data.length; i++) {
    if (data[i].owner==push.value){
       
     
        
            
            let reqamt = parseFloat(reqamount.value)
            let balance = parseFloat(amount.textContent)
            let totalbalance = reqamt+balance
            console.log(totalbalance);
            amount.innerHTML=totalbalance+"$"

            let typediv = document.createElement("div")
            let datediv = document.createElement("div")
            let amtdiv = document.createElement("div")
            let rowdiv = document.createElement("div")

            typediv.className="movements__type movements__type--deposit"
            datediv.className="movements__date"
            amtdiv.className="movements__value"
            rowdiv.className="movements__row"

            typediv.innerHTML="Deposit"
            datediv.innerHTML= new Date().toLocaleDateString()
            amtdiv.innerHTML= reqamt

            rowdiv.appendChild(typediv)
            rowdiv.appendChild(datediv)
            rowdiv.appendChild(amtdiv)
            Movements.appendChild(rowdiv)

       
         return
    }
    
  }

}

function money() {
   
    if (push.value==transferacc.value ) {
        console.log("amount cannot send yourself");
        return;
    }
    for (let i = 0; i< data.length; i++) {
        if (data[i].owner==transferacc.value) {  
        let transferamt = parseFloat(transferamount.value)
        let balance = parseFloat(amount.textContent)
        let accountbalance = balance - transferamt
        console.log(accountbalance);
        amount.innerHTML=accountbalance+"$"

        let typediv1 = document.createElement("div")
        let datediv1 = document.createElement("div")
        let amtdiv1 = document.createElement("div")
        let rowdiv1 = document.createElement("div")

        typediv1.className="movements__type movements__type--withdrawal"
            datediv1.className="movements__date"
            amtdiv1.className="movements__value"
            rowdiv1.className="movements__row"

            typediv1.innerHTML="withdrawal"
            datediv1.innerHTML= new Date().toLocaleDateString()
            amtdiv1.innerHTML= transferamt

            rowdiv1.appendChild(typediv1)
            rowdiv1.appendChild(datediv1)
            rowdiv1.appendChild(amtdiv1)
            Movements.appendChild(rowdiv1)
        return
        }
    
    }
}