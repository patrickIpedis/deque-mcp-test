import { Link } from 'react-router-dom';
import './StatisticsPage.css';

const allIssues = [
  {
    id: 1,
    title: 'Missing `lang` on `<html>`',
    wcag: '3.1.1 Language of Page',
    level: 'A',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Structure',
  },
  {
    id: 2,
    title: 'No responsive viewport meta',
    wcag: '1.4.10 Reflow',
    level: 'AA',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Structure',
  },
  {
    id: 3,
    title: 'Global removal of focus indicators',
    wcag: '2.4.7 Focus Visible',
    level: 'AA',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Keyboard',
  },
  {
    id: 4,
    title: 'Low text contrast (body, hero, CTA, promo)',
    wcag: '1.4.3 Contrast (Minimum)',
    level: 'AA',
    axeDetected: true,
    axeRule: 'color-contrast',
    fixed: true,
    category: 'Color',
  },
  {
    id: 5,
    title: 'Small base font size and tight line-height',
    wcag: '1.4.12 Text Spacing',
    level: 'Best practice',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Typography',
  },
  {
    id: 6,
    title: 'No top-level heading (`<h1>`)',
    wcag: '1.3.1 Info and Relationships',
    level: 'A',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Structure',
  },
  {
    id: 7,
    title: 'Missing landmark regions (`<main>`)',
    wcag: '1.3.1 / 2.4.1 Bypass Blocks',
    level: 'A',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Structure',
  },
  {
    id: 8,
    title: 'Background image with text overlay, no solid backing',
    wcag: '1.4.3 Contrast (Minimum)',
    level: 'AA',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Color',
  },
  {
    id: 9,
    title: 'Non-semantic `<div>` used as button',
    wcag: '4.1.2 / 2.1.1 Keyboard',
    level: 'A',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Keyboard',
  },
  {
    id: 10,
    title: 'Vague and non-descriptive link text',
    wcag: '2.4.4 Link Purpose',
    level: 'A',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Content',
  },
  {
    id: 11,
    title: 'Links opening new windows without warning',
    wcag: '3.2.5 Change on Request',
    level: 'AAA',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Content',
  },
  {
    id: 12,
    title: 'Images missing `alt` attributes',
    wcag: '1.1.1 Non-text Content',
    level: 'A',
    axeDetected: true,
    axeRule: 'image-alt',
    fixed: true,
    category: 'Content',
  },
  {
    id: 13,
    title: 'Color used as the only means of conveying status',
    wcag: '1.4.1 Use of Color',
    level: 'A',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Color',
  },
  {
    id: 14,
    title: 'Form fields without labels',
    wcag: '1.3.1 / 4.1.2 Name, Role, Value',
    level: 'A',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Forms',
  },
  {
    id: 15,
    title: '`aria-hidden` on focusable input',
    wcag: '4.1.2 Name, Role, Value',
    level: 'A',
    axeDetected: true,
    axeRule: 'aria-hidden-focus',
    fixed: true,
    category: 'ARIA',
  },
  {
    id: 16,
    title: 'Image button without alternative text',
    wcag: '1.1.1 / 4.1.2 Name, Role, Value',
    level: 'A',
    axeDetected: true,
    axeRule: 'button-name',
    fixed: true,
    category: 'Content',
  },
  {
    id: 17,
    title: 'Tabs built from generic `<div>` elements',
    wcag: '4.1.2 / 2.1.1 Keyboard',
    level: 'A',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Keyboard',
  },
  {
    id: 18,
    title: 'Autoplaying audio with no user controls',
    wcag: '1.4.2 Audio Control',
    level: 'A',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Media',
  },
  {
    id: 19,
    title: 'Flashing / blinking promo text (> 3 Hz)',
    wcag: '2.3.1 Three Flashes',
    level: 'A',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Media',
  },
  {
    id: 20,
    title: 'Table missing proper header markup',
    wcag: '1.3.1 Info and Relationships',
    level: 'A',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Structure',
  },
  {
    id: 21,
    title: 'Non-unique IDs (`id="details"` duplicated)',
    wcag: '4.1.1 Parsing',
    level: 'A',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Structure',
  },
  {
    id: 22,
    title: 'Icon-only interactive control with no accessible name',
    wcag: '4.1.2 / 2.5.8 Target Size',
    level: 'A',
    axeDetected: false,
    axeRule: null,
    fixed: false,
    category: 'Content',
  },
  {
    id: 23,
    title: 'Footer text low contrast and small size',
    wcag: '1.4.3 Contrast (Minimum)',
    level: 'AA',
    axeDetected: true,
    axeRule: 'color-contrast',
    fixed: true,
    category: 'Color',
  },
];

function Ring({ percent, size = 120, stroke = 10, color, children }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="stat-ring-wrapper" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
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
  const cls =
    level === 'A'
      ? 'stat-level-a'
      : level === 'AA'
        ? 'stat-level-aa'
        : level === 'AAA'
          ? 'stat-level-aaa'
          : 'stat-level-bp';
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

const StatisticsPage = () => {
  const total = allIssues.length;
  const detected = allIssues.filter((i) => i.axeDetected);
  const notDetected = allIssues.filter((i) => !i.axeDetected);
  const fixed = allIssues.filter((i) => i.fixed);
  const detectedPercent = Math.round((detected.length / total) * 100);
  const fixedPercent = Math.round((fixed.length / total) * 100);
  const fixedOfDetected = detected.length > 0 ? Math.round((fixed.length / detected.length) * 100) : 0;

  const levelA = allIssues.filter((i) => i.level === 'A');
  const levelAA = allIssues.filter((i) => i.level === 'AA');
  const levelAAA = allIssues.filter((i) => i.level === 'AAA');
  const bestPractice = allIssues.filter((i) => i.level === 'Best practice');

  const detectedByLevel = {
    A: levelA.filter((i) => i.axeDetected).length,
    AA: levelAA.filter((i) => i.axeDetected).length,
    AAA: levelAAA.filter((i) => i.axeDetected).length,
    BP: bestPractice.filter((i) => i.axeDetected).length,
  };

  const categories = [...new Set(allIssues.map((i) => i.category))];
  const categoryStats = categories.map((cat) => {
    const items = allIssues.filter((i) => i.category === cat);
    return {
      name: cat,
      total: items.length,
      detected: items.filter((i) => i.axeDetected).length,
    };
  });

  const axeRules = [...new Set(detected.map((i) => i.axeRule))];

  const scanDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

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
          <Link to="/accessibility-report" className="stat-nav-link">
            Axe Report
          </Link>
          <Link to="/remediated" className="stat-nav-link stat-nav-link-green">
            Remediated Version
          </Link>
        </div>
      </nav>

      <header className="stat-header">
        <div className="stat-header-content">
          <h1 className="stat-title">Coverage Statistics</h1>
          <p className="stat-subtitle">
            Comparing <strong>axe MCP server</strong> automated detection against the{' '}
            <strong>23 manually reported WCAG violations</strong>
          </p>
          <p className="stat-date">{scanDate} &middot; axe-core 4.11</p>
        </div>
      </header>

      {/* ── Ring charts ── */}
      <section className="stat-rings-section" aria-label="Detection and fix rates">
        <div className="stat-ring-card">
          <Ring percent={detectedPercent} color="#3b82f6" size={140} stroke={12}>
            <span className="stat-ring-number">{detectedPercent}%</span>
          </Ring>
          <div className="stat-ring-info">
            <span className="stat-ring-title">Detection Rate</span>
            <span className="stat-ring-detail">
              {detected.length} of {total} issues detected by axe
            </span>
          </div>
        </div>

        <div className="stat-ring-card">
          <Ring percent={fixedOfDetected} color="#16a34a" size={140} stroke={12}>
            <span className="stat-ring-number">{fixedOfDetected}%</span>
          </Ring>
          <div className="stat-ring-info">
            <span className="stat-ring-title">Fix Rate (of detected)</span>
            <span className="stat-ring-detail">
              {fixed.length} of {detected.length} detected issues fixed
            </span>
          </div>
        </div>

        <div className="stat-ring-card">
          <Ring percent={fixedPercent} color="#8b5cf6" size={140} stroke={12}>
            <span className="stat-ring-number">{fixedPercent}%</span>
          </Ring>
          <div className="stat-ring-info">
            <span className="stat-ring-title">Overall Fix Rate</span>
            <span className="stat-ring-detail">
              {fixed.length} of {total} total issues fixed
            </span>
          </div>
        </div>
      </section>

      {/* ── Summary cards ── */}
      <section className="stat-summary-row" aria-label="Summary numbers">
        <div className="stat-card stat-card-total">
          <span className="stat-card-num">{total}</span>
          <span className="stat-card-label">Total Issues</span>
          <span className="stat-card-sub">From manual audit</span>
        </div>
        <div className="stat-card stat-card-detected">
          <span className="stat-card-num">{detected.length}</span>
          <span className="stat-card-label">Detected by axe</span>
          <span className="stat-card-sub">{axeRules.length} unique rules fired</span>
        </div>
        <div className="stat-card stat-card-missed">
          <span className="stat-card-num">{notDetected.length}</span>
          <span className="stat-card-label">Not Detected</span>
          <span className="stat-card-sub">Require manual testing</span>
        </div>
        <div className="stat-card stat-card-fixed">
          <span className="stat-card-num">{fixed.length}</span>
          <span className="stat-card-label">Fixed</span>
          <span className="stat-card-sub">Verified with re-scan</span>
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
                  style={{
                    width: g.items.length > 0 ? `${(g.det / g.items.length) * 100}%` : '0%',
                  }}
                />
              </div>
              <span className="stat-level-card-detail">
                {g.det} / {g.items.length} detected
              </span>
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
                <span className="stat-cat-ratio">
                  {c.detected}/{c.total}
                </span>
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

      {/* ── axe rules that fired ── */}
      <section className="stat-section" aria-labelledby="axe-rules-heading">
        <h2 id="axe-rules-heading" className="stat-section-title">
          axe Rules That Detected Issues
        </h2>
        <div className="stat-rules-grid">
          {axeRules.map((rule) => {
            const mapped = allIssues.filter((i) => i.axeRule === rule);
            return (
              <div key={rule} className="stat-rule-card">
                <code className="stat-rule-name">{rule}</code>
                <span className="stat-rule-maps">
                  Covers {mapped.length} manual issue{mapped.length > 1 ? 's' : ''}:{' '}
                  {mapped.map((m) => `#${m.id}`).join(', ')}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Full comparison table ── */}
      <section className="stat-section" aria-labelledby="table-heading">
        <h2 id="table-heading" className="stat-section-title">
          Full Issue-by-Issue Comparison
        </h2>
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
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {allIssues.map((issue) => (
                <tr key={issue.id} className={issue.axeDetected ? 'stat-row-detected' : ''}>
                  <td>{issue.id}</td>
                  <td className="stat-td-title">{issue.title}</td>
                  <td className="stat-td-wcag">{issue.wcag}</td>
                  <td>
                    <LevelBadge level={issue.level} />
                  </td>
                  <td>{issue.category}</td>
                  <td>
                    <DetectionBadge detected={issue.axeDetected} />
                  </td>
                  <td>
                    {issue.axeRule ? (
                      <code className="stat-rule-code">{issue.axeRule}</code>
                    ) : (
                      <span className="stat-na">—</span>
                    )}
                  </td>
                  <td>
                    <FixBadge fixed={issue.fixed} />
                  </td>
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
            The <strong>axe MCP server</strong> automatically detected{' '}
            <strong>{detected.length} out of {total}</strong> ({detectedPercent}%) accessibility
            issues through <strong>{axeRules.length} rules</strong> — and all detected issues were
            successfully remediated and verified with a follow-up scan.
          </p>
          <p>
            However, <strong>{notDetected.length} issues ({100 - detectedPercent}%)</strong> were not
            caught by automated tooling. These include semantic structure problems (missing landmarks,
            heading hierarchy), keyboard operability gaps (div-as-button, non-ARIA tabs), content
            quality issues (vague link text, color-only indicators), and media accessibility
            (autoplaying audio, seizure-inducing flashing).
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
          <a href="https://www.deque.com/axe/" target="_blank" rel="noreferrer">
            axe-core
          </a>{' '}
          via the axe MCP Server &middot; {scanDate}
        </p>
      </footer>
    </div>
  );
};

export default StatisticsPage;
