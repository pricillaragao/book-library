require("dotenv").config();

const app = require("./app");

const port = 3000;

// app.listen(port, () => {
//   console.log(`Library app listening at http://localhost:${port}`);
// });

app.listen(port, "10.10.3.13")
