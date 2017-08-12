$.getJSON("https://api.coinmarketcap.com/v1/ticker/", function(coins) {
    coins.forEach(function(data) {
        console.log(data.symbol + "\t " + data.name);
    })
})
