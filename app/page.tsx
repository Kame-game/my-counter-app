"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  // 最高記録を保存するための新しい「状態（State）」
  const [highScore, setHighScore] = useState(0);

  // カウントを増やす時の特別な命令
  const incrementCount = () => {
    const nextCount = count + 1;
    setCount(nextCount);

    // もし新しい数字が、今の最高記録より大きくなったら、最高記録も更新する！
    if (nextCount > highScore) {
      setHighScore(nextCount);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">

      <div className="bg-white/20 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/30 text-center min-w-[300px]">

        {/* 最高記録の表示エリア */}
        <div className="mb-4 bg-yellow-400/20 py-2 px-4 rounded-full inline-block border border-yellow-400/50">
          <span className="text-yellow-200 text-sm font-bold uppercase tracking-widest">🏆 High Score: {highScore}</span>
        </div>

        <h1 className="text-xl font-medium mb-2 opacity-80">Current Count</h1>
        <p className="text-8xl font-black mb-10 tracking-tighter drop-shadow-lg">{count}</p>

        <div className="flex gap-6 justify-center">
          <button
            onClick={() => count > 0 && setCount(count - 1)}
            className="w-20 h-20 flex items-center justify-center bg-white/10 hover:bg-red-500 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-90 border border-white/20 text-3xl"
          >
            ー
          </button>

          <button
            onClick={incrementCount} // さっき作った命令を呼び出す
            className="w-20 h-20 flex items-center justify-center bg-gradient-to-t from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 rounded-2xl shadow-lg transition-all duration-300 hover:scale-110 active:scale-90 text-3xl"
          >
            ＋
          </button>
        </div>

        <button
          onClick={() => setCount(0)}
          className="mt-10 opacity-60 hover:opacity-100 text-sm font-medium transition-colors"
        >
          RESET
        </button>
      </div>
    </div>
  );
}