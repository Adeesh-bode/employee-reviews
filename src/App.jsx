import { useState } from 'react';
import Card from './review.jsx';
import './index.css';

function App() {

  return (
    <main className="flex flex-col justify-around items-center h-screen p-10 bg-slate-200" >
      <h1 className='font-semibold text-3xl border-b-3 border-purple-400 pb-2'>Employee Reviews</h1>
      <Card />
    </main>
  )
}

export default App
