const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku) => {
        return `🔰 -----[ *Eu Estou ${botName}* ]----- 🔰
Roiii, ${pushname} 👋
Tenha Um Bom Dia, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃🔰 Nome : ${pushname}
┃🔰 Dinheiro : Rp:${uangku}
┃🔰 XP : ${reqXp}
┃🔰 LEVEL : ${getLevelingLevel(sender)}
┃🔰 USER ${botName} : ${_registered.length}
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot! ✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃🔰 *${prefix}info*
┃🔰 *${prefix}ping*
┃🔰 *${prefix}donasi*
┃🔰 *${prefix}owner*
┃│───────────────────
┃🔰 *${prefix}simple*
┃🔰 *${prefix}maker*Criador
┃🔰 *${prefix}gabut*
┃🔰 *${prefix}download*
┃🔰 *${prefix}random*Aleatorio
┃🔰 *${prefix}dompet*Bolsa
┃🔰 *${prefix}other*Outros
┃🔰 *${prefix}group*Grupo
┃🔰 *${prefix}owb*
┃
┃
┃TRADUZIDO POR FX GUILHERME MEU CANAL AQUI EM 
┃BAIXO LINK👇
┃https://youtube.com/channel/UCWZKMTuAI8t4ENaCftJxqQw
┃
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.help = help
