//================Async JS=================//
console.log("Starting!");
setTimeout(() => {
    console.log("2 Second Timer");
}, 2000);

setTimeout(() => {
    console.log("0 Second Timer");
}, 0);

console.log("Stopping!");
/*******************************************/
/*******************************************/
//================HTTP REQUESTS=================//
// API => darksky.net => https://darksky.net/forecast/40.7127,-74.0059/us12/en
// API => weatherstack.com 
// We will use weatherstack.com API
// API Access Key:'89a151b9692e57e15e5e7fdaa5f48888'
//  API Endpoints : http://api.weatherstack.com/current
// http://api.weatherstack.com/current?access_key=89a151b9692e57e15e5e7fdaa5f48888&query=Alexandria
// note : free service doesn't support https (secure) you can only use http
