class Bank {
    constructor(balance) {
      this.balance = balance
    }
  
    withdraw(amount) {
      if (this.balance >= amount) {
        console.log(`Amount withdrawed: $${amount}`);
        this.balance -= amount;
        console.log("Your new Balance is : " + this.balance);
      }
      else {
        alert("Not enough balance!")
        console.log("You dont have enough balance in the account")
      }
    }
  
    deposit(amount) {
      console.log(`Amount deposited: $${amount}`);
      this.balance += amount;
      console.log("Your new Balance is : " + this.balance);
    }
  
  }
  
  const aayush = new Bank(0);
  
  let inputAmount = document.querySelector("#Amount")

  const bal = document.querySelector("#Balance");
  const deposit = document.querySelector("#Deposit")
  const withdraw = document.querySelector("#Withdraw")
  
  deposit.onclick = () =>{
    const amount = Number(inputAmount.value);
    // console.log(amount);
    aayush.deposit(amount);
    bal.innerText =`$ ${aayush.balance}`;
  }
  
  withdraw.onclick = () => {
    const amount = Number(inputAmount.value);
    // console.log(amount);
    aayush.withdraw(amount);
    bal.innerText = `$ ${aayush.balance}`;
  }
  
  