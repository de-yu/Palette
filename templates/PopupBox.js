function  PopupBox(title)
{
    this.background = document.createElement("div");
    this.background.setAttribute("class" , "popupbox-background");
    this.panel = document.createElement("div");
    this.panel.setAttribute("class" , "popupbox-panel");
    this.title = document.createElement("div");
    this.title.setAttribute("class" , "popupbox-title");
    this.content = document.createElement("div");
    this.content.setAttribute("class" , "popupbox-content");
    this.buttons = document.createElement("div");
    this.buttons.setAttribute("class" , "popupbox-buttons");
        
    this.registername = new Array();    

    this.title.textContent = title;

}
PopupBox.prototype.alert = function(alertVar){
    
    var alertParameter = {contenttext:"" , cancelhandler:function(){}};
    alertParameter = this.extend(alertParameter, alertVar);
    
    this.addText(alertParameter.contenttext);
    this.addButton("確定" , alertParameter.cancelhandler);
    this.popupBoxes();
};

PopupBox.prototype.confirm = function(confirmVar){
    
    var confirmParameter = {contenttext:"" , correcthandler:function(){} ,  cancelhandler:function(){}};
    confirmParameter = this.extend(confirmParameter , confirmVar);
    
    this.addText(confirmParameter.contenttext);
    this.addButton("確認" , confirmParameter.correcthandler);
    this.addButton("取消" , confirmParameter.cancelhandler);
    this.popupBoxes();    
};

PopupBox.prototype.prompt = function(promptVar)
{
    var promptParameter = {contenttext:"" , inputname:"" , correcthandler:function(){} ,  cancelhandler:function(){}};
    promptParameter = this.extend(promptParameter , promptVar);
    
    this.addText(promptParameter.contenttext);
    this.addInput("text" , promptParameter.inputname);
    this.addButton("確認" , promptParameter.correcthandler);
    this.addButton("取消" , promptParameter.cancelhandler);
    this.popupBoxes();    
};
PopupBox.prototype.popupBoxes = function(){
    
    this.panel.appendChild(this.title);
    this.panel.appendChild(this.content);
    this.panel.appendChild(this.buttons);
    this.background.appendChild(this.panel);
    
    document.body.appendChild(this.background);
};

PopupBox.prototype.addButton = function(text , handler)
{
    var button = document.createElement("div");
    var execute;
    var value;
    button.textContent = text;
    button.setAttribute("class" , "popupbox-button");

        button.addEventListener("click",function(){
           value = this.getValue();
           handler(value);
           document.body.removeChild(this.background);
        }.bind(this));
    
    this.buttons.appendChild(button);
};
PopupBox.prototype.addInput = function(type , name , attr){
    
    var input = document.createElement("input");
    input.setAttribute("type" , type);
    input.setAttribute("name" , name);
    input.setAttribute("class" , "popupbox-"+type);
    
    this.registername.push(name);
    
     for (var key in attr)
    {
        input.setAttribute(key , attr[key]);
    }
    
     this.content.appendChild(input);
};
PopupBox.prototype.addTextarea = function(name , height , attr){
    
    var textarea = document.createElement("textarea");

    textarea.setAttribute("name" , name);
    textarea.setAttribute("class" , "popupbox-textarea");
    textarea.style.height = height + "px";
    this.registername.push(name);
     
    for (var key in attr)
    {
        textarea.setAttribute(key , attr[key]);
    }
    
    this.content.appendChild(textarea);
};
PopupBox.prototype.addText = function(text){
    
    var paragraph = document.createElement("p");
    paragraph.textContent = text;
    
    this.content.appendChild(paragraph);
};
PopupBox.prototype.getValue = function(){
    
    var value = {};
    for(var i=0;i<this.registername.length;i++)
    {
        value[this.registername] = document.getElementsByName(this.registername)[0].value;
    }
    
    return value;
};


PopupBox.prototype.extend = function(origin , newobj)
{
    var parameter = origin;
    for (var key in newobj)
    {
        parameter[key] = newobj[key];
    }
    
    return parameter;
};