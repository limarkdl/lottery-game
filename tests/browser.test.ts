import { test } from '@playwright/test'

test('Test browser styles', async ({ page }) => {
    await page.goto('http://localhost:5173/')

    await page.pause()
})
