from dataclasses import dataclass
from typing import List

import pytest as pytest
from deft_detective.base import SearchPlaces, RepositoryPlaces, Place, Polygon, Point


@dataclass
class MockRepositoryPlaces(RepositoryPlaces):
    places: List[Place]

    def read(self) -> List[Place]:
        return self.places


@pytest.mark.parametrize(
    "repository,polygon,want",
    [
        (MockRepositoryPlaces([]), Polygon([]), []),
        (
                MockRepositoryPlaces([]),
                Polygon(points=[
                    Point(13.402, 52.533),
                    Point(13.4025, 52.533),
                    Point(13.4025, 52.5335),
                    Point(13.402, 52.5335)
                ]),
                []),
        (
                MockRepositoryPlaces([
                    Place(location=Point(0, 0)),
                    Place(location=Point(1, 1))
                ]),
                Polygon(points=[
                    Point(1, 1),
                    Point(1, 2),
                    Point(2, 2),
                    Point(2, 1)
                ]),
                [Place(location=Point(1, 1))],
        ),
    ]
)
class TestSearchPlaces:
    def test_init(self, repository, polygon, want):
        search_places = SearchPlaces(repository)
        assert search_places.count_places() == len(repository.places)

    def test_find_by_geolocation(self, repository, polygon, want):
        search_places = SearchPlaces(repository)
        got = search_places.find_by_geolocation(polygon)
        assert got == want
