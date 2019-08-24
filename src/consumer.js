import React from 'react';
import { Subscriber, AlertTopic, WeatherTopic } from './pubsub';

const Consumer = () => (
  <div className="consumer">
    <Subscriber topic={AlertTopic}>
      {text => (
        <>
          <h2>Alert Topic</h2>
          <p><strong>Received: </strong>{text}</p>
        </>
      )}
    </Subscriber>
    <Subscriber topic={WeatherTopic}>
      {data => (
        <>
          <h2>Weather Topic</h2>
          <pre>{JSON.stringify(data, null, 2) }</pre>
        </>
      )}
    </Subscriber>
  </div>
)

export default Consumer;
