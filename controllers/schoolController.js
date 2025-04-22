const db = require("../config/db");
const calculateDistance = require("../utils/haversine");

exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  const sql =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      console.error("Error inserting school:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res
      .status(201)
      .json({ message: "School added successfully", id: result.insertId });
  });
};

exports.listSchools = (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLon = parseFloat(req.query.longitude);

  if (isNaN(userLat) || isNaN(userLon)) {
    return res.status(400).json({ error: "Invalid latitude or longitude" });
  }

  db.query("SELECT * FROM schools", (err, results) => {
    if (err) {
      console.error("Error fetching schools:", err);
      return res.status(500).json({ error: "Database error" });
    }

    const sorted = results
      .map((school) => ({
        ...school,
        distance: calculateDistance(
          userLat,
          userLon,
          school.latitude,
          school.longitude
        ),
      }))
      .sort((a, b) => a.distance - b.distance);

    res.json(sorted);
  });
};
