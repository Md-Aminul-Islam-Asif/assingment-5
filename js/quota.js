
const donation3 = document.getElementById("donation3");
donation3.addEventListener("click", function () {
      const input = parseFloat(document.getElementById("input-3").value);
      const currentBalance = parseFloat(
            document.getElementById("balance").innerText
      );
      const balanceQuota = parseFloat(
            document.getElementById("quota").innerText
      );
      if (input <= 0 || isNaN(input)) {
            alert("Invalid Amount");
            document.getElementById("input-3").value = "";
      } else if (currentBalance < input) {
            alert("Insufficient balance");
            document.getElementById("input-3").value = "";
      } else {

            const newBalance = currentBalance - input;
            const newBalanceQuota = balanceQuota + input;



            document.getElementById("balance").innerText = newBalance;
            document.getElementById("quota").innerText = newBalanceQuota;
            document.getElementById("input-3").value = "";




            const now = new Date();
            const options = {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  hour12: true,
                  timeZone: 'Asia/Dhaka'
            };

            const formattedDate = now.toLocaleString('en-US', options).replace(',', '');
            const timezoneOffset = '+0600';
            const timezoneName = 'Bangladesh Standard Time';


            const historyItem = document.createElement("div");
            historyItem.className = "border-4 border-green-500 w-full p-5 rounded-2xl";
            historyItem.innerHTML = `
   <p class="py-2 text-lg font-bold">${input} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
   <p>Date: ${formattedDate} GMT${timezoneOffset} (${timezoneName})</p>
  `;

            const historyContainer = document.getElementById("history-container");
            historyContainer.insertBefore(historyItem, historyContainer.firstChild);
            document.getElementById("my_modal_3").showModal();
            console.table({ input, newBalance, newBalanceQuota });
      }
})


