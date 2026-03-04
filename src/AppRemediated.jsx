import { Link } from 'react-router-dom';
import './AppRemediated.css';

const AppRemediated = () => (
  <>
    <nav className="rx-topbar" aria-label="Site navigation">
      <Link to="/" className="rx-back-link">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to original site
      </Link>
      <span className="rx-topbar-badge">Remediated version</span>
    </nav>

    <div className="rx-hero">
      <div className="rx-hero-overlay-text">
        <div className="rx-hero-title">ShipXpress</div>
        <div className="rx-hero-subtitle">
          Move your products across the globe, kind of quickly. Maybe.
        </div>

        <div
          className="rx-primary-cta"
          onClick={() => alert('This would start a quote flow.')}
        >
          Get Started
        </div>

        <p className="rx-hero-note">
          For more details, <a href="#details">click here</a>.
        </p>
      </div>
    </div>

    <div id="details" className="rx-features">
      <div className="rx-feature-card">
        <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Global Coverage</div>

        <img src="/map-icon.png" width="42" height="42" alt="" />
        <p>
          We connect warehouses, ports, and trucks in a kind of
          organized way so your packages mostly reach where they should.
        </p>

        <p>
          Network status:
          <span className="rx-status-label rx-fast">Fast</span>
        </p>
      </div>

      <div className="rx-feature-card">
        <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Real-Time Tracking</div>
        <img src="/tracking-icon.png" width="42" height="42" alt="" />
        <p>
          Watch your shipment dots move on a map with slightly delayed updates.
        </p>
        <p>
          Alert level:
          <span className="rx-status-label rx-slow">Slow</span>
        </p>
      </div>

      <div className="rx-feature-card">
        <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Flexible Options</div>
        <img src="/options-icon.png" width="42" height="42" alt="" />
        <p>
          Choose routes, carriers, and timeslots using an interface that may
          require a bit of guessing.
        </p>

        <input type="text" placeholder="Type something" />
      </div>
    </div>

    <div className="rx-testimonial">
      <div className="rx-tabs">
        <div className="rx-tab">Logistics</div>
        <div className="rx-tab">E‑commerce</div>
        <div className="rx-tab">Enterprise</div>
      </div>

      <p>
        "ShipXpress helps us send boxes everywhere."<br />
        – A user
      </p>
    </div>

    <div className="rx-promo">
      <div className="rx-promo-title" id="promo-details">
        Limited time offer – track even more shipments!
      </div>

      <audio src="/promo-message.mp3" autoPlay />

      <table className="rx-promo-table">
        <tbody>
          <tr>
            <td>Plan</td>
            <td>Price</td>
            <td>Best for</td>
          </tr>
          <tr>
            <td>Basic</td>
            <td>$9</td>
            <td>Small boxes</td>
          </tr>
          <tr>
            <td>Pro</td>
            <td>$29</td>
            <td>More boxes</td>
          </tr>
        </tbody>
      </table>

      <form action="#" method="post">
        <input type="text" name="company" placeholder="Company name" /><br />
        <input type="email" name="email" placeholder="Email" /><br />

        {/* Remediated: added disabled so aria-hidden input is not focusable */}
        <input type="text" name="country" placeholder="Country" aria-hidden="true" disabled /><br />

        <button className="rx-image-button">
          <img src="/submit-icon.png" alt="Submit" />
        </button>
      </form>

      <p>
        To see the full list, <a href="https://example.com/pricing" target="_blank" rel="noreferrer">more</a>.
      </p>

      <div className="rx-icon-link"></div>
    </div>

    <footer className="rx-footer">
      <div>ShipXpress, Inc.</div>
      <div>support@shipxpress.example</div>
      <div>All routes &amp; delivery times are approximate.</div>
    </footer>
  </>
);

export default AppRemediated;
