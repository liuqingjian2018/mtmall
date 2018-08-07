function findProduct(params, callback){
    var apiurl = APIHOME + "/api/product/find";
    $.get(apiurl, params, function(data){
        if (data && data.ret === 0) {
            if (callback) callback(data.data, data.pageInfo);
        }
    }, 'json');
}
function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
} 