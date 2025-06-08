function etimatetransactionfee(amounttosend){
    const percentageFee =amounttosend*0.015
    const fee=Math.min(Math.max(percentageFee,10),70)
    const amountDebited=amounttosend+fee
    console.log(`Sending KES ${amounttosend}:`);
      console.log(`Calculated Transaction Fee: KES ${fee}`);
      console.log(`Total amount to be debited: KES ${amountDebited}`);
      console.log("\nSend Money Securely! ");
}
const userInput=prompt("Unatuma Ngapi?(KES)")
const amounttosend=parseFloat(userInput)
if (!isNaN(amounttosend) && amounttosend > 0) {
      estimateTransactionFee(amounttosend);
    } else {
      console.log("Tafadhali andika kiasi sahihi cha kutuma.");
    }
