import localStackSetup from '@thadeu/vitest-localstack/setup'
import localStackTeardown from '@thadeu/vitest-localstack/teardown'

export async function setup() {
  await localStackSetup()
}

export async function teardown() {
  await localStackTeardown()
}