const express = require("express");
const router = express.Router();
const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const dbName = "deft-detective";

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const isPointInsidePolygon = (point, polygon) => {
  const x = point[1];
  const y = point[0];
  let isInside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][1];
    const yi = polygon[i][0];
    const xj = polygon[j][1];
    const yj = polygon[j][0];

    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

    if (intersect) {
      isInside = !isInside;
    }
  }
  console.log("places", isInside)
  return isInside;
};

router.post('/coordinates', async (req, res) => {
  try {
    const { data } = req.body;
    console.log('Received userPolygon:', data)

    if (!data || !Array.isArray(data)) {
      res.status(400).json({ error: 'Invalid user-defined polygon' });
      return;
    }

    if (!data) {
      res.status(400).json({ error: 'Data is missing' });
      return;
    }

    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('places');

    const mongoData = await collection.find({}).toArray();

    const placesInsidePolygon = mongoData.filter((record) => {
      const point = [record.Latitude, record.Longitude];
      return isPointInsidePolygon(point, data);
    })
      .map((record) => {
        return {
          email: record.email, 
          biz_name: record.biz_name, 
        };
      });

    client.close();

    res.status(200).json({places: placesInsidePolygon});
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

  
});


module.exports = router;
