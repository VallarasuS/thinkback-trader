var KiteConnect = require("kiteconnect").KiteConnect;
import * as ENV from "./env";

const env = ENV.env();
const apiKey = env.apiKey;
const apiSecret = env.apiPass;

var kc = new KiteConnect({
    api_key: apiKey
});

export function getAccessToken(requestToken) {
    kc.generateSession(requestToken, apiSecret)
        .then(function (response) {
            let access_Token = response.access_token;
            console.log("Access Token : ", access_Token);
        })
        .catch(function (err) {
            console.log(err);
        });
}
const input = process.argv.slice(2);
if(input.length === 0){
    console.log("Request token is expected. ")
    console.log("Sample usage: node accesstoken myrequesttokenhere ")
}
else{
    getAccessToken(input[0]);  
}
//getAccessToken("Etr7YaKCDgFvRVwUBTeSih02AnqnZkPJ");
