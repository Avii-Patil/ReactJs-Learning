import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import WordCard from '../components/WordCard'
import Loader from '../components/Loader'

function Home({ theme, wordData, setWordData }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWord = async (word) => {
    setLoading(true)
    setError('')
    setWordData(null)
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      if (!res.ok) throw new Error(`"${word}" not found in dictionary`)
      const data = await res.json()
      setWordData(data)

      // Save to history in localStorage
      const history = JSON.parse(localStorage.getItem('wordHistory') || '[]')
      const updated = [word, ...history.filter(w => w !== word)].slice(0, 10)
      localStorage.setItem('wordHistory', JSON.stringify(updated))

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">
          What does it mean?
        </h1>
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          Search any English word for its definition and examples
        </p>
      </div>

      <SearchBar onSearch={fetchWord} theme={theme} />

      <div className="mt-8">
        {loading && <Loader />}

        {error && (
          <div className={`text-center py-10 rounded-2xl border ${
            theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-slate-100'
          }`}>
            <p className="text-4xl mb-3">🤔</p>
            <p className="text-red-400 font-medium">{error}</p>
            <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
              Check the spelling and try again
            </p>
          </div>
        )}

        {!loading && !error && !wordData && (
          <div className={`text-center py-14 rounded-2xl border ${
            theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-slate-100'
          }`}>
            <p className="text-5xl mb-4">📚</p>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
              Type a word above to get started
            </p>
          </div>
        )}

        {!loading && wordData && <WordCard data={wordData} theme={theme} />}
      </div>
    </main>
  )
}

export default Home