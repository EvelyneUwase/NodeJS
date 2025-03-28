// Dummy Data
document.getElementById("totalSales").innerText = "3200";
document.getElementById("newCustomers").innerText = "15";

// Sales Chart Data
const ctx = document.getElementById("salesChart").getContext("2d");
const salesChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales ($)",
        data: [500, 700, 800, 1200, 1500, 1800],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  },
});

// Dummy Transactions
const transactions = [
  { date: "2025-03-01", customer: "John Doe", amount: "$200" },
  { date: "2025-03-05", customer: "Jane Smith", amount: "$450" },
  { date: "2025-03-10", customer: "Mark Johnson", amount: "$320" },
];

const transactionsTable = document.getElementById("transactionsTable");
transactions.forEach((trx) => {
  const row = `<tr><td>${trx.date}</td><td>${trx.customer}</td><td>${trx.amount}</td></tr>`;
  transactionsTable.innerHTML += row;
});
