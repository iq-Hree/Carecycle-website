import type { ReactNode } from 'react'

type PhoneFrameProps = {
  children: ReactNode
  label: string
  className?: string
}

export function PhoneFrame({ children, label, className = '' }: PhoneFrameProps) {
  return (
    <div className={`phone-frame ${className}`.trim()} role="img" aria-label={label}>
      <div className="phone-frame__notch" aria-hidden="true" />
      <div className="phone-frame__screen">{children}</div>
    </div>
  )
}

function ScreenHeader({ back = false }: { back?: boolean }) {
  return (
    <div className="screen-header">
      {back ? <span className="screen-header__back" aria-hidden="true">‹</span> : <span className="screen-header__brand">CARE CYCLE</span>}
      {!back && <span className="screen-header__mark" aria-hidden="true">✦</span>}
      {back && <span className="screen-header__eyebrow">PRIVATE LOG</span>}
    </div>
  )
}

const checkInRows = [
  { label: 'Mood', options: ['Great', 'Good', 'Okay', 'Low'], active: 0 },
  { label: 'Energy', options: ['High', 'Good', 'Moderate', 'Low', 'Very low'], active: 2 },
  { label: 'Pain', options: ['None', 'Mild', 'Moderate', 'Strong', 'Severe'], active: 0 },
]

function MockChips({ options, active = -1 }: { options: string[]; active?: number }) {
  return (
    <div className="mock-chips">
      {options.map((option, index) => (
        <span className={`mock-chip ${index === active ? 'mock-chip--selected' : ''}`} key={option}>
          {option}
        </span>
      ))}
    </div>
  )
}

function CompactCheckIn() {
  return (
    <div className="screen-card screen-card--checkin">
      <div className="screen-card__heading-row">
        <div>
          <h3>How are you feeling?</h3>
          <p>Only add what feels useful.</p>
        </div>
        <span className="tiny-heart" aria-hidden="true">♡</span>
      </div>
      {checkInRows.map((row) => (
        <div className="mock-field" key={row.label}>
          <span className="mock-label">{row.label}</span>
          <MockChips options={row.options} active={row.active} />
        </div>
      ))}
      <div className="mock-field">
        <span className="mock-label">A note</span>
        <div className="mock-note">Anything you'd like to remember?</div>
      </div>
      <div className="mock-save">Save check-in</div>
    </div>
  )
}

export function TodayScreen() {
  return (
    <div className="app-screen app-screen--today">
      <ScreenHeader />
      <div className="screen-status"><span>9:41</span><span>● ◔ ▰</span></div>
      <p className="screen-greeting">Good evening,<br />welcome to CareCycle</p>
      <div className="cycle-card">
        <span className="cycle-card__badge">Cycle day 22</span>
        <span className="cycle-card__flower" aria-hidden="true">✿</span>
        <h3>Your cycle, at your pace</h3>
        <p>Next period <strong>estimated</strong> around 7 Oct 2026.</p>
        <span className="cycle-card__link">View calendar <b>→</b></span>
      </div>
      <CompactCheckIn />
      <div className="screen-emergency">
        <div><b>Emergency</b><p>Call your saved emergency contact using your phone's normal call function.</p></div>
        <span>Add emergency number</span>
      </div>
      <div className="screen-support-row">
        <span>Ask for support</span>
        <span>Trust Circle</span>
      </div>
      <div className="screen-bottom-nav" aria-hidden="true"><b>⌂</b><b>＋</b><b>☷</b><b>♡</b></div>
    </div>
  )
}

export function TrackScreen() {
  return (
    <div className="app-screen app-screen--track">
      <ScreenHeader back />
      <div className="screen-status"><span>9:41</span><span>● ◔ ▰</span></div>
      <h2 className="screen-title">Track</h2>
      <div className="screen-card period-card">
        <h3>Log period</h3>
        <p>Record the first and final day of actual bleeding.</p>
        <div className="date-pair">
          <div><span>Period start</span><b>25 / 09 / 2026</b></div>
          <div><span>Period end <small>optional</small></span><b> </b></div>
        </div>
        <span className="mock-label">Flow</span>
        <MockChips options={['Light', 'Medium', 'Heavy']} active={1} />
        <div className="mock-save mock-save--small">Save period</div>
      </div>
      <div className="screen-card">
        <div className="screen-card__heading-row">
          <div><h3>Today's check-in</h3><p>Only add what feels useful.</p></div>
          <span className="tiny-heart" aria-hidden="true">♡</span>
        </div>
        {checkInRows.map((row) => (
          <div className="mock-field" key={row.label}>
            <span className="mock-label">{row.label}</span>
            <MockChips options={row.options} active={row.active} />
          </div>
        ))}
        <div className="mock-field">
          <span className="mock-label">Symptoms</span>
          <MockChips options={['Cramps', 'Headache', 'Bloating', 'Fatigue', 'Nausea', 'Acne']} active={0} />
        </div>
        <div className="mock-field"><span className="mock-label">A note</span><div className="mock-note">Anything you'd like to remember?</div></div>
        <div className="mock-save mock-save--small">Save check-in</div>
      </div>
      <div className="history-block">
        <h3>Period history</h3>
        {['4 Sept 2026 – 9 Sept 2026', '6 Aug 2026 – 10 Aug 2026', '1 Jul 2026 – 7 Jul 2026'].map((date) => (
          <div className="history-row" key={date}><span>{date}</span><small>Remove</small></div>
        ))}
      </div>
    </div>
  )
}

const calendarDays = ['', '', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '', '', '']

export function CalendarScreen() {
  return (
    <div className="app-screen app-screen--calendar">
      <ScreenHeader />
      <div className="screen-status"><span>9:41</span><span>● ◔ ▰</span></div>
      <h2 className="screen-title">Calendar</h2>
      <div className="screen-card calendar-card">
        <div className="calendar-card__top"><span>‹</span><strong>September 2026</strong><span>›</span></div>
        <div className="mock-calendar">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => <small key={`${day}-${index}`}>{day}</small>)}
          {calendarDays.map((day, index) => {
            const isEmpty = day === ''
            const isActual = ['6', '7', '8', '9'].includes(day)
            const isEstimated = ['4', '5'].includes(day)
            const isCheckin = day === '25'
            return <span className={`mock-calendar__day ${isActual ? 'is-actual' : ''} ${isEstimated ? 'is-estimated' : ''} ${isCheckin ? 'is-checkin' : ''} ${isEmpty ? 'is-empty' : ''}`} key={`${day}-${index}`}>{day}{isCheckin && <i />}</span>
          })}
        </div>
        <div className="mock-legend"><span><i className="legend-dot legend-dot--actual" />Actual period</span><span><i className="legend-dot legend-dot--estimated" />Estimated</span><span><i className="legend-dot legend-dot--checkin" />Check-in</span></div>
      </div>
    </div>
  )
}

export function InsightsScreen() {
  return (
    <div className="app-screen app-screen--insights">
      <ScreenHeader />
      <div className="screen-status"><span>9:41</span><span>● ◔ ▰</span></div>
      <h2 className="screen-title">Insights</h2>
      <p className="screen-intro">A gentle look at what you&apos;ve logged.</p>
      <div className="insight-mini-grid">
        <div><small>Average cycle</small><strong>33 days</strong></div>
        <div><small>Median cycle</small><strong>33 days</strong></div>
        <div><small>Cycle range</small><strong>29–36 days</strong></div>
        <div><small>Variability</small><strong>3.5 days</strong></div>
      </div>
      <div className="screen-card recent-card">
        <h3>Recent entries</h3>
        <div className="mini-bars">{[64, 48, 58, 61, 52].map((height, index) => <i key={height + index} style={{ height: `${height}%` }} />)}</div>
        <small>Based only on the data you&apos;ve logged. These are not medical conclusions.</small>
      </div>
    </div>
  )
}

export function TrustCircleScreen() {
  return (
    <div className="app-screen app-screen--trust">
      <ScreenHeader back />
      <div className="screen-status"><span>9:41</span><span>● ◔ ▰</span></div>
      <h2 className="screen-title">Trust Circle</h2>
      <p className="screen-intro">Keep up to 5 people close.</p>
      <div className="trusted-list">
        {['Mum', 'Ari', 'Sam'].map((name, index) => <div className="trusted-row" key={name}><span className="trusted-avatar">{name.slice(0, 1)}</span><span><b>{name}</b><small>{index === 0 ? 'Family' : 'Friend'} · WhatsApp</small></span><i>›</i></div>)}
      </div>
      <div className="add-person-card"><span className="add-person-card__plus">＋</span><b>Add person</b><small>Name, relationship, contact</small></div>
    </div>
  )
}

export function AddPersonScreen() {
  return (
    <div className="app-screen app-screen--add-person">
      <ScreenHeader back />
      <div className="screen-status"><span>9:41</span><span>● ◔ ▰</span></div>
      <h2 className="screen-title">Add trusted person</h2>
      <div className="person-form">
        <label>Name<span>Alex</span></label>
        <label>Relationship<span>Friend</span></label>
        <div className="form-pair"><label>Country code<span>+44</span></label><label>Mobile number<span>7700 900000</span></label></div>
        <label>Email <small>optional</small><span>alex@example.com</span></label>
        <div className="method-label">Preferred communication method</div>
        <div className="method-choice"><span>◉</span> WhatsApp</div>
        <div className="form-actions"><span>Cancel</span><b>Save person</b></div>
      </div>
    </div>
  )
}
