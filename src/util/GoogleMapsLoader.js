const googleMapsLatestVersion = "3.33";
const getGoogleMapsUrl = `https://maps.googleapis.com/maps/api/js?v=${googleMapsLatestVersion}&client=gme-immobilienscoutgmbh&callback=googleMapsLoaded`;

export default class GoogleMapsLoader {

  static loadScript(googleMapsLoaded) {
    if (typeof google !== "undefined") {
      googleMapsLoaded();
    } else if (typeof window !== "undefined" && typeof window.googleMapsLoaded !== "function") {
      const scriptNode = document.createElement("script");
      scriptNode.src = getGoogleMapsUrl;
      document.body.appendChild(scriptNode);
      window.googleMapsLoaded = function () {
        googleMapsLoaded();
        delete window.googleMapsLoaded;
      };
    }
  }
}