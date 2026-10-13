export default function ForecastList() {
  const days = [
    { day: 'Mon', temp: '24°C', condition: 'Clear' },
    { day: 'Tue', temp: '18°C', condition: 'Rain' },
    { day: 'Wed', temp: '20°C', condition: 'Cloudy' },
    { day: 'Thu', temp: '17°C', condition: 'Thunderstorm' },
    { day: 'Fri', temp: '22°C', condition: 'Partly Cloudy' },
  ];

  return (
    <div className="mt-6">
      <span className="font-mono text-xs uppercase tracking-wider font-bold text-zinc-500 block mb-3">
        5-Day Outlook
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {days.map((item, index) => (
          <div
            key={index}
            className="bg-white border-2 border-zinc-200 p-4 rounded-lg flex flex-col justify-between shadow-sm"
          >
            <span className="font-mono text-xs font-bold text-zinc-600 uppercase">
              {item.day}
            </span>
            <div className="my-4">
              <span className="text-3xl font-black text-zinc-950">{item.temp}</span>
            </div>
            <span className="text-xs font-semibold text-zinc-700 truncate">{item.condition}</span>
          </div>
        ))}
      </div>
    </div>
  );
}