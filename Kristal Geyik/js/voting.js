function createOption(name,o,value) {
    el = document.createElement('option');
    el.value = value;
    el.innerHTML = name;
    el.id = value;
    o.append(el);
}
ddoptions ={
    kategoriler: ['YönetimFinans','Sanat','Mühendislik'],
    YönetimFinans: ['Yönetim','Finans','Girişimclik'],
    Sanat: ['Müzik','Resim','Sinema'],
    Mühendislik: ['Yazılım','Elektronik','İnşaat'],
    Müzik:['Nicola Cruz','Nicolas Jaar','Glitch Mob'],
    Sinema:['The Dark Knight','Lord of the Rings','Harry Potter'],
    Nicola26Cruz:['images/candidates/nicolacruz.jpg','Nicola Cruz <br>  Ecuador\'s musical treasure, catch Nicola Cruz\'s hourlong live set of his remarkable downtempo Andean electronic music.'],
    Glitch26Mob:['images/candidates/glitchmob.jpg','The Glitch Mob is an American electronic music group from Los Angeles, California. It consists of edIT, Boreta and Ooah. Chris Martins of LA Weekly noted that they "have undoubtedly found the largest audience of any L.A. beat scene artist yet.']
};
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
            }
        })
    ;
    $('#candidate-search-select')
        .dropdown({
                onChange: function (value,text,$selectedItem) {
                    //console.log(value);
                    $('#AdayPhoto').attr('src',ddoptions[value][0]);
                    $('#AdayDetay').html(ddoptions[value][1]);
                    $('#oyverButton').attr('href',"https://docs.google.com/forms/d/e/1FAIpQLSdlzDpbdKOb1OcBaq_dcHReaQkmK5lGXEjEhXjFOl_LJ08q3Q/viewform?usp=pp_url&entry.1755287923="+$('#candidate-search-select').val().replace('26','+')+"&entry.1888246541");
                }
            }

        )
    ;

});
