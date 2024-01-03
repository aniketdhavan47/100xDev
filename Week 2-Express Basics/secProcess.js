
function logResponse(jsonBody){
    console.log(jsonBody);
}

function callbackfn(result){
    result.json().then(logResponse);
}


let sendObj={
    "method":"GET"
}


fetch("http://localhost:4000/fetchRequest?counter=1000",sendObj).then(callbackfn);