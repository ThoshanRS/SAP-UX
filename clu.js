var a =1;
function outer(){
    var b = 2;
    console.log(a);
    function inner(){
        var c=3;
        console.log(b);
        console.log(c);
    }
    
    inner();
}
outer();


function getTabledata(callback) {
    setTimeout(() => {
        var a = [{ id: "001", name: "Jack"}];
        callback(data);

    }, 2000);
}

getTabledata(function (data) {
    console.log(data);
});
