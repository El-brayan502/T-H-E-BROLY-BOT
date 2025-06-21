module.exports = {
  name: 'installbarboza',
  alias: ['instalbarboza', 'barbozabotinstall'],
  desc: 'Instrucciones para instalar BarbozaBot-Ai en Termux',
  react: '🤖',
  category: 'termux',
  start: async (Miku, m, { text, prefix }) => {
    const message = `
*Cómo instalar BarbozaBot-Ai en Termux:*

1. Actualiza Termux y paquetes:
\`\`\`
pkg update && pkg upgrade -y
pkg install git -y
pkg install nodejs -y
pkg install yarn -y
\`\`\`

2. Clona el repositorio:
\`\`\`
git clone https://github.com/Elrebelde1/BarbozaBot-Ai.git
cd BarbozaBot-Ai
\`\`\`

3. Instala las dependencias:
\`\`\`
yarn
\`\`\`

4. Ejecuta el bot:
\`\`\`
node index.js
\`\`\`

*¡Listo! Así arrancarás BarbozaBot-Ai en Termux.*

---

Si quieres que te ayude con más comandos para otras instalaciones o scripts, dime. ¿Quieres que te prepare un script `.sh` completo para instalar todo de golpe?`;

    await Miku.sendMessage(m.from, { text: message }, { quoted: m });
  }
};