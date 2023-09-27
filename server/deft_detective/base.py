"""This module defines the base classes and data models"""
from dataclasses import dataclass
from abc import ABC, abstractmethod
from typing import List


@dataclass
class Point:
    """``Point`` defines a geo-point."""
    lon: float
    lat: float


@dataclass
class Place:
    """``Place`` defines a real place where an item could be found"""
    location: Point


@dataclass
class Polygon:
    """``Polygon`` defines the geo-polygon."""
    points: List[Point]


class RepositoryPlaces(ABC):
    """``DBPlaces`` defines the storage with Places."""

    @abstractmethod
    def read(self) -> List[Place]:
        """Reads the Places.

        Returns:
            List of places.
        """


class SearchPlaces:
    """``SearchPlaces`` defines the search engine to identify places to contact."""

    def __init__(self, db_client: RepositoryPlaces):
        self.__places = db_client.read()

    def count_places(self) -> int:
        """Return the search size."""
        return len(self.__places)

    def find_by_geolocation(self, polygon: Polygon) -> List[Place]:
        """Finds all places within a given polygon.

        Args:
            polygon: Boundaries to search places.

        Returns:
            List of places.
        """
        o: List[Place] = []

        for place in self.__places:
            if is_point_inside_polygon(place.location, polygon.points):
                o.append(place)

        return o


def is_point_inside_polygon(point: Point, polygon: List[Point]) -> bool:
    x, y = point.lon, point.lat
    odd_nodes = False
    j = len(polygon) - 1
    for i, point in enumerate(polygon):
        xi, yi = point.lon, point.lat

        # NOTE: if the point is an edge of the polygon, it's "inside"
        if xi == x and yi == y:
            return True

        xj, yj = polygon[j].lon, polygon[j].lat
        if yi < y and yj >= y or yj < y and yi >= y:
            if xi + (y - yi) / (yj - yi) * (xj - xi) < x:
                odd_nodes = not odd_nodes
        j = i

    return odd_nodes
