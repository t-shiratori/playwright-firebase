import { test as base, expect } from '@playwright/test'
import { SampleFixture2 } from '../classses/sampleFixture2'

export { expect }

type TTestExtend = {
	fixture1: SampleFixture2
	fixture2: SampleFixture2
}

/** フィクスチャ */
export const sampleFixture2 = base.extend<TTestExtend>({
	fixture1: [
		async ({ page }, use) => {
			// This code runs before every test.
			console.log('-- [sampleFixture2 fixture1] --')
			console.log('>> before-each')
			const sampleFixture = new SampleFixture2(page)
			await sampleFixture.prepareTest()
			await use(sampleFixture)
			// This code runs after every test.
			console.log('>> after-each')
		},
		{ scope: 'test', auto: true },
	],
	fixture2: [
		async ({ page }, use) => {
			// This code runs before every test.
			console.log('-- [sampleFixture2 fixture2] --')
			console.log('>> before-each')
			const sampleFixture = new SampleFixture2(page)
			await sampleFixture.prepareTest()
			await use(sampleFixture)
			// This code runs after every test.
			console.log('>> after-each')
		},
		{ scope: 'test', auto: true },
	],
})
