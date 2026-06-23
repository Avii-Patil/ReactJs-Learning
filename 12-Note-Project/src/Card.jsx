import React from 'react'

const Card = (props) => {

    const todayString = new Date().toISOString().split("T")[0];
    
    return (
        <div className="relative bg-white border-2 border-amber-200 hover:border-amber-400 rounded-2xl p-4 flex flex-col gap-2 transition-colors group">

            <button onClick={() => props.deleteNote(props.id)} className="absolute top-3 right-3 w-6 h-6 bg-amber-50 hover:bg-amber-200 border border-amber-200 rounded-lg flex items-center justify-center text-amber-600 text-xs transition-colors opacity-0 group-hover:opacity-100">
                ✕
            </button>

            <div className="text-sm font-semibold text-amber-900 pr-6">
                {props.note.Title}
            </div>

            <div className="text-xs text-amber-700 leading-relaxed">
                {props.note.Desc}
            </div>

            <div className="mt-2 pt-2 border-t flex gap-3 border-amber-100">
                <span className="text-xs text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                    idea
                </span>
                <span className="text-xs text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                    {todayString}
                </span>
            </div>
        </div>
    )
}

export default Card