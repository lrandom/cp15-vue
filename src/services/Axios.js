import axios from 'axios';
import {config} from '@/config/config';
import constants from "@/config/constant";
const AxiosInstance = axios.create(
    {
        baseUrl: config.baseUrl,
        timeOut: 1000
    }
);

AxiosInstance.interceptors.request.use(function(config){
    config.params['apiKey'] = constants.API_KEY;
    return config;
})

export default AxiosInstance;

