var assert = require('assert');
var BeerService = require('../services/beer.service');
const mongoose = require('mongoose');

// tells mongoose to use ES6 implementation of promises
mongoose.Promise = global.Promise;
const MONGODB_URI = "mongodb://localhost:27017/MCBC";
mongoose.connect(MONGODB_URI);

mongoose.connection
.once('open', () => console.log('Connected!'))
.on('error', (error) => {
    console.warn('Error: ', error);
});

// runs before each test
beforeEach((done) => {
    //mongoose.connection.collections.memberMeetupBeers.
    done();
});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('BeerService', function() {
    describe('#checkIsAvailable()', function() {
        it('should return ??? when the duplicates are found', async function() {
            var beerService = new BeerService();
            const results = await beerService.checkIsAvailable('Arrwsmth', 'Salish See');

            const expected = [{ brewery: 'Mount Arrowsmith Brewing Co.', beer: 'Salish Sea Pale Ale'}];
            assert.deepEqual(results, expected);
        });
    });
});