const gabut = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *GABUTZ MENU* ]----- 🔰
Roii, ${pushname} 👋
Tenha Um Ótimo Dia,Usuário, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃🔰 Nome : ${pushname}
┃🔰 LEVEL : ${getLevelingLevel(sender)}
┃🔰 USER ${botName} : ${_registered.length}
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot! ✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃🔰 *${prefix}apakah*
┃🔰 *${prefix}bisakah*
┃🔰 *${prefix}kapankah*
┃🔰 *${prefix}hobby*
┃🔰 *${prefix}rate*
┃🔰 *${prefix}seberapagay*
┃🔰 *${prefix}nangis*
┃🔰 *${prefix}cium*
┃🔰 *${prefix}peluk*
┃🔰 *${prefix}truth*
┃🔰 *${prefix}dare*
┃🔰 *${prefix}timer*
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.gabut = gabut
