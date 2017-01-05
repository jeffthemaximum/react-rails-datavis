import csv from 'csvtojson';

function csvStringToJson(csvString){
    // see https://www.npmjs.com/package/csvtojson
    const csv=require('csvtojson')
    return csv({noheader:true})
    .fromString(csvString)
    .on('csv',(csvRow)=>{ // this func will be called 3 times 
        console.log(csvRow) // => [1,2,3] , [4,5,6]  , [7,8,9] 
    })
    .on('done',(error)=>{
        //parsing finished 
    })
}

module.exports = {
    csvStringToJson: csvStringToJson
}