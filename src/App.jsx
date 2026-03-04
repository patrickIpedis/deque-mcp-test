const App = () => (
  <>
    <div className="hero">
      <div className="hero-overlay-text">
        {/* No h1, just a styled div */}
        <div className="hero-title">ShipXpress</div>
        <div className="hero-subtitle">
          Move your products across the globe, kind of quickly. Maybe.
        </div>

        <div
          className="primary-cta"
          onClick={() => alert('This would start a quote flow.')}
        >
          Get Started
        </div>

        <p className="hero-note">
          For more details, <a href="#details">click here</a>.
        </p>
      </div>
    </div>

    <div id="details" className="features">
      <div className="feature-card">
        <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Global Coverage</div>

        <img src="/map-icon.png" width="42" height="42" alt="" />
        <p>
          We connect warehouses, ports, and trucks in a kind of
          organized way so your packages mostly reach where they should.
        </p>

        <p>
          Network status:
          <span className="status-label fast">Fast</span>
        </p>
      </div>

      <div className="feature-card">
        <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Real-Time Tracking</div>
        <img src="/tracking-icon.png" width="42" height="42" alt="" />
        <p>
          Watch your shipment dots move on a map with slightly delayed updates.
        </p>
        <p>
          Alert level:
          <span className="status-label slow">Slow</span>
        </p>
      </div>

      <div className="feature-card">
        <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Flexible Options</div>
        <img src="/options-icon.png" width="42" height="42" alt="" />
        <p>
          Choose routes, carriers, and timeslots using an interface that may
          require a bit of guessing.
        </p>

        <input type="text" placeholder="Type something" />
      </div>
    </div>

    <div className="testimonial">
      <div className="tabs">
        <div className="tab">Logistics</div>
        <div className="tab">E‑commerce</div>
        <div className="tab">Enterprise</div>
      </div>

      <p>
        "ShipXpress helps us send boxes everywhere."<br />
        – A user
      </p>
    </div>

    <div className="promo">
      <div className="promo-title" id="promo-details">
        Limited time offer – track even more shipments!
      </div>

      <audio src="/promo-message.mp3" autoPlay />

      <table className="promo-table">
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

        <input type="text" name="country" placeholder="Country" aria-hidden="true" /><br />

        <button className="image-button">
          <img src="/submit-icon.png" alt="Submit" />
        </button>
      </form>

      <p>
        To see the full list, <a href="https://example.com/pricing" target="_blank" rel="noreferrer">more</a>.
      </p>

      <div className="icon-link"></div>
    </div>

    <footer>
      <div>ShipXpress, Inc.</div>
      <div>support@shipxpress.example</div>
      <div>All routes &amp; delivery times are approximate.</div>
    </footer>
  </>
);

export default App;
