module.exports = class Query {
    /**
     * @param {object} query - key-value dictionary
     * @param {bool} prefix - add prefix or not
     * @returns {string} - query string
     */
    static stringify (query, prefix) {
        return (prefix ? '?' : '') +
        Object.keys(query)
        .reduce((result, name) =>
            result += `${name}=${encodeURIComponent(query[name])}&`,
            ''
        )
        .slice(0, -1);
    }
    /**
     * @param {string} string - url or just query string to parse into an object.
     * @returns {object} - query object
     */
    static parse (string) {
        let queryString = string.slice(string.indexOf('?') + 1);
        if (!queryString.length) {
            return {};
        }
        return queryString.split('&').reduce((query, entry) => {
            let [name, value] = entry.split('=');
            return Object.assign(query, {
                [name]: decodeURIComponent(value)
            });
        }, {});
    }
};
