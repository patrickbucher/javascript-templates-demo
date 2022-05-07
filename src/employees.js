const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = 8000;

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

const employees = [
    {firstName: "Alice", lastName: "Bobson", position: "Engineer"},
    {firstName: "Charles", lastName: "Daniels"},
    {firstName: "Erica", lastName: "Freeman"},
    {firstName: "Gustav", lastName: "Heinlein", position: "Manager"}
];

app.get('/', (req, res) => {
    const data = {
        company: 'Frickelbude',
        employees: employees
    }
    res.render('employees.html', data);
});

app.listen(port, () => {
    console.log(`Employees app listening on port ${port}.`);
});