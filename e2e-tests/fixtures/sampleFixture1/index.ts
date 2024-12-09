import { test as base, expect } from '@playwright/test'
import { SampleFixture1 } from '../classses/sampleFixture1'

export { expect }

type TTestExtend = {
    fixture1: SampleFixture1
    fixture2: SampleFixture1
}

/** フィクスチャ */
export const sampleFixture1 = base.extend<TTestExtend>({
    fixture1: [
        async ({ page }, use) => {
            // This code runs before every test.
            console.log('-- [sampleFixture1 fixture1] --')
            console.log('>> before-each')
            const sampleFixture = new SampleFixture1(page)
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
            console.log('-- [sampleFixture1 fixture2] --')
            console.log('>> before-each')
            const sampleFixture = new SampleFixture1(page)
            await sampleFixture.prepareTest()
            await use(sampleFixture)
            // This code runs after every test.
            console.log('>> after-each')
        },
        { scope: 'test', auto: true },
    ],
})
