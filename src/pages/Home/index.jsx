import { useState } from 'react'
import Hero from '../../components/Hero'
import Timeline from '../../components/Timeline'
import Gallery from '../../components/Gallery'
import LoveLetter from '../../components/LoveLetter'
import Reasons from '../../components/Reasons'
import Wishes from '../../components/Wishes'
import Dreams from '../../components/Dreams'
import Promises from '../../components/Promises'
import Surprise from '../../components/Surprise'
import Footer from '../../components/Footer'
import ContinueButton from '../../components/common/ContinueButton'

const storyChapters = [
  { component: Hero, name: 'Welcome', title: "Let's Celebrate 🎂" },
  { component: Wishes, name: 'Birthday Celebration', title: 'Read My Heart 💌' },
  { component: LoveLetter, name: 'Love Letter', title: 'Our Journey 🌸' },
  { component: Timeline, name: 'Relationship Timeline', title: 'Relive These Moments 📸' },
  { component: Gallery, name: 'Memory Gallery', title: 'Why You? ❤️' },
  { component: Reasons, name: 'Reasons I Love You', title: 'Imagine Our Future ✨' },
  { component: Dreams, name: 'Our Dreams', title: 'Trust Me 🤍' },
  { component: Promises, name: 'My Promises', title: 'Open Your Gift 🎁' },
  { component: Surprise, name: 'Final Surprise', title: 'Forever Together 🌙' },
  { component: Footer, name: 'Ending', title: null }
]

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState(0)

  const handleContinue = () => {
    if (currentChapter < storyChapters.length - 1) {
      setCurrentChapter(currentChapter + 1)
    }
  }

  const CurrentChapter = storyChapters[currentChapter].component
  const isLastChapter = currentChapter === storyChapters.length - 1
  const nextChapterTitle = storyChapters[currentChapter]?.title
  const showBottomButton = currentChapter !== 0 && !isLastChapter

  return (
    <div className="story-container">
      <div className={`chapter chapter-${currentChapter}`}>
        <CurrentChapter onContinue={handleContinue} ctaTitle={nextChapterTitle} />
      </div>
      
      {showBottomButton && (
        <div className="continue-container">
          <ContinueButton onClick={handleContinue} title={nextChapterTitle} />
        </div>
      )}
    </div>
  )
}
