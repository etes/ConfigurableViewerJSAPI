define([
    'esri/dijit/Basemap',
    'esri/dijit/BasemapLayer'
], function (Basemap, BasemapLayer) {
    return {
        map: true, // needs a refrence to the map
        mode: 'custom', //must be either 'agol' or 'custom'
        title: 'Basemaps', // title for widget
        mapStartBasemap: 'topography', // must match one of the basemap keys below
        //basemaps to show in menu. define in basemaps object below and reference by name here
        // TODO Is this array necessary when the same keys are explicitly included/excluded below?
        basemapsToShow: ['topography','satellite'],

        // define all valid custom basemaps here. Object of Basemap objects. For custom basemaps, the key name and basemap id must match.
        basemaps: { // agol basemaps

            topography: new Basemap({
                id: 'topography',
                title: 'Topography',
                layers: [new BasemapLayer({
                    url: 'http://geodata.npolar.no/arcgis/rest/services/Barentsportal/BaseMap/MapServer',
                    initialExtent: {
                        xmin: -1232141.1188576762,
                        ymin: 7769646.545945273,
                        xmax: 2213830.504609592,
                        ymax: 9173026.90027225,
                        spatialReference:{wkid:32637}},
                    showAttribution: false
                }), new BasemapLayer({
                    url: 'http://geodata.npolar.no/arcgis/rest/services/Barentsportal/BaseMapElements/MapServer',
                    showAttribution: false
                })]
            }),
            satellite: new Basemap({
                id: 'satellite',
                title: 'Satellite',
                visible: false,
                layers: [new BasemapLayer({
                    url: 'http://geodata.npolar.no/arcgis/rest/services/Barentsportal/BaseMap/MapServer',
                    initialExtent: {
                      xmin: -1232141.1188576762,
                      ymin: 7769646.545945273,
                      xmax: 2213830.504609592,
                      ymax: 9173026.90027225,
                      spatialReference:{wkid:32637}},
                    showAttribution: false
                })]
            })/*,
            barents: {
                title: 'Barents',
                id : 'barents',
                basemap: new Basemap({
                    layers: [new BasemapLayer({
                        url: 'http://geodata.npolar.no/arcgis/rest/services/Barentsportal/BaseMap/MapServer',
                        initialExtent: {
                            xmin: -1232141.1188576762,
                            ymin: 7769646.545945273,
                            xmax: 2213830.504609592,
                            ymax: 9173026.90027225,
                            spatialReference:{wkid:32637}},
                        showAttribution: false
                    })]
                })
            }

            hybrid: {
                title: 'Hybrid',
                basemap: new Basemap({
                    id: 'hybrid',
                    layers: [new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
                    }), new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer',
                        isReference: true,
                        displayLevels: [0, 1, 2, 3, 4, 5, 6, 7]
                    }), new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer',
                        isReference: true,
                        displayLevels: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
                    })]
                })
            }*/
        }
    };
});
