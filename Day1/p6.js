const fs=require('fs')

const append=()=>{
    const data =" hello"
    fs.appendFile('./data.txt',data,(err)=>{
        if(err) 
            console.log(err)
        else
        console.log("successfully updated data");
    })
}
append();