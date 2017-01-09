import csv from 'csvtojson';

function csvStringToJson(csvString, callback){
    // return new Promise(function(resolve, reject){
        // see https://www.npmjs.com/package/csvtojson
        let allRows = [];
        const csv=require('csvtojson')
        csv({noheader:true})
        .fromString(csvString)
        .on('csv',(csvRow)=>{ // this func will be called 3 times
            allRows.push(csvRow);
        })
        .on('done',()=>{
            console.log(allRows);
            callback(allRows);
        });
        
    // }); 
}

function rowsToColumns(grid){
    var grid2 = grid[0].map(function(col, i) {
        return grid.map(function(row) {
            return row[i];
        });
    });
    return grid2;
}


module.exports = {
    csvStringToJson: csvStringToJson,
    rowsToColumns: rowsToColumns
}