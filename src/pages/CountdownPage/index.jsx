import Countdown from '../../components/Countdown'
import FloatingHearts from '../../components/common/FloatingHearts'
import Sparkles from '../../components/common/Sparkles'
import RosePetals from '../../components/common/RosePetals'
import './CountdownPage.css'

/**
 * CountdownPage - Premium countdown gate for the birthday website
 * Shows only the countdown before unlock date (26 August)
 * Automatically unlocks when countdown reaches zero
 */
export default function CountdownPage() {
  return (
    <div className="countdown-page">
      {/* Background Effects */}
      <FloatingHearts />
      <Sparkles />
      <RosePetals />

      {/* Main Content */}
      <div className="countdown-content">
        <div className="glass-card">
          <div className="badge">
            <span>🥰Coming Soon</span>
          </div>

          <h1 className="title">
            A Special Surprise
            <span className="title-highlight">Awaits</span>
          </h1>

          <p className="subtitle">
            Something magical is being prepared just for you.
            The countdown has begun for an unforgettable moment.
          </p>

          <Countdown />

          <p className="footer-text">
            Unlocking on 26 August at 12:00 AM
          </p>
        </div>
      </div>
    </div>
  )
}
