import jwt from 'jsonwebtoken';
import fs from 'fs';
import fetch from 'node-fetch';

var privateKey = fs.readFileSync('./private.p8');

const teamId = ""; // paste team id here
const keyId = ""; // paste key id here

let now = new Date();
let nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
let nowEpoch = Math.round(now.getTime() / 1000); // number of seconds since Epoch, in UTC
let nextMonthEpoch = Math.round(nextMonth.getTime() / 1000); // number of seconds since Epoch, in UTC

var payload = {
	iss: teamId, // TEAM ID
	iat: nowEpoch,
	exp: nextMonthEpoch
};

var options = {
	algorithm: 'ES256',
	header: {
		alg: 'ES256',
		kid: keyId // KEY ID
	}
};

jwt.sign(payload, privateKey, options,async function(error, token) {

    if(error){
        console.log(error);
    }
	console.log("Here is the token:  " + token)

       const url = 'https://api.music.apple.com/v1/test';
    
    await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        // Catch test error and stop
        if(response.status == 200){
            console.log('200');
            console.log('The generated token is valid to access the Apple Music API ⚡🥳');
            process.exit(1);
        } else {
            
                console.log(' Test Failed 😶');
                process.exit(0);
            }       
    }).catch(error => {
        console.error(error);
    })



});