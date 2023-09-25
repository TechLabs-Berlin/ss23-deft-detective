
function CoordinatesDisplay({ circleCenter, circleRadius }) {
  return (
    <div>
      <h2>Circle Coordinates:</h2>
      <p>Center Latitude: {circleCenter.lat}</p>
      <p>Center Longitude: {circleCenter.lng}</p>
      <p>Circle Radius (meters): {circleRadius}</p>
    </div>
  );
}

export default CoordinatesDisplay;