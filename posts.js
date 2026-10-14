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
    date: "2026-05-26",
    en: { title: "On the scholarship list", text: "I made it onto the candidate list for the Ministry of Education Taiwan Scholarship, for my master's at NTU. One big step closer — fingers crossed for the final confirmation." },
    zh: { title: "進入獎學金候選名單", text: "我進入教育部臺灣獎學金的候選人名單，支持我在臺大攻讀碩士。又往前邁進一大步，期待最後的確認！" },
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
    date: "2026-07-31", featured: true,
    en: { title: "Scholarship confirmed", text: "My official MOE Taiwan Scholarship letter arrived by email. It's real now. So much financial burden off my head. I love Taiwan." },
    zh: { title: "獎學金確定了", text: "教育部臺灣獎學金的正式通知信寄到我的信箱了，這下是真的了！肩上的經濟壓力終於減輕許多。我愛臺灣！" },
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
  {
    date: "2026-09-01",
    en: { title: "Campus tour", text: "Joined the NTU campus tour — my first event at NTU. The organizers even walked us through earthquake and typhoon safety." },
    zh: { title: "校園導覽", text: "參加臺大校園導覽，這是我在臺大的第一個活動。主辦團隊還教我們地震和颱風的防災知識。" },
    images: [{ src: "2026-09-01-campus-tour.jpg", w: 1094, h: 1400, en: "Students demonstrating earthquake and typhoon safety during the campus tour", zh: "校園導覽中示範地震與颱風防災的學生" }],
  },
  {
    date: "2026-09-03",
    en: { title: "Student ID", text: "Got my NTU student ID card. My face in the photo looks so bad." },
    zh: { title: "拿到學生證", text: "拿到臺大學生證了。證件照裡的我看起來真的不太好看。" },
    images: [{ src: "2026-09-03-student-id.jpg", w: 1125, h: 940, en: "My National Taiwan University student ID card", zh: "我的國立臺灣大學學生證" }],
  },
  {
    date: "2026-09-05", featured: true,
    en: { title: "Back at NTHU", text: "Visited National Tsing Hua University. Such a nostalgic feeling — it brought back my 2023 internship days." },
    zh: { title: "重回清華", text: "回到國立清華大學走走，滿滿的懷念，想起 2023 年在這裡實習的日子。" },
    images: [{ src: "2026-09-05-nthu.jpg", w: 1125, h: 1212, en: "National Tsing Hua University emblem", zh: "國立清華大學校徽" }],
  },
  {
    date: "2026-09-08",
    en: { title: "Birthday", text: "Birthday today! Feels bad to say I'm getting old." },
    zh: { title: "生日", text: "今天是我的生日！要承認自己變老，還真有點難過。" },
    images: [],
  },
  {
    date: "2026-09-14", featured: true,
    en: { title: "GIPO orientation", text: "Orientation day at my institute, the Graduate Institute of Photonics and Optoelectronics." },
    zh: { title: "光電所新生說明會", text: "參加我所屬的光電工程學研究所新生說明會。" },
    images: [{ src: "2026-09-14-gipo-orientation.jpg", w: 1125, h: 821, en: "Group photo at the GIPO orientation", zh: "光電所新生說明會合照" }],
  },
  {
    date: "2026-09-23",
    en: { title: "Dinner with the lab", text: "First dinner party hosted by my professor. The chicken was delicious." },
    zh: { title: "教授請吃晚餐", text: "教授第一次請我們吃晚餐，雞肉超好吃！" },
    images: [{ src: "2026-09-23-professor-dinner.jpg", w: 1280, h: 576, en: "Group photo after dinner with my professor", zh: "與教授聚餐後的合照" }],
  },
  {
    date: "2026-10-13",
    en: { title: "Permits, permits", text: "My international driving permit got approved — let's see how long it takes to reach Taiwan. I also applied for a work permit in Taiwan for summer internships. I don't know yet if I'll get one 🤞 Hoping for the best." },
    zh: { title: "各種許可證", text: "國際駕照申請通過了，看看要多久才會寄到臺灣。我也申請了在臺灣的工作許可，為暑期實習做準備。還不知道能不能拿到 🤞 希望一切順利。" },
    images: [{ src: "2026-10-13-idp.jpg", w: 817, h: 516, en: "International driving permit, with personal numbers blurred", zh: "國際駕照（個人號碼已模糊處理）" }],
  },
];
