// export function jsonParseMap(str:string){
//     const json = JSON.parse(str);
//     const map = new Map();
//     console.log(str.indexOf('"'))
//
//     return map;
// }
import md5 from "js-md5";
export function addSing(params:any) {
    // eslint-disable-next-line no-param-reassign
    let str = JSON.stringify(params.requestparams);
    // let dic = Object.keys(params).sort();
    // let singStr = ''
    // dic.forEach((item)=>{
    //     if (singStr === '') {
    //         singStr += item + "=" + params[item];
    //     } else {
    //         singStr += "&"+item + "=" + params[item];
    //     }
    //     console.log(item+params[item]);
    //
    // })
    return md5(str).toUpperCase();
}
