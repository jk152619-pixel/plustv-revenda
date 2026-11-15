// ===== Configuração do app Plustv Revenda =====
window.APP_CONFIG = {
  name: "Plustv Revenda",
  // Endereço do Painel TVPlus+ Revenda (onde os clientes são cadastrados)
  panel: "https://plustv-revenda.floot.app",
  // DNS de reserva: o app tenta primeiro a DNS que vem do painel e, se falhar, estas em ordem.
  dns: [
    "http://yt19.org",
    "http://wempy.online:8080",
    "http://levi25.biz",
    "http://t.smts.top:8880",
    "http://foofighters.click"
  ],
  // WhatsApp de suporte padrão (quando o revendedor não tiver um). Com DDI 55 + DDD.
  whatsapp: "5583991485424"
};
