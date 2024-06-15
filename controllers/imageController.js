const mockImages = require("../assets/images");

exports.searchImages = async (req, res) => {
  try {
    const query = req.query.q.toLowerCase();

    // Find any word match
    const matchFound = mockImages.some((image) =>
      image.name
        .toLowerCase()
        .split(" ")
        .some((word) => query.includes(word))
    );

    if (matchFound) {
      // Return the image object if match is found
      res.status(200).json(
        mockImages.filter((image) =>
          image.name
            .toLowerCase()
            .split(" ")
            .some((word) => query.includes(word))
        )[0]
      );
    } else {
      // If no match is found, return an error
      res.status(404).json({ message: "Image not found" });
    }
  } catch (error) {
    console.error("Error searching images: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
