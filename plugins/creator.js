let handler = function (m) {
  // this.sendContact(m.chat, '62895618376962', 'Fgans ✔️', m)
  this.sendContact(m.chat, '62895618376962', 'Fgans ✔️', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
