import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Mypage = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Initialize Google Gemini API (replace with your API key)
  const genAI = new GoogleGenerativeAI("your gemni Api key"); // Secure this in production
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Handle text-based search with Gemini API
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const result = await model.generateContent(query);
      const text = await result.response.text();
      setResponse(text);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Failed to fetch response from Gemini API.");
    } finally {
      setLoading(false);
    }
  };

  // Handle image upload for educational content summarization
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle image analysis with Gemini API for educational content
  const handleImageAnalyze = async () => {
    if (!image) {
      setResponse("Please upload an image first.");
      return;
    }

    setLoading(true);
    try {
      // Convert image to base64 for Gemini API
      const base64Image = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(",")[1]);
        reader.readAsDataURL(image);
      });

      // Prompt tailored for educational content summarization
      const prompt = `
        You are an educational assistant designed to summarize key learning points from images. Analyze this image, which may contain educational content such as notes, diagrams, textbook pages, or slides. Extract and summarize the most important educational points, such as:
        - Key concepts, definitions, or topics.
        - Formulas, equations, or mathematical expressions.
        - Important facts, dates, or events.
        - Labels or annotations in diagrams.
        - Any visible text that conveys educational information (transcribe accurately).
        - Relationships or processes depicted (e.g., cycles, workflows).
        Provide a concise, bulleted list of summary points tailored for a student to understand the core educational content. Avoid non-educational details unless they provide context for learning.
      `;

      // Send image and prompt to Gemini API
      const result = await model.generateContent([
        prompt,
        {
          inlineData: {
            data: base64Image,
            mimeType: image.type,
          },
        },
      ]);

      const text = await result.response.text();
      setResponse(text);
      // Clear image and preview after analysis
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Failed to summarize the image content.");
    } finally {
      setLoading(false);
    }
  };

  // Handle image removal
  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  return (
    <div className="p-4">
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        How can I assist you?
      </h1>

      {/* Text Search Form */}
      <form onSubmit={handleSearch} className="h-14 flex flex-row w-full gap-2 items-center mb-3">
        <Input
          type="text"
          placeholder="Ask a question..."
          name="search-query"
          className="h-full flex-1 px-4 text-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" className="h-full sm:w-28" variant="blue" disabled={loading}>
          {loading ? "Processing..." : "Search"}
        </Button>
      </form>

      {/* Image Upload for Educational Summarization */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Summarize Educational Content</h2>
        <div className="mb-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="inline-block h-14 sm:w-28 bg-blue-600 text-white text-center leading-[3.5rem] rounded-md hover:bg-blue-700 cursor-pointer transition-colors"
          >
            Select Image
          </label>
        </div>
        {imagePreview && (
          <div className="mt-2 flex flex-col items-start gap-2">
            <img
              src={imagePreview}
              alt="Uploaded preview"
              className="max-w-[300px] h-auto border rounded"
            />
            <div className="flex gap-2">
              <Button
                onClick={handleImageAnalyze}
                className="h-14 sm:w-28"
                variant="blue"
                disabled={loading}
              >
                {loading ? "Analyzing..." : "Analyze Image"}
              </Button>
              <Button
                onClick={handleRemoveImage}
                className="h-14 sm:w-28"
                variant="destructive" // Adjust if no destructive variant
                disabled={loading}
              >
                Remove
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Response Display */}
      {response && (
        <div className="mt-4 p-4 border rounded">
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
};

export default Mypage;
