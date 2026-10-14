// Journal entries, dated by the day they happened. Newest first is handled in journal.js.
// Add a post: copy a block, set date (YYYY-MM-DD), text in en + zh, and images in assets/journal/.
window.POSTS = [
  {
    date: "2026-04-08", featured: true,
    en: { title: "Admitted to NTU", text: "I got admitted to National Taiwan University — Master's in Photonics and Optoelectronics. The happiest day of my life." },
    zh: { title: "錄取臺大", text: "我錄取國立臺灣大學光電工程學研究所碩士班了！這是我人生中最快樂的一天。" },
    images: [{ src: "2026-04-08-ntu-admission.jpg", w: 1400, h: 713, en: "NTU application portal showing my admission", zh: "臺大申請系統顯示錄取結果" }],
  },
  {
    date: "2026-05-23",
    en: { title: "The letter arrived", text: "The DHL courier brought my official admission letter from NTU today. I also submitted my application for the MOE Taiwan Scholarship. Hoping for the best." },
    zh: { title: "錄取通知書寄到了", text: "DHL 快遞今天送來臺大的正式錄取通知書。我也送出了教育部臺灣獎學金的申請，希望一切順利。" },
    images: [],
  },
  {
    date: "2026-05-26", featured: true,
    en: { title: "Taiwan Scholarship", text: "I got the Ministry of Education Taiwan Scholarship for my master's at NTU. So much financial burden off my head. I love Taiwan." },
    zh: { title: "獲得臺灣獎學金", text: "我獲得教育部臺灣獎學金，支持我在臺大攻讀碩士。肩上的經濟壓力終於減輕許多。我愛臺灣！" },
    images: [
      { src: "2026-05-26-moe-notice.jpg", w: 924, h: 1290, en: "2026 MOE Taiwan Scholarship candidate list notice", zh: "2026 年教育部臺灣獎學金候選人名單公告" },
      { src: "2026-05-26-moe-list.jpg", w: 924, h: 1295, en: "Pages of the candidate list", zh: "候選人名單頁面" },
    ],
  },
  {
    date: "2026-06-01",
    en: { title: "Attestation at Mantralaya", text: "Went to Mantralaya in Mumbai to get my degree and documents attested by the Government of Maharashtra." },
    zh: { title: "前往 Mantralaya 辦理認證", text: "前往孟買的馬哈拉施特拉邦政府總部（Mantralaya），辦理學位與相關文件認證。" },
    images: [
      { src: "2026-06-01-attestation-1.jpg", w: 1280, h: 960, en: "Documents with notary and government attestation stamps", zh: "蓋有公證與政府認證章的文件" },
      { src: "2026-06-01-attestation-2.jpg", w: 960, h: 1280, en: "Degree certificate with attestation stamps", zh: "蓋有認證章的學位證書" },
    ],
  },
  {
    date: "2026-06-15",
    en: { title: "Visa medical check-up", text: "Went to Ruby Hall Clinic for the medical check-up needed for my visa. They took two tubes of blood 😭" },
    zh: { title: "簽證健康檢查", text: "到 Ruby Hall 醫院做簽證需要的健康檢查。他們抽了兩管血 😭" },
    images: [{ src: "2026-06-15-ruby-hall.jpg", w: 1050, h: 1400, en: "Ruby Hall Clinic wristband", zh: "Ruby Hall 醫院手環" }],
  },
  {
    date: "2026-06-19",
    en: { title: "All clear", text: "Got my medical reports. Everything is great." },
    zh: { title: "報告出爐，一切正常", text: "拿到健康檢查報告，一切正常！" },
    images: [{ src: "2026-06-19-health-result.jpg", w: 805, h: 85, en: "Health examination result: passed", zh: "健康檢查結果：合格" }],
  },
  {
    date: "2026-06-27",
    en: { title: "Apostilled in Delhi", text: "Everything is attested now — degree, transcript and health certificate — by the Ministry of External Affairs in New Delhi." },
    zh: { title: "新德里外交部認證完成", text: "學位證書、成績單與健康證明，都已完成印度外交部（新德里）的認證。" },
    images: [{ src: "2026-06-27-apostille-medical.jpg", w: 960, h: 1280, en: "Health certificate with apostille", zh: "附海牙認證的健康證明" }],
  },
  {
    date: "2026-07-10",
    en: { title: "One more stamp", text: "Turns out the Delhi apostille wasn't enough for my Maharashtra documents, so they had to go through the Ministry of External Affairs office in Mumbai too. Hectic, but it's done." },
    zh: { title: "再多一個章", text: "原來新德里的海牙認證對馬哈拉施特拉邦的文件還不夠，必須再經過印度外交部孟買辦公室處理。過程很折騰，但終於完成了。" },
    images: [{ src: "2026-07-10-apostille-degree.jpg", w: 1400, h: 787, en: "Degree with apostille and Mumbai Ministry of External Affairs stamps", zh: "附海牙認證與外交部孟買辦公室章的學位證書" }],
  },
  {
    date: "2026-07-13",
    en: { title: "Off to TECC", text: "All my documents went to the Taipei Economic and Cultural Center (TECC) in Mumbai for authentication." },
    zh: { title: "文件送交駐孟買辦事處", text: "所有文件都送到駐孟買台北經濟文化辦事處進行驗證。" },
    images: [{ src: "2026-07-13-tecc-receipt.jpg", w: 1400, h: 787, en: "TECC Mumbai document authentication receipt", zh: "駐孟買台北經濟文化辦事處文件驗證收據" }],
  },
  {
    date: "2026-07-28",
    en: { title: "Documents collected", text: "Collected my documents from TECC Mumbai. Finally, I can apply for my visa." },
    zh: { title: "領回文件", text: "從駐孟買台北經濟文化辦事處領回文件，終於可以申請簽證了！" },
    images: [],
  },
  {
    date: "2026-08-03",
    en: { title: "Visa application submitted", text: "Applied for my student visa. Very happy." },
    zh: { title: "遞交簽證申請", text: "順利遞交學生簽證申請，非常開心！" },
    images: [{ src: "2026-08-03-tecc-lobby.jpg", w: 1082, h: 1400, en: "Lobby of the Taipei Economic and Cultural Center in Mumbai", zh: "駐孟買台北經濟文化辦事處大廳" }],
  },
  {
    date: "2026-08-14", featured: true,
    en: { title: "Visa in hand", text: "Got my passport back with the visa inside. Very, very happy." },
    zh: { title: "簽證到手", text: "拿回護照，簽證到手了！非常非常開心！" },
    images: [{ src: "2026-08-14-visa-day.jpg", w: 1125, h: 614, en: "Me at TECC Mumbai on visa day", zh: "領取簽證當天在駐孟買辦事處" }],
  },
  {
    date: "2026-08-25",
    en: { title: "Leaving home", text: "Left home for a new adventure. First leg: Mumbai to Singapore." },
    zh: { title: "離家出發", text: "離家展開新的冒險。第一段航程：孟買飛新加坡。" },
    images: [{ src: "2026-08-25-flight.jpg", w: 924, h: 1070, en: "Flight itinerary: Mumbai to Singapore to Taipei", zh: "航班行程：孟買－新加坡－臺北" }],
  },
  {
    date: "2026-08-26",
    en: { title: "Layover in Singapore", text: "Layover in Singapore, waiting for the next leg to Taipei." },
    zh: { title: "新加坡轉機", text: "在新加坡轉機，等待飛往臺北的下一段航程。" },
    images: [{ src: "2026-08-26-singapore.jpg", w: 924, h: 1390, en: "Singapore to Taipei flight details", zh: "新加坡飛臺北航班資訊" }],
  },
  {
    date: "2026-08-27", featured: true,
    en: { title: "First meal at NTU", text: "Checked in to my student dormitory and had my first meal at NTU. Taiwan, here I am." },
    zh: { title: "在臺大的第一餐", text: "入住學生宿舍，在臺大吃了第一餐。臺灣，我來了！" },
    images: [{ src: "2026-08-27-first-meal.jpg", w: 1073, h: 1400, en: "Rice bowl with grilled chicken, egg and vegetables", zh: "烤雞肉、蛋與蔬菜的飯碗" }],
  },
];
