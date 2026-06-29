function WordCard({ data, theme }) {
  if (!data) return null

  const entry = data[0]
  const phonetic = entry.phonetic || entry.phonetics?.find(p => p.text)?.text || ''

  return (
    <div className={`w-full max-w-xl mx-auto rounded-2xl p-6 shadow-lg border ${
      theme === 'dark'
        ? 'bg-gray-900 border-gray-800'
        : 'bg-white border-slate-100'
    }`}>

      {/* Word + Phonetic */}
      <div className="mb-5">
        <h2 className="text-4xl font-bold tracking-tight">{entry.word}</h2>
        {phonetic && (
          <p className="text-violet-500 text-lg mt-1">{phonetic}</p>
        )}
      </div>

      {/* Meanings */}
      {entry.meanings.map((meaning, i) => (
        <div key={i} className="mb-5">

          {/* Part of speech badge */}
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-violet-100 text-violet-700 mb-3">
            {meaning.partOfSpeech}
          </span>

          {/* Definitions */}
          <div className="space-y-3">
            {meaning.definitions.slice(0, 3).map((def, j) => (
              <div
                key={j}
                className={`pl-4 border-l-2 border-violet-400`}
              >
                <p className={`text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {def.definition}
                </p>
                {def.example && (
                  <p className={`text-sm mt-1 italic ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-400'
                  }`}>
                    "{def.example}"
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Synonyms */}
          {meaning.synonyms?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {meaning.synonyms.slice(0, 5).map((syn, k) => (
                <span
                  key={k}
                  className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                    theme === 'dark'
                      ? 'bg-gray-800 text-gray-300'
                      : 'bg-slate-100 text-gray-600'
                  }`}
                >
                  {syn}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default WordCard