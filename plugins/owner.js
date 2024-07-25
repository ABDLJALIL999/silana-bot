import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/212614932692
*instagram:*\https://www.instagram.com/abdljalil.99?igsh=d3FxOXh4cncxaWZp

*youtube:*\nyoutube.com/@noureddineouafy2

*facebook page:*\nwww.facebook.com/profile.php?id=100063533185520

*script bot :* github.com/noureddineouafy

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
