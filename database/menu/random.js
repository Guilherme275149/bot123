const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *Aleatorio Menu* ]----- 🔰
Roii, ${pushname} 👋
Tenha um ótimo dia, usuário, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━━━┓
┃🔰 Nome : ${pushname}
┃🔰 LEVEL : ${getLevelingLevel(sender)}
┃🔰 USER ${botName} : ${_registered.length}
┗━━━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot! ✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃🔰 *${prefix}randomhentong*hentong aleatório
┃🔰 *${prefix}nekonime*
┃🔰 *${prefix}wibu*
┃🔰 *${prefix}loli*
┃🔰 *${prefix}blowjob*
┃🔰 *${prefix}shota*
┃🔰 *${prefix}husbu*
┃🔰 *${prefix}kpop*
┃🔰 *${prefix}anjing*
┃🔰 *${prefix}pokemon*
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.random = random
