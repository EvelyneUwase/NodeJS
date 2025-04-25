const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sales (UGX)',
            data: [5000, 10000, 7500, 15000, 20000],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
        }]
    }
});

const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [{
            data: [25, 20, 20, 20,15 ],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', 'green']
        }]
    }
});