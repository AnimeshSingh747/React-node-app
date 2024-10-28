const fs = require('fs');

const readStream = fs.createReadStream('example.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log('New Chunk:', chunk);
});

readStream.on('end', () => {
    console.log('Finished reading file.');
});