let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI NADIA* ´ˎ˗
│ ✎ _Nama_ : Nadia Faradiba
│ ✎ _Sekolah_ : SMA 1 BANTARBOLANG
│ ✎ _Umur_ : 17
│ ✎ _Asal_ : Jakarta
│ ✎ _Status_ : Pelajar SMA
│ ✎ _WhatsApp_ :
│    wa.me/6285893590312
╰──────────────
`.trim(), m)
}

handler.help = ['infonadia']
handler.tags = ['main', 'utama']
handler.command = /^(infonadia)$/i

handler.exp = 150

module.exports = handler
