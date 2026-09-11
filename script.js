function copyWallet() {

  const wallet = document.getElementById("walletAddress");

  wallet.select();
  wallet.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(wallet.value);

  alert("Wallet address copied successfully!");
}


document
  .getElementById("depositForm")
  .addEventListener("submit", function (event) {

    event.preventDefault();

    const amount = document
      .getElementById("amount")
      .value;

    const txid = document
      .getElementById("txid")
      .value;

    const message =
      document.getElementById("message");

    const transactionList =
      document.getElementById("transactionList");


    if (Number(amount) < 20) {

      message.style.color = "red";

      message.innerText =
        "Minimum deposit is 20 USDT.";

      return;
    }


    message.style.color = "green";

    message.innerText =
      "Deposit submitted successfully. Status: Pending Verification.";


    const transaction =
      document.createElement("div");

    transaction.className = "transaction";

    transaction.innerHTML = `

      <p><strong>Amount:</strong> ${amount} USDT</p>

      <p><strong>Network:</strong> TRC20</p>

      <p><strong>TXID:</strong> ${txid}</p>

      <p>
        <strong>Status:</strong>
        <span class="status">
          Pending Verification
        </span>
      </p>

    `;


    const emptyMessage =
      transactionList.querySelector(".empty");

    if (emptyMessage) {
      emptyMessage.remove();
    }


    transactionList.prepend(transaction);


    document
      .getElementById("depositForm")
      .reset();

  });
