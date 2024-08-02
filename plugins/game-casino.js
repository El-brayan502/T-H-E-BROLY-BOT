  cooldowns[m.sender] = Date.now()
	    
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].limit / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, '🛂 Ingresa la cantidad de ' + `*🪙 BrolyCoins*` + ' que deseas aportar contra' + ` *Ai Hoshino*` + `\n\n` + '`Ejemplo:`\n' + `> *${usedPrefix + command}* 100`, m, rcanal)

        if (user.limit >= count * 1) {
            user.limit -= count * 1
            if (Aku > Kamu) {
                conn.reply(m.chat, '`🌵 Veamos que numeros tienen!`\n\n'+ `➠ *The broly-bot* : ${Aku}\n➠ *${username}* : ${Kamu}\n\n> ${username}, *PERDISTE* ${formatNumber(count)} 🪙 BrolyCoins.`.trim(), m, rcanal)
            } else if (Aku < Kamu) {
                user.limit += count * 2
                conn.reply(m.chat, '`🌵 Veamos que numeros tienen!`\n\n'+ `➠ *The broly-bot* : ${Aku}\n➠ *${username}* : ${Kamu}\n\n> ${username}, *GANASTE* ${formatNumber(count * 2)} 🪙 BrolyCoins.`.trim(), m, rcanal)
            } else {
                user.limit += count * 1
                conn.reply(m.chat, '`🌵 Veamos que numeros tienen!`\n\n'+ `➠ *The broly-bot* : ${Aku}\n➠ *${username}* : ${Kamu}\n\n> ${username} obtienes ${formatNumber(count * 1)} 🪙 BrolyCoins.`.trim(), m, rcanal)
            }
        } else conn.reply(m.chat, `No tienes *${formatNumber(count)} 🪙 BrolyCoins* para apostar!`.trim(), m, rcanal)
    
}
    
handler.help = ['apostar *<cantidad>*']
handler.tags = ['game']
handler.command = /^(apostar|casino)$/i
handler.register = true

handler.fail = null

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function segundosAHMS(segundos) {
  let segundosRestantes = segundos % 60
  return `${segundosRestantes} segundos`
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}