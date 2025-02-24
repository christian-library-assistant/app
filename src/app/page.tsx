'use client';
import { useState } from 'react';
import Image from "next/image";

export default function Home() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle message submission
    console.log('Message submitted:', message);
    setMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-4 flex flex-col justify-end">
        <div className="max-w-2xl mx-auto w-full">
          <h1 className="text-2xl font-bold mb-8 text-center">
            Christian Library Assistant
          </h1>
          
          {/* Chat messages will appear here */}
          <div className="mb-4 h-[400px] border rounded-lg p-4 overflow-y-auto">
            <p className="text-gray-500 text-center">
              Ask me anything about Christian literature...
            </p>
          </div>

          {/* Input form */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your question here..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
