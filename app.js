'use_strict';
var express = require('express');
var app = express();
app.use('/', express.static('static'));


app.get('/getData',(request,response) => {
    let items = [{name:'Arpit', address:'BLR'}];
	response.send(items);
})


app.listen(3000, function () {
    console.log('OpenUI5 on NodeJS example app is listening on port 3000!');
});