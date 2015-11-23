/**
 * Manages the media host
 * @author Fabio Costa
 */
(function () {
    "use strict";

    var serviceId = "mediaHostFactory";

    app.factory(serviceId, ["cast", "videoElementService", mediaHostFactory]);

    function mediaHostFactory(cast, videoElementService) {

        return {
            MediaHost: MediaHost
        };

        function MediaHost(url, licenseUrl, customData) {

            licenseUrl = null || licenseUrl;
            customData = null || customData;

            console.log("MediaHost url: " + url + " & licenseUrl: " + licenseUrl);

            var mediaHost = new cast.player.api.Host({
                mediaElement: videoElementService.videoElement,
                url: url,
                licenseUrl: licenseUrl,
                licenseCustomData: customData
            });

            mediaHost.onError = function (errorCode) {

                console.error("mediaHost.onError - errorCode: " + errorCode);
            };

            return mediaHost;
        }

    }

})();

