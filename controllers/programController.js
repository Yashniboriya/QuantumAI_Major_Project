const mockPrograms = require("../assets/programs");

exports.searchPrograms = async (req, res) => {
  try {
    const query = req.query.q.toLowerCase();

    // Find exact match
    const exactMatchProgram = mockPrograms.find(
      (program) => program.name.toLowerCase() === query
    );

    if (exactMatchProgram) {
      // Return the description as it is stored in the database
      const descriptionLines = exactMatchProgram.description.split("\n");
      res.status(200).json({ description: descriptionLines });
    } else {
      // If no exact match is found, return an error
      res.status(404).json({ message: "Program not found" });
    }
  } catch (error) {
    console.error("Error searching programs: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
