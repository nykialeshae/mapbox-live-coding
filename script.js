mapboxgl.accessToken = 'pk.eyJ1IjoibnlraWEtbGVzaGFlIiwiYSI6ImNrOXNtNXJvOTE2bngzdHF4b213amJmMmMifQ.VsArIOzbjUnYi5ZrUX8SSg';
var map = new mapboxgl.Map({
    container: 'map',
    center: [-90.48202514648438, 30.068499724652725],
    style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
    zoom: 12
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')

map.on('load', function() {
    map.addSource('points', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    {
    // feature for Cambridge Corner Food & Snoball's
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [-90.4867927, 30.0706055]
    },
    'properties': {
    'title': "Cambridge Corner Food & Snoball's",
    'icon': 'ice-cream'
    }
    },
    {
    // feature for Southpole Snowballs
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [-90.4977131, 30.0802291]
    },
    'properties': {
    'title': "Southpole Snowballs",
    'icon': 'ice-cream'
    }
    },
    {
    // feature for Guidry's Goody's
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [-90.551961, 30.0824003]
    },
    'properties': {
    'title': "Guidry's Goody's",
    'icon': 'ice-cream'
    }
    }
    ]
    }
    });
    map.addLayer({
    'id': 'points',
    'type': 'symbol',
    'source': 'points',
    'layout': {
    // get the icon name from the source's "icon" property
    // concatenate the name to get an icon from the style's sprite sheet
    'icon-image': ['concat', ['get', 'icon'], '-15'],
    // get the title name from the source's "title" property
    'text-field': ['get', 'title'],
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top'
    }
    });
    });