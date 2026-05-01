# kraken-demo-target

Tiny TypeScript + Jest playground used as the demo target for the **Kraken Coverage Improver**.

- `src/sum.ts` — fully covered by `sum.test.ts` (the dashboard shows it at 100%).
- `src/calculator.ts` — *no tests yet*, ~0% coverage. Good target for **sibling-mode** generation.
- `src/strings.ts` — *no tests yet*, ~0% coverage. Another sibling-mode candidate.

## Local sanity-check

```bash
npm install
npm run test:coverage
ls coverage/lcov.info
```
