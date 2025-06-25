module.exports = {
  name: 'installbarboza',
  alias: ['instalbarboza', 'barbozabotinstall'],
  desc: 'Instrucciones para instalar BarbozaBot-Ai en Termux',
  react: '🤖',
  category: 'termux',
  start: async (Miku, m, { text, prefix }) => {
    const message = `
*Instrucciones para instalar BarbozaBot-Ai en Termux:*

1. Actualiza los paquetes de Termux:
\`\`\`
pkg update && pkg upgrade -y
\`\`\`

2. Instala las dependencias necesarias:
\`\`\`
pkg install nodejs-lts git
\`\`\`

3. Clona el repositorio de BarbozaBot-Ai:
\`\`\`
git clone https://github.com/Elrebelde1/BarbozaBot-Ai.git
cd BarbozaBot-Ai
\`\`\`

4. Instala las dependencias del proyecto:
\`\`\`
npm install
\`\`\`

5. Ejecuta el bot:
\`\`\`
node index.js
\`\`\`

*¡Listo! Ahora BarbozaBot-Ai debería estar funcionando en tu dispositivo Android a través de Termux.*

Para más detalles y actualizaciones, visita el repositorio oficial: [https://github.com/Elrebelde1/BarbozaBot-Ai](https://github.com/Elrebelde1/BarbozaBot-Ai)

Si necesitas ayuda adicional o deseas que te prepare un script `.sh` para automatizar este proceso, no dudes en decírmelo.`;
    
    await Miku.sendMessage(m.from, { text: message }, { quoted: m });
  }
};




## 🚀 Instalación Rápida

```bash
termux-setup-storage
```

```bash
git clone https://github.com/thecarlos19/black-clover-MD

```
```bash
cd black-clover-MD
```
```bash
npm install
```

```bash
npm start
```