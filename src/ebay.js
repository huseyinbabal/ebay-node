import RequestHelper from './request-helper';

export default class Ebay {

    /**
     * Ebay API Client
     * @param {string} token - Private token
     */
    constructor(token) {
        this.requestHelper = new RequestHelper(token);
    }

    itemSearch(q, filter, limit, offset) {
        let actionPath = '/item/search';
        let params = {
            q: q,
            filter: filter,
            limit: limit || 50,
            offset: offset || 0
        };

        this.requestHelper.get(actionPath, params, function(err, response, body) {
            console.log(err, response, body);
        });
    }
}