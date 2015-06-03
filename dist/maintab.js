var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){MainTab[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;MainTab.prototype=Object.create(____SuperProtoOf____Class0);MainTab.prototype.constructor=MainTab;MainTab.__superConstructor__=____Class0;function MainTab(){"use strict";if(____Class0!==null){____Class0.apply(this,arguments);}}

	Object.defineProperty(MainTab.prototype,"render",{writable:true,configurable:true,value:function(){"use strict";
	var data=this.props.data;
	

	if (data.Flag) {
	var classString = 'movie-flag  movie-flag-big ',
	flagName = (parseInt(data.Flag) & 2) ? "promo" :
		(parseInt(data.Flag) & 4) ? "sold" : false;

    	classString += flagName;
	var Flag=React.createElement("div", {className: classString})

  	}

	return (React.createElement("div", {className: "big item J_native_url J_ga", "data-ga": "movie5_newmain_hotmovie", "data-url": data.url}, 
	Flag, 
        React.createElement("div", {className: "block-bg"}, 
            React.createElement("span", {className: ""}, data.Movie.Name
	    ), 
	React.createElement("strong", {className: "num"}, data.Movie.Grade)
	), 
        React.createElement("div", {className: "image"}, React.createElement("img", {src: data.Movie.LargeImage}))
    ))
	}});


module.exports = MainTab;

