# JavaScript Templates Demo

## Setup

Zuerst wird das NPM-Package initialisiert:

    npm init

Hierzu werden folgende Angaben gemacht bzw. die Vorschläge übernommen:

    package name: javascript-templates-demo
    version: 0.0.1
    description: Demonstration of Mustache templates with Node.js
    entry point: index.js
    test command: [leer]
    git repository: git@code.frickelbude.ch:ipt6/javascript-templates-demo.git
    keywords: JavaScript, Templates, Mustache
    author: Patrick Bucher
    license: MIT
    Is this OK? yes

Hierdurch wird die Datei `package.json` erzeugt, welche ins Repository aufgenommen wird:

    git add package.json
    git commit -m 'initialized package'

## Mustache-Package installieren

Weiter wird die [Mustache](https://github.com/janl/mustache.js#include-templates)-Library installiert:

    npm install mustache --save

Hierdurch entsteht die Datei `package-lock.json`, welche die verwendete
Versionsangabe enthält. Diese Datei sollte ins Repository aufgenommen werden.
Auch die Datei `package.json` hat sich geändert:

    git add package-lock.json package.json
    git commit -m 'installed mustache library'

Der Ordner `node_modules` hingegen, der die heruntergeladenen Artefakte der
Mustache-Library enthält, gehört _nicht_ ins Git-Repository. Schliesslich haben
wir alle Angaben in den Dateien `package.json` und `package-lock.json`
festgehalten, um den Inhalt von `node_modules` wiederherzustellen. Darum
erstellen wir eine Datei namens `.gitignore` mit folgendem Inhalt:

    node_modules/

Auch diese Datei wird ins Repository aufgenommen:

    git add .gitignore
    git commit -m 'ignore node_modules folder'

## Template erstellen

Nun erstellen wir das erste Mustache-Template im Unterverzeichnis `templates/`.
Wir nennen die Datei `hello-world.html`, und sie hat folgenden Inhalt:

```html
<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="utf-8">
        <title>Hello, World!</title>
    </head>
    <body>
        <h1>Hello, {{ what }}!</h1>
    </body>
</html>
```

Hierbei handelt es sich um ein einfaches HTML-Grundgerüst. Das einzig Spezielle
ist der `<h1>`-Element, welches folgenden Inhalt hat:

    Hello, {{ what }}!

Der Teil mit den doppelten geschweiften Klammern ist das _Template_. Hier soll
nicht etwa das Wort `what` dargestellt werden, sondern der Inhalt einer
Variablen namens `what`.

Das Template wird in das Git-Repository aufgenommen:

    git add templates
    git commi -m 'added first template'

## Template rendern

Nun wird der JavaScript-Code geschrieben, der das Template verwendet. Hierzu
erstellen wir die Datei `hello-world.js` im Unterverzeichnis `src/` mit
folgendem Inhalt:

```javascript
const fs = require('fs');
const Mustache = require('mustache');

fs.readFile('templates/hello-world.html', 'utf-8', (_, template) => {
    const data = {
        what: 'World'
    };
    const output = Mustache.render(template, data);
    console.log(output);
});
```

Hier wird mithilfe des `fs` (für "File Sytem") die Template-Datei eingelesen.
Das `data`-Objekt enthält die Informationen, welche Platzhalter (`what`) durch
welchen Wert (`'World'`) ersetzt werden sollen. Mithilfe von `Mustache.render()`
wird das Template gerendert.

Nun können wir den Code testen:

    node src/hello-world.js

Dabei sollte folgender HTML-Code ausgegeben werden:

```html
<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="utf-8">
        <title>Hello, World!</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
    </body>
</html>
```

Anstelle des Templates `{{ what }}` erscheint nun das Wort `World`: Das Template
wurde wie erwünscht gerendert!

Selbstversändlich wird der Code ins Git-Repository aufgenommen:

    git add src/hello-world.js
    git commit -m 'first template rendering code'