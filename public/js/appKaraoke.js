var startt_btn = document.getElementById('startt');

var songtext1 = [
    //geri sayım yap 3- 2-1- başla
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["O ", 450],
    ["şişelerde ", 450],
    ["zehir ", 450],
    ["var.", 1000],
    ["Çıplak ", 450],
    ["elle ", 450],
    ["tutulmaz, ", 450],
    ["tene ", 450],
    ["temas ", 450],
    ["ederse ", 450],
    ["yaralar.", 1000]
];

var songtext2 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Karşıya ", 450],
    ["geçecektim ", 450],
    ["sonra, ", 450],
    ["sonra ", 450],
    ["kedi ", 450],
    ["birden ", 450],
    ["birden ", 450],
    ["üzerime ", 450],
    ["atladı..", 1000],

];

var songtext3 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Hayır ", 450],
    ["söyleme, ", 450],
    ["lütfen ", 450],
    ["bunu ", 450],
    ["duymaması ", 450],
    ["gerekiyor. ", 1000],
    ["Aramızda ", 450],
    ["kalmalıydı.", 1000],

];

var songtext4 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Bunu ", 450],
    ["bana ", 450],
    ["söylemeye ", 450],
    ["nasıl ", 450],
    ["cüret ", 450],
    ["edebilir! ", 1000],
    ["Nasıl ", 450],
    ["böyle ", 450],
    ["bir ", 450],
    ["şey ", 450],
    ["der ", 450],
    ["aklım ", 450],
    ["almıyor.", 1000],

];

var songtext5 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Geri ", 450],
    ["ver ", 450],
    ["aldığın ", 450],
    ["şu ", 450],
    ["şeyi, ", 450],
    ["sen ", 450],
    ["kimin ", 450],
    ["malını ", 450],
    ["çaldığını ", 450],
    ["zannediyorsun!", 1000],

];

var songtext6 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Sana ", 450],
    ["çok ", 450],
    ["daha ", 450],
    ["önceden ", 450],
    ["başlamanı ", 450],
    ["söylemiştim, ", 450],
    ["şimdi ", 450],
    ["bana ", 450],
    ["yetişmedi ", 450],
    ["diyemezsin.", 1000],

];

var songtext7 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Çok ", 450],
    ["komik ", 450],
    ["yani ", 450],
    ["daha ", 450],
    ["önce ", 450],
    ["de ", 450],
    ["seyretmiştim, ", 450],
    ["çok ", 450],
    ["hoşuma ", 450],
    ["gitmişti.", 1000],

];

var songtext8 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Bunu ", 450],
    ["duymaya ", 450],
    ["o ", 450],
    ["kadar ", 450],
    ["ihtiyacım ", 450],
    ["vardı ", 450],
    ["ki, ", 450],
    ["ne ", 450],
    ["desem ", 450],
    ["bilemiyorum. ", 1000],
    ["Teşekkür ", 450],
    ["ederim.", 1000],

];

var songtext9 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Başardım, ", 450],
    ["sonunda! ", 1000],
    ["Şuna ", 450],
    ["bak ", 450],
    ["ne ", 450],
    ["kadar ", 450],
    ["güzel ", 450],
    ["oldu.", 1000],

];

var songtext10 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Ben ", 450],
    ["o ", 450],
    ["adam ", 450],
    ["olmayı ", 450],
    ["o ", 450],
    ["kadar ", 450],
    ["çok ", 450],
    ["isterdim ", 450],
    ["ki. ", 450],
    ["Yalansız, ", 450],
    ["riyasız, ", 450],
    ["dürüst. ", 1000],

];

var songtext11 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Çünkü ", 450],
    ["seni ", 450],
    ["tamamen ", 450],
    ["çıkardım ", 450],
    ["attım ", 450],
    ["hayatımdan, ", 1000],
    ["rüyalarımdan ", 450],
    ["bile.", 1000],

];

var songtext12 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["O ", 450],
    ["kazadan ", 450],
    ["sonra ", 450],
    ["çok ", 450],
    ["değişti, ", 450],
    ["içine ", 450],
    ["kapandı, ", 450],
    ["sanki ", 450],
    ["başka ", 450],
    ["birisi ", 450],
    ["var ", 450],
    ["karşımda.", 1000],

];

var songtext13 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Arkadaşım ", 450],
    ["diyor ", 450],
    ["bir ", 450],
    ["de!? ", 1000],
    ["Duydun ", 450],
    ["mu? ", 450],
    ["Kavga ", 450],
    ["edip ", 450],
    ["kovdu ", 450],
    ["ya ", 450],
    ["kızı..", 1000],

];

var songtext14 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Şu ", 450],
    ["anda ", 450],
    ["olanları ", 450],
    ["anlamakta ", 450],
    ["gerçekten ", 450],
    ["zorlanıyorum. ", 1000],
    ["Şok ", 450],
    ["içerisindeyim.", 1000],

];

var songtext15 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Vay ", 450],
    ["canına! ", 1000],
    ["Bunu ", 450],
    ["hiç ", 450],
    ["tahmin ", 450],
    ["etmezdim. ", 1000],
    ["Gerçekten ", 450],
    ["inanılmaz!", 1000],

];

var songtext16 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Iyy ", 450],
    ["iğrenç, ", 450],
    ["bu ", 450],
    ["ne ", 450],
    ["böyle ", 450],
    ["çorbanın ", 450],
    ["içinden ", 450],
    ["sinek ", 450],
    ["çıktı ", 450],
    ["pislik ", 450],
    ["bir ", 450],
    ["şey. ", 1000],

];

var songtext17 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Bu ", 450],
    ["çorbaya ", 450],
    ["ne ", 450],
    ["kattın, ", 450],
    ["çok ", 450],
    ["kötü ", 450],
    ["kokuyor. ", 1000],
    ["Lütfen ", 450],
    ["cam ", 450],
    ["açalım ", 450],
    ["kokusu ", 450],
    ["çıksın ", 450],
    ["bari.", 1000],

];

var songtext18 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Ağğ ", 450],
    ["bu ", 450],
    ["ne!? ", 1000],
    ["Kafama ", 450],
    ["bir ", 450],
    ["şey ", 450],
    ["damladı ", 450],
    ["gördün ", 450],
    ["mü ", 450],
    ["çok ", 450],
    ["kötü, ", 450],
    ["çok ", 450],
    ["kötü..", 1000],

];

var songtext19 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Sorduğu ", 450],
    ["soruyu ", 450],
    ["duydun ", 450],
    ["mu? ", 450],
    ["Sence ", 450],
    ["yapabilecek ", 450],
    ["olsa ", 450],
    ["bu ", 450],
    ["soruyu ", 450],
    ["sorar ", 450],
    ["mıydı? ", 1000],

];

var songtext20 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Güzelim ", 450],
    ["evi ", 450],
    ["ne ", 450],
    ["hale ", 450],
    ["getirmiş, ", 450],
    ["şuna ", 450],
    ["baksana ", 450],
    ["zevksiz.", 1000],

];

var songtext21 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Sana ", 450],
    ["bunu ", 450],
    ["kim ", 450],
    ["söyledi, ", 450],
    ["komik… ", 1000],
    ["Bunlara ", 450],
    ["inanıyor ", 450],
    ["musun ", 450],
    ["gerçekten?", 1000],

];

var songtext22 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Bence ", 450],
    ["gayet ", 450],
    ["olumlu, ", 450],
    ["ben ", 450],
    ["bir ", 450],
    ["sıkıntı ", 450],
    ["göremiyorum.", 1000],

];

var songtext23 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Evet, ", 450],
    ["oraya ", 450],
    ["bırakabilirsin. ", 1000],
    ["Yarın ", 450],
    ["da ", 450],
    ["gelir ", 450],
    ["devamı ", 450],
    ["için ", 450],
    ["bir ", 450],
    ["şeyler ", 450],
    ["düşünürüz.", 1000],

];

var songtext24 = [
    ["3 ", 450],
    ["2 ", 450],
    ["1 ", 450],
    ["Başla ", 450],
    ["Yürüyüşe ", 450],
    ["çıkıp ", 450],
    ["biraz ", 450],
    ["hava ", 450],
    ["alacağım, ", 450],
    ["zaten ", 450],
    ["markete ", 450],
    ["de ", 450],
    ["gitmem ", 450],
    ["gerekiyordu.", 1000],

];


$(document).ready(function () {
    var songtexts = [
        songtext1, songtext2, songtext3, songtext4, songtext5,
        songtext6, songtext7, songtext8, songtext9, songtext10,
        songtext11, songtext12, songtext13, songtext14, songtext15,
        songtext16, songtext17, songtext18, songtext19, songtext20,
        songtext21, songtext22, songtext23, songtext24
    ];

    $('.play').on('click', function () {
        var index = $(this).index('.play'); // Hangi play butonuna tıklandı
        var text = "";
        var isOkForNow = true; // Başka bir play butonuna tıklanmadığı sürece true
        $.each(songtexts[index], function (a, b) { // Kelimeleri döngüye al
            text += "<span id='p" + a + "' style='color:black'>" + b[0] + "</span> "; // Kelimeleri span içine al
        });
        $('#div').html(text); // Div içeriğini değiştir bu şekilde kelime kelime yazdır 
        //startt_btn.click(); // Geri sayım yap ve başla SONRADAN EKLENDİ
        $('#startt').on('click', function () { // Start butonuna tıklandığında
            cc = 0; // sıfırlıyoruz ki baştan başlasın kelime yazdırmaya
            nextWord(songtexts[index]); // Kelimeleri yazdır
            if (isOkForNow) {
                $('.play').prop('disabled', true); // Diğer play butonlarını devre dışı bırak
                $('#stopp').on('click', function () { // Stop butonuna tıklandığında
                    clear(); // Div içeriğini temizle böylece yazdırılan kelimeler silinir
                    $('.play').prop('disabled', false); // Tüm play butonlarını etkinleştir
                });
                isOkForNow = false;
            }
        });
    });
});

var cc = 0;
function nextWord(songtext) {
    $('#p' + cc).css("color", "blue");
    cc++;
    if (cc > songtext.length - 1) return;
    window.setTimeout(function () {
        nextWord(songtext);
    }, songtext[cc - 1][1]);
    //eğer son kelimeye gelinmişse
    if (cc == songtext.length) {
        $('.play').prop('disabled', false); // Tüm play butonlarını etkinleştir
    }
}

function clear() {
    $('#div').html('');
}
