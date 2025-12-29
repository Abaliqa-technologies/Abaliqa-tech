import { GoogleGenAI, Type } from "@google/genai";
import { AdvisorResponse } from "../types";

export const getSolutionAdvice = async (userProblem: string): Promise<AdvisorResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are the Principal AI Solution Architect at Abaliqa Technologies, a high-end IT consultancy. 
    A prospective client has shared their business challenge or goal.
    Analyze their request and provide a professional, executive-level technical roadmap.
    
    Abaliqa Technologies offers:
    - Cybersecurity & Zero Trust Systems
    - Cloud Infrastructure (AWS, Azure, GCP)
    - Custom Enterprise Software Development
    - AI & Machine Learning Transformation
    - Managed IT & Helpdesk 24/7
    - IoT & Edge Computing
    - Network Architecture & Modernization
    - Digital Strategy & IT Governance
    
    Structure your response carefully as JSON.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Client Request: ${userProblem}`,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: {
              type: Type.STRING,
              description: "A high-level executive analysis of the client's current situation."
            },
            roadmap: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Step-by-step technical implementation phases."
            },
            recommendedServices: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Specific Abaliqa services that solve this problem."
            }
          },
          required: ["analysis", "roadmap", "recommendedServices"]
        }
      }
    });

    const text = response.text || '{}';
    try {
      return JSON.parse(text) as AdvisorResponse;
    } catch (parseError) {
      console.error("JSON Parse Error:", text);
      return {
        analysis: "An error occurred while synthesizing your strategy. Please try rephrasing your request.",
        roadmap: ["Error parsing response"],
        recommendedServices: ["General IT Advisory"]
      };
    }
  } catch (error) {
    console.error("Gemini Advice Error:", error);
    throw new Error("Failed to generate solution roadmap. Our architects are currently at capacity.");
  }
};