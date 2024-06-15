const mockQueries = require("../assets/queries");

exports.searchQueries = async (req, res) => {
  try {
    const query = req.query.q.toLowerCase();

    // Find exact match
    const exactMatchQuery = mockQueries.find(
      (queryItem) => queryItem.name.toLowerCase() === query
    );

    if (exactMatchQuery) {
      // Split the description into lines
      const descriptionLines = exactMatchQuery.description.split("\n");

      // Return the description as an array of lines
      res.status(200).json({ description: descriptionLines });
    } else {
      // If no exact match is found, return an error
      res.status(404).json({ message: "Query not found" });
    }
  } catch (error) {
    console.error("Error searching queries: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
