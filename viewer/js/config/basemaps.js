define([
    'esri/dijit/Basemap',
    'esri/dijit/BasemapLayer'
], function (Basemap, BasemapLayer) {
    return {
        map: true, // needs a refrence to the map
        mode: 'custom', //must be either 'agol' or 'custom'
        title: 'Basemaps', // tilte for widget
        mapStartBasemap: 'barents', // must match one of the basemap keys below
        //basemaps to show in menu. define in basemaps object below and reference by name here
        // TODO Is this array necessary when the same keys are explicitly included/excluded below?
        basemapsToShow: ['streets','satellite', 'barents'],

        // define all valid custom basemaps here. Object of Basemap objects. For custom basemaps, the key name and basemap id must match.
        basemaps: { // agol basemaps
            streets: {
                title: 'Streets'
            },
            satellite: {
                title: 'Satellite'
            },
            barents: {
                title: 'Barents',
                basemap: new Basemap({
                    id: 'barents',
                    layers: [new BasemapLayer({
                        url: 'http://willem3.npolar.no/arcgis/rest/services/Barentsportal/BaseMap/MapServer',
                        showAttribution: false
                    })]
                })
            }

            /*


            // examples of custom basemaps

            var basemap_barents = new Basemap({
                id: 'basemap_barents',
                visible: false,
                layers: [new BasemapLayer({
                    url: 'http://geodata.npolar.no/arcgis/rest/services/Barentsportal/BaseMap/MapServer',
                    showAttribution: false
                }), new BasemapLayer({
                    url: 'http://geodata.npolar.no/arcgis/rest/services/Barentsportal/BaseMapElements/MapServer',
                    showAttribution: false
                })]
            });

            streets: {
                title: 'Streets',
                basemap: new Basemap({
                    id: 'streets',
                    layers: [new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
                    })]
                })
            },
            satellite: {
                title: 'Satellite',
                basemap: new Basemap({
                    id: 'satellite',
                    layers: [new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
                    })]
                })
            },
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
            },
            lightGray: {
                title: 'Light Gray Canvas',
                basemap: new Basemap({
                    id: 'lightGray',
                    layers: [new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer'
                    }), new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer',
                        isReference: true
                    })]
                })
            }*/
        }
    };
});
