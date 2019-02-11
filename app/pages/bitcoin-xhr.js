const title = document.createElement('h1');
const table = document.createElement('table');

function loadBitcoin() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json', true);
  xhr.send();

  xhr.onreadystatechange = function getInform() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        // console.log(data);

        title.innerHTML = `${data.chartName}`;
        title.style.cssText = `text-align: center;
        color: #143568;`;

        table.innerHTML = `<tr><td style = 'border: 1px solid #7e9ccc;'>Updated</td>
        <td style = 'border: 1px solid #7e9ccc;'>${data.time.updated}</td></tr>
        <tr><td style = 'border: 1px solid #7e9ccc;'>${data.bpi.USD.code}</td>
        <td style = 'border: 1px solid #7e9ccc;'>${data.bpi.USD.rate.split('.')[0]}</td></tr>
        <tr><td style = 'border: 1px solid #7e9ccc;'>${data.bpi.GBP.code}</td>
        <td style = 'border: 1px solid #7e9ccc;'>${data.bpi.GBP.rate.split('.')[0]}</td></tr>
        <tr><td style = 'border: 1px solid #7e9ccc;'>${data.bpi.EUR.code}</td>
        <td style = 'border: 1px solid #7e9ccc;'>${data.bpi.EUR.rate.split('.')[0]}</td></tr>`;
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
      } else {
        throw new Error(`Запрос не удался. Ответ сервера:${this.status} - ${this.statusText}`);
      }
    }
  };
}

loadBitcoin();

setInterval(loadBitcoin, 60000);
