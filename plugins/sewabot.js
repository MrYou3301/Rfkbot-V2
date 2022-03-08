let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ Jadi Owner
├ Premium Permanent
├ Sewa 1 Bulan
├ Sewa Permanent
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Pulsa (ISAT): 0857 4234 4873
Ovo: 0857 4234 4873
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'Jadi Owner', description: "Rp20.000\nJadi Owner bot tanpa batasan waktu.", rowId:".masuk"},
        {title: 'Premium Permnnt', description: "Rp10.000\nPremium bot selamanya.", rowId:".masuk"},
        {title: 'Sewa 1 Bulan', description: "Rp5.000\nSewa bot selama 1 bulan.", rowId:".masuk"},
        {title: 'Sewa Permanent', description: "Rp10.000\nSewa bot selamanya.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//Haruno Bot
