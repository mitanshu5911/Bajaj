import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// IMPORTANT: use FULL model name
const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview"
});

const askAI = async (question) => {
  try {
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: question }]
        }
      ]
    });

    const text = result?.response?.text();

    if (!text) {
      throw new Error("No AI response");
    }

    // BFHL requires SINGLE WORD
    return text.trim().split(/\s+/)[0];

  } catch (error) {
    console.error("Gemini SDK error:", error.message);

    throw {
      status: 502,
      message: "AI service unavailable"
    };
  }
};

export default { askAI };