"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    // 背景をグラデーションにして、文字を中央に
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="bg-white/20 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-white/30 text-center">
        <h1 className="text-white text-xl font-medium mb-2 opacity-80">Current Count</h1>

        {/* 数字の表示を大きく、光っているようなデザインに */}
        <p className="text-8xl font-black text-white mb-10 tracking-tighter drop-shadow-lg">
          {count}
        </p>

        <div className="flex gap-6">
          {/* マイナスボタン：ホバー（マウスを乗せた時）の動きを追加 */}
          <button
            onClick={() => count > 0 && setCount(count - 1)}
            className="w-20 h-20 flex items-center justify-center bg-white/10 hover:bg-red-500 text-white text-3xl rounded-2xl transition-all duration-300 hover:scale-110 active:scale-90 border border-white/20"
          >
            ー
          </button>

          {/* プラスボタン：グラデーションと影で立体感を */}
          <button
            onClick={() => setCount(count + 1)}
            className="w-20 h-20 flex items-center justify-center bg-gradient-to-t from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white text-3xl rounded-2xl shadow-lg transition-all duration-300 hover:scale-110 active:scale-90"
          >
            ＋
          </button>
        </div>

        <button
          onClick={() => setCount(0)}
          className="mt-10 text-white/60 hover:text-white text-sm font-medium transition-colors"
        >
          RESET
        </button>
      </div>

      <p className="mt-8 text-white/40 text-xs uppercase tracking-widest">
        Built with Next.js & Tailwind CSS
      </p>
    </div>
  );
}