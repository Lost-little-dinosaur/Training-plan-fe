// @ts-ignore
import axios from 'axios';

var request = axios.create({//封装axios，request也是一个axios，就是多了一些配置
    baseURL: 'http://localhost:8088',
});

export default request;