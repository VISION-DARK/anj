let handler = async m => m.reply(`
╭─「 Donasi 」
│ • 0895618376962 (pulsa)
│ • 0895618376962 (dana)
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
