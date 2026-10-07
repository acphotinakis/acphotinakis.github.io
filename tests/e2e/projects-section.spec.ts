import { test, expect } from '@playwright/test';

const PROJECT_TITLES = [
  'Aegis-Nexus Platform',
  'SBMPI: Parallelizing Blockchain Computations via Sharding',
  'RDT-Mail-Service',
  'TradeSync - AI-Powered Trading Simulator',
  'RadixIP',
  'SecureComm'
];

const PROJECT_YEARS = {
  'Aegis-Nexus Platform': 2025,
  'SBMPI: Parallelizing Blockchain Computations via Sharding': 2025,
  'RDT-Mail-Service': 2026,
  'TradeSync - AI-Powered Trading Simulator': 2026,
  'RadixIP': 2022,
  'SecureComm': 2024
};

test.describe('Projects Section - Cross Browser', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for the page to fully load
    await page.waitForLoadState('networkidle');
    // Scroll to projects section
    await page.locator('#projects').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
  });

  test('should render projects section heading', async ({ page }) => {
    const heading = page.locator('#projects h2');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('PROJECTS');
  });

  test('should render all 6 project cards', async ({ page }) => {
    const cards = page.locator('#projects article');
    await expect(cards).toHaveCount(6);
  });

  test('should have correct project titles', async ({ page }) => {
    const expectedTitles = [
      'Aegis-Nexus Platform',
      'SBMPI: Parallelizing Blockchain Computations via Sharding',
      'RDT-Mail-Service',
      'TradeSync - AI-Powered Trading Simulator',
      'RadixIP',
      'SecureComm'
    ];
    
    for (const title of expectedTitles) {
      await expect(page.locator(`text=${title}`)).toBeVisible();
    }
  });

  test('should have type badges on each card', async ({ page }) => {
    const cards = page.locator('#projects article');
    for (let i = 0; i < 6; i++) {
      const card = cards.nth(i);
      await expect(card.locator('.inline-flex:has-text("Research"), .inline-flex:has-text("System"), .inline-flex:has-text("CLI"), .inline-flex:has-text("Library")').first()).toBeVisible();
    }
  });

  test('should have status badges on each card', async ({ page }) => {
    const cards = page.locator('#projects article');
    for (let i = 0; i < 6; i++) {
      const card = cards.nth(i);
      await expect(card.locator('.inline-flex:has-text("Active"), .inline-flex:has-text("Completed")').first()).toBeVisible();
    }
  });

  test('should show thumbnails on each card', async ({ page }) => {
    const images = page.locator('#projects img');
    await expect(images).toHaveCount(6);
  });

  test('should have tech pills on each card', async ({ page }) => {
    const cards = page.locator('#projects article');
    for (let i = 0; i < 6; i++) {
      const card = cards.nth(i);
      const pills = card.locator('.inline-flex:has-text("Spring"), .inline-flex:has-text("React"), .inline-flex:has-text("Python"), .inline-flex:has-text("C++"), .inline-flex:has-text("C#"), .inline-flex:has-text("MPI"), .inline-flex:has-text("MongoDB"), .inline-flex:has-text("FastAPI")');
      await expect(pills.first()).toBeVisible();
    }
  });

  test('should open modal when Details clicked', async ({ page }) => {
    const firstCard = page.locator('#projects article').first();
    await firstCard.locator('button:has-text("Details")').click();
    
    await expect(page.locator('[role="dialog"]')).toBeVisible();
    await expect(page.locator('[role="dialog"] h2')).toContainText('Aegis-Nexus Platform');
  });

  test('modal should have tab navigation', async ({ page }) => {
    const firstCard = page.locator('#projects article').first();
    await firstCard.locator('button:has-text("Details")').click();
    
    await expect(page.locator('[role="tablist"]')).toBeVisible();
    await expect(page.locator('[role="tab"]:has-text("Overview")')).toBeVisible();
    await expect(page.locator('[role="tab"]:has-text("Architecture")')).toBeVisible();
    await expect(page.locator('[role="tab"]:has-text("Tech Stack")')).toBeVisible();
    await expect(page.locator('[role="tab"]:has-text("Resources")')).toBeVisible();
  });

  test('should switch tabs in modal', async ({ page }) => {
    const firstCard = page.locator('#projects article').first();
    await firstCard.locator('button:has-text("Details")').click();
    
    await page.locator('[role="tab"]:has-text("Architecture")').click();
    await expect(page.locator('[role="tabpanel"]:has-text("System Components")')).toBeVisible();
    
    await page.locator('[role="tab"]:has-text("Tech Stack")').click();
    await expect(page.locator('[role="tabpanel"]:has-text("Programming Models")')).toBeVisible();
    
    await page.locator('[role="tab"]:has-text("Resources")').click();
    await expect(page.locator('[role="tabpanel"]:has-text("View Repository")')).toBeVisible();
  });

  test('should close modal on Escape key', async ({ page }) => {
    const firstCard = page.locator('#projects article').first();
    await firstCard.locator('button:has-text("Details")').click();
    
    await expect(page.locator('[role="dialog"]')).toBeVisible();
    
    await page.keyboard.press('Escape');
    
    await expect(page.locator('[role="dialog"]')).not.toBeVisible();
  });

  test('should close modal on backdrop click', async ({ page }) => {
    const firstCard = page.locator('#projects article').first();
    await firstCard.locator('button:has-text("Details")').click();
    
    await expect(page.locator('[role="dialog"]')).toBeVisible();
    
    await page.locator('[role="dialog"]').click({ position: { x: 10, y: 10 } });
    
    await expect(page.locator('[role="dialog"]')).not.toBeVisible();
  });

  test('should navigate between projects with arrow keys', async ({ page }) => {
    const firstCard = page.locator('#projects article').first();
    await firstCard.locator('button:has-text("Details")').click();
    
    await expect(page.locator('[role="dialog"] h2')).toContainText('Aegis-Nexus Platform');
    
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('[role="dialog"] h2')).toContainText('SBMPI');
    
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('[role="dialog"] h2')).toContainText('RDT-Mail');
    
    await page.keyboard.press('ArrowLeft');
    await expect(page.locator('[role="dialog"] h2')).toContainText('SBMPI');
  });

  test('should filter by project type', async ({ page }) => {
    await page.locator('button:has-text("Research")').click();
    await page.waitForTimeout(300);
    
    const cards = page.locator('#projects article');
    await expect(cards).toHaveCount(2);
    
    await expect(page.locator('text=Aegis-Nexus Platform')).toBeVisible();
    await expect(page.locator('text=SBMPI')).toBeVisible();
  });

  test('should filter by year', async ({ page }) => {
    await page.locator('button:has-text("2026")').click();
    await page.waitForTimeout(300);
    
    const cards = page.locator('#projects article');
    await expect(cards).toHaveCount(2);
  });

  test('should search projects', async ({ page }) => {
    await page.locator('input[placeholder="Search projects..."]').fill('blockchain');
    await page.waitForTimeout(300);
    
    const cards = page.locator('#projects article');
    await expect(cards).toHaveCount(1);
    await expect(page.locator('text=SBMPI')).toBeVisible();
  });

  test('should clear all filters', async ({ page }) => {
    await page.locator('button:has-text("Research")').click();
    await page.waitForTimeout(300);
    
    await expect(page.locator('button:has-text("Clear all")')).toBeVisible();
    await page.locator('button:has-text("Clear all")').click();
    await page.waitForTimeout(300);
    
    const cards = page.locator('#projects article');
    await expect(cards).toHaveCount(6);
  });

  test('should toggle grid/list view', async ({ page }) => {
    const gridButton = page.locator('button[aria-label="Grid view"]');
    const listButton = page.locator('button[aria-label="List view"]');
    
    await expect(gridButton).toHaveAttribute('aria-pressed', 'true');
    
    await listButton.click();
    await expect(listButton).toHaveAttribute('aria-pressed', 'true');
    
    await gridButton.click();
    await expect(gridButton).toHaveAttribute('aria-pressed', 'true');
  });

  test('should sort projects by year', async ({ page }) => {
    const select = page.locator('select[aria-label="Sort projects"]');
    await select.selectOption('year-asc');
    await page.waitForTimeout(300);
    
    const cards = page.locator('#projects article');
    const titles = await cards.locator('h3').allTextContents();
    
    const years = titles.map(t => PROJECT_YEARS[t as keyof typeof PROJECT_YEARS]);
    
    for (let i = 1; i < years.length; i++) {
      expect(years[i]).toBeGreaterThanOrEqual(years[i - 1]);
    }
  });

  test('should sort projects by title', async ({ page }) => {
    const select = page.locator('select[aria-label="Sort projects"]');
    await select.selectOption('title-asc');
    await page.waitForTimeout(300);
    
    const cards = page.locator('#projects article');
    const titles = await cards.locator('h3').allTextContents();
    const sorted = [...titles].sort((a, b) => a.localeCompare(b));
    expect(titles).toEqual(sorted);
  });

  test('should have repo links opening in new tab', async ({ page }) => {
    const firstCard = page.locator('#projects article').first();
    const repoLink = firstCard.locator('a:has-text("Code")');
    
    await expect(repoLink).toHaveAttribute('target', '_blank');
    await expect(repoLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should be accessible - keyboard navigation', async ({ page }) => {
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Should be able to tab through filter buttons
    const firstFilter = page.locator('button[aria-pressed="false"]').first();
    await expect(firstFilter).toBeFocused();
  });

  test('should have live region for filter announcements', async ({ page }) => {
    await page.locator('button:has-text("Research")').click();
    await page.waitForTimeout(300);
    
    const liveRegion = page.locator('[role="status"]');
    await expect(liveRegion).toContainText('projects found');
  });
});