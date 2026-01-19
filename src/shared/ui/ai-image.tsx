"use client";
import { useState } from "react";

export function AIImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onGenerate = async () => {
    // логика вызова AI API
    // setImageUrl(result)
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Enter a prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={onGenerate}
        className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Generate
      </button>
      {imageUrl && (
        <img src={imageUrl} alt="AI Result" className="mt-2 rounded-md" />
      )}
    </div>
  );
}
