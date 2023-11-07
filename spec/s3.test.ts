import AWS from 'aws-sdk'
import { it, expect } from 'vitest'

import { configureMockSDK } from '@thadeu/vitest-localstack'
configureMockSDK(AWS)

const s3 = new AWS.S3({ endpoint: process.env.AWS_ENDPOINT_URL })

it('must be create a bucket', async () => {
  await s3.createBucket({ Bucket: 'examplebucket-1' }).promise()

  const { Buckets } = await s3.listBuckets().promise()

  expect(Buckets.length).toBe(1)
  expect(Buckets[0].Name).toBe('examplebucket-1')
})
