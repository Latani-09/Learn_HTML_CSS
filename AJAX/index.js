/**
 * create xhttpRequest object
 * create a call back function which tells what to do when response is received
 * open xttprequest object
 * send request
 */


function loaddoc(){
    var xhttp=new XMLHttpRequest();
    xhttp.onload=function(){
document.getElementById('textReceived').innerHTML=xhttp.responseText;
    }
    var url='info.text';
    xhttp.open('Get',url);
    xhttp.send();

}
