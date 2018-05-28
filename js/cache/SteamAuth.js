!function(){var e=window.__GRN;window[e].ready(function(){window[e].SteamAuth=function(){var t=0,n=null,o=[],i=!1,a=function(t){n=JSON.parse(t),window[e].awaitModulePrepared("Debug",function(t){window[e].Debug.writeConsoleMessage("Current authenticated user object","SteamAuth",window[e].Debug.LOG_LEVEL_INFO),window[e].Debug.writeConsoleObject(t,"SteamAuth",window[e].Debug.LOG_LEVEL_INFO)}.bind(this,n));var i=document.getElementById("steamProfile");if(i.innerHTML="",n&&n.statusCode&&404===n.statusCode){window[e].awaitModulePrepared("Debug",function(){window[e].Debug.writeConsoleMessage("User was not able to be found in BottlePass server!","SteamAuth",window[e].Debug.LOG_LEVEL_INFO)});var a=document.createElement("a");a.classList.add("OAADownloadLink"),a.setAttribute("target","_blank"),a.setAttribute("href","https://steamcommunity.com/sharedfiles/filedetails/?id=881541807"),a.innerHTML="Subscribe<br />to play",i.appendChild(a)}else if(n&&n.steamid&&n.profile){window[e].awaitModulePrepared("Debug",function(){window[e].Debug.writeConsoleMessage("User found in BottlePass server!","SteamAuth",window[e].Debug.LOG_LEVEL_INFO)});var d=document.createElement("div"),r=document.createElement("div"),u=document.createElement("div"),s=document.createElement("div"),w=document.createElement("span"),c=document.createElement("span");if(d.innerHTML=n.profile.name.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),w.innerHTML=n.unrankedMMR,c.innerHTML=n.rankedMMR,r.appendChild(w),c.appendChild(c),s.appendChild(r),s.appendChild(u),i.appendChild(c),i.appendChild(d),i.appendChild(s),n.profile.avatar){var l=document.createElement("img");l.setAttrinute("src",n.profile.avatar),i.appendChild(l)}}else window[e].awaitModulePrepared("Debug",function(){window[e].Debug.writeConsoleMessage("User data appears corrupted?","SteamAuth",window[e].Debug.LOG_LEVEL_INFO)});i.classList.remove("loading"),i.classList.add("loaded"),window[e].awaitModulePrepared("Debug",function(){window[e].Debug.writeConsoleMessage("Running onAuthenticated callbacks","SteamAuth",window[e].Debug.LOG_LEVEL_INFO)});for(var m=document.querySelectorAll(".OAAS32_"+window[e].SteamAuth.currentUserSteam32),p=0,h=m.length;p<h;p++)m[p].classList.add("OAA_currentSteamUser");for(p=0,h=o.length;p<h;p++)window[e].handleRunCallback(o[p])},d=function(t){window[e].awaitModulePrepared("Debug",function(t){window[e].Debug.writeConsoleMessage("User profile data was unable to be fetched!","SteamAuth",window[e].Debug.LOG_LEVEL_ERROR),window[e].Debug.writeConsoleObject(t,"SteamAuth",window[e].Debug.LOG_LEVEL_ERROR)}.bind(this,t))},r=function(){window[e].awaitModulePrepared("Debug",function(){window[e].Debug.writeConsoleMessage("User is not currently authenticated","SteamAuth",window[e].Debug.LOG_LEVEL_INFO)}),document.querySelector("body>nav .steamAuth").classList.remove("loading"),window[e].awaitModulePrepared("Debug",function(){window[e].Debug.writeConsoleMessage("Bound interactions for nav button for authentication","SteamAuth",window[e].Debug.LOG_LEVEL_INFO)})},u=function(){window.localStorage.setItem("OAAGGS64",Date.now()+6048e5+":"+t),function(){t||r(),window[e].awaitModulePrepared("Debug",function(){window[e].Debug.writeConsoleMessage("User is currently authenticated","SteamAuth",window[e].Debug.LOG_LEVEL_INFO)}),i=!0;var n=window.localStorage.getItem("OAAGGSUP");if(n){var o=n.split(":");if(Number(o.splice(0,1))>Date.now())return void a(o.join(":"))}window.fetch("https://chrisinajar.com:4969/users/"+window[e].SteamAuth.currentUserSteam32,{cache:"default"}).then(function(e){e.text().then(function(e){window.localStorage.setItem("OAAGGSUP",Date.now()+3e5+":"+e),a(e)}).catch(d)}).catch(d)}()};return{__init:function(){window[e].awaitModulePrepared("URL",function(){document.getElementById("steamAuth").setAttribute("href","https://steamcommunity.com/openid/login?openid.claimed_id="+encodeURIComponent("http://specs.openid.net/auth/2.0/identifier_select")+"&openid.identity="+encodeURIComponent("http://specs.openid.net/auth/2.0/identifier_select")+"&openid.mode="+encodeURIComponent("checkid_setup")+"&openid.ns="+encodeURIComponent("http://specs.openid.net/auth/2.0")+"&openid.realm="+encodeURIComponent(window.location.origin)+"&openid.return_to="+encodeURIComponent(window.location.origin+window.location.pathname));try{var n=window.localStorage.getItem("OAAGGS64");if(n&&-1!==n.indexOf(":")){var o=n.split(":");Number(o[0])>Date.now()?(t=o[1],u()):r()}else{var i=window[e].URL.searchParamValue("openid.identity");i&&(i=i.replace(/^https:\/\/steamcommunity.com\/openid\/id\//,""))?(t=i,u()):r()}}catch(e){}})}.bind(this),registerOnAuthenticatedCallback:function(t){i?window[e].handleRunCallback(t):o.push(t)}.bind(this),get currentUserSteam32(){for(var e,n,o,i=t.split("").reverse(),a="76561197960265728".split("").reverse(),d=[],r=0,u=i.length,s=!1;r<u;r++)e=Number(i[r]),n=Number(a[r]),s&&(e-=1),s=!1,(o=e-n)<0&&(o+=10,s=!0),d.push(o.toString());return d.reverse().join("").replace(/^[0]+/,"")},get currentUserSteam64(){return t}}}(),window[e].modulePrepared("SteamAuth"),window[e].moduleReady(window[e].SteamAuth.__init)})}();
//# sourceMappingURL=SteamAuth.js.map
