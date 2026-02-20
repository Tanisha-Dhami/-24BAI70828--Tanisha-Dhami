let balance = 0;

function updateBalance() {
  document.getElementById("balance").textContent = balance;
}

function addMoney(amount) {
  balance += amount;
  updateBalance();
  document.getElementById("message").textContent = "Money added!";
}

function withdrawMoney() {
  let amount = Number(document.getElementById("withdrawAmount").value);

  if (amount > balance) {
    document.getElementById("message").textContent = "Insufficient Balance!";
  } else {
    balance -= amount;
    updateBalance();
    document.getElementById("message").textContent = "Withdraw successful!";
  }
}
