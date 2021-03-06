## Welcome to the mean stack

The mean stack is intended to provide a simple and fun starting point for cloud native fullstack javascript applications.   
MEAN is a set of Open Source components that together, provide an end-to-end framework for building dynamic web applications; starting from the top (code running in the browser) to the bottom (database). The stack is made up of:

- **M**ongoDB : Document database – used by your back-end application to store its data as JSON (JavaScript Object Notation) documents
- **E**xpress (sometimes referred to as Express.js): Back-end web application framework running on top of Node.js
- **A**ngular (formerly Angular.js): Front-end web app framework; runs your JavaScript code in the user's browser, allowing your application UI to be dynamic
- **N**ode.js : JavaScript runtime environment – lets you implement your application back-end in JavaScript

### Pre-requisites
* git - [Installation guide](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) .  
* node.js - [Download page](https://nodejs.org/en/download/) .  
* npm - comes with node or download yarn - [Download page](https://yarnpkg.com/lang/en/docs/install) .  
* mongodb - [Download page](https://www.mongodb.com/download-center/community) .  

### Installation 
``` 
git clone https://github.com/shyamgv/eomfi
cd mean
cp .env.example .env
npm install
npm start (for development)
```
### Docker based 
``` 
git clone https://github.com/shyamgv/eomfi
cd mean
cp .env.example .env
docker-compose up -d
```
### Credits 
- The MEAN name was coined by Valeri Karpov.
- Initial concept and development was done by Amos Haviv and sponsered by Linnovate.
- Inspired by the great work of Madhusudhan Srinivasa.


###Issues

Changes made to run this code
=============================

## set environment varaiables
ps  
    $env:JWT_SECRET="eomfi"  
    $env:MONGO_HOST="mongodb://localhost/eomfi"

## one time setup
1)
```
npm remove webpack --save
rm -r node_modules
rm package-lock.json
npm install
```

2) Quick fix, in node_modules\ajv\lib\keyword.js I commented out
if (!validateDefinition(definition))
throw new Error('custom keyword definition is invalid: ' + this.errorsText(validateDefinition.errors));

3)

Commented line in node_modules/@angular/flex-layout/extended/typings/style/style.d.ts
//protected _buildStyleMap(styles: NgStyleType): string | import("./style-transforms").NgStyleMap;
