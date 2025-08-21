# Retrieval Price history Application using Binance API

In order to simplify the installation and manage the orchestration, I chose to use a docker-compose setup.

Setup:

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
