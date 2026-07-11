import { FaArrowRight } from 'react-icons/fa'
import './ContinueButton.css'

export default function ContinueButton({ onClick, title }) {
  return (
    <button className="continue-button" onClick={onClick}>
      <span className="button-text">{title || 'Continue'}</span>
      <span className="button-icon"><FaArrowRight /></span>
    </button>
  )
}
