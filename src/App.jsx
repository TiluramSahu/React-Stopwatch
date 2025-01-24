import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(0);

  useEffect(()=>{
    let interval;
    if(running){
      interval = setInterval(() => {
        setTime((prevTime)=> prevTime + 10);
      }, 10);
    } else if (!running){
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[running]);

  return (
<div className="flex flex-col items-center justify-center py-8 h-screen bg-gradient-to-br from-blue-500 to-purple-700">
      <div className="w-96 bg-white p-8 rounded-lg shadow-xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Stopwatch</h1>
        <div className="text-3xl font-mono text-gray-700 mb-6">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="flex justify-center space-x-4 max-w-md">
          {running ? (
            <button
              onClick={() => setRunning(false)}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
            >
              Stop
            </button>
          ) : (
            <button
              onClick={() => setRunning(true)}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
            >
              Start
            </button>
          )}
          <button
            onClick={() => setTime(0)}
            className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
