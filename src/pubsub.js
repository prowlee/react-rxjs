import { useState, useRef, useEffect } from 'react'
import { Subject } from 'rxjs'
import { filter } from 'rxjs/operators'
export * from './topics'

/**
 * The Main Subject/Stream to be listened on.
 */
const mainSubject = new Subject()

/**
 * This function is used to publish data to the Subject via next().
 *
 * @param {*} data
 */
export const publish = (topic, data) => mainSubject.next({ topic, data })

/**
 * Subscriber component which is used to listen to a "topic".
 */
export const Subscriber = (props) => {
  const unsub = useRef()
  const [data, setData] = useState()
  unsub.current = mainSubject
    .pipe(filter(info => info.topic === props.topic))
    .subscribe(info => setData(info.data))
  useEffect(() => {
    return () => unsub.current.unsubscribe()
  })
  return props.children(data)
}