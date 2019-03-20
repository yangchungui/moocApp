
import Axios from "axios"

/**
 * fetch对象来访问
 * @constructor
 */
const BaseUrl = "http://localhost:4000"

const REQUESTMETHODS = {"fetch":"fetch","axios":"axios"}

class FetchApi {

    constructor() {
        this.install = null;
    }


    /**
     * 通过get方式来获取数据
     * @param url
     * @param cb
     */
    get(url,cb){
        fetch(`${BaseUrl}/${url}`).then(res=>{
            res.json().then(data=>{
                cb(data)
            })
        })
    }

    static getInstance(){
        //singlton
        return this.instance || (this.instance = new FetchApi())
    }
}


/**
 * 通过axios的模块来调用 api
 */
class AxiosApi {

    constructor() {
       this.instance = null;
    }


    get(url,cb){
       Axios.get(`${BaseUrl}/${url}`).then(res=>{
           cb(res.data)
       })
    }

    static getInstance(){
        //singlton
        return this.instance || (this.instance = new AxiosApi())
    }
}

class WebSocketApi {

}

function ApiFactory(name) {
   switch (name) {
       case REQUESTMETHODS.axios:
           return AxiosApi.getInstance()
           break;
       case REQUESTMETHODS.fetch:
           return FetchApi.getInstance();
           break;
       default:
           return FetchApi.getInstance();
           break;
   }
}

export default ApiFactory(REQUESTMETHODS.fetch)
