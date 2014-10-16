var WritableStream = require('../lib/writable-stream');

var f = WritableStream('./test.txt', {
	bufferSize: 1000
});

f.write('test');
f.write('test');
f.write('test');
f.write('test');
f.end();
