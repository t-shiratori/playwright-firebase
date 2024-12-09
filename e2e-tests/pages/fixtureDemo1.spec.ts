import { sampleFixture1 as test, expect } from '../fixtures/sampleFixture1'

test.describe('sample test describe', () => {
    test('sample test', async ({ page }) => {
        /** タイトル入力 */
        console.log('-- test --')
        expect(true).toBeTruthy()
    })
})
