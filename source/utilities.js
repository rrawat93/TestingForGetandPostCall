
var fs=require('fs');
var path= require('path');


module.exports= {
    replacefile: function(template,actualfile, tobeReplaced, Replacedwith)
    {
        fs.readFile(template, 'utf8',function(err,data){
            if(err){
                return console.log(err)
            }
            var replacetext=tobeReplaced;
            var result =data.replace(tobeReplaced,Replacedwith);
            fs.writeFileSync(actualfile,result,'utf8',function(err){
                if(err) return console.log(err);
            });

            });
    }
}