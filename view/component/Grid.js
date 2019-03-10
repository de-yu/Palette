'use babel';

var DropDown = require("./DropDown");
var Header = require("./Header");
var ColorList = require("./ColorList");

class Grid extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state = {show:true , id:this.props.id , showfunction:false , data:data.getRowData(this.props.id)};  
    }
    show()
    {
        return this.state.show;
    }
    functionShowChange(){

        if(this.state.showfunction==false)
            this.setState({showfunction:true});
        else
            this.setState({showfunction:false});                  
    }
    modifyHeader(){

        var id = this.state.id;
        var pop = new PopupBox("輸入標題");
        pop.prompt({contenttext:"標題:" , inputname:"header" , correcthandler:function(value){
         data.modifyHeader(id , value.header);
         main.updateContain();
      }})
    }
    newColor(){

        var id = this.state.id;
        var pop = new PopupBox("輸入新的顏色");
        pop.prompt({contenttext:"顏色:" , inputname:"color" , correcthandler:function(value){
         data.newColor(id , value.color);
         main.updateContain();
      }})
    
    }
    deleteTheme(){
        this.props.del(this.state.id);
    }
    render(){
         var dropheader = new Array("標題" , "新增顏色" , "刪除這個主題");
         var dropfunc = new Array(this.modifyHeader , this.newColor ,this.deleteTheme);
         var show = null;
         
         if(this.state.showfunction)
         {
           show = <DropDown header={dropheader} func={dropfunc} show={this.state.showfunction} />;
         }  
         
         return (
                 <div className="grid">
                    <div className="grid-all">
                        <Header name={this.state.data['header']} />
                        <ColorList colors={this.state.data['colors']} index={this.state.id} />
                        <div className="grid-all-function" onClick={this.functionShowChange.bind(this)}>
                          <img src="./img/functionlist.png" />
                          {show}                           
                        </div>        
                    </div>
                 </div>
         );
     }
}

module.exports = Grid;