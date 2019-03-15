(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(36)},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(21),i=n.n(r),c=(n(30),n(5)),l=n(6),u=n(9),s=n(7),p=n(8),m=n(11),d=n(22),v=n(15),h={movies:[],movie:{},title:"",loading:!1},f=Object(m.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES":return Object(v.a)({},e,{movies:t.payload,title:t.title,loading:!1});case"GET_MOVIE_BY_ID":return Object(v.a)({},e,{movie:t.payload,loading:!1});case"MOVIES_LOADING":return Object(v.a)({},e,{loading:!0});default:return e}}}),O=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__();O=function(e){return e};var E=Object(m.e)(f,Object(m.d)(Object(m.a)(d.a),O)),b=n(10),g=n(38),j=n(40),y=n(39),w=function(e){return fetch("https://www.omdbapi.com/?apiKey=".concat("4434a6dd","&").concat(e))},_=function(){return{type:"MOVIES_LOADING"}},M=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).handleTitleSearch=function(e){if(!0===n.props.loading)return!1;n.props.getMovies(e.currentTarget.value)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"field"},o.a.createElement("div",{className:"ui icon fluid input"},o.a.createElement("input",{type:"text",name:"title",placeholder:"Search movies...",value:this.props.title,onChange:this.handleTitleSearch}),o.a.createElement("i",{className:"search icon"})))}}]),t}(a.Component),I={getMovies:function(e){return function(t){var n=function(){t({type:"GET_MOVIES",payload:[],title:e})};e.length>2?(t(_()),w("s="+e).then(function(e){return e.json()}).then(function(n){var a=n.Error?[]:n.Search;t({type:"GET_MOVIES",payload:a,title:e})}).catch(function(e){n()})):n()}}},N=Object(b.b)(function(e){return{title:e.app.title,loading:e.app.loading}},I)(M),S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={Component:null,isLoading:!1},n.loadComponent=function(){return n.props.componentProvider().then(function(e){n.setState({Component:e,isLoading:!1})})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.state.Component||this.state.isLoading||this.setState({isLoading:!0},this.loadComponent)}},{key:"render",value:function(){var e=this.state.Component;return e?o.a.createElement(e,this.props.componentProps):null}}]),t}(a.Component),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).lazyLoadMovieList=function(){return!0===a.props.loading?o.a.createElement("div",{className:"ui active loader"}):a.props.movies.length?o.a.createElement(S,{componentProps:{movies:a.props.movies},componentProvider:function(){return n.e(4).then(n.bind(null,42)).then(function(e){return e.MoviesList})}}):o.a.createElement("h3",null,"No results ... ")},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("main",{className:"ui main text container"},o.a.createElement("form",{className:"ui large form"},o.a.createElement("div",{className:"ui segment"},o.a.createElement(N,null))),this.lazyLoadMovieList())}}]),t}(a.Component),L=Object(b.b)(function(e){return{movies:e.app.movies,loading:e.app.loading}},{})(C),T=n(37),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).loadMovieInfo=function(){return!0===a.props.loading?o.a.createElement("div",{className:"ui active loader"}):"undefined"!==typeof a.props.movie.Error?o.a.createElement("h3",null,a.props.movie.Error):o.a.createElement(S,{componentProps:{movie:a.props.movie},componentProvider:function(){return n.e(3).then(n.bind(null,41)).then(function(e){return e.MovieCard})}})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params;this.props.getMovieById(e.id)}},{key:"render",value:function(){return o.a.createElement("main",{className:"movie-info"},o.a.createElement(T.a,{to:"/movies",className:"ui left labeled icon button"},o.a.createElement("i",{className:"left arrow icon"}),"Back"),this.loadMovieInfo())}}]),t}(a.Component),D={getMovieById:function(e){return function(t){t(_()),w("i="+e).then(function(e){return e.json()}).then(function(e){t({type:"GET_MOVIE_BY_ID",payload:e})}).catch(function(e){t({type:"GET_MOVIES",payload:{}})})}}},V=Object(b.b)(function(e){return{movie:e.app.movie,loading:e.app.loading}},D)(k),G=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(g.a,null,o.a.createElement(b.a,{store:E},o.a.createElement(j.a,{from:"/",to:"movies"}),o.a.createElement(y.a,{exact:!0,path:"/movies",component:L}),o.a.createElement(y.a,{exact:!0,path:"/movies/:id",component:V})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.3f756605.chunk.js.map