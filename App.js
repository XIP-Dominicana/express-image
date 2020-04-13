const express = require('express');
const app = express();

const path = require('path');

//Statics files
app.use(express.static(path.resolve(__dirname, 'public')));

//Settings
app.set('PORT', 3001);

app.listen(app.get('PORT'), () => {
    console.info(`Server on port ${app.get('PORT')}`);
});
