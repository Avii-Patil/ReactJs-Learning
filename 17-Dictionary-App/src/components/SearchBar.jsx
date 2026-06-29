import { useState } from 'react'

function SearchBar({ onSearch, theme }) {
  const [word, setWord] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (word.trim()) {
      onSearch(word.trim().toLowerCase())
      setWord('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search a word..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className={`flex-1 px-5 py-3 rounded-xl text-base outline-none border-2 transition-colors ${
          theme === 'dark'
            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-violet-500'
            : 'bg-white border-slate-200 text-gray-900 placeholder-gray-400 focus:border-violet-400'
        }`}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white cursor-pointer font-semibold rounded-xl transition-colors"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar