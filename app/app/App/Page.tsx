export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500">
          SHIELD X
        </h1>
        <p className="text-2xl mb-12 text-gray-300">
          Free • Private • Offline • Multi-language
        </p>
        <button className="bg-green-600 hover:bg-green-700 px-16 py-8 text-3xl rounded-3xl shadow-2xl transition transform hover:scale-105">
          ابدأ الفحص الآن
        </button>
      </div>
    </main>
  )
}
