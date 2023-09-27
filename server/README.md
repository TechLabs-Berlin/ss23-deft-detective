# Deft-Detective Server Application

The logic includes:

- [x] Places filter by geolocation

## Roadmap

- [x] "Boiler plate"/pkg setup
- [x] "CI" scripts
- [x] `base.py` with filter by geolocation
    - [x] data models, e.g. `Point`
    - [x] `SearchPlaces` class
        - [x] find_by_geolocation
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

4. Run to perform unit tests:

```commandline
make tests
```
