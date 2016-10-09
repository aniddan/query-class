/* globals describe it */
const {expect} = require('chai');
const Query = require('./query');

const testParams = {
    imageURL: 'https://static1.squarespace.com/static/553445d6e4b062ec5813db3a/t/5732410df699bbe6276ae8c8/1462911252703/'
};

describe('Query', () => {
    describe('.parse()', () => {
        it('should return an object of the query fields', () => {
            expect(Query.parse(`?imageURL=${encodeURIComponent(testParams.imageURL)}`))
            .to.deep.equal(testParams);
        });
        it('should return an empty object', () => {
            expect(Query.parse(''))
            .to.deep.equal({});
        });
        it('should return an empty object too', () => {
            expect(Query.parse('https://google.com?'))
            .to.deep.equal({});
        });
    });
    describe('.stringify', () => {
        it('should return a string of the query object w/o prefix', () => {
            expect(Query.stringify(testParams))
            .to.equal(`imageURL=${encodeURIComponent(testParams.imageURL)}`);
        });
        it('should return a string of the query object w/ prefix', () => {
            expect(Query.stringify(testParams, true))
            .to.equal(`?imageURL=${encodeURIComponent(testParams.imageURL)}`);
        });
    });
});
