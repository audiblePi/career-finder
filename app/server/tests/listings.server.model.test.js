var mongoose = require( "mongoose" );
var Listing = require( "../models/UserModel.js" );
var config = require( "../config/config.js" );
var bruh = require ( "../JSONToMongo" );

let listing = {
    user: "admin",
    password: "21232f297a57a5a743894a0e4a801fc3",
    role: "admin"
}, id, db;

describe('Listing Schema Unit Tests', () => {
    describe('Saving to database', () => {

        beforeAll(async () => {
            db = await mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
            await mongoose.set('useCreateIndex', true);
            await mongoose.set('useFindAndModify', false);
            console.log(`established connection to db at uri: ${config.db.uri}!`);
        });

        afterEach(async () => {
            if (id) {
                await Listing.deleteOne({_id: id}).exec(() => {
                    id = null;
                });
            }
        });

        afterAll(async () => {
            await mongoose.connection.close();
        });

        test('saves properly when code and name provided', async (done) => {
            await new Listing({
                user: listing.user,
                password: listing.password
            }).save((err, listing) => {
                expect(err).toBeNull();
                id = listing._id;
                expect(id).not.toBeNull();
                expect(listing.user).toBe('admin');
                done();
            });
        }, 10000);

        test('saves properly when all three properties provided', async (done) => {
            await new Listing(listing).save((err, listing) => {
                expect(err).toBeNull();
                id = listing._id;
                expect(id).not.toBeNull();
                done();
            });
        });

        test('throws an error when name not provided', async (done) => {
            await new Listing({
                code: listing.code
            }).save(err => {
                expect(err).not.toBeNull();
                done();
            });
        });

        test('throws an error when code not provided', async (done) => {
            await new Listing({
                user: listing.user
            }).save((err) => {
                expect(err).not.toBeNull();
                done();
            })
        });

    });
});