import React from 'react';
import { Subscriber, AlertTopic } from './pubsub';

const Consumer = () => (
  <div className="consumer">
    <Subscriber topic={AlertTopic}>
      {text => (<h1>{text}</h1>)}
    </Subscriber>
  </div>
)

export default Consumer;
