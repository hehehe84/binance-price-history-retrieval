# Retrieval Price history Application using Binance API

In order to simplify the installation and manage the orchestration, I chose to use a docker-compose setup.

## Setup:

Create a .env at the root of the folder and enter the following values:

MONGO_URI=mongodb://mongo:27017/nestdb
BINANCE_API_KEY= "Generated on https://testnet.binance.vision/"
BINANCE_API_SECRET="Also generated on https://testnet.binance.vision/"

to build the application and orchestrate the application and database:
```
❯ docker-compose build --no-cache
```

to launch the application and it's associate mongoDB:
```
❯ docker-compose up
```

Whenever a change in the application is made, it is important to rebuild the backend image:
```
❯ docker-compose down
❯ docker-compose build app --no-cache
❯ docker-compose up
```

Idea of improvement: using watchtower to monitor changes on the backend

### What do we want to retrieve

Schema used to analyze the fetched data to identify changes in cryptocurrency prices, such as increases or decreases, over the specified time period.
We basically want to give a candlestick bar information.
This is find in the binance documentation API for [spot-api-docs](https://developers.binance.com/docs/binance-spot-api-docs/testnet/websocket-api/market-data-requests#klines)

=>

```
{
  "id": "1dbbeb56-8eea-466a-8f6e-86bdcfa2fc0b",
  "method": "klines",
  "params": {
    "symbol": "BNBBTC",
    "interval": "1h",
    "startTime": 1655969280000,
    "limit": 1
  }
}
```
Here is the type of response return by the API:
```
{
  "id": "1dbbeb56-8eea-466a-8f6e-86bdcfa2fc0b",
  "status": 200,
  "result": [
    [
      1655971200000,      // Kline open time
      "0.01086000",       // Open price
      "0.01086600",       // High price
      "0.01083600",       // Low price
      "0.01083800",       // Close price
      "2290.53800000",    // Volume
      1655974799999,      // Kline close time
      "24.85074442",      // Quote asset volume
      2283,               // Number of trades
      "1171.64000000",    // Taker buy base asset volume
      "12.71225884",      // Taker buy quote asset volume
      "0"                 // Unused field, ignore
    ]
  ],
  "rateLimits": [
    {
      "rateLimitType": "REQUEST_WEIGHT",
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 6000,
      "count": 2
    }
  ]
}
```

## Area for improvement

Being taken by time, I did not have the time to correctly test my setup, and also to correctly save the klines in the database.
To do so, it would have been interesting to create a proper method in historical-data.service.ts

The endpoint is functionning cause: here is the response when using curl with the default example present in the documentation:
```
price-history-retrieval on  master [!] via  v20.18.0 
❯ curl "https://api.binance.com/api/v3/klines?symbol=BNBBTC&interval=1h&startTime=1655969280000&limit=1"

[[1655971200000,"0.01086000","0.01086600","0.01083600","0.01083800","2290.53800000",1655974799999,"24.85074442",2283,"1171.64000000","12.71225884","0"]]
```

## Personal thought around the task

I find this task really interesting and it higher my envy to develop using binance API.
If I have an autocritic to make is mostly on myself. I spend useless time defining a swagger and trying to make a little documentation on the DTO. 
This was useless time I could have spend registering the information to mongoDb.
I wish I had more time exploring the API to get accustomed instead of loosing precious time on the documentation.
I also regret the lack of testing - Enven if I somehow manual test my kline API and got suitable results.
Finally, I did not manage solving my typing issue to create custom return type, this led me using `// eslint-disable-next-line @typescript-eslint/no-unsafe-return` and similar, which is clearly not ideal.

I am still happy with the result of this task as I managed to get accustom to the Binance API and create an action plan that look realistic.

Thank you for spending time reviewing my work!