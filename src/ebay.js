import RequestHelper from './request-helper';

export default class Ebay {

    /**
     * Ebay API Client
     * @param {string} token - Private token
     */
    constructor(token) {
        this.requestHelper = new RequestHelper(token);
    }

    itemSearch(q, options, callback) {
        let actionPath = '/item/search';
        let params = {
            q: q,
            filter: options.filter,
            limit: options.limit || 50,
            offset: options.offset || 0
        };

        this.requestHelper.get(actionPath, params, function(err, response, body) {
            callback(err, response, body);
        });
    }

    itemGetItem(itemId, callback) {
        let actionPath = '/item/' + itemId;

        this.requestHelper.get(actionPath, {}, function (err, response, body) {
            callback(err, response, body);
        })
    }

    itemGetItemGroup(itemGroupId, callback) {
        let actionPath = '/item_group/' + itemGroupId;

        this.requestHelper.get(actionPath, {}, function(err, response, body) {
            callback(err, response, body);
        });
    }

    sessionCreateCheckoutSession(params, callback) {
        let actionPath = '/session';

        this.requestHelper.post(actionPath, params, function(err, response, body) {
            callback(err, response, body);
        });

    }
}