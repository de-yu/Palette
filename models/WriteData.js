class WriteData
{
  constructor()
  {
    this.fs = require("fs");
  }
  save (data)
  {

      var jsondata = JSON.stringify(data);
      var box = new PopupBox("提示");
      this.fs.writeFileSync(__dirname +"./../data/themes.json" , jsondata, "utf-8");

      box.alert( {contenttext:"儲存成功"});
  }
  saveNoBox(data)
  {
      var jsondata = JSON.stringify(data);
      this.fs.writeFileSync(__dirname +"./../data/themes.json" , jsondata, "utf-8");
  }

}

module.exports =WriteData;