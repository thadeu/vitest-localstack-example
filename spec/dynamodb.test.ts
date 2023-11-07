import AWS from 'aws-sdk'
import { it, expect } from 'vitest'

import { configureMockSDK } from '@thadeu/vitest-localstack'
configureMockSDK(AWS)

const Table = new AWS.DynamoDB.DocumentClient()

it('should insert item into table', async () => {
  await Table.put({
    TableName: 'users_test',
    Item: { pk: '1', sk: 'vitest-localstack' },
  }).promise()

  const { Items, Count } = await Table.scan({ TableName: 'users_test' }).promise()

  expect(Count).toBe(1)
})
