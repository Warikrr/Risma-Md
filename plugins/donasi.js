let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
┏──「 Donasi • Dana 」─⬣
│ • Gopay : [088233832771]
│ • Dana : [088233832771]
╰────────⬣
┏──「 *NOTE* 」─⬣
│ > Ingin donasi? wa.me/6288233832771
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
┗────────⬣
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
