exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `馃敯 -----[ *MENU ${BotName}* ]----- 馃敯
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 馃憢锔�
Berikut adalah info pada bot ini!鉁�

[ 锔� *${tampilTanggal}* ]
[锔� *${tampilWaktu}* ]

馃敶 INFO BOT! :

=> *AUTHOR*: ./DhitoBOT.exe
=> *YOUTUBE*: KlinciSH42

馃敶 INFO LAIN! :

OH IYA SCRIPT INI 100% GRATIS KOK.
SCRIPT DIBUAT DENGAN BAHASA PEMROGRAMAN NODE.JS

鈾伙笍 JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
鈾伙笍 MAU DONASI? SILAHKAN KETIK #donate

馃摵 *Iklan* :

鉁� Follow akun instagram admin ${instagramlu}

鈿狅笍 INFORMASI COVID-19 TERBARU!

鈿狅笍 POSITIF: *${corohelp.confirmed.value}*
鈿狅笍 SEMBUH: *${corohelp.recovered.value}*
鈿狅笍 MENINGGAL: *${corohelp.deaths.value}*
鈿狅笍 UPDATE: *${corohelp.lastUpdate}*

鈾伙笍 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

鈾伙笍 Mau pasang iklan di *${BotName} ?*
鈽庯笍 WA : *${whatsapplu}*
  
鈿狅笍 Gunakan dengan bijak 鈥硷笍
鈿狅笍 Bot ini berjalan ${kapanbotaktif} 鈥硷笍

鉁匫fficial Grub [1] : ${grupch1}

鉁匫fficial Grub [2] : ${grupch2}

  
馃敯 -----[ *POWERED BY ${BotName}* ]----- 馃敯`
}
