import HomeContent from '../Home'
import './HomePage.css'

/**
 * HomePage - Wrapper for the main website content
 * Shows after countdown reaches zero with celebration effects
 */
export default function HomePage({ forceUnlocked = false }) {
  return (
    <div className="home-page">
      <HomeContent forceUnlocked={forceUnlocked} />
    </div>
  )
}
