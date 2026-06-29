import { useNavigate } from 'react-router-dom'

function History({ theme, setWordData }) {
  const navigate = useNavigate()
  const history = JSON.parse(localStorage.getItem('wordHistory') || '[]')

  const handleWordClick = async (word) => {
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      const data = await res.json()
      setWordData(data)
      navigate('/')
    } catch {
      alert('Failed to fetch word')
    }
  }

  const clearHistory = () => {
    localStorage.removeItem('wordHistory')
    window.location.reload()
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Search History</h1>
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
              theme === 'dark'
                ? 'bg-gray-800 text-gray-400 hover:text-red-400'
                : 'bg-slate-100 text-gray-500 hover:text-red-500'
            }`}
          >
            Clear all
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className={`text-center py-16 rounded-2xl border ${
          theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-slate-100'
        }`}>
          <p className="text-5xl mb-4">🕓</p>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
            No searches yet — go look up a word!
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {history.map((word, i) => (
            <button
              key={i}
              onClick={() => handleWordClick(word)}
              className={`w-full text-left px-5 py-4 rounded-xl border font-medium flex items-center justify-between group transition-all ${
                theme === 'dark'
                  ? 'bg-gray-900 border-gray-800 hover:border-violet-500 text-white'
                  : 'bg-white border-slate-100 hover:border-violet-400 text-gray-800'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="text-violet-400 text-sm font-mono">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {word}
              </span>
              <span className={`text-xs transition-opacity opacity-0 group-hover:opacity-100 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-400'
              }`}>
                look up →
              </span>
            </button>
          ))}
        </div>
      )}
    </main>
  )
}

export default History