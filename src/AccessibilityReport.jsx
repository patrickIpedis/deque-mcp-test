import { Link } from 'react-router-dom';
import './AccessibilityReport.css';

const violations = [
  {
    id: 'aria-hidden-focus',
    rule: 'aria-hidden-focus',
    impact: 'serious',
    wcag: 'WCAG 2.1 Level A — 4.1.2 Name, Role, Value',
    description:
      'Ensures aria-hidden elements are not focusable nor contain focusable elements.',
    instances: [
      {
        element:
          '<input type="text" name="country" placeholder="Country" aria-hidden="true">',
        selector: 'input[name="country"]',
        summary:
          'Focusable content should be disabled or be removed from the DOM.',
      },
    ],
  },
  {
    id: 'color-contrast',
    rule: 'color-contrast',
    impact: 'serious',
    wcag: 'WCAG 2.1 Level AA — 1.4.3 Contrast (Minimum)',
    description:
      'Ensures the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds.',
    instances: [
      {
        element: '<div class="primary-cta">Get Started</div>',
        selector: '.primary-cta',
        fg: '#aaaaaa',
        bg: '#eeeeee',
        ratio: '2.00:1',
        required: '4.5:1',
        fontSize: '12px',
        fontWeight: 'normal',
      },
      {
        element:
          '<div style="font-weight: bold; font-size: 16px;">Global Coverage</div>',
        selector: '.feature-card:nth-child(1) > div',
        fg: '#999999',
        bg: '#fafafa',
        ratio: '2.72:1',
        required: '4.5:1',
        fontSize: '16px',
        fontWeight: 'bold',
      },
      {
        element:
          '<p>We connect warehouses, ports, and trucks in a kind of organized way…</p>',
        selector: '.feature-card:nth-child(1) > p:nth-child(3)',
        fg: '#999999',
        bg: '#fafafa',
        ratio: '2.72:1',
        required: '4.5:1',
        fontSize: '12px',
        fontWeight: 'normal',
      },
      {
        element: '<span class="status-label fast">Fast</span>',
        selector: '.fast',
        fg: '#00aa00',
        bg: '#fafafa',
        ratio: '2.98:1',
        required: '4.5:1',
        fontSize: '12px',
        fontWeight: 'bold',
      },
      {
        element:
          '<div style="font-weight: bold; font-size: 16px;">Real-Time Tracking</div>',
        selector: '.feature-card:nth-child(2) > div',
        fg: '#999999',
        bg: '#fafafa',
        ratio: '2.72:1',
        required: '4.5:1',
        fontSize: '16px',
        fontWeight: 'bold',
      },
      {
        element:
          '<p>Watch your shipment dots move on a map with slightly delayed updates.</p>',
        selector: '.feature-card:nth-child(2) > p:nth-child(3)',
        fg: '#999999',
        bg: '#fafafa',
        ratio: '2.72:1',
        required: '4.5:1',
        fontSize: '12px',
        fontWeight: 'normal',
      },
      {
        element:
          '<div style="font-weight: bold; font-size: 16px;">Flexible Options</div>',
        selector: '.feature-card:nth-child(3) > div',
        fg: '#999999',
        bg: '#fafafa',
        ratio: '2.72:1',
        required: '4.5:1',
        fontSize: '16px',
        fontWeight: 'bold',
      },
      {
        element:
          '<p>Choose routes, carriers, and timeslots using an interface that may require a bit of guessing.</p>',
        selector: '.feature-card:nth-child(3) > p',
        fg: '#999999',
        bg: '#fafafa',
        ratio: '2.72:1',
        required: '4.5:1',
        fontSize: '12px',
        fontWeight: 'normal',
      },
      {
        element: '<div class="tab">Logistics</div>',
        selector: '.tab:nth-child(1)',
        fg: '#999999',
        bg: '#f0f0f0',
        ratio: '2.50:1',
        required: '4.5:1',
        fontSize: '11px',
        fontWeight: 'normal',
      },
      {
        element: '<div class="tab">E‑commerce</div>',
        selector: '.tab:nth-child(2)',
        fg: '#999999',
        bg: '#f0f0f0',
        ratio: '2.50:1',
        required: '4.5:1',
        fontSize: '11px',
        fontWeight: 'normal',
      },
      {
        element: '<div class="tab">Enterprise</div>',
        selector: '.tab:nth-child(3)',
        fg: '#999999',
        bg: '#f0f0f0',
        ratio: '2.50:1',
        required: '4.5:1',
        fontSize: '11px',
        fontWeight: 'normal',
      },
      {
        element:
          '<p>"ShipXpress helps us send boxes everywhere."<br>– A user</p>',
        selector: '.testimonial > p',
        fg: '#999999',
        bg: '#fdfdfd',
        ratio: '2.80:1',
        required: '4.5:1',
        fontSize: '12px',
        fontWeight: 'normal',
      },
      {
        element:
          '<div class="promo-title" id="promo-details">Limited time offer – track even more shipments!</div>',
        selector: '#promo-details',
        fg: '#bbbbbb',
        bg: '#ffffff',
        ratio: '1.91:1',
        required: '4.5:1',
        fontSize: '14px',
        fontWeight: 'bold',
      },
      {
        element: '<td>Plan</td>',
        selector: 'tr:nth-child(1) > td:nth-child(1)',
        fg: '#999999',
        bg: '#ffffff',
        ratio: '2.84:1',
        required: '4.5:1',
        fontSize: '11px',
        fontWeight: 'normal',
      },
      {
        element: '<td>Price</td>',
        selector: 'tr:nth-child(1) > td:nth-child(2)',
        fg: '#999999',
        bg: '#ffffff',
        ratio: '2.84:1',
        required: '4.5:1',
        fontSize: '11px',
        fontWeight: 'normal',
      },
      {
        element: '<td>Best for</td>',
        selector: 'tr:nth-child(1) > td:nth-child(3)',
        fg: '#999999',
        bg: '#ffffff',
        ratio: '2.84:1',
        required: '4.5:1',
        fontSize: '11px',
        fontWeight: 'normal',
      },
      {
        element: '<td>Basic</td>',
        selector: 'tr:nth-child(2) > td:nth-child(1)',
        fg: '#999999',
        bg: '#ffffff',
        ratio: '2.84:1',
        required: '4.5:1',
        fontSize: '11px',
        fontWeight: 'normal',
      },
      {
        element: '<td>$9</td>',
        selector: 'tr:nth-child(2) > td:nth-child(2)',
        fg: '#999999',
        bg: '#ffffff',
        ratio: '2.84:1',
        required: '4.5:1',
        fontSize: '11px',
        fontWeight: 'normal',
      },
      {
        element: '<td>Small boxes</td>',
        selector: 'tr:nth-child(2) > td:nth-child(3)',
        fg: '#999999',
        bg: '#ffffff',
        ratio: '2.84:1',
        required: '4.5:1',
        fontSize: '11px',
        fontWeight: 'normal',
      },
      {
        element: '<td>Pro</td>',
        selector: 'tr:nth-child(3) > td:nth-child(1)',
        fg: '#999999',
        bg: '#ffffff',
        ratio: '2.84:1',
        required: '4.5:1',
        fontSize: '11px',
        fontWeight: 'normal',
      },
      {
        element: '<td>$29</td>',
        selector: 'tr:nth-child(3) > td:nth-child(2)',
        fg: '#999999',
        bg: '#ffffff',
        ratio: '2.84:1',
        required: '4.5:1',
        fontSize: '11px',
        fontWeight: 'normal',
      },
      {
        element: '<td>More boxes</td>',
        selector: 'tr:nth-child(3) > td:nth-child(3)',
        fg: '#999999',
        bg: '#ffffff',
        ratio: '2.84:1',
        required: '4.5:1',
        fontSize: '11px',
        fontWeight: 'normal',
      },
      {
        element:
          '<p>To see the full list, <a href="https://example.com/pricing" target="_blank" rel="noreferrer">more</a>.</p>',
        selector: '.promo > p',
        fg: '#999999',
        bg: '#ffffff',
        ratio: '2.84:1',
        required: '4.5:1',
        fontSize: '13px',
        fontWeight: 'normal',
      },
      {
        element: '<div>ShipXpress, Inc.</div>',
        selector: 'footer > div:nth-child(1)',
        fg: '#999999',
        bg: '#ffffff',
        ratio: '2.84:1',
        required: '4.5:1',
        fontSize: '12px',
        fontWeight: 'normal',
      },
      {
        element: '<div>support@shipxpress.example</div>',
        selector: 'footer > div:nth-child(2)',
        fg: '#999999',
        bg: '#ffffff',
        ratio: '2.84:1',
        required: '4.5:1',
        fontSize: '12px',
        fontWeight: 'normal',
      },
      {
        element: '<div>All routes &amp; delivery times are approximate.</div>',
        selector: 'footer > div:nth-child(3)',
        fg: '#999999',
        bg: '#ffffff',
        ratio: '2.84:1',
        required: '4.5:1',
        fontSize: '12px',
        fontWeight: 'normal',
      },
    ],
  },
];

const impactColors = {
  minor: { bg: '#dbeafe', text: '#1e40af', label: 'Minor' },
  moderate: { bg: '#fef3c7', text: '#92400e', label: 'Moderate' },
  serious: { bg: '#fee2e2', text: '#991b1b', label: 'Serious' },
  critical: { bg: '#fecaca', text: '#7f1d1d', label: 'Critical' },
};

function ImpactBadge({ impact }) {
  const style = impactColors[impact] || impactColors.moderate;
  return (
    <span
      className="report-badge"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {style.label}
    </span>
  );
}

function ContrastSwatch({ color }) {
  return (
    <span className="report-swatch" style={{ backgroundColor: color }}>
      <span className="sr-only">{color}</span>
    </span>
  );
}

function AriaHiddenCard({ violation }) {
  return (
    <section className="report-violation-card" aria-labelledby={`rule-${violation.id}`}>
      <div className="report-violation-header">
        <div>
          <h2 id={`rule-${violation.id}`} className="report-rule-name">
            {violation.rule}
          </h2>
          <p className="report-wcag-ref">{violation.wcag}</p>
        </div>
        <ImpactBadge impact={violation.impact} />
      </div>

      <p className="report-violation-desc">{violation.description}</p>

      <div className="report-instances-count">
        {violation.instances.length} instance{violation.instances.length > 1 ? 's' : ''} found
      </div>

      <ul className="report-instance-list" role="list">
        {violation.instances.map((inst, i) => (
          <li key={i} className="report-instance-item">
            <div className="report-instance-meta">
              <span className="report-label">Selector</span>
              <code className="report-selector">{inst.selector}</code>
            </div>
            <div className="report-instance-meta">
              <span className="report-label">Issue</span>
              <span>{inst.summary}</span>
            </div>
            <div className="report-code-block">
              <span className="report-label">Element</span>
              <pre><code>{inst.element}</code></pre>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ContrastCard({ violation }) {
  return (
    <section className="report-violation-card" aria-labelledby={`rule-${violation.id}`}>
      <div className="report-violation-header">
        <div>
          <h2 id={`rule-${violation.id}`} className="report-rule-name">
            {violation.rule}
          </h2>
          <p className="report-wcag-ref">{violation.wcag}</p>
        </div>
        <ImpactBadge impact={violation.impact} />
      </div>

      <p className="report-violation-desc">{violation.description}</p>

      <div className="report-instances-count">
        {violation.instances.length} instance{violation.instances.length > 1 ? 's' : ''} found
      </div>

      <div className="report-table-wrapper">
        <table className="report-table">
          <thead>
            <tr>
              <th scope="col">Element</th>
              <th scope="col">Foreground</th>
              <th scope="col">Background</th>
              <th scope="col">Ratio</th>
              <th scope="col">Required</th>
              <th scope="col">Font</th>
            </tr>
          </thead>
          <tbody>
            {violation.instances.map((inst, i) => (
              <tr key={i}>
                <td>
                  <code className="report-selector">{inst.selector}</code>
                </td>
                <td>
                  <span className="report-color-cell">
                    <ContrastSwatch color={inst.fg} />
                    <code>{inst.fg}</code>
                  </span>
                </td>
                <td>
                  <span className="report-color-cell">
                    <ContrastSwatch color={inst.bg} />
                    <code>{inst.bg}</code>
                  </span>
                </td>
                <td>
                  <span className="report-ratio-fail">{inst.ratio}</span>
                </td>
                <td>{inst.required}</td>
                <td>
                  {inst.fontSize} / {inst.fontWeight}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const AccessibilityReport = () => {
  const totalInstances = violations.reduce(
    (sum, v) => sum + v.instances.length,
    0
  );
  const scanDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="report-page">
      <nav className="report-nav" aria-label="Report navigation">
        <Link to="/" className="report-back-link">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to ShipXpress
        </Link>
      </nav>

      <header className="report-header">
        <div className="report-header-content">
          <h1 className="report-title">Accessibility Audit Report</h1>
          <p className="report-subtitle">
            Automated scan of{' '}
            <code className="report-url">http://localhost:5173/</code>
          </p>
          <p className="report-date">Scanned on {scanDate}</p>
        </div>

        <div className="report-summary-cards">
          <div className="report-summary-card report-summary-rules">
            <span className="report-summary-number">{violations.length}</span>
            <span className="report-summary-label">Rules violated</span>
          </div>
          <div className="report-summary-card report-summary-instances">
            <span className="report-summary-number">{totalInstances}</span>
            <span className="report-summary-label">Total instances</span>
          </div>
          <div className="report-summary-card report-summary-impact">
            <span className="report-summary-number">Serious</span>
            <span className="report-summary-label">Highest impact</span>
          </div>
        </div>
      </header>

      <main className="report-main">
        <div className="report-toc">
          <h2 className="report-toc-title">Violations</h2>
          <ol className="report-toc-list">
            {violations.map((v) => (
              <li key={v.id}>
                <a href={`#rule-${v.id}`} className="report-toc-link">
                  <code>{v.rule}</code>
                  <span className="report-toc-count">
                    {v.instances.length} instance{v.instances.length > 1 ? 's' : ''}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        {violations.map((v) =>
          v.id === 'color-contrast' ? (
            <ContrastCard key={v.id} violation={v} />
          ) : (
            <AriaHiddenCard key={v.id} violation={v} />
          )
        )}
      </main>

      <footer className="report-footer">
        <p>
          Generated with{' '}
          <a
            href="https://www.deque.com/axe/"
            target="_blank"
            rel="noreferrer"
          >
            axe-core
          </a>{' '}
          via the axe MCP Server
        </p>
      </footer>
    </div>
  );
};

export default AccessibilityReport;
