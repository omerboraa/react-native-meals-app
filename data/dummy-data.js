import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('Hatay', 'Hatay', 'https://drive.google.com/file/d/1WeRW8jCrCX7898GTEldO0Yv0lMcAIDdu/view?usp=share_link'),
  new Category('Adana', 'Adana', ''),
  new Category('Adıyaman', 'Adıyaman', ''),
  new Category('Diyarbakır','Diyarbakır', ''),
  new Category('Elazığ', 'Elazığ', ''),
  new Category('Gaziantep', 'Gaziantep', ''),
  new Category('Kahraman Maraş','Kahraman Maraş', '' ),
  new Category('Kilis', 'Kilis', ''),
  new Category ('Malatya', 'Malatya', ''),
  new Category('Osmaniye', 'Osmaniye', ''),
  new Category('Şanlıurfa', 'Şanlıurfa', ''),
];

            


export const MEALS = [
  
  new Meal(
    '01', // buraya iki haneli bir id oluştur
    'H', // burayı değiştirme
    'Belen Tava',
    '',
    120,
    [
      '500 gram kırmızı et',
      '15 adet arpacık soğan (veya bir baş soğan)',
      '3 diş sarımsak',
      '4 adet yeşil biber',
      '2 adet kırmızı biber',
      '3 adet domates',
      '2 yemek kaşığı tereyağ',
      'Yarım çay bardağı sıvı yağ',
      '1 yemek kaşığı salça'
    ],
    [
      
     "Etleri kuş başı olacak şekilde doğruyoruz.",
     "Pişireceğimiz fırın tepsisinin altına etleri yerleştiriyoruz.",
     "İçine sırasıyla soğanları biberleri doğrayıp ete ilave ediyoruz domatesleri küp şeklinde doğruyoruz ete ilave ediyoruz.",
     "Sıvıyağ salçayı ve baharatları ilave edip elimizle bir miktar yoğurur gibi harmanlıyoruz.",
     "En son üzerine tereyağını katı haliyle ilave ediyoruz.",
     "Kullanmak istersek içine bir miktarda kuyruk yağı ilave edebiliriz.",
     "200 derece fırında üzerini folyayla kapatıp etler pişene kadar pişiriyoruz. Her etin pişme süresi farklılık gösterebilir lütfen kontrollü pişirelim."
     
    ],
    [
       "Baharat oranlarını isteğe bağlı artırıp azaltılabilir isteğimiz baharatlarla çeşitlendirebiliriz kekik, kurunane vb bu kısmı esnektir."
      
    ],
   'Orta'
  ),
  new Meal(
    '02', // buraya iki haneli bir id oluştur
    'H', // burayı değiştirme
    'Künefe',
    '',
    60,
    [
      '250 g tel kadayıf',
      '125 g tuzsuz künefe peyniri (tuzsuz dil peyniri, mozarella, vs. kullanabilirsiniz)',
      '3 tepeleme yemek kaşığı tereyağı',
      '1 su bardağı şeker',
      '1 su bardağı su',
      'Birkaç damla limon suyu'
    ],
    [
      
     "Şerbet için su, şeker ve limon suyunu bir tencereye alın",
     "Şeker eriyene kadar karıştırın",
     "Şeker eridikten sonra orta hararetli ateşte 15 dk. kadar kaynatın",
     "Ateşten alıp soğuyana kadar dinlendirin",
     "Kadayıfı küçük küçük kıyın",
     "Tereyağını eritin",
     "Yarısını 15 cm'lik yuvarlak künefe tabağına (döküm ya da yapışmaz özellikli bir tava da olabilir) alıp bastırarak yayın",
     "Eritilmiş tereyağının yarısını bir kaşık yardımıyla üzerine gezdirin",
     "Elinizle tekrar bastırarak sıkıştırın",
     "Dilimlediğiniz peyniri üzerine dizin",
     "Kalan kadayıfı da peynirin üzerine eşit şekilde yayın ve bastırarak sıkıştırın",
     "Kalan tereyağını da üzerine gezdirip tekrar sıkıştırın",
     "Tabağı ocağın küçük gözüne alıp kısık ateşte yerini sık sık değiştirerek altı kızarana kadar pişirin",
     "Düz bir kapak/tabak yardımıyla ters çevirip tekrar ocağa alın ve diğer tarafını da sürekli çevirerek kızarana kadar pişirin"
     
    ],
    [
       "burada püf nokta bilgisi olacak"
      
    ],
   'Orta'
  ),
  new Meal(
    '03', // buraya iki haneli bir id oluştur
    'H', // burayı değiştirme
    'Tepsi Kebabı',
    '',
    60,
    [
      '500 gram kıyma',
      '2 adet kuru soğan',
      '2 adet sivri biber',
      '3 adet domates',
      '2 diş sarımsak',
      '1 çay kaşığı karabiber',
      '1 çay kaşığı kekik',
      '1 çay kaşığı kimyon',
      '1 tatlı kaşığı pul biber',
      '2 çay kaşığı tuz',
      '1 yemek kaşığı domates salçası',
      '1 yemek kaşığı biber salçası'
    ],
    [
     "Soğan, sarımsak, domates, maydanoz ve biberi incecik doğrayın",
     "Derin bir kasede kıymaya doğradığınız sebzeleri ve baharatları ekleyip iyice yoğurun",
     "Kebap harcını fırın tepsisine 1 santimetre kalınlığında yayın",
     "Üzerine irice doğradığınız domatesleri ve biberleri yerleştirin",
     "Su ve salçayı da karıştırıp sos haline getirdikten sonra etin üzerine gezdirin",
     "Fırını 180 dereceye ayarlayıp ısıttıktan sonra kebabı fırına verin",
     "Kızaran tepsi kebabını soğutmadan servis edin"
    ],
    [
       "içerisinde yer alan sebzelerin sulanarak kebabın lezzetini kaçırmamasına özen gösterin",
      ' Kıyma seçiminde tek çekim kıyma tercih edilmeli ve kaliteli et kullanılmalıdır.' ,
       'Pişirme esnasında yalnızca etin ve tereyağının birbiri içerisine geçmiş lezzetinden faydalanılmalıdır.',
      
    ],
   'Kolay'
  ),
  new Meal(
    '04', // buraya iki haneli bir id oluştur
    'H', // burayı değiştirme
    'Biberli Ekmek',
    '',
    60,
    [
      '350 gr un (3, 5 su bardağı)',
      '5 gr yaş maya (tepeleme 1 çay kaşığı)',
      '1 çay kaşığı şeker',
      '1 tatlı kaşığı tuz',
      '250 ml su',
      '1 adet kuru soğan',
      "Baharatlar (1 çay kaşığı kişniş, 1 çorba kaşığı kekik, 1 çorba kaşığı çörek otu, 1 çorba kaşığı susam)",
      "Yarım kilo taze çökelek veya lor peyniri",
      "7-8 çorba kaşığı biber salçası",
      "1, 5 su bardağı saf zeytinyağı"
      
    ],
    [
     "Soğanları ince ince doğruyoruz veya robotla çekiyoruz",
     "İçine baharatları ekleyip elimizle ufalıyoruz",
     "Bu karışımın içine biber salçasını ekliyor ve yine kaşıkla karıştırıyoruz",
     "Daha sonra bu karışımın içine lor peyniri veya çökeleği katıyor karışımı homojen hale getiriyoruz",
     "Bu karışımın içine 1.5 su bardağı zeytin yağı ekliyoruz",
     "Son olarak karışımı homojen hale getirip biberli ekmek harcını hazır hale getiriyoruz",
     "Mayayı suda eritiyoruz. Tuz ve unu ilave edip hamurumuzu elimizle iyice yoğuruyoruz.",
     "Elimize yapışmayacak kıvama geldikten sonra folyo ile üzerini kapatalım ve yaklaşık yarım saat kadar bekleyelim.",
     "Mayası gelen hamurumuzdan avuç içi kadar beze yapalım bezeler kurumasın diye üzerine kâğıt havlu ya da ekmek bezi koyup bu şekilde 10-15 dk. daha bekletelim.",
     "Hamuru hazırlayıp üzerine biberli ekmek harcını koyduktan sonra 200 derecelik fırında yaklaşık 10 dakika pişiriyoruz.",
     "Fırından çıktıktan sonra biraz içine çekmesini bekliyoruz. Ardından biberli ekmeklerimiz hazır! ",
  ],
  [
    'soğan ve biber kızarmayacak sadece yumuşayacak.',

  ],
  'kolay'
  ),
  new Meal(
    '05', // buraya iki haneli bir id oluştur
    'H', // burayı değiştirme
    'Bulgurlu patates köftesi',
    '',
    30,
    [
      '3-4 adet orta boy patates',
      '1 çay bardağı ince bulgur',
      '2 adet yumurta',
      '1 çay kaşığı tuz ve baharatlar',
      "1.5 yemek kaşığı beyaz un",
      "1.5 çay bardağı galeta unu",
      "kızartmak için 1.5 çay bardağı sıvı yağ"
      
    ],
    [
     "İnce bulgurları 2 çay bardağı sıcak su ile şişiriyoruz.",
     "Üzerine döküp üstünü kapatıyoruz.",
     "Tüm suyu çektiğinde havalandırıp haşlanmış ve doğranmış patatesleri ilave ediyoruz.",
     "Galeta unu ve kızartmak için kullanacağımız sıvı yağ dışındaki tüm malzemeleri bulgurun üstüne ilave ediyoruz.",
     "Elimizle yoğurmaya başlıyoruz.",
     "Ceviz büyüklüğünde parçalar koparıp köfte şekli verip galeta ununa buluyoruz.",
     "Kızgın yağda iki tarafıda nar gibi kızarana kadar pişiriyoruz." ],
     [
      'patatesleri haşladığınız suyu kenarda bekletin. Köfteyi yoğururken kuru olursa bu suyu kullanmanız gerekebilir.',
      'Damak zevkine göre tarife kimyon, karabiber, dereotu ve taze soğan da ekleyebilirsiniz.',
     ],
     'kolay'
  ),

  // Adana Şehri

  new Meal(
    '06', // buraya iki haneli bir id oluştur
    'Ada', // burayı değiştirme
    'Peynirli Sıkma',
    '',
    45,
    [
      '2.5 - 3 su bardağı (250 - 300 g) un',
      '1 çay kaşığı Pakmaya Instant Kuru Hamur Mayası',
      '1 su bardağı ılık su',
      '1 çay kaşığı toz şeker',
      "1 çay kaşığı tuz",
      "2 adet haşlanmış patates",
      "1 çay bardağı rendelenmiş beyaz peynir",
      "1 soğan",
      "3 dal kıyılmış maydanoz",
      "5 kiraz domates",
      "2 yemek kaşığı zeytinyağı",
      "2 yemek kaşığı tereyağı",
      "Karabiber, pul biber"
      
    ],
    [
     "Unun yarısını, Pakmaya Instant Kuru Hamur Mayası’nı, ılık suyun yarısını, şeker ve tuzu hamur yoğurma kabına alın.",
     "Kontrollü olarak kalan unu ve suyu ekleyerek pürüzsüz bir hamur elde edinceye kadar yoğurun.",
     "Üzerini bezle örtüp yarım saat dinlendirin.",
     "İç malzemesi için zeytinyağını ısıtıp kıyılmış soğanı kavurun.",
     "Patatesleri çatalla ezip soğanla karıştırın.",
     "Kalan iç malzemeyi ekleyip harmanlayın.",
     "Dinlenen hamurdan yarım mandalina büyüklüğünde parçalar koparın.",
     "Her bezeyi unlanmış tezgahta oklava yardımı ile açın.",
     "Yapışmaz yüzeyli bir tavayı ısıtıp açtığınız ince ekmek hamurlarını önlü arkalı pişirin.",
    ],
    [
      'püf noktası yok',
    ],
    'kolay'
  ),

  new Meal(
    '07', // buraya iki haneli bir id oluştur
    'Ada', // burayı değiştirme
    'Yüksük Çorbası',
    '',
    60,
    [
      '8 su bardağı et suyu',
      '1 su bardağı nohut',
      '1 çorba kaşığı salça',
      '1 çorba kaşığı margarin',
      "1 limonun suyu",
      "2 su bardağı un",
      "1 yumurta",
      "1 çay bardağı su",
      "1 tutam tuz",
      "250 gr kıyma",
      "1 soğan",
      "Karabiber"
      
    ],
    [
     "Nohudu akşamdan ıslatın.",
     "Haşlayıp suyunu süzün.",
     "Kıyma, kıyılmış soğan ve karabiberi karıştırıp iç harcı hazırlayın.",
     "Hamur için unu tuz ile birlikte hamur yoğurma kabına eleyin.",
     "Ortasını havuz gibi açıp yumurta ve suyu ekleyin.",
     "Pürüzsüz ve sert bir hamur oluncaya kadar yoğurun.",
     "Bezelere ayırıp üzerini temiz bir bezle örtün ve 15 dakika dinlendirin.",
     "Bezeleri mantı hamuru inceliğinde açıp 1.5 santim büyüklüğünde kareler kesin.",
     "Her bir karenin ortasına iç harçtan yerleştirip çapraz köşelerinden birleştirip üçgen şeklinde kapatın.",
     "Diğer iki ucu parmağınız etrafında birleştirip yüzük şeklinde hazırlayın.",
     "Büyük bir tencerede et suyunu kaynatın.",
     "Haşlanmış nohutları ve hamurları ilave edin.",
     "Hamurlar yumuşayıncaya kadar pişirin.",
     "Margarini eritip salça ve naneyi kavurun ve kaynayan çorbaya ilave edin.",
     "Limon suyunu döküp bir iki taşım daha kaynatın.",
     "Sıcak servis yapın."
   ],
   [
    'Nohudu geceden ıslatırken içerisine az miktarda süt koymanız nohudun suyu çabuk çekmesini sağlayarak kısa sürede pişmesini sağlayacaktır.',
    'Nohudun fazlasını derin dondurucuda saklayarak farklı yemeklerde ve daha sonra kullanabilirsiniz. ',
    'Çorbanızı daha pratik hazırlamak isterseniz hazır mantı da kullanabilirsiniz.',
    'Et suyu içerisine çeşitli sebzeler atarsanız daha da lezzetli bir su elde edersiniz. ',
   ],
   'kolay'
   ),

   new Meal(
    '08', // buraya iki haneli bir id oluştur
    'Ada', // burayı değiştirme
    'Peynirli Börek',
    '',
    60,
    [
      '20 adet baklava yufkası',
      '2 adet börek yufkası',
      '125 gram tereyağı',
      "1 su bardağı süt",
      "1 çay bardağı soda",
      "1 çay bardağı sıvı yağ",
      "Beyaz peynir",
      "Kaşar peyniri",
      "Eritme peyniri",
      "Mozarella peyniri"
      
    ],
    [
     "İlk önce fırın tepsimizi bol tereyağı ile yağlayalım.",
     "Arasına koyacağımız tereyağını eritelim.",
     "Fırın tepsimize baklava yufkasının bir tanesini koyup fırçayla az miktarda yağ sürelim.",
     "10 adet yufkayı aralarına fırçayla az miktarda yağlayarak üst üste koyalım.",
     "Böreklik yufkayı 4 eşit parçaya bölelim. Önce ikiye sonra tekrar ikiye.",
     "Süt, yağ ve sodayı bir kaba koyup karıştıralım.",
     "Yufka parçalarını tek tek bu sosa batırıp baklava yufkasının üzerine serelim.",
     "Üzerine peynirleri serpelim. İstediğiniz peynir çeşidi kullanabilirsiniz.",
     "İkinci yufkayı da aynı şekilde yapıp peynirlerin üzerine kapatalım.",
     "Üzerine az tereyağı gezdirelim.",
     "Kalan 10 adet baklava yufkasını da üzerine aralarını yağlayarak üst üste koyalım.",
     "Üzerine kalan sostan gezdirelim. En üste kalan tereyağını sürelim.",
     "Çok keskin bir bıçakla dilimlere keselim.",
     "200 derece fırında alt üst ayarda kızarana dek pişirelim."
   ],
   [
   ' Bu börekte dilerseniz farklı peynir çeşitleri kullanabilirsiniz. Dilerseniz kıymalı olarak da hazırlayabilirsiniz.',
    'Tereyağını kısık ateşte yakmadan eritmelisiniz.',
   ],
   'orta'
   ),

   new Meal(
    '09', // buraya iki haneli bir id oluştur
    'Ada', // burayı değiştirme
    'Ekşili yuvarlama',
    '',
    60,
    [
      '300 gr. Kuzu eti',
      '3 su bardağı haşlanmış nohut',
      '2 su bardağı bulgur',
      "Tuz",
      "Pul biber",
      "Sıcak su",
      "1 çorba kaşığı biber salçası",
      "1 tutam karabiber",
      "Nar ekşisi",
      "3 çorba kaşığı tereyağ",
      "1 tutam nane"
      
    ],
    [
     "300 gr. Kuzu etini bir gün önce ıslattığınız nohut ile kaynatın.",
     "Ayrı bir kapta bulguru tuz ve pul biber ile harmanlayın. Üzerine suyu ekleyin ve hamur kıvamına gelene kadar karıştırın.",
     "Hamuru iyice yoğurduktan sonra minik köfteler hazırlayın.",
     "Ayrı bir tencede sıcak suyun içerisine atarak haşlayın.",
     "Tencereye salçayı ekleyin.",
     "Tuz, karabiber ve nar ekşisi ekleyerek karıştırın.", "Ayrı bir tavada tereyağını kızdırın.",
     "Pişen köfteleri tencereden alarak et ve nohutun bulunduğu tencereye ilave edin.",
     "Eriyen tereyağa nane ekleyin ve karıştırın.",
     "Nanelerin yanmamasına dikkat edin, karışımı yemeğe ekleyin.",
     "Yaklaşık 10 dakika piştikten sonra yemeğimiz servise hazır. Afiyet olsun..."
   ],
   [
    'Nohudu geceden ıslatırken içerisine az miktarda süt koymanız nohudun suyu çabuk çekmesini sağlayarak kısa sürede pişmesini sağlayacaktır.',
    'Nohudun fazlasını haşlayarak buzlukta saklayabilirsiniz. Böylece acil durumlarda hemen kullanabilirsiniz.'
   ],
   'zor',
   ),

   new Meal( 
    '06', 
   
   'Ada', // burayı değiştirme 
   'Fıstık Köfte',
    '',
     30, 
   [ 
    '1 su bardağı ince bulgur (köftelik bulgur)', 
    '½ su bardağı irmik', 
    'Tuz', 
   ' 1 su bardağı su', 
    '1 adet yumurta', 
    '1 yemek kaşığı biber salçası (veya ½ yemek kaşığı domates salçası, 1 tatlı kaşığı toz kırmızıbiber)', 
    '1 çay bardağından bir parmak eksik su',
     '1.5 çay bardağı un', 
     '500 gram sarımsaklı yoğurt', 
     '½ çay bardağı sıvıyağ”, “1 tatlı kaşığı kuru nane', 
     '1 tatlı kaşığı pul biber'

],
[
 "Köftelik bulguru ve irmiği yoğuracağımız kap içerisinde normal su ile ıslatalım.",
 "Bulgur şiştikten sonra yumurta, tuz, biber salçası ilavesinde bulunarak yoğuralım.",
 "Bir taraftan da yavaş yavaş un ilavesinde bulunalım.",
 "Yoğurmaya devam ederken bir yandan da su kullanalım.",
 "Birbirini tutan bir kıvama gelince hamurdan parmak uzunluğunda parçalar koparalım.",
 "Bir kâse içerisine su hazırlayalım. Elimizi hafif bir şekilde ıslatalım.",
 "Kopardığımız hamur parçasından iri fındık büyüklüğünde parçalar koparalım.",
 "Elimizin orta parmağıyla, elimizin içi arasında sıkıştırıp yerfıstığı şekli verelim.",
 "Kaynar tuzlu suda hazırladığımız fıstık köfteleri haşlayalım.",
 "Pişen fıstık köfteleri servis tabağına alalım. Burada soğuduktan sonra üzerine sarımsaklı yoğurdu gezdirelim." ],
 [
   "püf nokta yok"
 ],
 'kolay'
   ),

   // Adıyaman Şehri

   new Meal( 
    '07', 
    'H', 
    'Alaca çorbası', 
    '', 
    30, 
    [ 'Yarım su bardağı nohut', 
      'Yarım su bardağı yeşil mercimek', 
      'Yarım su bardağı aşurelik buğday', 
      '2 yemek kaşığı salça', 
      '6 su bardağı su', 
      '2 adet kuru soğan', 
      '1 yemek kaşığı tereyağı', 
      '1 tatlı kaşığı tarhun otu', 
      '1 çay kaşığı tuz', 
      '1 çay kaşığı karabiber', 
      '1 yemek kaşığı tarhun otu', 
      '3 yemek kaşığı zeytinyağı'

],
[
 "Nohut ve buğdayı 8-10 saat önceden ıslatın.",
 "Çorbayı yapacağınız zaman sularını süzün.",
 "Nohut, mercimek ve buğdayı ayrı tencerede haşlayın.",
 "Haşlanan ürünleri süzüp büyük bir tencerede bir araya getirin.",
 "Suyu üzerine ekleyip yeniden ocağa alın.",
 "Bu esnada soğanları yemeklik doğrayıp çorbaya ekleyin.",
 "Ara sıra karıştırarak hepsi güzelce pişene kadar kaynatın.",
 "Çorba kaynayınca sos tavasında tereyağını eritin.",
 "İçine salçayı ve tarhunu ekleyip kavurun ve çorbaya ilave edin." ],
 [
   "Nohutu ve buğdayı bir gece önceden ıslatırsanız ertesi gün vakit kaybetmeden çorbanızı pişirmeye başlayabilirsiniz. ",
   "Buğdayı sıcak suyla ıslatmanız daha iyi sonuç almanızı sağlayacaktır."
 ],
 'kolay'
),
new Meal(
  'adı1', 
  'Adı', 
  'Besni Tava', 
  '', 
  60,
  [
      '1 kg kuzu kuşbaşı',
      '1,5 kg patlıcan',
      '1 g domates',
      '250 g yeşilbiber',
      '1 yemek kaşığı pulbiber',
      '1 fincan zeytinyağı',
      '5 diş sarımsak',
      '2 çay kaşığı karabiber',
      '1 su bardağı su',
      '1 yemek kaşığı tuz'
  ],
  [
    "Etler kuşbaşı doğranarak yağda kavrulur.",
    "Patlıcanlar zar şeklinde büyük bir tepsiye doğranır.",
    "Biberler doğranır.",
    "Domateslerin kabukları soyularak doğranır.",
    "Doğranan bu malzemelerin yarısı bir kaba alınır.",
    "Tepside kalan malzemenin üstüne kavrulan kuşbaşılar ilave edilir.",
    "Kuşbaşıların üstüne de öteki ayrılan doğranmış malzemeler eklenir ve üzerine sarımsak rendelenir.",
    "Baharat, yağ,tuz ve su ilave edilerek fırına verilir."
  ],
  [
     "Lavaş ekmeği ile yenilmesi önerilir."
   ],
   'orta'
),
new Meal(
  'adı2', 
  'Adı', 
  'Kavurmalı Hitap', 
  '', 
  30,
  [
      '3 topak kavurma (takriben her topak 100–150 g ağırlığındadır.)',
      '5 baş orta boy soğan',
      '100 g kırmızı pul biber',
      'Yeteri kadar tuz',
      '6 Beze Hamur (birer ekmeklik)'
  ],
  [
    "Kavurmalar küçük küçük doğranır.",
    "Soğanlar soyulur, yıkandıktan sonra halka şeklinde ama ince ince doğranır.",
    "Kavurma, soğan, kırmızı pul biber ile yeteri kadar tuz karıştırılarak yoğrulur.",
    "Hazır hale gelen iç harç bir tepsi içinde pide fırınına götürülür.",
    "Fırıncı ustası yuvarlak açtığı ekmek hamurlarının yarısını taşmayacak şekilde iç harcı açılan hamura sererek eliyle düzler, öteki yarısını da üstüne kapatarak eliyle bastırır.",
    "Ağzı kapalı hıtapları iki eliyle hafif sündürerek uzatır, sonra da ekmek küreğiyle ocağa sürer.",
    "Takriben 15 dakika pişen kavurmalı hıtaplar servise hazır hale gelir."
  ],
   [
    'Püf nokta yok'
   ],
   'kolay'
),

new Meal(
  'adı3', 
  'A,dı', 
  'Buhara Pilavı', 
  '', 
  60,
  [
      '500 gr kuzu eti',
      '1 tane küçük boy havuç',
      '1 tane büyük boy soğan',
      '1,5 su bardağı baldo pirinç (Osmancık pirinç de kullanılabilir)',
      '1 yemek kaşığı sıvı yağ',
      '1 yemek kaşığı tereyağı',
      '1 tatlı kaşığı tuz',
      '1,5 tatlı kaşığı 7 farklı baharat karışımı'
  ],
  [
    "İlk önce kullanılacak olan 500 gr kuzu eti, kuşbaşından biraz daha irice doğranır.",
    "Etin yağları bir kenara ayrılır ve bu yağlar tavada eritilir.",
    "Doğranmış olan etler kendi yağında güzelce sotelenir.",
    "Kendi yağında 20-25 dakika kadar sotelenen etlere ilk önce tuz, sonra da yarım su bardağı sıcak su eklenir ve tencerenin kapağı kapatılır.",
    "Etler suyunu çekene kadar pişirmeye devam edilir.",
    "Diğer bir tencerede bir büyük boy soğan piyazlık şekilde doğranır.",
    "Pilavda kullanılacak olan havuç da olabildiğince küçük şekilde doğranarak soğanın üzerine eklenir.",
    "Soğanlar ilk önce sıvıyağda 2 dakika kadar sotelenir ve üzerine tereyağı da eklenir.",
    "1-2 dakika karıştırılarak sotelenmeye devam edilir.",
    "Hafifçe yumuşayan havuçların üzerine yıkanmış pirinç eklenir ve 3-4 dk daha kavrulur.",
    "En son üzerine baharatlar ve tuz atılarak, 2- 2,5 su bardağı kaynar su eklenir.",
    "Tencerenin kapağı kapatılır ve ocak en kısık ayara getirilir.",
    "Pilav tamamen suyunu çekince ocak kapatılır. Tencere ile kapağı arasına kağıt havlu ya da temiz bir bez serilerek demlenmeye bırakılır",
    "Demlenmeye bırakılan pilav 15 dakika sonra açılır. Bu esnada hafif çukur bir kap ıslatılır ve en dibine kavrulan kuzu etleri konur",
    "Etlerin üzerine demlenen pilav iyice sıkıştırılarak yerleştirilir. En son servis edilmek istenen tabak, çukur kabın üzerine yerleştirilerek ters çevrilir."
  ],
   [
     "Servis yapılırken istenirse tereyağında kavrulmuş dolmalık fıstık ile badem de pilavın üzerine eklenebilir. Maydanoz ile süslenerek görsel bir şölen oluşturulabilir."
   ],
   ''
),

new Meal(
  'adı4', 
  'Adı', 
  'Dövmeç Yemeği', 
  '', 
  40,
  [
      '4 adet patlıcan',
      '4 adet yeşil biber',
      '4 adet domates',
      'Tuz',
      'Karabiber',
      '4 diş sarımsak',
      '5 yemek kaşığı zeytinyağı'
  ],
  [
    "Öncelikle fırında, ocakta veya ızgarada patlıcan, biber ve domatesler közlenir.",
    "Közlenen sebzelerin ilk sıcaklığı geçtikten sonra kabukları soyulur.",
    "Daha sonra çatal yardımıyla közlenmiş patlıcan, domates ve biber ezilir.",
    "Sebzeler bir kabın içerisinde güzelce karıştırılır.",
    "Üzerine zeytinyağı, ezilmiş sarımsak ve baharatlar eklenerek fırın tepsisine dizilir.",
    "Önceden ısıtılmış 200 dereceli fırında yaklaşık 20 dakika kadar pişirilir."
  ],
   [
     "Püf nokta yok"
   ],
   'kolay'
),

new Meal(
  'af1', 
  'af', 
  'Afyon Kebab', 
  '', 
  40,
  [
      '1 kg kuşbaşı dana eti',
      '2 adet kebaplık pide',
      '1 demet Maydanoz',
      '1 tatlı kaşığı tuz',
      '1 tatlı kaşığı karabiber'
  ],
  [
    "Kuşbaşı et, suyunu çekene kadar kavrulur.",
    "Üzerini örtecek kadar su konup tuzu ilave edilerek tekrar pişirilir.",
    "Diğer tarafta pideler kare şeklinde doğranır.",
    "Pideler istenirse arzuya göre fırında ısıtılabilir.",
    "Pişen kuşbaşı etin suyu süzülür. Et suyu, pideleri ıslatmak için kullanılır.",
    "Islatılan pideler servis tepsisine alınır. Üzerine etler yerleştirilip istenirse bir kepçe et suyu gezdirilir.",
    "Yaklaşık 5 dakika kadar fırında dinlendikten sonra üzerine ince doğranmış maydanoz serpilerek servis yapılır."
  ],
   [
     "Not: İstenirse et suyunun içine veya kavrulmakta olan kuşbaşı etin içine bir tatlı kaşığı karabiber ilave edilebilir."
   ],
   'orta'
),
new Meal(
  'adı2', 
  'Af', 
  'Çullama Köfte', 
  '', 
  40,
  [
      '500 gram kıyma',
      '1 adet soğan',
      '1 çay bardağı ince bulgur',
      '8 dal maydanoz',
      'Tuz',
      'Kimyon',
      'Karabiber',
      "Yenibahar",
      "3 adet yumurta",
      "3 çorba kaşığı un",
      "1 çorba kaşığı yoğurt"
  ],
  [
    "Öncelikle kıymayı bir kaba alıp, soğanları rendeleyerek içerisine ilave edin.",
    "Ardından ince bulgur, kıyılmış maydanoz, tuz, kimyon, karabiber ve yenibaharı ekleyerek karıştırmaya devam edin.",
    "Yoğururken biraz da su ekleyebilirsiniz.",
    "Yoğurma işlemi bittikten sonra ceviz büyüklüğünde yuvarlaklar alıp kaynayan suyun içerisinde haşlayın.",
    "Bu sırada bir kasede sos malzemelerini karıştırın.",
    "Haşlanan köfteleri sosa iyice bulayıp kızgın yağda kızartın."
  ],
   [
     "Çoğu tarifte köfte harcında yumurta yoktur, fakat haşlarken dağılma ihtimaline karşın 1 adet yumurta kullanılması önerilir.",
     "Köfteler haşlandığında ılımasını bekleyip hamura batırılırsa yoğurdun kesilme ihtimali ortadan kalkar.",
     "Köftenin içindeki maydanozun ince doğranması gerekir ki ağıza gelmesin.",
     "Dış harcı çok sulu olursa köfteye yapışmaz, o yüzden kıvamda ayarlama yapabilirsiniz.",
   ],
   'orta'
),

new Meal(
  'af3', 
  'Af', 
  'Zürbiye', 
  '', 
  60,
  [
      '250 gr kuşbaşı kuzu eti',
      '1 çay bardağı Zeytinyagi',
      '1 yemek kaşığı Domates salcasi',
      '500 gr Arpacik sogan',
      '1 tatlı kaşığı Tuz',
      "1 tatlı kaşığı Pul Biber",
      "yarım litre Su (yaklaşık 2.2 su bardağı)"
  ],
  [
    "Yemeğimizi yapmak için öncelikle kuşbaşı doğranmış kuzu etini bir tencereye alalım.",
    "Etin üzerine üzerini geçecek kadar su ilave edelim ve etler yumuşayana kadar pişirelim.",
    "Zeytinyağını başka bir tencereye alalım.",
    "Kabuklarını soyduğumuz arpacık soğanları zeytinyağına ekleyelim, soğanlar pembeleşinceye kadar kavuralım.",
    "Soğanlar kavrulunca bir yemek kaşığı domates salçası ekleyelim ve salçanın kokusu çıkıncaya kadar kavuralım.",
    "Haşladığımız eti süzelim ve kavrulan soğanlara ekleyelim.",
    "Et ve soğanları 3-4 dakika daha kavuralım",
    "Eti haşladığımız sudan iki su bardağı alalım ve etlerin üzerine ekleyip, tuzunu ve baharatlarını ilave ettikten sonra bir iki taşım kaynatalım ve ocaktan alalım."
  ],
   [
     "Püf nokta yok"
   ],
   'Orta'
),

new Meal(
  'af3', 
  'Af', 
  'Şebit', 
  '', 
  60,
  [
      '400 gram kıyma',
      '1 adet kuru soğan',
      '2 adet yeşil biber',
      '1 adet iri domates',
      '1 çorba kaşığı domates salçası',
      'Yarım demet maydanoz',
      '3 yemek kaşığı sıvı yağ',
      'Karabiber',
      'Tuz',
      "1 çay kaşığı kimyon",
      "Kırmızı toz biber",
      "1 su bardağı yoğurt",
      "2 diş sarımsak",
       "Tuz",
       "3 su bardağı un",
       "1 çay kaşığı yaş maya",
       "Tuz",
       "1 su bardağı ılık su"
  ],
  [
    "Unu yoğurma kabına alın.",
    "Ortasını havuz gibi açıp tuz ve mayayı ilave edin.",
    "Bir yandan karıştırıp bir yandan ılık suyu ekleyin.",
    "Hamuru kulak memesi kıvamına gelene kadar yoğurup üzerini nemli bir bezle örterek yarım saat kadar dinlendirin.",
    "Bu esnada soğan ve biberleri ince ince kıyıp yağda kavurmaya başlayın.",
    "Ardından kıymayı da ekleyip suyunu çekene kadar kavurmaya devam edin.",
    "Domatesleri rendeleyip tencereye ilave edin ve eriyene kadar tüm malzemeyi pişirin",
    "Kıyılmış maydanoz, salça ve baharatları da ekleyip hepsini iki dakika daha pişirin.",
    "Dinlenen hamurdan ceviz büyüklüğünde parçalar koparıp tatlı tabağı büyüklüğünde açın.",
    "Tavayı iyice ısıtıp hamurların iki tarafını da güzelce pişirin.",
    "Hamurlardan birini genişçe bir tabağa alın. Üzerine kıymalı harçtan yayın.",
    "Aynı işlemi 5 kat hamur olacak şekilde sürdürün.",
    "Tüm malzemeyi bu şekilde tabaklara bölüştürün.",
    "Sarımsağı ezip yoğurtla karıştırın.",
    "Kırmızı biberi tereyağında yakın.",
    "Kıymalı hamurların üzerine önce yoğurdu sonra da kırmızı biberli yağı gezdirin.",
],
[
  'sıcak servis edilmesi çok önemli'
],
'Zor'
),

new Meal(
  'af4', 
  'Af', 
  'İlibada dolması', 
  '', 
  60,
  [
      "1.5 kg labada (efelek, evelik otu olarak da bilinir)",
      "1 su bardağı düğü (ince bulgur)",
      "1 su bardağı göce (ince buğday)",
      "2 çorba kaşığı un",
      "2 orta boy soğan",
      "2-3 diş sarımsak",
      "Yarım su bardağı sıvı yağ",
      "1 çorba kaşığı salça",
      "2 yemek kaşığı süzme yoğurt",
      "1 tatlı kaşığı kuru nane",
      "1 tatlı kaşığı kırmızı biber",
       "1 tatlı kaşığı tuz"
  ],
  [
    "Düğü, çekilmiş göce ile karıştırılır.",
    "Yarım su bardağı sıvı yağın birazı tencereye konulur ve içine ince doğranmış soğan ilave edilir.",
    "Pembeleşene kadar kavrulur.",
    "Un ilave edilir.",
    "Kavrulan soğanlara düğü ve çekilmiş göce karışımı eklenir ve az miktarda su ile pişirilir.",
    "Tuz, kuru nane ve kırmızı biber ilave edilir.",
    "Labada hafif haşlanır.",
    "Hazırlanan harç, labada ile muska şekli verilerek sarılır, tencereye dizilir ve üzerine su ilave edilip pişirilir.",
    "Tavada kızdırılan yağa salça konularak, içine nâne ve kırmızı biber katılır.",
    "Pişen dolmanın üzerine önce sarımsaklı yoğurt daha sonra hazırlanan sos dökülerek servis edilir"
      ],
      [
        'İlibada taze olursa daha lezzetleri olur'
      ],
      'Zor'
    ),

    new Meal(
      'af5', 
      'Af', 
      'Haşhaşlı Pide', 
      '', 
      60,
      [
          "1 adet ekmeği hamuru(afyon ekmeği için hazırlanmış)",
          "100 gr haşhaş ezmesi",
          "80 gr un",
          "100 gr eritilmiş tereyağı",
          "50 gr sıvı yağ"
      ],
      [
        "Afyon ekmeği tarifinde anlatıldığı gibi hazırlanan hamur, unlanmış hamur tahtasının üzerine yerleştirilir ve yaklaşık bir parmak kalınlığı olacak şekilde yassıltılır.",
        "Üzerine yağla karıştırılmış haşhaş sürülür.",
        "Hamurun ortasında kare şeklinde bir bölge kalacak şeklinde kenarlardan çekilip her parça ortaya doğru katlanır.",
        "Katlanan her parçanın üzerine haşhaş karışımından sürülür.",
        "Kare şeklinde bir hamur elde edilir.",
        "En üstede haşhaş sürülüp parmak uçları ile hamurun üzerine bastırılarak dikdörtgen şeklinde uzatılır.",
        "Hafifçe unlanmış uygun bir tepsi içerisinde 220-240 derecede önceden ısıtılmış fırında 30 dk. pişirilir."
  ],
  [
    'Püf nokta yok'
  ],
  'Zor'
),

// Ağrı Şehri

new Meal(
  'ağ1', 
  'Ağ', 
  'Abdigör Köfte', 
  '', 
  200,
  [
      "1 kg dana bonfile",
      "2 adet yumurta",
      "1 adet soğan",
      "2 çorba kaşığı karabiber",
      "2 çay kaşığı kırmızı toz biber",
      "Garnitür için:",
      "2 adet patlıcan",
      "250 gram sivri biber",
      "1 bağ maydanoz",
       "1 kg domates"
  ],
  [
    "Bonfileler, yöreye ait taş üzerinde tahta tokmakla 25 dakika sinir ve yağları ayrılacak şekilde dövünlür.",
    "Ete 2 tatlı kaşığı tuz eklenir.","25 dakika daha dövülür.",
    "Dövme işlemi bittikten sonra, macun kıvamına gelen ete, ince kıyılmış soğan, karabiber, toz biber, yumurta ve un eklenip yoğurulur.",
    "Diğer tarafta, geniş bir tencereye, yarısını geçecek kadar su konur.",
    "2 tatlı taşığı tuz eklenir.",
    "Kaynamaya yakın suya 1 paket toz bulyon atılır.",
    "Köftelik malzemeden ceviz büyüklüğünde parçalar koparılıp, ıslak el ile şekil verilir ve suya atılır.",
    "Tencerenin kapağı kapatılıp,20-25 dakika harlı ateşte pişirilir.",
    "Köfteler piştikten sonra, suyu süzülür.",
    "Köfteler, tereyağında kavrulur.",
    "Sunum için servis tabağında pilav havuz şeklinde açılır.",
    "Üzerine köfteler bırakılır.",
    "Diğer tarafta daha önceden hazırlanıp, kabuğu soyulmuş ve ufak doğranmış 50 gram tereyağında sote edilmiş domates sosu ilave edilir.",
      ],
      [
        "Garnitürle süsleyerek servis yapılır.",
      ],
      'Zor'
    ),

    new Meal(
      'ağ2', 
      'Ağ', 
      'Hingel', 
      '', 
      60,
      [
          "2 kase un",
          "2 yumurta",
          "1,5 su bardağı su",
          "Tuz",
          "2 litre su",
          "2 büyük kase sarımsaklı yoğurt",
          "125 gram tereyağı",
           "1 kuru soğan"
      ],
      [
        "Un, yumurta, su ve tuzu derin bir kapta karıştırın.",
        "Kulak memesinden biraz daha sert bir hamur elde edeceksiniz.",
        "Hamurunuzu dinlenmeye bırakın.",
        "Bu sırada 2 litre suyu kaynatmaya başlayın.",
        "Bir yandan da soğanları küp küp doğrayın.",
        "Doğradığınız soğanları bir tencerede tereyağı ile birlikte soğanlar renk değiştirene kadar kavurun.",
        "Daha sonra dinlenen hamuru oklavayla incecik açın.",
        "Yeterince açtıktan sonra hamuru oklavayla sarın.",
        "Oklavanın üzerinden sarılı hamuru uzunlamasına kesip oklavayı çıkarın."
          ],
          [
            "Elde ettiğiniz hamurun sert olması gerekmektedir.",
            "Bezelerin üzerinin kurmaması için üzerine nemli bez örtmelisiniz.",
            "Patatesler hamurlar pişerken tekrar pişeceği için haşladığınız zaman biraz diri bırakabilirsiniz.",
          ],
          'Orta'
        ),

        new Meal(
          'ağ3', 
          'Ağ', 
          'Murtuğa', 
          '', 
          15,
          [
              "Dört adet yumurta",
              "Bir su bardağı un",
              "¾ su bardağı sıvı yağ",
              "Bir çay kaşığı tuz",
              "Bal veya reçel"
          ],
          [
            "Sıvı yağ tavaya konulur, ısınınca un eklenir.",
            "Tahta kaşık yardımıyla unun kokusu çıkana kadar kavrulur, tuzu eklenir.",
            "Dört yumurta bir kaba kırılır.",
            "Kavrulan unun üzerine eklenir.",
            "Yumurtalar çok parçalanmadan hafifçe karıştırılır ve altı kapatılır.",
            "Murtuğa bal veya reçel ile servis edilir."
              ],
              [
                "Murtuğanın üzerine öğütülmüş ceviz serpilebilir.",
                "Sıvı yağ yerine üç yemek kaşığı tereyağı kullanılabilir.",
                 "Şekerli un kavurmasi şeklinde de yapılabilir.",
              ],
              'Kolay'
            ),

            new Meal(
              'ağ4', 
              'Ağ', 
              'Halise', 
              '', 
              120,
              [
                  "500 gram aşurelik buğday",
                  "500 gram kuşbaşı et",
                  "1 su bardağı nohut",
                  "Tereyağı",
                  "Tuz",
                  "Karabiber",
                   "Pul biber"
              ],
              [
                "Buğdayı ve nohudu bir gece önceden ayrı ayrı kaselerde suya koyun.",
                "Ertesi gün etleri, buğdayı, nohudu, tuzu ve karabiberi düdüklü tencereye alın.",
                "Üzerini 4-5 parmak geçecek kadar su ekleyin.",
              "Kapağını kapatıp 2 saat kadar haşlayın."      ,
                "Buğdaylar yumuşayıp erimeye başladığında ocaktan alıp tahta kaşıkla ezin."        ,
                "Üzerine tereyağında yakılmış pul biber gezdirip servis edin." ,
              ],
              [
                'Püf nokta yok'
              ],
              'Orta'
            ),
            new Meal(
              'ağ5',
              'Ağ',
              'Yalancı Köfte',
              '',
              30,
              [
                  "İnce bulgur",
                  "Yarım su bardağı un",
                  "1 adet yumurta",
                  "1 adet soğan",
                  "Salça"
              ],
              [
                  "İnce bulgurun üzerine çıkacak kadar sıcak su ekleyip şişmesini sağlayın.",
                  "İçine yarım su bardağı un, yumurta, soğan ve salça katıp bütün malzemeyi yoğurun.",
                  "Fındık büyüklüğünde parçalar koparıp avucunuzun içinde yuvarlayıp köfteler hazırlayın.",
                  "Hazırladığınız köfteleri sıcak suda haşlayıp kevgirle servis tabağına alın.",
                  "Üzerine yoğurt dökün."
              ],
              [
                'Hamuru en az 15DK yoğurun (bu kızartırkan parçalanmasına engel olur)'
              ],
              'Kolay'
          ),
          new Meal(
            'Aks1',
            'Aks',
            'Aksaray Tava',
            '',
            90,
            [
                "1 buçuk kilo küp küp doğranmış et",
                "2-3 kilo domates",
                "1 kilo biber",
                "5 adet kırmızıbiber",
                "5 baş sarımsak(tam)",
                "250 gr Tereyağ",
                "Yarim çay bardağı zeytinyağ",
                "Sumak",
                "Kırmızı biber",
                "Karabiber", 
                "Tuz"
            ],
            [
              "Domates ,biberler, sarımsak tavanın içine doğranıp karıştırılır.",
              "Üzerine et ve baharatlar konularak tekrar karıştırılır. (malzemeler iri doğranacak)",
              "Sonrasında üzerine top top tereyağı koyulur üzerinde zeytinyağ gezdirilir.",
              " 240 derece fırında pişene kadar yaklaşık bir buçuk saat kadar tutulabilir."
            ],
            [],
            'Orta'
        ),
        new Meal(
          'aks2',
          'Aks',
          'Mantarlı Bulgur Pilavı',
          '',
          30,
          [
              "2 yemek kaşığı tereyağı",
              "2 yemek kaşığı zeytinyağı",
              "1 adet soğan",
              "10 – 15 adet mantar(isteğe bağlı )",
              "1 yemek kaşığı domates salçası",
              "1 yemek kaşığı biber salçası",
              "2 su bardağı bulgur",
              "4 su bardağı su",
              "Tuz",
              "Karabiber"
          ],
          [
            "Pilav tenceresine tereyağı ve zeytinyağını ekleyin, ardından yemeklik doğranmış soğanı ekleyip, pembeleşinceye kadar soteleyin.",
            "Ardından mantar, salçaları ekleyip bir tur çevirin ardından tuz, karabiber ve pilavlık bulguru ekleyip kavurmaya devam edin.",
            "Suyunu ilave edip, su kaynayana kadar harlı, su kaynadıktan sonra kısık ateşte pişirin.",
            "Suyunu çektiğinde kapağını açıp üzerine kâğıt havlu kapatıp demlenmeye bırakın.",
          ],
          [
            'İsteğe bağlı Havuç da ekliyebilirsiniz',
            'İsteğe bağlı soğanda eklenebilir',
            "Sıcak servis edin."
          ],
          'Kolay'
      ),
      new Meal(
        'aks3',
        'Aks',
        'Ayva Dolması',
        '',
        60,
        [
            "6 adet orta boy ayva",
            "1 adet orta boy kuru soğan",
            "200 gram az yağlı kıyma",
            "3 yemek kaşığı zeytinyağı",
            "1 çay bardağı pirinç",
            "1 adet orta boy limon",
            "1/4 demet doğranmış maydanoz",
            "2 su bardağı sıcak su",
            "2 yemek kaşığı üzüm pekmezi",
            "1 çay kaşığı tuz",
            "1/2 çay kaşığı karabiber"
        ],
        [
          "Sap kısımlarını aldığınız ve üst kısımlarını kapak şeklinde kestiğiniz ayvaların iç kısımlarını bir oyacak yardımıyla boşaltın. Taban kısımlarını delmemeye özen gösterin. Kararmaması için taze sıkılmış limon suyu ilave ettiğiniz suda bekletin.",
          "Kıymalı iç harcı için; kuru soğanı küçük küpler halinde kesin. Bol suda yıkadığınız pirinçlerin suyunu süzdürün. Pirinç, doğranmış kuru soğan, maydanoz, zeytinyağı, tuz, karabiber ve kimyon ilavesiyle karıştırın.",
          "Limonlu suda bekleyen ayvaları fazla suyunu süzdürüp fırın tepsisine yerleştirin. İç kısımlarını hazırladığınız kıymalı iç harçla doldurun.",
          "Sıcak suyu üzüm pekmeziyle karıştırıp kenar kısmından fırın tepsisine alın. Ayva dolmalarını önceden ısıtılmış 180-200 derece fırında 30 dakika kadar pişirin.",      
        ],
        [
          'İsteğe bağlı Dereotuyla süsleyebilirsiniz',
          'Sıcak Servis edin'
        ],
        'Orta'
    ),
    new Meal(
      'aks4',
      'Aks',
      'Soğan Dolması',
      '',
      60,
      [
          "3-4 iri soğan",
          "1,5 çay bardağı pirinç",
          "300 gr. kıyma",
          "1 küçük soğan",
          "1 yemek kaşığı salça",
          "2-3 diş sarımsak",
          "1 çay kaşığı tuz ve baharatlar",
          "1 yemek kaşığı karışık salça",
          "2,5 su bardağı sıcak su",
          "2-3 yemek kaşığı sıvı yağ"
      ],
      [
        "Soğanları orta kısmından başlıyarak yarısını kesin.",
        "Tencerenin içine koyup üstünü kapatacak şekilde su koyup haşlamaya bırakın. Orta kısmı güzelce açılmaya başladığında ocaktan alıp sığuk suya tutun.",
        "İç harç için kıyma, pirinç, rendelenmiş soğan ve sarımsak, baharatlar, sıvı yağ ve salçayı ilave edip tuz ile birlikte elinizle yoğurarak karıştırın.",
        "Soğan yapraklarını dikkatlice ayırın. Her bir yaprak içine iç harcından koyup dikkatlice sarın.",
        "Tencerenin altına soğanın cücüklerini koyup dolmalarınızı üzerine sıralayın. 1 yemek kaşığı salçayla 2,5 su bardağı sıcak suyu karıştırın ve dolmanın üzerine boşaltın.",
        "Fincan tabağını ters çevirip dolmanın üzerine koyun tencerenin kapağını kapatıp ocağa koyun. Kısık ateşte pişmeye bırakın. 20-30dk"
      ],
      [
        'Bu tarifi Youtubedan izleyip yapmanı tavsiye ederim (:(ustaysan başka tabiki (;))'
      ],
      'Orta'
  ),
  new Meal(
    'aks5',
    'Aks',
    'Zeytinyağlı Şeker Pancarı',
    '',
    60,
    [
        "400 gr şeker pancarı",
        "1 adet orta boy havuç",
        "1 adet orta boy soğan",
        "yarım su bardağı bezelye",
        "yarım çay bardağı zeytinyağı",
        "yarım su bardağı portakal suyu",
        "4 su bardağı su",
        "tuz"
    ],
    [
      "Pancarı soyup pütürleri temizleyin ve yıkayın. Pancarı fındıktan biraz büyük küpler halinde doğrayın. Havucu soyup pancarların büyüklüğünde doğrayın.",
      "Soğanı yemeklik doğrayıp zeytinyağı ile birlikte tencereye alın.",
      "Soğanlar hafifçe pembeleşince içine pancarları ekleyin ve 3-4 dakika kadar kavurun.",
      "Kavurduğunuz soğan ve pancarlara havuçları ekleyerek 2 dakika daha kavurun.",
      "Son olarak bezelyeleri, portakal suyu ve suyu ekleyerek tuz ile tatlandırın. Karıştırıp kapağını kapatın.",
      "Kısık ateşte pancarlara çatal batacak kıvama gelinceye kadar neredeyse 1,5 saat kadar pişirin.",
      "Ilık ya da soğuk servis yapın."
    ],
    [
      'püf nokta yok'
    ],
    'Orta'
),
new Meal(
  'am1',
  'Am',
  'Helle Çorbası',
  '',
  60,
  [
      "1 su bardağı yeşil mercimek",
      "3 çorba kaşığı un",
      "1 tatlı kaşığı tuz",
      "6 su bardağı su",
      "1 adet kuru soğan",
      "1 çorba kaşığı tereyağı",
      "2 tatlı kaşığı kırmızı pul biber"
  ],
  [
    "Mercimek haşlanır.",
    "Un yağsız olarak kısa süre kavrulur.",
    "Soğuyunca üstüne soğuk su katılıp inceltilir.",
    "Kaynamakta olan mercimeğe unlu su karıştırılıp akıtılır.",
    "Sıcak su konur.",
    "Başka tavada ince kıyılmış soğan tereyağında pembeleştirilir.",
    "Pul biber katılıp, ateşten indirilir.",
    "Kaynamakta olan çorbaya ilave edilip, bir taşım daha pişirilir."
  ],
  [],
  'Orta'
),
new Meal(
  'am2',
  'Am',
  'Patlıcan Çullaması',
  '',
  60,
  [
      "6 adet iri boy çekirdeksiz patlıcan",
      "Yarım demet maydanoz",
      "2 orta boy soğan",
      "Kara biber, kırmızı biber, tuz",
      "1 çay bardağı sıvı yağ",
      "2 adet domates",
      "1 adet iri boy dolma biber",
      "2 diş sarımsak"
  ],
  [
    "Patlıcanlar, dolma biberler ve domatesler ateşte közlenir.",
    "Kabukları soyularak ince olarak doğranır.",
    "Yarım ay şeklinde kesilen soğanlar, maydanoz ve sarımsak ince ince doğranarak tüm malzemeler karıştırılır.",
    "Servis yapılır."
  ],
  [
    'Püf nokta yok'
  ],
  'Orta'
),
new Meal(
  'am3',
  'Am',
  'Hasuda Tatlısı',
  '',
  60,
  [
      "1 su bardağı şeker",
      "5 su bardağı su",
      "1 su bardağı un",
      "2 yemek kaşığı tereyağı"
  ],
  [
    "Suyu ve şekeri orta ateşte kaynatın.",
    "Kaynamaya başlayınca ocağı kısarak kıvama gelene kadar 20-30 dakika kadar kaynatın.",
    "Şerbet kaynayınca içine az miktarda un ekleyip çırpın.",
    "Daha sonra tavada yağı eritip hazırlanan şerbetle unu ilave edip karıştırın.",
    "5-10 dakika ateşte pişirin."
  ],
  [
    'Üzerine Ceviz veya dilediğiniz bir lezzet ile süsleyin'
  ],
  'Orta'
),
new Meal(
  'am4',
  'Am',
  'Bakla Dolması',
  '',
  240,
  [
      "3 su bardağı kuru iç bakla",
      "1 su bardağı dolma içi (kırık yarma ince bulgur karışımı)",
      "2 adet kuru soğan",
      "1/2 demet maydanoz",
      "1/2 demet dereotu",
      "1 çorba kaşığı reyhan",
      "2 yemek kaşığı salça",
      "kırmızıbiber",
      "karabiber",
      "tuz"
  ],
  [
      "Bakla ılık suda bekletilir ve ortadan ikiye kesilir kabukları çıkartılır ve tekrar doğranır.",
      "Doğranan baklalar büyük bir kaba alınır ve ince doğranmış soğan, salça, dolma içi, ince doğranmış maydanoz, dereotu, reyhan, kırmızı biber, karabiber, tuz ve bir kase kadar su eklenerek karıştırılır ve iç hazırlanır.",
      "Yaprağın ortasına iç konularak bohça şeklinde sarılır.",
      "Tencerenin dibine istenirse kemikli kaburga eti konulur ve üzerine sarılmış dolmalar dizilir.",
      "Dolmaların üzerine sıcak su gezdirilir ve kapak koyularak kısık ateşte yaklaşık 3-4 saat pişirilir.",
      'Sosu için soğanlar yağda kavrulur içine salça eklenir ve dolmaların üzerine yayılarak 1-2 taşım daha kaynatılır.',
  ],
  [
    'Sıcak servis edilir.',
    'İsteğe göre tencerenin dibine et yerine pastırma da konabilir.'
  ],
  'Orta'
),
new Meal(
  'am5',
  'Am',
  'Cızlak',
  '',
  15,
  [
      "1 su bardağı süt",
      "2 adet yumurta",
      "1 tatlı kaşığı maya",
      "5 yemek kaşığı sıvı yağ",
      "1 su bardağı un",
      "1 çay kaşığı tuz"
  ],
  [
    'Bütün malzemelerden kek hamurundan daha akışkan bir hamur elde edilir.',
    'Bir kepçe yardımıyla krep tavasına incecik yaydıktan sonra arkalı önlü pişirilir.'
  ],
  [
    'Kahvaltı sofralarında servis edebilirsiniz.',
    'Hazırladıktan beş dakika sonra mayanın gelmesini beklemeden pişirmeye başlayın.'
  ],
  'Kolay'
),

// Ankara Şehri 

new Meal(
  'ank',
  'Ank',
  'Bici Aşı',
  '',
  30,
  [
      "20 tane taze asma yaprağı",
      "1 çay bardağı bulgur",
      "Yarım çay bardağı sıvı yağ",
      "1 orta boy soğan",
      "1 çay kaşığı biber salçası",
      "1 tatlı kaşığı domates salçası",
      "2 su bardağı su",
      "4 diş sarımsak",
      "3 yemek kaşığı süzme yoğurt",
      "Tuz"
  ],
  [
    'Soğanı ince ince doğrayın.',
    'Asma yapraklarını da yıkayıp ince ince doğrayın.',
    'Sıvı yağı tencerede ısıtıp içine soğanları ekleyin.',
    'Soğanlar kavrulduktan sonra içine salçaları ve asma yapraklarını ilave edin.',
    'Birkaç dakika daha kavurduktan sonra suyu ekleyin.',
    'Su kaynadığı noktada içine bulguru ekleyin.',
    'Bulgurlar kabarınca ateşten alıp tabaklara bölüştürün.',
    'Bu esnada sarımsağı ezip süzme yoğurtla karıştırarak sos yapın.',
    'Bici aşının üzerine yoğurtlu sosu gezdirip servis edin.'
  ],
  [
    'İsteğe bağlı Asma yapmağı yerine Lahana kullanabilirsin'
  ],
  'Kolay'
),
new Meal(
  'ank2',
  'Ank',
  'Tutmaç çorbası',
  '',
  30,
  [
      "Yarım su bardağı haşlanmış nohut",
      "Yarım su bardağı erişte",
      "Yarım su bardağı yarı haşlanmış yeşil mercimek",
      "1 adet soğan",
      "1 tatlı kaşığı kuru nane",
      "Tuz",
      "Karabiber",
      "Zeytinyağı",
      "1 litre su",
      "1 yemek kaşığı un",
      "1 adet yumurta sarısı",
      "1,5 su bardağı süzme yoğurt"
  ],
  [
    'Çorba tenceresinde suyu kaynatın.',
    'Kaynayan suya nohut, mercimek ve erişte ekleyip, erişteler pişene kadar kaynatın.',
    'Ayrı bir kasede terbiye malzemelerini çırpın.',
    'Kaynattığınız çorbanın suyundan bir kepçe alarak azar azar terbiyeye döküp ılıştırın.',
    'Terbiyeyi çorbanın içine ilave edip 5 dakika daha kaynatın.',
    'Ayrı bir tavada yemeklik doğranmış soğanı zeytinyağında pembeleşinceye kadar kavurun.',
    'Kuru nane, tuz, karabiber ekleyip karıştırın.',
    'Soğanları da çorbaya ilave edip bir taşım daha kaynattıktan sonra servis edin.'
  ],
  [
    'Soğanlar iyice karamalize olmalı',
    'Yeşil mercimekleri iyice haşlamayın biraz diri kalsın'
  ],
  'Orta'
),
new Meal(
  'ank3',
  'Ank',
  'Yayla Sakalı Salatası',
  '',
  15,
  [
      "1 Demet yayla sakalı(yemlik)",
      "1 Kase yoğurt",
      "2 Yemek kaşığı sıvı yağ",
      "1 Çay kaşığı kırmızı toz biber",
      "2-3 Diş sarımsak"
  ],
  [
    'Bol su ile Yayla Sakalı (yemlik) otlarınızı yıkayın ve süzün.',
    'Yaklaşık 2 cm uzunluğunda kesin.',
    'Kaynayan suyun içine atın ve 5 dakika kadar haşlayın.',
    'Süzgece alın, soğuk suyun altına tutun.',
    'Sonra da suyunu iyice süzün.',
    'Sarımsakları dövün.',
    'Yoğurt ve biraz tuz ile karıştırın.',
    'Yayla Sakalı otlarınız yoğurt ile karıştırın.',
    'Küçük bir tavaya sıvı yağ koyun.',
    'Kokusu çıkana kadar şöyle bir çevirin.',
    'Yoğurdun üzerine kaşıkla gezdirin.'
  ],
  [
    
    'Kırmızı toz biber, acı seviyorsanız biraz pul biber ilave edin.',
    'Haşlama esnasında sert kalırsa biraz daha haşlayın'
    
  ],
  'Kolay'
),
new Meal(
  'ank4',
  'Ank',
  'Tantak tiridi',
  '',
  60,
  [
      "1 kg kemikli kuzu eti",
      "1 adet tandır ekmeği ( Bayat ekmek kullanın )",
      "3-4 adet kuru soğan",
      "4 su bardağı et suyu",
      "Yarım çay bardağı sıvı yağ",
      "Tuz",
      "Kırmızı pul biber",
      "Karabiber"
  ],
  [
    'Eti düdüklü tencereye koyup üzerini 4 parmak geçecek şekilde su ilave ederek 45 dakika pişiriyoruz.',
    'Pişen eti hafif soğuttuktan sonra didikleyerek parçalara ayırıyoruz.',
    'Ekmekleri resimdeki gibi parçalara kesiyoruz.',
    'Borcama dizip üzerine 4 su bardağı et suyu gezdiriyoruz.',
    'Soğanları ortadan ikiye bölüp verev şekilde ince kesiyoruz.',
    'Yarım çay bardağı sıvı yağında hafif kavuruyoruz.',
    'Et suyu dökülmüş ekmeğin üzerine gezdiriyoruz.',
    'Etleri de üzerine yerleştirip baharatları etin üzerine serpiştiriyoruz.',
    '180 derece önceden ısıtılmış fırında 10-15 dakika pişiriyoruz.',
    'Üzerine minik doğradığımız maydanozları serpiştiriyoruz.'
  ],
  [
    'püf nokta yok'
  ],
  'Orta'
),
new Meal(
  'ank5',
  'Ank',
  'Beypazarı Güveci',
  '',
  60,
  [
      "1 kilo kuşbaşı",
      "1 paket margarin",
      "2 yemek kaşığı tereyağ",
      "1 paket et suyu",
      "3 su bardağı pirinç",
      "2 adet orta boy domates",
      "4 tane yeşil biber",
      "5 su bardağı sıcak su"
  ],
  [
    'Tencereye kuşbaşı doğranmış etler atılır.',
    'Etler suyunu çekince 1 paket margarin katılır ve et pişirilir.',
    'Pişmiş etler güveç kabına alınır ve içerisine 2 yemek kaşığı tereyağ katılır.',
    'Domates ve yeşil biberler doğrandıktan sonra etlerin içerisine katılarak tasarlanır.',
    'Et domates ve biberlerle güzelce tasarlandıktan sonra yıkanmış pirinç katılır.',
    '1 paket et suyu ve 5 su bardağı sıcak su katıldıktan sonra güveç pişmeye bırakılır.',
    'Pişen güveç ocaktan alınıp demlenmeye bırakılır.',
    '10-15 dakika güveç demlendikten sonra servis edebilirsiniz.'
  ],
  [
    'püf nokta yok'
  ],
  'Orta'
),

// Antalya Şehri

new Meal(
  'ant1',
  'Ant',
  'Testi Kebabı',
  '',
  120,
  [
    "1 Adet Testi (Çömlek De Kullanılabilir.)",
    "2 Kg Kuşbaşı Doğranmış Et",
    "7 Domates",
    "20 Adet Sarımsak",
    "12 Adet Sivri Biber",
    "Sıvı Yağ",
    "Tuz",
    "Karabiber",
    "Kimyon"
  ],
  [
    'Öncelikle testiye sıvı yağla et birlikte konur.',
    'Testi önceden hazır edilmiş köz halinde bulunan ateşin ortasına gömülerek, etin pişmesi sağlanır.',
    'Etin suyu çekilip kavrulmaya başladığında, domates, sarımsak, sivri biber, tuz ve karabiber eklenerek tam bir karışım hali alır.',
    'Ardından testinin ağzı bir bez konduktan sonra orta kıvam hazırlanmış hamurla sıvanır.',
    'Hamurun ortasında küçük bir delik açılır.',
    'Bu haliyle köz ateşe gömülür.',
    'Yaklaşık iki saat ateşte bekletilir.',
    'Bu zaman içerisinde dengeli pişmesini sağlamak için ara sıra testi silkelenir.',
     'Testinin üzerindeki hamurun pişmesinden içinde bulunan malzemenin de piştiği anlaşılır.',
     'Daha sonra testi ateşten alınarak 20 dakika dinlendirilir.',
     'Servis yapmak için testinin ağzında sıvalı olan hamur çıkartılır üzerine kimyon karabiber gibi baharatlar serpilerek servise hazır hale getirilir.'
   ],
   [
     'Geleneksel uygulamalarda olmamakla birlikte turistik restoranlarda testinin ağzı şov amaçlı olarak satırla kırılarak yemek testinin içinden servis edilir.'
   ],
   'Zor'
),
new Meal(
  'ant2',
  'Ant',
  'Taratorlu tekir tava',
  '',
  30,
  [
    "1 kg tekir balığı",
    "sıvı yağ Kızartmak için",
    "½ adet limonun suyu",
    "tuz",
    "3 yemek kaşığı zeytinyağı",
    "5 diş sarımsak",
    "½ demet maydanoz",
    "1 dilim ekmek içi",
    "1 tatlı kaşığı kırmızı toz biber",
    "tuz",
    "½ su bardağı ceviz içi",
    "½ adet limonun suyu",
    "½ su bardağı kıyılmış zeytin"
  ],
  [
     'Öncelikle balıkları güzelce temizleyin ve pullarını bir kaşık yardımıyla kazıdıktan sonra balıkları bol suyla yıkayın ardından süzgece alıp suyunu süzün.',
     'Yarım limon suyunu ve tuzu balıkların üzerine serpiştirip ovun ve balıkları 20 dakika kadar süzgeçte bekletin.',
     'Maydanozu temizleyip kıydıktan sonra sarımsakları soyup ezin ve bu karışımın içine ekmekleri ufalayın.',
     'Zeytinyağını tavaya alıp ısıtın ve o esnada içine zeytin maydanoz sarımsak ekmek içi ve tuz ekleyip 2-3 dakika orta hararetli ateşte karıştırma devam edin.',
     'Elde ettiğiniz karışımı ocaktan alıp içine limon suyu ve kırmız toz biberi ekleyip karıştırın.',
     'Siv yağı tavada kızdırın ve balıkların iki tarafını da iyice kızartın.',
     'Balığı kızarttık sonra üzerindeki fazla yağı almak için kağıt havlu üzerine alabilirsiniz.',
     'Servis tabağına al tarator sosla birlikte servis edin'
   ],
   [
    'Sıcak şekilde servis edin',
    'Sosun kıvamını koyulaştırmak için sosa mayonez ekleyebilirsiniz'
   ],
   'Orta'
),
new Meal(
  'ant3',
  'Ant',
  'Sedik aşı',
  '',
  30,
  [
    "2 çarliston biber",
    "2 domates",
    "1 soğan",
    "Yarım çay bardağı ayçiçeği yağı",
    "1 yemek kaşığı domates salçası",
    "2 su bardağı ince bulgur",
    "5 su bardağı sıcak su",
    "1 su bardağı tavuk suyu",
    "Tuz",
    "Kuru nane",
    "Kırmızı pul biber"
  ],
  [
     'Soğanın kabuklarını soyalım ve küp şeklinde doğrayalım.',
     'Tencerede yağ ile hafifçe kavurun.',
     'Domateslerin kabuklarını soyup rendeleyin.',
     'Biberleri de iri iri doğrayın.',
     'Ardından biberleri soğana ilave edip kavurun üzerine rendelenmiş domatesleri de ekleyip kavurmaya devam edin.',
     'Bulguru da ekleyin bir iki kez karıştırdıktan sonra sıcak su ve tavuk suyunu ekleyin.',
     'Tuzunu da ekleyip pişirin.',
     'Kuru naneyi de ekleyip 1-2 taşım kaynatın ve ocaktan indirin.',
     
   ],
   [
    'İsteğe bağlı kaselerin üzerine pul biber ekleyebilirsiniz .',
    'Sıcak servis yapın.'
   ],
   'Orta',
),
new Meal(
  'ant4',
  'Ant',
  'Gökçesu Pilavı',
  '',
  30,
  [
    "1 tepeleme su bardağı pirinç",
    "2 su bardağı sıcak su",
    "1 adet havuç(rendelenmiş)",
    "1 su bardağı haşlanmış nohut",
    "1 tutam dereotu",
    "Bir miktar sıvı yağ",
    "Tuz",
    "2 adet defne yaprağı"
  ],
  [
     'Pirinci iyice yıkayıp suyunu süzün.',
     'Tencereye sıvı yağı ile birlikte pirinçleri tencereye koyup bir süre kavurun.',
     'Havucu haşlanmış nohutu ve tuzu da ilave ederek bir süre daha kavurun.',
     'Ardından sıcak suyu ve defne yaprağını ekleyip hafifçe karıştırın.',
     'Daha sonra kapağını kapatarak pişirmeye bırakın.',
     'Pilav pişince tencerenin üzerine havlu peçete koyarak kapağını kapatın ve dinlendirin.',
     'Dinlenen pilavın içerisine dereotunu ilave edip karıştırın.',
     
   ],
   [
    'püf nokta yok'
   ],
   'Orta'
),
new Meal(
  'ant5',
  'Ant',
  'Barbunya Piyazı',
  '',
  30,
  [
    "1 su bardağı ayıklanmış taze barbunya",
    "1 adet kuru soğan",
    "8-9 dal maydanoz",
    "7-8 dal dereotu",
    "1 adet domates",
    "Yarım limon suyu",
    "5-6 kaşık zeytinyağ",
    "Tuz"
  ],
  [
     'Ayıklayıp yıkadığımız barbunyaları üzerini 5 parmak geçecek kadar su da barbunyalar yumuşayıncaya kadar haşlıyoruz.',
     'Haşladığımız barbunyaların suyunu süzüp soğumaya bırakıyoruz.',
     'Diğer tarafta soğanı piyazlık olarak halka halka kesip tuzla hafifçe ovalayıp sudan geçiriyoruz.',
     'Maydanoz ve dereotunu ince ince kıyıp domatesi küçük küçük doğruyoruz.',
     'Tüm malzemeyi birleştirip limon suyu zeytinyağ ve tuzunu da ekleyip karıştırıyoruz.'
   ],
   [
    'Püf nokta yok'
   ],
   'Kolay'
),

                                             // Ardahan Şehri
new Meal(
  'ard',
  'Ard',
  'Helle aşı',
  '',
  30,
  [
    "1 çay bardağı pirinç",
    "Tepeleme 2 yemek kaşığı un",
    "1 kase doğranmış Urfa peyniri",
    "1 yemek kaşığı tereyağı",
    "Kırmızı biber"
  ],
  [
     'Pirinci yıkayın bir tencereye koyup bol suda haşlayın.',
     'Haşlarken üzerine 1 su bardağı suda ezilmiş unu yavaş yavaş karıştırarak ekleyin.',
     'Bozadan daha cıvık kıvamda bir çorba olması gerekmektedir.',
     'Pirinçler iyice piştikten sonra içine peynirleri katarak 1-2 taşım daha kaynatıp altını söndürün.',
     'Çorbanın üzerine kırmızı biberli kızgın tereyağı dökerek servise sunun.'
   ],
   [
    'Üzerine isteğe bağlu pul biber ve nane serpip servis edebilirsiniz',
   ],
   'Kolay'
),
new Meal(
  'ard2',
  'Ard',
  'Mafiş Tatlısı',
  '',
  30,
  [
    "1 adet yumurta",
    "1 çay bardağı yoğurt",
    "1 çay bardağı sıvı yağ",
    "1 paket kabartma tozu",
    "2,5 su bardağı un",
    "2 su bardağı su",
    "1,5 su bardağı şeker",
    "4 damla kadar limon suyu"
  ],
  [
     'ilk olarak tatlının şerbeti için bir tencerenin içerisine şeker ve suyu koyarak iyice kaynatın.',
     'Daha sonra indirmeye yakın birkaç damla limon suyunu da ilave ettikten sonra soğuması için ocaktan alabilirsiniz.',
     'Ardından tatlının hamurunu yapmak için derin bir kabın içerisine ilk olarak yumurtayı yoğurdu ve sıvı yağı alarak üçünü iyice karıştırın.',
     'Daha sonra üzerine kabartma tozu ile birlikte unu da yavaş yavaş ilave ederek hamuru elde etmek için iyice karıştırın yumuşak ve ele yapışmayacak bir kıvamda hamur etmeniz gerekiyor.',
     'Bunun için hamur miktarınızı ayarlayabilirsiniz.',
     'Daha sonra 2 adet streç film arasında hamuru koyarak çok ince olmayacak şekilde yaklaşık olarak yarım santim kalınlığında açın.',
     'Ardından hamuru küçük dikdörtgenler şeklinde keserek ortasına bastırarak kurdele şeklini verin.',
     'Tüm hamura aynı işlemi yaptıktan sonra derin bir tavanın içerisine bolca sıvı yağı koyarak altını açın ve yağ iyice kızdıktan sonra hazırladığınız hamurları kızartın.',
     'Daha sonra kızarttığınız hamurları şerbetin içerisine atarak yaklaşık olarak 2-3 kez çevirdikten sonra servis içi hazır hale getirebilirsiniz.'
   ],
   [
    ' üzerlerine fındık veya fıstık serperek servis edebilirsiniz'
   ],
   'Orta'
),
new Meal(
  'ard3',
  'Ard',
  'Hasuta',
  '',
  10,
  [
    "1 yemek kaşığı tereyağı",
    "1 kahve fincanı nişasta",
    "1 tatlı kaşığı un",
    "1 su bardak su",
    "2-3 yemek kaşığı şeker (isteğinize göre)"
  ],
  [
     'Geniş bir kaseye şeker, su, un ve nişastayı koyarak bir çatal yardımıyla çırpın.',
     'Topaksız bir karışım elde edin.',
     'Tereyağını bir tavada eritin ve üzerine karışımı ekleyin.',
     'Sarı renkli yağı çıkana kadar karıştırarak pişirin.',
     'Sıcak olarak servis yapın. Afiyet olsun!'
   ],
   [
    'Tarifin püf noktası yok'
   ],
   'Kolay'
),
new Meal(
  'ard4',
  'Ard',
  'Etli Lavaş Tarifi',
  '',
  30,
  [
    "750 gram dana kuşbaşı",
    "3 adet kuru soğan",
    "1 yemek kaşığı tereyağı",
    "Yarım çay bardağı sıvı yağ",
    "Karabiber",
    "Tuz",
    "3 su bardağı ayran",
    "2 diş sarımsak"
  ],
  [
     'Etleri tavada kavurun üzerine soğan, karabiber ve tuzu ekleyin.',
     'Marketlerde satılan kuru lavaştan alınız.',
     'Bu lavaşları sarımsaklı ayranlı suda bekletin.',
     'Daha sonra tabağın en altına bu lavaşları serin üzerine de pişen etleri koyarak servis ediniz.'
   ],
   [
    'Tarifin püf noktası yok'
   ],
   'orta'
),
new Meal(
  'ard5',
  'Ard',
  'Yarpuzlu köfte',
  '',
  60,
  [
    "500 gram dana kuşbaşı",
    "2 demet yarpuz",
    "2 su bardağı nohut",
    "1 yemek kaşığı biber salçası",
    "1 yemek kaşığı domates salçası",
    "2 yemek kaşığı sıvı yağ",
    "250 gram çiğ köftelik kıyma",
    "3 su bardağı ince bulgur",
    "1 tatlı kaşığı pulbiber",
    "1 tatlı kaşığı karabiber"
  ],
  [
     'Öncelikle kuşbaşı etinizi düdüklüye koyun.',
     'Üzerine 1 yemek kaşığı kadar sıvı yağ döküp düdüklü tencerece suyunu çekene kadar pişirin.',
     'Suyu tamamen çekince üzerine 3 su bardağı kadar su, 1 tatlı kaşığı tuz ekleyip kapağını kapatın.',
     'Havası çıkınca 15-20 dakika içerisinde yumuşayacaklardır.',
     'Bir gün önceden suda beklettiğiniz nohutların suyunu süzün ve 15 dakika tencerede haşlayın.',
     'Diğer yandan köfteleri hazırlayın.',
     'Köfte harcı için gerekli tüm malzemeleri güzelce yoğurun.',
     'Daha sonra minik köfteler yapıp tepsiye alın.',
     'Düdüklüdeki eti süzün ve tencereye alın.',
     'Üzerine sıvı yağ gezdirip 3-4 dakika kavurun.',
     'Sonrasında salçaları ekleyip kavurmaya devam edin.',
     'Haşladığınız et suyundan süzüp üzerine dökün.',
     'Nohutu ve köfteleri de kaynayan çorbaya ilave edin.',
     'Köfteler pişince küçük küçük doğradığınız yarpuzları atıp bir taşım kaynatın.'
   ],
   [
    'Tarifin püf noktası yok'
   ],
   'Orta'
),

//Artin Şehri


new Meal(
  'Art',
  'Art',
  'Kalaco',
  '',
  20,
  [
    "1 mısır ekmeği (bayat)",
    "1 soğan",
    "4 çorba kaşığı tereyağı",
    "4 su bardağı ayran (koyu kıvamlı)",
    "Tuz",
    "Pekmez"
  ],
  [
     'Mısır ekmeğini minik minik doğrayıp bir kaba alalım.',
     'Soğanı incecik kıyıp tereyağında sararıncaya kadar kavurun.',
     'Kendi yaptığımız köyü kıvamlı ayranı üzerine yavaş yavaş ekleyin.',
     'Ekleme işlemi yaparken sürekli karıştırın kaynayana kadar.',
     'Kaynamaya başladıktan sonra üzerine doğradığınız ekmekleri ilave edin 10 dakika daha pişirin.',
     'Ocaktan alıp 5 dakika dinlendirin daha sonra pekmezle servis edebilirsiniz.'
   ],
   [
    'Pekmezle servis edebilirsiniz'
   ],
   'Kolay'
),
new Meal(
  'art2',
  'Art',
  'Hamsili ekmek',
  '',
  110,
  [
    "½ kg hamsi",
    "½ kg pırasa",
    "½ kg pazı",
    "4 adet kuru soğan",
    "4 yemek kaşığı yoğurt",
    "1 çay bardağı sıvı yağ",
    "1 adet yumurta",
    "½ kg mısır unu",
    "1 çay kaşığı karabiber",
    "1 çay kaşığı tuz",
    "1 çay bardağı ılık su"
  ],
  [
   'İlk olarak temizlenen hamsiler kılçıklarından ayrılır.',
   'Bir kabın içerisine konan mısır unu, bir çay bardağı ılık su, yumurta, yoğurt, tuz ve karabiber ile karıştırılır.',
   'Ardından pırasa, pazı ve soğan doğranarak sıvı yağ ile birlikte bu karışıma eklenir.',
   'Fırına verilecek kap yağlanır.',
   'Hazırlanan karışım bu kaba dökülür ve önceden ısıtılmış fırında pişirilir.'
   ],
   [
    'Bu tarifin püf noktası yok'
   ],
   'Orta'
),
new Meal(
  'art3',
  'Art',
  'Turşu kavurma',
  '',
  120,
  [
    "3-4 yemek kaşığı zeytinyağı",
    "2 yemek kaşığı tereyağı",
    "2 adet kuru soğan",
    "1 tutam pul biber",
    "500 gr. taze fasulye turşusu",
    "3 diş sarımsak",
    "Tuz"
  ],
  [
   'Fasulye turşusunun fazla tuzunu almak için bir kapta üzerine su koyup bir saat bekletin.',
   'Bir saatin sonunda süzün ve iyice kurulayın fazla suyu kalmasın.',
   'Bir tavaya zeytinyağı ve tereyağını koyup ısıtın.',
   'Piyazlık doğradığınız soğanları ilave edip pembeleşene kadar kavurun.',
   'Pul biber ekleyin karıştırın.',
   'Verevine iri iri doğradığınız fasulyeleri ilave edin kavurmaya devam edin.',
   'Sarımsakları ezin ilave edin.',
   'Tuz ile tatlandırıp bir iki tur çevirin ve servis tabağına alın.'
   ],
   [
    'Püf noktaları'
   ],
   'Orta'
),
new Meal(
  'art4',
  'Art',
  'Hasuta',
  '',
  15,
  [
    "1 yemek kaşığı tereyağı",
    "1 kahve fincanı nişasta",
    "1 tatlı kaşığı un",
    "1 su bardak su",
    "2-3 yemek kaşığı şeker"
  ],
  [
   'Geniş bir kaseye şeker, su, un ve nişastayı koyarak bir çatal yardımıyla çırpın.',
   'Topaksız bir karışım elde edin.',
   'Tereyağını bir tavada eritin ve üzerine karışımı ekleyin.',
   'Sarı renkli yağı çıkana kadar karıştırarak pişirin.'
   ],
   [
    'Bu tarifin püf noktası yok'
   ],
   'Kolay'
),
new Meal(
  'art5',
  'Art',
  'Cevizli kete',
  '',
  40,
  [
    "2 su bardağı ılık süt (400 ml)",
    "1 yemek kaşığı şeker",
    "1 tatlı kaşığı instant maya",
    "Yarım çay bardağı kadar eritilmiş tereyağı",
    "2 adet yumurta (birinin sarısı üzerine sürülecek)",
    "6,5 su bardağı un (780 gram)",
    "1 dolu tatlı kaşığı tuz",
    "100 gram eritilmiş tereyağı ya da margarin",
    "1 çay bardağı sıvı yağ (85 ml)",
    "1 kase çekilmiş ceviz",
    "Yumurta sarısına 1 yemek kaşığı süt"
  ],
   [
     'Yoğurma kabına sütü, mayayı ve şekeri alıp karıştıralım. Ardından eritilmiş tereyağı, yumurtayı ekleyip karıştıralım.',
     'Kontrollü bir şekilde unu üzerine tuzu ekleyip yoğuralım. Ele yapışmayan yumuşak bir hamur elde edelim. Üzerini kapatalım ve 1 saat mayalandıralım.',
     'Mayalanan hamurun havasını alalım ve 8 eşit parçaya bölüp yuvarlayalım.',
     'Bezelerden ilkini alalım ve masaya un serpip servis tabağı boyutunda açalım.',
     'Tereyağını eritelim ve bir kaseye alalım. Ardından üzerine sıvı yağ ekleyip karıştıralım.',
     'Açtığımız hamurların arasına yağ sürerek üst üste koyalım. En üstteki hamura koymayalım. Bir poşetin içerisine alalım ve 20-25 dakika dinlendirelim.',
     'Dinlenen hamurları ters çevirerek tabaktan alalım ve masaya koyalım. Elimizle çekiştirerek düzeltelim. Ardından merdane ile kare olacak şekilde açalım.',
     'Bir rulet ya da bıçak ile 4 parmak genişliğinde şeritler oluşturalım. Her bir şeridi rulo şeklinde saralım ve ortasına doğru çukur yapalım.',
     'Her bir ketemizin içine ceviz koyalım ve üzerini kapatıp düzeltelim.',
     'Yağlı kağıt serili fırın tepsisine yerleştirelim.',
     'Ayırdığımız yumurta sarısına sütü ekleyip karıştıralım. Ardından ketelerimizin üzerine sürelim.',
     '180 derece fırında 40 dakika kontrollü olarak pişirelim.'
   ],
   [
    'Bu tarifin püf noktası yok'
   ],
   'Orta'
),


// Aydın Şehri : 

new Meal(
  'ayd',
  'Ayd',
  'Çingene pilavı',
  '',
  10,
  [
    "2 su bardağı çökelek",
    "1 adet orta boy domates",
    "1 adet orta boy soğan",
    "2-3 tutam kıyılmış maydanoz",
    "kırmızı pul biber",
    "tuz",
    "karabiber",
    "Yeşil zeytin (isteğenize bağlı )"
  ],
   [
     'Soğanı piyazlık doğrayın. Maydanozun saplarını ayırın ve yaprakları ince ince kıyın.',
     'Domatesi küp küp doğrayın.',
     'Çökeleği pul biber ve kıyılmış maydanoz ile karıştırın. Tuzunu ve soğanı ekleyip tekrar karıştırın.',
     'Hazırladığınız karışımı servis tabağına alın. Üstüne domates ve yeşil zeytini ilave edin.',
     'bolca zeytinyağı ile servis yapın.'
   ],
   [
    'Zeytin yağını isterseniz azaltabilirsiniz'
   ],
   'Kolay'
),
new Meal(
  'ayd2',
  'Ayd',
  'Ayran böreği',
  '',
  45,
  [
    "3 su bardağı mısır unu",
    "1 su bardağı un",
    "1 çay bardağı zeytinyağı",
    "3 çay bardağı su",
    "1 demet ısırgan otu",
    "2-3 adet taze soğan",
    "400 gr. lor",
    "1 paket kabartma tozu",
    "Tuz, kara biber, pul biber"
  ],
   [
     'Isırgan otlarını ve taze soğanları ince ince kıyın.',
     'Doğradığınız ısırgan otunun ve taze soğanların üzerine lor peyniri, tuz, karabiber ve pul biberi ekleyip iyice karıştırın.',
     'Bir başka kapta daha önceden elenmiş onu, mısır ununu ve kabarta tozunu birleştirin. Ardından üzerine bir çay bardağı zeytinyağı ve 1 çay bardağı su ilave edip iyice karıştırın.',
     'Yayılacak kıvama gelen hamuru, bir tepsinin tabanına yayın. Ardından hazırladığınız karışımı üzerine ilave edin.',
     'Kalan unu da 2 su bardağı su ile boza kıvamına getirdikten sonra tepsinin en üst kısmına eşit olacak şekilde yayın.',
     'Son olarak, bir yemek kaşığı salçaya biraz zeytinyağı ile inceltin ve böreğin üzerinde gezdirin.',
     'Ardından daha önce ısılmış olan 180 derecelik fırına gönderin.'
   ],
   [
    'Püf nokta yok'
   ],
   'Orta'
),
new Meal(
  'ayd3',
  'Ayd',
  'Yuvarlama',
  '',
  60,
  [
    "250 Gram az yağlı dana kıyma",
    "2 Adet orta boy soğan",
    "1 Adet yumurta",
    "Tuz",
    "Karabiber",
    "Yeteri kadar un",
    "1 Su bardağı haşlanmış nohut",
    "1 Yemek kaşığı tereyağı",
    "2 Yemek kaşığı domates salçası",
    "1 Yemek kaşığı toz kırmızı biber",
    "4-5 Su bardağı sıcak su",
    "Sarımsaklı yoğurt"
  ],
   [
     'Öncelikle kıymamıza yumurtamızı, soğan rendemizi, karabiber ve tuzumuzu ilave edip köfte yapar gibi güzelce yoğuralım.',
     'Sonra azar azar unumuzu ilave edip sert bir hamur elde edelim.',
     'Yoğurduğumuzdan hamurumuzdan küçük bir parça koparıp, nohuttan biraz büyük parça alıp ve bu parçayı avucumuzda uzunlamasına yuvarlayalım.',
     'Yuvarlamalarımızı unlanmış tepsimize atalım ve hepsi bittikten sonra fazla ununu eleyelim.',
     'Kızgın yağımızda yuvarlamalarımızı kızartıp, havlu kağıt serdiğimiz tabağa alalım ve soğumasını bekleyelim.',
     'Tenceremize tereyağımızı ve biraz sıvı yağ koyalım ve tereyağımız eriyince salçamızı ve kırmızı toz biberimizi ilave edip salçamız kokusu çıkana kadar kavuralım.',
     'Sonra sıcak suyumuzu ilave edip ve kaynayınca yuvarlamalarımızı ve haşlanmış nohudumuzu içine atıp arada suyunu kontrol ederek yuvarlarımız yumuşayana kadar pişirelim.',
     
   ],
   [
    'Sarımsaklı yoğurt ile servis yapın'
   ],
   'Orta'
),
new Meal(
  'ayd4',
  'Ayd',
  'Börülce',
  '',
  45,
  [
    "Yarım kilogram börülce",
    "2 adet orta boy soğan",
    "4 adet domates",
    "4 yemek kaşığı zeytinyağı",
    "1 tatlı kaşığı tuz",
    "2 adet kesme şeker",
    "Yarım yemek kaşığı salça"
  ],
   [
     'Börülceleri güzelce ayıklayıp bol suyun içerisinde yıkayın.',
     'Daha sonra soğanları yemeklik doğrayıp tencereye alın.',
     'Tencereye yağı ve salçayı da ekleyerek güzelce kavurun.',
     'Kavrulan salça ve soğanın üzerine börülceleri ilave ederek diriliği gidene kadar karıştırın.',
     'En son üst kısma domatesleri ilave ederek tuz ve şekeri de koyun.',
     'Orta ateşte börülceler yumuşayana kadar pişirin. Gerekirse çok az su ilave edebilirsiniz.'
   ],
   [
    'Börülceleri taze seçin'
   ],
   'Orta'
),
new Meal(
  'ayd5',
  'Ayd',
  'Pelvize Tatlısı',
  '',
  30,
  [
    "1 litre su",
    "1 su bardağı nişasta",
    "1,5 su bardağı toz şeker",
    "1 su bardağı dövülmüş ceviz",
    "1 çorba kaşığı dövülmüş karanfil"
  ],
   [
     'Tencerimizde ki suyun içine nişastamızı ilave ederek iyice karıştıralım ve ocağa alalım.',
     'Koyulaşmaya başladığında şekerimizi ilave ederek nişasta ve şeker özleşene kadar güzelce pişirelim.',
     'Nişastanın rengi değişmeye başladığında ocaktan alalım ve kaselere boşaltalım.',
     'Üzerine dövülmüş bol ceviz ve dövülmüş karanfil ekerek servis yapalım.'
   ],
   [
    'Üzerini istediğiniz gibide süsleyebilirsiniz',
   ],
   'Orta'
),

// Balıkesir Şehri .......

new Meal(
  'bal',
  'Bal',
  'Arpa Şehriye Çorbası',
  '',
  20,
  [
    "1 Çay bardağı ve 1 çorba kaşığı arpa şehriye",
    "2 çorba kaşığı salça",
    "4 çorba kaşığı sıvı yağ",
    "2 çorba kaşığı kuru nane",
    "1 tatlı kaşığı kimyon",
    "1 çorba kaşığı pul biber",
    "1 adet et veya tavuk bulyonu",
    "1 tatlı kaşığı tuz",
    "2 litre sıcak su"
  ],
   [
     'Öncelikle yağı tencere koyun ardından naneyi ekleyin.',
     '1 dk kadar bekledikten sonra salçayı ilave edin.',
     '2-3 dk kadar kısık ateşte kavurun.',
     'Şehriyeyi ilave edip 2 dk daha kavurun, baharatını ekleyin.',
     'Bulyonu atın, sıcak suyu dökün karıştırın.',
     'Suyu az gelirse su ekleyebilirsiniz.',
     '5 dk kadar kaynaktan sonra kapağı kapatıp ocaktan alın.',
     'Kapağı kapalı şekilde 5-10 dk dinlendikten sonra servise hazır.'
   ],
   [
    'Çorbayı yemek vaktinden erken yapacaksanız, bir taşım kaynayınca ocağın altını kapatın. 1 saatte şehriye şişip, yenecek duruma gelecektir.',
    'hemen yiyecekseniz piştikten sonra, içine 1 su bardağı soğuk su dökün. Bu şehriyelerin şişmesini önleyecektir.'
   ],
   'Orta'
),
new Meal(
  'bal2',
  'BAL',
  'Balıkesir mantısı',
  '',
  60,
  [
    "3 büyük tavuk but",
    "1 kase haşlanmış nohut",
    "1 paket mantı",
    "2 kaşık salça",
    "1 adet kurusoğan",
    "tuz, karabiber",
    "tavuksuyu",
    "sarımsaklı yoğurt"
  ],
   [
     'Önce arkadaşlar tavuk butlarını yeterince suyla haşlayın.(Haşlama suyuna soğan, defne yaprağı, tane karabiber, sarımsak ekleyin)',
     'Haşladıktan sonra etleri bir kenara alıp didikleyin, suyunu süzün.',
     'Bir tencerede 1 adet kurusoğanı incecik kıyıp kavurmaya başlayın, daha sonra salçasını ekleyin.',
     'Salçanın kokusu çıkınca tavuksuyunu ekleyin.',
     'Kaynamaya yakın nohutları, tavuk etini ve mantıları ilave edin.',
     'Mantılar yumuşayana kadar pişirin.',
     'En son tuzunu, karabiberi ekleyin.',
     'Üzerine sarımsaklı yoğurtla servis yapın.'
   ],
   [
    'Biraz limon sıkabilirsiniz (isteğe bağlı)'
   ],
   'Orta'
),
new Meal(
  'bal3',
  'Bal',
  'Bigadiç Güveci',
  '',
  60,
  [
    "Yarım kilo oğlak eti",
    "50 gram kuzu eti",
    "100 gram kuzu yağı",
    "3 adet domates",
    "3 adet biber",
    "isteğe bağlı Baharat"
  ],
   [
     'İlk olarak oğlak etini kuşbaşı şeklinde doğrayın.',
     'Domates ve biberleri de orta büyüklükte doğrayın.',
     'Güveç kabının tabanına doğradığınız domates ve biberleri yerleştirin.',
     'Kuşbaşı oğlak etini, domates ve biberlerin üzerine ekleyin ve güveç kabına yayın.',
     'Kuzu yağı ve kuzu etini birlikte harmanlayın. Bu karışımı, oğlak etinin üzerine yaydırın.',
     'Önceden ısıtılmış 200 dereceli fırında yemeğinizi pişirin.',
     'Bigadiç güvecini, servis tabaklarına koyarak servis edin.'
   ],
   [
    'Püf noktası yok'
   ],
   'Orta'
),
new Meal(
  'bal4',
  'Bal',
  'Peynirli patlıcan',
  '',
  60,
  [
    "3-4 adet bostan patlıcan",
    "1-2 adet soğan",
    "2-3 diş sarımsak",
    "3-4 adet rendelenmiş domates",
    "2 adet sivri biber",
    "1 yemek kaşığı domates veya biber salçası",
    "4-5 yaprak taze fesleğen",
    "Beyaz ve kaşar peynir karışımı",
    "1 su bardağı sıcak su",
    "2-3 yemek kaşığı zeytinyağı",
    "Tuz, karabiber, toz kırmızı biber ve kekik",
    "Rendelenmiş kaşar"
  ],
   [
     'İlk olarak patlıcanları çok az alacalı soyup, 1 cm kalınlığında yuvarlak kesip , tuzlu suda 20 dk bekletip, kurulayıp yağlı kağıt serili tepsiye dizelim.',
     'Üzerine fırça yardımıyla biraz sıvıyag suürüp ısıtılmiş fırında kızaracak kadar pişirelim.',
     'Patlıcanlar kızarırken iç malzemesini hazrlayalım. Bunun için tavaya biraz siviyag veya zeytinyağı ilave ediyoruz.',
     'Ardından yemeklik doğranmış soğan ve sarimsağı ekleyip biraz soteliyoruz.',
     'Daha sonra küçük doğranmış biberleri ekleyip sotelemeye devam ediyoruz.',
     'Ardından rendelenmiş domatesi , salçayi küçük doğranmış taze fesleğeni, tuz ve baharatları ekleyip bir bardak sicak suyu ilave edip, 5-10 dk sosu pişiriyoruz.',
     'Daha sonra borcama önce biraz sos ekliyoruz Üzerine kızarmış olan patlıcanları yerleştiriyoruz.',
     'Patlıcanların üzerine biraz domatesli sos süürüyoruz. Sosun üzerine beyaz ve kaşar karışımını serpiyoruz.',
     'Peynirin üzerine tekrar patlıcan diziyoruz. Patlıcanın üzerine tekrar biraz sos ilave edip,ısıtılmiş fırında 10 dk pişirip,fırından alip üzerine rendelenmiş kaşar veya Mozarella peyniri serpip tekrar fırına veriyoruz peynirler eriyene kadar pişiriyoruz sicak sicak servis ediyoruz.'
   ],
   [
    'İsterseniz patlıcanları tavada kızartabilirsiniz (daha az yağlı olur)'
   ],
   'Orta'
),
new Meal(
  'bal5',
  'BAL',
  'Sura',
  '',
  200,
  [
    "1,5 su bardağı pirinç",
    "Dolmalık fıstık",
    "Kuş üzümü",
    "Karabiber",
    "150 gr kuzu yada tavuk ciğeri",
    "Tuz",
    "Su",
    "Salça",
    "Zeytinyağı"
  ],
   [
     'Bir tencerede yarım fincan kadar zeytinyağında dolmalık fıstıklarımızı pembeleşene kadar kavuralım.',
     'Küçük küçük doğradığımız ciğerleri de tencereye alalım ve biraz soteleyelim.',
     'Daha sonra yıkayıp sıcak suda kabarttığımız pirinci de ekleyip bir bardak sıcak su ve tuz ekleyip iç pilavımızı hazırlayalım.',
     'Pilavı tam pişirmeyelim, biraz sert kalsın.',
     'Pilavımızı soğutalım ve içerisine önceden ıslatıp kabarttığımız kuş üzümlerini de katıp biraz karabiber serpelim.',
     'Kuzu eti yada tavuk ciğerinde açtığımız cebe sıkı olmayacak şekilde hazırladığımız pilavı dolduralım ve cebin ağzını ip ile dikelim.',
     'Üzerine 1 çay bardağı sıcak suda erittiğimiz iki çorba kaşığı salçayı sürelim ve Sura’yı büyükçe ve derince bir tepsiye alıp etin yarısına gelecek kadar su dolduralım.',
     'Hazırladığımız Sura’yı tercihen odunlu mahalle fırınında yada evimizdeki fırında alti ve üstü nar gibi kızarana kadar yaklaşık 2-2,5 saat pişirelim.',
     'Piştiğinde fırından alalım ve sicak sicak servis edelim.'
   ],
   [
    'Eti mutlaka tuzla ovalayın. Bu sayede daha lezzetli olacaktır.',
   ' Pilavı ılık suda 5-10 dakika bekleterek fazla nişastasını akıtabilirsiniz.',
    'Sevdiğiniz baharatları da pilav harcına ekleyebilirsiniz.',
   ],
   'Zor'
),


// Bartın Şehri ....

new Meal(
  'bar',
  'Bar',
  'Pumpum çorbası',
  '',
  30,
  [
    "4/5 su bardağı mısır unu",
    "3,5 su bardağı su",
    "2,5 su bardağı süt",
    "1-1,5 su bardağı et suyu",
    "3-4 dilim kıtır ekmek",
    "50 g rendelenmiş taze kaşar",
    "Yarım kahve fincanı ayçiçek yağı",
    "1 çay kaşığı tuz",
    "1 çay kaşığı karabiber"
  ],
   [
     'Et suyu, soğuk su ve mısır unu tencereye alınarak kaynayana kadar çırpılır.',
     'Kıvamı koyulaştıktan sonra sütü ilave edilerek karıştırmaya devam edilir.',
     'Ayrı bir tavada kıtır ekmekler ayçiçek yağı ile kavurulur.',
     'Çorbanın tuzu ve biberi eklenir.',
     'Çorba kaynadıktan sonra servis kasesine alınır.',
     'Üzerine kıtır ekmekleri eklenir.',
     'Rendelenmiş kaşar peyniri ile süslenerek servise hazırlanır.'
   ],
   [
    'Çorbanın topaklanmaması için; su, süt ve mısır ununu hızlı bir şekilde karıştırın.',
    'Kavurmayı karıştırırken rendelenmiş soğan ile aroma katabilirsiniz.',
    'Hazırladığınız çorbayı servis etmeden önce bir kez mikserden geçirin.'
   ],
   'Kolay'
),
new Meal(
  'bar2',
  'Bar',
  'Yumurtalı isput',
  '',
  45,
  [
    "1 kg. ısbut",
    "100 gr. margarin",
    "3-4 adet yumurta",
    "2 baş soğan",
    "50 gr. kıyma veya pastırma",
    "yeterince tuz ve karabiber"
  ],
   [
     'Isbutlar iyice yıkanır, atık kısımları kesilip ayıklandıktan sonra 2 cm. uzunluğunda olabilecek şekilde doğranır.',
     'Tencereye konulan ısbutların üzerini örtecek kadar su konularak ateşte pişirilir.',
     'Haşlana ısbutlar ılıyınca avuç içinde sıkılarak başka bir kaba alınır.',
     'Ayrı bir tencerede de yağ eritilerek önce doğranan soğanlar kızarıncaya kadar birlikte kavrulur.',
     'Bu kez diğer kaptaki ısbutlar soğan veya kıyma tenceresine konularak birkaç dakika daha kavrulduktan sonra içine yumurtalar kırılıp yeterince tuz ve karabiber ilave edilerek karıştırılır.',
     'Yumurtalar pişince yemek ateşten indirilir.',
     'Sıcak olarak servis yapılır.'
   ],
   [],
   'Orta'
),
new Meal(
  'bar3',
  'Bar',
  'Etli ayva',
  '',
  60,
  [
    "3 yemek kaşığı tereyağı",
    "2 adet küp küp doğranmış ayva",
    "500 gram ana kuşbaşı eti",
    "100 gram kavrulmuş badem",
    "yarım su bardağı kuru kayısı",
    "yarım yemek kaşığı toz şeker",
    "1 tatlı kaşığı tuz",
    "1 su bardağı ballı su(1 tatlı kaşığı bal ile hazırlanacak)"
  ],
   [
     'ilk olarak tavanın içerisinde tereyağını kızdırın ve içerisinde küp küp doğradığınız ayvaları atın.',
     'Ayvalar suyunu salıp çekene kadar ve renkleri dönene kadar hafifçe karıştırarak pişirin.',
     'Farklı bir tencerenin içerisine ise kuşbaşı etleri koyarak sularını salıp çekene kadar pişirin.',
     'Pişen etlerin üzerine bademleri, kuru kayısı, toz şekeri, tuzu ve kavurduğunuz ayvaları da atarak birkaç dakika kadar bu şekilde kavurun.',
     'Daha sonra hazırlamış olduğunuz ballı suyu da yemeğin üzerine gezdirerek ocağın altını kısık ateşe alarak pişirmeye devam edin.',
     'Etler yumuşadığında ve istediğiniz kıvama geldiğinde ocaktan alarak biraz dinlendirdikten sonra sıcak servis edebilirsiniz.'
   ],
   [
    'Püf nokta yok'
   ],
   'Orta'
),
new Meal(
  'bar4',
  'Bar',
  'Kabak Burması',
  '',
  60,
  [
    "1 kg un",
    "2 kg şeker",
    "1 adet yumurta",
    "Yarım bal kabağı",
    "1 kase ayıklanmış ceviz içi",
    "Yarım limon",
    "Tereyağı"
  ],
  [
    'Geniş bir kabın içerisine unun üzerine yumurtayı kırın ve su ekleyerek karıştırmaya başlayın. Karışım kulak memesi kıvamına gelene kadar karıştırmaya devam edin.',
    'Elde ettiğiniz hamuru 10 dakika dinlenmeye bırakın ve dinlenen hamuru 5 eşit parçaya bölerek orta boy yufka elde edene kadar açın.',
    'Tatlının iç malzemesi için; yarım kabağı temizleyin ve kabuklarını soyun. Daha bal kabaklarını rendeleyin.',
    'Rendelediğiniz kabağın içerisine shopsa.com.trden satın aldığınız cevizleri, toz şekeri ekleyin ve karıştırın.',
    'Yufkanızı 4 eşit parçaya bölün ve üzerine bal kabaklı karışımdan ekleyin. Yufkanızı rulo biçiminde sıkı sıkı sarın ve önceden yağladığınız tepsinin ortasından başlayarak daire biçiminde sarın.',
    'Diğer yufkalar içinde aynı işlemi uygulayın.',
    'Küçük bir sos tavasında shopsa.com.trden aldığınız tereyağını eritin ve fırça yardımıyla tepsiye sardığınız yufkaların üzerine sürün ve üzeri pembeleşene kadar fırında kızartın.',
    'Kabak burması tatlısının şerbeti için orta boy bir tencerenin içerisine şeker ve 4-5 bardak suyu 5-10 dakika kaynatın. Yarım limonun suyunu da ekledikten sonra şerbeti soğumaya bırakın.',
    'Soğutulan şerbeti, fırından çıkarttığınız kabak burması üzerinde gezdirin. Tatlı şerbetini çektikten sonra servise hazır.'
   ],
   [
    'Püf nokta yok'
   ],
   'Orta'
),
new Meal(
  'bar4',
  'Bar',
  'Deli oğlan sarığı',
  '',
  90,
  [
    "1 su bardağı süt",
    "1 su bardağı sıvıyağ",
    "3 yumurta",
    "1 yemek kaşığı üzüm sirkesi",
    "3 yemek kaşığı su",
    "250 gram tereyağı",
    "1 kg şeker",
    "1 kg su",
    "Yarım limon",
    "1 paket nişasta",
    "2 su bardağı sıvıyağ",
    "1 su bardağı eritilmiş tereyağı"
  ],
  [
   'Hamur için gerekli bütün malzemeler karıştırılır. Kulak memesi yumuşaklığında bir hamur elde edilir.',
   'Hamur cevizden biraz büyük pezilere ( pazı-parça) ayrılır. Hamur 20 dk dinlendirilir.',
   'Dinlendirilen peziler oklava yardımıyla çok ince olacak şekilde açılır.',
   'Açılan yufkalar parmakların yardımıyla iteklenerek bir araya toplanır. Yuvarlak şekilde yağlanan tepsiye yerleştirilir.',
   'Diğer pezilere de aynı işlem uygulanarak tepsinin geri kalan kısımları doldurulur.',
   'Tepsinin üzerine eritilen tereyağı ve sıvıyağ dökülür. 180 derecelik fırında 60 dakika pişirilir.',
   'Şerbeti için gerekli malzemeler ayrı bir kapta 5 dk kaynatılır. Soğuyan tatlının üzerine sıcak şerbet dökülür.',
   'Arzuya göre üzerine ceviz dökülerek servis edilir.'
   ],
   [
    'püf nokta yok',
   ],
   'Orta'
),
new Meal(
  'bar5',
  'Bar',
  'Şap köfte',
  '',
  150,
  [
    "850 g dana kıyma",
    "150 g kuzu kıyma",
    "50 g soğan",
    "30 g galeta unu",
    "5 g tuz",
    "5 g kimyon",
    "5 g karabiber",
    "5 g kekik",
    "5 g pul biber"
  ],
  [
   'Köfte için gerekli olan bütün malzemeler karıştırılır ve yoğundur.',
   'Üzeri kapatılarak 60 dk dolapta bekletilir.',
   'Tekrar tezgahın üzerine vurarak yoğurulur.',
   '60 dakika daha buzdolabında bekletildikten sonra kıyma makinesinde çektirilir.',
   '30 gramlık parçalar halinde yuvarlanarak elle hafifçe bastırılır.',
   'Meşe kömüründen hazırlanarak ızgarada sık sık çevrilerek pişirilir.'
   ],
   [
    'Püf nokta yok'
   ],
   'Orta'
),

// Batman Şehri .....

new Meal(
  'bat',
  'Bat',
  'Kaburga Dolması',
  '',
  180,
  [
    "Kuzu Kaburga ( Ön Ayakları ile birlikte)",
    "1 Kase Pirinç",
    "1 Adet Kuru Soğan",
    "250 gr Kuş Başı Kuzu Eti",
    "Yarım Demet Maydanoz",
    "Karabiber ( 1 Çay Kaşığı )",
    "Tuz",
    "Kırmızı Toz Biber",
    "Kırmızı Pul Biber",
    "Ayçiçek Yağı ( Yarım Çay Bardağı )"
  ],
  [
   'Kasabınıza kaburganın içini açmasını söyleyiniz. Kaburgayı tuzlayarak 15 dakika bekletiniz.',
   'İç kaburga için; İnce kıyılmış soğanı kızgın tavada pembeleşinceye kadar kavurun.',
   'Daha sonra kuşbaşı eti tavaya atınız. Etin rengi değişince, tuz, karabiber ve pul biber atınız.',
   'İyice yıkanmış pirinci ekleyiniz. 1-2 dakika kavurun, tam üzerine gelecek kadar sıcak su ekleyiniz. Su çekilince ocaktan alıp 5 dakika dinlendirin.',
   'Hazırladığınız içi kaburganın içine doldurun ( yandaki resimdeki gibi) kaburganın açık olan ceplerini dikin',
   'Kaburgayı alabilecek genişlikte bir tencereye koyup, kaburganın üzerine yarım çay bardağı yağ gezdiriniz.',
   'Kaburgayı dağlayın.( Kaburganın rengi dönene kadar her tarafını kızartın )',
   'Daha sonra kaburganın üzerine gelecek kadar kaynamış su ekleyip kaynamaya bırakın. 1 saat sonra ateşi kısın 1 saatte kısık ateşte pişirin.',
   'Kemiklerin etten ayrıldığını tespit ettikten sonra ateşi kapatıp kaburgayı sudan çıkarın. ( etler kemikten ayrılma kıvamına gelmemiş ise kaynamış su ilave ederek haşlamaya devam edin )',
   'İsteğe göre kaburgayı haşladığınız su ile ilave pilav yapabilirsiniz.',
   'Haşlamış olduğumuz kaburgayı fırın tepsisine koyunuz ve yemeğin suyundan 1 kepçe kaburganın üzerine döküp 200 derece fırında nar gibi kızarınca fırından alın.'
   ],
   [
    'Bazı aşçılar hayvanın sol tarafta yatttığını ve bu nedenle sol kaburganın sert olduğunu söyler. Kasaptan kaburga alırken özellikle sağ tarafı isterseniz etiniz daha yumuşak ve lezzetli olur.'
   ],
   'Zor'
),
new Meal(
  'bat2',
  'Bat',
  'şam böreği',
  '',
  60,
  [
    "1 su bardağı un",
    "Yarım su bardağı su",
    "1 çay kaşığı tuz",
    "150 gram kıyma",
    "Yarım kuru soğan",
    "1 diş sarımsak",
    "1 çay kaşığı kırmızı pul biber",
    "Yarım çay kaşığı tuz"
  ],
  [
   'Hamur malzemelerini bir kaba koyunuz ve iyice yoğurunuz 20 dakika beklerken içini hazırlamaya başlayınız.',
   'Soğanı ve sarımsağı yağda kızartınız üzerine kıymayı koyup kızartmaya devam ediniz daha sonra baharatları ekleyip ocaktan alınız. İçi soğumaya bırakınız.',
   'Hamurdan ufak parçalar alıp elinize açtıktan sonra oklava ile inceltiniz soğumuş harcı içine yerleştirip bir kenarını diğer kenarına getirip üzerini kapatınız.',
   'Bittikten sonra derin bir tava da bol yağ koyunuz kızaran yağa börekleri atınız dilerseniz saç tava ocaklarında da daha kolayca yapabilirsiniz.',
   'Bu hem yağsız olmasını sağlar hem de işinizi kolaylaştırır.'
   ],
   [
    'püf nokta yok'
   ],
   'Kolay'
),
new Meal(
  'bat3',
  'Bat',
  'Tırşık',
  '',
  60,
  [
    "yarım kg yağlı kuzu kuşbaşı veya kemikli et",
    "1 baş sarımsak",
    "1 yemek kaşığı biber salçası veya domates",
    "yağ (zeytinyağı vb.)",
    "4 adet orta boy patlıcan",
    "1 kg soyulup doğranmamış domates",
    "yarımkg çarliston veya dolmalık biber",
    "tuz"
  ],
  [
    'Tencereye kullanılacak yağ ve yıkanmış et konup kısık ateşte çevrilerek yumuşatılır.',
    'Daha sonra soyulmuş sarımsak, doğranmış patlıcan ve biber ilave edilip çevrilir.',
    'Domates ve tuz ilave edilip sıcak su ilavesiyle pişirilir.'
  ],
  [
    'Domatesler su saldığından fazla su konmamalıdır.'
  ],
  'Kolay'
),
new Meal(
  'bat4',
  'Bat',
  'Yoğurtlu Leben',
  '',
  60,
  [
    "100 gram kıyma",
    "1 kase ince bulgur (ne çok küçük ne de çok büyük orta bir çorba kasesi yeterli olacaktır.)",
    "1 orta boy kuru soğan",
    "1 tatlı kaşığı pul biber",
    "1 tatlı kaşığı tuz",
    "1 kase sarımsaklı yoğurt",
    "1 çorba kaşığı tereyağı",
    "1 tatlı kaşığı pul biber"
  ],
  [
    'Tarife başlarken ilk önce bulguru soğuk suyla ıslatıp suyunu çekmesini bekliyoruz.',
    'Bu bulguru şişirerek yumuşamasını sağlıyor.',
    'Böylelikle yoğurma sürecinde büyük bir kolaylık yaşıyoruz.',
    'Ayrıca tüm malzemeler birbirine daha rahat karışıyor.',
    'Bulgurlar şiştikten sonra tüm malzemeleri derin bir yoğurma kabına koyuyoruz ve yoğurmaya başlıyoruz.',
    'Malzemelerin tamamı bir bütün haline gelene kadar yoğurmaya devam ediyoruz.',
    'Bilek gücünüze göre 5 dakika ile 10 dakika arası yoğurmak yeterli oluyor.',
    'Soğanlar tercihe göre ufak ufak doğrayarak konulabileceği gibi rendeleyerek de eklenebiliyor.',
    'Bir tencereye su doldurarak hamuru haşlamak için kaynamaya bırakıyoruz.',
    'Yoğurma işlemi bittikten ve tüm malzemelerin yeteri kadar karıştığından emin olduktan sonra hamurumuzdan fındık büyüklüğünde parçalar kopararak parçaları sıkıyoruz.',
    'Sıkma işlemini bir çiğköfte misali yapıyoruz.',
    'Hamuru ufak parçalara ayırdıktan sonra kaynattığımız suya atıyoruz ve haşlanması bekliyoruz.',
    'Haşlandıktan sonra süzerek suda çıkarıyoruz. Sarımsaklı yoğurdu üzerine gezdiriyoruz.',
    'Tereyağını eriterek içine pul biber ekliyoruz. Hazırladığımız sosu yoğurdun üzerine döküyoruz.'
  ],
  [
    'Püf nokta yok'
  ],
  'Orta'
),
new Meal(
  'bat5',
  'Bat',
  'Pekmezli hevdel',
  '',
  60,
  [
    "100 gr un",
    "200 ml. (1 su bardağı) üzüm pekmezi",
    "50 gr ceviz içi veya badem içi",
    "400 ml (2 su bardağı) su"
  ],
  [
    'Unu ve tereyağını, unun pembeleşip un kokusu gidene dek pişirme tenceresinde iyice kavurun.',
    'Sonrasında tencereye su ve pekmezi alın.',
    'Muhallebi kıvamını alana kadar pişirin.',
    'Kâselere alın ve üzerine ceviz içi ya da badem içi döküp servis edin.'
  ],
  [
    'Püf nokta yok'
  ],
  'Kolay'
),

// Bayburt Şehri ....

new Meal(
  'bay',
  'Bay',
  'Kara pancar',
  '',
  60,
  [
    "1 Kase kurutulmuş evelik (haşlanmış)",
    "250 gram kuşbaşı",
    "2 adet kuru soğan",
    "1 su bardağı haşlanmış yeşil mercimek",
    "1 su bardağı bulgur",
    "2 çorba kaşığı salça",
    "Tuz ve biber"
  ],
  [
    'İnce kıyılmış soğanları yağda kavurun.',
    'Salça ve etleri ilave edin tekrar kavurun.',
    'Etleri suyunu çekinceye kadar sürekli karıştırın.',
    'Bir su bardağı su ekleyip etler yumuşayıncaya kadar pişirin.',
    'Haşlanmış yeşil mercimeği, bulguru, haşlanmış evelikleri, pişmiş etlerin üzerine dökün, kavurun.',
    'Suyunu ayarlayın yemeği kısık ateşte pişirin.',
    'Yemeğinizi ateşten alıp, beş on dakika dinlendirin, servis yapın.'
  ],
  [
    'Püf nokta yok'
  ],
  'Normal'
),
new Meal(
  'bay2',
  'Bay',
  'Ekşi lahana',
  '',
  60,
  [
    "250 gr. parça et veya kavurma",
    "1 kg. ekşi lahana (salamura)",
    "1 su bardağı bulgur",
    "2 yemek kaşığı börek yağı",
    "1 adet kuru soğan (orta)",
    "1 çay kaşığı kırmızı biber",
    "2 yemek kaşığı salça (domates)",
    "1 tutam tuz"
  ],
  [
    'Su ile et yaklaşık 20 dk. haşlanır.',
    'Önce üzerine bulgur ilave edilerek bir taşım kaynaması sağlanır, sonra küçük küçük doğranmış ekşi lahana ilave edilir.',
    'Bir başka kapta soğanlar pembeleşinceye kadar yağ, kırmızıbiber, salça karıştırılarak pişirilir.',
    'Bu karışım ekşi lahananın içine konulur, kavurma ile pişiriliyorsa bu aşamada ilave edilir ve yaklaşık 45 dakika pişirilir.',
    'Bir müddet dinlendirildikten sonra servis yapılır.'
  ],
  [
    'Püf nokta yok'
  ],
  'Kolay'
),
new Meal(
  'bay3',
  'Bay',
  'Galacoş',
  '',
  60,
  [
    "250 gr yeşil mercimek",
    "200 gr. tereyağı",
    "½ kg. kıyma",
    "1 adet soğan (irice)",
    "2 kaşık salça",
    "250 gr. gurut (kurutulmuş ayran süzmesi) veya yoğurt süzmesi"
  ],
  [
    'Mercimek , et , soğan , salça ve yağ ile birlikte mercimek suyu çekinceye kadar pişirilir .',
    'Diğer taraftan gurut veya yoğurt süzmesi sulu bir kıvama gelinceye kadar sıcak suyla ezilerek kaynama noktasına kadar ısıtılır.',
    'Kaynamamasına özen gösterilir, kaynama olursa çökelek haline gelir ve kullanılmaz.',
    'Hazırlanan bu eriyik önceden tabağa doğranan bayat ekmekler üzerine dökülür.',
    'Üzerine de bol yağlı mercimek ilave edilerek servise sunulur.'
  ],
  [
    'Püf nokta yok',
  ],
  'Kolay',
),
new Meal(
  'bay4',
  'bay',
  'Kesme çorbası',
  '',
  55,
  [
    "200 gr. yeşil mercimek",
    "1 adet yumurta",
    "2 yemek kaşığı salça",
    "1 adet soğan (orta)",
    "100 gr. yağ",
    "1 su bardağı un",
    "yeterince su",
    "dargın (isteğe bağlı)"
  ],
  [
    'Un içerisine su , tuz , yumurta konularak bir hamur yorulur , biraz bekledikten sonra hamur açılır , makarna gibi ince ince kesilir .',
    'Diğer taraftan mercimek iyice pişirilip doğranan soğan yağla pembeleştirilir.',
    'Dargın, salça, su katılır üzerine mercimek ilave edilir kaynatılır.',
    'Üzerine kesilen çorbalık hamurlar karıştırılır.',
    'Birkaç taşım kaynatıldıktan sonra servis yapılır.'
  ],
  [
    'Püf nokta yok'
  ],
  'Orta'
),
new Meal(
  'bay5',
  'Bay',
  'Lor dolması',
  '',
  65,
  [
    "1 kg. taze lor (çökelek)",
    "1 su bardağı bulgur",
    "2 adet yumurta",
    "1 su bardağı süt kaymağı",
    "4 kaşık tereyağı",
    "dargın",
    "1 kg pancar yaprağı veya evelik",
    "1 deste taze soğan (kuru soğanda olabilir)",
    "tuz"
  ],
  [
    'Yapraklar yumuşaması için kaynar suda bir taşım haşlanır .',
    'Taze lor içerisine yumurta, süt kaynağı, haşlanmış bulgur , ince doğranmış taze soğan , sıkılarak yaprağa sarılır .',
    'Yağlanmış tepsiye düzgün bir şekilde dizilir üzerine yarım su bardağı su veya süt ilave edilerek orta sıcaklıktaki fırında pişirilir.',
    'Servis yaparken üzerine eritilmiş tereyağı dökülür.'
  ],
  [
    'Püf nokta yok'
  ],
  'Orta'
),

// Bilecik Şehri ....

new Meal(
  'ovm1',
  'Bil',
  'Ovmaç çorbası',
  '',
  60,
  [
    "1 su bardağı un",
    "2 çorba kaşığı tereyağı",
    "1 litre et suyu",
    "2 çorba kaşığı yoğurt",
    "1 adet yumurta",
    "1 kahve fincanı süt ",
    "Yeteri kadar tuz",
    "1 çorba kaşığı tereyağı",
    "Nane, pulbiber"
  ],
  [
    'Unun üzerine elinizle hafifçe su serperek, ovalayın.',
    'Oluşan hamur topaklarını temiz bir beze yayarak kurutun.',
    'Yarısını tereyağında pembeleştirip ayırın.',
    'Soğuk et suyuna, kalan ovmalar, 1 yumurta, süt ve yoğurdu ekleyip karıştırın.',
    'Kavrulmuş ovmaların üzerine bu malzemeyi dökün.',
    'Karıştırarak kaynatın. Tuzunu ayarlayın.',
    'Ayrı bir yerde tereyağını eritin. Nane ve pulbiberi yağda yakıp, çorbanın üzerine gezdirerek servis yapın.'
  ],
  [
    'İsteğe göre çorbanın içerisine kıyma, fasulye veya nohut ekleyebilirsiniz.',
     'Aroma katmak için normal su yerine et suyu kullanın.',
    'Tereyağın yanmasını önlemek için, bir yemek kaşığı sıvıyağ ekleyin.',
    'Hazırladığınız çorbaya 1 yemek kaşığı çırpılmış yoğurt ekleyebilirsiniz. ',
  ],
  'Orta'
),
new Meal(
  'mer1',
  'Bil',
  'Mercimekli Bozüyük Mantısı',
  '',
  60,
  [
    "1 adet yumurta",
    "1 su bardağı ılık su",
    "2 çay kaşığı tuz",
    "Aldığı kadar un",
    "1/2 (yarım) su bardağı yeşil mercimek",
    "2 yemek kaşığı sıvı yağ",
    "1 adet kuru soğan",
    "1 yemek kaşığı salça",
    "Tuz",
    "Karabiber",
    "Sıcak su",
    "Yoğurt",
    "2-3 diş sarımsak",
    "Tuz",
    "Sıvı yağ",
    "Toz kırmızı biber"
  ],
  [
   'Mercimeği yıkayalım ve uygun bir tencereye üzerini geçecek kadar su ilave edip kaynamasını bekleyelim.',
   'İlk çıkan kara suyunu süzüp üzerine tekrar sıcak su ilave edelim. Mercimekler yumuşayana kadar pişirelim.',
   'Hamuru için uygun bir kaba yumurtayı, suyu, tuzu ve unun birazını ilave edip karıştıralım.',
   'Yavaş yavaş un ilavesi yapalım ve yumuşak bir hamur elde edene kadar yoğuralım. Üzerini örterek dinlendirelim.',
   'Pişen mercimeğin suyunu süzelim. Soğanı rendeleyelim. Uygun bir tencereye biraz sıvı yağ ve soğanı alıp biraz çevirelim.',
   'Salçayı ilave edelim. Süzülen mercimeği de ekleyip karıştıralım. Tuz ve karabiberi de ekleyip karıştıralım ve soğumaya bırakalım.',
   'Hamuru 3 bezeye bölelim. Un serpilmiş zeminde merdane yardımıyla ilk hamuru kare şeklinde açalım. (Diğer hamurların üzerini örtelim kurumasınlar)',
   'Hamur kesici ile küçük karelere bölelim. İç harcı çay kaşığı yardımıyla hamurların ortalarına koyalım.',
   'Hamurun köşelerini ortada birleştirelim. Uygun bir tepsiyi yağlayalım. Mantıkları dizelim. Diğer hamurları da aynısını yapalım ve 200 derecede ısıtılması fırında 20 dakika fırınlayalım.',
   'Tepsiyi çıkartalım üzerine çıkacak kadar sıcak su ekleyip tekrar bir 20 dakika kadar fırınlayalım.',
   'Üzeri için yoğurt ve ezilmiş sarimsağı karıştiralim.Mantilarin üzerine gezdirelim.Sivi yağda kirmizi biberi kizdirip üzerine dökelim.Afiyet olsun!'
],
[
  'püf nokta yok'
],
'Orta'
),
new Meal(
  'bil1',
  'Bil',
  'Bilecik Güveci',
  '',
  60,
  [
    "1 çay bardağı zeytinyağı",
    "1 adet kuru soğan",
    "750 gr kuzu kuşbaşı",
    "2 adet Patlıcan",
    "2 adet patates",
    "yarım litre Kızartmalık Yağ",
    "2 yemek kaşığı tereyağı",
    "2 yemek kaşığı Un",
    "2 su bardağı Süt",
    "yeteri kadar tuz",
    "200 gr rendelenmiş kaşar"
  ],
  [
   'Patlıcanların acısı çıkarılır, kuşbaşı doğranır kızgın yağda kızartılır.',
   'Patates de aynı şekilde kızartılır.',
   'Tencereye tereyağı konur, eriyince ince kıyılmış soğan atılır, pembeleştirilir. Üzerine et atılır suyunu bırakana kadar pişirilir.',
   'Sonra patlıcan ve patates eklenir, tuz katılır, birkaç dakika daha çevrilir.',
   'Yemek toprak bir kaba boşaltılır.',
   'Diğer taraftan un ve tereyağı kavrulur, üzerine soğuk süt ve tuz eklenir muhallebi kıvamına gelene kadar karıştırılark pişirilir. Güvecin üzerine dökülür.',
   'Kaşar peyniri serpilir. Güveç önceden ısıtılmış 200 derece fırına verilir. Kızarana kadar pişirilir.'
],
[
  'Püf nokta yok',
],
'Orta'
),
new Meal(
  'pk1',
  'Bil',
  'Parmak Köfte',
  '',
  50,
  [
      "Yarım kilo dana kıyma",
      "Yarım kilo kuzu kıyma",
      "2 adet büyük boy soğan",
      "1 su bardağı galeta unu",
      "1 paket kabartma tozu",
      "2 diş sarımsak",
      "Karabiber",
      "Kırmızı biber",
      "Yedi türlü",
      "Tuz",
      "Çok az kimyon"
  ],
  [
    'Yoğurma kabına kıyma ve baharatları konur. Kuzu kıymasını sevmeyenler sadece dana kıyması kullanabilir. Kıymanın üzerine soğan ve sarımsak rendelenir.',
    'Daha sonra baharatların hepsi eklenir ve yaklaşık 10 dakika kadar yoğurulur. Köfteye şekil veriliyorsa yoğurma işlemini bitirelim. Üzerine streç geçirelim ve buz dolabında 1 kaç saat dinlendirelim. İsterseniz bu köfteye şekil verdikten sonra buzlukta da saklayabilirsiniz.',
    'Kıvamı alan köfteleri şekillendirelim.',
    'Izgara da ya da tavada iki tarafı güzelce kızarana kadar pişirelim.',
    'Köftelerimiz hazır. Bir servis tabağında yanında pirinç pilavı, biber yada patates kızartması ile servis edebilirsiniz.'
  ],
  [
    'püf nokta yok'
  ],
  'Orta'
),
new Meal(
  'zrz1',
  'Bil',
  'Zırz',
  '',
  10,
  [
      "½ kg ıspanak",
      "1 demet taze soğan",
      "½ kg süzme yoğurt",
      "Çorba kaşığı zeytinyağı",
      "1 tatlı kaşığı Çerkez tuzu (acıka-pırpılcıka)"
  ],
  [
    'Ispanağı ayıklayın. Biri sirkeli suda olmak üzere iki üç su yıkayıp, süzün. Hafif tuzlu kaynar suya atıp yumuşayana kadar haşlayın. Daha sonra süzüp ince ince doğrayın.',
    'Taze soğanları ayıklayıp yıkayın. İncecik doğrayın.',
    'Yoğurt, zeytinyağı ve Çerkez tuzunu bir kabın içinde karıştırıp birbirlerine yedirin.',
    'Daha sonra ıspanak ve taze soğanı da katıp karıştırın.',
    'Servis tabağına alın. Üzerini haşlanmış yumurta dilimleri ile süsleyebilirsiniz.'
  ],
  [
    'Ispanakları kavururken zeytinyağını yakmamaya özen gösterin.',
    'Süslemede pul biberin yanında haşlanmış yumurta ile de servis edilebilir.'
  ],
  'Kolay'
),

//Bingöl Şehri ....

new Meal(
  'tmc1',
  'Bin',
  'Tutmaç Çorbası',
  '',
  70,
  [
      "Bir su bardağı yeşil mercimek",
      "Bir su bardağı küçük doğranmış erişte",
      "Beş su bardağı su (yarısı et suyu olarak kullanılabilir)",
      "Bir tatlı kaşığı tuz",
      "Bir kase yoğurt",
      "Bir adet yumurta sarısı",
      "İki yemek kaşığı un",
      "Yarım limon suyu",
      "Bir yemek kaşığı tereyağı",
      "Bir tatlı kaşığı kuru veya doğranmış taze nane",
      "Bir çay kaşığı pul biber"
  ],
  [
    'Tutmaç çorbası yapılışında birkaç saat suda bekletilen yeşil mercimek yıkanır ve mercimekler çok fazla ezilmeden haşlanır. Üzerine beş su bardağı kadar su konularak kaynatılır.',
    'Kaynayan mercimeğe erişteler ilave edilir ve erişteler yumuşayıncaya kadar pişirilir.',
    'Bir kasede, yoğurt, yumurta sarısı, un ve limon suyu pürüzsüz hale gelinceye kadar çırpma teli ile çırpılır. Kaynayan çorbanın suyundan bir kepçe kadar alınarak azar azar bu terbiyeye ilave edip karıştırılır.',
    'Ilındırılan terbiye çorbaya aktarılırken terbiyenin kesmemesi için sürekli karıştırılır.',
    'Çorba tekrar kaynamaya başladıktan sonra altı kısılır, bir - iki taşım kaynayınca ocaktan alınır. Çorbanın kıvamı katı olursa kaynamış su ilave edilebilir.',
    'Bir tavada tereyağı eritilir, kuru veya taze nane ve pul biber eklenerek kızdırılır, Tutmaç Çorbası üzerinde gezdirilir ve çorba karıştırılır.'
  ],
  [
    'Mercimek miktarınca haşlanmış nohut ilavesine de rastlanır.',
    'Bazen köfte bazen kavurma konulduğu olur. ',
    'Üzerine dökülecek sos olarak bir tavada rendelenmiş bir adet kuru soğan tereyağında kavurulup içine nane, kırmızı pul biber, "anıh, anık veya aruh" ve kuru reyhan ilave edilerek de hazırlanabilir.',
  ],
  'Orta'
),
new Meal(
  'mst2',
  'Bin',
  'Mustuva',
  '',
  30,
  [
      "2 kg ayran",
      "300 gr pirinç",
      "125 gr tereyağı"
  ],
  [
    'Pirinçler ayıklanıp yıkandıktan sonra geniş bir tencereye bırakılır ve ayran ilave edilir.',
    'Tencereye konulan malzeme normal yanan bir ocağın üstünde karıştırılmaya başlanır.',
    'Ayranın bozulmaması için tahta bir kaşıkla ara verilmeksizin sürekli karıştırılır.',
    'Ayran kaynamaya başladıktan sonra karıştırma işlemi bir müddet devam eder.',
    'Yemek katı hale gelinceye kadar ateşte bırakılır.',
    'Katılaşan yemek ateşten alınarak ortası boşaltılmış vaziyette servis kabına konulur.',
    'Kızartılan tereyağı ortası boşaltılan yemeğin içine dökülür ve servis yapılır.'
  ],
  [],
  'Kolay'
),
new Meal(
  'lr3',
  'Bin',
  'Lör',
  '',
  60,
  [
      "5 su bardağı un",
      "2.5-3 su bardağı ılık su",
      "1 yemek kaşığı instant maya",
      "1 silme yemek kaşığı tuz",
      "1 tatlı kaşığı şeker",
      "3-4 yemek kaşığı zeytinyağı",
      "1 su bardağı ince doğranmış kavurma",
      "1 su bardağı çökelek",
      "3 adet orta boy soğan",
      "200 gr tereyağı",
      "1 çay bardağı sıvı yağ"
  ],
  [
    'Karıştırma kabına mayayı, ılık suyu, şekeri alıp karıştırın.',
    'Azar azar un ilav ederek ekmek hamuru gibi yumuşak bir hamur elde edin.',
    'Hamuru iki eşit bezeye ayırın.',
    'Hamuru 1 saat mayalandırın.',
    'Tereyağını ve sıvı yağı tavaya koyup eritin.',
    'Dinlenen hamuru unlanmış tezgahta açabildiğiniz kadar açın.',
    'Erittiğiniz tereyağını bolca sürüp rulo yapın ve gül böreği gibi sarın.',
    'Diğer bezeyi de aynı şekilde gül böreği gib hazırlayın.',
    'Hazırladığınız gül böreği şeklindeki hamurları 15 dakika dinlendirin.',
    'İç harcını hazırlayalım.Yemeklik doğradığınız soğanı, ince ince doğradığınız kavurmayı ve çökeleği güzelce karıştırın.',
    'Yuvarlak tepsinin tabanını yağlayın.',
    'Dinlenen hamuru elinizle yuvarlak tepsi boyutunda açın. Açarken yağ dökün ve tepsiye yerleştirin. Hazırladığınız iç harcını yayın. Diğer hamuru da aynı şekilde hazırlayıp üstüne koyun.',
    'Kalan yağı üzerine bolca sürün. Dilimleyip önceden ısıtılmış 180 derece fırında üzeri nar gibi kızarana kadar pişirin.'
  ],
  [
    'püf nokta yok'
  ],
  'Orta'
),
new Meal(
  'yf4',
  'Bin',
  'Sorina pel',
  '',
  30,
  [
      "4 adet yufka ekmek",
      "1 kase yoğurt",
      "sarmısak",
      "tuz",
      "tereyağı"
  ],
  [
    'Pişirilip hazırlanan yufkalar 4-5 cm. dürülür.',
    'Dürülen yufkalar hamur tahtası üzerinde 4-5 cm. aralıklarla kesilir.',
    'Kesilen parçalar dik gelecek şekilde yan yana sıkı sıkıya dizilir.',
    'Dövülen sarımsak yoğurda katılarak sarımsaklı yoğurt işlemi yapılır.',
    'Sarımsaklı yoğurt dizilen ekmeğin üstüne dökülür.',
    'Daha sonra üzerine kızartılmış tereyağı ilave edilerek yemek servise hazır hale gelir.'
  ],
  [],
  'Kolay'
),
new Meal(
  'kh5',
  'Bin',
  'Kalbur Hurması',
  '',
  15,
  [
      "2 yumurta",
      "½ su bardağı yoğurt",
      "½ bardak süt",
      "½bardak su",
      "½ bardak sıvı yağ",
      "1 paket kabartma tozu ( 1 çay kaşığı karbonat)",
      "Tuz",
      "Aldığı kadar un",
      "2 su bardağı sıvı yağ(kızartmak için)"
  ],
  [
    'Tüm malzemelerden yumuşak bir hamur yoğrulur.',
    '10 dk kadar dinlendirilir.',
    'Hamurdan ceviz büyüklüğünde parçalar koparılır oval şekil verilir.',
    'Delikli bir kap üzerinde 3 parmakla bastırılıp açılır ve mekik şeklinde yuvarlanır (endenin iri bölümünde de olabilir).',
    'Kızgın yağ içinde kızartılır.'
  ],
  [
    'Püf nokta yok'
  ],
  'Kolay'
),

// Bitlis Şehri ...

new Meal(
  'ca1',
  'Bit',
  'Çorti Aşı',
  '',
  55,
  [
      "1 kg lahana turşusu (suyuyla birlikte 1 kg olmalı)",
      "500 gr kemikli kuzu kuşbaşı",
      "200 gr tereyağı",
      "200 gr nohut(haşlanmış, soyulmuş)",
      "3 adet kuru soğan",
      "1 limonun suyu",
      "1 yemek kaşığı biber salçası",
      "1 yemek kaşığı domates salçası",
      "2 litre su",
      "2 su bardağı iri bulgur",
      "1 su bardağı un",
      "1 çorba kaşığı nişasta",
      "1 yumurtanın akı",
      "1 tatlı kaşığı tuz",
      "1 tatlı kaşığı karabiber",
      "1 çorba kaşığı kuru nane"
  ],
  [
    'Bulgur ayıklanıp yıkanır.',
    'Ardından üzerine kaynar su dökülüp, bulgurun kabarması için bir süre bekletilir.',
    'Bulgur kabarınca un, nişasta, yumurta akı, tuz, nişasta ve kuru nane ilave edilip, ara sıra su serpilerek, harç yoğrulur.',
    'Daha sonra yoğurulan harçtan fındık büyüklüğünde köfteler yapılır.',
    'Bir tepsi unlanıp, hazırlanan köfteler tepsiye konur.',
    'Büyük bir tencerede tereyağ eritilip, etler kavrulur.',
    'Daha sonra soğan ilave edilip, bir süre daha kavrulur.',
    'Salçalar ve turşu ilave edilip, biraz daha kavrulur.',
    'Son olarak da su, nohut, turşu suyu ve limon suyu ilave edilir', 
    'Turşu ve nohutlar pişince tepsideki küçük köfteler ilave edilir. Köfteler de pişince çorti aşı hazır hale gelir ve servis edilir.'
  ],
  [
    'Çorba gibi servis edebilirsiniz',
  ],
  'Orta',
),
new Meal(
  'etli_buryan2',
  'Etli Büryan',
  'Bit',
  '',
  55,
  [
      "1.5 kg koyun eti",
      "3 su bardağı pirinç",
      "1 adet orta boy soğan",
      "2 adet büyük boy domates",
      "5.5 su bardağı et suyu",
      "1/2 su bardağı sıvı yağ",
      "Tuz"
  ],
  [
      'İri parçalara bölünmüş ete 6 su bardağı su ilave edip, yumuşayıncaya kadar haşlayın.',
      'Soğanı küçük küp şeklinde doğrayın. Sıvıyağda pembeleşinceye kadar kavurun. Kabukları soyulup, küp şeklinde doğranmış domatesi ilave edin.',
      'Soğana, yıkayıp süzdüğünüz pirinci ilave edin. Sürekli karıştırarak kavurun.',
      'Pirinci, orta büyüklükte ısıya dayanıklı bir cam tepsiye yayın. Üzerine haşlanmış eti yerleştirin. Sıcak et suyunu ve tuzu ilave edin.',
      'Etli pilavı önceden 200 derece ısıtılmış fırında suyunu çekene kadar pişirin. Sıcak olarak servis yapın.'
  ],
  [
    'Püf nokta yok'
  ],
  'Orta'
),
new Meal(
  'unknown3',
  'Gılorik',
  'Bit',
  '',
  120,
  [
      "Yarım kg yağsız dana eti",
      "2 domates",
      "250 gram köftelik bulgur",
      "4 yemek kaşığı domates salçası",
      "1 su bardağı nohut (mıkaşer)",
      "1 tatlı kaşığı limon tuzu",
      "1 yemek kaşığı pulbiber",
      "Tuz",
      "100 gram tereyağı ya da margarin"
  ],
  [
      'Akşamdan tuzlanmış et yoğurulup derin bir kaba alınır.',
      'Bulgur eklenip iyice yoğurulur.',
      'Nohut büyüklüğünde toplar hazırlanır.',
      'Derin bir tencerede yağ eritilip rendelenmiş domates kavrulur.',
      'Daha sonra salça eklenip kokusu çıkana kadar kavrulmaya devam edilir.',
      'Limon tuzu, tuz ve pulbiber eklenir.',
      'Son olarak sıcak su eklenip kaynatılır.',
      'Islanmış nohut eklenip 15-20 dakika kaynatılır.',
      'Köfteler eklenip 10 dakika daha kaynatılır.'
  ],
  [
    'Püf nokta yok'
  ],
  'Orta'
),
new Meal(
  'unknown4',
  'Bit',
  'Gari aşı',
  '',
  25,
  [
      "300 gr gari otu",
      "1 büyük dana ilikli kemik",
      "300 gr. sumak",
      "1 su bardağı aşurelik buğday",
      "1 yemek kaşığı tuz",
      "100 g. yağsız kıyma",
      "100 gr. ince bulgur",
      "1 tatlı kaşığı tuz"
  ],
  [
      'Garilerimizi doğruyoruz. ( Isırgan gibi olduğundan eldivenle doğramak daha uygun olur )',
      '300 gr. sumağa 1,5 litre su ekleyip 1 taşım kaynatacağız.',
      'Süzgeç yardımıyla gari otunun üzerine birazını süzeceğiz. Yarım saat bekleteceğiz.',
      'Sonra yıkayıp geniş ve derin bir tencereye aldıktan sonra gariyi buğdayı tuzu koyup 2 litre su ekleyip arada dibi tutmaması için karıştıracağız.',
      'Yemeğimizin kıvamı çok sulu değil çokta koyu olmayacak.',
      'Bir kenarda kıymamızı, bulguru ve tuzu su yardımıyla iyice yoğuracağız. Minik misketler yapıyoruz(glorik)',
      'Buğdaylar pişince kalan sumak suyunu ve gloriklerimizi ekleyeceğiz. 15 dakika daha kaynatacağız.',
      'Çorbamız hafif ekşili olacaktır. Suyu az gelirse ekleyebiliriz.'
  ],
  [
    'Püf nokta yok'
  ],
  'Orta',
),
new Meal(
  'unknown5',
  'Bit',
  'Kengerli bulgur pilavı',
  '',
  10,
  [
      "1kg kenger",
      "Bir su bardağı bulgur",
      "1 fincan sıvıyağ",
      "Bir yumurta",
      "Tuz"
  ],
  [
      'Kengerleri dilimleyin. Sonra haşlayın.',
      'Daha sonra kengerleri ve yumurtayı biraz kavurun.',
      'Bulgurunu ilave edin.',
      'Göz kararı su ve tuz ekleyin. Ardından kaynatın. Suyunu çekene kadar pişirin.'
  ],
  [
    'Püf nokta yok'
  ],
  'Kolay'
),

// Bolu Şehri .....

new Meal(
  'ked1',
  'Bol',
  'Kedi batmaz',
  '',
  15,
  [
      "2 su bardağı su",
      "1 su bardağı mısır unu",
      "1 su bardağı dövülmüş ceviz",
      "1 su bardağı tulum peyniri",
      "2 çorba kaşığı tereyağı"
  ],
  [
      'Suyu derin bir tencerenin içerisine alıp kaynayana kadar bekleyin. İçerisine mısır ununu ilave edip hamur kıvamına gelmesini sağlayın.',
      'Ocağın üzerinde 10 dakika karıştırarak pişirin. Ocaktan alarak 10 dakika dinlendirin.',
      'Ardından ceviz ve tulum peynirini ilave edip, karıştırın. Bu karışımın yarısını servis tabağına yayın.',
      'Hamuru kaşık yardımıyla küçük parçalara ayırın.',
      'Ayırdığınız parçaları servis tabağındaki peynirli malzemenin üzerine dizin.',
      'Kalan harcı hamur parçalarının üzerine serpiştirin. Tereyağını eritip üzerine gezdirerek servis edebilirsiniz.'
  ],
  ['yok'],
  'Kolay'
),
new Meal(
  'Orman Kebabı2',
  'Bol',
  'Orman Kebabı',
  '',
  45,
  [
      "500 g iri kuşbaşı et",
      "2 adet büyük boy patates",
      "2 adet havuç",
      "1 adet soğan",
      "1 su bardağı konserve bezelye",
      "1 yemek kaşığı salça",
      "4-5 yemek kaşığı zeytinyağ",
      "1 tatlı kaşığı kırmızı tatlı toz biber",
      "Tuz"
  ],
  [
      'Etleri düdüklü tencereye alıp harlı ateşte suyunu salıp çekene kadar karıştırarak kavurun.',
      'İçine yağı ve yemeklik doğranmış soğanları ekleyip soğanlar yumuşayana kadar kavurun.',
      'Salçayı ekleyip kokusu çıkana kadar kavurun.',
      'Toz biberi ekleyip karıştırın.',
      'Etlerin boyutundan biraz büyük doğranmış patatesleri ve yuvarlak doğranmış havuçları da ekleyin.',
      'Sürekli karıştırarak 2-3 dk. kavurun.',
      'Üzerini geçecek kadar sıcak su koyup kapağını kapatın.',
      'Tencerenizin huyuna göre etler yumuşayana kadar pişirin.',
      'Kapağını açtıktan sonra bezelyesini ve tuzunu ekleyip bir taşım daha kaynatın.'
  ],
  [
    
     'Etlerinizi tencerede haşlamanız düdüklüye oranla daha üzün sürecektir. Etlerin çabuk yumuşaması için dilerseniz kuzu kuşbaşı et de kullanabilirsiniz.',
     'Dilerseniz kebabınızın malzemelerine patlıcan gibi sebzelerden de ekleyebilirsiniz. Ancak malzemeleri eklediğiniz sebzenin pişme süresine göre sıralayarak tencereye ilave etmelisiniz.'
        
  ],
  'Orta'
),
new Meal(
  'Paşa Pilavı3',
  'Bol',
  'Paşa Pilavı',
  '',
  60,
  [
      "5 adet patates",
      "1 adet kuru soğan",
      "2 adet haşlanmış yumurta",
      "Maydanoz",
      "Tuz",
      "Zeytinyağı",
      "Limon",
      "Karabiber, pul biber"
  ],
  [
    'Patatesler haşlanır, kabukları soyularak iri küp halinde doğranır.',
    'Soğanlar soyulup piyazlık dilimlenerek tuzla acısı alınır.',
    'Haşlanmış yumurta ve maydanoz içine doğranır, limon, tuz zeytinyağı, biraz karabiber ve pulbiber ile karıştırılır.'
  ],
  [
    'Püf nokta yok'
  ],
  'Kolay'
),
new Meal(
  'Bolu Köftesi4',
  'Bol',
  'Bolu Köftesi',
  '',
  40,
  [
      "500 gram kıyma (dana ve kuzu karışık)",
      "Önceki günden kalan 2 dilim ekmek",
      "3 adet soğan",
      "5-6 dal maydanoz",
      "3 diş sarımsak",
      "2 çorba kaşığı rendelenmiş Mengen peyniri",
      "1 yumurta",
      "1 çay kaşığı kimyon",
      "1 tatlı kaşığı kekik",
      "1 tatlı kaşığı tuz"
  ],
  [
    'Öncelikle bu köftenin lezzetinde en önemli noktalardan biri kıyma harcınızı dinlendirmeniz.',
    'Eğer vaktiniz varsa bu karışımı geceden hazırlayıp buzdolabında bekletin.',
    'Köfte için soğanları ince bir şekilde doğrayın ve sarımsakları rendeleyin.',
    'Kıymanızı geniş bir kaba aldıktan sonra soğan ve sarımsakları kıymanın içine ekleyin.',
    'Bu karışıma yumurtayı ve kıyılmış maydanozu da ilave edin.',
    'Ekmek dilimlerini robottan geçirip kıymaya ekleyin.',
    'Tuzu ve baharatları da bu karışıma ekledikten sonra yoğurmaya başlayın.',
    'Bir süre yoğurduğunuz kıymaya rendelemiş olduğunuz Mengen peynirini ilave ederek yoğurmaya devam edin.',
    'Eğer aynı gün pişirmek için yapıyorsanız harcın üzerini kapatarak en az 30 dakika buzdolabında dinlenmeye bırakın.',
    'Dinlendirdiğiniz harca şekil vermek için cevizden büyük parçalar alın.',
    'Bu köftenin şekli yassı olmalı, buna göre köftenize şekil verebilirsiniz.',
    'Köftenizi kızartmak için ızgara veya tava tercih edin.',
    'İçinde kuzu kıyması da olduğu için tavaya yağ koymanıza gerek kalmayabilir',
  ],
  [
    'tercihe göre ızgara edilmiş domates, halka soğan, sivri biberle veya piyazla sunabilirsiniz',
  ],
  'Zor',
),
new Meal(
  'Yedigöller Kebabı5',
  'Bol',
  'Yedigöller Kebabı',
  '',
  60,
  [
      "100 gr. kuzu but eti",
      "1 adet domates",
      "100 gr. piliç fleto",
      "2 adet yeşil biber",
      "60 gr. köy ekmeği",
      "50 gr. süzme yoğurt",
      "50 gr. tereyağıı",
      "2 gr. toz kırmızı biber",
      "1 gr. toz karabiber",
      "25 gr. et suyu",
      "1 gr. tuz",
      "1 demet dereotu"
  ],
  [
    'Kuzu eti ve piliç eti üçer parça halinde ince dövülür.',
    'Tuzlanip biberlendikten sonra ızgarada pişirilir.',
    'Bolu köy ekmeği küp seklinde doğranır.',
    'Tereyağıı ile kızartılır.',
    'Üzerine et suyu ilave edilir.',
    'Servis tabağına konulur.',
    'Ekmeklerin üzerine süzme yoğurt ilave edilir.',
    'Izgarada pişen etler ikiye bölünür.',
    'Servis tabağındaki malzemelerin üzerine dizilir.',
    'Garnitür olarak ızgarada hazırlanan domates ve biber servis tabağına konulur.',
    'Üzerine tereyağıı, biber sos ve dere otu ile servis yapılır.'
  ],
  [
    'püf nokta yok',
  ],
  'Orta',
),



];
  






  