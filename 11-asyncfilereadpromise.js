const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try{
        const first = await readFile('./content/first.txt','utf-8')
        const second = await readFile('./content/second.txt','utf-8')
        console.log(first,second)
        await writeFile('./content/result.txt',`This is async await implementation of read and write file lol. ${first} + ${second}. This is the easiest implementation if im right lol`)
    }
    catch(errror){
        console.log(error)
    }
}

start()

// const getText = (path) =>{
//     return new Promise((resolve,reject)=> {
//         readFile(path,'utf-8',(err,data)=>{
//         if(err){
//             reject(err)
//         }
//         else{
//             resolve(data)
//         }
// })
//     })
// }
// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))
