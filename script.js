// Created by monkey_K1n9
//This is a tip calculator. It calculates the total amount with respect to a rate percentage

const btn = document.querySelector(".btn")
const tip = document.querySelector(".tip")
const total = document.querySelector(".total")
const error = document.querySelector(".error")

const hideError = () => {
    setTimeout(() => {
        error.style.display = "none"
    }, 4000)
}

const calculatorTip = () => {
    const bill = document.querySelector(".bill").value
    const rate = document.querySelector(".rate").value

    
    if(bill === "" || rate == 0) {
        // console.log("Please add a number")
        error.style.display = "block"
        hideError()
    } else if (isNaN(bill)) {
        error.innerHTML = "Please enter a number"
        error.style.display = "block"
        hideError()
    } else {
        let tipAmount = Math.ceil(bill * rate)
        tip.innerHTML = `Tip Amount: ${tipAmount} FCFA`

        let totalBill = Number(bill) + tipAmount
        total.innerHTML = `Total Amount: ${totalBill} FCFA`
    }
}

btn.addEventListener("click", calculatorTip)