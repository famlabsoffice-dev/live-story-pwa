# Module 5 Accessibility Audit

## Standards

- WCAG 2.2 AA
- Semantic HTML
- Keyboard navigation
- Screen reader compatibility
- Reduced motion support

## Automated Checks

Run:

```bash
npm run test:a11y:e2e
```

The Playwright Axe suite validates:

- WCAG violations
- Accessible names
- Landmark structure
- Keyboard focus availability

## Senior UX Requirements

- Minimum readable text sizes
- 200% browser zoom support
- Clear focus indicators
- High contrast content
- Reduced animation mode
