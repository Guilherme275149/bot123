const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *PROPRIETARIO* ]----- 🔰
Roii, ${pushname} 👋
Tenha Um Ótimo Dia Usuário, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃🔰 NAMA : ${pushname}
┃🔰 LEVEL : ${getLevelingLevel(sender)}
┃🔰 USER ${botName} : ${_registered.length}
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot! ✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃🔰 *${prefix}bc*
┃🔰 *${prefix}bcgc*
┃🔰 *${prefix}clearall*
┃🔰 *${prefix}block*
┃🔰 *${prefix}unblock*
┃🔰 *${prefix}clone*
┃🔰 *${prefix}leave*
┃🔰 *${prefix}setppbot*
┃🔰 *${prefix}setreply*
┃🔰 *${prefix}setprefix*
┃🔰 *${prefix}ban*
┃🔰 *${prefix}unban*
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.owb = owb
