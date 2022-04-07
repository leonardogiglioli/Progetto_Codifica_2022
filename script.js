//funzioni per scegliere l'immagine da visualizzare
function gestoreClickC1(){
   try {
       var nodoC1 = document.getElementById("cartolina_C1");
       var nodoC2 = document.getElementById("cartolina_C2");
       var nodoC3 = document.getElementById("cartolina_C3");
       nodoC1.style.display = "block";
       nodoC2.style.display = "none";
       nodoC3.style.display = "none";
   } catch (e) {
       alert("gestoreClickC1 " + e);
   }
}

function gestoreClickC2(){
   try {
       var nodoC1 = document.getElementById("cartolina_C1");
       var nodoC2 = document.getElementById("cartolina_C2");
       var nodoC3 = document.getElementById("cartolina_C3");
       nodoC1.style.display = "none";
       nodoC2.style.display = "block";
       nodoC3.style.display = "none";
   } catch (e) {
       alert("gestoreClickC2 " + e);
   }
}

function gestoreClickC3(){
   try {
       var nodoC1 = document.getElementById("cartolina_C1");
       var nodoC2 = document.getElementById("cartolina_C2");
       var nodoC3 = document.getElementById("cartolina_C3");
       nodoC1.style.display = "none";
       nodoC2.style.display = "none";
       nodoC3.style.display = "block";
   } catch (e) {
       alert("gestoreClickC3 " + e);
   }
}
//Funzioni per mostrare le info riguardanti il fronte
function gestoreClickF1(){
   try {
       var nodoF1 = document.getElementById("fronteC1");
       var nodoR1 = document.getElementById("retroC1");
       //var c1 = document.getElementById("cartolina_C1");
       var TF1 = document.getElementById("fronteTC1");
       var TF2 = document.getElementById("retroTC1");
       TF1.style.display ="none";
       TF2.style.display ="block";
       nodoF1.style.display = "block";
       nodoR1.style.display = "none";
   } catch (e) {
       alert("gestoreClickF1 " + e);
   }
}
//Funzioni per mostrare le info riguardanti il retro
function gestoreClickR1(){
   try {
       var nodoF1 = document.getElementById("fronteC1");
       var nodoR1 = document.getElementById("retroC1");
       var TF1 = document.getElementById("fronteTC1");
       var TF2 = document.getElementById("retroTC1");
       TF2.style.display ="none";
       TF1.style.display ="block";
       nodoR1.style.display = "block";
       nodoF1.style.display = "none";
   } catch (e) {
       alert("gestoreClickR1 " + e);
   }
}

function gestoreClickF2(){
   try {
       var nodoF2 = document.getElementById("fronteC2");
       var nodoR2 = document.getElementById("retroC2");
       var TF1 = document.getElementById("fronteTC2");
       var TF2 = document.getElementById("retroTC2");
       TF1.style.display ="none";
       TF2.style.display ="block";
       nodoR2.style.display = "none";
       nodoF2.style.display = "block";
   } catch (e) {
       alert("gestoreClickF2 " + e);
   }
}

function gestoreClickR2(){
   try {
       var nodoF2 = document.getElementById("fronteC2");
       var nodoR2 = document.getElementById("retroC2");
       var TF1 = document.getElementById("fronteTC2");
       var TF2 = document.getElementById("retroTC2");
       TF2.style.display ="none";
       TF1.style.display ="block";
       nodoR2.style.display = "block";
       nodoF2.style.display = "none";
   } catch (e) {
       alert("gestoreClickR2 " + e);
   }
}

function gestoreClickF3(){
   try {
       var nodoF3 = document.getElementById("fronteC3");
       var nodoR3 = document.getElementById("retroC3");
       var TF1 = document.getElementById("fronteTC3");
       var TF2 = document.getElementById("retroTC3");
       TF1.style.display ="none";
       TF2.style.display ="block";
       nodoF3.style.display = "block";
       nodoR3.style.display = "none";
   } catch (e) {
       alert("gestoreClickF3 " + e);
   }
}

function gestoreClickR3(){
   try {
       var nodoF3 = document.getElementById("fronteC3");
       var nodoR3 = document.getElementById("retroC3");
       var TF1 = document.getElementById("fronteTC3");
       var TF2 = document.getElementById("retroTC3");
       TF2.style.display ="none";
       TF1.style.display ="block";
       nodoR3.style.display = "block";
       nodoF3.style.display = "none";
   } catch (e) {
       alert("gestoreClickR3 " + e);
   }
}
//funzioni per evidenziare o no il testo corrispondente a una parte della mappa
function gestoreMappa1Over(){
   switch (this.id) {
       case 'data1':
           d1.style.backgroundColor = "#4c8b8e";
           d1.style.color = "white";
       break;
       case 'messaggio1':
           m1.style.backgroundColor = "#4c8b8e";
           m1.style.color = "white";
       break;
       case 'signed1':
           sig1.style.color = "white";
           sig1.style.backgroundColor = "#4c8b8e";
       break;
       case 'indirizzo1':
           i1.style.backgroundColor = "#4c8b8e";
           i1.style.color = "white";
       break;
       case 'francobollo1':
           f1.style.backgroundColor = "#4c8b8e";
           f1.style.color = "white";
       break;
       case 'numero1':
           n1.style.backgroundColor = "#4c8b8e";
           n1.style.color = "white";
       break;
       case 'serie1':
           s1.style.backgroundColor = "#4c8b8e";
           s1.style.color = "white";
       break;
       case 'timbro1':
           t1.style.backgroundColor = "#4c8b8e";
           t1.style.color = "white";
       break;
   }
}

function gestoreMappa1Out(){
   switch (this.id) {
       case 'data1':
           d1.style.backgroundColor = "white";
           d1.style.color = "black";
       break;
       case 'messaggio1':
           m1.style.backgroundColor = "white";
           m1.style.color = "black";
       break;
       case 'signed1':
           sig1.style.backgroundColor = "white";
           sig1.style.color = "black";
       break;
       case 'indirizzo1':
           i1.style.backgroundColor = "white";
           i1.style.color = "black";
       break;
       case 'francobollo1':
           f1.style.backgroundColor = "white";
           f1.style.color = "black";
       break;
       case 'numero1':
           n1.style.backgroundColor = "white";
           n1.style.color = "black";
       break;
       case 'serie1':
           s1.style.backgroundColor = "white";
           s1.style.color = "black";
       break;
       case 'timbro1':
           t1.style.backgroundColor = "white";
           t1.style.color = "black";
       break;
   }
}

function gestoreMappa2Over(){
   switch (this.id) {
       case 'data2':
           d2.style.backgroundColor = "#4c8b8e";
           d2.style.color = "white";
       break;
       case 'messaggio2':
           m2.style.backgroundColor = "#4c8b8e";
           m2.style.color = "white";
       break;
       case 'signed2':
           sig2.style.backgroundColor = "#4c8b8e";
           sig2.style.color = "white";
       break;
       case 'indirizzo2':
           i2.style.backgroundColor = "#4c8b8e";
           i2.style.color = "white";
       break;
       case 'francobollo2':
           f2.style.backgroundColor = "#4c8b8e";
           f2.style.color = "white";
       break;
       case 'numero2':
           n2.style.backgroundColor = "#4c8b8e";
           n2.style.color = "white";
       break;
       case 'serie2':
           s2.style.backgroundColor = "#4c8b8e";
           s2.style.color = "white";
       break;
       case 'timbro2':
           t2.style.backgroundColor = "#4c8b8e";
           t2.style.color = "white";
       break;
       case 'timbro22':
           t22.style.backgroundColor = "#4c8b8e";
           t22.style.color = "white";
       break;
       case 'timbro222':
           t222.style.backgroundColor = "#4c8b8e";
           t222.style.color = "white";
       break;
   }
}

function gestoreMappa2Out(){
   switch (this.id) {
       case 'data2':
           d2.style.backgroundColor = "white";
           d2.style.color = "black";
       break;
       case 'messaggio2':
           m2.style.backgroundColor = "white";
           m2.style.color = "black";
       break;
       case 'signed2':
           sig2.style.backgroundColor = "white";
           sig2.style.color = "black";
       break;
       case 'indirizzo2':
           i2.style.backgroundColor = "white";
           i2.style.color = "black";
       break;
       case 'francobollo2':
           f2.style.backgroundColor = "white";
           f2.style.color = "black";
       break;
       case 'numero2':
           n2.style.backgroundColor = "white";
           n2.style.color = "black";
       break;
       case 'serie2':
           s2.style.backgroundColor = "white";
           s2.style.color = "black";
       break;
       case 'timbro2':
           t2.style.backgroundColor = "white";
           t2.style.color = "black";
       break;
       case 'timbro22':
           t22.style.backgroundColor = "white";
           t22.style.color = "black";
       break;
       case 'timbro222':
           t222.style.backgroundColor = "white";
           t222.style.color = "black";
       break;
   }
}

function gestoreMappa3Over(){
   switch (this.id) {
       case 'data3':
           d3.style.backgroundColor = "#4c8b8e";
           d3.style.color = "white";
       break;
       case 'messaggio3':
           m3.style.backgroundColor = "#4c8b8e";
           m3.style.color = "white";
       break;
       case 'signed3':
           sig3.style.backgroundColor = "#4c8b8e";
           sig3.style.color = "white";
       break;
       case 'stampa3':
           s3.style.backgroundColor = "#4c8b8e";
           s3.style.color = "white";
       break;
       case 'numero3':
           n3.style.backgroundColor = "#4c8b8e";
           n3.style.color = "white";
       break;
       case 'serie3':
           s33.style.backgroundColor = "#4c8b8e";
           s33.style.color = "white";
       break;
   }
}

function gestoreMappa3Out(){
   switch (this.id) {
       case 'data3':
           d3.style.backgroundColor = "white";
           d3.style.color = "black";
       break;
       case 'messaggio3':
           m3.style.backgroundColor = "white";
           m3.style.color = "black";
       break;
       case 'signed3':
           sig3.style.backgroundColor = "white";
           sig3.style.color = "black";
       break;
       case 'stampa3':
           s3.style.backgroundColor = "white";
           s3.style.color = "black";
       break;
       case 'numero3':
           n3.style.backgroundColor = "white";
           n3.style.color = "black";
       break;
       case 'serie3':
           s33.style.backgroundColor = "white";
           s33.style.color = "black";
       break;
   }
}

function gestoreLoad(){
   try {
       nodoC1 = document.getElementById("img1");
       nodoC1.onclick = gestoreClickC1;
       nodoC2 = document.getElementById("img2");
       nodoC2.onclick = gestoreClickC2;
       nodoC3 = document.getElementById("img3");
       nodoC3.onclick = gestoreClickC3;
       nodoFronte = document.getElementById("fronteTC1");
       nodoRetro = document.getElementById("retroTC1");
       nodoRetro.onclick = gestoreClickR1;
       nodoFronte.onclick = gestoreClickF1;
       nodoFronte = document.getElementById("fronteTC2");
       nodoRetro = document.getElementById("retroTC2");
       nodoRetro.onclick = gestoreClickR2;
       nodoFronte.onclick = gestoreClickF2;
       nodoFronte = document.getElementById("fronteTC3");
       nodoRetro = document.getElementById("retroTC3");
       nodoRetro.onclick = gestoreClickR3;
       nodoFronte.onclick = gestoreClickF3;
       data1 = document.getElementById("data1");
       numero1 = document.getElementById("numero1");
       messaggio1 = document.getElementById("messaggio1");
       signed1 = document.getElementById("signed1");
       indirizzo1 = document.getElementById("indirizzo1");
       francobollo1 = document.getElementById("francobollo1");
       serie1 = document.getElementById("serie1");
       timbro1 = document.getElementById("timbro1");
       d1 = document.getElementById("d1");
       n1 = document.getElementById("n1");
       m1 = document.getElementById("m1");
       sig1 = document.getElementById("sig1");
       i1 = document.getElementById("i1");
       f1 = document.getElementById("f1");
       s1 = document.getElementById("s1");
       t1 = document.getElementById("t1");
       data1.onmouseover = gestoreMappa1Over;
       numero1.onmouseover = gestoreMappa1Over;
       messaggio1.onmouseover = gestoreMappa1Over;
       signed1.onmouseover = gestoreMappa1Over;
       indirizzo1.onmouseover = gestoreMappa1Over;
       francobollo1.onmouseover = gestoreMappa1Over;
       serie1.onmouseover = gestoreMappa1Over;
       timbro1.onmouseover = gestoreMappa1Over;
       data1.onmouseout = gestoreMappa1Out;
       numero1.onmouseout = gestoreMappa1Out;
       messaggio1.onmouseout = gestoreMappa1Out;
       signed1.onmouseout = gestoreMappa1Out;
       indirizzo1.onmouseout = gestoreMappa1Out;
       francobollo1.onmouseout = gestoreMappa1Out;
       serie1.onmouseout = gestoreMappa1Out;
       timbro1.onmouseout = gestoreMappa1Out;
       data2 = document.getElementById("data2");
       numero2 = document.getElementById("numero2");
       messaggio2 = document.getElementById("messaggio2");
       signed2 = document.getElementById("signed2");
       indirizzo2 = document.getElementById("indirizzo2");
       francobollo2 = document.getElementById("francobollo2");
       serie2 = document.getElementById("serie2");
       timbro2 = document.getElementById("timbro2");
       timbro22 = document.getElementById("timbro22");
       timbro222 = document.getElementById("timbro222");
       d2 = document.getElementById("d2");
       n2 = document.getElementById("n2");
       m2 = document.getElementById("m2");
       sig2 = document.getElementById("sig2");
       i2 = document.getElementById("i2");
       f2 = document.getElementById("f2");
       s2 = document.getElementById("s2");
       t2 = document.getElementById("t2");
       t22 = document.getElementById("t22");
       t222 = document.getElementById("t222");
       data2.onmouseover = gestoreMappa2Over;
       numero2.onmouseover = gestoreMappa2Over;
       messaggio2.onmouseover = gestoreMappa2Over;
       signed2.onmouseover = gestoreMappa2Over;
       indirizzo2.onmouseover = gestoreMappa2Over;
       francobollo2.onmouseover = gestoreMappa2Over;
       serie2.onmouseover = gestoreMappa2Over;
       timbro2.onmouseover = gestoreMappa2Over;
       timbro22.onmouseover = gestoreMappa2Over;
       timbro222.onmouseover = gestoreMappa2Over;
       data2.onmouseout = gestoreMappa2Out;
       numero2.onmouseout = gestoreMappa2Out;
       messaggio2.onmouseout = gestoreMappa2Out;
       signed2.onmouseout = gestoreMappa2Out;
       indirizzo2.onmouseout = gestoreMappa2Out;
       francobollo2.onmouseout = gestoreMappa2Out;
       serie2.onmouseout = gestoreMappa2Out;
       timbro2.onmouseout = gestoreMappa2Out;
       timbro22.onmouseout = gestoreMappa2Out;
       timbro222.onmouseout = gestoreMappa2Out;
       data3 = document.getElementById("data3");
       numero3 = document.getElementById("numero3");
       messaggio3 = document.getElementById("messaggio3");
       signed3 = document.getElementById("signed3");
       stampa3 = document.getElementById("stampa3");
       serie3 = document.getElementById("serie3");
       d3 = document.getElementById("d3");
       n3 = document.getElementById("n3");
       m3 = document.getElementById("m3");
       sig3 = document.getElementById("sig3");
       s3 = document.getElementById("s3");
       s33 = document.getElementById("s33");
       data3.onmouseover = gestoreMappa3Over;
       numero3.onmouseover = gestoreMappa3Over;
       messaggio3.onmouseover = gestoreMappa3Over;
       signed3.onmouseover = gestoreMappa3Over;
       stampa3.onmouseover = gestoreMappa3Over;
       serie3.onmouseover = gestoreMappa3Over;
       data3.onmouseout = gestoreMappa3Out;
       numero3.onmouseout = gestoreMappa3Out;
       messaggio3.onmouseout = gestoreMappa3Out;
       signed3.onmouseout = gestoreMappa3Out;
       stampa3.onmouseout = gestoreMappa3Out;
       serie3.onmouseout = gestoreMappa3Out;
   } catch (e) {
       alert("gestoreLoad " + e);
   }
}
window.onload = gestoreLoad;