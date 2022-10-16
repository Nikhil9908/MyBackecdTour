const date = new Date;
const printDate = date.getDate();
const printMonth = date.getMonth()+1;

const getBatchInfo = function(){
    console.log("Lithium, W5D3, the topic for today is Nodejs module system");
    return "done"
};

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;
