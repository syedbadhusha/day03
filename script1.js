// Question 2 solution
var request = new XMLHttpRequest()
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response)
    for(i=0;i<res.length;i++){
    console.log(res[i].flag);
    }
}

// Question 3 solution

var request2 = new XMLHttpRequest()
request2.open("GET", "https://restcountries.com/v3.1/all");
request2.send();
request2.onload = function(){
    var res2 = JSON.parse(request2.response)
    for(i=0;i<res2.length;i++){
    console.log(res2[i].name);
    console.log(res2[i].region);
    console.log(res2[i].subregion);
    console.log(res2[i].population)
    }
}
