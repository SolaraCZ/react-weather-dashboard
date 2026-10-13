export default function ForecastList() {
  const dummyDays = [
    { day: 'Zítra', temp: '24°C', condition: 'Jasno', type: 'sun' },
    { day: 'Středa', temp: '18°C', condition: 'Přeháňky', type: 'rain' },
    { day: 'Čtvrtek', temp: '20°C', condition: 'Oblačno', type: 'cloud' },
    { day: 'Pátek', temp: '17°C', condition: 'Bouřky', type: 'storm' },
    { day: 'Sobota', temp: '22°C', condition: 'Skoro jasno', type: 'sun' },
  ];

  const renderIcon = (type) => {
    switch (type) {
      case 'rain':
        return (
          <svg className="w-7 h-7 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 13v5m-4-3v5m-4-3v5m-1-10a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 007 10z" />
          </svg>
        );
      case 'storm':
        return (
          <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'cloud':
        return (
          <svg className="w-7 h-7 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      case 'sun':
      default:
        return (
          <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold text-slate-200 mb-4">Předpověď na 5 dní</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {dummyDays.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900/60 border border-slate-800/60 p-4 rounded-xl flex flex-col items-center text-center hover:border-slate-700 transition-colors"
          >
            <span className="text-xs font-semibold text-slate-400">{item.day}</span>
            <div className="my-3 flex items-center justify-center h-8">
              {renderIcon(item.type)}
            </div>
            <span className="text-base font-bold text-slate-100">{item.temp}</span>
            <span className="text-xs text-slate-500 mt-1">{item.condition}</span>
          </div>
        ))}
      </div>
    </div>
  );
}