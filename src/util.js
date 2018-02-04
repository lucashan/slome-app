/*eslint no-undef: "error"*/

export default class Util {
    static fetchWrapper(url, params) {
        /*
         Wrapper which configures fetch() with common settings for project

         - Parses JSON from response and returns
         - Rejects the Promise if server returned HTTP error (e.g. 403 or 500), use .catch() to handle such errors
         - Sets base url, mode to cross-origin, content-type to JSON, and attaches token for authentication

         Usage:

         Util.fetchWrapper(url, {method: ['GET'/'POST'/etc.], [body: ]})
         .then((responseJSON) => {})
         .catch((errorJSON) = > {})

         */
        return fetch(
            "http://localhost:8080" + url, // Add API address to URL
            {
                headers: {'Content-Type': 'application/json'},
                mode: 'cors', ...params
            })
        .then(response => { // parse JSON
            return response.json().then(json => {
                return response.ok ? json : Promise.reject(json); // trigger failure on HTTP error
            });
        });
    }
}