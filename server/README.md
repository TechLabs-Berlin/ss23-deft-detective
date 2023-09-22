# Deft-Detective Server Application

The logic includes:

- [x] Places filter by geolocation

## Roadmap

- [x] "Boiler plate"/pkg setup
- [x] "CI" scripts
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

### Prerequisites

- Python >= 3.10, <3.12
- [gnuMake](https://www.gnu.org/software/make/) (alternatively, cmake)

1. Create a virtual env.

```commandline
python -m venv .venv && source .venv/bin/activate
```

2. Update pip

```commandline
pip install pip setuptools --upgrade
```

3. Install the package with 'dev' requirements in the editable mode:

```commandline
pip install -e '.[dev]'
```
