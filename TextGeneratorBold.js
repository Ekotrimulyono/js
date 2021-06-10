var input = document.querySelector("#input");
    var output = document.querySelector("#output");
    !function(){let t;function n(){let t=input.value,n=`Bold (serif):\n${h(w,t)}\n\nBold (sans):\n${h(M,t)}\n\nItalic Bold (serif):\n${h(j,t)}\n\nItalic Bold (sans):\n${h(S,t)}\n\nMedieval Bold:\n${h(z,t)}\n\nDouble-Struck:\n${h(Q,t)}`;n="<div contenteditable style='outline:none;white-space:pre-wrap;'>"+n.replace(/\n\n/g,"</div>\n<div contenteditable style='outline:none;white-space:pre-wrap;'>")+"</div>",n+='\n\n<button class="btn btn-dark py-2 mb-3" onclick="generateOtherFonts()">Lihat Jenis Text Lainya</button>',document.querySelector("#output-wrapper").style.display="",output.innerHTML=n}output.style.whiteSpace="pre-wrap",input.addEventListener("input",function(){clearTimeout(t),t=setTimeout(n,400)}),input.addEventListener("paste",n);const r=new function(){for(i in this.tools={flip:{init:function(){for(i in this.map)this.map[this.map[i]]=i},encode:function(t){for(var n,i=[],r=0,o=t.length;o>r;r++)n=t.charAt(r),r>0&&("̤"==n||"̗"==n||"̖"==n||"̮"==n)?(n=this.map[t.charAt(r-1)+n],i.pop()):void 0===(n=this.map[n])&&(n=t.charAt(r)),i.push(n);return i.reverse().join("")},decode:function(t){for(var n,i=[],r=0,o=t.length;o>r;r++)n=t.charAt(r),r>0&&("̤"==n||"̗"==n||"̖"==n||"̮"==n)?(n=this.map[t.charAt(r-1)+n],i.pop()):void 0===(n=this.map[n])&&(n=t.charAt(r)),i.push(n);return i.reverse().join("")},map:{a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ɓ",h:"ɥ",i:"ı",j:"ɾ",k:"ʞ",l:"l",m:"ɯ",n:"u",r:"ɹ",t:"ʇ",v:"ʌ",w:"ʍ",y:"ʎ",A:"∀",B:"ᙠ",C:"Ɔ",D:"ᗡ",E:"Ǝ",F:"Ⅎ",G:"⅁",J:"ſ",K:"⋊",L:"˥",M:"W",P:"Ԁ",Q:"Ό",R:"ᴚ",T:"⊥",U:"∩",V:"Λ",Y:"⅄",1:"⇂",2:"ᄅ",3:"Ɛ",4:"ㄣ",5:"ގ",6:"9",7:"ㄥ","&":"⅋",".":"˙",'"':"„",";":"؛","[":"]","(":")","{":"}","?":"¿","!":"¡","'":",","<":">","‾":"_","¯":"_","‿":"⁀","⁅":"⁆","∴":"∵","\r":"\n","ß":"ᙠ","̈":"̤","ä":"ɐ̤","ö":"o̤","ü":"n̤","Ä":"∀̤","Ö":"O̤","Ü":"∩̤","´":" ̗","é":"ǝ̗","á":"ɐ̗","ó":"o̗","ú":"n̗","É":"Ǝ̗","Á":"∀̗","Ó":"O̗","Ú":"∩̗","`":" ̖","è":"ǝ̖","à":"ɐ̖","ò":"o̖","ù":"n̖","È":"Ǝ̖","À":"∀̖","Ò":"O̖","Ù":"∩̖","^":" ̮","ê":"ǝ̮","â":"ɐ̮","ô":"o̮","û":"n̮","Ê":"Ǝ̮","Â":"∀̮","Ô":"O̮","Û":"∩̮"}},mirror:{init:function(){for(i in this.map)this.map[this.map[i]]=i},encode:function(t){for(var n,i=[],r=[],o=0,e=t.length;e>o;o++)n=t.charAt(o),o>0&&("̈"==n||"̀"==n||"́"==n||"̂"==n)?(n=this.map[t.charAt(o-1)+n],i.pop()):void 0===(n=this.map[n])&&(n=t.charAt(o)),"\n"==n?(r.push(i.reverse().join("")),i=[]):i.push(n);return r.push(i.reverse().join("")),r.join("\n")},decode:function(t){for(var n,i=[],r=[],o=0,e=t.length;e>o;o++)n=t.charAt(o),o>0&&("̈"==n||"̀"==n||"́"==n||"̂"==n)?(n=this.map[t.charAt(o-1)+n],i.pop()):void 0===(n=this.map[n])&&(n=t.charAt(o)),"\n"==n?(r.push(i.reverse().join("")),i=[]):i.push(n);return r.push(i.reverse().join("")),r.join("\n")},map:{a:"ɒ",b:"d",c:"ɔ",e:"ɘ",f:"Ꮈ",g:"ǫ",h:"ʜ",j:"ꞁ",k:"ʞ",l:"|",n:"ᴎ",p:"q",r:"ɿ",s:"ꙅ",t:"ƚ",y:"ʏ",z:"ƹ",B:"ᙠ",C:"Ɔ",D:"ᗡ",E:"Ǝ",F:"ꟻ",G:"Ꭾ",J:"Ⴑ",K:"⋊",L:"⅃",N:"Ͷ",P:"ꟼ",Q:"Ọ",R:"Я",S:"Ꙅ",Z:"Ƹ",1:"",2:"",3:"",4:"",5:"",6:"",7:"","&":"",";":"","[":"]","(":")","{":"}","?":"⸮","<":">","ä":"ɒ̈","ß":"ᙠ","´":"`","é":"ɘ̀","á":"ɒ̀","ó":"ò","ú":"ù","É":"Ǝ̀","Á":"À","Ó":"Ò","Ú":"Ù","`":"´","è":"ɘ́","à":"ɒ́","È":"Ǝ́","ê":"ɘ̂","â":"ɒ̂","Ê":"Ǝ̂","Ø":"ᴓ","ø":"ᴓ"}},creepify:{init:function(){for(var t=768;789>=t;t++)this.diacriticsTop.push(String.fromCharCode(t));for(t=790;819>=t;t++)794!=t&&795!=t&&this.diacriticsBottom.push(String.fromCharCode(t));for(this.diacriticsTop.push(String.fromCharCode(794)),this.diacriticsTop.push(String.fromCharCode(795)),t=820;824>=t;t++)this.diacriticsMiddle.push(String.fromCharCode(t));for(t=825;828>=t;t++)this.diacriticsBottom.push(String.fromCharCode(t));for(t=829;836>=t;t++)this.diacriticsTop.push(String.fromCharCode(t));this.diacriticsTop.push(String.fromCharCode(836)),this.diacriticsBottom.push(String.fromCharCode(837)),this.diacriticsTop.push(String.fromCharCode(838)),this.diacriticsBottom.push(String.fromCharCode(839)),this.diacriticsBottom.push(String.fromCharCode(840)),this.diacriticsBottom.push(String.fromCharCode(841)),this.diacriticsTop.push(String.fromCharCode(842)),this.diacriticsTop.push(String.fromCharCode(843)),this.diacriticsTop.push(String.fromCharCode(844)),this.diacriticsBottom.push(String.fromCharCode(845)),this.diacriticsBottom.push(String.fromCharCode(846)),this.diacriticsTop.push(String.fromCharCode(848)),this.diacriticsTop.push(String.fromCharCode(849)),this.diacriticsTop.push(String.fromCharCode(850)),this.diacriticsBottom.push(String.fromCharCode(851)),this.diacriticsBottom.push(String.fromCharCode(852)),this.diacriticsBottom.push(String.fromCharCode(853)),this.diacriticsBottom.push(String.fromCharCode(854)),this.diacriticsTop.push(String.fromCharCode(855)),this.diacriticsTop.push(String.fromCharCode(856)),this.diacriticsBottom.push(String.fromCharCode(857)),this.diacriticsBottom.push(String.fromCharCode(858)),this.diacriticsTop.push(String.fromCharCode(859)),this.diacriticsBottom.push(String.fromCharCode(860)),this.diacriticsTop.push(String.fromCharCode(861)),this.diacriticsTop.push(String.fromCharCode(861)),this.diacriticsBottom.push(String.fromCharCode(863)),this.diacriticsTop.push(String.fromCharCode(864)),this.diacriticsTop.push(String.fromCharCode(865))},encode:function(t){var n,r="";for(i in t){if(n=t[i],this.options.middle&&(n+=this.diacriticsMiddle[Math.floor(Math.random()*this.diacriticsMiddle.length)]),this.options.top)for(var o=this.diacriticsTop.length-1,e=0,a=this.options.maxHeight-Math.random()*(this.options.randomization/100*this.options.maxHeight);a>e;e++)n+=this.diacriticsTop[Math.floor(Math.random()*o)];if(this.options.bottom){var s=this.diacriticsBottom.length-1;for(e=0,a=this.options.maxHeight-Math.random()*(this.options.randomization/100*this.options.maxHeight);a>e;e++)n+=this.diacriticsBottom[Math.floor(Math.random()*s)]}r+=n}return r},decode:function(t){var n,r="";for(i in t)(768>(n=t[i].charCodeAt(0))||n>865)&&(r+=t[i]);return r},diacriticsTop:[],diacriticsMiddle:[],diacriticsBottom:[],options:{top:!0,middle:!0,bottom:!0,maxHeight:15,randomization:100}},bubbles:{init:function(){for(var t=49;57>=t;t++)this.map[String.fromCharCode(t)]=String.fromCharCode(t+9263);for(this.map[0]="⓪",t=65;90>=t;t++)this.map[String.fromCharCode(t)]=String.fromCharCode(t+9333);for(t=97;122>=t;t++)this.map[String.fromCharCode(t)]=String.fromCharCode(t+9327);for(t in this.map)this.mapInverse[this.map[t]]=t},encode:function(t){var n,r="",o=!0;for(i in t)void 0===(n=this.map[t[i]])&&(t[i].charCodeAt(0)>=33?(n=t[i]+String.fromCharCode(8413),o||(n=String.fromCharCode(8239)+String.fromCharCode(160)+String.fromCharCode(160)+String.fromCharCode(8239)+n)):n=t[i]),r+=n,o="\n"==n;return r},decode:function(t){var n,r="",o="";for(i in t)r+=void 0===(n=this.mapInverse[t[i]])?t[i]:n;for(i in r)160!=(n=r[i].charCodeAt(0))&&8239!=n&&8413!=n&&(o+=r[i]);return o},map:{},mapInverse:{}},squares:{init:function(){},encode:function(t){var n,r="",o=!0;for(i in t)t[i].charCodeAt(0)>=33?(n=t[i]+String.fromCharCode(8414),o||(n=String.fromCharCode(8239)+String.fromCharCode(160)+String.fromCharCode(160)+String.fromCharCode(8239)+n)):n=t[i],r+=n,o="\n"==n;return r},decode:function(t){var n,r="";for(i in t)160!=(n=t[i].charCodeAt(0))&&8239!=n&&8414!=n&&(r+=t[i]);return r}},roundsquares:{init:function(){},encode:function(t){var n,r="",o=!0;for(i in t)t[i].charCodeAt(0)>=33?(n=t[i]+String.fromCharCode(8419),o||(n=String.fromCharCode(160)+String.fromCharCode(160)+String.fromCharCode(160)+n)):n=t[i],r+=n,o="\n"==n;return r},decode:function(t){var n,r="";for(i in t)160!=(n=t[i].charCodeAt(0))&&8239!=n&&8419!=n&&(r+=t[i]);return r}},bent:{init:function(){for(i in this.map)this.map[this.map[i]]=i},encode:function(t){for(var n,i="",r=0,o=t.length;o>r;r++)void 0===(n=this.map[t.charAt(r)])&&(n=t.charAt(r)),i+=n;return i},decode:function(t){for(var n,i="",r=0,o=t.length;o>r;r++)void 0===(n=this.map[t.charAt(r)])&&(n=t.charAt(r)),i+=n;return i},map:{a:"ą",b:"ҍ",c:"ç",d:"ժ",e:"ҽ",f:"ƒ",g:"ց",h:"հ",i:"ì",j:"ʝ",k:"ҟ",l:"Ӏ",m:"ʍ",n:"ղ",o:"օ",p:"ք",q:"զ",r:"ɾ",s:"ʂ",t:"է",u:"մ",v:"ѵ",w:"ա",x:"×",y:"վ",z:"Հ",A:"Ⱥ",B:"β",C:"↻",D:"Ꭰ",E:"Ɛ",F:"Ƒ",G:"Ɠ",H:"Ƕ",I:"į",J:"ل",K:"Ҡ",L:"Ꝉ",M:"Ɱ",N:"ហ",O:"ට",P:"φ",Q:"Ҩ",R:"འ",S:"Ϛ",T:"Ͳ",U:"Ա",V:"Ỽ",W:"చ",X:"ჯ",Y:"Ӌ",Z:"ɀ",0:"⊘",1:"������",2:"ϩ",3:"Ӡ",4:"५",5:"Ƽ",6:"Ϭ",7:"7",8:"������",9:"९","&":"⅋","(":"{",")":"}","{":"(","}":")","ä":"ą̈","ö":"օ̈","ü":"մ̈","Ä":"Ⱥ̈","Ö":"ට̈","Ü":"Ա̈","é":"ҽ́","á":"ą́","ó":"օ́","ú":"մ́","É":"Ɛ́","Á":"Ⱥ́","Ó":"ට́","Ú":"Ա́","è":"ҽ̀","à":"ą̀","ò":"օ̀","ù":"մ̀","È":"Ɛ̀","À":"Ⱥ̀","Ò":"ට̀","Ù":"Ա̀","ê":"ҽ̂","â":"ą̂","ô":"օ̂","û":"մ̂","Ê":"Ɛ̂","Â":"Ⱥ̂","Ô":"ට̂","Û":"Ա̂"}},tiny:{init:function(){for(i in this.map)this.map[this.map[i]]=i},encode:function(t){for(var n,i="",r=0,o=(t=t.toUpperCase()).length;o>r;r++)void 0===(n=this.map[t.charAt(r)])&&(n=t.charAt(r)),i+=n;return i},decode:function(t){for(var n,i="",r=0,o=t.length;o>r;r++)void 0===(n=this.map[t.charAt(r)])&&(n=t.charAt(r)),i+=n;return i},map:{A:"ᴀ",B:"ʙ",C:"ᴄ",D:"ᴅ",E:"ᴇ",F:"ꜰ",G:"ɢ",H:"ʜ",I:"ɪ",J:"ᴊ",K:"ᴋ",L:"ʟ",M:"ᴍ",N:"ɴ",O:"ᴏ",P:"ᴘ",Q:"Q",R:"ʀ",S:"ꜱ",T:"ᴛ",U:"ᴜ",V:"ᴠ",W:"ᴡ",X:"x",Y:"ʏ",Z:"ᴢ"}}},this.tools)this.tools[i].init();this.getHTML=function(t){for(var n,i="",r=!0,o=0,e=0,a=0,s=t.length;s>a;a++)10==(n=t.charCodeAt(a))||13==n?(i+="<br>\n",r=!0):32==n?r?(i+=" ",r=!1):(i+=" ",r=!0):(n>=55296&&56319>=n?(o=n,e=0):o>0?(n>=56320&&57343>=n&&(e=1024*(o-55296)+(n-56320)+65536),o=0):e=n,0!=e&&(i+="&#x"+e.toString(16)+";",r=!0));return i}};r.tools.creepify.options.maxHeight=10,window.generateOtherFonts=function(){let t=input.value.trim();if(""!==t){var n=`Bold (serif):\n${h(w,t)}\n\nBold (sans):\n${h(M,t)}\n\nItalic Bold (serif):\n${h(j,t)}\n\nItalic Bold (sans):\n${h(S,t)}\n\nMedieval Bold:\n${h(z,t)}\n\nDouble-Struck:\n${h(Q,t)}\n\n`;n+=h(H,t)+"\n\n",n+=r.tools.bubbles.encode(t)+"\n\n",n+=function(t){for(var n={0:"₀",1:"₁",2:"₂",3:"₃",4:"₄",5:"₅",6:"₆",7:"₇",8:"₈",9:"₉",a:"ₐ",b:"b",c:"c",d:"d",e:"ₑ",f:"f",g:"g",h:"ₕ",i:"ᵢ",j:"ⱼ",k:"ₖ",l:"ₗ",m:"ₘ",n:"ₙ",o:"ₒ",p:"ₚ",q:"q",r:"ᵣ",s:"ₛ",t:"ₜ",u:"ᵤ",v:"ᵥ",w:"w",x:"ₓ",y:"y",z:"z",A:"ₐ",B:"B",C:"C",D:"D",E:"ₑ",F:"F",G:"G",H:"ₕ",I:"ᵢ",J:"ⱼ",K:"ₖ",L:"ₗ",M:"ₘ",N:"ₙ",O:"ₒ",P:"ₚ",Q:"Q",R:"ᵣ",S:"ₛ",T:"ₜ",U:"ᵤ",V:"ᵥ",W:"W",X:"ₓ",Y:"Y",Z:"Z","+":"₊","-":"₋","=":"₌","(":"₍",")":"₎",y:"ᵧ",b:"ᵦ",q:"ᵩ",z:"𝓏",w:"𝓌",c:"𝒸",d:"𝒹",f:"𝒻",g:"𝓰"},i=t.split(""),r=0;r<i.length;r++)n[i[r]]?i[r]=n[i[r]]:n[i[r].toLowerCase()]?i[r]=n[i[r].toLowerCase()]:i[r]=i[r];return t=i.join("")}(t)+"\n\n",n+=function(t){for(var n={0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹",a:"ᵃ",b:"ᵇ",c:"ᶜ",d:"ᵈ",e:"ᵉ",f:"ᶠ",g:"ᵍ",h:"ʰ",i:"ᶦ",j:"ʲ",k:"ᵏ",l:"ˡ",m:"ᵐ",n:"ⁿ",o:"ᵒ",p:"ᵖ",q:"ᑫ",r:"ʳ",s:"ˢ",t:"ᵗ",u:"ᵘ",v:"ᵛ",w:"ʷ",x:"ˣ",y:"ʸ",z:"ᶻ",A:"ᴬ",B:"ᴮ",C:"ᶜ",D:"ᴰ",E:"ᴱ",F:"ᶠ",G:"ᴳ",H:"ᴴ",I:"ᴵ",J:"ᴶ",K:"ᴷ",L:"ᴸ",M:"ᴹ",N:"ᴺ",O:"ᴼ",P:"ᴾ",Q:"Q",R:"ᴿ",S:"ˢ",T:"ᵀ",U:"ᵁ",V:"ⱽ",W:"ᵂ",X:"ˣ",Y:"ʸ",Z:"ᶻ","+":"⁺","-":"⁻","=":"⁼","(":"⁽",")":"⁾",q:"ᵠ",Q:"ᵠ","?":"ˀ","!":"ᵎ"},i=t.split(""),r=0;r<i.length;r++)n[i[r]]?i[r]=n[i[r]]:n[i[r].toLowerCase()]?i[r]=n[i[r].toLowerCase()]:i[r]=i[r];return t=i.join("")}(t)+"\n\n",n+=function(t){for(var n={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"ᴀ",b:"ʙ",c:"ᴄ",d:"ᴅ",e:"ᴇ",f:"ꜰ",g:"ɢ",h:"ʜ",i:"ɪ",j:"ᴊ",k:"ᴋ",l:"ʟ",m:"ᴍ",n:"ɴ",o:"ᴏ",p:"ᴘ",q:"ǫ",r:"ʀ",s:"s",t:"ᴛ",u:"ᴜ",v:"ᴠ",w:"ᴡ",x:"x",y:"ʏ",z:"ᴢ",A:"A",B:"B",C:"C",D:"D",E:"E",F:"F",G:"G",H:"H",I:"I",J:"J",K:"K",L:"L",M:"M",N:"N",O:"O",P:"P",Q:"Q",R:"R",S:"S",T:"T",U:"U",V:"V",W:"W",X:"X",Y:"Y",Z:"Z"},i=t.split(""),r=0;r<i.length;r++)n[i[r]]?i[r]=n[i[r]]:n[i[r].toLowerCase()]?i[r]=n[i[r].toLowerCase()]:i[r]=i[r];return t=i.join("")}(t)+"\n\n",n+=h(G,t)+"\n\n",n+=h(z,t)+"\n\n",n+=rt(t)+"\n\n",n+=h(k,t)+"\n\n",n+=nt(t)+"\n\n",n+=h(O,t)+"\n\n",n+=Y(t)+"\n\n",n+=r.tools.tiny.encode(t)+"\n\n",n+=r.tools.flip.encode(t)+"\n\n",n+=r.tools.roundsquares.encode(t)+"\n\n",n+=r.tools.squares.encode(t)+"\n\n",n+=h(m,t)+"\n\n",n+=r.tools.mirror.encode(t)+"\n\n",n+=r.tools.creepify.encode(t)+"\n\n",n+=h(F,t)+"\n\n",n+=h(D,t)+"\n\n",n+=h(I,t)+"\n\n",n+=h(b,t)+"\n\n",n+=h(v,t)+"\n\n",n+=h(C,t)+"\n\n",n+=h(d,t)+"\n\n",n+=h(p,t)+"\n\n",n+=h(w,t)+"\n\n",n+=h(M,t)+"\n\n",n+=h(y,t)+"\n\n",n+=h(S,t)+"\n\n",n+=h(x,t)+"\n\n",n+=h(q,t)+"\n\n",n+=h(T,t)+"\n\n",n+=h(A,t)+"\n\n",n+=h(B,t)+"\n\n",n+=h(l,t)+"\n\n",n+=h(f,t)+"\n\n",n+=function(t){return t.replace(/([^\s])/g,"【$1】")}(t)+"\n\n",n+=function(t){return t.replace(/([^\s])/g,"『$1』")}(t)+"\n\n",n+=function(t){return"≋"+t.split("").join("≋")+"≋"}(t)+"\n\n",n+=function(t){return"░"+t.split("").join("░")+"░"}(t)+"\n\n",n+=function(t){return"(っ◔◡◔)っ ♥ "+t+" ♥"}(t)+"\n\n",n+=function(t){var n=t.split(" ").length;t=h(e,t);var i=function(t){t||(t=1);for(var n="リサフランク現代のコンピュ竹内 まりや若者が履く流行のスニーカー真夜中のドアホットドッグマスターストライカーソニーブギ新しい日の誕生ライフ - ヒスイ蒸気波 無線゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ゙゚゛゜ゝゞゟ亜哀挨愛曖悪握圧扱宛嵐安案暗以衣位囲医依委威為畏胃尉異移萎偉椅彙意違維慰遺緯域育壱逸茨芋引印因咽姻員院淫陰飲隠韻右宇羽雨唄鬱畝浦運雲永泳英映栄営詠影鋭衛易疫益液駅悦越謁閲円延沿炎怨宴媛援園煙猿遠鉛塩演縁艶汚王凹央応往押旺欧殴桜翁奥横岡屋億憶臆虞乙俺卸音恩温穏下化火加可仮何花佳価果河苛科",i="",r=0;r<t;r++)i+=n[Math.floor(Math.random()*n.length)];return i}(Math.max(3,n));n>6&&(i=i.split("").map(t=>t+["","　"][Math.round(.6*Math.random())]).join(""));var r=[];return r.push(t+"　"+i),r.push(t.replace(/　/g,"░").replace(/ａｅ/,"æ").replace(/Ａ/g,"Λ").replace(/Ｅ/g,function(){return Math.random()>.5?"Ξ":"Σ"}).replace(/Ｏ/g,"♢")+"　（"+i+"）"),r.push("【\ufeff"+t+"】"),r.join("\n\n")}(t)+"\n\n",n+=function(t){return"˜”*°•.˜”*°• "+t+" •°*”˜.•°*”˜"}(t)+"\n\n",n+=function(t){return t.replace(/([^\s])/g,"[̲̅$1]")}(t)+"\n\n",n+=function(t){return t.split("").join("҉")+"҉"}(t)+"\n\n",n+=h(L,t)+"\n\n",n+=h(g,t)+"\n\n",n+=h(u,t)+"\n\n",n+=function(t){return t.split("").join("̶")+"̶"}(t)+"\n\n",n+=function(t){return t.split("").join("̴")+"̴"}(t)+"\n\n",n+=function(t){return t.split("").join("̷")+"̷"}(t)+"\n\n",n+=function(t){return t.split("").join("̲")+"̲"}(t)+"\n\n",n+=function(t){return t.split("").join("̳")+"̳"}(t)+"\n\n",n+=function(t){return t.split("").join("̾")+"̾"}(t)+"\n\n",n+=function(t){return t.split("").join("♥")}(t)+"\n\n",n+=function(t){return t.split("").join("͎")+"͎"}(t)+"\n\n",n+=function(t){return t.split("").join("͓̽")+"͓̽"}(t)+"\n\n",n+="Wingdings: "+function(t){return t.split("").map(function(t){return o[t]?o[t]:t}).join("")}(t)+"\n\n",n+=Y(t)+"\n\n",n+=Y(t)+"\n\n",n+=Y(t)+"\n\n",n+=Y(t)+"\n\n",n+=Y(t)+"\n\n",n+=rt(t)+"\n\n",n+=rt(t)+"\n\n",n+=rt(t)+"\n\n",n+=rt(t)+"\n\n",n="<div contenteditable style='outline:none;white-space:pre-wrap;'>"+(n+=rt(t)+"\n\n").replace(/\n\n/g,"</div>\n<div contenteditable style='outline:none;white-space:pre-wrap;'>")+"</div>",n+='<div id="moreFontsCtn"></div>',n+=`<button class="btn btn-dark py-2 mb-3" onclick="moreFontsCtn.innerHTML += loadMoreFonts('${t}')">Lihat Jenis Text Lainya</button>`,document.querySelector("#output-wrapper").style.display="",document.querySelector("#output").innerHTML=n.trim()}else output.innerHTML=""},window.loadMoreFonts=function(t){let n="";for(let i=0;i<15;i++){let i;n+=(i=Math.random()<.7?c(ot(t),2):s(ot(t)))+"\n\n"}return n="<div contenteditable style='outline:none;white-space:pre-wrap;'>"+n.replace(/\n\n/g,"</div>\n<div contenteditable style='outline:none;white-space:pre-wrap;'>")+"</div>"};const o={0:"📁︎",1:"📂︎",2:"📄︎",3:"🗏︎",4:"🗐︎",5:"🗄︎",6:"⌛︎",7:"🖮︎",8:"🖰︎",9:"🖲︎","!":"✏︎",'"':"✂︎","#":"✁︎",$:"👓︎","%":"🕭︎","&":"🕮︎","'":"🕯︎","(":"🕿︎",")":"✆︎","*":"🖂︎","+":"🖃︎",",":"📪︎","-":"📫︎",".":"📬︎","/":"📭︎",":":"🖳︎",";":"🖴︎","<":"🖫︎","=":"🖬︎",">":"✇︎","?":"✍︎",A:"✌︎",B:"👌︎",C:"👍︎",D:"👎︎",E:"☜︎",F:"☞︎",G:"☝︎",H:"☟︎",I:"✋︎",J:"☺︎",K:"😐︎",L:"☹︎",M:"💣︎",N:"☠︎",O:"⚐︎",P:"🏱︎",Q:"✈︎",R:"☼︎",S:"💧︎",T:"❄︎",U:"🕆︎",V:"✞︎",W:"🕈︎",X:"✠︎",Y:"✡︎",Z:"☪︎","[":"☯︎","\\":"ॐ︎","]":"☸︎","^":"♈︎",_:"♉︎","`":"♊︎",a:"♋︎",b:"♌︎",c:"♍︎",d:"♎︎",e:"♏︎",f:"♐︎",g:"♑︎",h:"♒︎",i:"♓︎",j:"🙰",k:"🙵",l:"●︎",m:"❍︎",n:"■︎",o:"□︎",p:"◻︎",q:"❑︎",r:"❒︎",s:"⬧︎",t:"⧫︎",u:"◆︎",v:"❖︎",w:"⬥︎",x:"⌧︎",y:"⍓︎",z:"⌘︎","{":"❀︎","|":"✿︎","}":"❝︎","~":"❞︎","":"▯︎","€":"⓪︎","":"①︎","‚":"②︎","ƒ":"③︎","„":"④︎","…":"⑤︎","†":"⑥︎","‡":"⑦︎","ˆ":"⑧︎","‰":"⑨︎","Š":"⑩︎","‹":"⓿︎","Œ":"❶︎","":"❷︎","Ž":"❸︎","":"❹︎","":"❺︎","‘":"❻︎","’":"❼︎","“":"❽︎","”":"❾︎","•":"❿︎","–":"◻︎","—":"◻︎","˜":"◻︎","™":"◻︎","š":"◻︎","›":"◻︎","œ":"◻︎","":"◻︎","ž":"·︎","Ÿ":"•︎","¡":"○︎","¢":"⭕︎","£":"◻︎","¤":"◉︎","¥":"◎︎","¦":"◻︎","§":"▪︎","¨":"◻︎","©":"◻︎","ª":"✦︎","«":"★︎","¬":"✶︎","®":"✹︎","¯":"✵︎","°":"◻︎","±":"⌖︎","²":"⟡︎","³":"⌑︎","´":"◻︎","µ":"✪︎","¶":"✰︎","·":"🕐︎","¸":"🕑︎","¹":"🕒︎","º":"🕓︎","»":"🕔︎","¼":"🕕︎","½":"🕖︎","¾":"🕗︎","¿":"🕘︎","À":"🕙︎","Á":"🕚︎","Â":"🕛︎","Ã":"◻︎","Ä":"◻︎","Å":"◻︎","Æ":"◻︎","Ç":"◻︎","È":"◻︎","É":"◻︎","Ê":"◻︎","Ë":"◻︎","Ì":"◻︎","Í":"◻︎","Î":"◻︎","Ï":"◻︎","Ð":"◻︎","Ñ":"◻︎","Ò":"◻︎","Ó":"◻︎","Ô":"◻︎","Õ":"⌫︎","Ö":"⌦︎","×":"◻︎","Ø":"➢︎","Ù":"◻︎","Ú":"◻︎","Û":"◻︎","Ü":"➲︎","Ý":"◻︎","Þ":"◻︎","ß":"◻︎","à":"◻︎","á":"◻︎","â":"◻︎","ã":"◻︎","ä":"◻︎","å":"◻︎","æ":"◻︎","ç":"◻︎","è":"➔︎","é":"◻︎","ê":"◻︎","ë":"◻︎","ì":"◻︎","í":"◻︎","î":"◻︎","ï":"⇦︎","ð":"⇨︎","ñ":"⇧︎","ò":"⇩︎","ó":"⬄︎","ô":"⇳︎","õ":"⬀︎","ö":"⬁︎","÷":"⬃︎","ø":"⬂︎","ù":"▭︎","ú":"▫︎","û":"✗︎","ü":"✓︎","ý":"☒︎","þ":"☑︎","ÿ":"◻︎"};const e={" ":"　","`":"`",1:"１",2:"２",3:"３",4:"４",5:"５",6:"６",7:"７",8:"８",9:"９",0:"０","-":"－","=":"＝","~":"~","!":"！","@":"＠","#":"＃",$:"＄","%":"％","^":"^","&":"＆","*":"＊","(":"（",")":"）",_:"_","+":"＋",q:"ｑ",w:"ｗ",e:"ｅ",r:"ｒ",t:"ｔ",y:"ｙ",u:"ｕ",i:"ｉ",o:"ｏ",p:"ｐ","[":"[","]":"]","\\":"\\",Q:"Ｑ",W:"Ｗ",E:"Ｅ",R:"Ｒ",T:"Ｔ",Y:"Ｙ",U:"Ｕ",I:"Ｉ",O:"Ｏ",P:"Ｐ","{":"{","}":"}","|":"|",a:"ａ",s:"ｓ",d:"ｄ",f:"ｆ",g:"ｇ",h:"ｈ",j:"ｊ",k:"ｋ",l:"ｌ",";":"；","'":"＇",A:"Ａ",S:"Ｓ",D:"Ｄ",F:"Ｆ",G:"Ｇ",H:"Ｈ",J:"Ｊ",K:"Ｋ",L:"Ｌ",":":"：",'"':'"',z:"ｚ",x:"ｘ",c:"ｃ",v:"ｖ",b:"ｂ",n:"ｎ",m:"ｍ",",":"，",".":"．","/":"／",Z:"Ｚ",X:"Ｘ",C:"Ｃ",V:"Ｖ",B:"Ｂ",N:"Ｎ",M:"Ｍ","<":"<",">":">","?":"？"};const a=["★·.·´¯`·.·★ [[text]] ★·.·´¯`·.·★","▁ ▂ ▄ ▅ ▆ ▇ █ [[text]] █ ▇ ▆ ▅ ▄ ▂ ▁","°°°·.°·..·°¯°·._.· [[text]] ·._.·°¯°·.·° .·°°°","¸,ø¤º°`°º¤ø,¸¸,ø¤º° [[text]] °º¤ø,¸¸,ø¤º°`°º¤ø,¸","ıllıllı [[text]] ıllıllı","•?((¯°·._.• [[text]] •._.·°¯))؟•","▌│█║▌║▌║ [[text]] ║▌║▌║█│▌","×º°”˜`”°º× [[text]] ×º°”˜`”°º×","•]••´º´•» [[text]] «•´º´••[•","*•.¸♡ [[text]] ♡¸.•*","╰☆☆ [[text]] ☆☆╮",".•°¤*(¯`★´¯)*¤° [[text]] °¤*(¯´★`¯)*¤°•.","(¯´•._.• [[text]] •._.•´¯)","¸„.-•~¹°”ˆ˜¨ [[text]] ¨˜ˆ”°¹~•-.„¸","░▒▓█ [[text]] █▓▒░","░▒▓█►─═  [[text]] ═─◄█▓▒░","★彡 [[text]] 彡★","•´¯`•. [[text]] .•´¯`•","§.•´¨'°÷•..× [[text]] ×,.•´¨'°÷•..§","•°¯`•• [[text]] ••´¯°•","(¯`*•.¸,¤°´✿.｡.:* [[text]] *.:｡.✿`°¤,¸.•*´¯)","|!¤*'~``~'*¤!| [[text]] |!¤*'~``~'*¤!|","•._.••´¯``•.¸¸.•` [[text]] `•.¸¸.•´´¯`••._.•","¸„.-•~¹°”ˆ˜¨ [[text]] ¨˜ˆ”°¹~•-.„¸","(¯´•._.• [[text]] •._.•´¯)","••¤(`×[¤ [[text]] ¤]×´)¤••","•´¯`•» [[text]] «•´¯`•"," .o0×X×0o. [[text]] .o0×X×0o.","¤¸¸.•´¯`•¸¸.•..>> [[text]] <<..•.¸¸•´¯`•.¸¸¤","—(••÷[ [[text]] ]÷••)—","¸,ø¤º°`°º¤ø,¸ [[text]] ¸,ø¤º°`°º¤ø,¸","`•.¸¸.•´´¯`••._.• [[text]] •._.••`¯´´•.¸¸.•`",",-*' ^ '~*-.,_,.-*~ [[text]] ~*-.,_,.-*~' ^ '*-,","`•.,¸¸,.•´¯ [[text]] ¯`•.,¸¸,.•´","↤↤↤↤↤ [[text]] ↦↦↦↦↦","➶➶➶➶➶ [[text]] ➷➷➷➷➷","↫↫↫↫↫ [[text]] ↬↬↬↬↬","·.¸¸.·♩♪♫ [[text]] ♫♪♩·.¸¸.·","【｡_｡】 [[text]] 【｡_｡】","]|I{•------» [[text]] «------•}I|[","▀▄▀▄▀▄ [[text]] ▄▀▄▀▄▀","(-_-) [[text]] (-_-)","•´¯`•. [[text]] .•´¯`•","-漫~*'¨¯¨'*·舞~ [[text]] ~舞*'¨¯¨'*·~漫-","๑۞๑,¸¸,ø¤º°`°๑۩ [[text]] ๑۩ ,¸¸,ø¤º°`°๑۞๑",".•°¤*(¯`★´¯)*¤° [[text]] °¤*(¯´★`¯)*¤°•.","••.•´¯`•.•• [[text]] ••.•´¯`•.••","¤¸¸.•´¯`•¸¸.•..>> [[text]] <<..•.¸¸•´¯`•.¸¸¤","◦•●◉✿ [[text]] ✿◉●•◦","╚»★«╝ [[text]] ╚»★«╝","-·=»‡«=·- [[text]] -·=»‡«=·-","∙∙·▫▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ [[text]] ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫▫·∙∙","¸¸♬·¯·♩¸¸♪·¯·♫¸¸ [[text]] ¸¸♫·¯·♪¸¸♩·¯·♬¸¸","ஜ۩۞۩ஜ [[text]] ஜ۩۞۩ஜ","¤ (¯´☆✭.¸_)¤ [[text]] ¤(_¸.✭☆´¯) ¤","(¯`·.¸¸.·´¯`·.¸¸.-> [[text]] <-.¸¸.·´¯`·.¸¸.·´¯)","✿.｡.:* ☆:**:. [[text]] .:**:.☆*.:｡.✿",".•♫•♬• [[text]] •♬•♫•.","ღ(¯`◕‿◕´¯) ♫ ♪ ♫ [[text]] ♫ ♪ ♫ (¯`◕‿◕´¯)ღ","«-(¯`v´¯)-« [[text]] »-(¯`v´¯)-»"];function s(t){return a[Math.floor(Math.random()*a.length)].replace("[[text]]",t)}function c(t,n){return at(n)+"  "+t+"  "+at(n)}function h(t,n){let i="";for(let r of n.split(""))void 0!==t[r]?i+=t[r]:void 0!==t[r.toLowerCase()]?i+=t[r.toLowerCase()]:i+=r;return i}const u={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"ᗩ",b:"ᗷ",c:"ᑢ",d:"ᕲ",e:"ᘿ",f:"ᖴ",g:"ᘜ",h:"ᕼ",i:"ᓰ",j:"ᒚ",k:"ᖽᐸ",l:"ᒪ",m:"ᘻ",n:"ᘉ",o:"ᓍ",p:"ᕵ",q:"ᕴ",r:"ᖇ",s:"S",t:"ᖶ",u:"ᑘ",v:"ᐺ",w:"ᘺ",x:"᙭",y:"ᖻ",z:"ᗱ",A:"ᗩ",B:"ᗷ",C:"ᑢ",D:"ᕲ",E:"ᘿ",F:"ᖴ",G:"ᘜ",H:"ᕼ",I:"ᓰ",J:"ᒚ",K:"ᖽᐸ",L:"ᒪ",M:"ᘻ",N:"ᘉ",O:"ᓍ",P:"ᕵ",Q:"ᕴ",R:"ᖇ",S:"S",T:"ᖶ",U:"ᑘ",V:"ᐺ",W:"ᘺ",X:"᙭",Y:"ᖻ",Z:"ᗱ"},p={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"ค",b:"๖",c:"¢",d:"໓",e:"ē",f:"f",g:"ງ",h:"h",i:"i",j:"ว",k:"k",l:"l",m:"๓",n:"ຖ",o:"໐",p:"p",q:"๑",r:"r",s:"Ş",t:"t",u:"น",v:"ง",w:"ຟ",x:"x",y:"ฯ",z:"ຊ",A:"ค",B:"๖",C:"¢",D:"໓",E:"ē",F:"f",G:"ງ",H:"h",I:"i",J:"ว",K:"k",L:"l",M:"๓",N:"ຖ",O:"໐",P:"p",Q:"๑",R:"r",S:"Ş",T:"t",U:"น",V:"ง",W:"ຟ",X:"x",Y:"ฯ",Z:"ຊ"},d={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"ą",b:"ც",c:"ƈ",d:"ɖ",e:"ɛ",f:"ʄ",g:"ɠ",h:"ɧ",i:"ı",j:"ʝ",k:"ƙ",l:"Ɩ",m:"ɱ",n:"ŋ",o:"ơ",p:"℘",q:"զ",r:"ཞ",s:"ʂ",t:"ɬ",u:"ų",v:"۷",w:"ῳ",x:"ҳ",y:"ყ",z:"ʑ",A:"ą",B:"ც",C:"ƈ",D:"ɖ",E:"ɛ",F:"ʄ",G:"ɠ",H:"ɧ",I:"ı",J:"ʝ",K:"ƙ",L:"Ɩ",M:"ɱ",N:"ŋ",O:"ơ",P:"℘",Q:"զ",R:"ཞ",S:"ʂ",T:"ɬ",U:"ų",V:"۷",W:"ῳ",X:"ҳ",Y:"ყ",Z:"ʑ"},f={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"ﾑ",b:"乃",c:"ᄃ",d:"り",e:"乇",f:"ｷ",g:"ム",h:"ん",i:"ﾉ",j:"ﾌ",k:"ズ",l:"ﾚ",m:"ﾶ",n:"刀",o:"の",p:"ｱ",q:"ゐ",r:"尺",s:"丂",t:"ｲ",u:"ひ",v:"√",w:"W",x:"ﾒ",y:"ﾘ",z:"乙",A:"ﾑ",B:"乃",C:"ᄃ",D:"り",E:"乇",F:"ｷ",G:"ム",H:"ん",I:"ﾉ",J:"ﾌ",K:"ズ",L:"ﾚ",M:"ﾶ",N:"刀",O:"の",P:"ｱ",Q:"ゐ",R:"尺",S:"丂",T:"ｲ",U:"ひ",V:"√",W:"W",X:"ﾒ",Y:"ﾘ",Z:"乙"},l={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"卂",b:"乃",c:"匚",d:"ᗪ",e:"乇",f:"千",g:"Ꮆ",h:"卄",i:"丨",j:"ﾌ",k:"Ҝ",l:"ㄥ",m:"爪",n:"几",o:"ㄖ",p:"卩",q:"Ɋ",r:"尺",s:"丂",t:"ㄒ",u:"ㄩ",v:"ᐯ",w:"山",x:"乂",y:"ㄚ",z:"乙",A:"卂",B:"乃",C:"匚",D:"ᗪ",E:"乇",F:"千",G:"Ꮆ",H:"卄",I:"丨",J:"ﾌ",K:"Ҝ",L:"ㄥ",M:"爪",N:"几",O:"ㄖ",P:"卩",Q:"Ɋ",R:"尺",S:"丂",T:"ㄒ",U:"ㄩ",V:"ᐯ",W:"山",X:"乂",Y:"ㄚ",Z:"乙"},m={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"🄰",b:"🄱",c:"🄲",d:"🄳",e:"🄴",f:"🄵",g:"🄶",h:"🄷",i:"🄸",j:"🄹",k:"🄺",l:"🄻",m:"🄼",n:"🄽",o:"🄾",p:"🄿",q:"🅀",r:"🅁",s:"🅂",t:"🅃",u:"🅄",v:"🅅",w:"🅆",x:"🅇",y:"🅈",z:"🅉",A:"🄰",B:"🄱",C:"🄲",D:"🄳",E:"🄴",F:"🄵",G:"🄶",H:"🄷",I:"🄸",J:"🄹",K:"🄺",L:"🄻",M:"🄼",N:"🄽",O:"🄾",P:"🄿",Q:"🅀",R:"🅁",S:"🅂",T:"🅃",U:"🅄",V:"🅅",W:"🅆",X:"🅇",Y:"🅈",Z:"🅉"},C={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"Ꮧ",b:"Ᏸ",c:"ፈ",d:"Ꮄ",e:"Ꮛ",f:"Ꭶ",g:"Ꮆ",h:"Ꮒ",i:"Ꭵ",j:"Ꮰ",k:"Ꮶ",l:"Ꮭ",m:"Ꮇ",n:"Ꮑ",o:"Ꭷ",p:"Ꭾ",q:"Ꭴ",r:"Ꮢ",s:"Ꮥ",t:"Ꮦ",u:"Ꮼ",v:"Ꮙ",w:"Ꮗ",x:"ጀ",y:"Ꭹ",z:"ፚ",A:"Ꮧ",B:"Ᏸ",C:"ፈ",D:"Ꮄ",E:"Ꮛ",F:"Ꭶ",G:"Ꮆ",H:"Ꮒ",I:"Ꭵ",J:"Ꮰ",K:"Ꮶ",L:"Ꮭ",M:"Ꮇ",N:"Ꮑ",O:"Ꭷ",P:"Ꭾ",Q:"Ꭴ",R:"Ꮢ",S:"Ꮥ",T:"Ꮦ",U:"Ꮼ",V:"Ꮙ",W:"Ꮗ",X:"ጀ",Y:"Ꭹ",Z:"ፚ"},g={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"ᗩ",b:"ᗷ",c:"ᑕ",d:"ᗪ",e:"E",f:"ᖴ",g:"G",h:"ᕼ",i:"I",j:"ᒍ",k:"K",l:"ᒪ",m:"ᗰ",n:"ᑎ",o:"O",p:"ᑭ",q:"ᑫ",r:"ᖇ",s:"ᔕ",t:"T",u:"ᑌ",v:"ᐯ",w:"ᗯ",x:"᙭",y:"Y",z:"ᘔ",A:"ᗩ",B:"ᗷ",C:"ᑕ",D:"ᗪ",E:"E",F:"ᖴ",G:"G",H:"ᕼ",I:"I",J:"ᒍ",K:"K",L:"ᒪ",M:"ᗰ",N:"ᑎ",O:"O",P:"ᑭ",Q:"ᑫ",R:"ᖇ",S:"ᔕ",T:"T",U:"ᑌ",V:"ᐯ",W:"ᗯ",X:"᙭",Y:"Y",Z:"ᘔ"},v={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"ǟ",b:"ɮ",c:"ƈ",d:"ɖ",e:"ɛ",f:"ʄ",g:"ɢ",h:"ɦ",i:"ɨ",j:"ʝ",k:"ӄ",l:"ʟ",m:"ʍ",n:"ռ",o:"օ",p:"ք",q:"զ",r:"ʀ",s:"ֆ",t:"ȶ",u:"ʊ",v:"ʋ",w:"ա",x:"Ӽ",y:"ʏ",z:"ʐ",A:"ǟ",B:"ɮ",C:"ƈ",D:"ɖ",E:"ɛ",F:"ʄ",G:"ɢ",H:"ɦ",I:"ɨ",J:"ʝ",K:"ӄ",L:"ʟ",M:"ʍ",N:"ռ",O:"օ",P:"ք",Q:"զ",R:"ʀ",S:"ֆ",T:"ȶ",U:"ʊ",V:"ʋ",W:"ա",X:"Ӽ",Y:"ʏ",Z:"ʐ"},x={0:"𝟶",1:"𝟷",2:"𝟸",3:"𝟹",4:"𝟺",5:"𝟻",6:"𝟼",7:"𝟽",8:"𝟾",9:"𝟿",a:"𝚊",b:"𝚋",c:"𝚌",d:"𝚍",e:"𝚎",f:"𝚏",g:"𝚐",h:"𝚑",i:"𝚒",j:"𝚓",k:"𝚔",l:"𝚕",m:"𝚖",n:"𝚗",o:"𝚘",p:"𝚙",q:"𝚚",r:"𝚛",s:"𝚜",t:"𝚝",u:"𝚞",v:"𝚟",w:"𝚠",x:"𝚡",y:"𝚢",z:"𝚣",A:"𝙰",B:"𝙱",C:"𝙲",D:"𝙳",E:"𝙴",F:"𝙵",G:"𝙶",H:"𝙷",I:"𝙸",J:"𝙹",K:"𝙺",L:"𝙻",M:"𝙼",N:"𝙽",O:"𝙾",P:"𝙿",Q:"𝚀",R:"𝚁",S:"𝚂",T:"𝚃",U:"𝚄",V:"𝚅",W:"𝚆",X:"𝚇",Y:"𝚈",Z:"𝚉"},S={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"𝙖",b:"𝙗",c:"𝙘",d:"𝙙",e:"𝙚",f:"𝙛",g:"𝙜",h:"𝙝",i:"𝙞",j:"𝙟",k:"𝙠",l:"𝙡",m:"𝙢",n:"𝙣",o:"𝙤",p:"𝙥",q:"𝙦",r:"𝙧",s:"𝙨",t:"𝙩",u:"𝙪",v:"𝙫",w:"𝙬",x:"𝙭",y:"𝙮",z:"𝙯",A:"𝘼",B:"𝘽",C:"𝘾",D:"𝘿",E:"𝙀",F:"𝙁",G:"𝙂",H:"𝙃",I:"𝙄",J:"𝙅",K:"𝙆",L:"𝙇",M:"𝙈",N:"𝙉",O:"𝙊",P:"𝙋",Q:"𝙌",R:"𝙍",S:"𝙎",T:"𝙏",U:"𝙐",V:"𝙑",W:"𝙒",X:"𝙓",Y:"𝙔",Z:"𝙕"},j={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"𝒂",b:"𝒃",c:"𝒄",d:"𝒅",e:"𝒆",f:"𝒇",g:"𝒈",h:"𝒉",i:"𝒊",j:"𝒋",k:"𝒌",l:"𝒍",m:"𝒎",n:"𝒏",o:"𝒐",p:"𝒑",q:"𝒒",r:"𝒓",s:"𝒔",t:"𝒕",u:"𝒖",v:"𝒗",w:"𝒘",x:"𝒙",y:"𝒚",z:"𝒛",A:"𝑨",B:"𝑩",C:"𝑪",D:"𝑫",E:"𝑬",F:"𝑭",G:"𝑮",H:"𝑯",I:"𝑰",J:"𝑱",K:"𝑲",L:"𝑳",M:"𝑴",N:"𝑵",O:"𝑶",P:"𝑷",Q:"𝑸",R:"𝑹",S:"𝑺",T:"𝑻",U:"𝑼",V:"𝑽",W:"𝑾",X:"𝑿",Y:"𝒀",Z:"𝒁"},w={0:"𝟎",1:"𝟏",2:"𝟐",3:"𝟑",4:"𝟒",5:"𝟓",6:"𝟔",7:"𝟕",8:"𝟖",9:"𝟗",a:"𝐚",b:"𝐛",c:"𝐜",d:"𝐝",e:"𝐞",f:"𝐟",g:"𝐠",h:"𝐡",i:"𝐢",j:"𝐣",k:"𝐤",l:"𝐥",m:"𝐦",n:"𝐧",o:"𝐨",p:"𝐩",q:"𝐪",r:"𝐫",s:"𝐬",t:"𝐭",u:"𝐮",v:"𝐯",w:"𝐰",x:"𝐱",y:"𝐲",z:"𝐳",A:"𝐀",B:"𝐁",C:"𝐂",D:"𝐃",E:"𝐄",F:"𝐅",G:"𝐆",H:"𝐇",I:"𝐈",J:"𝐉",K:"𝐊",L:"𝐋",M:"𝐌",N:"𝐍",O:"𝐎",P:"𝐏",Q:"𝐐",R:"𝐑",S:"𝐒",T:"𝐓",U:"𝐔",V:"𝐕",W:"𝐖",X:"𝐗",Y:"𝐘",Z:"𝐙"},M={0:"𝟬",1:"𝟭",2:"𝟮",3:"𝟯",4:"𝟰",5:"𝟱",6:"𝟲",7:"𝟳",8:"𝟴",9:"𝟵",a:"𝗮",b:"𝗯",c:"𝗰",d:"𝗱",e:"𝗲",f:"𝗳",g:"𝗴",h:"𝗵",i:"𝗶",j:"𝗷",k:"𝗸",l:"𝗹",m:"𝗺",n:"𝗻",o:"𝗼",p:"𝗽",q:"𝗾",r:"𝗿",s:"𝘀",t:"𝘁",u:"𝘂",v:"𝘃",w:"𝘄",x:"𝘅",y:"𝘆",z:"𝘇",A:"𝗔",B:"𝗕",C:"𝗖",D:"𝗗",E:"𝗘",F:"𝗙",G:"𝗚",H:"𝗛",I:"𝗜",J:"𝗝",K:"𝗞",L:"𝗟",M:"𝗠",N:"𝗡",O:"𝗢",P:"𝗣",Q:"𝗤",R:"𝗥",S:"𝗦",T:"𝗧",U:"𝗨",V:"𝗩",W:"𝗪",X:"𝗫",Y:"𝗬",Z:"𝗭"},y={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"𝘢",b:"𝘣",c:"𝘤",d:"𝘥",e:"𝘦",f:"𝘧",g:"𝘨",h:"𝘩",i:"𝘪",j:"𝘫",k:"𝘬",l:"𝘭",m:"𝘮",n:"𝘯",o:"𝘰",p:"𝘱",q:"𝘲",r:"𝘳",s:"𝘴",t:"𝘵",u:"𝘶",v:"𝘷",w:"𝘸",x:"𝘹",y:"𝘺",z:"𝘻",A:"𝘈",B:"𝘉",C:"𝘊",D:"𝘋",E:"𝘌",F:"𝘍",G:"𝘎",H:"𝘏",I:"𝘐",J:"𝘑",K:"𝘒",L:"𝘓",M:"𝘔",N:"𝘕",O:"𝘖",P:"𝘗",Q:"𝘘",R:"𝘙",S:"𝘚",T:"𝘛",U:"𝘜",V:"𝘝",W:"𝘞",X:"𝘟",Y:"𝘠",Z:"𝘡"},b={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"α",b:"Ⴆ",c:"ƈ",d:"ԃ",e:"ҽ",f:"ϝ",g:"ɠ",h:"ԋ",i:"ι",j:"ʝ",k:"ƙ",l:"ʅ",m:"ɱ",n:"ɳ",o:"σ",p:"ρ",q:"ϙ",r:"ɾ",s:"ʂ",t:"ƚ",u:"υ",v:"ʋ",w:"ɯ",x:"x",y:"ყ",z:"ȥ",A:"A",B:"B",C:"C",D:"D",E:"E",F:"F",G:"G",H:"H",I:"I",J:"J",K:"K",L:"L",M:"M",N:"N",O:"O",P:"P",Q:"Q",R:"R",S:"S",T:"T",U:"U",V:"V",W:"W",X:"X",Y:"Y",Z:"Z"},B={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"₳",b:"฿",c:"₵",d:"Đ",e:"Ɇ",f:"₣",g:"₲",h:"Ⱨ",i:"ł",j:"J",k:"₭",l:"Ⱡ",m:"₥",n:"₦",o:"Ø",p:"₱",q:"Q",r:"Ɽ",s:"₴",t:"₮",u:"Ʉ",v:"V",w:"₩",x:"Ӿ",y:"Ɏ",z:"Ⱬ",A:"₳",B:"฿",C:"₵",D:"Đ",E:"Ɇ",F:"₣",G:"₲",H:"Ⱨ",I:"ł",J:"J",K:"₭",L:"Ⱡ",M:"₥",N:"₦",O:"Ø",P:"₱",Q:"Q",R:"Ɽ",S:"₴",T:"₮",U:"Ʉ",V:"V",W:"₩",X:"Ӿ",Y:"Ɏ",Z:"Ⱬ"},A={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"å",b:"ß",c:"¢",d:"Ð",e:"ê",f:"£",g:"g",h:"h",i:"ï",j:"j",k:"k",l:"l",m:"m",n:"ñ",o:"ð",p:"þ",q:"q",r:"r",s:"§",t:"†",u:"µ",v:"v",w:"w",x:"x",y:"¥",z:"z",A:"Ä",B:"ß",C:"Ç",D:"Ð",E:"È",F:"£",G:"G",H:"H",I:"Ì",J:"J",K:"K",L:"L",M:"M",N:"ñ",O:"Ö",P:"þ",Q:"Q",R:"R",S:"§",T:"†",U:"Ú",V:"V",W:"W",X:"×",Y:"¥",Z:"Z"},T={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"α",b:"в",c:"¢",d:"∂",e:"є",f:"ƒ",g:"g",h:"н",i:"ι",j:"נ",k:"к",l:"ℓ",m:"м",n:"η",o:"σ",p:"ρ",q:"q",r:"я",s:"ѕ",t:"т",u:"υ",v:"ν",w:"ω",x:"χ",y:"у",z:"z",A:"α",B:"в",C:"¢",D:"∂",E:"є",F:"ƒ",G:"g",H:"н",I:"ι",J:"נ",K:"к",L:"ℓ",M:"м",N:"η",O:"σ",P:"ρ",Q:"q",R:"я",S:"ѕ",T:"т",U:"υ",V:"ν",W:"ω",X:"χ",Y:"у",Z:"z"},L={0:"⊘",1:"𝟙",2:"ϩ",3:"Ӡ",4:"५",5:"Ƽ",6:"Ϭ",7:"7",8:"𝟠",9:"९",a:"ą",b:"ҍ",c:"ç",d:"ժ",e:"ҽ",f:"ƒ",g:"ց",h:"հ",i:"ì",j:"ʝ",k:"ҟ",l:"Ӏ",m:"ʍ",n:"ղ",o:"օ",p:"ք",q:"զ",r:"ɾ",s:"ʂ",t:"է",u:"մ",v:"ѵ",w:"ա",x:"×",y:"վ",z:"Հ",A:"Ⱥ",B:"β",C:"↻",D:"Ꭰ",E:"Ɛ",F:"Ƒ",G:"Ɠ",H:"Ƕ",I:"į",J:"ل",K:"Ҡ",L:"Ꝉ",M:"Ɱ",N:"ហ",O:"ට",P:"φ",Q:"Ҩ",R:"འ",S:"Ϛ",T:"Ͳ",U:"Ա",V:"Ỽ",W:"చ",X:"ჯ",Y:"Ӌ",Z:"ɀ"},q={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"Λ",b:"B",c:"ᄃ",d:"D",e:"Σ",f:"F",g:"G",h:"Ή",i:"I",j:"J",k:"K",l:"ᄂ",m:"M",n:"П",o:"Ө",p:"P",q:"Q",r:"Я",s:"Ƨ",t:"Ƭ",u:"Ц",v:"V",w:"Щ",x:"X",y:"Y",z:"Z",A:"Λ",B:"B",C:"ᄃ",D:"D",E:"Σ",F:"F",G:"G",H:"Ή",I:"I",J:"J",K:"K",L:"ᄂ",M:"M",N:"П",O:"Ө",P:"P",Q:"Q",R:"Я",S:"Ƨ",T:"Ƭ",U:"Ц",V:"V",W:"Щ",X:"X",Y:"Y",Z:"Z"},F={0:"₀",1:"₁",2:"₂",3:"₃",4:"₄",5:"₅",6:"₆",7:"₇",8:"₈",9:"₉",a:"ₐ",b:"b",c:"c",d:"d",e:"ₑ",f:"f",g:"g",h:"ₕ",i:"ᵢ",j:"ⱼ",k:"ₖ",l:"ₗ",m:"ₘ",n:"ₙ",o:"ₒ",p:"ₚ",q:"q",r:"ᵣ",s:"ₛ",t:"ₜ",u:"ᵤ",v:"ᵥ",w:"w",x:"ₓ",y:"y",z:"z",A:"ₐ",B:"B",C:"C",D:"D",E:"ₑ",F:"F",G:"G",H:"ₕ",I:"ᵢ",J:"ⱼ",K:"ₖ",L:"ₗ",M:"ₘ",N:"ₙ",O:"ₒ",P:"ₚ",Q:"Q",R:"ᵣ",S:"ₛ",T:"ₜ",U:"ᵤ",V:"ᵥ",W:"W",X:"ₓ",Y:"Y",Z:"Z","+":"₊","-":"₋","=":"₌","(":"₍",")":"₎"},D={0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹",a:"ᵃ",b:"ᵇ",c:"ᶜ",d:"ᵈ",e:"ᵉ",f:"ᶠ",g:"ᵍ",h:"ʰ",i:"ⁱ",j:"ʲ",k:"ᵏ",l:"ˡ",m:"ᵐ",n:"ⁿ",o:"ᵒ",p:"ᵖ",q:"q",r:"ʳ",s:"ˢ",t:"ᵗ",u:"ᵘ",v:"ᵛ",w:"ʷ",x:"ˣ",y:"ʸ",z:"ᶻ",A:"ᴬ",B:"ᴮ",C:"ᶜ",D:"ᴰ",E:"ᴱ",F:"ᶠ",G:"ᴳ",H:"ᴴ",I:"ᴵ",J:"ᴶ",K:"ᴷ",L:"ᴸ",M:"ᴹ",N:"ᴺ",O:"ᴼ",P:"ᴾ",Q:"Q",R:"ᴿ",S:"ˢ",T:"ᵀ",U:"ᵁ",V:"ⱽ",W:"ᵂ",X:"ˣ",Y:"ʸ",Z:"ᶻ","+":"⁺","-":"⁻","=":"⁼","(":"⁽",")":"⁾"},I={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"ค",b:"๒",c:"ς",d:"๔",e:"є",f:"Ŧ",g:"ﻮ",h:"ђ",i:"เ",j:"ן",k:"к",l:"ɭ",m:"๓",n:"ภ",o:"๏",p:"ק",q:"ợ",r:"г",s:"ร",t:"Շ",u:"ย",v:"ש",w:"ฬ",x:"א",y:"ץ",z:"չ",A:"ค",B:"๒",C:"ς",D:"๔",E:"є",F:"Ŧ",G:"ﻮ",H:"ђ",I:"เ",J:"ן",K:"к",L:"ɭ",M:"๓",N:"ภ",O:"๏",P:"ק",Q:"ợ",R:"г",S:"ร",T:"Շ",U:"ย",V:"ש",W:"ฬ",X:"א",Y:"ץ",Z:"չ"},Q={0:"𝟘",1:"𝟙",2:"𝟚",3:"𝟛",4:"𝟜",5:"𝟝",6:"𝟞",7:"𝟟",8:"𝟠",9:"𝟡",a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",i:"𝕚",j:"𝕛",k:"𝕜",l:"𝕝",m:"𝕞",n:"𝕟",o:"𝕠",p:"𝕡",q:"𝕢",r:"𝕣",s:"𝕤",t:"𝕥",u:"𝕦",v:"𝕧",w:"𝕨",x:"𝕩",y:"𝕪",z:"𝕫",A:"𝔸",B:"𝔹",C:"ℂ",D:"𝔻",E:"𝔼",F:"𝔽",G:"𝔾",H:"ℍ",I:"𝕀",J:"𝕁",K:"𝕂",L:"𝕃",M:"𝕄",N:"ℕ",O:"𝕆",P:"ℙ",Q:"ℚ",R:"ℝ",S:"𝕊",T:"𝕋",U:"𝕌",V:"𝕍",W:"𝕎",X:"𝕏",Y:"𝕐",Z:"ℤ"},z={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"𝖆",b:"𝖇",c:"𝖈",d:"𝖉",e:"𝖊",f:"𝖋",g:"𝖌",h:"𝖍",i:"𝖎",j:"𝖏",k:"𝖐",l:"𝖑",m:"𝖒",n:"𝖓",o:"𝖔",p:"𝖕",q:"𝖖",r:"𝖗",s:"𝖘",t:"𝖙",u:"𝖚",v:"𝖛",w:"𝖜",x:"𝖝",y:"𝖞",z:"𝖟",A:"𝕬",B:"𝕭",C:"𝕮",D:"𝕯",E:"𝕰",F:"𝕱",G:"𝕲",H:"𝕳",I:"𝕴",J:"𝕵",K:"𝕶",L:"𝕷",M:"𝕸",N:"𝕹",O:"𝕺",P:"𝕻",Q:"𝕼",R:"𝕽",S:"𝕾",T:"𝕿",U:"𝖀",V:"𝖁",W:"𝖂",X:"𝖃",Y:"𝖄",Z:"𝖅"},H={q:"🆀",w:"🆆",e:"🅴",r:"🆁",t:"🆃",y:"🆈",u:"🆄",i:"🅸",o:"🅾",p:"🅿",a:"🅰",s:"🆂",d:"🅳",f:"🅵",g:"🅶",h:"🅷",j:"🅹",k:"🅺",l:"🅻",z:"🆉",x:"🆇",c:"🅲",v:"🆅",b:"🅱",n:"🅽",m:"🅼"},k={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"𝓪",b:"𝓫",c:"𝓬",d:"𝓭",e:"𝓮",f:"𝓯",g:"𝓰",h:"𝓱",i:"𝓲",j:"𝓳",k:"𝓴",l:"𝓵",m:"𝓶",n:"𝓷",o:"𝓸",p:"𝓹",q:"𝓺",r:"𝓻",s:"𝓼",t:"𝓽",u:"𝓾",v:"𝓿",w:"𝔀",x:"𝔁",y:"𝔂",z:"𝔃",A:"𝓐",B:"𝓑",C:"𝓒",D:"𝓓",E:"𝓔",F:"𝓕",G:"𝓖",H:"𝓗",I:"𝓘",J:"𝓙",K:"𝓚",L:"𝓛",M:"𝓜",N:"𝓝",O:"𝓞",P:"𝓟",Q:"𝓠",R:"𝓡",S:"𝓢",T:"𝓣",U:"𝓤",V:"𝓥",W:"𝓦",X:"𝓧",Y:"𝓨",Z:"𝓩"},G={a:"𝔞",b:"𝔟",c:"𝔠",d:"𝔡",e:"𝔢",f:"𝔣",g:"𝔤",h:"𝔥",i:"𝔦",j:"𝔧",k:"𝔨",l:"𝔩",m:"𝔪",n:"𝔫",o:"𝔬",p:"𝔭",q:"𝔮",r:"𝔯",s:"𝔰",t:"𝔱",u:"𝔲",v:"𝔳",w:"𝔴",x:"𝔵",y:"𝔶",z:"𝔷",A:"𝔄",B:"𝔅",C:"ℭ",D:"𝔇",E:"𝔈",F:"𝔉",G:"𝔊",H:"ℌ",I:"ℑ",J:"𝔍",K:"𝔎",L:"𝔏",M:"𝔐",N:"𝔑",O:"𝔒",P:"𝔓",Q:"𝔔",R:"ℜ",S:"𝔖",T:"𝔗",U:"𝔘",V:"𝔙",W:"𝔚",X:"𝔛",Y:"𝔜",Z:"ℨ"},O={"`":"`",1:"１",2:"２",3:"３",4:"４",5:"５",6:"６",7:"７",8:"８",9:"９",0:"０","-":"－","=":"＝","~":"~","!":"！","@":"＠","#":"＃",$:"＄","%":"％","^":"^","&":"＆","*":"＊","(":"（",")":"）",_:"_","+":"＋",q:"ｑ",w:"ｗ",e:"ｅ",r:"ｒ",t:"ｔ",y:"ｙ",u:"ｕ",i:"ｉ",o:"ｏ",p:"ｐ","[":"[","]":"]","\\":"\\",Q:"Ｑ",W:"Ｗ",E:"Ｅ",R:"Ｒ",T:"Ｔ",Y:"Ｙ",U:"Ｕ",I:"Ｉ",O:"Ｏ",P:"Ｐ","{":"{","}":"}","|":"|",a:"ａ",s:"ｓ",d:"ｄ",f:"ｆ",g:"ｇ",h:"ｈ",j:"ｊ",k:"ｋ",l:"ｌ",";":"；","'":"＇",A:"Ａ",S:"Ｓ",D:"Ｄ",F:"Ｆ",G:"Ｇ",H:"Ｈ",J:"Ｊ",K:"Ｋ",L:"Ｌ",":":"：",'"':'"',z:"ｚ",x:"ｘ",c:"ｃ",v:"ｖ",b:"ｂ",n:"ｎ",m:"ｍ",",":"，",".":"．","/":"／",Z:"Ｚ",X:"Ｘ",C:"Ｃ",V:"Ｖ",B:"Ｂ",N:"Ｎ",M:"Ｍ","<":"<",">":">","?":"？"};function Y(t){if(""===t.trim())return"";K=-1;var n,i=(n=Math.floor(2*Math.random())+1,it([N,_,$,tt])(n));return i+"  🎀  "+t.split(/([!?.]+)/gi).map(E).join("")+"  🎀  "+esrever.reverse(i)}function E(t){return t.split(/([\s,]+)/gi).map(J).join("")}function J(t){return""===t||/[[!?.\s,]+]/gi.test(t)?t:nt(t=function(t){return t.replace(":)",it(W[":)"])).replace("(:",it(W[":)"])).replace("^^",it(W["^^"])).replace(":P",it(W[":p"])).replace(":p",it(W[":p"])).replace(":D",it(W[":D"])).replace("<3",it(W["<3"])).replace("(y)",it(W["(y)"])).replace("(Y)",it(W["(y)"]))}(t=function(t){return t.split("").map(function(t){return"!"===t?it(["❣","❢"]):"?"===t?it(["¿","?"]):'"'===t?function(){2==++K&&(K=0);return V[K]}():t}).join("")}(t=t.split("").map(function(t){return"o"===t.toLowerCase()||"0"===t?it(P):t}).join(""))))}var K=-1,V=["❝","❞"];var W={":)":["٩(˘◡˘)۶","(•◡•)","(ɔ◔‿◔)ɔ","❀◕‿◕❀","(｡◕‿◕｡)","●‿●","◕‿◕","😍","ツ","(✿ヘᴥヘ)","🌘‿🌘","(づ｡◕‿‿◕｡)づ","(/◔◡◔)/","s(^‿^)-b","(人◕‿◕)","(✿╹◡╹)","◔◡◔"],"^^":["(^▽^)","(✿^▽^)","ᵔ⌣ᵔ","ᵔᴥᵔ","(≧◡≦)","^ㅅ^","^ㅂ^","(⌒‿⌒)","◠◡◠","⁀‿⁀",""],":p":[":Þ",""],":D":["(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧","(✿◕ᗜ◕)━♫.*･｡ﾟ","ᕕ(ᐛ)ᕗ"],"<3":["♡","❤","♥","❥","💘","💙","💗","💖","💕","💓","💞","💝","💟"],"(y)":["👍","👌"]},P=["❁","🌺","❀","💮","🏵","🌸","☯","😍","♡","🍩","🍬","💙","🌞","💍","🍪","❤","💗","🍑","💞"],Z=["🍬","🍭","🍒","🍎","🍉","🍇","🍓","🍌","🍑","🍰","🎂","🍩","🍪","🍧","🍦","🍫","🍡"],X=["⚛","🌌","🌠","*",":","｡","･ﾟ","✧","✮","★","✩","⋆",".","°","`","✴","｡","✴","⋆","✳","✶","✷","❈"],R=["🐯","🐎","🐖","🐷","🐏","🐑","🐐","🐫","🐘","🐭","🐁","🐀","🐹","🐰","🐇","🐿","🐻","🐨","🐼","🐾","🐔","🐓","🐣","🐤","🐥","🐦","🐧","🕊","🐸","🐢","🐳","🐋","🐬","🐟","🐠","🐡","🐙","🐚","🐌","🐞"],U=["•?((¯°·._.• ","ıllıllı ","¸,ø¤º°`°º¤ø,¸¸,ø¤º° ","°°°·.°·..·°¯°·._.· ","•´¯`•. ","×º°”˜`”°º× ","•]••´º´•» ","]|I{•------» ","§.•´¨'°÷•..× ","•°¯`•• ","(¯`·.¸¸.·´¯`·.¸¸.-> ","*´¯`*.¸¸.*´¯`* ","(¯`·.¸¸.-> °º ","°·.¸.·°¯°·.¸.·°¯°·.¸.-> ","•._.••´¯``•.¸¸.•` ","¸„.-•~¹°”ˆ˜¨ ","(¯´•._.• ","••¤(`×","•´¯`•» ","`•.,¸¸,.•´¯ ","¸,ø¤º°`°º¤ø,¸ ",".o0×X×0o. ",",-*'^'~*-.,_,.-*~ ","`•.¸¸.•´´¯`••._.• ","—(••÷","¤¸¸.•´¯`•¸¸.•..>> ","••.•´¯`•.•• ",".•°¤*(¯`★´¯)*¤° ","๑۞๑,¸¸,ø¤º°`°๑۩ ","-漫~*'¨¯¨'*·舞~ ","★·.·´¯`·.·★ ","▁ ▂ ▄ ▅ ▆ ▇ █ ","▀▄▀▄▀▄ ","▌│█║▌║▌║ "];function N(t){return new Array(t+1).join("0").split("").map(function(t){return it(Z)}).join(" ⋆ ")}function _(t){return new Array(t+1).join("0").split("").map(function(){return it(X)}).join("")}function $(t){return new Array(t+1).join("0").split("").map(function(t){return it(R)}).join(" ⋆ ")}function tt(t){return it(U)}function nt(t){for(var n={0:"𝟢",1:"𝟣",2:"𝟤",3:"𝟥",4:"𝟦",5:"𝟧",6:"𝟨",7:"𝟩",8:"𝟪",9:"𝟫",a:"𝒶",b:"𝒷",c:"𝒸",d:"𝒹",e:"𝑒",f:"𝒻",g:"𝑔",h:"𝒽",i:"𝒾",j:"𝒿",k:"𝓀",l:"𝓁",m:"𝓂",n:"𝓃",o:"𝑜",p:"𝓅",q:"𝓆",r:"𝓇",s:"𝓈",t:"𝓉",u:"𝓊",v:"𝓋",w:"𝓌",x:"𝓍",y:"𝓎",z:"𝓏",A:"𝒜",B:"𝐵",C:"𝒞",D:"𝒟",E:"𝐸",F:"𝐹",G:"𝒢",H:"𝐻",I:"𝐼",J:"𝒥",K:"𝒦",L:"𝐿",M:"𝑀",N:"𝒩",O:"𝒪",P:"𝒫",Q:"𝒬",R:"𝑅",S:"𝒮",T:"𝒯",U:"𝒰",V:"𝒱",W:"𝒲",X:"𝒳",Y:"𝒴",Z:"𝒵"},i=t.split(""),r=0;r<i.length;r++)n[i[r].toLowerCase()]&&(i[r]=n[i[r]]);return t=i.join("")}function it(t){return t[Math.floor(Math.random()*t.length)]}function rt(t){return""===t.trim()?"":at(2)+"  "+ot(t)+"  "+at(2)}function ot(t){t=t.split("");for(var n=0;n<t.length;n++)t[n]=et(t[n]);return t.join("")}function et(t){var n={"&":"⅋","%":["⅍","℀","℁","℆","℅"],0:["０","Ѳ","ʘ"],1:["➀","❶","１"],2:["２","❷","➁"],3:["３","❸","➂"],4:["４","❹","➃"],5:["❺","➄","５"],6:["６","❻","➅"],7:["７","❼","➆"],8:["８","➇","❽"],9:["➈","❾","９"],"<":["≼","≺","≪","☾","≾","⋜","⋞","⋐","⊂","⊏","⊑","《","＜","❮","❰","⫷"],">":"☽≫≻≽≿⋝⋟⋑⊃⊐⊒⫸》＞❯❱","[":"【〖〘〚［","]":"】〗〙〛］","*":"✨✩✪✫✬✭✮✯✰✦✱✲✳✴✵✶✷֍֎✸✹✺✻✼✽✾✿❀❁❂❃❄★☆＊",a:["Ⓐ","ⓐ","α","Ａ","ａ","ᗩ","卂","Δ","ค","α","ά","Ã","𝔞","𝓪","𝒶","𝓐","𝐀","𝐚","𝔸","𝕒","ᵃ"],b:["Ⓑ","ⓑ","в","Ｂ","乃","ｂ","ᗷ","β","๒","в","в","β","𝔟","𝓫","𝒷","𝓑","𝐁","𝐛","𝔹","𝕓","ᵇ"],c:["Ⓒ","ⓒ","匚","¢","Ｃ","ｃ","ᑕ","Ć","ς","c","ς","Č","℃","𝔠","𝓬","𝒸","𝓒","𝐂","𝐜","ℂ","𝕔","ᶜ"],d:["Ⓓ","ⓓ","∂","Ｄ","ｄ","ᗪ","Đ","๔","∂","đ","Ď","𝔡","𝓭","𝒹","𝓓","𝐃","ᗪ","𝐝","𝔻","𝕕","ᵈ"],e:["Ⓔ","乇","ⓔ","є","Ｅ","ｅ","ᗴ","€","є","ε","έ","Ẹ","𝔢","𝒆","𝑒","𝓔","𝐄","𝐞","𝔼","𝕖","ᵉ"],f:["Ⓕ","ⓕ","ƒ","Ｆ","ｆ","千","ᖴ","ℱ","Ŧ","ғ","ғ","Ƒ","𝔣","𝒇","𝒻","𝓕","𝐅","𝐟","𝔽","𝕗","ᶠ"],g:["Ⓖ","ⓖ","ق","g","Ｇ","ｇ","Ǥ","Ꮆ","ﻮ","g","ģ","Ğ","𝔤","𝓰","𝑔","𝓖","𝐆","𝐠","𝔾","𝕘","ᵍ","Ꮆ"],h:["Ⓗ","卄","ⓗ","н","Ｈ","ｈ","ᕼ","Ħ","ђ","н","ħ","Ĥ","𝔥","𝓱","𝒽","𝓗","𝐇","𝐡","ℍ","𝕙","ʰ"],i:["Ⓘ","ⓘ","ι","Ｉ","ｉ","Ꭵ","丨","Ɨ","เ","ι","ί","Į","𝔦","𝓲","𝒾","𝓘","𝐈","𝐢","𝕀","𝕚","ᶤ"],j:["Ⓙ","ⓙ","נ","Ｊ","ڶ","ｊ","ᒎ","Ĵ","ן","נ","ј","Ĵ","𝔧","𝓳","𝒿","𝓙","𝐉","𝐣","𝕁","𝕛","ʲ"],k:["Ⓚ","ⓚ","к","Ｋ","ｋ","ᛕ","Ҝ","к","к","ķ","Ќ","𝔨","𝓴","𝓀","𝓚","𝐊","𝐤","𝕂","𝕜","ᵏ","Ҝ"],l:["Ⓛ","ⓛ","ℓ","ㄥ","Ｌ","ｌ","ᒪ","Ł","l","ℓ","Ļ","Ĺ","𝔩","𝓵","𝓁","𝓛","𝐋","𝐥","𝕃","𝕝","ˡ"],m:["Ⓜ","ⓜ","м","Ｍ","ｍ","ᗰ","Μ","๓","м","м","ϻ","𝔪","𝓶","𝓂","𝓜","𝐌","𝐦","𝕄","𝕞","ᵐ","爪"],n:["Ⓝ","几","ⓝ","η","Ｎ","ｎ","ᑎ","Ň","ภ","η","ή","Ň","𝔫","𝓷","𝓃","𝓝","𝐍","𝐧","ℕ","𝕟","ᶰ"],o:["Ⓞ","ㄖ","ⓞ","σ","Ｏ","ｏ","ᗝ","Ø","๏","σ","ό","Ỗ","𝔬","𝓸","𝑜","𝓞","𝐎","𝐨","𝕆","𝕠","ᵒ"],p:["Ⓟ","ⓟ","ρ","Ｐ","ｐ","卩","ᑭ","Ƥ","ק","ρ","ρ","Ƥ","𝔭","𝓹","𝓅","𝓟","𝐏","𝐩","ℙ","𝕡","ᵖ"],q:["Ⓠ","ⓠ","q","Ｑ","ｑ","Ɋ","Ω","ợ","q","q","Ǫ","𝔮","𝓺","𝓆","𝓠","𝐐","𝐪","ℚ","𝕢","ᵠ"],r:["Ⓡ","ⓡ","я","尺","Ｒ","ｒ","ᖇ","Ř","г","я","ŕ","Ř","𝔯","𝓻","𝓇","𝓡","𝐑","𝐫","ℝ","𝕣","ʳ"],s:["Ⓢ","ⓢ","ѕ","Ｓ","丂","ｓ","ᔕ","Ş","ร","s","ş","Ŝ","𝔰","𝓼","𝓈","𝓢","𝐒","𝐬","𝕊","𝕤","ˢ"],t:["Ⓣ","ⓣ","т","Ｔ","ｔ","丅","Ŧ","t","т","ţ","Ť","𝔱","𝓽","𝓉","𝓣","𝐓","𝐭","𝕋","𝕥","ᵗ"],u:["Ⓤ","ⓤ","υ","Ｕ","ｕ","ᑌ","Ữ","ย","υ","ù","Ǘ","𝔲","𝓾","𝓊","𝓤","𝐔","𝐮","𝕌","𝕦","ᵘ"],v:["Ⓥ","ⓥ","ν","Ｖ","ｖ","ᐯ","V","ש","v","ν","Ѷ","𝔳","𝓿","𝓋","𝓥","𝐕","𝐯","𝕍","𝕧","ᵛ"],w:["Ⓦ","ⓦ","ω","Ｗ","ｗ","ᗯ","Ŵ","ฬ","ω","ώ","Ŵ","𝔴","𝔀","𝓌","𝓦","𝐖","𝐰","𝕎","𝕨","ʷ","山"],x:["Ⓧ","ⓧ","χ","Ｘ","乂","ｘ","᙭","Ж","א","x","x","Ж","𝔵","𝔁","𝓍","𝓧","𝐗","𝐱","𝕏","𝕩","ˣ"],y:["Ⓨ","ㄚ","ⓨ","у","Ｙ","ｙ","Ƴ","¥","ץ","ү","ч","Ў","𝔶","𝔂","𝓎","𝓨","𝐘","𝐲","𝕐","𝕪","ʸ"],z:["Ⓩ","ⓩ","z","乙","Ｚ","ｚ","Ƶ","Ž","z","z","ž","Ż","𝔷","𝔃","𝓏","𝓩","𝐙","𝐳","ℤ","𝕫","ᶻ"]};return n[t=t.toLowerCase()]?it(n[t]):t}function it(t){return t[Math.floor(Math.random()*t.length)]}function at(t){for(var n=["🐙","🐉","🐊","🐒","🐝","🐜","🐚","🐲","🐳","🐸","👑","👹","👺","👤","💲","💣","💙","💚","💛","💜","💝","💗","💘","💞","💔","💥","🐯","🐼","🐻","🐺","👌","🐍","🐧","🐟","🐠","🐨","🎯","🏆","🎁","🎀","🎉","🎈","🍮","🍭","🍬","🍫","🍪","🍧","🌷","🍓","😺","😾","✎","😎","😝","😂","😈","😡","😲","😳","🍔","🍟","🍩","🎃","🎄","🎅","🐣","🐤","👍","👊","👻","👽","👮","💎","💋","👣","💀","💢","🔥","♔","♕","♖","♗","♘","♙","♚","♛","♜","♝","♞","♟","♠","♡","♢","♣","♤","♥","♦","♧","♨","♩","♪","♬","★","☆","☺","☹","☯","☮","☢","☠","☟","☞","☝","☜","✌","✋","✊","⛵","ൠ","✌","ඏ"],i=[],r=0;r<t;r++)i.push(it(n));return i.join("")}!function(t){var n="object"==typeof exports&&exports,i="object"==typeof module&&module&&module.exports==n&&module,r="object"==typeof global&&global;(r.global===r||r.window===r)&&(t=r);var o=/(<%= allExceptCombiningMarks %>)(<%= combiningMarks %>+)/g,e=/([\uD800-\uDBFF])([\uDC00-\uDFFF])/g,a=function(t){t=t.replace(o,function(t,n,i){return a(i)+n}).replace(e,"$2$1");for(var n="",i=t.length;i--;)n+=t.charAt(i);return n},s={version:"<%= version %>",reverse:a};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)define(function(){return s});else if(n&&!n.nodeType)if(i)i.exports=s;else for(var c in s)s.hasOwnProperty(c)&&(n[c]=s[c]);else t.esrever=s}(this)}();
