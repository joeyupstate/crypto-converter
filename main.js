function getCrypto() {
  let price = document.getElementById("price");
  let cryptoSelector = document.getElementById("selector").value;

  fetch(
    "https://alpha-vantage.p.rapidapi.com/query?from_currency=" +
      cryptoSelector +
      "&function=CURRENCY_EXCHANGE_RATE&to_currency=USD",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "74d8672b18msh0a1e3329629ffabp1d9947jsndffb0cba6f05",
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      console.log(response);
      response.json().then((data) => {
        console.log(data["Realtime Currency Exchange Rate"]["8. Bid Price"]); //the srtings in the two arrays detail the path within the object
        let finalResult =
          data["Realtime Currency Exchange Rate"]["8. Bid Price"];
        price.innerHTML = ` $${parseFloat(finalResult).toFixed(2)}`;
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

function convertCrypto() {
  let price = document.getElementById("price");
  let cryptoSelector = document.getElementById("selector").value;
  let cashInput = document.getElementById("cash").value;
  let cashDisplay = document.getElementById("cash-display");
  let cashp = document.getElementById("cashp");

  if (cashInput[0] >= 0 && cashInput[0] <= 9) {
	  cashp.style.display="block";
    fetch(
      "https://alpha-vantage.p.rapidapi.com/query?from_currency=" +
        cryptoSelector +
        "&function=CURRENCY_EXCHANGE_RATE&to_currency=USD",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "74d8672b18msh0a1e3329629ffabp1d9947jsndffb0cba6f05",
          "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        console.log(response);
        response.json().then((data) => {
          console.log(data["Realtime Currency Exchange Rate"]["8. Bid Price"]); //the srtings in the two arrays detail the path within the object
          let a =
            data["Realtime Currency Exchange Rate"]["8. Bid Price"] / cashInput;
          let b = 100 / a;
          let c = b * 0.01;
          cashDisplay.innerHTML = ` ${c} ${cryptoSelector}`;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    alert("Please Input A Number");
  }
}
