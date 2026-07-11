import "./Timeline.css";

export default function Timeline() {
  const events = [
    {
      year: "March ( Holi ) 🌸",
      title: "pheli baar jab hamari baat hui thi ",
      desc: "Holi ka din jab hamari phele baar baat hui thi, mujko nahi pata tha jaise holi me bhot sare color hote hai tumse milne ke baad mairi life me bhi aise hi bhot sare color aa jayege 🥰",
    },
    {
      year: "31 March 🌷",
      title: "first time jab hum ofline mile the",
      desc: "ye to tumko achhe se yaad hi hoga jab hum phele baar milte the tumne pure time mujko dekha bhi nahi pata nahi tum itni Nervou kyu thi but us din maine dekha tumhari aakhe kitni pyari hai or ye mairi liye first time tha ki mai kisi ladki ki sath mandir me tha, ye din mai kabhi bhi nahi bhul sakta   🥰",
    },
    {
      year: "May ☀️",
      title: "best friends ",
      desc: "Ye time vo tha jab tumko bhi pata tha kahi na kahi ki hum best friends nahi hai usse bhot jade hai matlab is time tak love wali feelings aa chuki thi hum dono ko pata tha ki hum dono sath me bhot khush hai bss propose karne ka wait tha kon phele karega 😁😅 💕",
    },
    {
      year: "08 June 🌷",
      title: "2nd time jab hum mile ",
      desc: "  Vaise mai is din tumse gussa tha kyuki is din na hamari baat hi ho pai sahi se or nahi hum time sahi se bita paye or fir hum chali bhi ak dam gai but koi nahi is din maine tumhari jhuti lassi to pee hi thi 😅, dekha jaye to kuch to accha hi hua tha ❤️",
    },
    {
      year: "19 June 🌹",
      title: "propose 💟",
      desc: " yarr tum propose kar nahi rahi thi or fir bass pata nahi kya hua maine hi bol diya tumko but is baar tum bhi maire sath sath bhot khush thi 💚💙 ",
    },
    {
      year: "Forever ♾️",
      title: "Us, Always",
      desc: "Chahe waqt kitna bhi badal jaye, meri favourite story hamesha 'hum' hi rahenge. Happy Birthday, Meri Kaju. I Love You Forever. ❤️",
    },
  ];

  return (
    <section className="timeline">
      <h2>Our Journey</h2>
      <p className="timeline-subtitle">
        A few chapters from the story that made you so special to me.
      </p>
      {events.map((event, i) => (
        <div key={i} className="timeline-item">
          <div className="year">{event.year}</div>
          <div className="content">
            <h3>{event.title}</h3>
            <p>{event.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
