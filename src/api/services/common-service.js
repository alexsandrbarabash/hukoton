import axios from 'axios';

export class CommonService {
    _baseURL = 'http://localhost:8000';

    constructor(_dynamicURL) {
        this._dynamicURL = _dynamicURL;
        this._baseAPI = axios.create({
            baseURL: this._baseURL + this._dynamicURL,
        });
    }
}