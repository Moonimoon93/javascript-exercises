const helloWorld = require('./helloWorld');

describe('Hello World Eh', function() {
    test('says "Hello, World!"', function() {
        expect(helloWorld()).toEqual('Hello, World!');
    });
});