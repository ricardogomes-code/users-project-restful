class HttpRequest {

    static get(url, params = {}){

        return HttpRequest.request('GET', url, params);
    }

    static delete(url, params = {}){

        return HttpRequest.request('DELETE', url, params);
    }

    static post(url, params = {}){

        return HttpRequest.request('POST', url, params);
    }

    static put(url, params = {}){

        return HttpRequest.request('PUT', url, params);
    }

    static request(method, url, params = {}) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open(method.toUpperCase(), url);

            xhr.onerror = e => {

                reject(e)
            }

            xhr.onload = e => {

                let obj = {};

                try {

                    obj = JSON.parse(xhr.responseText);

                } catch (e) {

                    reject(e);

                    console.error(e);
                }

                resolve(obj);
            };

            xhr.send();
        });
    }
}