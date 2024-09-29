
const donation2 = document.getElementById("donation2");
donation2.addEventListener("click", function () {
      const input = parseFloat(document.getElementById("input-2").value);
      const currentBalance = parseFloat(
            document.getElementById("balance").innerText
      );
      const balanceFeni = parseFloat(
            document.getElementById("feni").innerText
      );
      if (input <= 0 || isNaN(input)) {
            alert("Invalid Amount");
            document.getElementById("input-2").value = "";
      } else if (currentBalance < input) {
            alert("Insufficient balance");
            document.getElementById("input-2").value = "";
      } else {

            const newBalance = currentBalance - input;
            const newBalanceFeni = balanceFeni + input;



            document.getElementById("balance").innerText = newBalance;
            document.getElementById("feni").innerText = newBalanceFeni;
            document.getElementById("input-2").value = "";




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
            historyItem.className = "border-2 border-black-500 w-full p-5 rounded-xl";
            historyItem.innerHTML = `
   <p class="py-2 text-lg font-bold">${input} Taka is Donated for Flood at Relief  Feni, Bangladesh</p>
   <p>Date: ${formattedDate} GMT${timezoneOffset} (${timezoneName})</p>
  `;

            const historyContainer = document.getElementById("history-container");
            historyContainer.insertBefore(historyItem, historyContainer.firstChild);
            document.getElementById("my_modal_2").showModal();
            console.table({ input, newBalance, newBalanceFeni });
      }
})

