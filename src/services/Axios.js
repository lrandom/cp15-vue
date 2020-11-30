import Axios from 'axios';
import {config} from '@/config/config';
import constants from "@/config/constant";
const AxiosInstance = new Axios(
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

