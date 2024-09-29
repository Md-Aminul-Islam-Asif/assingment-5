

const donation4 = document.getElementById("donation4");
donation4.addEventListener("click", function () {
      const input = parseFloat(document.getElementById("input-4").value);
      const currentBalance = parseFloat(
            document.getElementById("balance").innerText
      );
      const balancePalestine = parseFloat(
            document.getElementById("palestine").innerText
      );
      if (input <= 0 || isNaN(input)) {
            alert("Invalid Amount");
            document.getElementById("input-4").value = "";
      } else if (currentBalance < input) {
            alert("Insufficient balance");
            document.getElementById("input-4").value = "";
      } else {

            const newBalance = currentBalance - input;
            const newBalancePalestine = balancePalestine + input;



            document.getElementById("balance").innerText = newBalance;
            document.getElementById("palestine").innerText = newBalancePalestine;
            document.getElementById("input-4").value = "";
            



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
   <p class="py-2 text-lg font-bold">${input} Taka is Donated for Flood at Plestine, Bangladesh</p>
   <p>Date: ${formattedDate} GMT${timezoneOffset} (${timezoneName})</p>
  `;

            const historyContainer = document.getElementById("history-container");
            historyContainer.insertBefore(historyItem, historyContainer.firstChild);
            document.getElementById("my_modal_4").showModal();
            console.table({ input, newBalance, newBalancePalestine });
      }
})

