export const CONFIG = {
  whatsapp: "5493544578346",
  message: "¡Buenas! Quiero cre4r un usu4rio. Mí nombre es:",

  brand: {
    name: "Premium Ganamos",
    slogan: "Cargas rápidas · Retiros 24 hs · Atención personalizada",
  },

  stats: {
    users: "10.000+",
    withdrawals: "24 hs",
    support: "24/7",
  },
};

export const getWhatsAppLink = () => {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
    CONFIG.message
  )}`;
};