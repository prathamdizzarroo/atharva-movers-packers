import React, { useEffect, useState } from 'react';

const counters = [
  { label: 'Moves Completed', value: 10000, suffix: '+' },
  { label: 'Customer Rating', value: 4.9, suffix: '/5' },
  { label: 'Cities Covered', value: 500, suffix: '+' },
];

function useCountUp(end, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(1)));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
}

export default function AnimatedCounters() {
  return (
    <section className="bg-blue-50 py-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-10 text-center">
        {counters.map((counter, idx) => {
          const count = useCountUp(counter.value, 1200 + idx * 300);
          return (
            <div key={counter.label} className="flex-1">
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                {count}{counter.suffix}
              </div>
              <div className="text-lg text-gray-700 font-semibold">{counter.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
} 