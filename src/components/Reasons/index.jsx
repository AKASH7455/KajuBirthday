import './Reasons.css'

export default function Reasons() {
  const reasons = [
    "❤️ Kyunki tumhari muskaan meri favourite cheez hai.",
    "🥰 Kyunki tumhare saath har chhota sa moment bhi special ban jaata hai.",
    "🤍 Kyunki tumhara care karne ka tareeka dil ko sukoon deta hai.",
    "🌸 Kyunki tum mujhe bina judge kiye samajhne ki koshish karti ho.",
    "✨ Kyunki tum meri life me khushiyan lekar aayi ho.",
    "💖 Kyunki tumhari hasi dekhkar mera din ban jaata hai.",
    "🌹 Kyunki tumhare saath future sochna accha lagta hai.",
    "🫶 Kyunki tum bilkul waise hi ho jaisi tum ho, aur wahi mujhe sabse zyada pasand hai.",
    "🎀 Kyunki tum sirf meri girlfriend nahi, meri best friend bhi ho.",
    "♾️ Aur sabse bada reason... Kyunki tum  sirf meri ho kaju. ❤️"
  ]

  return (
    <section className="reasons">
      <h2>Why You? ❤️</h2>

      <div className="list">
        {reasons.map((reason, i) => (
          <div key={i} className="reason-item">
            {reason}
          </div>
        ))}
      </div>
    </section>
  )
}