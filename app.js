/**
 * Main Application
 * @author Fabio Costa
 */
var app = (function () {
    "use strict";

    var app = angular.module("app", []);

    app.constant("cast", cast);

    angular.module('exceptionOverride', []).factory('$exceptionHandler', function () {

        return function (exception, cause) {
            exception.message += ' (caused by "' + cause + '")';
            throw exception;
        };

    });

    app.run(["mediaManagerService", run]);

    function run(mediaManagerService) {

        mediaManagerService.init();

        var DEFAULT_URL = "http://south3.cdn.vf.rogers.com/v1/AUTH_OSECLIPSE3/ABC_Buffalo_HD_GTA_MSS/ABC_Buffalo_HD_GTA_MSS.isml/Manifest";

        var url = prompt("Enter Manifest URL:", DEFAULT_URL);

        var licenseUrl = prompt("Enter License URL: (Please empty for no requirement)");

        var licenseCustomData = prompt("Enter License Custom Data: (Please empty for no requirement)");

        //http://24.114.117.72/wp/south3.cdn.vf.rogers.com/v1/AUTH_OSECLIPSE3/ABC_Buffalo_HD_GTA_MSS/ABC_Buffalo_HD_GTA_MSS.isml/Manifest
        //http://playready.directtaps.net/smoothstreaming/SSWSS720H264/SuperSpeedway_720.ism/Manifest

        if (url != null) {

            mediaManagerService.mediaManager.onLoad({

                data: {
                    media: {
                        contentId: url
                    },
                    customData: {
                        licenseUrl: licenseUrl,
                        licenseCustomData: licenseCustomData
                    }
                }

            });

        } else {
            
            var msg = "Manifest URL was not entered by user. Please refresh page and try: " + DEFAULT_URL;

            console.error(msg);

            document.writeln(msg);

        }
        
    }

    return app;

})();