const dompet = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *DOMPETKU MENU* ]----- 🔰
Roii, ${pushname} 👋
Tenha um ótimo dia usuário, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃🔰 Nome : ${pushname}
┃🔰 LEVEL : ${getLevelingLevel(sender)}
┃🔰 USER ${botName} : ${_registered.length}
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot! ✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃🔰 *${prefix}limit*
┃🔰 *${prefix}atm*
┃🔰 *${prefix}transfer*
┃🔰 *${prefix}buylimit*
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.dompet = dompet
