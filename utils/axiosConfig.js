import axios from "axios";
import { makeUseAxios } from "axios-hooks";

const axiosConfig = axios.create({
    baseURL: 'http://localhost',
    //timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})

export const useAxios = makeUseAxios({
    axios: axiosConfig,
});
 export default axiosConfig;