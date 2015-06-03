var MainTab = require('./maintab');
var SubTab = require('./subtab');

class MovieTab extends  React.Component {
         constructor(props) {
             super(props);
             this.state = {
                 data: {
                     List: {}
                 }
             };
         }
	render(){
	var _data=this.props.data;
	return(<aside className="movie-vertical-wrap J_hot_movie"><div className="movie-vertical big"><MainTab data={_data[0]}/></div><div className="movie-vertical movie-vertical-wide">
<SubTab data={_data[1]}/><SubTab data={_data[3]}/></div><div className="movie-vertical movie-vertical-wide">
<SubTab data={_data[2]}/><SubTab data={_data[4]}/></div></aside>)
	}
}

module.exports=MovieTab;

