var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://localhost:3000/apideposit", requestOptions)
    .then(response => response.text())
    .then(result => {
      depositARR = JSON.parse(result);
      depositARR.forEach((item) => {
        if (item.bank == "ocbc") {
          document.getElementById('api_bank').innerHTML = `<img src="/images/${item.bank}.png" class="img-fluid" alt="${item.bank}" width="200" height="200">`;
          document.getElementById('api_type').innerHTML = `${item.account}`;
          document.getElementById('api_product').innerHTML = `${item.product}`;
          document.getElementById('api_benefit').innerHTML = `${item.benefit}`;
        }
      });
    })
    .catch(error => console.log('error', error));;