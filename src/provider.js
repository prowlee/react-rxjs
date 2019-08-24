import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { loremIpsum } from "lorem-ipsum";
import { publish, AlertTopic, WeatherTopic } from './pubsub';

const Provider = () => {
  const intervalRef = useRef();

  useEffect(() => {
    const fetchWeatherData = async () => {
      const result = await axios(
        'http://api.openweathermap.org/data/2.5/weather?id=1816080&APPID=345e743e82e25879a91f4cf526f47f2c',
      );

      publish(WeatherTopic, result.data);
    };
    const id = setInterval(() => {
      fetchWeatherData();
    }, 3000);
    intervalRef.current = id;

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="provider">
      <button onClick={() => publish(AlertTopic, loremIpsum())}>
        Click Me To Publish Alert Topic with Dummy Text
      </button>
    </div>
  );
}

export default Provider;