var readerJSON = require ("../JSONToMongo");

describe('Refilling database', () => {
    test('deleting all documents and resetting', async (done) => {
            await readerJSON.restartUserDatabase();
        done();
    })
});
