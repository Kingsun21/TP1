#!/usr/bin/env ts-node

import { Metric, MetricsHandler } from '../src/metrics'
import { User, UserHandler } from '../src/users'

const met = [
  new Metric(`${new Date('2013-11-04 14:00 UTC').getTime()}`, 12),
  new Metric(`${new Date('2013-11-04 14:15 UTC').getTime()}`, 10),
  new Metric(`${new Date('2013-11-04 14:30 UTC').getTime()}`, 8),
  new Metric(`${new Date('2013-11-04 14:45 UTC').getTime()}`, 3),
  new Metric(`${new Date('2013-11-04 15:00 UTC').getTime()}`, 11),
  new Metric(`${new Date('2013-11-04 15:15 UTC').getTime()}`, 6)
]


const met2 = [
  new Metric(`${new Date('2017-06-04 15:00 UTC').getTime()}`, 2),
  new Metric(`${new Date('2017-07-04 18:15 UTC').getTime()}`, 37),
  new Metric(`${new Date('2017-08-04 20:30 UTC').getTime()}`, 21)
]

const dbMet = new MetricsHandler('./db/metrics')
const dbUser = new UserHandler('./db/users')

const user = new User("Denis", "denis@oui.com", "chipsobeur");
const user2 = new User("Laurent", "laurent@houtant.com", "houtant");

dbMet.save('Denis', '0', met, (err: Error | null) => {
  if (err) throw err
  console.log('Data populated for metrics')
})

dbMet.save('Laurent', '0', met2, (err: Error | null) => {
  if (err) throw err
  console.log('Data populated for metrics2')
})

dbUser.save(user, (err: Error | null) => {
  if (err) throw err
  console.log('Data populated for user')
})

dbUser.save(user2, (err: Error | null) => {
  if (err) throw err
  console.log('Data populated for user2')
})
