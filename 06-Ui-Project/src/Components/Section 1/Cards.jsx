import React from 'react'

const Cards = ({ user }, props) => {

    return (
        <div className="bg-[#1a1a1a] rounded-[18px] overflow-hidden relative min-h-[280px] flex flex-col justify-end">
            <div className="absolute top-3 left-3 z-10 w-7 h-7 bg-white rounded-full flex items-center justify-center text-sm font-semibold text-gray-900">
                {user.num}
            </div>

            <img
                src={user.image}
                alt=""
                className="absolute inset-x-0 top-0 bottom-[60px] w-full h-[calc(100%-60px)] object-cover z-0"
            />

            <div className="absolute inset-x-0 top-0 bottom-[60px] bg-gradient-to-b from-transparent via-transparent to-black/80 z-[1]" />
            <div className="relative z-10 px-3.5 pt-3 pb-2">
                <p className="text-xs text-gray-300 leading-relaxed mb-2">{user.desctiption}</p>
            </div>
            <div className="bg-[#1a1a1a] px-3.5 pb-3.5 z-10 relative">
                <div
                    className="rounded-full px-4 py-2 flex items-center justify-between cursor-pointer"
                    style={{ backgroundColor: user.btn }}
                >
                    <span className="text-sm">{user.label}</span>
                    <span>→</span>
                </div>
            </div>
        </div>
    )
}

export default Cards