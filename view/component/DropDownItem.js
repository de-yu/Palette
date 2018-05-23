
'use babel';


class DropDownItem extends React.Component
{
    constructor (props)
    {
        super(props);
    }
    usefunction(){
        this.props.func();
    }
    render(){
        return(
                <div className="dropdown-item" onClick={this.usefunction.bind(this)}>
                  {this.props.header}
                </div>
        );
    }
}

module.exports = DropDownItem;