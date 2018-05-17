
'use babel';

class ColorBlock extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {show:true , controlstate:"none"};
  }
   deleteColor(){
        this.props.delcolor(this.props.id);
   }
   modifycolor(){

      var id = this.props.id;
      var pop = new PopupBox("輸入顏色");
      pop.prompt({contenttext:"顏色:" , inputname:"color" , correcthandler:function(value){
       this.props.changecolor(id , value.color);
    }.bind(this)});

   }
   setColorHex()
   {
      cp1.setColorFromHex(this.props.color); 
   }
   showControl(){
         this.setState({controlstate:"block"});
   }
   hideControl(){
          this.setState({controlstate:"none"});
   }
   render(){
       if(this.state.show ==true)
       {
           var bg_color = {background:this.props.color};
           var display = {display:this.state.controlstate};
           return (
               <div className="color-container">
                  <div className="color-block" onClick={this.setColorHex} onMouseOver={this.showControl.bind(this)} onMouseOut={this.hideControl.bind(this)} style={bg_color}>
                  </div>
                  <div className="color-control" onMouseOver={this.showControl.bind(this)} onMouseOut={this.hideControl.bind(this)}  style={display}>
                          <div className="color-space"></div>
                          <div className="color-edit" onClick={this.modifycolor}>
                                  <img src="./img/edit.png" />
                          </div>
                          <div className="color-del" onClick={this.deleteColor}>
                                  <img src="./img/del.png" />                                  
                          </div>
                  </div>                 
               </div>
            );
       }
       else{
       return null;
      }
  }
}

module.exports = ColorBlock;