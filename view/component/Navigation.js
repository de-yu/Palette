'use babel';

class Navigation extends React.Component
{
    constructor (props)
    {
       super(props);
    }
    newtheme()
    {
        this.props.newtheme();
    }
    search()
    {
        this.props.search(this.refs.searchquery.value);
    }
    enterSearch(event)
    {
        if(event.which==13)
        {
             this.props.search(this.refs.searchquery.value);
        }
    }
    clearSearch()
    {
        this.props.clearSearch();
    }
    savedata()
    {
        this.props.savedata();
    }
    render()
    {
      return (
      <div className="navigation" >
          <img className="navigation-logo" src="./img/palette.png" />
          <input className="navigation-search" ref="searchquery" onKeyDown={this.enterSearch} />
          <div className="navigation-searchbut" onClick={this.search}>
              <img src="./img/search.png" />
          </div>
          <span className="navigation-searchclear"  onClick={this.clearSearch}>
            <span>清除搜尋</span>
          </span>
          <span className="navigation-action" onClick={this.newtheme} >
             <span>新增主題</span>
          </span>
          <span className="navigation-action" onClick={this.savedata}>
             <span>儲存</span>
          </span>
      </div>);
    }
}

module.exports = Navigation;