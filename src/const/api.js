import axios from "axios";
import backendUrl from "./const";

const BASE_URL = backendUrl;

const createConfig = (params, contentType) => {
    let token = localStorage.getItem('token') || localStorage.getItem('google-token');
    
    let config = {};
    if (params) {
        config["params"] = params;
    }
    if (token) {
        config["headers"] = { 
            "Content-Type": contentType, 
            "Authorization": `Bearer ${token}` 
        };
    }
    return config;
}

const createJsonConfig = (params) => {
    return createConfig(params, "application/json;charset=UTF-8");
}

export const BaseApi = {
    get(url, params) {
        let fullUrl = `${BASE_URL}${url}`;
        let config = createJsonConfig(params);

        return axios.get(fullUrl, config).then(response => response.data);
    },
    
    post(url, data, queryParams) {
        let fullUrl = `${BASE_URL}${url}`;
        let config = createJsonConfig(queryParams);

        return axios.post(fullUrl, data, config).then(response => response.data);
    },
    
    delete(url, params) {
        let fullUrl = `${BASE_URL}${url}`;
        let config = createJsonConfig(params);

        return axios.delete(fullUrl, config).then(response => response.data);
    },
    
    put(url, data, params) {
        let fullUrl = `${BASE_URL}${url}`;
        let config = createJsonConfig(params);

        return axios.put(fullUrl, data, config).then(response => response.data);
    },

    getBaseUrl() {
        return BASE_URL;
    }
};
