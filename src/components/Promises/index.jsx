import './Promises.css'

export default function Promises() {
  const promises = [
    "❤️ Main hamesha tumhari respect aur care karunga.",
    "🤝 Har khushi aur har mushkil me tumhara saath dene ki poori koshish karunga.",
    "😊 Tumhari smile ki wajah banne ki koshish kabhi nahi chhodunga.",
    "🌸 Tumhari feelings ko hamesha samajhne aur unki respect karne ki koshish karunga.",
    "💖 Har chhoti aur badi achievement par sabse pehle tumhare liye khush hounga.",
    "✨ Har din tumhe ye feel karane ki koshish karunga ki tum kitni special ho.",
    "🫶 Kabhi bhi communication aur trust ki importance nahi bhoolunga.",
    "♾️ Aur sabse zaroori... har din tumhe utni hi importance dunga jitni aaj deta hoon. ❤️"
  ]

  return (
    <section className="promises">
      <h2>My Promises To You ❤️</h2>

      <div className="promise-list">
        {promises.map((promise, i) => (
          <div key={i} className="promise">
            {promise}
          </div>
        ))}
      </div>
    </section>
  )
}