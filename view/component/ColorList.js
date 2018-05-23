
var ColorBlock = require('./ColorBlock');

class ColorList extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =  {bgcolor:this.props.colors , index:this.props.index};  
  }
  deleteColor(i){
      data.deleteColor(this.state.index , i );
      main.updateContain();
  }
  modifyColor(i , color)
  {
    data.modifyColor(this.state.index , i ,color)
    main.updateContain();
  }
  render(){
      return(
              <div className="color-list">
              {
                this.state.bgcolor.map(function(color , index){
                  return (
                          <ColorBlock key={index} color={this.state.bgcolor[index]} delcolor={this.deleteColor.bind(this)} changecolor={this.modifyColor.bind(this)} />
                          )              
                  }.bind(this))
              }
              </div>
      );
  }
}

module.exports = ColorList;