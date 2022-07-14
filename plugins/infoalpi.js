let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI Alpi* ´ˎ˗
│ ✎ _Nama_ : Alpi
│ ✎ _Sekolah_ : SMA 1 BANTARBOLANG
│ ✎ _Umur_ : 17
│ ✎ _Asal_ : Jatim
│ ✎ _Status_ : Pelajar SMA
│ ✎ _WhatsApp_ :
│    wa.me/6285713137903
╰──────────────
`.trim(), m)
}

handler.help = ['infoalpi']
handler.tags = ['main', 'utama']
handler.command = /^(infoalpi)$/i

handler.exp = 150

module.exports = handler
