/* eslint-disable max-len */
const Calculator = require('../../app/Calculator');
const {expect} = require('chai');

describe('Positive tests with four numbers of arguments', function() {
    let validator;
    beforeEach(()=>validator = new Calculator);
    afterEach(()=>validator = null);
    it('Should return 8 when called with (2, 2, 2, 2)', function() {
        expect(validator.getAdd(2, 2, 2, 2)).to.be.equal(8);
    });
    it('Should return 16 when called with (2, 2, 2, 2)', function() {
        expect(validator.getMultiply(2, 2, 2, 2)).to.be.equal(16);
    });
});

describe('Negative tests with not a number arguments', function() {
    let validator;
    beforeEach(()=>validator = new Calculator);
    afterEach(()=>validator = null);
    it('should throw an Error if getAdd() method passed with not a number', function() {
        const callWithError = () => validator.getAdd(2, 'two', 2);
        expect(callWithError).to.throw('not a number');
    });
    it('should throw an Error if getMultiply() method passed with not a number', function() {
        const callWithError = () => validator.getMultiply(2, 'one', 5);
        expect(callWithError).to.throw('not a number');
    });
});