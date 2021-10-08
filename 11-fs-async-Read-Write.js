//Async callback hell
const {readFile, writeFile} = require('fs');
//Same functinality as sync
readFile('./content/first.txt','utf8' ,(err, res)=> {
    if(err){
        return err;
    }
    else{
        const first = res;
        readFile('./content/first.txt','utf8' ,(err, res)=> {
            if(err){
                return err;
            }
            else{
                const second = res;
                writeFile('./content/resultAsync.txt', `Here is the async result: ${first}, ${second}`, (err, res)=>{
                    if(err)
                        return err;
                    else{
                        return res;
                    }
                })
            }
        })
    }
})