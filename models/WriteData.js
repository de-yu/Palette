function WriteData()
{
    this.fs = require("fs");
}
WriteData.prototype.save = function(data)
{
    
    var jsondata = JSON.stringify(data);
    var box = new PopupBox("提示");
    this.fs.writeFileSync("./data/themes.json" , jsondata, "utf-8");

    box.alert( {contenttext:"儲存成功"});
};