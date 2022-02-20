class Fetch {

    static get(url, params = {}) {

        return Fetch.request('GET', url, params);

    }

    static delete(url, params = {}) {

        return Fetch.request('DELETE', url, params);

    }

    static put(url, params = {}) {

        return Fetch.request('PUT', url, params);

    }

    static post(url, params = {}) {

        return Fetch.request('POST', url, params);

    }

    static request(method, url, params = {}) {

        return new Promise((resolve, reject) => {

            let request;

            switch (method.toLowerCase()) {

                case 'get':
                    request = url;
                    break;

                default:
                    let body = JSON.stringify(params);

                    let headers = new Headers({
                        'Content-Type': 'application/json'
                    })

                    let init = {method, body, headers};

                    request = new Request(url, init);
            }

            fetch(request).then(response => {

                response.json().then(json => {

                    resolve(json);

                }).catch(e => {

                    reject(e);

                });

            });

        }).catch(e => {

            reject(e);

        });;

    }

}