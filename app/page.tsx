export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-8 tracking-tight leading-none pb-2">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-2">
              Something extraordinary is on the way
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-8"></div>
            <div className="flex justify-center space-x-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping delay-75"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}