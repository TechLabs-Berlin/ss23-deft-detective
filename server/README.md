# Deft-Detective Server Application

The logic includes:

- [x] Places filter by geolocation

## Roadmap

- [x] "Boiler plate"/pkg setup
- [ ] "CI" scripts
- [ ] `filter.py` with filter by geolocation
    - [ ] data models, e.g. `Point`
    - [ ] `Places` class
        - [ ] search_by_polygon
- [ ] `httpserver.py`:
    - [ ] http interface
    - [ ] SerDe geojson <> Polygon
- [ ] `__main__.py` the entrypoint to start the server:
    - [ ] `start_webserver`

## How to contribute

1. Create a virtual env.

```commandline
python -m venv .venv && source .venv/bin/activate
```

2. Update pip

```commandline
pip install pip setuptools --upgrade
```