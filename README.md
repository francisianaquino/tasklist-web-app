## Running the Server

- Create a MySQL schema named `tasklist` on an instance running on `localhost:3306`
```CREATE SCHEMA `tasklist`;```

- Confirm your database user and password located on `server/src/db/index.js`. Change `root` and `root` into your database user and password respectively.

- Open terminal and navigate to the server folder
```cd server```

- Install depencies
```npm install```

- Run the server
```npm run dev```
It should create the tables on `tasklist` schema automatically

## Running the Client

- Open new terminal and navigate to the client folder
```cd client```

- Install depencies
```npm install```

- Run the Client
```npm run dev```