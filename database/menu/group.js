const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *Grupo Menu* ]----- 🔰
Hallo, ${pushname} 👋
Tenha Um Ótimo Dia Usuário, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃🔰 Nome : ${pushname}
┃🔰 LEVEL : ${getLevelingLevel(sender)}
┃🔰 USER ${botName} : ${_registered.length}
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot! ✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃🔰 *${prefix}welcome* ⟪ 1/0 ⟫
┃🔰 *${prefix}leveling* ⟪ 1/0 ⟫
┃🔰 *${prefix}event* ⟪ 1/0 ⟫
┃🔰 *${prefix}simih* ⟪ 1/0 ⟫
┃🔰 *${prefix}nsfw* ⟪ 1/0 ⟫
┃🔰 *${prefix}grup* ⟪ buka/tutup ⟫
┃🔰 *${prefix}add*Add Ao Grupo @55119344xxxxx
┃🔰 *${prefix}kick*Remove Do Grupo Menciona @
┃🔰 *${prefix}hedsot*
┃🔰 *${prefix}linkgrup*Link Do Grupo
┃🔰 *${prefix}promote*Promove Admin Menciona@
┃🔰 *${prefix}demote*Remove Admin Menciona @
┃🔰 *${prefix}setname*Muda Nome Do Grupo
┃🔰 *${prefix}setdesc*
┃🔰 *${prefix}tagall*
┃🔰 *${prefix}admin*
┃🔰 *${prefix}level*
┃🔰 *${prefix}fitnah*
┃🔰 *${prefix}hidetag*
┃🔰 *${prefix}hidetag5*
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.groupm = groupm
