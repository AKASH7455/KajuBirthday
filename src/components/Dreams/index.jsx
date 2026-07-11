import './Dreams.css'

export default function Dreams() {
  const dreams = [
    "🏡 Ek pyara sa ghar, jahan har din tumhari muskaan se shuru ho.",
    "✈️ Saath me naye shehron aur khoobsurat jagahon ki yaadein banana.",
    "☕ Har subah ek cup chai ya coffee ke saath tumhare saath baithna.",
    "📸 Har saal aur bhi khoobsurat memories aur photos collect karna.",
    "🌸 Har mushkil aur har khushi me ek dusre ka haath kabhi na chhodna.",
    "🎂 Har birthday tumhare saath aur bhi special tareeke se celebrate karna.",
    "💍 Ek aisa future banana jahan sirf pyaar, respect aur trust ho.",
    "👴👵 Aur ek din buddhe hokar bhi isi tarah ek dusre ko dekhkar muskurana. ❤️",
    "👶 25-30 bacche  😁😁😁😁😁😁"
  ]

  return (
    <section className="dreams">
      <h2>Our Future Together ❤️</h2>

      <div className="dream-list">
        {dreams.map((dream, i) => (
          <div key={i} className="dream">
            {dream}
          </div>
        ))}
      </div>
    </section>
  )
}