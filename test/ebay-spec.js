
import Ebay from '../src/ebay';
import {expect} from 'chai';

describe('Ebay', function () {

    var client, token;

    before(function () {
        token = 'test_token';
    });

    beforeEach(function () {
        client = new Ebay(token);
    });

    it('should have RequestHelper class', function () {
        expect(client.requestHelper).to.be.not.null;
    });

});