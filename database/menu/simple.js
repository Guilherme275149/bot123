const simple = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *Menu Simples* ]----- 🔰
Roii, ${pushname} 👋
Tenha um ótimo dia, usuário, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃🔰➸ Nome : ${pushname}
┃🔰➸ LEVEL : ${getLevelingLevel(sender)}
┃🔰➸ USER ${botName} : ${_registered.length}
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot! ✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃🔰➸ *${prefix}sticker*Converte Imagem Em Fig
┃🔰➸ *${prefix}ttp*
┃🔰➸ *${prefix}tts*Converte Mensagem Em Áudio
┃🔰➸ *${prefix}toimg*
┃🔰➸ *${prefix}nulis*
┃🔰➸ *${prefix}stalkig*
┃🔰➸ *${prefix}quotes*
┃🔰➸ *${prefix}bikinquote*
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.simple = simple
