# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
![Animation](https://github.com/PawelOwiesek/login_user/assets/121549413/2bd53604-ee2a-47d5-a53e-8316f7497bc3)


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.post("/signup", (req, res) => {
  const sql = `INSERT INTO login (name,password,email) VALUES (?,?,?)`;
  const values = [req.body.name, req.body.password, req.body.email];
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json("Error , its not working");
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = `SELECT * FROM login WHERE email=? AND password=?`;

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error , its not working");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**


