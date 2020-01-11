document.addEventListener('DOMContentLoaded', (event) => {
  const table = document.querySelector("#orders");
  const button = document.querySelector("#addBtn");

  button.addEventListener("click", () => {
    const order = document.getElementById("orderId").value;
    const item = document.getElementById("item").value;
    const quantity = document.getElementById("quantity").value;
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.innerHTML = order;
    td2.innerHTML = item;
    td3.innerHTML = quantity;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
  });
});

