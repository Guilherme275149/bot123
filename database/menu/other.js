const other = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *OUTROS MENU* ]----- 🔰
Roii, ${pushname} 👋
Tenha Um Ótimo Dia Usuário, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃🔰 Nome : ${pushname}
┃🔰 LEVEL : ${getLevelingLevel(sender)}
┃🔰 USER ${botName} : ${_registered.length}
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot! ✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃🔰 *${prefix}brainly*
┃🔰 *${prefix}pinterest*
┃🔰 *${prefix}bitly*
┃🔰 *${prefix}moddroid*
┃🔰 *${prefix}happymod*
┃🔰 *${prefix}resepmakanan*
┃🔰 *${prefix}beritahoax*
┃🔰 *${prefix}mutual*
┃🔰 *${prefix}next*
┃🔰 *${prefix}virtex*
┃🔰 *${prefix}virtex2*
┃🔰 *${prefix}timer*
┃🔰 *${prefix}komenyt*
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.other = other
