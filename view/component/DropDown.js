
'use babel';


var DropDownItem = require("./DropDownItem");

class DropDown extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {header:this.props.header ,func :this.props.func};  
  }
   render(){
              return(
                      <div className="dropdown-container">
                      {
                          this.state.header.map(function(header , index){
                            
                            return (
                                    <DropDownItem header={header} key=index func={this.state.func[index]} />
                            );                       
                          })
                      }
                      </div>
              );
              
      }
}

module.exports = DropDown;