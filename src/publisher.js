import React from 'react';
import { loremIpsum } from "lorem-ipsum";
import { publish, AlertTopic } from './pubsub';

const Publisher = () => (
  <div className="publisher">
    <button onClick={() => publish(AlertTopic, loremIpsum())}>
      Click Me
    </button>
  </div>
);

export default Publisher;