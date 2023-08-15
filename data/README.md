# Database

The directory contains the data used to build the app's functionality.

## Places

The data [file](places.geojson) contains the bars and restaurants within the Berlin area. The data were fetched from
[OSM](https://www.openstreetmap.org) using [overpass interface](https://overpass-turbo.eu/s/1yXX).

### Metadata

- Fetch timestamp: 2023-08-15 22:18:00 UTC
- Total number of places:

| Amenity    | Amount |
|:-----------|:-------|
| Bar        | 892    |
| Restaurant | 4894   |

Run to validate ([jq](https://jqlang.github.io/jq/) is required):

```commandline
 jq '.features | map(. | select(.properties.amenity=="restaurant")) | length' < places.geojson
```

_Note_ that the data contain both types of geofeatures, Point and Polygon.

Run to filter Points only:

```commandline
jq '.features | map( . | select( .geometry.type=="Point") )' < places.geojson
```
