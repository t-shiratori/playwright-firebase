import type { Page } from '@playwright/test'

/** サンプルフィクスチャ */
export class SampleFixture1 {
	constructor(public readonly page: Page) {}

	/** テストの準備を行う */
	async prepareTest() {
		console.log('SampleFixture1 prepareTest')
	}
}
