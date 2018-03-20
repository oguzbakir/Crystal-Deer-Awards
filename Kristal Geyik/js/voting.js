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
    Sanat15Müzik:['Nicola Cruz','Nicolas Jaar','Glitch Mob'],
    Sanat15Sinema:['The Dark Knight','Lord of the Rings','Harry Potter'],
    Sanat15Müzik15Nicola26Cruz:['images/candidates/nicolacruz.jpg','Nicola Cruz <br>  Ecuador\'s musical treasure, catch Nicola Cruz\'s hourlong live set of his remarkable downtempo Andean electronic music.'],
    Sanat15Müzik15Glitch26Mob:['images/candidates/glitchmob.jpg','The Glitch Mob is an American electronic music group from Los Angeles, California. It consists of edIT, Boreta and Ooah. Chris Martins of LA Weekly noted that they "have undoubtedly found the largest audience of any L.A. beat scene artist yet.']
};
$(document).ready(function(){
    $('#search-select')
        .dropdown({
            onChange: function (value,text,$selectedItem) {
                console.log(value);
                var o = $('#sub-search-select');
                o.empty();
                var c= ddoptions[value];
                createOption('Alt Kategori Seciniz',o,"");
                for(var p in c){
                    console.log("'creating option : "+value+"15"+c[p]);
                    createOption(c[p],o,value+"15"+c[p]);
                }
            }
        })
    ;
    $('#sub-search-select')
        .dropdown({
            onChange: function (value,text,$selectedItem) {
                console.log(value);
                var o = $('#candidate-search-select');
                o.empty();
                console.log(value);
                var c= ddoptions[value];
                createOption('Aday',o,"");
                for(var p in c){

                    createOption(c[p],o,value+"15"+c[p].replace(' ','26'));
                }
            }
        })
    ;
    $('#candidate-search-select')
        .dropdown({
                onChange: function (value,text,$selectedItem) {
                    console.log(value);
                    $('#AdayPhoto').attr('src',ddoptions[value][0]);
                    $('#AdayDetay').html(ddoptions[value][1]);
                }
            }

        )
    ;
    $('#oyverButton').click(function (){
        jQuery.ajax({
            type: "POST",
            url: 'your_functions_address.php',
            dataType: 'json',
            data: {functionname: 'add', arguments: [1, 2]},

            success: function (obj, textstatus) {
                if( !('error' in obj) ) {
                    yourVariable = obj.result;
                }
                else {
                    console.log(obj.error);
                }
            }
        });

    });

});
