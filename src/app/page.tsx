export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#f8f7f4] text-[#18201c]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 -top-48 h-[36rem] w-[36rem] rounded-full bg-[#d8e6d7] blur-3xl" />
      <header className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 sm:px-10">
        <a href="#home" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#203d32] text-sm text-white">S</span>
          StageWise
        </a>
        <span className="hidden rounded-full border border-[#d8ddd6] bg-white/70 px-4 py-2 text-sm text-[#526157] sm:inline-flex">A little more confident, every time.</span>
      </header>
      <section id="home" className="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-14 px-6 pb-20 pt-12 sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dce2d9] bg-white/75 px-3.5 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#476253]"><span className="h-2 w-2 rounded-full bg-[#77a77f]" />Practice with purpose</p>
          <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Your personal AI coach for every presentation.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#626d65]">Find your flow, sharpen your message, and walk into every room ready to be heard.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#start" className="inline-flex h-12 items-center justify-center rounded-full bg-[#203d32] px-6 text-sm font-medium text-white transition hover:bg-[#315541]">Get started <span aria-hidden="true" className="ml-2">↗</span></a>
            <a href="#how" className="inline-flex h-12 items-center justify-center rounded-full border border-[#d7ddd5] bg-white/70 px-6 text-sm font-medium text-[#27392e] transition hover:bg-white">See how it works</a>
          </div>
          <p className="mt-8 text-sm text-[#7a837d]">Built for the big moments and all the practice in between.</p>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-[#e8ede5]" />
          <div className="relative rounded-[2rem] border border-white bg-white p-6 shadow-[0_24px_80px_-36px_rgba(30,55,40,.28)] sm:p-8">
            <div className="flex items-start justify-between">
              <div><p className="text-xs font-medium uppercase tracking-[0.16em] text-[#859087]">Your practice room</p><h2 className="mt-2 text-xl font-semibold tracking-tight">The pitch is coming together</h2></div>
              <span className="rounded-full bg-[#eff5ec] px-3 py-1.5 text-xs font-medium text-[#54745a]">Live coach</span>
            </div>
            <div className="mt-8 rounded-2xl bg-[#f6f7f3] p-5">
              <div className="flex h-28 items-center justify-center gap-1.5" aria-label="Voice practice waveform">
                {[20,32,48,28,60,42,72,36,55,82,46,66,30,52,74,38,58,26,44,68,34,50,24,40,61,32,48,20].map((height, index) => <span key={index} className="w-1.5 rounded-full bg-[#7ca184]" style={{ height: `${height}%` }} />)}
              </div>
              <div className="flex items-center justify-between border-t border-[#e4e8e0] pt-4 text-xs text-[#7a837d]"><span>“Let me show you what changed...”</span><span>00:42</span></div>
            </div>
            <div className="mt-5 flex items-center gap-4 rounded-2xl border border-[#e8ece6] p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#eff5ec] text-[#54745a]">✦</span>
              <p className="text-sm leading-6 text-[#526057]">Great pace. Try pausing after your opening question to let it land.</p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-[#859087]"><span>Clarity <strong className="ml-1 text-[#334b39]">On track</strong></span><span>Confidence <strong className="ml-1 text-[#334b39]">Growing</strong></span></div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-[#e7ece4] bg-white px-4 py-3 shadow-lg sm:block"><p className="text-xs text-[#7a837d]">This week</p><p className="mt-1 text-sm font-semibold text-[#334b39]">One step more confident ↑</p></div>
        </div>
      </section>
      <footer className="relative mx-auto flex w-full max-w-7xl items-center justify-between border-t border-[#e5e8e1] px-6 py-5 text-xs text-[#879087] sm:px-10"><span>StageWise</span><span>Speak with confidence.</span></footer>
    </main>
  );
}
