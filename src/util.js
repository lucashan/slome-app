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
            "https://slohacks-slome.appspot.com/" + url, // Add API address to URL
            {
                mode: 'cors', ...params
            })
        .then(response => { // parse JSON
            return response.json().then(json => {
                return response.ok ? json : Promise.reject(json); // trigger failure on HTTP error
            });
        });
    }
    static buildStreetViewUrl(sizeX, sizeY, address) {
        let url = 'https://maps.googleapis.com/maps/api/streetview?';
        url += 'size=' + sizeX + 'x' + sizeY;
        url += '&location=' + address;
        url += '&pitch=-0.76';
        url += '&key=AIzaSyC4ayU4Hydvj2zN67A7a_vC0haWAKSdEPE';

        return url;
    }
}