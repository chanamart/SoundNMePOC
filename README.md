## Installation ##


```
#!bash

cd webapp

```

Installation des librairies :

```
#!bash

npm install

```

```
#!bash

bower install

```

## Lancement ##

```
#!bash

supervisor server.js 

```

ou


```
#!bash

npm start

```

## Connexion à l'API ##

```
#!bash

cd public/views/

nano constant.js

```

Modifier la constante **apiUrl** si necessaire


```
#!javascript

app.constant('apiUrl', 'https://toofix.com/api');

```