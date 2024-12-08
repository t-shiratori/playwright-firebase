import type { Page } from '@playwright/test'

/** サンプルフィクスチャ */
export class SampleFixture2 {
	constructor(public readonly page: Page) {}

	/** テストの準備を行う */
	async prepareTest() {
		console.log('SampleFixture2 prepareTest ')
	}
}
