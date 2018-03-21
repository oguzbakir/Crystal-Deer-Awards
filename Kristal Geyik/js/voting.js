function createOption(name,o,value) {
    el = document.createElement('option');
    el.value = value;
    el.innerHTML = name;
    el.id = value;
    o.append(el);
}
/*
ddoptions ={
    kategoriler: ['YönetimFinans','Sanat','Mühendislik'],
    YönetimFinans: ['Yönetim','Finans','Girisimclik'],
    Sanat: ['Müzik','Resim','Sinema'],
    Mühendislik: ['Yazilim','Elektronik','İnsaat'],
    Müzik:['Nicola Cruz','Nicolas Jaar','Glitch Mob'],
    Sinema:['The Dark Knight','Lord of the Rings','Harry Potter'],
    Nicola26Cruz:['images/candidates/nicolacruz.jpg','Nicola Cruz   Ecuador\'s musical treasure, catch Nicola Cruz\'s hourlong live set of his remarkable downtempo Andean electronic music.'],
    Glitch26Mob:['images/candidates/glitchmob.jpg','The Glitch Mob is an American electronic music group from Los Angeles, California. It consists of edIT, Boreta and Ooah. Chris Martins of LA Weekly noted that they "have undoubtedly found the largest audience of any L.A. beat scene artist yet.']
};*/
ddoptions = {
    kategoriler: ['YönetimFinans', 'KültürSanatSpor', 'Mühendislik'],
    YönetimFinans: ['ETicaret', 'Denetim-Danismanlik', 'Kozmetik ve Kisisel Bakim', 'Hizli Tüketim', 'Girisimclik', 'Pazarlama ve Reklam', 'Grup Şirketler', 'Dayanikli Tüketim Mallari', 'Telekomünikasyon', 'Giyim', 'Lojistik'],
    KültürSanatSpor: ['Müzik', 'Sosyal Medya', 'Edebiyat', 'SinemaTiyatro', 'Spor'],
    Mühendislik: ['Yazilim', 'Elektronik', 'Haberlesme', 'İnsaat', 'Makina Sanayi', 'Otomotiv', 'Kimya Sanayi', 'Enerji', 'Gida', 'Maden'],
    ETicaret: ['Youthall', 'gittigidiyor', 'hepsiburada'],
    DenetimDanismanlik: ['HBStrateji', 'EandY'],
    Kozmetik26ve26Kisisel26Bakim: ['Yves Rocher'],
    Hizli26Tüketim: ['Hacettepe Öğrencisinin Tercihi'],
    Haberlesme: ['Vestel'],
    Girisimcilik: ['Youthall', 'Bikoshu', 'Taseron Bankasi', 'Seyisco', 'Resteam', '3D3 Teknoloji', 'Scoutium', 'Eyedius', 'Nanomik', 'iCaked'],
    Pazarlama26ve62Reklam: ['gittigidiyor.com'],
    Grup26Şirketler: ['Hacettepe Öğrencisinin Tercihi'],
    Dayanikli26Tüketim26Mallari: ['Vestel'],
    Telekomünikasyon: ['Hacettepe Öğrencisinin Tercihi'],
    Giyim: ['Sarar', 'Altinyildiz Classics', 'Mavi'],
    Lojistik: ['Hacettepe Öğrencisinin Tercihi'],
    Sosyal26Medya: ['KurcaLa', 'Buğra Akpinar', 'Ekin Kollama', 'Pratik Bilgiler', 'Uras Benlioğlu', 'Oğuzhan Uğur', 'Ezginin Kanali'],
    Müzik: ['Eypio', 'Gaye Su Akyol', 'Redd', 'Senforock', 'Kalben', 'Zakkum'],
    Edebiyat: ['Ali Lidar', 'Kahraman Tazeoğlu', 'Zeus Kabadayi'],
    SinemaTiyatro: ['Hazal Ergüçlü', 'Demet Evgar', 'Elçin Sangu'],
    Spor: ['İrem Yaman', 'Elif Yilmaz', 'Ayse Begüm Onbasi'],
    Yazilim: ['Koda', 'Jotform', 'Micro Yazilim', 'Bilisim A.Ş.'],
    Elektronik: ['Casper', 'Bosch'],
    İnsaat: ['Hacettepe Öğrencisinin Tercihi'],
    Makina26Sanayi: ['Anova', 'Tülomsas', 'Vestel'],
    Otomotiv: ['Toyota', 'Avitas Motorsport', 'Nurol Makina', 'Bosch'],
    Kimya26Sanayi: ['DSM', 'BASF'],
    Enerji: [],
    Gida: ['Ankara Halk Ekmek', 'Keskinoğlu'],
    Maden: ['Erdemir'],
    Bosch: ['images/canditates/bosch_logo_turkish.png', 'BOSCH TURKIYE  Bosch Türkiye, Mobilite Çözümleri, Enerji ve Bina Teknolojileri, Sanayi Teknolojileri ile Dayanikli Tüketim Mallari alanlarinda faaliyet gösteren bes ayri sirketi kapsamaktadir. Bosch Grubu, Türkiyede ilk kez 1910 yilinda kurulan bir temsilcilikle faaliyetlerine baslamis olup, ilk fabrikasini ise 1972 yilinda Bursada kurmustur. Bosch Türkiye, 17.000 çalisani, 12 milyar Türk Lirasi cirosu ve 7 milyar Türk Lirasi ihracatiyla teknoloji ve hizmetler alaninda önde gelen tedarikçilerden biri olarak faaliyet göstermektedir.'],
    DSM: ['images/candidates/dsm-logo.png', 'DSM  DSM bir devlet kurulusu seklinde, ulusal ve bölgesel bir kömür madeni sirketi olarak 1902de Hollandada kurulmustur. DSM (Dutch State Mines: Hollanda Devlet Madenleri), gelisen kömür isleme faaliyetleri sirasinda amonyaği kesfederek gübre üretiminde kullanilmak üzere pazarlamistir. 1970lerde DSM in ana faaliyet alanini kimyasallar olusturmustur.'],
    BASF: ['images/candidates/logo_twittercard_large.png', 'BASF '],
    Keskinoğlu: ['images/candidates/keskin.jpg', 'KESKINOGLU '],
    Erdemir: ['images/candidates/Erdemir_logo.jpg', 'ERDEMEIR '],
    Youthall: ['images/candidates/youthall.png', 'Youthall  2014 yilinda kurulan Youthall sirketler ile üniversite öğrencilerini bir araya getiren profesyonel ağ ve dijital isveren markasi platformudur.  Öğrenciler web sitesi üzerinden ulasmak istediğin sirketlere, staj ve MT ilanlarina, etkinliklere, eğitimlere, kariyer tavsiyelerine ve çok daha fazlasina erisebilir.'],
    gittigidiyor: ['images/candidates/gittigidiyor-logo-yeni.png', 'Gittigidiyor '],
    hepsiburada: ['images/candidates/hepsiburada-logo1.png', 'Hepsiburada '],
    HBStrateji: ['images/candidates/hbstrateji.png', 'HBStrateji '],
    Seyisco: ['images/candidates/seyisco.png', 'Seyisco'],
    Sarar: ['images/candidates/sarar-logo.jpg', 'Sarar '],
    Mavi: ['images/candidates/Logo_of_Mavi.png', 'Mavi Jeans '],
    Ali26Lidar: ['images/candidates/ali_lidar.jpg', 'Ali Lidar '],
    Kahraman26Tazeoğlu: ['images/candidates/kahraman tazeoğlu.jpg', 'Kahraman Tazeoğlu '],
    Zeus26Kabadayi: ['images/candidates/zeus kabadayi.jpg', 'Zeus Kabadayi '],
    İrem26Yaman: ['images/candidates/irem yaman.jpg', 'İrem Yaman '],
    Elif26Yilmaz: ['images/candidates/elif_yilmaz.jpg', 'Elif Yilmaz '],
    Ayse26Begüm26Onbasi: ['images/candidates/ayse_begum_onbasi.jpg', 'Ayse Begüm Onbasi '],
    Eypio: ['images/candidates/eypio.jpg', 'Eypio '],
    Ankara26Halk26Ekmek: ['images/candidates/halkekmek_logo.png', 'Ankara Halk Ekmek '],
    Jotform: ['images/candidates/jotform.png', 'JotForm  '],
    Koda: ['images/candidates/koda.jpg', 'Kod-A  Kod-A küresel pazara yönelik doküman tabanli teknolojiler gelistirme ve çözümler sunma misyonuyla kuruldu.'],
    Taseron26Bankasi: ['images/candidates/taseron_banka.jpeg', 'Taseron Bankasi '],
    ADAY26ADI: ['images/candidates/FOTOGRAFADI.jpg', 'ADAYIN ADI   TANITIM YAZISI'],
    Ekin26Kollama: ['images/candidates/ekinkollama.jpg', 'Ekin Kollama  '],
    Ezginin26Günlüğü: ['images/candidates/ezgihanimi.jpg', 'Ezginin Günlüğü  '],
    Uras26Benlioğlu: ['images/candidates/urasbenlioglu.jpeg', 'Uras Benlioğlu  '],
    Oğuzhan26Uğur: ['images/candidates/oguzhanugur.jpg', 'Oğuzhan Uğur  '],
    Mikro26Yazilim: ['images/candidates/mikroyazilim.jpg', 'Mikro Yazilim  Türkiyenin ilk ve öncü kurumsal-ticari is yazilimlari üreticilerinden biri olarak 1988 yilinda kurulmus olan Mikro Yazilim, sirketlerin, islerini en üst düzeyde yönetecek ve verimli büyümelerini sağlayacak nitelikte yazilimlar gelistirir. Gelistirilen kapsamli ve fonksiyonel bu yazilimlar, sirket varliklarinin en iyi sekilde yönetilmesine yardimci olmayi hedefler.'],
    Bilisim26AŞ: ['images/candidates/bilisimas.jpg', 'Bilisim AŞ.  Bilisim AŞ, önemli kamusal ve özel kuruluslarin Yönetim Bilisim Sistemleri (MIS) ve Kurumsal Kaynak Planlama (ERP) projelerinde sistem çözümleme/tasarim ve uygulama yazilimi gelistirme uzmanliğini, proje yönetiminde her türlü güçlüğü alt edebilecek mühendislik ustaliğini, yazilim ürünleriyle ve basardiği hizmetlerle kanitlamis, çağdas teknolojinin bütün olanaklarina sahip, yenilikçi ve dinamik bir endüstri kurulusudur.'],

    Redd: ['images/candidates/redd.jpg', 'Redd  '],

    Kalben: ['images/candidates/kalben.jpg', 'Kalben  '],

    Zakkum: ['images/candidates/zakkum.jpg', 'Zakkum  '],

    Elçin26Sangu: ['images/candidates/elcinsangu.jpg', 'Elçin Sangu  '],

    Demet26Evgar: ['images/candidates/demetevgar.jpg', 'Demet Evgar  '],

    Hazar26Ergüçlü: ['images/candidates/hazarerguclu.jpg', 'Hazar Ergüçlü  '],

    Taseron26Banka: ['images/candidates/taseron_banka.jpeg', 'Taseron Bankasi  Taseron Bankasi Türkiye ve Orta Doğudaki insaat projelerine taseron firma tedarik eden dijital bir platformdur. 2013 yilinda Emrina AŞ. bünyesinde kurulan Taseron Bankasi kurulduğu günden bu yana 923 insaat projesine taseron firma tedarik etmistir.'],

    Vestel: ['images/candidates/vestel-kirmizi-logo-buyuk.png', 'Destek  Yerli üretimin gururuyla sadece Türkiyenin değil, dünyanin da en büyük teknoloji sirketleri arasinda yer alan Vestel, 1984 yilinda baslayan faaliyetlerini 1994 yilindan beri Zorlu Holding bünyesinde sürdürüyor. 16si yurtdisi olmak üzere toplam 23 sirketten olusan Vestel Şirketler Grubu, tüketici elektroniği, beyaz esya, dijital ürünler, bilgi teknolojileri, LED aydinlatma ve savunma alanlarinda genis bir ürün yelpazesi sunuyor.'],

    Avitas26Motorsports: ['images/candidates/avita-motorsport-2.jpg', 'Avitas Motorsports   Avitas 1969 yilinda kurulmustur. Otomotiv Endüstrisinde uzmanlasan bu alanda lider firmalardan biri haline gelmistir. 2008 yilinda Avitas Motorsport İs Birimini kurarak, tasarim-ürün süreci konusunda uzun yillara dayanan deneyime dayanarak, kendi markasi altinda benzersiz yaris arabalari tasarlamaya ve üretmeye basladi. Bugün itibariyle 5 farkli model otomobil tasarlanmis ve üretilmistir.'],

    Bikoshu: ['images/candidates/bikoshu.png', 'Bikoshu   Bikoshu kullanicilarinin mahallelerinde bulunan dükkan mağaza ve restoranlardan online alisveris yapabilmelerini sağlayan lokal bir sanal pazaryeridir.'],

    Scoutium: ['images/candidates/scouitum.jpg', 'Scoutium   Scoutium futbolseverlerin futbolcularla ilgili görüslerinin kulüplere ulasmasini sağlayan bir futbol gözlemciliği platformudur.'],

    Nanomik: ['images/candidates/nanomik.jpg', 'Nanomik   Nanomik Nanobiyoteknoloji, gida ve tarim ürünleri için doğal koruyucular gelistirmektedir. Misyonumuz, gida ve tarim ürünlerinde mikroorganizmalar sebebi ortaya çikan ürün kayiplarinin önüne geçebilmek için var olan kimyasal koruyuculara alternatif insana ve doğaya zararsiz koruyucular gelistirmektir. Vizyonumuz, dünya çapinda üretilen tüm gida ve tarim ürünlerinin daha doğal yollarla koruyarak israfi önleyebilmek.'],

    Tülomsas: ['images/candidates/FOTO GELECEK.jpg', 'Tülomsas   Ana faaliyeti TCDDnin lokomotif ve vagon ihtiyacini karsilamak olan TÜLOMSAŞ çesitli tipte lokomotif, demiryolu bakim araci, bojili yük vagonu, çesitli tipte dizel motor, alternatör ve cer motoru üretim kapasitesiyle Türk Ağir Sanayiinin lokomotifi olarak hizmet vermektedir. Bugüne kadar yaklasik 707 adet çesitli tipte lokomotif ve 7.680 adet çesitli tipte bojili yük vagonu üretimi gerçeklestirilmistir. Bunlarin onarimlari ile diğer demiryolu araç ve gereçlerinin üretim ve onarimlari da yapilmaktadir. '],

    Nurol26Makina: ['images/candidates/nms.png', 'Nurol Makine  Nurol Makina, savunma sanayindeki 25 yili askin tecrübesi ve yüksek kabiliyetleri ile Nurol Makina; 4x4 segmentinde Zirhli Muharebe Araci, Zirhli Personel Tasici ve Özel Amaçli Platformlarin özgün sistem tasarimlari yapmakta ve üretimini gerçeklestirmektedir. Ayrica zirhli araçlar için silah kulesi, civatalanabilir ilave zirh çelikleri, komuta ve nisanci kupolalari, KBRN (Kimyasal, Biyolojik, Radyolojik ve Nükleer) sistem çözümleri de Nurol Makina faaliyetleri içinde yer almaktadir.'],

    iCaked: ['images/candidates/icaked5x5.jpg', 'iCaked  iCaked ile sizlere hayalinizdeki pastayi 3 boyutlu tasarlama imkani sunuyoruz. Yüzlerce çesit tasarim pasta figürü arasindan dilediğinizi seçerek dilediğiniz tasarim pasta modeline ulasabiliyorsunuz. Kisacasi hayalinizdeki butik pasta artik sadece bir tik uzağinizda.'],


    Anova: ['images/candidates/anova.png', 'Anova  ANOVA tasarim, analiz ve imalat yeteneklerini bir arada yürütmenin yani sira; dünyaca ünlü yazilim programlarinin da temsilciliğini yapmaktadir. Amacimiz, yerlilestirme ve teknolojik kazanim yükümlülüğü projeleri ile disa bağimliliğimizi azaltacak teknolojik ürün ortaya çikarmak ve firmalarimizin ürün gelistirme sürecinde; Bilgisayar Destekli Mühendislik Hizmeti vererek; özgün tasarim yapmalarini sağlamak, tasarim süreçlerini kisaltmak, tasarim maliyetlerini düsürmek ve ürünlerin verimlerini arttirarak firmalarimizin dünya pazarinda söz sahibi olmalarina katkida bulunmaktir.'],

    The3D326Teknoloji: ['images/candidates/3d3.jpg', '3D3 Teknoloji  Firmamiz, gerek portföyündeki hazir 3D Yazici (3D Printer) ürünlerini kullanicilara sunmakta, gerekse proje bazli olarak 3D Yazici gelistirme projeleri yürütmektedir.  3D3 Teknoloji, proje bazli 3D Yazici gelistirme yeteneği olan Türkiyenin ilk ve tek 3D Yazici firmasi konumundadir.'],

    EyeDius: ['images/candidates/eyedius.png', 'EyeDius  EyeDius, site veya toplu konut alanina giris yapmakta olan bir kisinin yüzünü anlik olarak tarayarak sistemde doğrulama yapiyor ve eslesme olunca giris onayi veriyor. Bu yüz tanima islemi kisilerin herhangi bir tanima kutusuna yaklasmasina gerek kalmadan doğal geçislerinde otomatik olarak yapilabiliyor. Sistemde kayitli olan Beyaz Liste ve Kara Liste üzerinden doğrulama yapan EyeDius, yüz tanima özellikli kameralarla anlik olarak kontrol sağliyor. Gelen kisi Kara Listede yer aliyorsa girise izin verilmiyor.'],

    Buğra26Akpinar: ['images/candidates/themakinahero.png', 'The Makina  Türkiyede ki bütün araç modifiyesi ile uğrasan ve bu camiaya gönül veren herkesi tek bir çati altinda toplamayi amaç edinmis, Buğra Akpinar tarafindan Kasim 2015 tarihinde yayin hayatina baslamis ve bu konuda Türkiyede ilk marka patentini alan bir projedir. Dünya üzerinde toplamda 20 milyon kisiye erismis ve görüntülenmistir. Dünya teknoloji devlerinden biri olarak görülen MSI (Micro-Star International) firmasi ile 2 senedir dev bir partnerlik ve marka isbirliği anlasmasi vardir.'],

    KurcaLa: ['images/candidates/logok.jpg', 'KurcaLa  KURCALA, 2013 yilinin Kasim ayinda bir fikirle ortaya çikan ve köklü bir geçmise sahip olusumdur. Peki bu olusum ne yapar? Sistemde görüp yasadiklarina dayanarak çesitli videolar çeker ve bu videolarda -israrla- mizahi kullanmaya çalisir. Ankara menselidir. Şehri gri, mizahi karadir.'],

    Youthall: ['images/candidates/youthall.png', 'Youthall  2014 yilinda kurulan Youthall sirketler ile üniversite öğrencilerini bir araya getiren profesyonel ağ ve dijital isveren markasi platformudur.  Öğrenciler web sitesi üzerinden ulasmak istediğin sirketlere, staj ve MT ilanlarina, etkinliklere, eğitimlere, kariyer tavsiyelerine ve çok daha fazlasina erisebilir.'],

    Toyota: ['images/candidates/toyota.jpg', 'Toyota  Corolla, Verso ve Toyota C-HR modelini üreten Toyota Türkiye, Sakarya İli Arifiye İlçesinde kurulmustur. Üretimin büyük bir kismi, dünyada yaklasik 100 ülkeye ihraç edilmektedir. Toyota Türkiye, bugün, yillik 280,000 adete yükselen üretim kapasitesiyle, Toyotanin Japonya disindaki en büyük 10 fabrikasindan biridir. Şirket ayni zamanda, Türkiyenin en büyük üretim firmalarindan biridir.'],

    Senforock: ['images/candidates/senforock.jpg', 'Senforock   Senforock, bir Rock Müzik hareketidir. Rock ve Metal müziğin efsane sarkilarinin, senfonik orkestra, rock band, solistler ve büyük rock korosu esliğinde Türkiyede ve dünyada ilk defa gerçeklestirilmistir. Senforock, yurtdisi turnesinden önce, fikrinin doğduğu Ankarada ilk konserini verdi. Daha sonra birçok yerde seyirciyle bulustu.'],

    Altinyildiz26Classics: ['images/candidates/altinyildiz.jpg', 'Altinyildiz Classics   İsminde tasidiği iki ana değerle tüketicisi ile bulusan bir markadir. İlki, üst düzey kumas kalitesi ve tasarimdaki üstünlüğüyle Altinyildiz markasinin köklü geçmisi, ikincisi ise, bu geçmis üzerine üst düzey isçilikle daima güncelliğini koruyarak insa edilen Classics sikliğidir.'],

    Casper: ['images/candidates/casper.jpg', 'Casper   Casper kurulduğu yillarda PC , Oem parça , Masaüstü ek donanimlari ve markali bilgisayar satisi yaparken , zamanla Bilgisayar Sektöründeki yerini ve hedefini büyük kitlelere duyurmustur. Dürüst ve kaliteli hizmet odakli çalisma prensibi, müsteri memnuniyeti odakli hizmetleri ile en son teknolojileri müsterilerinin kullanimina sunma hedefi ile gündelik hayati teknolojik gelismeler ile daha da kolay hale getirmektedir.'],


    EandY: ['images/candidates/ey.jpg', 'Ernst&Young   Dünya genelinde toplam 231.000 çalisani ile bağimsiz denetim, danismanlik, kurumsal finansman ve vergi alanlarinda hizmet vere EY yillardir alaninda en iyi markalardan biri olmayi sürdürmektedir.'],


    Restearn: ['images/candidates/restearnwhite.png', 'Restearn   Restearn, isletme sahipleri için müsteri analizleri yaparak satis ve pazarlama yöntemini devamli gelistirmelerine olanak sağlar. Müsteri uygulamasinda bulunan sadakat sistemi ile müsteri analizlerlerini birlestirerek yeni ve sadik müsterilere ulasmayi kolaylastirir. '],
}
$(document).ready(function(){
    var d = new Date();
    $('#kalanZaman').html(31-d.getDate()+2+" Gün");
    $('#search-select')
        .dropdown({
            onChange: function (value,text,$selectedItem) {
                //console.log(value);
                var o = $('#sub-search-select');
                o.empty();
                var c= ddoptions[value];
                createOption('Alt Kategori Seciniz',o,"");
                for(var p in c){
                    //console.log("creating option : "+c[p]);
                    createOption(c[p],o,c[p]);
                }
            }
        })
    ;
    $('#sub-search-select')
        .dropdown({
            onChange: function (value,text,$selectedItem) {
                //console.log(value);
                var o = $('#candidate-search-select');
                o.empty();
                //console.log(value);
                var c= ddoptions[value];
                createOption('Aday',o,"");
                for(var p in c){
                    //console.log("creating option : "+c[p].replace(' ',26));
                    createOption(c[p],o,c[p].replace(' ','26'));
                }
                createOption('Diğer',o,'Diğer');
            }
        })
    ;
    $('#candidate-search-select')
        .dropdown({
                onChange: function (value,text,$selectedItem) {
                    //console.log(value);
                    if(value.localeCompare('Diğer')==0){
                        $('#oyverButton').attr('href',"https://docs.google.com/forms/d/e/1FAIpQLSdlzDpbdKOb1OcBaq_dcHReaQkmK5lGXEjEhXjFOl_LJ08q3Q/viewform?usp=pp_url&entry.1755287923="+"&entry.1888246541");
                    }
                    else {
                        $('#AdayPhoto').attr('src', ddoptions[value][0]);
                        $('#AdayDetay').html(ddoptions[value][1]);
                        $('#oyverButton').attr('href', "https://docs.google.com/forms/d/e/1FAIpQLSdlzDpbdKOb1OcBaq_dcHReaQkmK5lGXEjEhXjFOl_LJ08q3Q/viewform?usp=pp_url&entry.1755287923=" + $('#candidate-search-select').val().replace('26', '+') + "&entry.1888246541");
                    }
                }
            }

        )
    ;

});
