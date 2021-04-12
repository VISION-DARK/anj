let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin2)}”`, m)
}
handler.help = ['bucin2']
handler.tags = ['buchin2']
handler.command = /^(bucin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucin2 = [
  
   "Ga usah cinta cintaan deh lu gblk.tuh liat semen dan pasir ga bisa ngaduk sendiri kerja Sono.",
   "hadehh lu itu ga good looking jd ga ush berharap.",
   "muka lu ga good looking,uang ga ad,jd mau lu ap ?? ga usah berharap.",
   "Apa ?? mau gw tonjok kah lu ??.",
   "Ingat paman semen dan pasir ga bisa ngaduk sendiri"
]