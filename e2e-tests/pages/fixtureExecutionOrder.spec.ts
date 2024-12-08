/**
 * https://playwright.dev/docs/test-fixtures#execution-order
 */

import { test as base } from '@playwright/test'

type WorkerFixture = {
	workerFixture: string
	autoWorkerFixture: string
}

type TestFixture = {
	autoTestFixture1: string
	autoTestFixture2: string
	manualTestFixture1: string
	manualTestFixture2: {
		print: () => void
	}
	unusedFixture: string
}

const test = base.extend<TestFixture, WorkerFixture>({
	workerFixture: [
		async ({ browser }, use) => {
			console.log('>> workerFixture > set up')

			await use('workerFixture')

			console.log('>> workerFixture > tear down')
		},
		{ scope: 'worker' },
	],

	autoWorkerFixture: [
		async ({ browser }, use) => {
			console.log('>> autoWorkerFixture > set up')

			await use('autoWorkerFixture')

			console.log('>> autoWorkerFixture > tear down')
		},
		{ scope: 'worker', auto: true },
	],

	autoTestFixture1: [
		async ({ autoTestFixture2 }, use) => {
			console.log('>> autoTestFixture1 > set up')

			await use('autoTestFixture1')

			console.log('>> autoTestFixture1 > tear down')
		},
		{ scope: 'test', auto: true },
	],

	autoTestFixture2: [
		async ({}, use) => {
			console.log('>> autoTestFixture2 > set up')

			await use('autoTestFixture2')

			console.log('>> autoTestFixture2 > tear down')
		},
		{ scope: 'test', auto: true },
	],

	manualTestFixture1: [
		async ({}, use) => {
			console.log('>> manualTestFixture1 > set up')

			await use('manualTestFixture1')

			console.log('>> manualTestFixture1 > tear down')
		},
		{ scope: 'test', auto: false },
	],

	manualTestFixture2: [
		async ({}, use) => {
			const manualTestFixture2 = {
				print: () => {
					console.log('>> printed manualTestFixture2')
				},
			}

			console.log('>> manualTestFixture2 > set up')

			await use(manualTestFixture2)

			console.log('>> manualTestFixture2 > tear down')
		},
		{ scope: 'test', auto: false },
	],

	unusedFixture: [
		async ({ page }, use) => {
			console.log('>> unusedFixture > set up')

			await use('unusedFixture')

			console.log('>> unusedFixture > tear down')
		},
		{ scope: 'test' },
	],
})

test.beforeAll(async () => {
	/* ... */
	console.log('>> beforeAll')
})
test.beforeEach(async ({ page }) => {
	/* ... */
	console.log('>> beforeEach')
})
test('test1', async ({ page, manualTestFixture2 }) => {
	/* ... */
	console.log('>> test1')
	manualTestFixture2.print()
})
test.afterEach(async () => {
	/* ... */
	console.log('>> afterEach')
})
test.afterAll(async () => {
	/* ... */
	console.log('>> afterAll')
})
