const mockMedicines = require("../assets/medicines");

exports.searchMedicines = async (req, res) => {
  try {
    const query = req.query.q.toLowerCase();

    // Filter medicines based on exact match
    const matches = mockMedicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
      // Return the Medicine object if matches are found
      res.status(200).json(matches);
    } else {
      // If no match is found, return an error
      res.status(404).json({ message: "Medicine not found" });
    }
  } catch (error) {
    console.error("Error searching Medicines: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
