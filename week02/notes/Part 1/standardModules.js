const os = require('os')
// console.log(os);

// console.log(process);
    // console.log(process.env.NODE_ENV === 'production' ?  'https://mad9124.com' : 'localhost:3000'
    // );

    const fs = require('fs');
    const path = require('path');
fs.readFile(path.join(__dirname, './students.csv'),(err, data) => {
    console.log('err', err);
    console.log('data', data.toString());
    
});