const fs = require('fs');
const Mustache = require('mustache');

fs.readFile('templates/hello-world.html', 'utf-8', (_, template) => {
    const data = {
        what: 'World'
    };
    const output = Mustache.render(template, data);
    console.log(output);
});