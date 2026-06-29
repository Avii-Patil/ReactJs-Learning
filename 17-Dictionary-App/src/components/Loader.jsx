function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div className="w-10 h-10 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>
      <p className="text-sm text-gray-400">Looking it up...</p>
    </div>
  )
}

export default Loader