const fs=require('fs');
const data="I am a new Data";
fs.writeFileSync("./data.txt",data);