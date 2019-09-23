(window["webpackJsonpwater-and-sewer-permits-viz"]=window["webpackJsonpwater-and-sewer-permits-viz"]||[]).push([[0],{112:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),i=(a(98),a(99),a(19)),l=a(25),s=a(12),u=a(13),d=a(15),p=a(14),m=a(22),h=a(16),f=a(113),g=a(114),b=a(115),E=a(121),v=a(116),y=a(117),x=a(118),O=a(69),_=a.n(O),w=a(70),A=a.n(w),k=a(71),j=a.n(k),T=a(72),C=a.n(T),M=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(d.a)(this,Object(p.a)(e).call(this,t))).state={isOpen:!1},a.toggle=a.toggle.bind(Object(m.a)(a)),a}return Object(h.a)(e,t),Object(u.a)(e,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement(f.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(g.a,{tag:i.b,to:"/"},"Home"),r.a.createElement(g.a,{tag:i.b,to:"/about"},"About"),r.a.createElement(b.a,{onClick:this.toggle}),r.a.createElement(E.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(v.a,{className:"ml-auto",navbar:!0},r.a.createElement(y.a,null,r.a.createElement(x.a,{className:"nav-img",href:"https://www1.nyc.gov/site/dep/index.page"},r.a.createElement("img",{src:_.a,alt:"DEP Logo"}))),r.a.createElement(y.a,null,r.a.createElement(x.a,{className:"nav-img",href:"https://data.cityofnewyork.us/Environment/Water-and-Sewer-Permits/4k4u-823g"},r.a.createElement("img",{src:A.a,alt:"Open Data Logo"}))),r.a.createElement(y.a,null,r.a.createElement(x.a,{className:"nav-img",href:"https://twitter.com/_nate_hunter_"},r.a.createElement("img",{src:j.a,alt:"Twitter Logo"}))),r.a.createElement(y.a,null,r.a.createElement(x.a,{className:"nav-img",href:"https://github.com/nate-hunter"},r.a.createElement("img",{src:C.a,alt:"Github Logo"}))))))}}]),e}(r.a.Component),P=a(119),S=a(120),R=function(t){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PROJECT HOME PAGE"),r.a.createElement(P.a,{fluid:!0},r.a.createElement(S.a,{outline:!0,color:"primary"},r.a.createElement(i.b,{to:"/2018"},"2018"))," ",r.a.createElement(S.a,{outline:!0,color:"primary"},r.a.createElement(i.b,{to:"/2019"},"2019"))," ",r.a.createElement(S.a,{outline:!0,color:"primary"},r.a.createElement(i.b,{to:"/comparison"},"COMPARE YEARS"))," ",r.a.createElement(S.a,{outline:!0,color:"primary"},r.a.createElement(i.b,{to:"/barchart-test"},"ALL PERMITS (BAR)"))," ",r.a.createElement(S.a,{outline:!0,color:"primary"},r.a.createElement(i.b,{to:"/map"},"MAP"))," ",r.a.createElement(S.a,{color:"warning"},r.a.createElement(i.b,{to:"/stackedchart-sb"},"STACKED CHART TEST"))," "))}}]),e}(r.a.Component),D=function(){return r.a.createElement(P.a,{flex:!0},r.a.createElement("h2",null,"ABOUT THIS PROJECT"),r.a.createElement("p",null,"This project..."))},I=a(4),N=a(76),L=a.n(N),W=a(24),B=function(t){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;I.c(L.a,(function(t){return t})).then((function(e){t.drawBarChartTest(e)}))}},{key:"drawBarChartTest",value:function(t){var e=40,a=20,n=30,r=40,c=960-r-a,o=500-e-n,i=I.l().domain(t.map((function(t){return t.borough_name}))).range([0,c]).paddingInner(.2).paddingOuter(.2),l=I.m().domain([0,I.j(t,(function(t){return t.total}))]).range([o,0]),s=I.a(i),u=I.b(l),d=I.h(","),p=Object(W.a)().attr("class","d3-tip").offset([-2,0]).direction("n").html((function(t){return"<div id='thumbnail'><h3 style='color:steelblue'>".concat(t.borough_name,"</h3></div>")+"<p>TOTAL PERMITS: <span style='color:orangered'>".concat(d(t.total),"</span></p>")})),m=I.p(this.refs.canvas).append("svg").attr("width",c+r+a).attr("height",o+e+n).append("g").attr("transform","translate(".concat(r,", ").concat(e,")"));m.call(p),m.append("g").attr("class","x axis").attr("transform","translate(0, ".concat(o,")")).call(s),m.append("g").attr("class","y axis").call(u).append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").style("text-anchor","end").text("Permits"),m.selectAll(".bar").data(t).enter().append("rect").attr("class","bar").attr("x",(function(t){return i(t.borough_name)})).attr("width",i.bandwidth).attr("y",(function(t){return l(t.total)})).attr("height",(function(t){return o-l(t.total)})).on("mouseover",p.show).on("mouseout",p.hide)}},{key:"render",value:function(){return r.a.createElement(P.a,{fluid:!0},r.a.createElement("h2",{id:"bar-chart-sb",className:"bar-chart-header"},"WATER AND SEWER PERMITS GRANTED (ALL YEARS)"),r.a.createElement("div",{id:"bar-chart-sb",className:"bar-chart",ref:"canvas"}))}}]),e}(r.a.Component),z=a(77),G=a.n(z),H=a(26),Y=function(t){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;I.c(G.a,(function(t){return t})).then((function(e){t.drawClusterChart(e)}))}},{key:"drawClusterChart",value:function(t){var e=I.p(this.refs.canvas).append("svg").attr("width",1e3).attr("height",900).style("border","1px solid black"),a=20,n=70,r=600-n-20,c=600-a-70,o=I.n(I.o),i=e.append("g").attr("width",r/2).attr("height",c/2).attr("transform","translate(".concat(n-40,", ").concat(a+160,")")),l=I.h(","),s=Object(W.a)().attr("class","d3-tip").offset([-2,-3]).direction("n").html((function(t){return"<div id='thumbnail'><h3>".concat(t.borough_name,"</h3></div>")+"<p>Permit Description: <span style='color:orange'>".concat(t.permit_description,"</span></p>")+"<p>Service Order: <span style='color:orange'>".concat(t.serv_order,"</span></p>")+"<p>Total: <span style='color:orangered'>".concat(l(t.permit_count),"</span></p>")+"<p>Year: <span style='color:steelblue'>".concat(t.year,"</span></p>")})),u=e.append("g").attr("transform","translate(".concat(r+300,", 30)")),d=H.a.legendColor().shape("circle").shapePadding(4).scale(o),p=e.append("g").attr("class","scale-legend").attr("transform","translate(".concat(r/2-150,", 30)")),m=I.m(),h=H.a.legendSize().scale(m).shape("circle").shapePadding(12).labelOffset(20).orient("horizontal").labels(["Less Permits Granted","","","","More Permits Granted"]).labelWrap(30).shapeWidth(40).labelAlign("start");i.call(s);var f=I.m().domain(I.d(t,(function(t){return+t.permit_count}))).range([10,95]),g=I.n().domain(t.map((function(t){return t.borough_code}))).domain().length,b=new Array(g);m.domain(I.d(t,(function(t){return+t.permit_count}))).range([10,15]),o.domain(t.map((function(t){return t.borough_name}))).range(["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854"]),u.call(d),u.selectAll("text").attr("fill","darkblue"),p.call(h),p.selectAll("text").attr("fill","darkblue"),p.select("g").attr("fill","#8da0cb");var E=I.k(t.length).map((function(e){var a=+t[e].borough_code,n=f(t[e].permit_count);return e={cluster:a,radius:n,borough_name:t[e].borough_name,permit_description:t[e].permit_description,serv_order:t[e].serv_order,permit_count:t[e].permit_count,year:t[e].year,x:200*Math.cos(e/t.length*2*Math.PI)+r/2+Math.random(),y:200*Math.sin(e/t.length*2*Math.PI)+c/2+Math.random()},(!b[a]||n>b[a].radius)&&(b[a]=e),e})),v=(I.g().force("center",I.e(r,c/2)).force("cluster",function(){var t,e=.1;function a(a){a*=e*a,t.forEach((function(t){var e=b[t.cluster];if(e!==t){var n=t.x-e.x,r=t.y-e.y,c=Math.sqrt(n*n+r*r),o=t.radius+e.radius;c!==o&&(c=(c-o)/c*a,t.x-=n*=c,t.y-=r*=c,e.x+=n,e.y+=r)}}))}return a.initialize=function(e){t=e},a.strength=function(t){return e=null==t?e:t,a},a}().strength(.6)).force("collide",I.f((function(t){return t.radius+1.5})).strength(.9)).velocityDecay(.7).on("tick",(function(t){v.attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y})).attr("r",(function(t){return t.radius})).on("mouseover",s.show).on("mouseout",s.hide)})).nodes(E),i.selectAll("circle").data(E).enter().append("circle").style("fill",(function(t){return o(t.cluster/g)})));v.transition().duration(1e3).delay((function(t,e){return 5*e})).attrTween("r",(function(t){var e=I.i(0,t.radius);return function(a){return t.radius=e(a)}}))}},{key:"render",value:function(){return r.a.createElement(P.a,{fluid:!0},r.a.createElement("h2",{id:"cluster-chart-sb",className:"cluster-chart-header"},"2018 DATA IN CLUSTERS"),r.a.createElement("div",{id:"cluster-chart-sb",className:"cluster-chart",ref:"canvas"}))}}]),e}(r.a.Component),F=a(78),J=a.n(F),U=function(t){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;I.c(J.a,(function(t){return t})).then((function(e){t.drawClusterChart(e)}))}},{key:"drawClusterChart",value:function(t){var e=I.p(this.refs.canvas).append("svg").attr("width",1e3).attr("height",900).style("border","1px solid black"),a=20,n=70,r=600-n-20,c=600-a-70,o=I.n(I.o),i=e.append("g").attr("width",r/2).attr("height",c/2).attr("transform","translate(".concat(n-40,", ").concat(a+160,")")),l=I.h(","),s=Object(W.a)().attr("class","d3-tip").offset([-2,-3]).direction("n").html((function(t){return"<div id='thumbnail'><h3>".concat(t.borough_name,"</h3></div>")+"<p>Permit Description: <span style='color:orange'>".concat(t.permit_description,"</span></p>")+"<p>Service Order: <span style='color:orange'>".concat(t.serv_order,"</span></p>")+"<p>Total: <span style='color:orangered'>".concat(l(t.permit_count),"</span></p>")+"<p>Year: <span style='color:steelblue'>".concat(t.year,"</span></p>")})),u=e.append("g").attr("transform","translate(".concat(r+300,", 30)")),d=H.a.legendColor().shape("circle").shapePadding(4).scale(o),p=e.append("g").attr("class","scale-legend").attr("transform","translate(".concat(r/2-150,", 30)")),m=I.m(),h=H.a.legendSize().scale(m).shape("circle").shapePadding(12).labelOffset(20).orient("horizontal").labels(["Less Permits Granted","","","","More Permits Granted"]).labelWrap(30).shapeWidth(40).labelAlign("start");i.call(s);var f=I.m().domain(I.d(t,(function(t){return+t.permit_count}))).range([10,95]),g=I.n().domain(t.map((function(t){return t.borough_code}))).domain().length,b=new Array(g);m.domain(I.d(t,(function(t){return+t.permit_count}))).range([10,15]),o.domain(t.map((function(t){return t.borough_name}))).range(["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854"]),u.call(d),u.selectAll("text").attr("fill","darkblue"),p.call(h),p.selectAll("text").attr("fill","darkblue"),p.select("g").attr("fill","#8da0cb");var E=I.k(t.length).map((function(e){var a=+t[e].borough_code,n=f(t[e].permit_count);return e={cluster:a,radius:n,borough_name:t[e].borough_name,permit_description:t[e].permit_description,serv_order:t[e].serv_order,permit_count:t[e].permit_count,year:t[e].year,x:200*Math.cos(e/t.length*2*Math.PI)+r/2+Math.random(),y:200*Math.sin(e/t.length*2*Math.PI)+c/2+Math.random()},(!b[a]||n>b[a].radius)&&(b[a]=e),e})),v=(I.g().force("center",I.e(r,c/2)).force("cluster",function(){var t,e=.1;function a(a){a*=e*a,t.forEach((function(t){var e=b[t.cluster];if(e!==t){var n=t.x-e.x,r=t.y-e.y,c=Math.sqrt(n*n+r*r),o=t.radius+e.radius;c!==o&&(c=(c-o)/c*a,t.x-=n*=c,t.y-=r*=c,e.x+=n,e.y+=r)}}))}return a.initialize=function(e){t=e},a.strength=function(t){return e=null==t?e:t,a},a}().strength(.6)).force("collide",I.f((function(t){return t.radius+1.5})).strength(.9)).velocityDecay(.7).on("tick",(function(t){v.attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y})).attr("r",(function(t){return t.radius})).on("mouseover",s.show).on("mouseout",s.hide)})).nodes(E),i.selectAll("circle").data(E).enter().append("circle").style("fill",(function(t){return o(t.cluster/g)})));v.transition().duration(1e3).delay((function(t,e){return 5*e})).attrTween("r",(function(t){var e=I.i(0,t.radius);return function(a){return t.radius=e(a)}}))}},{key:"render",value:function(){return r.a.createElement(P.a,{fluid:!0},r.a.createElement("h2",{id:"cluster-chart-sb",className:"cluster-chart-header"},"2019 DATA IN CLUSTERS"),r.a.createElement("div",{id:"cluster-chart-sb",className:"cluster-chart",ref:"canvas"}))}}]),e}(r.a.Component),q=function(t){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(P.a,{fluid:!0},r.a.createElement(Y,null),r.a.createElement(U,null))}}]),e}(r.a.Component),K=function(t){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(P.a,{flex:!0},r.a.createElement("h3",null,"Interactive Map Coming Soon..."))}}]),e}(r.a.Component),V=a(34),$=a(79),Q=a.n($),X=function(t){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;I.c(Q.a,(function(t){return t})).then((function(e){return t.drawStackedChart(e)}))}},{key:"drawStackedChart",value:function(t){var e=40,a=40,n=5,r=40,c=1e3-r-a,o=700-e-n,i=["#1E90FF","#00BFFF","#ADD8E6","#DDA0DD","#BA55D3","#4B0082"],l=t.columns.slice(2,8),s=Object(V.a)(new Set(t.map((function(t){return t.year})))),u=Object(V.a)(new Set(t.map((function(t){return t.borough_name})))),d=(I.p("#year").selectAll("option").data(s).enter().append("option").text((function(t){return t})),I.h(",")),p=I.p(this.refs.canvas).append("svg").attr("width",c+r+a).attr("height",o+e+n),m=I.l().range([r,c-a]).padding(.1),h=I.m().rangeRound([o-n,e]),f=(p.append("g").attr("transform","translate(0, ".concat(o-n,")")).attr("class","x-axis"),p.append("g").attr("transform","translate(".concat(r,", 0)")).attr("class","y-axis"),I.n().range(i).domain(l));Object(W.a)().attr("class","d3-tip").offset([-2,0]).direction("n").html((function(t){return"<div id='thumbnail'><h3 style='color:steelblue'>".concat(t.borough_name,"</h3></div>")+"<p>TOTAL PERMITS: <span style='color:orangered'>".concat(d(t.total),"</span></p>")}));function g(e,a){var n=t.filter((function(t){return t.year===e}));n.forEach((function(t){return t.total=I.r(l,(function(e){return+t[e]})),t})),h.domain([0,I.j(n,(function(t){return I.r(l,(function(e){return+t[e]}))}))]).nice(),p.selectAll(".y-axis").transition().duration(a).call(I.b(h).ticks(null,"s")),n.sort(I.p("#sort").property("checked")?function(t,e){return e.total-t.total}:function(t,e){return u.indexOf(t.borough_name)-u.indexOf(e.borough_name)}),m.domain(n.map((function(t){return t.borough_name}))),p.selectAll(".x-axis").transition().duration(a).call(I.a(m).tickSizeOuter(0));var r=p.selectAll("g.layer").data(I.q().keys(l)(n),(function(t){return t.key}));r.exit().remove(),r.enter().append("g").classed("layer",!0).attr("fill",(function(t){return f(t.key)}));var c=p.selectAll("g.layer").selectAll("rect").data((function(t){return t}),(function(t){return t.data.borough_name}));c.exit().remove(),c.enter().append("rect").attr("width",m.bandwidth()).merge(c).transition().duration(a).attr("x",(function(t){return m(t.data.borough_name)})).attr("y",(function(t){return h(t[1])})).attr("height",(function(t){return h(t[0])-h(t[1])}));var o=p.selectAll(".text").data(n,(function(t){return t.borough_name}));o.exit().remove(),o.enter().append("text").attr("class","text").attr("text-anchor","middle").merge(o).transition().duration(a).attr("x",(function(t){return m(t.borough_name)+m.bandwidth()/2})).attr("y",(function(t){return h(t.total)-5})).text((function(t){return d(t.total)}))}g(I.p("#year").property("value"),0);var b=I.p("#year").on("change",(function(){return g(b.property("value"),750)})),E=(I.p("#sort").on("click",(function(){return g(b.property("value"),750)})),p.selectAll(".legend").data(i).enter().append("g").attr("class","legend").attr("transform",(function(t,e){return"translate(-200, ".concat(19*e,")")})));E.append("rect").attr("x",c-18).attr("width",18).attr("height",18).style("fill",(function(t,e){return i.slice().reverse()[e]})),E.append("text").attr("x",c+5).attr("y",9).attr("dy","0.35em").style("text-anchor","start").text((function(t,e){switch(e){case 0:return"PERMIT: TAP";case 1:return"SEWER PERMIT: INSTALL";case 2:return"SEWER PERMIT: PLUG";case 3:return"SEWER PERMIT: CATCH BASIN/MAN";case 4:return"SEWER PERMIT: CATCH BASIN";case 5:return"SEWER PERMIT: PRIVATE"}}))}},{key:"render",value:function(){return r.a.createElement(P.a,{fluid:!0},r.a.createElement("h1",null,"STACKED CHART DEMO"),r.a.createElement("div",{id:"stacked-chart-sb",className:"stacked-chart",ref:"canvas"}),"Select year:",r.a.createElement("select",{id:"year"}),r.a.createElement("input",{type:"checkbox",id:"sort"}),"Toggle sort")}}]),e}(r.a.Component);var Z=function(){return r.a.createElement(i.a,null,r.a.createElement(M,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:R}),r.a.createElement(l.a,{path:"/about",exact:!0,component:D}),r.a.createElement(l.a,{path:"/2018",exact:!0,component:Y}),r.a.createElement(l.a,{path:"/2019",exact:!0,component:U}),r.a.createElement(l.a,{path:"/comparison",exact:!0,component:q}),r.a.createElement(l.a,{path:"/map",exact:!0,component:K}),r.a.createElement(l.a,{path:"/barchart-test",exact:!0,component:B}),r.a.createElement(l.a,{path:"/stackedchart-sb",exact:!0,component:X})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(111);o.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},69:function(t,e,a){t.exports=a.p+"static/media/New_York_City_Department_of_Environmental_Protection_logo.0958f267.png"},70:function(t,e,a){t.exports=a.p+"static/media/NYCOpenData_Logo.228bdb80.png"},71:function(t,e,a){t.exports=a.p+"static/media/Logo-twitter.75604377.png"},72:function(t,e,a){t.exports=a.p+"static/media/GitHub-Logo-03.957c4dd9.png"},76:function(t,e,a){t.exports=a.p+"static/media/totals.80016fe3.csv"},77:function(t,e,a){t.exports=a.p+"static/media/2018.86333227.csv"},78:function(t,e,a){t.exports=a.p+"static/media/2019.7c2db490.csv"},79:function(t,e,a){t.exports=a.p+"static/media/all.ae5cea69.csv"},93:function(t,e,a){t.exports=a(112)},98:function(t,e,a){},99:function(t,e,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.d2517d98.chunk.js.map