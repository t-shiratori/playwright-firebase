import { sampleFixture2 as test, expect } from '../fixtures/sampleFixture2'

test.describe('sample test describe', () => {
	test('sample test', async ({ page }) => {
		/** タイトル入力 */
		console.log('-- test --')
		expect(true).toBeTruthy()
	})
})
