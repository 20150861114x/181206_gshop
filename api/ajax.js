import axios from 'axios'
export default function ajax(url,data={},type='GET'){
    return new Promise(function(resolve,reject){
        let promise
        if(type === 'GET'){
            let dataStr=""
            Object.keys(data).forEach(key =>{
                dataStr += key + '=' + data[key] + '&'
            })
            if(dataStr != ''){
                dataStr = adtaStr.substring(0,dataStr.lastIndexOf('&'))
                url = url +'?'+dataStr;
            }
            promise = axios.get(url);
        }else{
            promise = axios.post(url,data);
        }
        // 返回
        promise.then(function(response){
            // 成功调用
            resolve(response)
        }).catch(function(error){
            // 失败调用
            reject(error)
        })

    })
}