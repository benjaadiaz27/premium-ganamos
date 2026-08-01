"use client";

import { Crown } from "lucide-react";
import { getWhatsAppLink } from "../lib/config";

export default function Hero() {
  const whatsAppLink = getWhatsAppLink();

  return (
    <section className="hero">
      <div className="hero-card">

        <div className="logo">
          <div className="logo-icon">
            <Crown
              size={24}
              strokeWidth={1.8}
              fill="currentColor"
            />
          </div>

          <span className="logo-text">
            Premium Ganamos
          </span>
        </div>

        <span className="badge">
          ⭐ Plataforma Premium
        </span>

        <h1>
          Jugá y disfrutá
          <br />
          la experiencia premium
        </h1>

        <p>
          Cargas rápidas · Retiros 24 hs · Atención personalizada
        </p>

        <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          onClick={() => {
            if (typeof window !== "undefined" && window.fbq) {
              window.fbq("track", "Lead");
            }
          }}
        >
          CREAR USUARIO
        </a>

        <div className="stats">
          <div>
            <strong>10.000+</strong>
            <span>Usuarios</span>
          </div>

          <div>
            <strong>24 hs</strong>
            <span>Retiros</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Soporte</span>
          </div>
        </div>

      </div>
    </section>
  );
}