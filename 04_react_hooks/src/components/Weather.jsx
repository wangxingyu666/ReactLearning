import { useEffect, useState } from "react";

const Weather = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Nanjing");

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dd8d926484219dbf04e3fe03d1b0b584`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("网络请求错误");
        }
        return res.json();
      })
      .then((json) => {
        if (json.cod === 200) {
          setData(json);
          setError(null);
        } else {
          setError(json.message || "获取数据失败");
        }
      })
      .catch((err) => {
        setError(err.message || "获取数据失败");
      });
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    fetchWeather();
  };

  // 温度转换为摄氏度并保留一位小数
  const tempInCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

  if (error) return <p>{error}</p>;

  if (!data) return <p>加载中...</p>;

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="请输入城市名称"
      />
      <button onClick={handleSearch}>查询天气</button>
      {data && (
        <div>
          <h1>城市: {data.name}</h1>
          <p>国家: {data.sys.country}</p>
          <p>
            天气: {data.weather[0].main} - {data.weather[0].description}
          </p>
          <p>温度: {tempInCelsius(data.main.temp)}°C</p>
          <p>体感温度: {tempInCelsius(data.main.feels_like)}°C</p>
          <p>最低温度: {tempInCelsius(data.main.temp_min)}°C</p>
          <p>最高温度: {tempInCelsius(data.main.temp_max)}°C</p>
          <p>湿度: {data.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
