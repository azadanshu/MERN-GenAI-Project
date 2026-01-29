const generateResponse = require("../services/openai.service");

exports.chatWithAI = async (req, res) => {
  const { message } = req.body;

  try {
    const reply = await generateResponse(message);
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: "AI error" });
  }
};
