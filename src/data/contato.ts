export const EMPRESA = "MCell Digital";
export const ENDERECO = "Praça Olavo Bilac, 28 — Lj H, Centro, Rio de Janeiro — RJ, 20041-900";
export const WHATSAPP_EXIBICAO = "(21) 97966-0549";
export const WHATSAPP_NUMERO = "5521979660549";

export function waLink(mensagem: string) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}
