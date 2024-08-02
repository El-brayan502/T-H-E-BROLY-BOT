let cooldowns = {}

let handler = async (m, { conn, text, command, usedPrefix }) => {
  let users = global.db.data.users[m.sender]
  
  let tiempoEspera = 10
  
  if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
    conn.reply(m.chat, `🚀 Ya has iniciado una apuesta recientemente, espera *⏱ ${tiempoRestante}* para apostar nuevamente`, m, rcanal)
    return
  }
  
  cooldowns[m.sender] = Date.now()

  if (!text) return conn.reply(m.chat, `🚀 Debes ingresar una cantidad de *🪙 BrolyCoins* y apostar a un color, por ejemplo: *${usedPrefix + command} 20 black*`, m, rcanal)

  let args = text.trim().split(" ")
  if (args.length !== 2) return conn.reply(m.chat, `🚀 Formato incorrecto. Debes ingresar una cantidad de *🪙 BrolyCoins* y apostar a un color, por ejemplo: *${usedPrefix + command} 20 black*`, m, rcanal)

  let limit = parseInt(args[0])
  let color = args[1].toLowerCase()

  if (isNaN(limit) || limit <= 0) return conn.reply(m.chat, `🚀 Por favor, ingresa una cantidad válida para la apuesta.`, m, rcanal)

  if (limit > 50) return conn.reply(m.chat, "🚀 La cantidad máxima de apuesta es de 50 *🪙 BrolyCoins*.", m, rcanal)

  if (!(color === 'black' || color === 'red')) return conn.reply(m.chat, "🚀 Debes apostar a un color válido: *black* o *red*.", m, rcanal)

  if (limit > users.limit) return conn.reply(m.chat, "🚀 No tienes suficientes *🪙 BrolyCoins* para realizar esa apuesta.", m, rcanal)
  
  await conn.reply(m.chat, `🚀 Apostaste ${limit} *🪙 BrolyCoins* al color ${color}. Espera *⏱ 10 segundos* para conocer el resultado.`, m, rcanal)

  setTimeout(() => {
    let result = Math.random()
    let win = false
