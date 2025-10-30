let currentPage = 1;
const totalPages = 9;

function showPage(num) {
  document.querySelectorAll('.page').forEach((p, i) => {
    p.classList.remove('active');
    if (i === num - 1) p.classList.add('active');
  });
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

// 100 razones para amarte 💖
const razones = [
  "Tu sonrisa ilumina mi mundo.",
  "Tus ojos me hipnotizan cada vez que los veo.",
  "Tu voz es mi sonido favorito.",
  "Siempre sabes cómo calmarme.",
  "Eres mi lugar seguro.",
  "A tu lado todo tiene sentido.",
  "Tienes el corazón más hermoso.",
  "Me haces reír incluso cuando no quiero.",
  "Tu ternura no tiene comparación.",
  "Me entiendes sin decir una palabra.",
  "Eres mi motivación para seguir adelante.",
  "Amo cómo me miras.",
  "Tu presencia me da paz.",
  "Eres mi mejor amiga y mi amor.",
  "Amo cómo me haces sentir importante.",
  "Nunca me dejas sola en los momentos difíciles.",
  "Eres increíblemente fuerte.",
  "Tu forma de amar es única.",
  "Tienes una energía que alegra todo a tu alrededor.",
  "Eres la definición de amor verdadero.",
  "Amo cómo te preocupas por mí.",
  "Siempre tienes palabras dulces.",
  "Tu forma de pensar me inspira.",
  "Eres hermosa por dentro y por fuera.",
  "Eres mi razón favorita para sonreír.",
  "Amo tus abrazos, son mi lugar favorito.",
  "Eres mi destino y mi suerte.",
  "Amo cómo te esfuerzas por todo lo que haces.",
  "Eres divertida, tierna y encantadora.",
  "Tu forma de reír me enamora más.",
  "Me haces creer en el amor real.",
  "Eres la mujer más hermosa que conozco.",
  "Amo cómo te emocionas con lo que amas.",
  "Siempre me haces sentir valorada.",
  "Eres mi confidente, mi apoyo y mi amor.",
  "Me haces querer ser una mejor persona.",
  "Tu paciencia es algo que admiro profundamente.",
  "Amo cuando te sonrojas.",
  "Eres mi refugio en los días grises.",
  "Tu piel, tu olor, tu esencia… todo me encanta.",
  "Eres el sueño que nunca quiero terminar.",
  "Me haces sentir afortunada cada día.",
  "Eres mi paz y mi caos al mismo tiempo.",
  "Amo cómo confías en mí.",
  "Eres mi compañera de vida.",
  "Tu risa es mi melodía favorita.",
  "Me haces sentir viva.",
  "Eres el amor más puro que conozco.",
  "No hay nadie como tú.",
  "Eres mi hogar.",
  "Me encanta cómo dices mi nombre.",
  "Amo verte feliz.",
  "Tu forma de cuidar de los demás me conmueve.",
  "Siempre sabes qué decir.",
  "Eres tan dulce como un abrazo eterno.",
  "Tu sinceridad me enamora.",
  "Eres mi persona favorita en el mundo.",
  "Tu inteligencia me deja sin palabras.",
  "Amo tus detalles pequeños.",
  "Me haces sentir especial sin esfuerzo.",
  "Eres todo lo que siempre soñé.",
  "Amo cómo tomas mi mano.",
  "Eres la razón por la que creo en el destino.",
  "Tu amor me hace sentir completa.",
  "Eres un regalo del universo.",
  "Amo tus ocurrencias espontáneas.",
  "Eres mi milagro.",
  "Amo cómo me miras en silencio.",
  "Eres mi mejor historia.",
  "Tu forma de amar me sana.",
  "Eres la melodía más hermosa de mi vida.",
  "Amo cómo sonríes cuando te hago reír.",
  "Eres mi calma después de la tormenta.",
  "Me encanta cómo me haces sentir amada.",
  "Eres mi inspiración cada día.",
  "Tu presencia mejora todo.",
  "Eres mi ángel en la Tierra.",
  "Amo tu forma de ver el mundo.",
  "Eres mi persona, simplemente eso.",
  "Tu forma de abrazar es mi medicina.",
  "Amo compartir mi vida contigo.",
  "Eres lo más hermoso que me ha pasado.",
  "Eres la razón detrás de mis ganas de vivir.",
  "Tu amor me impulsa a soñar más grande.",
  "Eres el “para siempre” que siempre quise.",
  "Amo cómo te preocupas por cada detalle.",
  "Eres mi aventura favorita.",
  "Tu ternura derrite mi corazón.",
  "Eres mi inspiración más grande.",
  "Amo tu autenticidad.",
  "Eres perfecta tal como eres.",
  "Eres el motivo de mis mejores días.",
  "Tu amor me llena el alma.",
  "Amo cuando me haces reír hasta llorar.",
  "Eres mi todo, mi siempre.",
  "Cada día contigo es un regalo.",
  "Eres la definición de amor verdadero.",
  "Te amo porque simplemente eres tú.",
  "Eres la mujer de mi vida, y siempre lo serás. 💞"
];

const ul = document.getElementById('razones');
razones.forEach(r => {
  const li = document.createElement('li');
  li.textContent = r;
  ul.appendChild(li);
});
