let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [0858-6913-4434 ]
│ • Gopay [0858-6913-4434 ]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281229859085
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
