import React from 'react'
import Card from './Card'
import { useState } from 'react'


const App = () => {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const [note, setNote] = useState([{ Title: 'This is an simple note app', Desc: 'Use this app to save your notes and keep it organized :)' }])

  const descChange = (e) => {
    setDesc(e)
  }

  const titleChange = (e) => {
    setTitle(e)
  }

  const formSubmit = (e) => {
    e.preventDefault()
    console.log("submittedddd");

    const copyNote = [...note]


    copyNote.push({ Title: title, Desc: desc })

    setNote(copyNote)
    console.log(note);

    setTitle('')
    setDesc('')

  }

  const deleteNote = (id) => {
    const copyNote = [...note]
    copyNote.splice(id, 1)
    setNote(copyNote)
  }

  return (

    <div className="flex h-screen bg-amber-50 font-sans overflow-hidden">

      <div className="w-2/5 shrink-0 bg-amber-100 border-r border-amber-200 p-7 flex flex-col gap-5">

        <div className="flex items-center gap-3 pb-5 border-b border-amber-200">
          <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center text-white text-lg">
            📝
          </div>
          <div>
            <div className="text-lg font-semibold text-amber-900">Brain dump</div>
            <div className="text-xs text-amber-600 mt-0.5">Capture your thoughts</div>
          </div>
        </div>


        <form onSubmit={(e) => {
          formSubmit(e)
        }}>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Title</label>
            <input
              type="text"
              placeholder="What's this about?"
              value={title}
              onChange={(e) => {
                titleChange(e.target.value)
              }}
              className="w-full px-3 py-2.5 bg-white border-2 border-amber-200 rounded-xl text-sm text-amber-900 placeholder-amber-400 outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Note</label>
            <textarea
              rows={5}
              placeholder="Don't overthink it, just type..."
              value={desc}
              onChange={(e) => {
                descChange(e.target.value)
              }}
              className="w-full px-3 py-2.5 bg-white border-2 border-amber-200 rounded-xl text-sm text-amber-900 placeholder-amber-400 outline-none focus:border-amber-400 transition-colors resize-none leading-relaxed"
            />
          </div>

          <button className="w-full py-2.5 bg-amber-400 hover:bg-amber-500 active:scale-95 text-white font-semibold text-sm rounded-xl transition-all mt-1 flex items-center justify-center gap-2">
            <span>+</span> Save note
          </button>

          <div className="mt-auto pt-5 border-t border-amber-200 text-center text-xs text-amber-500">
            {note.length} Notes Saved
          </div>
        </form>

      </div>

      <div className="flex-1 flex flex-col min-h-0">

        <div className="flex items-center justify-between px-8 py-5 border-b border-amber-200 shrink-0">
          <span className="text-sm font-semibold text-amber-900">All notes</span>
          <span className="text-xs text-amber-700 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full">
            {note.length} Notes
          </span>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="grid grid-cols-1 gap-4">
            {note.map((elem, idx) => {
              return <Card note={elem} key={idx} id={idx} deleteNote={deleteNote} />
            })}
          </div>
        </div>

      </div>

    </div>
  )
}

export default App