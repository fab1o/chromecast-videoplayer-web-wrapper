/**
 * Manages the media casting
 * @author Fabio Costa
 */
(function () {
    "use strict";

    var serviceId = "mediaManagerService";

    app.service(serviceId, ["cast", "videoElementService", "mediaPlayerFactory", "mediaHostFactory",
        "mediaProtocolFactory", mediaManagerService]);

    function mediaManagerService(cast, videoElementService,
                                 mediaPlayerFactory, mediaHostFactory, mediaProtocolFactory) {

        this.mediaManager = null;
        this.mediaPlayer = null;

        var self = this;

        this.init = function () {

            videoElementService.init();

            if (this.mediaManager != null) {
                return false;
            }

            console.log(serviceId + ".init");

            this.mediaManager = new cast.receiver.MediaManager(videoElementService.videoElement);

            this.mediaManager["onErrorOrig"] = this.mediaManager.onError;
            this.mediaManager["onEndedOrig"] = this.mediaManager.onEnded;
            this.mediaManager["onLoadMetadataErrorOrig"] = this.mediaManager.onLoadMetadataError;
            this.mediaManager["onMetadataLoadedOrig"] = this.mediaManager.onMetadataLoaded;
            this.mediaManager["onPauseOrig"] = this.mediaManager.onPause;
            this.mediaManager["onPlayOrig"] = this.mediaManager.onPlay;
            this.mediaManager["onSeekOrig"] = this.mediaManager.onSeek;
            this.mediaManager["onStopOrig"] = this.mediaManager.onStop;

            this.mediaManager.onError = function (e) {
                this["onErrorOrig"](e);

                console.log("mediaManager.onError");

                if (self.mediaPlayer != null) {
                    self.mediaPlayer.unload();
                }
            };

            this.mediaManager.onLoadMetadataError = function (e) {
                this["onLoadMetadataErrorOrig"](e);

                console.log("mediaManager.onLoadMetadataError");
            };

            this.load();

            return true;
        };

        this.load = function () {

            this.mediaManager.onStop = function (e) {
                this["onStopOrig"](e);

                console.log("mediaManager.onStop");

            };

            this.mediaManager.onEnded = function (e) {
                this["onEndedOrig"](e);

                console.log("mediaManager.onEnded");

            };

            this.mediaManager.onLoad = function (e) {

                console.log("mediaManager.onLoad");

                var resumePoint = 0;

                if (e.data.customData)
                    resumePoint = e.data.customData.resumePoint || 0;

                var mediaHost = new mediaHostFactory.MediaHost(e.data.media.contentId, e.data.customData.licenseUrl, e.data.customData.licenseCustomData, resumePoint);

                var mediaProtocol = new mediaProtocolFactory.MediaProtocol(mediaHost);

                self.mediaPlayer = new mediaPlayerFactory.MediaPlayer(mediaHost, mediaProtocol, resumePoint);
            }

        };

        mediaManagerService.prototype = {

            get mediaPlayer () {

                return this._mediaPlayer;
            },

            set mediaPlayer(value) {

                if (this._mediaPlayer != null) // Ensure unload before loading again
                    this._mediaPlayer.unload();


                this._mediaPlayer = value;
            }

        };

        return this;
    }

})();
