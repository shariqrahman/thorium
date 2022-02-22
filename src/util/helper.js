// current Date
const currentDate = new Date();
let date = currentDate.toDateString();

// current Month
let month = currentDate.getMonth() + 1;

// print Batch info
const batchName = 'Thorium'
const batchWD = 'W3D1'
const topic = 'the topic for today is Nodejs module system'
const batch = batchName + ', ' + batchWD + ', ' + topic


module.exports.usePrintDate = date
module.exports.usePrintMonth = month
module.exports.useBatchInfo = batch


