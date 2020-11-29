exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `馃敯 -----[ *MENU DONASI ${BotName}* ]----- 馃敯
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 馃憢锔�
Mau donasi? 

鈿狅笍 *${tampilTanggal}*
鈿狅笍 *${tampilWaktu}*

鈾� Silahkan donasi dibawah ini :
   
鈿� *OVO*: 0812-2986-8475
鈿� *PULSA*: 0812-2986-8475

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

鉁筹笍 Official Grub [1] : ${grupch1}

鉁筹笍 Official Grub [2] : ${grupch2}

  
馃敯 -----[ *POWERED BY ${BotName}* ]----- 馃敯`
}
