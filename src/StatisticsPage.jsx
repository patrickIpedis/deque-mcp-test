import { Link } from 'react-router-dom';
import './StatisticsPage.css';

const axeScanData = {
  pageUrl: 'http://localhost:5173/',
  engine: 'axe-core 4.11',
  totalViolations: 36,
  uniqueRules: 4,
  impact: { critical: 5, serious: 31 },
  rules: [
    {
      id: 'color-contrast',
      description: 'Elements must meet minimum color contrast ratio thresholds',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.11/color-contrast',
      impact: 'serious',
      wcag: '1.4.3 Contrast (AA)',
      tags: ['wcag2aa', 'wcag143'],
      count: 30,
      fixed: true,
      elements: [
        { selector: '.remediated-link', ratio: '3.29:1', expected: '4.5:1' },
        { selector: 'a[href$="accessibility-report"]', ratio: '3.67:1', expected: '4.5:1' },
        { selector: '.primary-cta', ratio: '2.00:1', expected: '4.5:1' },
        { selector: '.feature-card titles & text (9 elements)', ratio: '2.72:1', expected: '4.5:1' },
        { selector: '.fast status label', ratio: '2.98:1', expected: '4.5:1' },
        { selector: '.tab elements (3)', ratio: '2.50:1', expected: '4.5:1' },
        { selector: '.testimonial > p', ratio: '2.80:1', expected: '4.5:1' },
        { selector: '.promo-title', ratio: '1.30:1', expected: '4.5:1' },
        { selector: 'table cells (9 elements)', ratio: '2.84:1', expected: '4.5:1' },
        { selector: '.promo > p', ratio: '2.84:1', expected: '4.5:1' },
        { selector: 'footer divs (3 elements)', ratio: '2.84:1', expected: '4.5:1' },
      ],
    },
    {
      id: 'image-alt',
      description: 'Images must have alternative text',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.11/image-alt',
      impact: 'critical',
      wcag: '1.1.1 Non-text Content (A)',
      tags: ['wcag2a', 'wcag111'],
      count: 4,
      fixed: true,
      elements: [
        { selector: 'img[src$="map-icon.png"]' },
        { selector: 'img[src$="tracking-icon.png"]' },
        { selector: 'img[src$="options-icon.png"]' },
        { selector: 'img[src$="submit-icon.png"]' },
      ],
    },
    {
      id: 'button-name',
      description: 'Buttons must have discernible text',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.11/button-name',
      impact: 'critical',
      wcag: '4.1.2 Name, Role, Value (A)',
      tags: ['wcag2a', 'wcag412'],
      count: 1,
      fixed: true,
      elements: [{ selector: 'button.image-button' }],
    },
    {
      id: 'aria-hidden-focus',
      description: 'aria-hidden elements must not be focusable',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.11/aria-hidden-focus',
      impact: 'serious',
      wcag: '4.1.2 Name, Role, Value (A)',
      tags: ['wcag2a', 'wcag412'],
      count: 1,
      fixed: true,
      elements: [{ selector: 'input[name="country"]' }],
    },
  ],
};

const manualIssues = [
  { id: 1, title: 'Missing `lang` on `<html>`', wcag: '3.1.1 Language of Page', level: 'A', axeDetected: false, axeRule: null, fixed: false, category: 'Structure' },
  { id: 2, title: 'No responsive viewport meta', wcag: '1.4.10 Reflow', level: 'AA', axeDetected: false, axeRule: null, fixed: false, category: 'Structure' },
  { id: 3, title: 'Global removal of focus indicators', wcag: '2.4.7 Focus Visible', level: 'AA', axeDetected: false, axeRule: null, fixed: false, category: 'Keyboard' },
  { id: 4, title: 'Low text contrast (body, hero, CTA, promo)', wcag: '1.4.3 Contrast (Minimum)', level: 'AA', axeDetected: true, axeRule: 'color-contrast', axeCount: 30, fixed: true, category: 'Color' },
  { id: 5, title: 'Small base font size and tight line-height', wcag: '1.4.12 Text Spacing', level: 'Best practice', axeDetected: false, axeRule: null, fixed: false, category: 'Typography' },
  { id: 6, title: 'No top-level heading (`<h1>`)', wcag: '1.3.1 Info and Relationships', level: 'A', axeDetected: false, axeRule: null, fixed: false, category: 'Structure' },
  { id: 7, title: 'Missing landmark regions (`<main>`)', wcag: '1.3.1 / 2.4.1 Bypass Blocks', level: 'A', axeDetected: false, axeRule: null, fixed: false, category: 'Structure' },
  { id: 8, title: 'Background image with text overlay, no solid backing', wcag: '1.4.3 Contrast (Minimum)', level: 'AA', axeDetected: false, axeRule: null, fixed: false, category: 'Color' },
  { id: 9, title: 'Non-semantic `<div>` used as button', wcag: '4.1.2 / 2.1.1 Keyboard', level: 'A', axeDetected: false, axeRule: null, fixed: false, category: 'Keyboard' },
  { id: 10, title: 'Vague and non-descriptive link text', wcag: '2.4.4 Link Purpose', level: 'A', axeDetected: false, axeRule: null, fixed: false, category: 'Content' },
  { id: 11, title: 'Links opening new windows without warning', wcag: '3.2.5 Change on Request', level: 'AAA', axeDetected: false, axeRule: null, fixed: false, category: 'Content' },
  { id: 12, title: 'Images missing `alt` attributes', wcag: '1.1.1 Non-text Content', level: 'A', axeDetected: true, axeRule: 'image-alt', axeCount: 4, fixed: true, category: 'Content' },
  { id: 13, title: 'Color used as the only means of conveying status', wcag: '1.4.1 Use of Color', level: 'A', axeDetected: false, axeRule: null, fixed: false, category: 'Color' },
  { id: 14, title: 'Form fields without labels', wcag: '1.3.1 / 4.1.2 Name, Role, Value', level: 'A', axeDetected: false, axeRule: null, fixed: false, category: 'Forms' },
  { id: 15, title: '`aria-hidden` on focusable input', wcag: '4.1.2 Name, Role, Value', level: 'A', axeDetected: true, axeRule: 'aria-hidden-focus', axeCount: 1, fixed: true, category: 'ARIA' },
  { id: 16, title: 'Image button without alternative text', wcag: '1.1.1 / 4.1.2 Name, Role, Value', level: 'A', axeDetected: true, axeRule: 'button-name', axeCount: 1, fixed: true, category: 'Content' },
  { id: 17, title: 'Tabs built from generic `<div>` elements', wcag: '4.1.2 / 2.1.1 Keyboard', level: 'A', axeDetected: false, axeRule: null, fixed: false, category: 'Keyboard' },
  { id: 18, title: 'Autoplaying audio with no user controls', wcag: '1.4.2 Audio Control', level: 'A', axeDetected: false, axeRule: null, fixed: false, category: 'Media' },
  { id: 19, title: 'Flashing / blinking promo text (> 3 Hz)', wcag: '2.3.1 Three Flashes', level: 'A', axeDetected: false, axeRule: null, fixed: false, category: 'Media' },
  { id: 20, title: 'Table missing proper header markup', wcag: '1.3.1 Info and Relationships', level: 'A', axeDetected: false, axeRule: null, fixed: false, category: 'Structure' },
  { id: 21, title: 'Non-unique IDs (`id="details"` duplicated)', wcag: '4.1.1 Parsing', level: 'A', axeDetected: false, axeRule: null, fixed: false, category: 'Structure' },
  { id: 22, title: 'Icon-only interactive control with no accessible name', wcag: '4.1.2 / 2.5.8 Target Size', level: 'A', axeDetected: false, axeRule: null, fixed: false, category: 'Content' },
  { id: 23, title: 'Footer text low contrast and small size', wcag: '1.4.3 Contrast (Minimum)', level: 'AA', axeDetected: true, axeRule: 'color-contrast', axeCount: 3, fixed: true, category: 'Color' },
];

function Ring({ percent, size = 120, stroke = 10, color, children }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="stat-ring-wrapper" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e2e8f0" strokeWidth={stroke} />
        <circle
          cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke={color} strokeWidth={stroke}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="stat-ring-progress"
        />
      </svg>
      <div className="stat-ring-label">{children}</div>
    </div>
  );
}

function LevelBadge({ level }) {
  const cls = level === 'A' ? 'stat-level-a' : level === 'AA' ? 'stat-level-aa' : level === 'AAA' ? 'stat-level-aaa' : 'stat-level-bp';
  return <span className={`stat-level-badge ${cls}`}>{level}</span>;
}

function DetectionBadge({ detected }) {
  return (
    <span className={`stat-det-badge ${detected ? 'stat-det-yes' : 'stat-det-no'}`}>
      {detected ? 'Detected' : 'Not detected'}
    </span>
  );
}

function FixBadge({ fixed }) {
  if (!fixed) return <span className="stat-fix-badge stat-fix-no">Not fixed</span>;
  return <span className="stat-fix-badge stat-fix-yes">Fixed</span>;
}

function ImpactBadge({ impact }) {
  return <span className={`stat-impact-badge stat-impact-${impact}`}>{impact}</span>;
}

const StatisticsPage = () => {
  const scan = axeScanData;
  const totalViolations = scan.totalViolations;
  const allFixed = scan.rules.every((r) => r.fixed);
  const fixedCount = scan.rules.filter((r) => r.fixed).reduce((sum, r) => sum + r.count, 0);
  const remediationPercent = Math.round((fixedCount / totalViolations) * 100);

  const total = manualIssues.length;
  const detected = manualIssues.filter((i) => i.axeDetected);
  const notDetected = manualIssues.filter((i) => !i.axeDetected);
  const fixed = manualIssues.filter((i) => i.fixed);
  const detectedPercent = Math.round((detected.length / total) * 100);
  const fixedPercent = Math.round((fixed.length / total) * 100);

  const levelA = manualIssues.filter((i) => i.level === 'A');
  const levelAA = manualIssues.filter((i) => i.level === 'AA');
  const levelAAA = manualIssues.filter((i) => i.level === 'AAA');
  const bestPractice = manualIssues.filter((i) => i.level === 'Best practice');

  const detectedByLevel = {
    A: levelA.filter((i) => i.axeDetected).length,
    AA: levelAA.filter((i) => i.axeDetected).length,
    AAA: levelAAA.filter((i) => i.axeDetected).length,
    BP: bestPractice.filter((i) => i.axeDetected).length,
  };

  const categories = [...new Set(manualIssues.map((i) => i.category))];
  const categoryStats = categories.map((cat) => {
    const items = manualIssues.filter((i) => i.category === cat);
    return { name: cat, total: items.length, detected: items.filter((i) => i.axeDetected).length };
  });

  const scanDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="stat-page">
      <nav className="stat-nav" aria-label="Statistics navigation">
        <Link to="/" className="stat-back-link">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to ShipXpress
        </Link>
        <div className="stat-nav-links">
          <Link to="/accessibility-report" className="stat-nav-link">Axe Report</Link>
          <Link to="/remediated" className="stat-nav-link stat-nav-link-green">Remediated Version</Link>
        </div>
      </nav>

      <header className="stat-header">
        <div className="stat-header-content">
          <h1 className="stat-title">Coverage Statistics</h1>
          <p className="stat-subtitle">
            axe MCP server scan results for <strong>{scan.pageUrl}</strong> and coverage analysis
            against <strong>{total} manually reported WCAG violations</strong>
          </p>
          <p className="stat-date">{scanDate} &middot; {scan.engine}</p>
        </div>
      </header>

      {/* ── axe Scan Results ── */}
      <section className="stat-section stat-scan-section" aria-labelledby="scan-heading">
        <h2 id="scan-heading" className="stat-section-title">axe MCP Server Scan Results</h2>
        <p className="stat-section-desc">
          Raw output from the axe MCP server analysis of <code>{scan.pageUrl}</code>
        </p>

        <div className="stat-rings-section">
          <div className="stat-ring-card">
            <Ring percent={100} color="#ef4444" size={140} stroke={12}>
              <span className="stat-ring-number">{totalViolations}</span>
            </Ring>
            <div className="stat-ring-info">
              <span className="stat-ring-title">Total Violations</span>
              <span className="stat-ring-detail">Element-level violations found</span>
            </div>
          </div>

          <div className="stat-ring-card">
            <Ring percent={100} color="#f59e0b" size={140} stroke={12}>
              <span className="stat-ring-number">{scan.uniqueRules}</span>
            </Ring>
            <div className="stat-ring-info">
              <span className="stat-ring-title">Unique Rules</span>
              <span className="stat-ring-detail">Distinct axe rules fired</span>
            </div>
          </div>

          <div className="stat-ring-card">
            <Ring percent={remediationPercent} color="#16a34a" size={140} stroke={12}>
              <span className="stat-ring-number">{remediationPercent}%</span>
            </Ring>
            <div className="stat-ring-info">
              <span className="stat-ring-title">Remediation Rate</span>
              <span className="stat-ring-detail">
                {fixedCount} of {totalViolations} violations fixed
              </span>
            </div>
          </div>
        </div>

        <div className="stat-summary-row">
          <div className="stat-card stat-card-total">
            <span className="stat-card-num">{totalViolations}</span>
            <span className="stat-card-label">Violations</span>
            <span className="stat-card-sub">Across {scan.uniqueRules} rules</span>
          </div>
          <div className="stat-card stat-card-critical">
            <span className="stat-card-num">{scan.impact.critical}</span>
            <span className="stat-card-label">Critical</span>
            <span className="stat-card-sub">button-name, image-alt</span>
          </div>
          <div className="stat-card stat-card-serious">
            <span className="stat-card-num">{scan.impact.serious}</span>
            <span className="stat-card-label">Serious</span>
            <span className="stat-card-sub">color-contrast, aria-hidden-focus</span>
          </div>
          <div className="stat-card stat-card-fixed">
            <span className="stat-card-num">{allFixed ? '100%' : `${remediationPercent}%`}</span>
            <span className="stat-card-label">Remediated</span>
            <span className="stat-card-sub">Verified with re-scan</span>
          </div>
        </div>
      </section>

      {/* ── Violation Breakdown by Rule ── */}
      <section className="stat-section" aria-labelledby="rules-heading">
        <h2 id="rules-heading" className="stat-section-title">Violations by axe Rule</h2>
        <div className="stat-rules-detail-grid">
          {scan.rules.map((rule) => (
            <div key={rule.id} className="stat-rule-detail-card">
              <div className="stat-rule-detail-header">
                <code className="stat-rule-name">{rule.id}</code>
                <div className="stat-rule-badges">
                  <ImpactBadge impact={rule.impact} />
                  <FixBadge fixed={rule.fixed} />
                </div>
              </div>
              <p className="stat-rule-desc">{rule.description}</p>
              <div className="stat-rule-meta">
                <span className="stat-rule-wcag">{rule.wcag}</span>
                <span className="stat-rule-count">{rule.count} violation{rule.count !== 1 ? 's' : ''}</span>
              </div>
              <div className="stat-rule-bar-track">
                <div
                  className="stat-rule-bar-fill"
                  style={{ width: `${(rule.count / totalViolations) * 100}%` }}
                />
              </div>
              {rule.elements && (
                <details className="stat-rule-elements">
                  <summary>Affected elements ({rule.elements.length})</summary>
                  <ul>
                    {rule.elements.map((el, i) => (
                      <li key={i}>
                        <code>{el.selector}</code>
                        {el.ratio && <span className="stat-el-ratio">{el.ratio} (expected {el.expected})</span>}
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Manual Audit Coverage ── */}
      <section className="stat-section" aria-labelledby="coverage-heading">
        <h2 id="coverage-heading" className="stat-section-title">Manual Audit Coverage</h2>
        <p className="stat-section-desc">
          How many of the <strong>{total} manually identified WCAG issues</strong> were detected by the axe MCP server?
        </p>

        <div className="stat-rings-section">
          <div className="stat-ring-card">
            <Ring percent={detectedPercent} color="#3b82f6" size={140} stroke={12}>
              <span className="stat-ring-number">{detectedPercent}%</span>
            </Ring>
            <div className="stat-ring-info">
              <span className="stat-ring-title">Detection Rate</span>
              <span className="stat-ring-detail">{detected.length} of {total} issues detected</span>
            </div>
          </div>

          <div className="stat-ring-card">
            <Ring percent={fixedPercent} color="#8b5cf6" size={140} stroke={12}>
              <span className="stat-ring-number">{fixedPercent}%</span>
            </Ring>
            <div className="stat-ring-info">
              <span className="stat-ring-title">Overall Fix Rate</span>
              <span className="stat-ring-detail">{fixed.length} of {total} total issues fixed</span>
            </div>
          </div>
        </div>

        <div className="stat-summary-row">
          <div className="stat-card stat-card-total">
            <span className="stat-card-num">{total}</span>
            <span className="stat-card-label">Manual Issues</span>
            <span className="stat-card-sub">From expert audit</span>
          </div>
          <div className="stat-card stat-card-detected">
            <span className="stat-card-num">{detected.length}</span>
            <span className="stat-card-label">Detected by axe</span>
            <span className="stat-card-sub">{scan.uniqueRules} unique rules fired</span>
          </div>
          <div className="stat-card stat-card-missed">
            <span className="stat-card-num">{notDetected.length}</span>
            <span className="stat-card-label">Not Detected</span>
            <span className="stat-card-sub">Require manual testing</span>
          </div>
          <div className="stat-card stat-card-fixed">
            <span className="stat-card-num">{fixed.length}</span>
            <span className="stat-card-label">Fixed</span>
            <span className="stat-card-sub">All axe-detected issues</span>
          </div>
        </div>
      </section>

      {/* ── Detection by WCAG level ── */}
      <section className="stat-section" aria-labelledby="by-level-heading">
        <h2 id="by-level-heading" className="stat-section-title">Detection by WCAG Level</h2>
        <div className="stat-level-grid">
          {[
            { label: 'Level A', items: levelA, det: detectedByLevel.A },
            { label: 'Level AA', items: levelAA, det: detectedByLevel.AA },
            { label: 'Level AAA', items: levelAAA, det: detectedByLevel.AAA },
            { label: 'Best Practice', items: bestPractice, det: detectedByLevel.BP },
          ].map((g) => (
            <div key={g.label} className="stat-level-card">
              <span className="stat-level-card-title">{g.label}</span>
              <div className="stat-level-bar-track">
                <div
                  className="stat-level-bar-fill"
                  style={{ width: g.items.length > 0 ? `${(g.det / g.items.length) * 100}%` : '0%' }}
                />
              </div>
              <span className="stat-level-card-detail">{g.det} / {g.items.length} detected</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Detection by category ── */}
      <section className="stat-section" aria-labelledby="by-cat-heading">
        <h2 id="by-cat-heading" className="stat-section-title">Detection by Category</h2>
        <div className="stat-cat-grid">
          {categoryStats.map((c) => (
            <div key={c.name} className="stat-cat-card">
              <div className="stat-cat-header">
                <span className="stat-cat-name">{c.name}</span>
                <span className="stat-cat-ratio">{c.detected}/{c.total}</span>
              </div>
              <div className="stat-cat-bar-track">
                <div
                  className="stat-cat-bar-fill"
                  style={{ width: c.total > 0 ? `${(c.detected / c.total) * 100}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Full comparison table ── */}
      <section className="stat-section" aria-labelledby="table-heading">
        <h2 id="table-heading" className="stat-section-title">Full Issue-by-Issue Comparison</h2>
        <div className="stat-table-wrapper">
          <table className="stat-table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Issue</th>
                <th scope="col">WCAG</th>
                <th scope="col">Level</th>
                <th scope="col">Category</th>
                <th scope="col">axe Detection</th>
                <th scope="col">axe Rule</th>
                <th scope="col">Violations</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {manualIssues.map((issue) => (
                <tr key={issue.id} className={issue.axeDetected ? 'stat-row-detected' : ''}>
                  <td>{issue.id}</td>
                  <td className="stat-td-title">{issue.title}</td>
                  <td className="stat-td-wcag">{issue.wcag}</td>
                  <td><LevelBadge level={issue.level} /></td>
                  <td>{issue.category}</td>
                  <td><DetectionBadge detected={issue.axeDetected} /></td>
                  <td>
                    {issue.axeRule
                      ? <code className="stat-rule-code">{issue.axeRule}</code>
                      : <span className="stat-na">&mdash;</span>}
                  </td>
                  <td className="stat-td-count">
                    {issue.axeCount != null ? issue.axeCount : <span className="stat-na">&mdash;</span>}
                  </td>
                  <td><FixBadge fixed={issue.fixed} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Key takeaway ── */}
      <section className="stat-section stat-takeaway" aria-labelledby="takeaway-heading">
        <h2 id="takeaway-heading" className="stat-section-title">Key Takeaway</h2>
        <div className="stat-takeaway-content">
          <p>
            The <strong>axe MCP server</strong> scan of <code>{scan.pageUrl}</code> found{' '}
            <strong>{totalViolations} element-level violations</strong> across{' '}
            <strong>{scan.uniqueRules} rules</strong> ({scan.impact.critical} critical,{' '}
            {scan.impact.serious} serious). All {totalViolations} violations were successfully
            remediated on <code>/remediated</code> and verified with a follow-up scan showing{' '}
            <strong>0 remaining violations</strong>.
          </p>
          <p>
            These {scan.uniqueRules} rules map to{' '}
            <strong>{detected.length} out of {total}</strong> ({detectedPercent}%) manually
            identified accessibility issues. The remaining{' '}
            <strong>{notDetected.length} issues ({100 - detectedPercent}%)</strong> were not
            caught by automated tooling &mdash; including semantic structure problems (missing
            landmarks, heading hierarchy), keyboard operability gaps (div-as-button, non-ARIA
            tabs), content quality issues (vague link text, color-only indicators), and media
            accessibility (autoplaying audio, seizure-inducing flashing).
          </p>
          <p className="stat-takeaway-conclusion">
            Automated tools are essential but insufficient. A complete accessibility audit
            requires both automated scanning <em>and</em> manual expert review.
          </p>
        </div>
      </section>

      <footer className="stat-footer">
        <p>
          Built with{' '}
          <a href="https://www.deque.com/axe/" target="_blank" rel="noreferrer">axe-core</a>{' '}
          via the axe MCP Server &middot; {scanDate}
        </p>
      </footer>
    </div>
  );
};

export default StatisticsPage;
