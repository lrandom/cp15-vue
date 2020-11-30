import AxiosInstance from "@/services/Axios";

function get(payload) {
    return AxiosInstance.get('everything',payload);
}

function post(payload) {
    return AxiosInstance.post('everything',payload);
}

function put(payload){
    return AxiosInstance.put('everything',payload);
}

function del(payload){
    return AxiosInstance.delete('everything',payload);
}

export const newService ={
    get,
    post,
    put,
    del
}
