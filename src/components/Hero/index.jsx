import { useEffect, useState } from "react";
import "./Hero.css";
import { FaHeart, FaPlay } from "react-icons/fa";
import { fetchData } from "../../services/api";

export default function Hero({ onContinue, ctaTitle }) {
  const [hero, setHero] = useState({
    title: "Happy Birthday, Meri Kaju! ❤️🎂",
    subtitle:
      "Aaj ka din mere liye bahut hi special hai, kyunki aaj meri jaaneman ka birthday hai. ❤️ Bas meri ek hi dua hai ki tum hamesha isi tarah khush raho, haste raho aur tumhari har ek khwahish poori ho. Happy Birthday, Meri Cutie! 🥰 I Love You So Much! ❤️",
  });

  useEffect(() => {
    const loadHero = async () => {
      try {
        const data = await fetchData("/hero");
        if (data?.hero) {
          setHero(data.hero);
        }
      } catch (error) {
        console.error("Hero fetch failed:", error);
      }
    };

    loadHero();
  }, []);

  return (
    <section className="hero">
      <div className="hero__badge">
        <FaHeart />
        <span>Made With Love, Just For You ❤️</span>
      </div>

      <h1 className="hero__title">{hero.title}</h1>

      <p className="hero__subtitle">{hero.subtitle}</p>

      <button className="hero__button" onClick={onContinue}>
        <FaPlay />
        <span>{ctaTitle || "Open Your Birthday Surprise 🎁"}</span>
      </button>
    </section>
  );
}