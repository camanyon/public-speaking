import React, { useState } from 'react';

function App() {
  const [topic, setTopic] = useState(null);
  const [category, setCategory] = useState('');
  const fetchTopic = async () => {
    const url = category 
    ? `https://public-speaking-api-production.up.railway.app/api/topics/random?category=${category}`
    : 'https://public-speaking-api-production.up.railway.app/api/topics/random';
  const response = await fetch(url);
  const data = await response.json();
  setTopic(data);
    };
  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Impromptu Topic Generator
        </h1>
        <select 
  value={category} 
  onChange={(e) => setCategory(e.target.value)}
  className="w-full p-4 mb-4 rounded-xl border-2 border-gray-300 text-gray-700 font-medium"
>
  <option value="">All Categories</option>
  <option value="funny">Funny</option>
  <option value="tech">Tech</option>
  <option value="interview">Interview</option>
  <option value="personal">Personal</option>
  <option value="business">Business</option>
  <option value="serious">Serious</option>
  <option value="entertainment">Entertainment</option>
</select>
        <button 
          onClick={fetchTopic}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition duration-200 shadow-lg hover:shadow-xl mb-8"
        >
          Get Random Topic
        </button>
        
        {topic && (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border-l-4 border-indigo-500">
            <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed">
              {topic.text}
            </h2>
            <span className="inline-block mt-4 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
              {topic.category}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
