
'use babel';


class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {name:this.props.name};
  }
  render(){
      return(
              <div className="header">
                <div>
                  {this.state.name}
                </div>
              </div>
              );
  }
}

module.exports = Header;