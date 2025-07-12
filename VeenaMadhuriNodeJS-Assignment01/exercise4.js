const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, 'debug.log');
const logContent = fs.readFileSync(logPath, 'utf-8').split('\n');

const formatDate = (date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate().toString().padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'P.M' : 'A.M';
    hours = hours % 12 || 12;

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds} ${ampm}`;
};

const timestamped = logContent.map(line => {
    const timestamp = formatDate(new Date());
    return `${timestamp} ${line}`;
});

fs.writeFileSync(logPath, timestamped.join('\n'));
console.log('Timestamps added to each line in debug.log');
