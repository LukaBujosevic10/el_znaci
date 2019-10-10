'use strict'
//$(document).ready(function(){
    let rnd;
    let naziv =  ["jednosmerna struja", "naizmenična struja", "trofazna električna struja frekvencije 50Hz", "fazni provodnik i nulti provodnik u nulti", "izvor jednosmerne struje", "nadzemni provodnik", "podvodni provodnik", "provodnik u zidu", "provodnik u cevi","čelični krovni nosač", "provodnik na drvenom stubu", "provodnik na betonskom stubu", "čelični zidni nosač", "razvodna kutija", "osigurač", "prekidač(opšta oznaka)", "jednopolni prekidač", "dvopolni prekidač", "tropolni prekidač", "naizmenični prekidač", "serijski prekidač", "unakrsni prekidač","sijalica" ,"neonka(fluo cev)", "grupa neonki(fluo cevi)", "uređaj u domaćinstvu", "grejno telo", "provodnici koji se ukrštaju bez spajanja", "provodnici koji se ukrštaju sa spajanjem", "utičnica za uzemljenje", "trofazna utičnica", "otpornik stalne vrednosti", "otpornik promenjive vrednosti", "kondenzator stalne vrednosti", "kondenzator promenjive vrednosti", "indukativnost stalne vrednosti", "indukativnost promenjive vrednosti", "odvodnik pre napona", "antena", "zvčnik", "zvono", "opasan napon", "kvar", "transformator", "generator jednosmerne struje", "generator naizmenične struje", "jednosmerni motor", "naizmenični motor", "ampermetar", "voltmetar", "ommetar", "vatmetar", "dioda", "provodnik", "uzemljeni provodnik", "provodnik na gvozdenom stubu"];
    let pozicija_tacno;
    let odgovori = $(".odgovor");
    let netacni;
    let od_tac = 0;
    let od_net = 0;
    $('#correct').text(od_tac);
        $('#not').text(od_net);
    function popouni_pitanje(){
        
        $(odgovori).css('color', 'black');
        $(odgovori).css('background-color', 'white');
        $(img).html('');
        $(odgovori).html('');
        rnd = Math.floor(Math.random() * 56)+1;
        $("#img").append("<img src='img/"+rnd+".png'>");
        pozicija_tacno = Math.floor(Math.random() * 3);
        for(let i = 0; i< 3; i++){
            if(i == pozicija_tacno){
                $(odgovori[i]).text(naziv[rnd-1]);
            }else{
                netacni = Math.floor(Math.random() * naziv.length)+1;
                if(netacni !== rnd){
                    $(odgovori[i]).text(naziv[netacni-1]);
                }else{
                    i--;
                }
            }
        }
        $(odgovori).on('click', resenje);
    }
    function resenje(){
        
        if($(this).text() == naziv[rnd-1]){
            $(this).append("<div id='tacno'><i class='material-icons'>done</i></div>");
            $(this).css('color', 'white');
            $(this).css('background-color', 'green');
            od_tac++;
        }else{
            $(this).css('background', 'red');
            $(this).css('color', 'white');
            $(odgovori[pozicija_tacno]).css('background-color', 'green');
            $(odgovori[pozicija_tacno]).css('color', 'white');
            od_net++;
        }
        $(odgovori).off('click');
        setTimeout(popouni_pitanje, 2000);
        $('#correct').text(od_tac);
        $('#not').text(od_net);
    }
    popouni_pitanje();
    
//})