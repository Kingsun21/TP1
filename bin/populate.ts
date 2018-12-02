#!/usr/bin/env ts-node

import { Metric, MetricsHandler } from '../src/metrics'
import { User, UserHandler } from '../src/users'

const met = [
  new Metric(`${new Date('2013-11-04 14:00 UTC').getTime()}`, 12),
  new Metric(`${new Date('2013-11-04 14:15 UTC').getTime()}`, 10),
  new Metric(`${new Date('2013-11-04 14:30 UTC').getTime()}`, 8)
]

const db1 = new MetricsHandler('./db/metrics')
const db2 = new UserHandler('./db/users')
const user = new User("Dennis", "dennis@oui.com", "chipsobeur");

db1.save('0', met, (err: Error | null) => {
  if (err) throw err
  console.log('Data populated')
})

db2.save(user, (err: Error | null) => {
  if (err) throw err
  console.log('Data populated')
})
