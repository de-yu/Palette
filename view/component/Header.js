
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
                  {this.statename}
                </div>
              </div>
              );
  }
}

module.exports = Header;