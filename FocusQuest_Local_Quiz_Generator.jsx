            </div>

            {(() => {
              const correctCount = battleHistory.filter((b) => b.isCorrect).length;
              const accuracy =
                battleHistory.length > 0
                  ? Math.round((correctCount / battleHistory.length) * 100)
                  : 0;

              return (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3.5 sm:p-4 text-center">
                    <div className="text-[11px] sm:text-xs text-slate-400 mb-1">Accuracy</div>
                    <div className="text-xl sm:text-2xl font-black text-cyan-300">{accuracy}%</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500">
                      {correctCount}/{battleHistory.length} Correct
                    </div>
                  </div>

                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3.5 sm:p-4 text-center">
                    <div className="text-[11px] sm:text-xs text-slate-400 mb-1">Max Streak</div>
                    <div className="text-xl sm:text-2xl font-black text-amber-400">{maxStreak}x</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500">Combo Chain</div>
                  </div>

                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3.5 sm:p-4 text-center">
                    <div className="text-[11px] sm:text-xs text-slate-400 mb-1">XP Earned</div>
                    <div className="text-xl sm:text-2xl font-black text-violet-400">
                      +{earnedXpThisRun}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500">
                      Level {playerLevel}
                    </div>
                  </div>

                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3.5 sm:p-4 text-center">
                    <div className="text-[11px] sm:text-xs text-slate-400 mb-1">Gold Looted</div>
                    <div className="text-xl sm:text-2xl font-black text-emerald-400">
                      +{earnedGoldThisRun}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500">
                      Total: {gold} Gold
                    </div>
                  </div>
                </div>
              );
            })()}

            <div className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-violet-400" />
                <span>Battle & Study Review</span>
              </h2>
              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                {battleHistory.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-2xl border ${
                      item.isCorrect
                        ? 'bg-slate-950/60 border-emerald-500/25'
                        : 'bg-rose-950/20 border-rose-500/35'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold text-slate-300">
                        Q{index + 1}: {item.question.replace(/\n/g, ' ')}
                      </span>
                      {item.isCorrect ? (
                        <span className="shrink-0 text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300">
                          Mastered
                        </span>
                      ) : (
                        <span className="shrink-0 text-[11px] font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                          Missed
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 space-y-1">
                      {!item.isCorrect && (
                        <div>
                          Your Answer: <span className="text-rose-300 font-semibold">{item.chosen}</span> •{' '}
                          Correct Answer:{' '}
                          <span className="text-emerald-300 font-semibold">{item.correctAnswer}</span>
                        </div>
                      )}
                      <div className="text-slate-300 italic">"{item.explanation}"</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => startBattle()}
                className="flex-1 min-h-[48px] py-3.5 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Rematch Same Study Guide</span>
              </button>

              <button
                type="button"
                onClick={() => setView('setup')}
                className="flex-1 min-h-[48px] py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Load New Study Notes</span>
              </button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
