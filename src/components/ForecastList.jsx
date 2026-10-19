export default function ForecastList({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

  const formatDay = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  return (
    <div className="mt-6">
      <span className="font-mono text-xs uppercase tracking-wider font-bold text-zinc-500 block mb-3">
        5-Day Outlook
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {forecast.map((item) => (
          <div
            key={item.dt}
            className="bg-white border-2 border-zinc-200 p-4 rounded-lg flex flex-col justify-between shadow-sm"
          >
            <span className="font-mono text-xs font-bold text-zinc-600 uppercase">
              {formatDay(item.dt_txt)}
            </span>
            <div className="my-2 flex items-center justify-between">
              <span className="text-2xl font-black text-zinc-950">
                {Math.round(item.main.temp)}°C
              </span>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0]?.icon}.png`}
                alt={item.weather[0]?.main}
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-xs font-semibold text-zinc-600 truncate capitalize">
              {item.weather[0]?.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}