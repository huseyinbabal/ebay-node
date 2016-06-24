import request from 'request';

export default class RequestHelper {

    /**
     * Request Helper
     * @param {string} token - Bearer token for API call
     * @constructor
     */
    constructor(token) {
        this.headers = {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        this.apiUrl = 'https://api.sandbox.ebay.com/buy/v1';
    }

    /**
     * Send final request to API
     * @param {*} options - Request options
     * @param {*} callback - Function to execute on complete
     */
    doRequest(options, callback) {
        let requestOptions = this.requestBuilder(options);
        request(requestOptions, (err, response, body) => {
            if (err) callback(err);
            else callback(null, response, body);
        });
    }

    /**
     * POST request to API
     * @param {string} path - Action path
     * @param {*} data - Post request body
     * @param {*} callback - Function to execute on complete
     */
    post(path, data, callback) {
        let requestOptions = {
            path: path,
            method: 'POST',
            body: data
        };
        this.doRequest(requestOptions, callback);
    }

    /**
     * Get request to API
     * @param {string} path - Action path
     * @param {*} params - Url parameters
     * @param {*} callback - Function to execute on complete
     */
    get(path, params, callback) {
        let requestOptions = {
            path: path,
            method: 'GET',
            qs: params
        };
        this.doRequest(requestOptions, callback);
    }

    requestBuilder(options) {
        return {
            uri: this.apiUrl + options.path,
            method: options.method || 'GET',
            headers: options.headers || this.headers,
            body: options.body || {},
            json: options.json || true,
            qs: options.qs || {}
        };
    }

}
