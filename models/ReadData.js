class ReadData
{
  constructor(){
    this.fs = require("fs");
  }
  createData()
{
     var newdata = {
            "headers":["new"],"colors":[[]]}
        
        newdata = JSON.stringify(newdata);
        this.fs.writeFileSync("./data/themes.json" , newdata, "utf-8");
        
        var box = new PopupBox("提示");
        box.alert({contenttext:"創建成功"});
}
getData()
{
        var text = this.fs.readFileSync("./data/themes.json" , 'utf-8');
        var jsonthemedata = JSON.parse(text);
        return jsonthemedata;
}

}

module.exports =ReadData;