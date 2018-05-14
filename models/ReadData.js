function ReadData()
{
    this.fs = require("fs");
}
ReadData.prototype.createData =function()
{
     var newdata = {
            "headers":["new"],"colors":[[]]}
        
        newdata = JSON.stringify(newdata);
        this.fs.writeFileSync("./data/themes.json" , newdata, "utf-8");
        
        var box = new PopupBox("提示");
        box.alert({contenttext:"創建成功"});
};
ReadData.prototype.getData = function()
{
        var text = this.fs.readFileSync("./data/themes.json" , 'utf-8');
        var jsonthemedata = JSON.parse(text);
        return jsonthemedata;
};
