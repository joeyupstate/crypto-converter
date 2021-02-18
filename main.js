
function getCrypto(){


let display = document.getElementById("display")
let cryptoSelector = document.getElementById("selector").value


	fetch("https://alpha-vantage.p.rapidapi.com/query?from_currency=" + cryptoSelector + "&function=CURRENCY_EXCHANGE_RATE&to_currency=USD", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "74d8672b18msh0a1e3329629ffabp1d9947jsndffb0cba6f05",
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
    response.json().then((data) => {
        console.log(data["Realtime Currency Exchange Rate"]["8. Bid Price"]); //the srtings in the two arrays detail the path within the object
		//display.innerHTML = data["Realtime Currency Exchange Rate"]["8. Bid Price"];
});
    
})
.catch(err => {
	console.error(err);
});
}


function convertCrypto(){


	let display = document.getElementById("display")
	let cryptoSelector = document.getElementById("selector").value
	let cashInput = document.getElementById("cash").value
	let cashDisplay= document.getElementById("cashDisplay")
	
	
		fetch("https://alpha-vantage.p.rapidapi.com/query?from_currency=" + cryptoSelector + "&function=CURRENCY_EXCHANGE_RATE&to_currency=USD", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "74d8672b18msh0a1e3329629ffabp1d9947jsndffb0cba6f05",
			"x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
		}
	})
	.then(response => {
		console.log(response);
		response.json().then((data) => {
			console.log(data["Realtime Currency Exchange Rate"]["8. Bid Price"]); //the srtings in the two arrays detail the path within the object
			let a = data["Realtime Currency Exchange Rate"]["8. Bid Price"]/cashInput
			let b = 100 /a
			let c =  b * .01
			cashDisplay.innerHTML = c;
			
	});
		
	})
	.catch(err => {
		console.error(err);
	});
	}
	