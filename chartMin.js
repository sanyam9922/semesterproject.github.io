// setup block
const data = {
    labels: ['Contribute', 'Search', 'Subscription', 'Lectures', 'Explaination', 'Domains'],
        datasets: [{
            label: '# of Votes',
            data: [2, 1, 2, 1, 2, 2],
            borderWidth: 1
        }]

};

// config block

const config = {
    type: 'pie',
    data,
    options: {}
};

//render block

const myChart = new Chart(
    document.getElementById('pie-chart'),
    config

);
