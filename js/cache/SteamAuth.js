!function(){var e=window.__GRN;window[e].ready(function(){window[e].SteamAuth=function(){var t=0,n=[],o=!1,i=function(t){window[e].awaitModulePrepared("Debug",function(){window[e].Debug.writeConsoleMessage("Running onAuthenticated callbacks","SteamAuth",window[e].Debug.LOG_LEVEL_INFO)});for(var o=0,i=n.length;o<i;o++)window[e].handleRunCallback(n[o])},a=function(t){window[e].awaitModulePrepared("Debug",function(t){window[e].Debug.writeConsoleMessage("User profile data was unable to be fetched!","SteamAuth",window[e].Debug.LOG_LEVEL_ERROR),window[e].Debug.writeConsoleObject(t,"SteamAuth",window[e].Debug.LOG_LEVEL_ERROR)}.bind(this,t))},d=function(){window[e].awaitModulePrepared("Debug",function(){window[e].Debug.writeConsoleMessage("User is not currently authenticated","SteamAuth",window[e].Debug.LOG_LEVEL_INFO)}),document.querySelector("body>nav .steamAuth").classList.remove("loading"),window[e].awaitModulePrepared("Debug",function(){window[e].Debug.writeConsoleMessage("Bound interactions for nav button for authentication","SteamAuth",window[e].Debug.LOG_LEVEL_INFO)})},u=function(){window.localStorage.setItem("OAAGGS64",Date.now()+6048e5+":"+t),function(){t||d(),window[e].awaitModulePrepared("Debug",function(){window[e].Debug.writeConsoleMessage("User is currently authenticated","SteamAuth",window[e].Debug.LOG_LEVEL_INFO)}),o=!0;var n=window.localStorage.getItem("OAAGGSUP");if(n){var u=n.split(":");u.splice(0,1)<Date.now()&&i(u.join(":"))}window.fetch("https://chrisinajar.com:4969/users/"+window[e].SteamAuth.currentUserSteam32,{cache:"default"}).then(function(e){e.text().then(function(e){window.localStorage.setItem("OAAGGSUP",Date.now()+6048e5+":"+e),i(e)}).catch(a)}).catch(a)}()};return{__init:function(){window[e].awaitModulePrepared("URL",function(){document.getElementById("steamAuth").setAttribute("href","https://steamcommunity.com/openid/login?openid.claimed_id="+encodeURIComponent("http://specs.openid.net/auth/2.0/identifier_select")+"&openid.identity="+encodeURIComponent("http://specs.openid.net/auth/2.0/identifier_select")+"&openid.mode="+encodeURIComponent("checkid_setup")+"&openid.ns="+encodeURIComponent("http://specs.openid.net/auth/2.0")+"&openid.realm="+encodeURIComponent(window.location.origin)+"&openid.return_to="+encodeURIComponent(window.location.origin+window.location.pathname));try{var n=window.localStorage.getItem("OAAGGS64");if(!n||!n.indexOf(":")>-1){var o=window[e].URL.searchParamValue("openid.identity");o&&(o=o.replace(/^https:\/\/steamcommunity.com\/openid\/id\//,""))?(t=o,u()):d()}else{var i=n.split(":");i[0]<Date.now()?(t=i[1],d()):u()}}catch(e){}})}.bind(this),registerOnAuthenticatedCallback:function(t){o?window[e].handleRunCallback(t):n.push(t)}.bind(this),get currentUserSteam32(){return(Number(t)-76561197960265730).toString()},get currentUserSteam64(){return t}}}(),window[e].modulePrepared("SteamAuth"),window[e].moduleReady(window[e].SteamAuth.__init)})}();
//# sourceMappingURL=SteamAuth.js.map
