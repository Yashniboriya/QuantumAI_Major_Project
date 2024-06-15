const mockChats = require("../assets/chats");

exports.searchChats = async (req, res) => {
  try {
    const query = req.query.q.toLowerCase();

    // Find exact match
    const exactMatchChat = mockChats.find(
      (chat) => chat.name.toLowerCase() === query
    );

    if (exactMatchChat) {
      // Return the chat object if exact match is found
      res.status(200).json(exactMatchChat);
    } else {
      // If no exact match is found, return an error
      res.status(404).json({ message: "Chat not found" });
    }
  } catch (error) {
    console.error("Error searching chats: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
