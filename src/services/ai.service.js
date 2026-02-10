import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const GEMINI_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

const askAI = async (question) => {
  try {
    const response = await axios.post(
      GEMINI_URL,
      {
        contents: [
          {
            parts: [{ text: question }]
          }
        ]
      },
      {
        params: {
          key: process.env.GEMINI_API_KEY
        }
      }
    );

    const answer =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!answer) {
      throw new Error('No AI response');
    }

    // Assessment requires SINGLE WORD
    return answer.trim().split(/\s+/)[0];

  } catch (error) {
    console.error(
      'Gemini error:',
      error.response?.data || error.message
    );

    console.error(error.response?.data);

    // throw {
    //   status: 502,
    //   message: 'AI service unavailable'
    // };
  }
};

export default { askAI };