!(function() {
    var rootObjectName = window.__GRN;

    window[rootObjectName].ready(function() {
        window[rootObjectName].SteamAuth = (function () {
            var onAuthenticatedCallbacks = [];
            var hasBeenAuthenticated     = false;
            var userManagerInstance      = null;

            var handleUpdateNavToAuthenticated = function(user) {
                if (!user) {
                    handleUpdateNavToRequiresAuthentication();
                }

                window[rootObjectName].awaitModulePrepared('Debug', function() {
                    window[rootObjectName].Debug.writeConsoleMessage('User is currently authenticated', 'SteamAuth', window[rootObjectName].Debug.LOG_LEVEL_INFO);
                });

                hasBeenAuthenticated = true;

                window[rootObjectName].awaitModulePrepared('Debug', function() {
                    window[rootObjectName].Debug.writeConsoleMessage('Running onAuthenticated callbacks', 'SteamAuth', window[rootObjectName].Debug.LOG_LEVEL_INFO);
                });

                var i = 0;
                var j = onAuthenticatedCallbacks.length;

                for (i; i < j; i++) {
                    window[rootObjectName].handleRunCallback(onAuthenticatedCallbacks[i]);
                }

                // Remove the handlers for authenticating
                var authButton = document.querySelector('body>nav .steamAuth');

                authButton.removeEventListener('click', userManagerInstance.signinPopup);
                authButton.removeEventListener('tap',   userManagerInstance.signinPopup);
                authButton.removeEventListener('touch', userManagerInstance.signinPopup);
            };

            var handleUpdateNavToRequiresAuthentication = function() {
                window[rootObjectName].awaitModulePrepared('Debug', function() {
                    window[rootObjectName].Debug.writeConsoleMessage('User is not currently authenticated', 'SteamAuth', window[rootObjectName].Debug.LOG_LEVEL_INFO);
                });

                var authButton = document.querySelector('body>nav .steamAuth');

                authButton.classList.remove('loading');

                window[rootObjectName].awaitModulePrepared('Debug', function() {
                    window[rootObjectName].Debug.writeConsoleMessage('Bound interactions for nav button for authentication', 'SteamAuth', window[rootObjectName].Debug.LOG_LEVEL_INFO);
                });

                authButton.addEventListener('click', userManagerInstance.signinPopup);
                authButton.addEventListener('tap',   userManagerInstance.signinPopup);
                authButton.addEventListener('touch', userManagerInstance.signinPopup);
            };

            return {
                __init: function() {
                    window[rootObjectName].awaitModulePrepared('OpenID', function() {
                        window[rootObjectName].awaitModulePrepared('Debug', function() {
                            window[rootObjectName].Debug.writeConsoleMessage('Initializing Steam authentication', 'SteamAuth', window[rootObjectName].Debug.LOG_LEVEL_INFO);
                        });

                        Oidc.Log.logger = {
                            log: function(message) {
                                window[rootObjectName].awaitModulePrepared('Debug', function(message) {
                                    window[rootObjectName].Debug.writeConsoleMessage(message, 'SteamAuth', window[rootObjectName].Debug.LOG_LEVEL_LOG);
                                }.bind(this, message.toString()));
                            },

                            warn: function(message) {
                                window[rootObjectName].awaitModulePrepared('Debug', function(message) {
                                    window[rootObjectName].Debug.writeConsoleMessage(message, 'SteamAuth', window[rootObjectName].Debug.LOG_LEVEL_WARN);
                                }.bind(this, message.toString()));
                            },

                            info: function(message) {
                                window[rootObjectName].awaitModulePrepared('Debug', function(message) {
                                    window[rootObjectName].Debug.writeConsoleMessage(message, 'SteamAuth', window[rootObjectName].Debug.LOG_LEVEL_INFO);
                                }.bind(this, message.toString()));
                            },

                            debug: function(message) {
                                window[rootObjectName].awaitModulePrepared('Debug', function(message) {
                                    window[rootObjectName].Debug.writeConsoleMessage(message, 'SteamAuth', window[rootObjectName].Debug.LOG_LEVEL_DEBUG);
                                }.bind(this, message.toString()));
                            },

                            error: function(message) {
                                window[rootObjectName].awaitModulePrepared('Debug', function(message) {
                                    window[rootObjectName].Debug.writeConsoleMessage(message, 'SteamAuth', window[rootObjectName].Debug.LOG_LEVEL_ERROR);
                                }.bind(this, message.toString()));
                            }
                        };

                        userManagerInstance = new Oidc.UserManager({
                            authority: 'https://steamcommunity.com/openid/',
                            client_id: '0FA551D64997BEF92A8FC8CBB1ECBA2B',
                            redirect_uri: window.location.origin + window.location.pathname,
                            scope: 'openid',
                            userStore: new Oidc.WebStorageStateStore({
                                store: window.localStorage
                            }),
                            checkSessionInterval: 30000,
                            popupWindowTarget: window.open,
                            automaticSilentRenew: true,
                        });

                        userManagerInstance.getUser()
                            .then(handleUpdateNavToAuthenticated)
                            .catch(handleUpdateNavToRequiresAuthentication);
                    });
                }.bind(this),

                registerOnAuthenticatedCallback: function(callback) {
                    if (hasBeenAuthenticated) {
                        window[rootObjectName].handleRunCallback(callback);
                    } else {
                        onAuthenticatedCallbacks.push(callback);
                    }
                }.bind(this),

                get currentUserSteam32() {
                    return 0;
                },

                get currentUserSteam64() {
                    return 0;
                },
            };
        }());

        window[rootObjectName].modulePrepared('SteamAuth');
        window[rootObjectName].moduleReady(window[rootObjectName].SteamAuth.__init);
    });
}());
