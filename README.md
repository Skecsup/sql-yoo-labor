## Getting Started

First, create your own mysql database

```code

import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",        <--- change these
  port: 3306,               <--- change these
  database: "world",        <--- change these
  user: "root",             <--- change these
  password: "password123",  <--- change these
});

export default connection;

```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
