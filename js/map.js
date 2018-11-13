document.addEventListener('DOMContentLoaded', () =>
{
    console.log("Chargé");

    let markers = [];
    let filters = {farm: true, group_elephant: true};
    
    let map_filter = function(name_val, value) {
        filters[name_val] = value;
    }

    let filter_markers = function(name_val) {        
        for (i = 0; i < markers.length; i++)
        {
            marker = markers[i];

            if(marker.category == name_val)
            {
                marker.setVisible(filters[name_val]);
            }
        }
    }

    let initMap = function()
    {
        let features = [
            {
                position: new google.maps.LatLng(-20.5358333, 24.519444444444446),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.8836111, 32.40888888888889),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.7416667, 24.71666666666667),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.6333333, 24.711111111111112),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.5344444, 24.6025),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.5419444, 24.508055555555554),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.5325, 24.613055555555555),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.9813889, 24.982222222222223),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.5777778, 24.62527777777778),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.4536111, 24.502499999999998),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.5408333, 24.521944444444443),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.6261111, 24.677777777777777),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.7663889, 25.025833333333335),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.8452778, 25.959444444444443),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.4763889, 24.453333333333333),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.4844444, 24.44861111111111),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.5944444, 24.371944444444445),
                type: 'farm'
            }, {
                position: new google.maps.LatLng(-20.375526803426936, 24.23364244401455),
                type: 'group_elephant'
            }, {
                position: new google.maps.LatLng(-20.375526803426936, 24.62336424440145),
                type: 'water'
            }
        ];
        
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: new google.maps.LatLng(-20.5358333, 24.519444444444446),
            mapTypeId: 'roadmap'
        });

        let icons = {
            farm: {
              icon: './img/farm.png'
            },
            group_elephant: {
                icon: './img/elephant.png',
            },
            water: {
                icon: './img/water.png',
            }
        };

        // Create markers.
        features.forEach(function(feature) {
            var marker = new google.maps.Marker({
                position: feature.position,
                icon: {
                    url: icons[feature.type].icon,
                    scaledSize: new google.maps.Size(16, 16)
                },
                map: map,
                category: feature.type,
                properties: feature.type
            });

            markers.push(marker);
        });

        //var markerCluster = new MarkerClusterer(map, markers);
    }

    let checkboxes = document.querySelectorAll("[type=checkbox]");

    checkboxes.forEach(element => {
        let checkbox = document.getElementById(element.id);
        checkbox.addEventListener('change', () => {
            map_filter(checkbox.name, checkbox.checked);
            filter_markers(checkbox.name, checkbox.checked);
        });
    });

    initMap();
});