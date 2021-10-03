import axios from "axios";
import config from "../config";

const url = (endpoint) => {
    return `${config.apiUrl}/${config.apiVersion}/${endpoint}`;

}

const post = (endpoint, data = {}) => {
    return axios.post(url(endpoint), data).then(res => res.data );
}

export {
    post
}