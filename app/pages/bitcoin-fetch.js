if (!Modernizr.fetch) {
  alert('Пожалуйста обновите браузер!');
}

const title = document.createElement('h1');
const table = document.createElement('table');

function loadBitcoin() {
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function (response) {
      if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText));
      }
      return Promise.resolve(response);
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);

      title.innerHTML = `${data.chartName}`;
      title.style.cssText = `text-align: center;
      color: #143568;`;

      table.innerHTML = `<tr><td style = 'border: 1px solid #7e9ccc;'>updated</td>
      <td style = 'border: 1px solid #7e9ccc;'>${data.time.updated}</td></tr>
      <tr><td style = 'border: 1px solid #7e9ccc;'>${data.bpi.USD.code}</td>
      <td style = 'border: 1px solid #7e9ccc;'>${data.bpi.USD.rate.split('.')[0]}</td></tr>
      <tr><td style = 'border: 1px solid #7e9ccc;'>${data.bpi.EUR.code}</td>
      <td style = 'border: 1px solid #7e9ccc;'>${data.bpi.EUR.rate.split('.')[0]}</td></tr>
      <tr><td style = 'border: 1px solid #7e9ccc;'>${data.bpi.GBP.code}</td>
      <td style = 'border: 1px solid #7e9ccc;'>${data.bpi.GBP.rate.split('.')[0]}</td></tr>`;
      table.style.cssText = `width: 40%;
      border: 1px solid #7e9ccc;
      border-collapse: collapse;
      color: #152949;
      font-size: 25px;
      margin: 0 auto;
      padding: 5px;
      text-align: center;`;

      document.body.appendChild(title);
      document.body.appendChild(table);
    })
    .catch((err) => {
      console.log(err);
    });
}

loadBitcoin();

setInterval(loadBitcoin, 60000);
