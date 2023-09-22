# Deft-Detective Server Application

The logic includes:
- [x] Places filter by geolocation

## Roadmap

- [ ] "Boiler plate"/pkg setup
- [ ] `filter.py` with filter by geolocation
  - [ ] data models, e.g. `Point`
  - [ ] `Places` class
    - [ ] search_by_polygon
- [ ] `httpserver.py`:
  - [ ] http interface
  - [ ] SerDe geojson <> Polygon
- [ ] `__main__.py` the entrypoint to start the server:
  - [ ] `start_webserver`
