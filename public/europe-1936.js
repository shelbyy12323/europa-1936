const $=s=>document.querySelector(s),R=Math.random,PX=(o,a)=>[(o+10)*14.5,(71-a)*22];
const VS="e1 9.8 52.5 e2 10 49.5 e3 13 47.7 e4 13.8 50.8 e5 15 51 e6 14.2 53.9 e7 9.5 54.8 e8 11 53.8 f1 -4.7 48.4 f2 -1.4 49.7 f3 2 51 f4 4 49.9 f5 5.8 49.5 f6 8 49 f7 7.6 47.6 f8 6.8 46.4 f9 7 44.2 f10 5 43.3 f11 3 42.5 f12 -1.8 43.4 f13 -1.2 46 f14 -2.5 47.3 h1 -.3 48.2 h2 2.4 48.6 h3 4.3 48.4 g3 4.9 47 j1 3.5 44.5 n1 4.6 53.3 n2 7 53.3 n3 6.1 50.7 s1 9.6 47.5 s2 10.4 46.6 i1 8.5 45.9 i2 13.6 46.4 i3 12.3 44.9 i4 10 44 i5 14 42.5 i6 11.5 42 i7 18.5 40.2 i8 15.7 38 a1 16.5 48 c1 15.5 50.8 c2 16.8 50.2 c3 18.5 49.6 c4 14.5 48.6 c5 18.3 48.8 p0 18.5 54.5 p1 17 53 p2 18 50.5 p4 18.5 52.8 p5 23.5 52 p6 21 50.7 p8 24 50.5 p9 22.8 49.2 p10 19.5 49.4 q1 19.5 54.4 q2 22.8 54.3 q3 22.8 53.3 q4 19.7 53.2 r1 26 55.5 r2 32 55 r3 30 52 r4 36 50 r5 36 47 r6 30 45.5 r7 26.5 48.2 r8 28 60 r9 44 56 r10 44 47 b1 22 47.5 b2 19 45.5 b3 16.5 46.5 b4 28.8 44 b5 22.5 44 k1 .5 40 k2 -3 40.5 k3 -9 43 k5 -5.5 36 k6 0 38.5 m1 -9 42 m2 -9.5 38.7 m3 -8.9 37 m4 -7.4 37.2 m5 -7 39.5 m6 -6.8 41.9 u1 -5.5 50 u2 1.5 51.2 u3 1.6 52.9 u4 0 53.6 u5 -2 55.8 u6 -3 54.9 u7 -3.5 53.4 u8 -4.5 52 u9 -1.8 57.5 u10 -5.5 58.5 u11 -6.2 56 u12 -5 55 z1 -10.4 51.6 z2 -6 52.2 z3 -6.2 55.2 z4 -8 55.2 z5 -10 54 dk1 8.1 55.5 dk2 8.2 57.1 dk3 10.5 57.7 dk4 10.3 56.2 dk5 10.8 54.9 no1 5.5 58.8 no2 11 59.3 no3 12.3 61.5 no4 14 65 no5 18 67.8 no6 24 68.5 no9 5 62 no10 11 66 no11 17 69.5 no12 28.5 70.8 sw1 24.5 65.8 sw2 21 63 sw3 17.3 61 sw4 17 58 sw5 14.5 56 sw6 12.8 56 sw7 11.7 58.5 fz1 22 63.5 fz2 21.5 61 fz3 23 59.9 fz4 28.5 60.5 fi1 30 69.5 fi2 30 63 ar1 46 64 ar2 42 68.5 la1 26.6 56.8 la2 21 56.2 la3 27.2 58.3 la4 24.5 57.5 la5 21.2 57.5 es1 24 59.3 es2 27.7 59.4 y1 22.8 41.7 y2 20.6 42 y3 19.3 42.4 y4 16.3 43.5 y5 13.7 45.3 bu1 28.3 42 bu2 26 41.3 al1 19.4 40.3 al2 20.9 39.8 gr1 20.2 39.5 gr2 21.5 36.8 gr3 24 37.8 gr4 25.5 40.7 tu1 26.3 40.2 tu2 29 41.2 tu3 26.3 39.2 tu4 27 37 tu5 29 36.5 tu6 36 36.2 tu7 42 37 tu8 44 39.5 tu9 42 41.2 tu10 35 42 tu11 31 41.2 ca1 37.5 45 ca2 40 43.5";
const V={};VS.split(" ").reduce((a,x,i,A)=>{if(i%3==0)V[x]=[+A[i+1],+A[i+2]]},0);
const PD="Англия|UK|u1 u2 u3 u4 u5 u6 u7 u8;Шотландия|UK|u5 u9 u10 u11 u12 u6;Ирландия|IRL|z1 z2 z3 z4 z5;Нормандия|FRA|f1 f2 f3 h2 h1 f14;Иль-де-Франс|FRA|f3 f4 f5 h3 h2;Эльзас-Лотарингия|FRA|f5 f6 f7 g3 h3;Прованс|FRA|g3 f7 f8 f9 f10 f11 j1;Аквитания|FRA|f14 h1 h2 h3 g3 j1 f11 f12 f13;Бенилюкс|BEN|f3 n1 n2 n3 f5 f4;Рейнланд|GER|f6 f5 n3 n2 e1 e2;Шлезвиг и Ганновер|GER|n2 e7 dk5 e8 e1;Бавария|GER|f6 e2 e4 e3 s1 f7;Бранденбург|GER|e8 e1 e2 e4 e5 e6;Силезия|GER|e5 e6 p1 p2 c2 c1;Восточная Пруссия|GER|q1 q2 q3 q4;Дания|DEN|e7 dk1 dk2 dk3 dk4 dk5;Швейцария|SWI|f7 s1 s2 i1 f8;Поморье|POL|e6 p0 q1 q4 p4 p1;Центральная Польша|POL|p1 p4 q4 q3 p5 p6 p2;Малопольша|POL|p2 p6 p5 p8 p9 p10 c3;Север Италии|ITA|f9 f8 i1 s2 i2 y5 i3 i4;Центр Италии|ITA|i4 i3 i5 i6;Юг Италии|ITA|i6 i5 i7 i8;Австрия|AUT|e3 s1 s2 i2 b3 a1 c4;Чехословакия|CZE|e4 c1 c2 c3 c5 a1 c4 e3;Венгрия|HUN|a1 c5 p10 p9 b1 b2 b3;Румыния|ROM|p9 r7 r6 b4 b5 b1;Югославия|YUG|i2 b3 b2 b5 y1 y2 y3 y4 y5;Албания|ALB|y2 y3 al1 al2;Греция|GRE|bu2 y1 y2 al2 gr1 gr2 gr3 gr4;Болгария|BUL|b5 b4 bu1 bu2 y1;Фракия|TUR|bu1 bu2 gr4 tu1 tu2;Анатолия|TUR|tu2 tu1 tu3 tu4 tu5 tu6 tu7 tu8 tu9 tu10 tu11;Литва|LIT|q1 q2 r1 la1 la2;Латвия|LAT|la2 la1 la3 la4 la5;Эстония|EST|la3 la4 es1 es2;Белоруссия|SOV|q2 r1 r2 r3 p5 q3;Украина|SOV|p8 p5 r3 r4 r5 r6 r7 p9;Москва|SOV|r1 la1 la3 es2 r8 r9 r4 r3 r2;Север России|SOV|r8 r9 ar1 ar2 fi1 fi2 fz4;Юг СССР|SOV|r4 r9 r10 r5;Кавказ|SOV|r5 ca1 ca2 tu9 tu8 r10;Север Испании|ESP|f12 f11 k1 k2 k3;Юг Испании|ESP|k3 k2 k1 k6 k5 m4 m5 m6 m1;Португалия|POR|m1 m6 m5 m4 m3 m2;Норвегия|NOR|no1 no9 no10 no11 no12 no6 no5 no4 no3 no2;Швеция|SWE|no2 no3 no4 no5 no6 sw1 sw2 sw3 sw4 sw5 sw6 sw7;Финляндия|FIN|sw1 no6 no12 fi1 fi2 fz4 fz3 fz2 fz1";
const LINE={Рейн:"f7 f6 e2? n3 n2",Висла:"p10 p6 p4 q4 p0",Днепр:"r3 r5 r6",Дунай:"c4 a1 b3 b2 b5 b4"};
const RIV=[[[7.6,47.6],[8,49],[8.3,50],[6.5,51.5],[4.5,52]],[[19.5,49.5],[21,50.3],[21.2,52],[18.8,53.3],[18.7,54.4]],[[31,53],[32,50],[34,48],[32.5,46.6]],[[10,48.6],[16,48.2],[19,47.5],[19.1,45.7],[22,44.5],[28.8,44.2]]],MTN=[[[6.5,44],[7.5,46],[10,46.5],[13,46.8],[15,47]],[[18.5,49.4],[21,49.3],[23,48.4],[25,47.5],[26.5,46]],[[-1.8,43.2],[0,42.7],[3,42.5]]],CIT=[["Лондон","Англия",-.1,51.5],["Париж","Иль-де-Франс",2.3,48.9],["Берлин","Бранденбург",13.4,52.5],["Варшава","Центральная Польша",21,52.2],["Москва","Москва",37.6,55.8],["Рим","Центр Италии",12.5,41.9],["Прага","Чехословакия",14.4,50.1],["Вена","Австрия",16.4,48.2],["Мадрид","Север Испании",-3.7,40.4],["Лиссабон","Португалия",-9.1,38.7],["Дублин","Ирландия",-6.3,53.3],["Хельсинки","Финляндия",24.9,60.2],["Стокгольм","Швеция",18,59.3],["Осло","Норвегия",10.7,59.9],["Анкара","Анатолия",32.9,39.9],["Афины","Греция",23.7,38],["Белград","Югославия",20.5,44.8],["Берн","Швейцария",7.4,46.9]];
const C={GER:{n:"Германия",col:"#3b3f44",ag:.5,civ:30,mil:16,st:30,oil:5,dv:10,bl:"A"},SOV:{n:"СССР",col:"#9a4a3c",ag:.25,civ:36,mil:20,st:24,oil:24,dv:12},UK:{n:"Британия",col:"#a8788a",ag:.1,civ:24,mil:10,st:12,oil:0,dv:5,bl:"B"},FRA:{n:"Франция",col:"#5a78a8",ag:.1,civ:25,mil:12,st:20,oil:0,dv:9,bl:"B"},ITA:{n:"Италия",col:"#3f7a46",ag:.5,civ:18,mil:9,st:6,oil:0,dv:6,bl:"A"},POL:{n:"Польша",col:"#b56fa3",ag:.05,civ:12,mil:8,st:9,oil:0,dv:7,bl:"B"},
BEN:{n:"Бенилюкс",col:"#c9a85a",civ:6,mil:2,st:3,oil:0,dv:2,ag:0},
SWI:{n:"Швейцария",col:"#d0505f",civ:4,mil:2,st:1,oil:0,dv:2,ag:0},
AUT:{n:"Австрия",col:"#b9b9cf",civ:4,mil:2,st:3,oil:0,dv:2,ag:0},
CZE:{n:"Чехословакия",col:"#3f9a9a",civ:9,mil:6,st:6,oil:0,dv:5,ag:0.05},
ESP:{n:"Испания",col:"#c8b060",civ:10,mil:4,st:6,oil:0,dv:5,ag:0.05},
POR:{n:"Португалия",col:"#5a8a5a",civ:4,mil:1,st:1,oil:0,dv:2,ag:0},
IRL:{n:"Ирландия",col:"#3f8a6a",civ:3,mil:1,st:1,oil:0,dv:1,ag:0},
DEN:{n:"Дания",col:"#8a5a6a",civ:4,mil:1,st:0,oil:0,dv:1,ag:0},
NOR:{n:"Норвегия",col:"#6a5a8a",civ:4,mil:2,st:4,oil:0,dv:2,ag:0},
SWE:{n:"Швеция",col:"#5a8ab0",civ:8,mil:3,st:9,oil:0,dv:3,ag:0},
FIN:{n:"Финляндия",col:"#9ec0d0",civ:4,mil:2,st:2,oil:0,dv:3,ag:0.05},
EST:{n:"Эстония",col:"#9ab8c0",civ:1,mil:1,st:1,oil:2,dv:1,ag:0},
LAT:{n:"Латвия",col:"#c8b87a",civ:2,mil:1,st:0,oil:0,dv:1,ag:0},
LIT:{n:"Литва",col:"#e8dcae",civ:2,mil:1,st:0,oil:0,dv:1,ag:0},
HUN:{n:"Венгрия",col:"#e6aab0",civ:6,mil:3,st:3,oil:2,dv:4,ag:0.1},
ROM:{n:"Румыния",col:"#cdbf86",civ:6,mil:3,st:3,oil:6,dv:5,ag:0.05},
YUG:{n:"Югославия",col:"#2a3a6a",civ:7,mil:3,st:6,oil:0,dv:5,ag:0.05},
BUL:{n:"Болгария",col:"#3f8a3f",civ:3,mil:2,st:1,oil:0,dv:3,ag:0},
GRE:{n:"Греция",col:"#8fb8dc",civ:4,mil:2,st:1,oil:0,dv:3,ag:0},
ALB:{n:"Албания",col:"#7a3050",civ:1,mil:1,st:0,oil:0,dv:1,ag:0},
TUR:{n:"Турция",col:"#b0a898",civ:12,mil:5,st:6,oil:3,dv:8,ag:0.05}};
const CAPN={GER:'Бранденбург',FRA:'Иль-де-Франс',POL:'Центральная Польша',SOV:'Москва',ITA:'Центр Италии',ESP:'Север Испании',SWE:'Швеция',TUR:'Анатолия',YUG:'Югославия',FIN:'Финляндия',NOR:'Норвегия'};
const LAWS=["Добровольцы","Огранич. призыв","Расшир. призыв","Всеобщая мобилизация"],CG=[.35,.3,.25,.18],MM=[.7,1,1.4,2];
const TECH={t1:["Пехота II","+15% атаки пехоты"],t2:["Артиллерия II","+20% атаки арт."],t3:["Средний танк","+20% атаки танков"],t4:["Промышленность I","+10% выпуска"],t5:["Инженеры","+10% защиты"],t6:["Станкостроение","+2 гражд. в столице"]};
const FOC=[["ind","Промышленная программа","+2 гражд. фабрики",[]],["mil","Военная промышленность","+2 воен. завода",["ind"]],["law","Расширенный призыв","закон призыва выше",[]],["fort","Линия укреплений","+1 форт на границах",[]],["aut","Автаркия","+3 стали, +3 стабильности",["ind"]],["sci","Научная школа","+1 слот исследований",["ind"]],["tank","Танковая доктрина","изучает «Средний танк»",["mil"]],["mob","Милитаризация","+15 поддержки войны",["law"]],["dip","Дипинициатива","+40 ПП, −3 напряжённости",[]]];
const BLD={civ:["Гражд. фабрика",100],mil:["Воен. завод",100],fort:["Укрепления",60],dock:["Верфь",80],airfield:["Аэродром",90]};
const P=PD.split(";").map(s=>{const a=s.split("|");return{n:a[0],o0:a[1],v:a[2].split(" ")}});
P.forEach((p,i)=>{p.pts=p.v.map(k=>PX(...V[k]));p.c=p.pts.reduce((a,q)=>[a[0]+q[0]/p.pts.length,a[1]+q[1]/p.pts.length],[0,0]);p.nb=[]});
P.forEach((a,i)=>P.forEach((b,j)=>{if(i<j&&a.v.filter(k=>b.v.includes(k)).length>=2){a.nb.push(j);b.nb.push(i)}}));
[["Англия","Нормандия"],["Англия","Иль-де-Франс"],["Англия","Бенилюкс"],["Англия","Ирландия"],["Шотландия","Ирландия"],["Шотландия","Норвегия"],["Бранденбург","Швеция"],["Дания","Швеция"],["Эстония","Финляндия"],["Юг Италии","Албания"],["Юг Италии","Греция"],["Греция","Анатолия"],["Север Испании","Юг Испании"]].forEach(([x,y])=>{const a=P.findIndex(p=>p.n==x),b=P.findIndex(p=>p.n==y);if(!P[a].nb.includes(b)){P[a].nb.push(b);P[b].nb.push(a)}});
const pid=n=>P.findIndex(p=>p.n==n),cap=c=>CAPN[c]?pid(CAPN[c]):P.findIndex(p=>p.o0==c);
let S,tab="foc",mode="pol",vb={x:0,y:0,w:810,h:790};
const own=c=>S.prov.map((p,i)=>p.o==c?i:-1).filter(i=>i>=0),tot=(c,k)=>own(c).reduce((a,i)=>a+S.prov[i][k],0),alive=c=>own(c).length>0;
const atWar=(a,b)=>S.wars.some(w=>(w[0]==a&&w[1]==b)||(w[0]==b&&w[1]==a)),en=c=>S.wars.filter(w=>w.includes(c)).map(w=>w[0]==c?w[1]:w[0]);
const dt=()=>["янв","фев","мар","апр","мая","июн","июл","авг","сен","окт","ноя","дек"][S.m-1]+" "+S.y,log=(t,w)=>{S.log.unshift([dt()+": "+t,w]);S.log.length=50};
const bloc=c=>S.bloc[c]||null,ally=(a,b)=>bloc(a)&&bloc(a)==bloc(b);
function init(pl,year=1936){armyDrawer=true;planTool="";armySlot=0;visibleCityLabels=[];visibleCityMarks=[];hoverCity=null;hv=-1;$("#foreign-country").hidden=true;hoveredDistrict=null;researchBranch=0;researchSelection="t1";clearInterval(tmr);spd=0;W=null;mode="pol";effects.length=0;$("#md").hidden=true;S={partners:new Set(),cityGarrisons:new Map(),cityOrders:new Map(),cityTarget:null,rockets:0,rocketLine:false,upgraded:{},pl,df:1,hist:1,bub:[],dipC:null,startYear:year,y:year,m:1,T:12,pp:20,stab:60,ws:20,man:0,law:1,eq:{r:150,a:30,t:20,p:10},mix:{r:50,a:15,t:25,p:10},foc:null,fl:0,done:{},tech:{},rs:[null,null],rp:{},slots:2,q:[],sel:null,pend:null,tr:{st:0,oil:0},tpl:{i:9,a:0,t:0},just:{},pact:{},prov:[],div:[],org:[],wars:[],bloc:{},ai:{},log:[],over:null,evd:{}};
Object.keys(C).forEach(c=>{if(C[c].bl)S.bloc[c]=C[c].bl;S.ai[c]=0});
P.forEach((p,i)=>{const c=C[p.o0],n=P.filter(x=>x.o0==p.o0).length,k=i==cap(p.o0)?1:0;S.prov.push({o:p.o0,civ:Math.round(c.civ/n)+k,mil:Math.round(c.mil/n),dock:0,airfield:0,st:Math.round(c.st/n),oil:Math.round(c.oil/n),fort:0,inf:2+Math.floor(R()*3)});S.div.push(Math.max(1,Math.round(c.dv/n)));S.org.push(100)});
S.man=own(pl).length*60;S.sel=null;log("Партия началась: "+C[pl].n);render()}
function eco(){const c=S.pl,civ=tot(c,"civ"),mil=tot(c,"mil"),tr=S.tr.st+S.tr.oil,free=Math.max(0,Math.round(civ*(1-CG[S.law]))-tr*2),st=tot(c,"st")+S.tr.st*6,oil=tot(c,"oil")+S.tr.oil*4,need=mil*1.2,fs=Math.min(1,st/Math.max(1,need)),tn=mil*S.mix.t/100*.5,fo=Math.min(1,(oil+1)/Math.max(.1,tn)),om=fs*(1+(S.stab-50)/200)*(1+(S.tech.t4?.1:0)+(S.tech.ind2?.15:0));return{civ,mil,free,st,oil,need,fs,fo,om,out:mil*2.5*om*(1+(leaderSpirits(c)[1]?.industry||0)),dock:tot(c,"dock")}}
const air=()=>1+Math.min(S.tech.air2?.45:.3,S.eq.p/200);
const atkS=(c,f)=>{if(c!=S.pl)return 27*(1+.03*(S.y-S.startYear));const t=S.tpl,T=S.tech;return(t.i*3*(1+(T.inf3?.3:T.t1?.15:0))+t.a*8*(1+(T.art2?.4:T.t2?.2:0))+t.t*14*(1+(T.arm2?.4:T.t3?.2:0)))*(.8+S.prov[f].inf*.04)*air()*(1+Math.min(.18,S.prov[f].airfield*.06)*Math.min(1,S.eq.p/10))*(S.upgraded[f]?1.2:1)};
const defS=(c,p)=>{const f=(1+S.prov[p].fort*.1)*(.65+.35*S.org[p]/100);if(c!=S.pl)return 45*(1+.03*(S.y-S.startYear))*f;const x=S.tpl;return(x.i*5+x.a*3+x.t*4)*(1+(S.tech.t5?.1:0)+(S.tech.log2?.15:0))*f};
const cost=()=>{const t=S.tpl;return{r:t.i*8,a:t.a*12,t:t.t*20,mp:t.i+t.a+t.t}};
function chance(f,t,n){const r=n*atkS(S.prov[f].o,f)/Math.max(1,S.div[t]*defS(S.prov[t].o,t));return S.div[t]?Math.round(100/(1+Math.exp(-(r-1.1)*5))):100}
function battle(f,t,n){const cA=S.prov[f].o,cD=S.prov[t].o,m=S.div[t],A=n*atkS(cA,f)*(.88+R()*.24),D=Math.max(1,m*defS(cD,t)*(.88+R()*.24)),r=A/D,win=m==0||r>1.1;let la=win?(m?Math.round(n*.18/Math.min(r,3)):0):Math.max(1,Math.round(n*.3)),ld=win?m:Math.round(m*.15*Math.min(r+.3,1.5));
if(cA==S.pl||cD==S.pl)addMapEffect(f,t,"battle");
if(cA==S.pl||cD==S.pl)S.bub.push({f,t,p:chance(f,t,n),w:win});S.div[f]-=n;const sv=n-la;S.div[t]=m-ld;S.org[f]=Math.max(20,S.org[f]-25);S.org[t]=Math.max(20,S.org[t]-30);
if(win&&sv>0){const p=S.prov[t];if(cA!=S.pl&&cD!=S.pl)log(C[cA].n+" захватила "+P[t].n);else if(cA==S.pl)log("Захвачена провинция: "+P[t].n);S.div[t]=sv;delete S.upgraded[t];p.o=cA;p.civ>>=1;p.mil>>=1;p.fort=0;if(t==cap(cD)){own(cD).forEach(i=>{delete S.upgraded[i];S.prov[i].o=cA});log(C[cD].n+" капитулировала перед "+C[cA].n,1);S.wars=S.wars.filter(w=>!w.includes(cD));delete S.bloc[cD]}}else S.div[f]+=sv;
if(cA==S.pl||cD==S.pl){log(`Бой: ${P[t].n} — ${C[cA].n} ${n} vs ${C[cD].n} ${m}: ${win?"прорыв":"отбито"} (потери ${la}/${ld})`,1);S.ws=Math.max(0,S.ws-(cA==S.pl?la:ld)*.6)}return win}
function declare(a,b){S.wars.push([a,b]);S.T=Math.min(100,S.T+(a==S.pl?10:6));log(C[a].n+" объявила войну: "+C[b].n,1);Object.keys(C).forEach(x=>{if(!alive(x)||x==a||x==b||!bloc(x))return;if(bloc(x)==bloc(b)&&bloc(x)!=bloc(a)&&!atWar(x,a)){S.wars.push([x,a]);log(C[x].n+" вступает на стороне "+C[b].n,1)}else if(bloc(x)==bloc(a)&&bloc(x)!=bloc(b)&&!atWar(x,b)){S.wars.push([x,b]);log(C[x].n+" вступает на стороне "+C[a].n,1)}})}
function aiTurn(){Object.keys(C).forEach(c=>{if(c==S.pl||!alive(c))return;S.ai[c]+=tot(c,"mil")*.035*S.df;while(S.ai[c]>=1){S.ai[c]--;const o=own(c),b=o.filter(i=>P[i].nb.some(j=>S.prov[j].o!=c));S.div[(b.length?b:o)[Math.floor(R()*(b.length||o.length))]]++}
const es=en(c);if(es.length)own(c).forEach(f=>{const n=S.div[f];if(n<2)return;const ts=P[f].nb.filter(j=>es.includes(S.prov[j].o)).sort((a,b)=>S.div[a]-S.div[b]);if(!ts.length)return;const t=ts[0],k=Math.ceil(n*.75);if(!S.div[t]||27*k>S.div[t]*55)battle(f,t,k)})});
if(S.hist&&S.y==1939&&S.m==9)[["GER","POL"],["SOV","POL"]].forEach(([a,b])=>{if(S.pl!=a&&S.pl!=b&&alive(a)&&alive(b)&&!atWar(a,b))declare(a,b)});
Object.keys(C).forEach(c=>{if(c==S.pl||!alive(c)||en(c).length>1||S.T<15||S.y<=S.startYear)return;if(R()>C[c].ag*S.T/100*.1*S.df*(S.hist?1:2.5))return;const ts=Object.keys(C).filter(x=>x!=c&&alive(x)&&!atWar(c,x)&&!ally(c,x)&&!(S.pact[c+x]>0||S.pact[x+c]>0)&&own(c).some(i=>P[i].nb.some(j=>S.prov[j].o==x)));if(ts.length)declare(c,ts[Math.floor(R()*ts.length)])})}
const EVT=[[1936,3,"Ремилитаризация Рейнской области","Германские войска входят в демилитаризованную зону. Франция и Британия решают, как ответить.",[["Протест без последствий",()=>{S.T+=4;S.stab+=2}],["Мобилизация и ультиматум",()=>{S.T+=9;S.ws+=6;S.stab-=2}]]],
[1936,7,"Гражданская война в Испании","Мятеж генералов расколол Испанию. Великие державы выбирают политику.",[["Невмешательство",()=>{S.T+=3}],["Поставки оружия сторонам",()=>{S.T+=7;S.pp-=10;S.ws+=4}]]],
[1938,3,"Аншлюс Австрии","Германия требует объединения с Австрией.",[["Признать аншлюс",()=>{if(alive("AUT")){P.forEach((_,i)=>{if(S.prov[i].o=="AUT")S.prov[i].o="GER"});log("Австрия присоединена к Германии",1)}S.T+=5}],["Осудить, но не вмешиваться",()=>{S.T+=3;if(alive("AUT")){P.forEach((_,i)=>{if(S.prov[i].o=="AUT")S.prov[i].o="GER"})}}]]],
[1938,9,"Мюнхенское соглашение","Судеты передаются Германии. Чехословакия остаётся без союзников.",[["Одобрить соглашение",()=>{S.T-=4;S.stab+=3;const c=pid("Чехословакия");if(S.prov[c].o=="CZE")S.prov[c].o="GER"}],["Отвергнуть",()=>{S.T+=8;S.ws+=5}]]],
[1939,8,"Пакт Молотова — Риббентропа","Германия и СССР подписывают пакт о ненападении и делят Восточную Европу.",[["Принять к сведению",()=>{S.T+=8;S.pact.GERSOV=24;S.pact.SOVGER=24}],["Выразить протест",()=>{S.T+=6;S.stab+=1}]]]];
function showEvt(e,restoring=false){S.pendingEvent=EVT.indexOf(e);if(!restoring)log("Исторический ивент: "+e[2],1);$("#md>div").innerHTML=`<h2>${e[2]}</h2><p>${e[3]}</p>`+e[4].map((o,i)=>`<button style="display:block;width:100%;margin:6px 0" onclick="EV(${EVT.indexOf(e)},${i})">${o[0]}</button>`).join("");$("#md").hidden=false;saveCampaign()}
function EV(a,b){S.pendingEvent=null;EVT[a][4][b][1]();S.stab=Math.max(0,Math.min(100,S.stab));S.T=Math.max(0,Math.min(100,S.T));log("Событие: "+EVT[a][2]+" — "+EVT[a][4][b][0]);$("#md").hidden=true;render()}
function nextTurn(){for(const i of own(S.pl))if(S.prov[i].readiness<100)S.prov[i].readiness=Math.min(100,S.prov[i].readiness+S.prov[i].inf);if(S.over||!campaignMenu.hidden||!$("#md").hidden)return;S.bub=[];produceRocket();const e=eco(),c=S.pl;const spirits=leaderSpirits(c);S.pp+=3+S.stab/50+(spirits[1]?.pp||0);const k=e.out;["r","a","t","p"].forEach(x=>S.eq[x]+=k*S.mix[x]/100*(x=="t"?e.fo:1));S.man+=own(c).length*4*MM[S.law];log(`Итоги месяца: выпуск ${k.toFixed(1)}, политвласть ${S.pp.toFixed(0)}, стабильность ${S.stab.toFixed(0)}%`);
let pool=e.free*4*(1+(spirits[1]?.construction||0));S.q.forEach(q=>{const a=Math.min(pool,BLD[q.t][1]-q.pg);q.pg+=a;pool-=a});S.q=S.q.filter(q=>{if(q.pg>=BLD[q.t][1]){S.prov[q.p][q.t]++;log(`${BLD[q.t][0]} построена: ${P[q.p].n}`);return false}return true});
if(S.foc&&--S.fl<=0){fdone(S.foc);S.foc=null}
S.rs.forEach((t,i)=>{if(!t)return;S.rp[t]=(S.rp[t]||0)+1;if(S.rp[t]>=researchMonths(t)){S.tech[t]=1;S.rs[i]=null;if(t=="t6")S.prov[cap(c)].civ+=2;log("Исследование: "+TECH[t][0])}});Object.keys(S.just).forEach(x=>{if(S.just[x]>0)S.just[x]--});Object.keys(S.pact).forEach(x=>S.pact[x]--);
if(R()<.3){S.stab+=R()<.5?-3:3;log("Внутренние события: стабильность изменилась")}S.stab=Math.max(0,Math.min(100,S.stab+(spirits[0]?.stability||0)+(S.ws-50)/60-(en(c).length?.5:0)));if(e.fs<1)log(`Дефицит стали ${(e.st-e.need).toFixed(0)}: выпуск ${Math.round(e.fs*100)}%`,1);
S.T=Math.min(100,S.T+.4+S.wars.length*.5);aiTurn();S.org=S.org.map(o=>Math.min(100,o+15));S.m++;if(S.m>12){S.m=1;S.y++}
const ev=!globalCampaign&&EVT.find(x=>x[0]==S.y&&x[1]==S.m);const n=own(c).length;if(!n||S.prov[cap(c)].o!=c){S.over="lose"}else if(n>1&&n>=Math.ceil(P.length*.4)){S.over="win"}else if(S.y>=S.startYear+10)S.over="lose";render();if(ev&&!S.over)showEvt(ev)}
function fdone(id){const c=S.pl,p=S.prov[cap(c)];({ind:()=>p.civ+=2,mil:()=>p.mil+=2,law:()=>S.law=Math.min(3,S.law+1),fort:()=>own(c).forEach(i=>{if(P[i].nb.some(j=>S.prov[j].o!=c))S.prov[i].fort++}),aut:()=>{p.st+=3;S.stab+=3},sci:()=>{S.slots++;S.rs.push(null)},tank:()=>S.tech.t3=1,mob:()=>S.ws=Math.min(100,S.ws+15),dip:()=>{S.pp+=40;S.T=Math.max(0,S.T-3)}})[id]();S.done[id]=1;log("Фокус завершён: "+FOC.find(f=>f[0]==id)[1])}
/* ===== canvas + HUD ===== */
const cv=$("#cv"),x=cv.getContext("2d"),tip=$("#tip");let cam={tx:0,ty:0,k:1},hv=-1,qd=0,W=null,spd=0,tmr=0;
const EN={GER:"ТРЕТИЙ РЕЙХ",SOV:"СССР",UK:"ВЕЛИКОБРИТАНИЯ",FRA:"ФРАНЦИЯ",ITA:"ИТАЛИЯ",POL:"ПОЛЬША",ESP:"ИСПАНИЯ",YUG:"ЮГОСЛАВИЯ",HUN:"КОРОЛЕВСТВО ВЕНГРИЯ",ROM:"РУМЫНИЯ",FIN:"ФИНЛЯНДИЯ",NOR:"НОРВЕГИЯ",SWE:"ШВЕЦИЯ",DEN:"ДАНИЯ",CZE:"ЧЕХОСЛОВАКИЯ",AUT:"АВСТРИЯ",TUR:"ТУРЦИЯ",GRE:"ГРЕЦИЯ",BUL:"БОЛГАРИЯ",POR:"ПОРТУГАЛИЯ",IRL:"ИРЛАНДИЯ",BEN:"БЕНИЛЮКС",SWI:"ШВЕЙЦАРИЯ",EST:"ЭСТОНИЯ",LAT:"ЛАТВИЯ",LIT:"ЛИТВА",ALB:"АЛБАНИЯ"};
const CT=[["Лондон",-.1,51.5,1],["Париж",2.3,48.9,1],["Берлин",13.4,52.5,1],["Варшава",21,52.2,1],["Москва",37.6,55.8,1],["Рим",12.5,41.9,1],["Прага",14.4,50.1,1],["Вена",16.4,48.2,1],["Будапешт",19,47.5,1],["Мадрид",-3.7,40.4,1],["Стокгольм",18,59.3,1],["Хельсинки",24.9,60.2,1],["Анкара",32.9,39.9,1],["Афины",23.7,38,1],["Белград",20.5,44.8,1],["Лиссабон",-9.1,38.7,1],["Осло",10.7,59.9,1],["Бухарест",26.1,44.4,1],["Берн",7.4,46.9,1],["Мюнхен",11.6,48.1],["Милан",9.2,45.5],["Неаполь",14.3,40.9],["Краков",19.9,50.1],["Гамбург",10,53.6],["Киев",30.5,50.4],["Франкфурт",8.7,50.1],["Штутгарт",9.2,48.8],["Брно",16.6,49.2]].map(c=>[c[0],...PX(c[1],c[2]),c[3]]);
const star=(px,py,r)=>{for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r*.45:r;i?x.lineTo(px+Math.cos(a)*q,py+Math.sin(a)*q):x.moveTo(px+Math.cos(a)*q,py+Math.sin(a)*q)}x.closePath()};
const ED={};P.forEach((p,i)=>{let ar=0;p.pts.forEach((q,j)=>{const r=p.pts[(j+1)%p.pts.length];ar+=q[0]*r[1]-r[0]*q[1]});p.ar=Math.abs(ar)/2;p.v.forEach((k,j)=>{const m=p.v[(j+1)%p.v.length],key=k<m?k+"|"+m:m+"|"+k;(ED[key]=ED[key]||{A:PX(...V[k]),B:PX(...V[m]),ps:[]}).ps.push(i)})});const EDL=Object.values(ED);
const LDR={GER:"Адольф Гитлер",SOV:"Иосиф Сталин",UK:"Стэнли Болдуин",FRA:"Альбер Лебрен",ITA:"Бенито Муссолини",POL:"Игнаций Мостицкий", SWI:"Альберт Мейер", AUT:"Курт Шушниг", CZE:"Эдвард Бенеш", ESP:"Нисето Алькала Самора", POR:"Антониу ди Оливейра Салазар", IRL:"Имон де Валера", DEN:"Кристиан X", NOR:"Хокон VII", SWE:"Густав V", FIN:"Пер Эвинд Свинхувуд", EST:"Константин Пятс", LAT:"Албертс Квиесис", LIT:"Антанас Сметона", HUN:"Миклош Хорти", ROM:"Кароль II", YUG:"Павел Карагеоргиевич, регент", BUL:"Борис III", GRE:"Георг II", ALB:"Зогу I", TUR:"Мустафа Кемаль Ататюрк", BEN:"Леопольд III · Вильгельмина · Шарлотта"},IDE={GER:[10,5,70,15],SOV:[3,85,2,10],UK:[60,2,4,34],FRA:[45,15,5,35],ITA:[5,3,70,22],POL:[10,5,30,55]};
const pie=c=>{const d=IDE[c]||[25,10,15,50],a=d[0],b=a+d[1],e=b+d[2];return`conic-gradient(#4a7bc4 0 ${a}%,#c4483a ${a}% ${b}%,#8a6a3a ${b}% ${e}%,#8a8f94 ${e}% 100%)`};
const fill=i=>{const p=S.prov[i],o=p.o;if(mode==="terrain")return "#606852";if(mode==="resources")return p.oil>p.st?"#856446":p.st>0?"#557378":"#464d46";if(mode==="infra")return ["#494641","#634f49","#726447","#887b52","#697b56","#4c855f"][Math.min(5,p.inf)];if(mode=="sup")return p.inf>=4?"#4f9a52":p.inf>=3?"#c7b64a":"#b8503f";if(mode=="dip"){if(o==S.pl)return"#3d7fc4";if(atWar(o,S.pl))return"#c4483a";if(ally(o,S.pl))return"#4f9a52";if(S.just[o]!=null)return"#d4b73f";return"#5c6668"}return C[o].col};
const redraw=()=>{if(!qd){qd=1;requestAnimationFrame(()=>{qd=0;draw()})}};
const poly=pt=>{x.beginPath();pt.forEach((q,j)=>j?x.lineTo(q[0],q[1]):x.moveTo(q[0],q[1]));x.closePath()};
const edges=(f,st,lw,dash)=>{if(globalCampaign)return;x.beginPath();EDL.forEach(e=>{if(f(e)){x.moveTo(e.A[0],e.A[1]);x.lineTo(e.B[0],e.B[1])}});x.strokeStyle=st;x.lineWidth=lw;x.setLineDash(dash||[]);x.stroke();x.setLineDash([])};
function bub(px,py,col,t){x.beginPath();x.arc(px,py,12,0,7);x.fillStyle=col;x.fill();x.strokeStyle="#000";x.lineWidth=1.5;x.stroke();x.fillStyle="#000";x.font="bold 11px sans-serif";x.textAlign="center";x.textBaseline="middle";x.fillText(t,px,py+1)}
function arr(a,b,col,pc,w){x.save();if(worldShapes.length)x.clip(landOutline);const A=P[a].c,B=P[b].c,dx=B[0]-A[0],dy=B[1]-A[1],L=Math.hypot(dx,dy)||1,ux=dx/L,uy=dy/L;x.strokeStyle=col;x.fillStyle=col;x.lineWidth=w;x.lineCap="round";x.beginPath();x.moveTo(A[0],A[1]);x.lineTo(B[0]-ux*10,B[1]-uy*10);x.stroke();x.beginPath();x.moveTo(B[0],B[1]);x.lineTo(B[0]-ux*20-uy*10,B[1]-uy*20+ux*10);x.lineTo(B[0]-ux*20+uy*10,B[1]-uy*20-ux*10);x.fill();bub((A[0]+B[0])/2,(A[1]+B[1])/2,col,pc);x.restore()}
function draw(){if(!S)return;drawMiniMap();updateCityOrders();const dp=devicePixelRatio||1,Wd=cv.width,Hd=cv.height,mp=S.pl;x.setTransform(1,0,0,1,0,0);
const g=x.createRadialGradient(Wd/2,Hd/2,40,Wd/2,Hd/2,Math.max(Wd,Hd)*.7);g.addColorStop(0,"#73d6f3");g.addColorStop(1,"#3aaddd");x.fillStyle=g;x.fillRect(0,0,Wd,Hd);
x.setTransform(dp*cam.k,0,0,dp*cam.k,dp*cam.tx,dp*cam.ty);x.lineJoin="round";x.lineCap="round";drawWorldLand();if(cam.k<.53 && worldShapes.length){visibleCityMarks=[];visibleCityLabels=[];drawPoliticalNames();return}

x.save();if(worldShapes.length)x.clip(landOutline);
if(!globalCampaign)P.forEach((p,i)=>{if(S.prov[i].o!==p.o0||mode!=="pol"){poly(p.pts);x.globalAlpha=.42;x.fillStyle=fill(i);x.fill();x.globalAlpha=1}});
drawMountainNames();
paintCityRegions();drawTacticalGround();
if(!reliefImage.naturalWidth&&cam.k<DETAIL_ZOOM)MTN.forEach(m=>{const q=m.map(r=>PX(...r));for(let s=0;s<q.length-1;s++){const A=q[s],B=q[s+1],L=Math.hypot(B[0]-A[0],B[1]-A[1]),n=Math.floor(L/8);for(let t=0;t<=n;t++){const px=A[0]+(B[0]-A[0])*t/Math.max(1,n),py=A[1]+(B[1]-A[1])*t/Math.max(1,n);x.beginPath();x.moveTo(px-5,py+3);x.lineTo(px,py-6);x.lineTo(px+5,py+3);x.closePath();x.fillStyle="#7d6b52";x.fill();x.beginPath();x.moveTo(px,py-6);x.lineTo(px+5,py+3);x.lineTo(px+1,py+3);x.closePath();x.fillStyle="#54452f";x.fill()}}});
x.strokeStyle="#5aa9d6";x.lineWidth=Math.min(.78,3/cam.k);RIV.forEach(m=>{x.beginPath();m.forEach((r,j)=>{const q=PX(...r);j?x.lineTo(q[0],q[1]):x.moveTo(q[0],q[1])});x.stroke()});
edges(e=>e.ps.length>1&&atWar(S.prov[e.ps[0]].o,S.prov[e.ps[1]].o),"#ff3b2f",4.5);
edges(e=>{if(e.ps.length<2||S.T<=35)return false;const a=S.prov[e.ps[0]].o,b=S.prov[e.ps[1]].o;return a!=b&&(a==mp||b==mp)&&!atWar(a,b)&&!ally(a,b)&&C[a].ag+C[b].ag>.2},"#f0a830",3,[6,4]);
const sel=S.sel,own1=sel!=null&&S.prov[sel].o==mp;
if(own1)P[sel].nb.forEach(j=>{const o=S.prov[j].o,cl=o==mp?[80,210,90]:atWar(o,mp)?[255,70,55]:null;if(!cl)return;poly(P[j].pts);x.fillStyle=`rgba(${cl},.4)`;x.fill();x.strokeStyle=`rgb(${cl})`;x.lineWidth=3;x.stroke()});
x.restore();x.save();
drawPoliticalNames();
if(detailedCities.length)drawDetailedCities();
P.forEach(drawUnitCounter);
if(own1){P[sel].nb.forEach(j=>{if(atWar(S.prov[j].o,mp)&&S.pend!=j){const c=chance(sel,j,Math.max(1,S.div[sel]-1));arr(sel,j,c>65?"#5fd05a":c>35?"#e5c23a":"#e5483a",c,4)}});if(S.pend!=null){const w=atWar(S.prov[S.pend].o,mp);arr(sel,S.pend,w?"#ffe14a":"#6ab0f3",w?chance(sel,S.pend,Math.max(1,S.div[sel]-1)):"→",9)}}
if(cam.k<DETAIL_ZOOM)S.bub.forEach(b=>{arr(b.f,b.t,b.w?"#5fd05a":"#e5483a",b.p,5)});drawMapEffects();drawCityOrders();x.restore();x.setTransform(1,0,0,1,0,0);const vg=x.createRadialGradient(Wd/2,Hd/2,Math.min(Wd,Hd)*.35,Wd/2,Hd/2,Math.max(Wd,Hd)*.75);vg.addColorStop(0,"rgba(0,0,0,0)");vg.addColorStop(1,"rgba(0,27,42,.13)");x.fillStyle=vg;x.fillRect(0,0,Wd,Hd)}
/* ввод */
const pip=(pt,px,py)=>{let r=false;for(let i=0,j=pt.length-1;i<pt.length;j=i++){const a=pt[i],b=pt[j];if((a[1]>py)!=(b[1]>py)&&px<(b[0]-a[0])*(py-a[1])/(b[1]-a[1])+a[0])r=!r}return r};
const hit=(sx,sy)=>{const wx=(sx-cam.tx)/cam.k,wy=(sy-cam.ty)/cam.k;return globalCampaign?worldIndex(wx,wy):P.findIndex(p=>pip(p.pts,wx,wy))};
let dr=null;cv.addEventListener("pointerdown",e=>{dr={x:e.clientX,y:e.clientY,tx:cam.tx,ty:cam.ty,m:0}});
addEventListener("pointermove",e=>{if(!dr)return;const dx=e.clientX-dr.x,dy=e.clientY-dr.y;if(Math.abs(dx)+Math.abs(dy)>4)dr.m=1;if(dr.m){cam.tx=dr.tx+dx;cam.ty=dr.ty+dy;boundCamera();tip.style.display="none";redraw()}});
addEventListener("pointerup",e=>{if(dr&&!dr.m&&e.button===0&&e.target==cv&&S)selectMapPoint(e.clientX,e.clientY);dr=null});
let zoomFrame=0,desiredZoom=0,zoomAnchor=[0,0];
function easeMapZoom(){
  const [px,py]=zoomAnchor,old=cam.k;
  const next=Math.abs(desiredZoom-old)<.009?desiredZoom:old+(desiredZoom-old)*.32;
  cam.tx=px-(px-cam.tx)*next/old;cam.ty=py-(py-cam.ty)*next/old;cam.k=next;boundCamera();redraw();
  zoomFrame=next===desiredZoom?0:requestAnimationFrame(easeMapZoom);
}
cv.addEventListener("wheel",e=>{
  e.preventDefault();zoomAnchor=[e.clientX,e.clientY];
  desiredZoom=Math.max(worldMinZoom(),Math.min(42,(zoomFrame?desiredZoom:cam.k)*(e.deltaY<0?1.16:.862)));
  if(matchMedia("(prefers-reduced-motion: reduce)").matches){
    cam.tx=e.clientX-(e.clientX-cam.tx)*desiredZoom/cam.k;cam.ty=e.clientY-(e.clientY-cam.ty)*desiredZoom/cam.k;cam.k=desiredZoom;boundCamera();redraw()
  }else if(!zoomFrame)zoomFrame=requestAnimationFrame(easeMapZoom);
},{passive:false});
cv.addEventListener("dblclick",e=>{
  if(!S)return;
  const city=cityAt(e.clientX,e.clientY);if(!city)return;
  const [a,b]=city.point;
  if(zoomFrame)cancelAnimationFrame(zoomFrame);
  zoomFrame=0;const target=Math.max(12,cam.k);
  cam.k=target;cam.tx=innerWidth*.48-a*target;cam.ty=innerHeight*.46-b*target;
  boundCamera();S.cityTarget=city;W=null;S.dipC=null;render();
});
cv.addEventListener("contextmenu",e=>{e.preventDefault();if(cityAt(e.clientX,e.clientY)){selectMapPoint(e.clientX,e.clientY);return}const i=hit(e.clientX,e.clientY);if(i>=0&&S.sel!=null)act(S.sel,i)});
cv.addEventListener("mousemove",e=>{if(dr&&dr.m||!S)return;const i=hit(e.clientX,e.clientY);const district=cam.k>=DETAIL_ZOOM?districtAt(i,(e.clientX-cam.tx)/cam.k,(e.clientY-cam.ty)/cam.k):null;if(i!==hv||district!==hoveredDistrict){hv=i;hoveredDistrict=district;redraw()}const city=cityAt(e.clientX,e.clientY);if(city!==hoverCity){hoverCity=city;cv.style.cursor=city?"pointer":"grab";redraw()}if(city){tip.textContent=city.name+" · "+C[cityOwner(city)].n+" · Нажмите для приказа";positionMapTip(e);return}if(i<0){tip.style.display="none";return}const p=S.prov[i];tip.innerHTML=`<b>${hoveredDistrict?escapeCityName(hoveredDistrict.name||"Сельский район")+" · ":""}${P[i].n}</b><br>Владелец: ${C[p.o].n}<br>Дивизий: ${S.div[i]}<br>Укрепления: ${p.fort}<br>Инфраструктура: ${p.inf}/5`;positionMapTip(e)});
function positionMapTip(e){tip.style.display="block";tip.style.left=Math.min(e.clientX+14,innerWidth-200)+"px";tip.style.top=Math.min(e.clientY+14,innerHeight-110)+"px"}
cv.addEventListener("mouseleave",()=>{hv=-1;hoverCity=null;hoveredDistrict=null;tip.style.display="none";redraw()});
function fit(){const dp=devicePixelRatio||1;cv.width=innerWidth*dp;cv.height=innerHeight*dp;const k=Math.min(innerWidth/5270,(innerHeight-150)/3900);cam.k=worldMinZoom();cam.tx=innerWidth/2-145*cam.k;cam.ty=innerHeight/2-1540*cam.k;boundCamera();redraw()}
function pick(i){if(i<0){S.sel=null;S.pend=null;render();return}const mp=S.pl;if(S.sel!=null&&S.sel!=i&&S.prov[S.sel].o==mp&&S.div[S.sel]>0&&P[S.sel].nb.includes(i)&&(S.prov[i].o==mp||atWar(S.prov[i].o,mp))){if(S.pend==i){act(S.sel,i);return}S.pend=i;render();return}S.sel=i;S.pend=null;S.dipC=S.prov[i].o;if(S.prov[i].o!==mp&&W!=="prd")W=null;render()}
function act(f,t,n){
  if(cityLayers[t]?.cities.length){
    const target=cityLayers[t].cities.find(city=>citySources(city).some(source=>source.province===f));
    S.pend=null;
    if(target)inspectGarrison(target.id);
    else {log("Для приказа нужны войска в соседнем городском районе",1);render()}
    return;
  }
  n=n||Math.max(1,S.div[f]-1);if(S.div[f]<1||S.prov[f].o!=S.pl||!P[f].nb.includes(t))return;if(S.prov[t].o==S.pl){S.div[f]-=n;S.div[t]+=n;addMapEffect(f,t,"move");S.org[t]=Math.max(0,Math.min(S.org[t],S.org[f]-10))}else if(atWar(S.prov[t].o,S.pl)){if(S.div[f]<2){log("Недостаточно сил для наступления",1)}else battle(f,t,n)}S.sel=t;S.pend=null;render()}
function focusFront(){const c=S.pl,f=own(c).filter(i=>S.div[i]>0&&P[i].nb.some(j=>atWar(S.prov[j].o,c))).sort((a,b)=>S.div[b]-S.div[a])[0];if(f==null){log("Фронта нет: вы ни с кем не воюете",1);render();return}S.sel=f;cam.tx=innerWidth/2-P[f].c[0]*cam.k;cam.ty=innerHeight/2-P[f].c[1]*cam.k;render()}
function offensive(){const f=S.sel;if(f==null||S.prov[f].o!=S.pl){log("Выберите свою провинцию с дивизиями",1);render();return}const n=Math.max(1,S.div[f]-1),t=P[f].nb.filter(j=>atWar(S.prov[j].o,S.pl)).sort((a,b)=>chance(f,b,n)-chance(f,a,n))[0];if(t==null){log("Из этой провинции нет вражеских целей",1);render();return}act(f,t)}
function setSpd(n){spd=n;clearInterval(tmr);if(n)tmr=setInterval(()=>{if($("#md").hidden&&S&&!S.over)nextTurn()},[0,2600,1700,1000,550,250][n]);render()}
/* окна и HUD */
const WT={foc:["Национальные фокусы",e=>pFoc(e)],bld:["Строительство",e=>pBld(e)],prd:["Производство и армия",e=>pMil(e)+trainBox()+arsenalPanel()],res:["Исследования",e=>pRes()],dip:["Дипломатия",e=>pDip(e)]};
function openW(k){W=W==k?null:k;render()}
function pBld(e){let h=`<small>Свободных гражд. фабрик: ${e.free} · потребительские товары ${Math.round(CG[S.law]*100)}% · очередь: ${S.q.length}</small>`,i=S.sel;
if(i!=null&&S.prov[i].o==S.pl){const p=S.prov[i];h+=`<div class="it"><b>${P[i].n}</b><small>Гражд ${p.civ} · Воен ${p.mil} · Верфи ${p.dock} · Форт ${p.fort}</small>`+Object.keys(BLD).map(t=>`<button onclick="S.q.push({p:${i},t:'${t}',pg:0});render()">${BLD[t][0]}</button>`).join("")+"</div>"}else h+=`<div class="it"><small>Кликните по своей провинции на карте (окно остаётся открытым), затем выберите здание.</small></div>`;
h+=S.q.map(q=>`<div class="it">${BLD[q.t][0]} — ${P[q.p].n}: ${Math.round(q.pg/BLD[q.t][1]*100)}%</div>`).join("");
return h+`<h3>Торговля</h3><div>Сталь: ${S.tr.st} · Топливо: ${S.tr.oil}</div><button onclick="S.tr.st++;render()">+сталь (−2 гражд.)</button><button onclick="S.tr.oil++;render()">+топливо (−2 гражд.)</button><button onclick="S.tr.st=S.tr.oil=0;render()">Сброс</button>`}
function pRes(){return researchPanel()}
function trainBox(){const k=cost();return`<h3>Обучить дивизию</h3><select id="tp">${own(S.pl).map(i=>`<option value="${i}" ${S.sel==i?"selected":""}>${P[i].n}</option>`).join("")}</select><button ${canTrain()?"":"disabled"} onclick="train(+$('#tp').value)">Обучить</button><small>${k.r} винт., ${k.a} арт., ${k.t} танк., ${k.mp}k людей</small>`}
const PARTIES={GER:[["НСДАП",70,"#8a5a2a"],["Центр",15,"#8a8f94"],["СДПГ",10,"#4a7bc4"],["КПГ",5,"#c4483a"]],SOV:[["ВКП(б)",85,"#c4483a"],["Беспартийные",10,"#8a8f94"],["Эсеры",3,"#d0a030"],["Монархисты",2,"#4a7bc4"]],UK:[["Консерваторы",55,"#4a7bc4"],["Лейбористы",30,"#c4483a"],["Либералы",10,"#d0a030"],["БСФ",5,"#8a5a2a"]],FRA:[["Радикалы",35,"#d0a030"],["СФИО",25,"#c4483a"],["Правые",25,"#4a7bc4"],["ФКП",15,"#8a1a1a"]],ITA:[["Национальная фашистская",70,"#8a5a2a"],["Монархисты",22,"#8a8f94"],["Социалисты",5,"#c4483a"],["Либералы",3,"#4a7bc4"]],POL:[["Санация",55,"#8a8f94"],["ПСЛ",21,"#4a7bc4"],["ППС",14,"#c4483a"],["Эндеция",10,"#8a5a2a"]],def:[["Правящая партия",50,"#8a8f94"],["Оппозиция",30,"#4a7bc4"],["Левые",12,"#c4483a"],["Прочие",8,"#d0a030"]]};
const IDEN={GER:"Фашизм",SOV:"Коммунизм",UK:"Демократия",FRA:"Демократия",ITA:"Фашизм",POL:"Нейтралитет"};
const portrait = countryPortrait;


let leaderCatalogue=null,polityIds={},flagCatalogue=null,staffCatalogue={};
const legacyStates={GER:"Q7318",SOV:"Q15180",UK:"Q145",FRA:"Q142",ITA:"Q38",POL:"Q36",CZE:"Q33946",TUR:"Q43",FIN:"Q33",ESP:"Q29",IRL:"Q27",AUT:"Q40",YUG:"Q191077",SWE:"Q34",NOR:"Q20",DEN:"Q35",SWI:"Q39",POR:"Q45",HUN:"Q28",ROM:"Q218",GRE:"Q41",ALB:"Q222",BUL:"Q219",LAT:"Q211",EST:"Q191",LIT:"Q37"};
function politicalLeader(c){
  const side=C[c];
  if(side.raw==="Kingdom of Romania"&&S.y>=1931&&S.y<=1939)return {name:LDR.ROM,role:"Король Румынии",photo:PORTRAIT_PHOTOS.ROM,id:"Q212897"};
  if(side.administration)return {name:side.administration,role:"Управление территорией"};
  const date=S.y*10000+S.m*100+1,archive=side.roster||c;
  const iso=modernFlagCodes[side.n];
  const candidates=[side.raw==="Ukraine"?"Q212":polityIds[side.raw],legacyStates[c],leaderCatalogue?.iso[iso]];
  for(const q of new Set(candidates)){
    const terms=leaderCatalogue?.terms[q];
    if(!terms)continue;
    for(const kind of [0,1,2]){
      const term=terms.find(([start,end,id,type])=>type===kind&&start<=date);
      if(!term||term[1]!=null&&date>=term[1])continue;
      const person=leaderCatalogue.people[term[2]];
      if(!person||person[2]!=null&&date>person[2]||!term[1]&&date>20261121)continue;
      return {name:person[0],photo:person[1],id:term[2],role:q==="Q212"&&kind!==2?(term[2]==="Q15850"?"И. о. президента Украины":"Президент Украины"):kind===2?"Глава правительства":"Глава государства"};
    }
  }
  if(S.y===1936&&LDR[archive])return {name:LDR[archive],role:"Руководитель страны",photo:PORTRAIT_PHOTOS[archive]};
  return {name:"Руководитель не установлен",role:"На выбранную дату"};
}
function leadershipCard(c){
  const leader=politicalLeader(c);
  const face=C[c].administration||c==="BEN"?countryPortrait(c):leader.photo?
    '<img src="'+leader.photo+'" alt="Портрет" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><small class="portrait-missing" hidden>Изображение недоступно</small>':
    '<small class="portrait-missing">Архивное изображение отсутствует</small>';
  const source=leader.id?'<a target="_blank" rel="noopener noreferrer" href="https://www.wikidata.org/wiki/'+leader.id+'">'+escapeCityName(leader.name)+'</a>':escapeCityName(leader.name);
  return '<div class="pt2'+(c==="BEN"?" portrait-group":"")+'">'+face+'</div><div class="nm"><small>'+leader.role+'</small>'+source+'</div>';
}

// Game modifiers follow the incumbent across monthly turns.
function leaderSpirits(c){
  const leader=politicalLeader(c);
  if(!leader.id&&(C[c].administration||!leader.photo))return [];
  const identity=leader.id||leader.name;
  let key=0;for(const char of identity)key=(Math.imul(key,31)+char.codePointAt(0))>>>0;
  const specialties=[
    {icon:"politics",name:"Политическое влияние",effect:"+1 ед. политической власти в месяц",pp:1},
    {icon:"factory",name:"Промышленная инициатива",effect:"+5% к выпуску снаряжения",industry:.05},
    {icon:"build",name:"Строительная программа",effect:"+10% к темпу строительства",construction:.1}
  ];
  return [{icon:"medal",name:"Сила духа",effect:"+0,5 п. п. стабильности в месяц",stability:.5},specialties[key%specialties.length]];
}
function spiritBadges(c){
  return leaderSpirits(c).map(({icon,name,effect})=>'<div class="spirit-badge"><i>'+uiIcon(icon)+'</i><span><b>'+name+'</b><small>'+effect+'</small></span></div>').join("");
}

function cpHTML(c){const d=IDE[c]||[25,10,15,50],id=d.indexOf(Math.max(...d)),IN=["Демократия","Коммунизм","Фашизм","Нейтралитет"][id],me=c==S.pl,w=atWar(c,S.pl),nb=own(S.pl).some(i=>P[i].nb.some(j=>S.prov[j].o==c)),j=S.just[c],pk=S.pact[S.pl+c]>0;
const sl=(ic,tt,fn)=>`<button class="slot" title="${tt}" ${fn?`onclick="${fn}"`:"disabled"}>${ic}</button>`;
const PT=PARTIES[c]||PARTIES.def,ID=IDEN[c]||"Нейтралитет";let acc=0;const pcs=PT.map(p=>{const a=acc;acc+=p[1];return`${p[2]} ${a}% ${acc}%`}).join(",");
let h=`<div class="ph"><span class="country-header">${flagBadge(c)}${C[c].n}</span><button class="x" onclick="S.dipC=null;render()">✕</button></div><div class="top2"><div class="por">${leadershipCard(c)}</div><div class="rt"><div class="focrow"><div class="fe">${uiIcon("target")}</div><div style="flex:1"><button class="bz" style="width:100%" ${me?`onclick="openW('foc')"`:"disabled"}>${me?(S.foc?"Фокус: "+FOC.find(f=>f[0]==S.foc)[1]+" ("+S.fl+" мес.)":"Выберите национальный фокус"):C[c].n}</button><div class="pbar"><i style="width:${me&&S.foc?Math.round((2-S.fl)/2*100):0}%"></i></div></div></div><div class="sd">Национальный дух</div><div class="leader-spirits">${spiritBadges(c)}</div><div class="slots">${me?FOC.filter(f=>S.done[f[0]]).map(f=>sl(uiIcon("medal"),f[1])).join(""):"<small>Блок: "+(bloc(c)||"нет")+"</small>"}</div></div></div><div class="row3"><div class="ie">${uiIcon("balance")}</div><div class="idb"><b>${ID}</b><br><small>Выборов нет</small></div><div class="pie" style="background:conic-gradient(${pcs})"></div><div class="pl2">${PT.map(p=>`<div><i style="background:${p[2]}"></i>${p[0]} (${p[1]})</div>`).join("")}</div></div>`;
if(me){const sec=(t,i,b)=>`<div class="sec">${i} ${t}</div><div class="slots">${b}</div>`;h+=sec("Правительство и законы",uiIcon("politics"),sl(uiIcon("unit"),"Закон призыва: "+LAWS[S.law]+" (+1 ступень за 40 ПП)","if(S.law<3&&S.pp>=40){S.pp-=40;S.law++;S.stab-=3}render()")+sl(uiIcon("document"),"Фокусы","openW('foc')"))+sec("Исследования и производство",uiIcon("factory"),sl(uiIcon("research"),"Исследования","openW('res')")+sl(uiIcon("factory"),"Производство","openW('prd')")+sl(uiIcon("build"),"Строительство","openW('bld')"))+`<div class="act"><small>${LAWS[S.law]} · дивизий ${own(c).reduce((a,i)=>a+S.div[i],0)}</small></div>`}
else if(!alive(c))h+='<div class="act">Государство аннексировано.</div>';
else{h+=`<div class="tabs3"><button class="${S.cpt!="coop"?"on":""}" onclick="S.cpt='occ';render()">Оккупация</button><button class="${S.cpt=="coop"?"on":""}" onclick="S.cpt='coop';render()">Сотрудничество</button><button disabled>Субъекты</button></div><div class="act">${w?'<p class="w">Вы находитесь в состоянии войны</p>':""}`;
if(S.cpt!="coop"){if(!w){if(nb&&j==null)h+=`<button ${S.pp<25?"disabled":""} onclick="S.pp-=25;S.just['${c}']=2;S.T+=3;render()">Оправдать цель войны (25 ПП)</button>`;else if(!nb)h+="<small>Нет общей границы</small>";if(j===0)h+=`<button class="go" onclick="dwar('${c}')">Объявить войну</button>`;else if(j>0)h+=`<small>Оправдание: ещё ${j} мес.</small>`}}
else if(!w)h+=`<button ${S.pp<25?"disabled":""} onclick="inv('${c}')">Альянс (25 ПП)</button><button ${S.pp<20||pk?"disabled":""} onclick="S.pp-=20;S.pact[S.pl+'${c}']=24;log('Пакт о ненападении с ${C[c].n}');render()">Пакт о ненападении (20 ПП)</button><button ${S.pp<10?"disabled":""} onclick="S.pp-=10;S.tr.st++;log('Торговля сталью с ${C[c].n}');render()">Торговля</button>`;h+="</div>"}return h}
let previousMeters=new Map(),meterCampaign=null;
function render(){if(!S)return;
if(meterCampaign!==S){previousMeters.clear();meterCampaign=S}
const e=eco(),c=S.pl,pl=(t,v,tt,bad)=>{const changed=previousMeters.has(tt)&&previousMeters.get(tt)!==v;previousMeters.set(tt,v);return `<span class="pl${bad?" bad":""}${changed?" meter-change":""}" title="${tt}">${t} <b>${v}</b></span>`};
$("#flag").innerHTML=flagBadge(c);
$("#top").innerHTML=`<div class="r1">`+pl(uiIcon("politics"),S.pp.toFixed(0),"Политическая власть")+pl(uiIcon("balance"),S.stab.toFixed(0)+"%","Стабильность")+pl(uiIcon("fire"),S.ws.toFixed(0)+"%","Поддержка войны")+pl(uiIcon("people"),S.man.toFixed(0)+"K","Людские ресурсы")+pl(uiIcon("factory"),e.civ+"/"+e.mil+"/"+e.dock,"Гражданские/военные/верфи")+pl(uiIcon("steel"),e.st+"/"+e.need.toFixed(0),"Сталь",e.st<e.need)+pl(uiIcon("fuel"),e.oil,"Топливо")+pl(uiIcon("rifle"),[S.eq.r,S.eq.a,S.eq.t,S.eq.p].map(v=>v.toFixed(0)).join("/"),"Винтовки/артиллерия/танки/авиация")+`</div><div class="r2">`+[["pol",uiIcon("politics"),"Политика"],["foc",uiIcon("target"),"Фокусы"],["res",uiIcon("research"),"Исследования"],["bld",uiIcon("build"),"Стройка"],["prd",uiIcon("factory"),"Производство"],["dip",uiIcon("globe"),"Дипломатия"]].map(w=>`<button class="sq${(w[0]=="pol"?S.dipC&&!W:W==w[0])?" on":""}" onclick="${w[0]=="pol"?"W=null;S.dipC=S.dipC?null:S.pl;render()":"openW('"+w[0]+"')"}" title="${w[2]}">${w[1]}<small>${w[2]}</small></button>`).join("")+`</div>`;
$("#tr").innerHTML=`<button onclick="showCampaign(true)" title="Выбрать кампанию">${C[c].n}</button><span class="dt">12:00, <b>${dt()}</b></span>`+[0,1,2,3,4,5].map(n=>`<button class="${spd==n?"on":""}" onclick="setSpd(${n})" aria-label="${n?"Скорость "+n:"Пауза"}">${n||uiIcon("pause")}</button>`).join("")+`<button onclick="nextTurn()" title="Следующий месяц">${uiIcon("next")}</button><span class="gl" style="background:conic-gradient(#d0634f ${S.T}%,#33454b 0)" title="Мировая напряжённость"><i>${S.T.toFixed(0)}%</i></span>`;
$("#modes").innerHTML=[["pol","Политика"],["sup","Снабжение"],["dip","Дипломатия"],["terrain","Рельеф"],["resources","Ресурсы"],["infra","Инфраструктура"]].map(m=>`<button class="${mode==m[0]?"on":""}" onclick="mode='${m[0]}';render()">${m[1]}</button>`).join("");
const roster=C[c].roster||c;const officers=officerNames(roster);const ga=own(c).filter(i=>S.div[i]>0).sort((a,b)=>S.div[b]-S.div[a]).slice(0,4),tt=own(c).reduce((a,i)=>a+S.div[i],0);
theaterButton.innerHTML=uiIcon("people")+'<span>'+escapeCityName(C[c].n)+'</span><b>'+tt+' див.</b>';
$("#gens").innerHTML=!officers?commandCards(c,tt):'<button class="gc chief" onclick="W=null;S.dipC=S.pl;render()"><img src="'+PORTRAIT_PHOTOS[roster]+'" alt=""><small>'+LDR[roster]+'</small></button>'+officers.map((officer,n)=>{const i=ga[n%ga.length];if(i==null)return "";return `<button class="gc ${S.sel==i?"on":""}" title="${officers[n]} · ${P[i].n}" onclick="S.sel=${i};S.pend=null;render()"><img alt="${officer}" src="/officers/${["GER","SOV","FRA","UK","ITA","POL"].indexOf(roster)*4+n}.jpg"><small>${officer}</small><small>${S.div[i]}/${tt}</small></button>`}).join("");
$("#cp").className="pn"+(S.dipC&&!W?" open":"");$("#cp").innerHTML=S.dipC&&!W?cpHTML(S.dipC):"";
$("#win").hidden=!W;$("#win").className="pn"+(W=="res"?" full":"");if(W){$("#wt").textContent=WT[W][0];$("#wb").innerHTML=WT[W][1](e)}
$("#log").innerHTML=S.log.map(l=>`<div class="${l[1]?"w":""}">${l[0]}</div>`).join("");
if(S.over){$("#md>div").innerHTML=`<h2>${S.over=="win"?"Победа":"Поражение"}</h2><p>Вернитесь в меню, чтобы начать заново.</p><button onclick="showCampaign(true)">Главное меню</button>`;$("#md").hidden=false;clearInterval(tmr);spd=0}
renderCityPanel();renderTacticalHud();
saveCampaign();redraw()}
const canTrain=()=>{const k=cost();return S.eq.r>=k.r&&S.eq.a>=k.a&&S.eq.t>=k.t&&S.man>=k.mp&&k.mp>0};
function payDivisionCost(){const k=cost();S.eq.r-=k.r;S.eq.a-=k.a;S.eq.t-=k.t;S.man-=k.mp}
function train(i){payDivisionCost();S.div[i]++;S.org[i]=Math.max(40,S.org[i]-20);render()}
function pFoc(){let h=`<h3>Национальные фокусы</h3><small>${S.foc?"Идёт: "+FOC.find(f=>f[0]==S.foc)[1]+" (осталось "+S.fl+" мес.)":"Выберите фокус (2 мес.)"}</small>`;FOC.forEach(f=>{const d=S.done[f[0]],ok=f[3].every(x=>S.done[x]);h+=`<div class="it"><b>${f[1]}</b> ${d?"✓":""}<small>${f[2]}${f[3].length&&!d?" · нужен: "+f[3].map(x=>FOC.find(y=>y[0]==x)[1]).join(", "):""}</small>${!d&&ok&&!S.foc?`<button onclick="S.foc='${f[0]}';S.fl=2;render()">Начать</button>`:""}</div>`});return h}
function pEco(e){let h=`<h3>Экономика и строительство</h3><small>Свободных гражд. фабрик: ${e.free} · потреб. товары ${Math.round(CG[S.law]*100)}% · очередь: ${S.q.length}. Выберите провинцию и постройте здание (ниже).</small>`;
h+=`<h3>Торговля</h3><div>Сталь: ${S.tr.st} · Топливо: ${S.tr.oil}</div><button onclick="S.tr.st++;render()">+сталь (−2 гражд.)</button><button onclick="S.tr.oil++;render()">+топливо (−2 гражд.)</button><button onclick="S.tr.st=S.tr.oil=0;render()">Сброс</button><h3>Исследования</h3>`;
S.rs.forEach((t,i)=>h+=`<div class="it"><select onchange="S.rs[${i}]=this.value||null;render()"><option value="">— свободен —</option>${Object.keys(TECH).filter(k=>!S.tech[k]&&(S.rs[i]==k||!S.rs.includes(k))).map(k=>`<option value="${k}" ${S.rs[i]==k?"selected":""}>${TECH[k][0]} — ${TECH[k][1]}</option>`).join("")}</select>${t?`<small>${S.rp[t]||0}/3 мес.</small>`:""}</div>`);return h}
function pMil(e){const t=S.tpl,k=cost(),w=t.i+t.a+t.t;let h=`<h3>Шаблон дивизии (${w}/20)</h3>`;[["i","Пехота",14],["a","Артиллерия",5],["t","Танки",8]].forEach(([x,n,m])=>h+=`<label>${n}: ${t[x]}</label><input type="range" min="0" max="${m}" value="${t[x]}" onchange="setT('${x}',+this.value)">`);
h+=`<p>Атака <b>${atkS(S.pl,cap(S.pl)).toFixed(0)}</b> · Защита <b>${defS(S.pl,cap(S.pl)).toFixed(0)}</b><br>Цена: ${k.r} винт., ${k.a} арт., ${k.t} танк., ${k.mp}k людей</p><h3>Военные заводы (${e.mil}) → выпуск ${e.out.toFixed(1)}/мес</h3>`;
[["r","Винтовки"],["a","Артиллерия"],["t","Танки"],["p","Авиация"]].forEach(([x,n])=>h+=`<label>${n}: ${S.mix[x]}% (запас ${S.eq[x].toFixed(0)})</label><input type="range" min="0" max="100" step="5" value="${S.mix[x]}" onchange="setM('${x}',+this.value)">`);
return h+`<h3>Закон призыва</h3><div>${LAWS[S.law]} · ${S.man.toFixed(0)}k</div>${S.law<3?`<button ${S.pp<40?"disabled":""} onclick="S.pp-=40;S.law++;S.stab-=3;render()">Ужесточить (40 ПП)</button>`:""}`}
function setT(x,v){const t=S.tpl;t[x]=Math.min(v,20-(t.i+t.a+t.t-t[x]));render()}
function setM(x,v){const o=Object.keys(S.mix).filter(k=>k!=x),rest=100-v,s=o.reduce((a,k)=>a+S.mix[k],0)||1;S.mix[x]=v;o.forEach(k=>S.mix[k]=Math.round(S.mix[k]*rest/s/5)*5);const d=100-Object.values(S.mix).reduce((a,b)=>a+b,0);S.mix[o[0]]+=d;render()}
function pDip(){let h=`<h3>Дипломатия</h3><small>Войны: ${en(S.pl).map(x=>C[x].n).join(", ")||"нет"}</small>`;Object.keys(C).filter(c=>c!=S.pl).forEach(c=>{if(!alive(c))return;const w=atWar(c,S.pl),n=own(S.pl).some(i=>P[i].nb.some(j=>S.prov[j].o==c)),j=S.just[c],pk=S.pact[S.pl+c]>0;
h+=`<div class="it"><b>${C[c].n}</b> ${w?uiIcon("battle"):ally(c,S.pl)?uiIcon("pact"):pk?uiIcon("document"):""}<small>Войск ${own(c).reduce((a,i)=>a+S.div[i],0)} · блок ${bloc(c)||"—"}</small>`;if(!w){if(n&&j==null)h+=`<button ${S.pp<25?"disabled":""} onclick="S.pp-=25;S.just['${c}']=2;S.T+=3;render()">Оправдать цель (25 ПП)</button>`;if(j===0)h+=`<button onclick="dwar('${c}')">Объявить войну</button>`;else if(j>0)h+=`<small>Оправдание: ещё ${j} мес.</small>`;
h+=`<button ${S.pp<20||pk?"disabled":""} onclick="S.pp-=20;S.pact[S.pl+'${c}']=24;log('Пакт о ненападении с ${C[c].n}');render()">Пакт (20 ПП)</button><button ${S.pp<25?"disabled":""} onclick="inv('${c}')">В альянс (25 ПП)</button><button ${S.pp<10?"disabled":""} onclick="S.pp-=10;S.tr.st++;log('Торговля сталью с ${C[c].n}');render()">Торговля</button>`}h+="</div>"});return h}
function dwar(c){if(S.pact[S.pl+c]>0){S.stab-=10;delete S.pact[S.pl+c]}declare(S.pl,c);S.ws=Math.min(100,S.ws+8);delete S.just[c];render()}
function inv(c){S.pp-=25;if(R()<.3+S.T/150+(bloc(c)?0:.25)){const b=bloc(c)||bloc(S.pl)||"P";S.bloc[c]=b;S.bloc[S.pl]=b;log(C[c].n+" вступает в альянс")}else log(C[c].n+" отклоняет альянс");render()}

$("#flag").addEventListener("click", () => {
  W = null;
  S.dipC = S.dipC ? null : S.pl;
  render();
});
$("#wh .x").addEventListener("click", () => {
  W = null;
  render();
});
$("#focus-front").addEventListener("click", focusFront);
$("#start-offensive").addEventListener("click", offensive);


const RESEARCH = {
  t1: ["Сухопутные войска", 1936, 3],
  inf3: ["Сухопутные войска", 1938, 4, "t1", "Пехота III", "+30% к базовой атаке пехоты"],
  t2: ["Сухопутные войска", 1936, 3],
  art2: ["Сухопутные войска", 1938, 4, "t2", "Артиллерия III", "+40% к базовой атаке артиллерии"],
  t3: ["Бронетехника", 1936, 3],
  arm2: ["Бронетехника", 1938, 5, "t3", "Средний танк II", "+40% к базовой атаке танков"],
  refit: ["Бронетехника", 1938, 3, "t3", "Переоснащение", "Открывает модернизацию гарнизонов в производстве"],
  t4: ["Промышленность", 1936, 3],
  ind2: ["Промышленность", 1937, 4, "t4", "Промышленность II", "Ещё +15% выпуска"],
  t6: ["Промышленность", 1936, 3],
  t5: ["Снабжение и авиация", 1936, 3],
  log2: ["Снабжение и авиация", 1937, 4, "t5", "Полевое снабжение", "Ещё +15% защиты"],
  air2: ["Снабжение и авиация", 1938, 4, null, "Тактическая авиация", "Потолок воздушной поддержки +45%"],
  lab: ["Ракетная программа", 1937, 4, "t4", "Опытное КБ", "Открывает следующий этап ракетной программы"],
  missile: ["Ракетная программа", 1939, 5, "lab", "Ракетный арсенал", "Открывает производство и удары по вражеским провинциям"],
};
for (const [key, [, , , , name, description]] of Object.entries(RESEARCH)) {
  if (name) TECH[key] = [name, description];
}

function researchMonths(key) {
  return RESEARCH[key][2];
}

function researchLock(key) {
  const [, year, , prerequisite] = RESEARCH[key];
  if (S.y < year) return "Доступно с " + year + " года";
  if (prerequisite && !S.tech[prerequisite]) return "Требуется: " + TECH[prerequisite][0];
  if (!S.rs.includes(null)) return "Нет свободных слотов";
  return "";
}

function resCl(key) {
  if (S.tech[key] || S.rs.includes(key) || researchLock(key)) return;
  S.rs[S.rs.indexOf(null)] = key;
  render();
}


const researchBranches = [...new Set(Object.values(RESEARCH).map(([name])=>name))];
const researchIcons = ["rifle","unit","factory","globe","target"];
let researchBranch = 0;
let researchSelection = "t1";

function selectResearchBranch(index) {
  if (!researchBranches[index]) return;
  researchBranch = index;
  researchSelection = Object.keys(RESEARCH).find(key=>RESEARCH[key][0]===researchBranches[index]);
  render();
}

function inspectResearch(key) {
  researchSelection = key;
  render();
}

function researchStatus(key) {
  if (S.tech[key]) return "Изучено";
  if (S.rs.includes(key)) return "Исследуется";
  return researchLock(key) || "Доступно";
}

function researchPanel() {
  const tabs = researchBranches.map((branch,index)=>
    '<button aria-pressed="' + (index===researchBranch) + '" onclick="selectResearchBranch('+index+')">'+
    uiIcon(researchIcons[index])+branch+'</button>').join("");
  const slots = S.rs.map((key,index) =>
    '<div class="tech-slot"><small>Слот '+ (index+1) +'</small><strong>' +
    (key ? TECH[key][0] : "Свободен") + '</strong>' +
    (key ? '<progress aria-label="Прогресс" value="'+(S.rp[key]||0)+'" max="'+researchMonths(key)+'"></progress>'+
    '<button aria-label="Освободить слот '+(index+1)+'" onclick="S.rs['+index+']=null;render()">×</button>' : '')+'</div>').join("");
  const keys = Object.keys(RESEARCH).filter(key=>RESEARCH[key][0]===researchBranches[researchBranch]);
  const rows = new Map();
  const columns = [1936,1937,1938,1939];
  const nodes = keys.map(key=>{
    const [,year]=RESEARCH[key];
    const row=rows.get(year)||0;
    rows.set(year,row+1);
    return {key,year,x:24+columns.indexOf(year)*218,y:58+row*108};
  });
  const links = nodes.map(node=>{
    const previous=nodes.find(other=>other.key===RESEARCH[node.key][3]);
    if(!previous)return "";
    const start=previous.x+169,end=node.x,center=(start+end)/2;
    return '<path d="M'+start+' '+(previous.y+38)+' H'+center+' V'+(node.y+38)+' H'+end+'"/>';
  }).join("");
  const timeline = columns.map((year,index)=>
    '<div class="tech-year'+(S.y>=year?' reached':'')+'" style="left:'+(24+index*218)+'px">'+year+'</div>').join("");
  const cards = nodes.map(({key,x,y})=>
    '<button class="tech-node" data-state="'+(S.tech[key]?"done":S.rs.includes(key)?"active":researchLock(key)?"locked":"ready")+
    '" aria-pressed="'+(key===researchSelection)+'" style="left:'+x+'px;top:'+y+'px" onclick="inspectResearch(\''+key+'\')">'+
    uiIcon(researchIcons[researchBranch])+'<span><strong>'+TECH[key][0]+'</strong><small>'+researchStatus(key)+'</small></span></button>').join("");
  const current=researchSelection;
  const prerequisite=RESEARCH[current][3];
  const available=researchStatus(current)==="Доступно";
  return '<nav class="tech-tabs" aria-label="Ветки исследований">'+tabs+'</nav>'+
    '<div class="tech-slots" aria-label="Слоты исследований">'+slots+'</div>'+
    '<div class="tech-scroll"><div class="tech-board" style="height:'+
    (Math.max(...rows.values())*108+66)+'px"><svg class="tech-links" aria-hidden="true">'+links+
    '</svg>'+timeline+cards+'</div></div>'+
    '<section class="tech-detail"><div><h3>'+TECH[current][0]+'</h3><p>'+TECH[current][1]+'</p><small>'+
    RESEARCH[current][1]+' · '+researchMonths(current)+' мес. · '+researchStatus(current)+
    (prerequisite?' · Предыдущая технология: '+TECH[prerequisite][0]:'')+
    '</small></div><button onclick="resCl(\''+current+'\')" '+(available?'':'disabled')+'>Начать исследование</button></section>';
}


function produceRocket() {
  if (!S.rocketLine || !S.tech.missile || S.eq.a < 12 || S.eq.p < 6 || !tot(S.pl,"mil")) return;
  S.eq.a -= 12;
  S.eq.p -= 6;
  S.rockets++;
}

function arsenalPanel() {
  const source = S.sel;
  const ownArmy = source != null && S.prov[source].o === S.pl && S.div[source] > 0;
  let html = '<h3>Модернизация гарнизона</h3>';
  if (!S.tech.refit) {
    html += '<p>Требуется исследование «Переоснащение».</p>';
  } else if (!ownArmy) {
    html += '<p>Выберите свою провинцию с дивизиями.</p>';
  } else {
    html += '<p>' + P[source].n + ' · ' + (S.upgraded[source] ? "Модернизирован" : "Стандартное оснащение") + '</p>' +
      '<button onclick="upgradeGarrison()" ' + (S.upgraded[source] || S.eq.r < 30 || S.eq.t < 12 ? "disabled" : "") +
      '>Переоснастить (+20% к атаке из провинции)</button><p>Цена: 30 винтовок и 12 танков.</p>';
  }

  html += '<h3>Ракетный арсенал</h3>';
  if (!S.tech.missile) return html + '<p>Изучите ветку «Ракетная программа».</p>';
  const targets = P.flatMap((province, index) => atWar(S.pl, S.prov[index].o)
    ? ['<option value="' + index + '">' + province.n + '</option>'] : []);
  return html + '<p>Боезапас: ' + S.rockets + '</p>' +
    '<label><input type="checkbox" ' + (S.rocketLine ? "checked" : "") + ' onchange="S.rocketLine=this.checked"> Выпускать ракету ежемесячно</label>' +
    '<p>На одну ракету: 12 артиллерии и 6 авиации.</p>' +
    (targets.length ? '<select id="rocket-target" aria-label="Цель удара">' + targets.join("") + '</select>' +
      '<button onclick="launchRocket(Number($(\'#rocket-target\').value))" ' + (S.rockets ? "" : "disabled") + '>Запустить</button>'
      : '<p>Цели доступны после начала войны.</p>');
}

function upgradeGarrison() {
  const province = S.sel;
  if (!S.tech.refit || province == null || S.prov[province].o !== S.pl ||
      !S.div[province] || S.upgraded[province] || S.eq.r < 30 || S.eq.t < 12) return;
  S.eq.r -= 30;
  S.eq.t -= 12;
  S.upgraded[province] = true;
  log("Гарнизон переоснащён: " + P[province].n);
  render();
}

function launchRocket(target) {
  if (!S.tech.missile || !S.rockets || !S.prov[target] || !atWar(S.pl, S.prov[target].o)) return;
  const province = S.prov[target];
  S.rockets--;
  province.fort = Math.max(0, province.fort - 1);
  S.org[target] = Math.max(0, S.org[target] - 35);
  addMapEffect(cap(S.pl), target, "rocket");
  log("Ракетный удар: " + P[target].n, 1);
  W = null;
  S.sel = target;
  render();
}

const LOCAL_CITIES = [
  ["Йорк",-1.08,53.96],["Эксетер",-3.53,50.72],["Инвернесс",-4.22,57.48],
  ["Руан",1.10,49.44],["Тур",.68,47.39],["Лимож",1.26,45.83],["Дижон",5.04,47.32],
  ["Киль",10.14,54.32],["Кассель",9.48,51.31],["Эрфурт",11.03,50.98],["Любек",10.69,53.87],
  ["Гнезно",17.60,52.53],["Торунь",18.60,53.01],["Седльце",22.27,52.17],["Радом",21.15,51.40],
  ["Падуя",11.88,45.41],["Мантуя",10.79,45.16],["Сиена",11.33,43.32],["Фоджа",15.54,41.46],
  ["Псков",28.33,57.82],["Тверь",35.92,56.86],["Ржев",34.33,56.26],["Чернигов",31.29,51.50],
  ["Тарту",26.72,58.38],["Шяуляй",23.32,55.93],["Валмиера",25.42,57.54],
  ["Оденсе",10.39,55.40],["Уппсала",17.64,59.86],["Хамар",11.07,60.79],["Ювяскюля",25.75,62.24],
  ["Оломоуц",17.26,49.59],["Кремс",15.60,48.41],["Эгер",20.38,47.90],["Сибиу",24.15,45.80],
  ["Плевен",24.62,43.42],["Серре",23.55,41.09],["Лейрия",-8.81,39.74],["Сория",-2.47,41.76],
].map(([name, lon, lat]) => [name, ...PX(lon, lat)]).filter(([, a, b]) => P.some(p => pip(p.pts,a,b)));

function drawLocalCities() {
  if (cam.k < .9) return;
  x.fillStyle = "#e3dbc7";
  x.font = "500 8px Segoe UI, sans-serif";
  x.textAlign = "left";
  x.textBaseline = "middle";
  for (const [name, a, b] of LOCAL_CITIES) {
    x.fillRect(a - 1, b - 1, 2, 2);
    if (cam.k < 1.45) continue;
    x.strokeStyle = "#202628";
    x.lineWidth = 2;
    x.strokeText(name, a + 3, b);
    x.fillText(name, a + 3, b);
  }
}

function drawInfantry(a, b, friendly) {
  x.fillStyle = friendly ? "#a9d2aa" : "#d6d7c9";
  x.beginPath();
  x.arc(a + 1, b, 1.4, 0, Math.PI * 2);
  x.fill();
  x.fillRect(a, b + 2, 2, 3);
  x.fillRect(a - 1, b + 5, 1, 2);
  x.fillRect(a + 2, b + 5, 1, 2);
}

const effects = [];
function addMapEffect(from, to, type) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  effects.push({from, to, type, start: performance.now()});
  if(effects.length>12)effects.shift();
  redraw();
}

function drawMapEffects() {
  const now = performance.now();
  for (let i = effects.length - 1; i >= 0; i--) {
    const {from, to, type, start} = effects[i];
    const duration = type === "battle" ? 4600 : type === "rocket" ? 1500 : 800;
    const elapsed=now-start;
    if (elapsed >= duration) {
      effects.splice(i, 1);
      continue;
    }
    if(type==="battle"&&cam.k>=DETAIL_ZOOM){drawSkirmish(from,to,elapsed);continue}
    if(type==="battle"&&elapsed>1100)continue;
    const age=elapsed/(type==="battle"?1100:duration);
    const [a,b] = P[from].c;
    const [c,d] = P[to].c;
    const travel = Math.min(age / .73, 1);
    const arcHeight = type === "rocket" ? 75 : 6;
    const point = t => [a + (c-a)*t, b + (d-b)*t - Math.sin(t*Math.PI)*arcHeight];
    x.save();
    x.globalAlpha = 1 - age * .45;
    x.strokeStyle = type === "move" ? "#a7d9c8" : "#ffbb73";
    x.fillStyle = x.strokeStyle;
    x.lineWidth = 2;
    x.beginPath();
    x.moveTo(...point(Math.max(0, travel - .22)));
    for (let segment = 1; segment <= 5; segment++) {
      x.lineTo(...point(Math.max(0, travel - .22 * (1 - segment / 5))));
    }
    x.stroke();
    x.beginPath();
    x.arc(...point(travel), travel < 1 ? 3 : 4 + (age - .73) * 55, 0, Math.PI * 2);
    travel < 1 ? x.fill() : x.stroke();
    if(type!=="move"&&travel>=1)drawExplosion(c,d,(age-.73)/.27);
    x.restore();
  }
  if (effects.length) redraw();
}

const PORTRAIT_PHOTOS = {
  "GER": "/portraits/GER.jpg",
  "SOV": "/portraits/SOV.jpg",
  "UK": "/portraits/UK.jpg",
  "FRA": "/portraits/FRA.jpg",
  "ITA": "/portraits/ITA.jpg",
  "POL": "/portraits/POL.jpg",
  "CZE": "/portraits/CZE.jpg",
  "POR": "/portraits/POR.jpg",
  "TUR": "/portraits/TUR.jpg",
  "HUN": "/portraits/HUN.jpg",
  "ROM": "/portraits/ROM.jpg",
  "IRL": "/portraits/IRL.jpg",
  "ALB": "/portraits/ALB.jpg",
  "AUT": "/portraits/AUT.jpg",
  "ESP": "/portraits/ESP.jpg",
  "FIN": "/portraits/FIN.jpg",
  "EST": "/portraits/EST.jpg",
  "YUG": "/portraits/YUG.jpg",
  "BUL": "/portraits/BUL.jpg",
  "GRE": "/portraits/GRE.jpg",
  "NOR": "/portraits/NOR.jpg",
  "DEN": "/portraits/DEN.jpg",
  "SWE": "/portraits/SWE.jpg",
  "LIT": "/portraits/LIT.jpg",
  "LAT": "/portraits/LAT.jpg",
  "SWI": "/portraits/SWI.gif",
  "BEL": "/portraits/BEL.jpg",
  "NLD": "/portraits/NLD.jpg",
  "LUX": "/portraits/LUX.jpg"
};

function countryPortrait(country) {
  if(C[country]?.administration)return flagBadge(country);
  country=C[country]?.roster||country;
  const benelux = {BEL:"Леопольд III", NLD:"Вильгельмина", LUX:"Шарлотта"};
  const codes = country === "BEN" ? Object.keys(benelux) : [country];
  return codes.map(code=>PORTRAIT_PHOTOS[code]
    ? '<img src="' + PORTRAIT_PHOTOS[code] + '" alt="' + (LDR[code] || benelux[code]) + '">'
    : '<div class="portrait-missing">Архивное фото недоступно</div>').join("");
}

const theaterButton=document.createElement("button");
theaterButton.type="button";theaterButton.id="theater-summary";theaterButton.title="Открыть журнал кампании";
theaterButton.setAttribute("aria-controls","log");theaterButton.setAttribute("aria-expanded","false");
$("#log").before(theaterButton);$("#log").hidden=true;
theaterButton.onclick=()=>{const log=$("#log");log.hidden=!log.hidden;theaterButton.setAttribute("aria-expanded",String(!log.hidden));theaterButton.title=log.hidden?"Открыть журнал кампании":"Свернуть журнал кампании"};
const campaignMenu = $("#campaign-menu");
if(!$("#history-status")){
  campaignMenu.querySelector(".campaign-countries")?.remove();
  campaignMenu.querySelector(".world-settings")?.remove();
  campaignMenu.querySelector("header").innerHTML='<p class="campaign-date">Новая кампания</p><h1 id="campaign-title">Карта <span>мира</span></h1>';
  campaignMenu.querySelector(".campaign-actions").insertAdjacentHTML("beforebegin",'<fieldset class="world-settings"><legend>Дата и страна старта</legend><label>Стартовый год<input id="world-year" type="number" min="-3400" max="2026" value="1936"></label><label>Страна или территория<select size="7" id="world-country"></select></label><small id="history-status" role="status"></small></fieldset>');
}
const menuButton = $("#campaign-open");
const resumeButton = $("#campaign-resume");
let campaignCountry = "GER";
function showCampaign(show) {
  lastCityTick=null;
  campaignMenu.hidden = !show;
  redraw();
  $("#game-layer").inert = show;
  menuButton.hidden = show;
  if (show) {
    setSpd(0);
    resumeButton.hidden = !activeMapYear || Boolean(S.over);
    $("#campaign-start").focus();
  } else {
    menuButton.focus();
  }
}

resumeButton.addEventListener("click", () => showCampaign(false));
menuButton.addEventListener("click", () => showCampaign(true));


const FLAG_ASSETS = {
  "GER": "/flags/GER.png",
  "SOV": "/flags/SOV.svg",
  "UK": "/flags/UK.png",
  "FRA": "/flags/FRA.svg",
  "ITA": "/flags/ITA.svg",
  "POL": "/flags/POL.svg",
  "SWI": "/flags/SWI.png",
  "AUT": "/flags/AUT.svg",
  "CZE": "/flags/CZE.png",
  "ESP": "/flags/ESP.png",
  "POR": "/flags/POR.png",
  "IRL": "/flags/IRL.png",
  "DEN": "/flags/DEN.png",
  "NOR": "/flags/NOR.png",
  "SWE": "/flags/SWE.png",
  "FIN": "/flags/FIN.png",
  "EST": "/flags/EST.png",
  "LAT": "/flags/LAT.png",
  "LIT": "/flags/LIT.png",
  "HUN": "/flags/HUN.svg",
  "ROM": "/flags/ROM.png",
  "YUG": "/flags/YUG.svg",
  "BUL": "/flags/BUL.png",
  "GRE": "/flags/GRE.png",
  "ALB": "/flags/ALB.svg",
  "TUR": "/flags/TUR.png",
  "BEL": "/flags/BEL.png",
  "NLD": "/flags/NLD.png",
  "LUX": "/flags/LUX.png"
};

const ICON_PATHS = {
  politics:"M2 8l10-5 10 5M3 21h18M5 18h14M7 9v7m5-7v7m5-7v7",
  balance:"M12 3v18m-6 0h12M4 8l8-3 8 3M4 8l-2 6h4zM20 8l-2 6h4z",
  fire:"M12 22c-5 0-8-3-8-7 0-3 2-5 4-7 0 3 1 4 2 5 3-4 3-7 2-11 4 3 8 8 8 13 0 4-3 7-8 7z",
  people:"M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8-1a2.5 2.5 0 1 0 0-5M2 20v-1a6 6 0 0 1 12 0v1zm14-6a5 5 0 0 1 6 5v1",
  factory:"M3 21V11l6 3v-4l6 4 1-10h4l1 17zM7 18h1m4 0h1m4 0h1",
  steel:"M3 4h18v4h-7v8h7v4H3v-4h7V8H3z",
  fuel:"M7 3h8l3 3v15H6V5zm7 0v5h4M9 11l6 7m0-7-6 7",
  rifle:"M2 15l5-5h11V8h4v4h-8l-2 4H9l-4 4z",
  target:"M12 3a9 9 0 1 0 9 9m-4 0a5 5 0 1 1-5-5m0 5 9-9m-5 0h5v5",
  research:"M9 3h6m-5 0v7l-5 8a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-8V3M8 15h8",
  build:"M4 21V3m-2 18h9M4 5h16l-4-2H4m5 2v16m9-16v8l-2 2",
  globe:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 0c-5 5-5 13 0 18m0-18c5 5 5 13 0 18M3 12h18",
  medal:"M7 2l4 8m6-8-4 8m-1 0a5 5 0 1 0 0 10 5 5 0 0 0 0-10z",
  unit:"M5 11h14m-13 0v-1a6 6 0 0 1 12 0v1m-10 3a4 4 0 0 0 8 0M3 22c1-4 4-5 9-5s8 1 9 5",
  document:"M5 3h10l4 4v14H5zm9 0v5h5M8 12h8m-8 4h8",
  plus:"M12 5v14M5 12h14",
  battle:"M3 3l6 1 12 13-4 4L4 9zm0 18L21 3m-4 0h4v4",
  pact:"M3 12l5-6h8l5 6-5 6H8zm5-6 7 9",
  pause:"M9 5v14m6-14v14",
  next:"M6 5l9 7-9 7zm12 0v14",
};
function uiIcon(name) {
  return '<svg class="game-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' +
    ICON_PATHS[name] + '"/></svg>';
}

function flagBadge(country) {
  if(globalCampaign){const side=C[country];if(!side.flag)return '<span title="Флаг для этого года не установлен">'+escapeCityName(side.n.slice(0,3))+'</span>';return '<img class="flag-art" alt="'+(side.standard?"Игровое знамя":"Флаг")+' · '+escapeCityName(side.n)+'" src="'+side.flag+'">' }
  const codes = country === "BEN" ? ["BEL","NLD","LUX"] : [country];
  return codes.map(code => FLAG_ASSETS[code]
    ? '<img class="flag-art" src="' + FLAG_ASSETS[code] + '" alt="">'
    : '<span class="flag-placeholder">' + code + '</span>').join("");
}

const flagImages = {};
for (const [code, url] of Object.entries(FLAG_ASSETS)) {
  const img = new Image();
  img.onload = redraw;
  img.src = url;
  flagImages[code] = img;
}

function drawUnitCounter(province, index) {
  if(cam.k>=3.4&&reserveTowns[index])return;
  const count = S.div[index];
  if (!count) return;
  const country = S.prov[index].o;
  const point=reserveTowns[index]?.point||province.c;
  if(worldVisible(...point,60))drawFormationCounter(point,count,country,index,globalCampaign?18:0);
}
function drawFormationCounter([a,b],count,country,index,offset,guns=0){
  const friendly=country===S.pl;
  const scale = Math.max(.65, cam.k);
  x.save();
  x.translate(a,b+offset/scale);
  x.scale(1/scale,1/scale);
  x.fillStyle = friendly ? "#244535" : atWar(country,S.pl)?"#632c32":ally(country,S.pl)?"#28465d":"#343839";
  x.fillRect(-23,-9,46,18);
  x.strokeStyle = index === S.sel ? "#f0d58a" : "#111b1d";
  x.lineWidth = 1;
  x.strokeRect(-23,-9,46,18);
  const flags = globalCampaign?[loadStandard(C[country].flag)]:(country === "BEN" ? ["BEL","NLD","LUX"] : [country]).map(code=>flagImages[code]);
  if (flags.every(flag=>flag?.naturalWidth)) {
    const width=16/flags.length;
    flags.forEach((flag,n)=>x.drawImage(flag,-16+n*width,-6,width,11));
  } else {
    x.fillStyle = "#e2d9c4";
    x.font = "600 6px Segoe UI";
    x.textAlign = "center";
    x.fillText(globalCampaign?C[country].n.slice(0,3).toUpperCase():country,-8,2);
  }
  x.fillStyle = friendly ? "#d3edc1" : "#f2ebdd";
  x.font = "700 10px Segoe UI";
  x.textAlign = "center";
  x.textBaseline = "middle";
  x.fillText(count,15,-1);
  x.strokeStyle="#d8d8bf";x.lineWidth=.85;x.strokeRect(0,-5,9,6);x.beginPath();if(guns){x.arc(4.5,-2,1.3,0,7)}else if(friendly&&S.tpl.t){x.ellipse(4.5,-2,3,1.6,0,0,7)}else{x.moveTo(0,-5);x.lineTo(9,1);x.moveTo(9,-5);x.lineTo(0,1)}x.stroke();
  
  x.fillStyle="#90a485";
  x.fillRect(-21,4,42*S.org[index]/100,1.5);x.fillStyle="#d7a047";x.fillRect(-21,6,42*(S.prov[index].readiness??100)/100,1.5);
  x.restore();
}

function drawMountainNames(){
  if(cam.k<1.4||cam.k>5.5)return;
  x.save();x.fillStyle="rgba(52,48,40,.85)";x.strokeStyle="rgba(226,216,190,.75)";x.lineWidth=2/cam.k;
  x.font="italic "+12/cam.k+"px Georgia";x.textAlign="center";
  for(const [name,lon,lat,angle] of [["Альпы",10.4,46.6,-.15],["Карпаты",24.4,47.6,-.48],["Пиренеи",.7,42.7,-.12],["Кавказ",43.8,42.9,.3],["Гималаи",84,28.5,.25],["Анды",-69,-24,-1.15],["Скалистые горы",-111,45,-1.1],["Атлас",-5.4,31.2,-.28],["Урал",59.4,60,-1.2]]){
    const [a,b]=PX(lon,lat);if(!worldVisible(a,b,40))continue;
    x.save();x.translate(a,b);x.rotate(angle);x.strokeText(name,0,0);x.fillText(name,0,0);x.restore();
  }
  x.restore();
}

function drawExplosion(a,b,progress) {
  x.save();
  x.globalAlpha = Math.max(0,1-progress);
  const radius = (6+progress*22)/Math.max(1,cam.k*.65);
  const glow = x.createRadialGradient(a,b,0,a,b,radius);
  glow.addColorStop(0,"#fff5bb");
  glow.addColorStop(.32,"#f5a34e");
  glow.addColorStop(1,"transparent");
  x.fillStyle=glow;
  x.fillRect(a-radius,b-radius,radius*2,radius*2);
  x.strokeStyle="#ffc47b";
  for(let i=0;i<8;i++){
    const angle=i*Math.PI/4;
    x.beginPath();
    x.moveTo(a+Math.cos(angle)*radius*.7,b+Math.sin(angle)*radius*.7);
    x.lineTo(a+Math.cos(angle)*radius*1.3,b+Math.sin(angle)*radius*1.3);
    x.stroke();
  }
  x.restore();
}



const DETAIL_ZOOM = 1.45;
let districtMap = [];
let detailedCities = [];
let visibleCityLabels = [],visibleCityMarks=[],hoverCity=null;
const cityHitContext=document.createElement("canvas").getContext("2d");

let hoveredDistrict = null;
const squaredDistance = (a,b) => (a[0]-b[0])**2+(a[1]-b[1])**2;

function clipDistrict(polygon, seed, neighbor) {
  const dx=neighbor[0]-seed[0],dy=neighbor[1]-seed[1];
  const mx=(seed[0]+neighbor[0])/2,my=(seed[1]+neighbor[1])/2;
  const distance=([a,b])=>(a-mx)*dx+(b-my)*dy;
  const result=[];
  for(let i=0;i<polygon.length;i++){
    const a=polygon[i],b=polygon[(i+1)%polygon.length];
    const da=distance(a),db=distance(b);
    if(da<=0)result.push(a);
    if((da<=0)!==(db<=0)){
      const ratio=da/(da-db);
      result.push([a[0]+(b[0]-a[0])*ratio,a[1]+(b[1]-a[1])*ratio]);
    }
  }
  return result;
}

function buildCityDistricts(rows) {
  const byProvince=P.map(()=>[]);
  const cities=[];
  for(const [name,lon,lat,population] of rows){
    const point=PX(lon,lat);
    const index=P.findIndex(p=>pip(p.pts,...point));
    if(index<0)continue;
    const city={id:cities.length,province:index,name,point,population};
    byProvince[index].push(city);
    cities.push(city);
  }
  detailedCities=cities;
  districtMap=P.map((p,index)=>{
    const minX=Math.min(...p.pts.map(point=>point[0]));
    const maxX=Math.max(...p.pts.map(point=>point[0]));
    const minY=Math.min(...p.pts.map(point=>point[1]));
    const maxY=Math.max(...p.pts.map(point=>point[1]));
    const bounds=[minX,minY,maxX,maxY];
    const sites=[];
    for(const city of byProvince[index]){
      if(sites.every(other=>squaredDistance(city.point,other.point)>13**2))sites.push(city);
    }
    // Extra rural sites divide large stretches with no city in the source data.
    const step=Math.max(12,Math.min(29,Math.sqrt(p.ar)/3.2));
    for(let y=minY+step*.45,row=0;y<maxY;y+=step,row++){
      for(let x=minX+step*(row%2?.65:.35),column=0;x<maxX;x+=step,column++){
        const point=[x+Math.sin(index*3+row*8+column)*step*.18,
          y+Math.cos(index+row*4+column*5)*step*.22];
        if(pip(p.pts,...point)&&sites.every(other=>squaredDistance(point,other.point)>step**2*.58)){
          sites.push({point,name:null});
        }
      }
    }
    const rectangle=[[minX,minY],[maxX,minY],[maxX,maxY],[minX,maxY]];
    const cells=sites.map(site=>({
      ...site,
      outline:sites.reduce((polygon,other)=>site===other?polygon:clipDistrict(polygon,site.point,other.point),rectangle),
    }));
    return {bounds,cells};
  });
  redraw();
}

function escapeCityName(name) {
  return name.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}

function districtAt(index,a,b) {
  let nearest=null;
  let distance=Infinity;
  for(const cell of districtMap[index]?.cells||[]){
    const current=squaredDistance(cell.point,[a,b]);
    if(current<distance){distance=current;nearest=cell}
  }
  return nearest;
}

function worldVisible(a,b,padding=24) {
  const screenX=a*cam.k+cam.tx,screenY=b*cam.k+cam.ty;
  return screenX>=-padding&&screenY>=-padding&&screenX<=innerWidth+padding&&screenY<=innerHeight+padding;
}

function drawDistricts() {
  for(const [index,district] of districtMap.entries()){
    const [a,b,c,d]=district.bounds;
    if(c*cam.k+cam.tx<0||d*cam.k+cam.ty<0||a*cam.k+cam.tx>innerWidth||b*cam.k+cam.ty>innerHeight)continue;
    x.save();
    poly(P[index].pts);
    x.clip();
    for(const [cellIndex,cell] of district.cells.entries()){
      if(cell.outline.length<3)continue;
      poly(cell.outline);
      x.fillStyle=cell===hoveredDistrict?"rgba(246,219,156,.24)":
        cellIndex%3===0?"rgba(243,226,174,.08)":"rgba(26,40,30,.065)";
      x.fill();
      x.strokeStyle=cell===hoveredDistrict?"rgba(255,220,155,.88)":"rgba(26,37,32,.38)";
      x.lineWidth=(cell===hoveredDistrict?1.8:1)/cam.k;
      x.stroke();
    }
    x.restore();
  }
}

function citiesInView(){
  if(!cityBuckets||cam.k<1.5)return detailedCities;
  const found=[];
  for(let col=Math.floor((-cam.tx-24)/cam.k/128);col<=Math.floor((innerWidth-cam.tx+24)/cam.k/128);col++){
    for(let row=Math.floor((-cam.ty-24)/cam.k/128);row<=Math.floor((innerHeight-cam.ty+24)/cam.k/128);row++){
      const bucket=cityBuckets.get(col+","+row);if(bucket)found.push(...bucket);
    }
  }
  return found.sort((a,b)=>a.id-b.id);
}
function mapCityPriority(city){
  if(S.cityTarget===city)return 5;
  if(S.cityOrders.has(city.id)||S.cityGarrisons.has(city.id))return 4;
  if(reserveTowns[city.province]===city&&S.div[city.province]>0)return 3;
  return city.primary?2:1;
}
function spacedMapCities(candidates,scale){
  const gap=58-36*cityZoomFade(scale,3,18),bins=new Map(),result=[];
  candidates.sort((a,b)=>mapCityPriority(b)-mapCityPriority(a)||b.population-a.population||a.id-b.id);
  for(const city of candidates){
    const [x,y]=city.point,col=Math.floor(x*scale/gap),row=Math.floor(y*scale/gap);
    let crowded=false;
    for(let i=col-1;i<=col+1&&!crowded;i++)for(let j=row-1;j<=row+1&&!crowded;j++){
      crowded=(bins.get(i+","+j)||[]).some(other=>squaredDistance(city.point,other.point)*scale*scale<gap*gap);
    }
    if(crowded&&mapCityPriority(city)<3)continue;
    const key=col+","+row;
    if(!bins.has(key))bins.set(key,[]);
    bins.get(key).push(city);result.push(city);
  }
  return result;
}
function drawDetailedCities() {
  const used=[];
  visibleCityLabels=[];visibleCityMarks=[];
  const scale=cam.k;
  x.textAlign="left";
  x.textBaseline="middle";
  const candidates=citiesInView().filter(city=>worldVisible(...city.point)&&cityVisible(city));
  for(const city of spacedMapCities(candidates,scale)){
    const [a,b]=city.point;
    const major=city.population>=250000;
    visibleCityMarks.push(city);if(scale>4)drawSettlement(city,scale);
    const owner=cityOwner(city),reserve=reserveTowns[city.province]===city&&S.prov[city.province].o===owner?S.div[city.province]:0;
    const strength=cityUnits(city)+reserve;
    if(scale>=3.4&&strength){
      const detail=cityZoomFade(scale,3.4,8);
      x.save();x.globalAlpha=detail;
      const number=Math.min(strength,3);
      for(let j=0;j<number;j++){
        const spread=(j-(number-1)/2)*(16+9*detail);
        drawRifleman(a+spread/scale,b-(7+j%2*5)/scale,j===2?-1:1,owner===S.pl?"#90977a":"#818575",0,false);
      }
      if(owner===S.pl&&S.tpl.t){
        x.save();x.translate(a+21/scale,b-4/scale);x.scale(1/scale,1/scale);
        x.fillStyle="#283028";x.fillRect(-9,-3,18,7);x.fillStyle="#788167";x.fillRect(-8,-5,15,5);
        x.fillStyle="#90957a";x.fillRect(-4,-8,8,4);x.fillRect(3,-7,10,2);x.restore();
      }
      x.restore();
      drawFormationCounter(city.point,strength,owner,city.province,16,S.cityGarrisons.get(city.id)?.guns);
    }
    if(S.cityGarrisons.get(city.id)?.guns)drawFieldGun(a,b-6/scale,scale);
    x.fillStyle="#f1e8d8";
    const fontSize=major?13:10;
    x.font=(major?"700 ":"500 ")+fontSize/scale+"px Segoe UI,sans-serif";
    const width=x.measureText(city.name).width*scale;
    const label={x:a*scale+5,y:b*scale-fontSize/2,w:width+6,h:fontSize+4};
    if(used.some(other=>label.x<other.x+other.w&&label.x+label.w>other.x&&label.y<other.y+other.h&&label.y+label.h>other.y))continue;
    used.push(label);
    visibleCityLabels.push({...label,city});
    x.lineWidth=2.4/scale;
    x.strokeStyle="#27312d";
    x.strokeText(city.name,a+5/scale,b);
    x.fillText(city.name,a+5/scale,b);
  }
}

const legacyCitiesReady=fetch("/map-cities.json")
  .then(response=>{if(!response.ok)throw new Error("City data unavailable");return response.json()})
  .then(rows=>{legacyCityRows=rows;if(!globalCampaign)buildCityDistricts(rows)})
  .catch(error=>console.warn(error.message));



function drawFieldGun(a,b,scale){
  x.save();x.translate(a,b);x.scale(1/scale,1/scale);
  x.strokeStyle="#252c26";x.lineWidth=3;x.beginPath();x.moveTo(-7,3);x.lineTo(1,-1);x.lineTo(10,-5);x.stroke();
  x.strokeStyle="#b2ac87";x.lineWidth=1.5;x.beginPath();x.moveTo(1,-2);x.lineTo(10,-6);x.stroke();
  x.fillStyle="#424938";x.beginPath();x.arc(0,1,3.7,0,Math.PI*2);x.fill();x.strokeStyle="#c3bba0";x.lineWidth=.8;x.stroke();x.restore();
}
function drawSkirmish(from,to,elapsed,target=null,duration=4600,start=null,battery=false) {
  const origin=start||P[from].c,destination=target||P[to].c;
  const border=EDL.find(edge=>edge.ps.includes(from)&&edge.ps.includes(to));
  const center=target|| (border?[(border.A[0]+border.B[0])/2,(border.A[1]+border.B[1])/2]:destination);
  const distance=Math.hypot(destination[0]-origin[0],destination[1]-origin[1])||1;
  const ux=(destination[0]-origin[0])/distance,uy=(destination[1]-origin[1])/distance;
  if(!worldVisible(...center,120))return;
  const scale=Math.max(1,cam.k/2.2);
  const spread=12/scale;
  if(battery||S.tpl.a>0){
    drawFieldGun(center[0]-ux*26/scale,center[1]-uy*26/scale,scale);
    x.save();x.translate(center[0]-ux*26/scale,center[1]-uy*26/scale);
    x.scale(1/scale,1/scale);x.rotate(Math.atan2(uy,ux));
    x.fillStyle="#515444";x.fillRect(-4,-2,8,4);x.fillRect(2,-1,8,1.5);
    x.fillStyle="#252a25";x.fillRect(-3,1,3,2);x.fillRect(2,1,3,2);
    x.restore();
    const flight=(elapsed%1450)/1450;
    if(flight<.68){const t=flight/.68;x.fillStyle="#e8cb8e";x.beginPath();x.arc(center[0]-ux*26*(1-t)/scale,center[1]-uy*26*(1-t)/scale-Math.sin(t*Math.PI)*9/scale,1/scale,0,Math.PI*2);x.fill()}
  }
  if(S.prov[from].airfield>0&&S.eq.p>=1){
    const t=(elapsed%2500)/2500;
    x.save();x.translate(center[0]+(t-.5)*92/scale,center[1]-14/scale);
    x.scale(1/scale,1/scale);x.fillStyle="#a1ada9";
    x.beginPath();x.moveTo(6,0);x.lineTo(0,-1);x.lineTo(-3,-6);x.lineTo(-3,-1);x.lineTo(-6,0);x.lineTo(-3,1);x.lineTo(-3,6);x.lineTo(0,1);x.closePath();x.fill();x.restore();
  }
  const fade=Math.min(1,elapsed/250,(duration-elapsed)/600);
  x.save();
  x.globalAlpha=fade;
  for(let rank=0;rank<3;rank++){
    for(const side of [-1,1]){
      const pulse=(elapsed+rank*117+(side===1?210:0))%480;
      const shooting=pulse<95;
      const approach=Math.min(elapsed/1000,1)*4;
      const offset=side*(14-approach+(shooting?1:0))/scale;
      const lateral=(rank-1)*spread;
      const a=center[0]+ux*offset-uy*lateral,b=center[1]+uy*offset+ux*lateral;
      const facing=ux*side>0?-1:1;
      drawRifleman(a,b,facing,side===-1?"#a8ad83":"#a99c86",elapsed+rank*80,shooting);
      if(!shooting)continue;
      const muzzle=[a-ux*side*6/scale,b-uy*side*6/scale-5/scale];
      const travel=pulse/95;
      x.beginPath();
      x.moveTo(...muzzle);
      x.lineTo(muzzle[0]-ux*side*(7+travel*15)/scale,muzzle[1]-uy*side*(7+travel*15)/scale);
      x.strokeStyle="rgba(255,218,146,.66)";
      x.lineWidth=.7/scale;
      x.stroke();
      x.fillStyle="#ffda85";
      x.beginPath();
      x.arc(...muzzle,1.4/scale,0,Math.PI*2);
      x.fill();
    }
  }
  const hit=(elapsed%1100)/1100;
  const [a,b]=center;
  drawExplosion(a+3/scale,b+2/scale,hit);
  for(let i=0;i<3;i++){
    const age=(hit+i/3)%1;
    x.fillStyle="rgba(50,55,49,"+(.22*(1-age))+")";
    x.beginPath();
    x.arc(a+(i-1)*4/scale+age*5/scale,b-age*13/scale,(2+age*4)/scale,0,Math.PI*2);
    x.fill();
  }
  x.restore();
}

function drawRifleman(a,b,facing,color,elapsed,shooting) {
  const size=(1.35+1.45*cityZoomFade(cam.k,3.4,15))/cam.k;
  x.save();
  x.translate(a,b);
  x.scale(facing*size,size);
  const stride=shooting?0:Math.sin(elapsed/67)*1.8;
  x.fillStyle="rgba(15,21,19,.6)";
  x.beginPath();x.ellipse(1,.4,4.2,1.15,-.12,0,Math.PI*2);x.fill();
  x.translate(0,-Math.abs(stride)*.35);
  x.strokeStyle="#343a31";
  x.lineWidth=1.4;
  x.beginPath();
  x.moveTo(-.6,-4);x.lineTo(-.8+stride*.7,-2);x.lineTo(-1.5+stride,0);
  x.moveTo(.8,-4);x.lineTo(1.6-stride*.65,-2);x.lineTo(2-stride,0);
  x.stroke();
  x.fillStyle=color;
  x.beginPath();x.moveTo(-1.9,-8.6);x.quadraticCurveTo(.8,-9.2,2,-7.5);x.lineTo(1.25,-3.8);x.lineTo(-1.7,-3.6);x.closePath();x.fill();
  x.strokeStyle="#6f593e";x.lineWidth=.7;x.beginPath();x.moveTo(1,-8.2);x.lineTo(-1.3,-4.6);x.stroke();
  x.fillStyle="#484d3a";x.fillRect(-3.1,-8.2,1.8,3.6);
  x.fillStyle="#393d31";x.fillRect(-1.7,-5.3,3.1,.65);
  x.fillStyle="#b2a389";x.fillRect(-.55,-5.3,.65,.55);
  x.strokeStyle="#626854";x.lineWidth=1.25;
  x.beginPath();x.moveTo(1,-8);x.lineTo(2.3,-6.2);x.lineTo(3.8,-6.8);x.stroke();
  x.fillStyle="#cab18e";
  x.fillRect(-.9,-10.2,2.6,2.8);
  x.fillStyle="#4b5441";
  x.beginPath();x.arc(0,-10.5,2,Math.PI,2*Math.PI);x.fill();
  x.fillRect(-2.1,-10.5,4.8,.65);
  x.strokeStyle="#2e2b22";
  x.lineWidth=1.15;
  x.beginPath();
  x.moveTo(-.3,-7);x.lineTo(6,shooting?-7.5:-5.5);
  x.stroke();
  x.restore();
}



const CITY_BATTLE_TIME = 8500;
const CITY_MOVE_TIME = 1700;
let lastCityTick = null;

function cityOwner(city) {
  return S.cityGarrisons.get(city.id)?.owner ?? S.prov[city.province].o;
}

function cityUnits(city) {
  return S.cityGarrisons.get(city.id)?.units ?? 0;
}

function cityVisible(city) {
  if(reserveTowns[city.province]===city&&S.div[city.province]>0)return true;
  if(city.primary||city.port&&cam.k>=(city.population>=180000?1.05:3.1))return true;
  const minimum=cam.k<2?450000:cam.k<3.1?220000:cam.k<4.8?35000:0;
  return city.population>=minimum||S.cityGarrisons.has(city.id)||S.cityOrders.has(city.id)||S.cityTarget===city;
}

function cityAt(screenX,screenY) {
  if(cam.k<.53)return null;
  const px=(screenX-cam.tx)/cam.k,py=(screenY-cam.ty)/cam.k;
  const ax=screenX-cam.tx,ay=screenY-cam.ty;
  const label=visibleCityLabels.find(l=>ax>=l.x&&ax<=l.x+l.w&&ay>=l.y&&ay<=l.y+l.h);
  let pin=null,pinDistance=Infinity;
  for(const city of visibleCityMarks){
    const d=squaredDistance(city.point,[px,py]);
    if(d<pinDistance){pin=city;pinDistance=d}
  }
  if(pinDistance*cam.k**2<=16)return pin;
  if(label||pinDistance*cam.k**2<=64)return label?.city||pin;
  if(cam.k>=2.4){const index=hit(screenX,screenY),layer=cityLayers[index];if(layer&&cityHitContext.isPointInPath(layer.path,px,py,"evenodd"))return layer.cities[layer.mesh.find(px,py)]}
  return null;
}

let cityBuckets=null;
let cityRegions=[],cityLinks=[],cityLayers=[],reserveTowns=[];
const meshLibrary=import("/vendor/d3-delaunay.min.js").then(()=>window.d3.Delaunay);
function polygonPath(points){
  const path=new Path2D();if(!points?.length)return path;
  path.moveTo(...points[0]);for(const point of points.slice(1))path.lineTo(...point);path.closePath();return path;
}
async function buildCityNetwork(year){
  const Mesh=await meshLibrary,ctx=cityHitContext;
  const grouped=P.map(()=>[]);
  detailedCities.forEach(c=>grouped[c.province].push(c));
  const regions=P.map((p,i)=>{
    const path=globalCampaign?new Path2D():polygonPath(p.pts);
    if(globalCampaign)path.addPath(worldShapes[i].displayPath,new DOMMatrix([14.5,0,0,22,-2465,-418]));
    const boxes=globalCampaign?worldShapes[i].bounds.map(r=>[...worldPoint([r.l,r.t]),...worldPoint([r.r,r.b])]):[[Math.min(...p.pts.map(q=>q[0])),Math.min(...p.pts.map(q=>q[1])),Math.max(...p.pts.map(q=>q[0])),Math.max(...p.pts.map(q=>q[1]))]];
    return {path,boxes};
  });
  const regionGrid=new Map();
  for(const [i,region] of regions.entries())for(const [l,t,r,b] of region.boxes){
    for(let col=Math.floor((l-1)/64);col<=Math.floor((r+1)/64);col++)
      for(let row=Math.floor((t-1)/64);row<=Math.floor((b+1)/64);row++){
        const key=col+","+row;
        if(!regionGrid.has(key))regionGrid.set(key,new Set());
        regionGrid.get(key).add(i);
      }
  }
  const contains=(i,a,b)=>regions[i].boxes.some(([l,t,r,d])=>a>=l-1&&b>=t-1&&a<=r+1&&b<=d+1)&&ctx.isPointInPath(regions[i].path,a,b,"evenodd");
  let lastYield=performance.now();
  if(year>=1950){
    for(const [name,lon,lat,population] of await readMapFile("/city-network-places.json")){
      if(performance.now()-lastYield>16){await new Promise(resolve=>setTimeout(resolve,0));lastYield=performance.now()}
      const point=PX(lon,lat),candidates=regionGrid.get(Math.floor(point[0]/64)+","+Math.floor(point[1]/64));
      if(!candidates)continue;
      let i=-1;for(const j of candidates)if(contains(j,...point)){i=j;break}
      if(i<0)continue;
      if(grouped[i].some(c=>squaredDistance(c.point,point)<14))continue;
      const city={id:detailedCities.length,province:i,name,point,population};detailedCities.push(city);grouped[i].push(city);
    }
  }
  cityBuckets=new Map();
  for(const city of detailedCities){
    const key=Math.floor(city.point[0]/128)+","+Math.floor(city.point[1]/128);
    if(!cityBuckets.has(key))cityBuckets.set(key,[]);
    cityBuckets.get(key).push(city);
  }
  cityRegions=[];cityLinks=detailedCities.map(()=>new Set());
  reserveTowns=grouped.map((cities,i)=>cities.find(c=>c.primary)||cities.reduce((a,b)=>!a||squaredDistance(b.point,P[i].c)<squaredDistance(a.point,P[i].c)?b:a,null));
  function connect(a,b){
    if(a===b)return;
    for(const t of [.2,.4,.6,.8]){
      const x=a.point[0]+(b.point[0]-a.point[0])*t,y=a.point[1]+(b.point[1]-a.point[1])*t;
      if(!contains(a.province,x,y)&&!contains(b.province,x,y))return;
    }
    cityLinks[a.id].add(b.id);cityLinks[b.id].add(a.id);
  }
  const layers=[];
  for(const [i,cities] of grouped.entries()){
    if(!cities.length){layers.push(null);continue}
    if(performance.now()-lastYield>16){await new Promise(resolve=>setTimeout(resolve,0));lastYield=performance.now()}
    const mesh=Mesh.from(cities,c=>c.point[0],c=>c.point[1]);
    const boxes=regions[i].boxes;
    const bounds=[Math.min(...boxes.map(b=>b[0]))-1,Math.min(...boxes.map(b=>b[1]))-1,Math.max(...boxes.map(b=>b[2]))+1,Math.max(...boxes.map(b=>b[3]))+1];
    const vor=mesh.voronoi(bounds),lines=new Path2D();vor.render(lines);
    cities.forEach((c,j)=>{cityRegions[c.id]=polygonPath(vor.cellPolygon(j));for(const k of vor.neighbors(j))if(j<k)connect(c,cities[k])});
    layers.push({...regions[i],cities,mesh,lines});
  }
  cityLayers=layers;
  if(detailedCities.length>1){
    const mesh=Mesh.from(detailedCities,c=>c.point[0],c=>c.point[1]);
    for(const a of detailedCities)for(const j of mesh.neighbors(a.id)){const b=detailedCities[j];if(j>a.id&&a.province!==b.province&&P[a.province].nb.includes(b.province))connect(a,b)}
  }
}
function cityZoomFade(scale,start,end){
  const t=Math.min(1,Math.max(0,(scale-start)/(end-start)));
  return t*t*(3-2*t);
}
function paintCityRegions(){
  const alpha=cityZoomFade(cam.k,1.35,4.8);if(!alpha)return;
  for(const layer of cityLayers){
    if(!layer||!layer.boxes.some(([l,t,r,b])=>r*cam.k+cam.tx>=0&&b*cam.k+cam.ty>=0&&l*cam.k+cam.tx<=innerWidth&&t*cam.k+cam.ty<=innerHeight))continue;
    x.save();x.clip(layer.path,"evenodd");x.globalAlpha=alpha;
    x.lineWidth=(1+1.4*cityZoomFade(cam.k,1.7,14))/cam.k;x.strokeStyle="rgba(55,48,44,.76)";x.stroke(layer.lines);
    for(const city of layer.cities){
      const selected=city===S.cityTarget,adjacent=S.cityTarget&&cityLinks[S.cityTarget.id]?.has(city.id),held=cityOwner(city)!==S.prov[city.province].o;
      if(!selected&&!adjacent&&!held)continue;
      x.fillStyle=selected?"rgba(241,201,112,.4)":held?"rgba(115,158,109,.48)":"rgba(230,216,156,.14)";
      x.fill(cityRegions[city.id]);
      if(selected){x.lineWidth=(2+4*cityZoomFade(cam.k,1.7,10)+1.5*cityZoomFade(cam.k,10,42))/cam.k;x.strokeStyle="#f1cf85";x.stroke(cityRegions[city.id])}
    }
    x.restore();
  }
}
function citySources(target){
  const ids=[target.id,...(cityLinks[target.id]||[])],result=[];
  for(const id of ids){
    const city=detailedCities[id],index=city.province;
    if(cityOwner(city)!==S.pl)continue;
    if(reserveTowns[index]===city&&S.div[index]>0&&S.prov[index].o===S.pl)result.push({key:"p"+index,province:index,point:city.point,units:S.div[index],name:city.name+" · резерв"});
    if(id!==target.id&&cityUnits(city)>0&&!S.cityOrders.has(id))result.push({key:"c"+id,province:index,point:city.point,units:cityUnits(city),name:city.name,city});
  }
  return result;
}
function selectMapPoint(screenX,screenY) {$("#foreign-country").hidden=true;
  x.textAlign="center";x.fillStyle="#a3c1c9";x.font="italic "+14/cam.k+"px Georgia";
  for(const [label,lon,lat] of [["Тихий океан",-145,-4],["Атлантический океан",-35,20],["Индийский океан",77,-26],["Северный Ледовитый океан",63,79],["Южный океан",-15,-60]])x.fillText(label,...PX(lon,lat));
  if(!globalCampaign&&cam.k<.53){focusWorldCountry(screenX,screenY);return}
  const city=cityAt(screenX,screenY);
  if(city&&applyPlanClick(city))return;
  if(!city&&!globalCampaign&&hit(screenX,screenY)<0&&focusWorldCountry(screenX,screenY))return;
  S.cityTarget=city;
  if(city){
    W=null;
    S.dipC=null;
    S.pend=null;
    tip.style.display="none";
    render();
  }else{
    pick(hit(screenX,screenY));
  }
}

function officerNames(roster){return ({GER:["Бек","Фрич","Рундштедт","Лееб"],SOV:["Ворошилов","Тухачевский","Егоров","Шапошников"],FRA:["Гамелен","Вейган","Жорж","Жиро"],UK:["Монтгомери","Брук","Горт","Уэйвелл"],ITA:["Бадольо","Грациани","Бальбо","Мессе"],POL:["Рыдз-Смиглы","Сикорский","Кутшеба","Бортновский"]})[roster]}
function armySources(city){
  return citySources(city).filter(source=>source.key==="p"+city.province&&reserveTowns[city.province]===city)
    .concat(cityUnits(city)>0?[{key:"c"+city.id,units:cityUnits(city),name:"Гарнизон"}]:[]);
}
function armyPanel(city){
  const panel=document.createElement("section"),draft=S.armyDraft;
  if(cityOwner(city)!==S.pl&&!draft)return panel;
  if(!draft){
    if(!armySources(city).length){
      const source=citySources(city)[0];if(!source)return panel;
      const origin=source.city||reserveTowns[source.province];
      const button=document.createElement("button");button.textContent="План операции из города "+origin.name;
      button.onclick=()=>{S.armyDraft={origin:origin.id,path:[origin.id,city.id],units:1,source:source.key,commander:"Штаб армии"};render()};
      panel.append(button);return panel;
    }
    const button=document.createElement("button");button.textContent="Составить план операции";
    button.onclick=()=>{S.armyDraft={origin:city.id,path:[city.id],units:1,source:armySources(city)[0].key,commander:"Штаб армии"};render()};
    panel.append(button);return panel;
  }
  const origin=detailedCities[draft.origin],last=detailedCities[draft.path.at(-1)];
  const sources=armySources(origin);
  const available=sources.find(source=>source.key===draft.source)?.units||0;
  const officers=officerNames(C[S.pl].roster||S.pl)||[];
  panel.innerHTML='<h3>План операции</h3><p>'+draft.path.map(id=>escapeCityName(detailedCities[id].name)).join(" → ")+'</p>';
  function choose(label,options,value,change){
    const field=document.createElement("label"),select=document.createElement("select");field.textContent=label;
    for(const [key,name] of options)select.add(new Option(name,key));select.value=value;select.onchange=()=>change(select.value);field.append(select);panel.append(field);
  }
  choose("Командование",[...new Set([draft.commander,"Штаб армии",...officers])].map(n=>[n,n]),draft.commander,v=>{draft.commander=v;render()});
  choose("Подразделения",sources.map(v=>[v.key,v.name+" · "+v.units]),draft.source,v=>{draft.source=v;draft.units=1;render()});
  const count=document.createElement("input"),label=document.createElement("label");label.textContent="Дивизии";count.type="number";count.min=1;count.max=available;count.value=draft.units;
  count.onchange=()=>{draft.units=Math.max(1,Math.min(available,Math.floor(Number(count.value)||1)));render()};label.append(count);panel.append(label);
  const battery=document.createElement("input"),batteryLabel=document.createElement("label");battery.type="checkbox";battery.checked=Boolean(draft.battery);battery.disabled=S.eq.a<4&&!draft.battery;battery.onchange=()=>{draft.battery=battery.checked;render()};batteryLabel.append(battery," Придать батарею · 4 орудия");panel.append(batteryLabel);
  const options=[...(cityLinks[last.id]||[])].filter(id=>!draft.path.includes(id)&&!S.cityOrders.has(id)&&(cityOwner(detailedCities[id])===S.pl||atWar(S.pl,cityOwner(detailedCities[id]))));
  choose("Следующий участок",[["","Выберите соседний город"],...options.map(id=>[String(id),detailedCities[id].name])],"",v=>{if(v){draft.path.push(Number(v));render()}});
  function action(name,disabled,fn){const b=document.createElement("button");b.textContent=name;b.disabled=disabled;b.onclick=fn;panel.append(b)}
  action("Назад на один город",draft.path.length<2,()=>{draft.path.pop();render()});
  action("Начать операцию",draft.path.length<2||draft.units>available||(draft.battery&&S.eq.a<4),()=>{
    if(dispatchToCity(detailedCities[draft.path[1]],draft.source,draft.units,Boolean(draft.battery),{path:draft.path.slice(2),commander:draft.commander})){S.armyDraft=null;render()}
  });
  action("Отменить план",false,()=>{S.armyDraft=null;render()});
  return panel;
}
function renderCityPanel() {
  const panel=$("#city-panel");
  const city=S.cityTarget;
  panel.hidden=!city||Boolean(W)||Boolean(S.over);
  if(panel.hidden)return;
  const owner=cityOwner(city);
  const order=S.cityOrders.get(city.id);
  const title='<header><div><small>'+P[city.province].n+'</small><h2>'+escapeCityName(city.name)+(city.port?' · порт':'')+'</h2></div><button type="button" aria-label="Закрыть карточку города" onclick="S.cityTarget=null;render()">×</button></header>';
  const guns=S.cityGarrisons.get(city.id)?.guns||0;
  const status='<p class="city-status">'+flagBadge(owner)+'<span>'+C[owner].n+' · гарнизон: '+cityUnits(city)+' див. · орудия: '+guns+'</span></p>';
  if(order){
    panel.innerHTML=title+status+(order.operation?'<p>'+escapeCityName(order.operation.commander)+' · цель: '+escapeCityName(detailedCities[order.operation.path.at(-1)??city.id].name)+'</p>':'')+'<p>'+(order.combat?"Идёт бой":"Дивизии в пути")+' · '+order.units+
      ' див.'+(order.guns?' · артиллерийская батарея':'')+'</p><progress id="city-progress" max="'+order.duration+'" value="'+order.elapsed+'" aria-label="Ход операции"></progress>';
    if(order.operation?.path.length){
      const stop=document.createElement("button");stop.textContent="Остановиться после этого города";
      stop.onclick=()=>{order.operation.path=[];render()};panel.append(stop);
    }
    return;
  }
  const sources=citySources(city);
  const cannot=owner!==S.pl&&!atWar(S.pl,owner)?"Отправить войска можно в свой город или в город противника во время войны.":
    !sources.length?"Нужен отряд в соседнем городе. Переводите гарнизон по одному району за приказ.":"";
  const withdrawal=reserveTowns[city.province]===city&&owner===S.pl&&cityUnits(city)>0&&S.prov[city.province].o===S.pl
    ? '<button type="button" onclick="withdrawCity()">Вернуть гарнизон в резерв</button>':"";
  panel.innerHTML=title+status+(cannot?'<p>'+cannot+'</p>':
    '<form id="city-orders"><label>Откуда<select id="city-source">'+sources.map(source=>
      '<option value="'+source.key+'" data-units="'+source.units+'">'+escapeCityName(source.name)+' · '+source.units+
      '</option>').join("")+'</select></label><label>Дивизии<input id="city-count" type="number" inputmode="numeric" min="1" max="'+
      sources[0].units+'" value="1" required></label><label class="battery-option"><input type="checkbox" id="city-battery" '+(S.eq.a<4?"disabled":"")+'>Артиллерийская батарея · 4 орудия<small>Боевой бонус +30% · на складе '+Math.floor(S.eq.a)+'</small></label><button type="submit">'+(owner===S.pl?"Отправить":"Атаковать город")+
      '</button></form>')+withdrawal;
  if(owner===S.pl){
    const k=cost();
    const deploy=document.createElement("section");
    deploy.innerHTML='<strong>Размещение в городе</strong><div><button type="button" data-unit="infantry" '+(canTrain()?'':'disabled')+'>Разместить дивизию</button><small>'+k.r+' винт. · '+k.a+' арт. · '+k.t+' танк. · '+k.mp+' тыс. чел.</small></div><div><button type="button" data-unit="battery" '+(S.eq.a>=4?'':'disabled')+'>Разместить батарею</button><small>4 орудия · на складе '+Math.floor(S.eq.a)+'</small></div>';
    for(const button of deploy.querySelectorAll("button"))button.onclick=()=>deployCityUnit(button.dataset.unit);
    panel.querySelector(".city-status").after(deploy);
  }
  if(cityLinks[city.id]?.size){const nav=document.createElement("details");nav.className="city-neighbors";const heading=document.createElement("summary");heading.textContent="Соседние города · "+cityLinks[city.id].size;nav.append(heading);for(const id of cityLinks[city.id]){const button=document.createElement("button");button.type="button";button.textContent=detailedCities[id].name;button.onclick=()=>inspectGarrison(id);nav.append(button)}panel.append(nav)}
  panel.querySelector(".city-status").after(armyPanel(city));
  if(cannot)return;
  const source=$("#city-source"),count=$("#city-count");
  source.addEventListener("change",()=>{
    count.max=source.selectedOptions[0].dataset.units;
    count.value=Math.min(Number(count.value)||1,Number(count.max));
  });
  $("#city-orders").addEventListener("submit",event=>{
    event.preventDefault();
    dispatchToCity(city,source.value,Number(count.value),$("#city-battery").checked);
  });
}

function deployCityUnit(kind){
  const city=S.cityTarget;
  if(!city||cityOwner(city)!==S.pl||S.cityOrders.has(city.id)||S.over)return;
  const garrison={owner:S.pl,units:cityUnits(city),guns:S.cityGarrisons.get(city.id)?.guns||0};
  if(kind==="infantry"&&canTrain()){
    payDivisionCost();
    garrison.units++;
  }else if(kind==="battery"&&S.eq.a>=4){
    S.eq.a-=4;
    garrison.guns+=4;
  }else return;
  S.cityGarrisons.set(city.id,garrison);
  render();
}

function withdrawCity() {
  const city=S.cityTarget;
  if(!city||reserveTowns[city.province]!==city||cityOwner(city)!==S.pl||S.prov[city.province].o!==S.pl||S.cityOrders.has(city.id))return;
  S.div[city.province]+=cityUnits(city);
  S.eq.a+=S.cityGarrisons.get(city.id)?.guns||0;
  S.cityGarrisons.delete(city.id);
  render();
}

function dispatchToCity(city,sourceKey,units,battery=false,operation=null) {
  const owner=cityOwner(city);
  if(S.cityOrders.has(city.id)||(owner!==S.pl&&!atWar(S.pl,owner)))return;
  const source=citySources(city).find(entry=>entry.key===sourceKey);
  if(!source||!Number.isInteger(units)||units<1||units>source.units)return;
  const carried=operation?.carriedGuns||0;
  const guns=carried||(battery?4:0);
  if(carried){
    const origin=source.city&&S.cityGarrisons.get(source.city.id);
    if(!origin||(origin.guns||0)<carried)return;
    origin.guns-=carried;
  }else{if(S.eq.a<guns)return;S.eq.a-=guns}
  if(source.city){const origin=S.cityGarrisons.get(source.city.id);origin.units-=units;if(!origin.units){S.eq.a+=origin.guns||0;origin.guns=0}}
  else S.div[source.province]-=units;
  const combat=owner!==S.pl;
  S.cityOrders.set(city.id,{city,source,owner,units,combat,guns,operation,travel:CITY_MOVE_TIME,duration:CITY_MOVE_TIME+(combat?CITY_BATTLE_TIME:0),elapsed:0});
  if(S.cityOrders.size===1)lastCityTick=null;
  log((combat?"Атака на город: ":"Дивизии отправлены: ")+escapeCityName(city.name));
  render();return true;
}

function returnCityUnits(source,units) {
  if(!units)return;
  if(source.city&&cityOwner(source.city)===S.pl&&!S.cityOrders.has(source.city.id)){
    S.cityGarrisons.set(source.city.id,{...S.cityGarrisons.get(source.city.id),owner:S.pl,units:cityUnits(source.city)+units});
    return;
  }
  const fallback=S.prov[source.province].o===S.pl?source.province:own(S.pl)[0];
  if(fallback!=null)S.div[fallback]+=units;
}

function finishCityOrder(order) {
  const {city,source,units,combat}=order;
  const owner=cityOwner(city);
  if(owner===S.pl){
    S.cityGarrisons.set(city.id,{owner:S.pl,guns:(S.cityGarrisons.get(city.id)?.guns||0)+(order.guns||0),units:cityUnits(city)+units});
    log("Дивизии прибыли: "+escapeCityName(city.name));
  }else if(!combat||owner!==order.owner||!atWar(S.pl,owner)){
    S.eq.a+=order.guns||0;returnCityUnits(source,units);
    log("Приказ отменён: "+escapeCityName(city.name));
  }else{
    const defenders=cityUnits(city);
    const province=S.prov[city.province];
    const base=S.prov[source.province],stance=S.stances?.[source.province%4]||"balanced";
    const attack=units*atkS(S.pl,source.province)*(order.guns?1.3:1)*(.65+.35*(base.readiness??100)/100)*(stance==="bold"?1.12:stance==="guard"?.94:1);
    base.readiness=Math.max(15,(base.readiness??100)-(stance==="bold"?10:stance==="guard"?4:7));base.experience=(base.experience||0)+1;
    const nearby=[...(cityLinks[city.id]||[])];
    const surrounded=nearby.length>=2&&nearby.every(id=>cityOwner(detailedCities[id])===S.pl);
    const defense=(surrounded?.75:1)*(defenders*.7+.65)*(24+province.fort*4)*(S.cityGarrisons.get(city.id)?.guns?1.3:1);
    if(attack>=defense){
      S.cityGarrisons.set(city.id,{owner:S.pl,guns:order.guns||0,units:Math.max(1,units-Math.floor(defenders/2))});
      log("Город захвачен: "+escapeCityName(city.name),1);
    }else{
      returnCityUnits(source,Math.max(0,units-1));
      log("Атака отбита: "+escapeCityName(city.name),1);
    }
  }
}

function updateCityOrders() {
  if(!S.cityOrders.size||!campaignMenu.hidden||S.over){lastCityTick=null;return}
  const now=performance.now();
  const delta=lastCityTick===null?0:Math.min(100,now-lastCityTick);
  lastCityTick=now;
  let completed=false;
  for(const [id,order] of S.cityOrders){
    order.elapsed+=delta;
    if(order.elapsed<order.duration)continue;
    S.cityOrders.delete(id);
    finishCityOrder(order);
    if(order.operation&&cityOwner(order.city)===S.pl){
      const [next,...path]=order.operation.path;
      if(next!=null){
        const count=Math.min(order.units,cityUnits(order.city));
        if(!dispatchToCity(detailedCities[next],"c"+id,count,false,{path,commander:order.operation.commander,carriedGuns:order.guns||0}))log("Операция остановлена: следующий участок недоступен",1);
      }else log(escapeCityName(order.operation.commander)+" · операция завершена");
    }
    completed=true;
  }
  if(completed)render();
  const selected=S.cityOrders.get(S.cityTarget?.id);
  const progress=$("#city-progress");
  if(selected&&progress)progress.value=selected.elapsed;
  if(S.cityOrders.size)redraw();
}

function drawOrderOverlay(order){
  const {city,source,combat}=order;
  const [a,b]=source.point,[c,d]=city.point;
  const length=Math.hypot(c-a,d-b);
  const color=combat?"#f08089":"#93dcb3";
  x.save();
  if(combat&&cityRegions[city.id]&&cityLayers[city.province]){
    x.save();x.clip(cityLayers[city.province].path,"evenodd");
    x.strokeStyle="#362837";x.lineWidth=5/cam.k;x.stroke(cityRegions[city.id]);
    x.strokeStyle=color;x.lineWidth=2.5/cam.k;x.setLineDash([5/cam.k,3/cam.k]);x.stroke(cityRegions[city.id]);x.restore();
  }
  if(length*cam.k>6){
    x.translate(a,b);x.rotate(Math.atan2(d-b,c-a));
    const head=Math.min(10/cam.k,length*.3);
    x.beginPath();x.moveTo(0,0);x.lineTo(length-head,0);
    x.strokeStyle="#293036";x.lineWidth=4/cam.k;x.stroke();
    x.strokeStyle=color;x.lineWidth=2/cam.k;x.setLineDash([6/cam.k,4/cam.k]);x.stroke();
    x.beginPath();x.moveTo(length,0);x.lineTo(length-head,-head*.55);x.lineTo(length-head,head*.55);x.closePath();x.fillStyle=color;x.fill();
  }
  x.restore();
}
function drawCityOrders() {
  const plan=S.armyDraft;
  if(plan&&plan.path.length>1){
    x.save();x.beginPath();for(const [i,id] of plan.path.entries()){const point=detailedCities[id].point;if(i)x.lineTo(...point);else x.moveTo(...point)}
    x.lineWidth=3/cam.k;x.strokeStyle="#e4d18b";x.setLineDash([8/cam.k,4/cam.k]);x.stroke();x.restore();
  }
  for(const order of S.cityOrders.values()){
    const {city,source,elapsed,duration,combat}=order;
    const destination=city.point;
    drawOrderOverlay(order);
    if(combat&&elapsed>=(order.travel||0)&&cam.k>=DETAIL_ZOOM){
      if(!matchMedia("(prefers-reduced-motion: reduce)").matches)
        drawSkirmish(source.province,city.province,elapsed-(order.travel||0),destination,duration-(order.travel||0),source.point,Boolean(order.guns));
      continue;
    }
    if(!worldVisible(...destination,40))continue;
    const amount=Math.min(1,elapsed/(order.travel||duration));
    const point=source.point.map((a,i)=>a+(destination[i]-a)*amount);
    x.save();
    if(amount<1&&cam.k>=3.4){drawRifleman(point[0],point[1],destination[0]>=source.point[0]?1:-1,"#c2be96",elapsed,false);if(order.guns)drawFieldGun(point[0]-10/cam.k,point[1],cam.k)}
    x.strokeStyle=combat?"#f5ad65":"#e7d297";
    x.lineWidth=1.6/cam.k;
    x.beginPath();
    x.moveTo(...source.point);x.lineTo(...point);
    x.stroke();
    x.restore();
  }
}


function worldMinZoom(){return Math.max(.025,Math.min(innerWidth/5220,Math.max(120,innerHeight-145)/3960))}
function boundCamera(){
  const limit=(t,left,right,size)=>{const span=(right-left)*cam.k;if(span<=size)return (size-span)/2-left*cam.k;return Math.max(size-right*cam.k,Math.min(-left*cam.k,t))};
  cam.tx=limit(cam.tx,-2465,2755,innerWidth);cam.ty=limit(cam.ty,-418,3542,innerHeight);
}
let landOutline=new Path2D();
let worldShapes=[],globalCampaign=false,worldPlay=[],legacyCityRows=[];
const legacyProvinces=P.slice(),legacyCountries={...C};
const worldPoint=([u,v])=>[(u-170)*14.5,(v-19)*22];
function worldIndex(wx,wy){
  const u=wx/14.5+170,v=wy/22+19;
  const ctx=worldLayer.getContext("2d");ctx.save();ctx.resetTransform();
  let i=worldShapes.findIndex(item=>item.bounds.some(b=>b.l<=u&&u<=b.r&&b.t<=v&&v<=b.b)&&ctx.isPointInPath(item.displayPath||item.path,u,v,"evenodd"));
  ctx.restore();
  if(i<0){let distance=6;worldPlay.forEach((row,j)=>{if(row.area>1)return;const [a,b]=worldPoint(row.center),d=Math.hypot(a-wx,b-wy)*cam.k;if(d<distance){distance=d;i=j}})}
  return i;
}
const modernFlagCodes={"Андорра":"ad","Афганистан":"af","Антигуа и Барбуда":"ag","Ангилья":"ai","Албания":"al","Армения":"am","Ангола":"ao","Антарктида":"aq","Аргентина":"ar","Американское Самоа":"as","Австрия":"at","Австралия":"au","Аруба":"aw","Азербайджан":"az","Босния и Герцеговина":"ba","Барбадос":"bb","Бангладеш":"bd","Бельгия":"be","Буркина-Фасо":"bf","Болгария":"bg","Бахрейн":"bh","Бурунди":"bi","Бенин":"bj","Сен-Бартелеми":"bl","Бруней":"bn","Боливия":"bo","Бразилия":"br","Бутан":"bt","Ботсвана":"bw","Белиз":"bz","Канада":"ca","Швейцария":"ch","Кот-д’Ивуар":"ci","Чили":"cl","Камерун":"cm","Колумбия":"co","Коста-Рика":"cr","Куба":"cu","Кабо-Верде":"cv","Кюрасао":"cw","Кипр":"cy","Чехия":"cz","Германия":"de","Джибути":"dj","Дания":"dk","Доминика":"dm","Доминиканская Республика":"do","Алжир":"dz","Эквадор":"ec","Эстония":"ee","Египет":"eg","Западная Сахара":"eh","Эритрея":"er","Испания":"es","Эфиопия":"et","Финляндия":"fi","Фиджи":"fj","Франция":"fr","Габон":"ga","Великобритания":"gb","Гренада":"gd","Грузия":"ge","Гернси":"gg","Гана":"gh","Гренландия":"gl","Гамбия":"gm","Гвинея":"gn","Экваториальная Гвинея":"gq","Греция":"gr","Гватемала":"gt","Гуам":"gu","Гвинея-Бисау":"gw","Гайана":"gy","Гондурас":"hn","Хорватия":"hr","Венгрия":"hu","Индонезия":"id","Ирландия":"ie","Израиль":"il","Индия":"in","Британская территория в Индийском океане":"io","Ирак":"iq","Иран":"ir","Исландия":"is","Италия":"it","Джерси":"je","Ямайка":"jm","Иордания":"jo","Япония":"jp","Кения":"ke","Киргизия":"kg","Камбоджа":"kh","Кирибати":"ki","Коморы":"km","Сент-Китс и Невис":"kn","КНДР":"kp","Республика Корея":"kr","Кувейт":"kw","Казахстан":"kz","Лаос":"la","Ливан":"lb","Сент-Люсия":"lc","Лихтенштейн":"li","Шри-Ланка":"lk","Либерия":"lr","Лесото":"ls","Литва":"lt","Люксембург":"lu","Латвия":"lv","Ливия":"ly","Марокко":"ma","Монако":"mc","Черногория":"me","Сен-Мартен":"mf","Мадагаскар":"mg","Северная Македония":"mk","Мали":"ml","Монголия":"mn","Мавритания":"mr","Монтсеррат":"ms","Мальта":"mt","Маврикий":"mu","Мальдивы":"mv","Малави":"mw","Мексика":"mx","Малайзия":"my","Мозамбик":"mz","Намибия":"na","Новая Каледония":"nc","Нигер":"ne","Нигерия":"ng","Никарагуа":"ni","Нидерланды":"nl","Норвегия":"no","Непал":"np","Науру":"nr","Ниуэ":"nu","Новая Зеландия":"nz","Оман":"om","Панама":"pa","Перу":"pe","Французская Полинезия":"pf","Папуа — Новая Гвинея":"pg","Филиппины":"ph","Пакистан":"pk","Польша":"pl","Сен-Пьер и Микелон":"pm","Пуэрто-Рико":"pr","Португалия":"pt","Палау":"pw","Парагвай":"py","Катар":"qa","Румыния":"ro","Сербия":"rs","Россия":"ru","Руанда":"rw","Саудовская Аравия":"sa","Судан":"sd","Швеция":"se","Сингапур":"sg","Словения":"si","Словакия":"sk","Сьерра-Леоне":"sl","Сан-Марино":"sm","Сенегал":"sn","Сомали":"so","Суринам":"sr","Южный Судан":"ss","Сан-Томе и Принсипи":"st","Сальвадор":"sv","Синт-Мартен":"sx","Сирия":"sy","Эсватини":"sz","Тёркс и Кайкос":"tc","Чад":"td","Того":"tg","Таиланд":"th","Таджикистан":"tj","Восточный Тимор":"tl","Тунис":"tn","Тонга":"to","Турция":"tr","Тринидад и Тобаго":"tt","Тувалу":"tv","Тайвань":"tw","Танзания":"tz","Украина":"ua","Уганда":"ug","Уругвай":"uy","Узбекистан":"uz","Ватикан":"va","Сент-Винсент и Гренадины":"vc","Венесуэла":"ve","Вьетнам":"vn","Вануату":"vu","Уоллис и Футуна":"wf","Самоа":"ws","Йемен":"ye","Замбия":"zm","Зимбабве":"zw","Микронезия":"fm","Маршалловы Острова":"mh","Северные Марианские острова":"mp","Американские Виргинские острова":"vi","США":"us","Южная Георгия и Южные Сандвичевы острова":"gs","Остров Святой Елены":"sh","Острова Питкэрн":"pn","Фолклендские острова":"fk","острова Кайман":"ky","Бермудские Острова":"bm","Британские Виргинские острова":"vg","остров Мэн":"im","Объединённые Арабские Эмираты":"ae","Туркмения":"tm","ЮАР":"za","Соломоновы Острова":"sb","Сейшельские Острова":"sc","Острова Кука":"ck","Молдавия":"md","Республика Косово":"xk","Палестина":"ps","Республика Гаити":"ht","Французские Южные и Антарктические территории":"tf","Аландские острова":"ax","Фарерские острова":"fo","Демократическая Республика Конго":"cd","Республика Конго":"cg","Китайская Народная Республика":"cn","Макао":"mo","Гонконг":"hk","Центральноафриканская Республика":"cf","Мьянма":"mm","Белоруссия":"by","Багамские Острова":"bs","Остров Херд и острова Макдональд":"hm","Норфолк":"nf"};
const standardImages=new Map();
function loadStandard(url){
  if(!url)return null;
  if(!standardImages.has(url)){const img=new Image();img.onload=redraw;img.src=url;standardImages.set(url,img)}
  return standardImages.get(url);
}
const roster1936={"Nazi Germany":"GER","Union of Soviet Socialist Republics":"SOV","Kingdom of Great Britain":"UK","French Third Republic":"FRA","Kingdom of Italy":"ITA","Second Polish Republic":"POL"};
const flagPeriods={
 "Republic of Bulgaria":[1991,2026,"/flags/modern/bg.svg"],"Republic of Albania":[1993,2026,"/flags/modern/al.svg"],"Sultanate of Oman":[1996,2026,"/flags/modern/om.svg"],
 "Éire":[1937,2026,"/flags/modern/ie.svg"],"Second Republic of Austria":[1945,2026,"/flags/modern/at.svg"],"Hungary":[1957,2026,"/flags/modern/hu.svg"],"Georgia":[2004,2026,"/flags/modern/ge.svg"],"Micronesia":[1979,2026,"/flags/modern/fm.svg"],"Saint Kitts":[1984,2026,"/flags/modern/kn.svg"],
 "Kingdom of Romania":[1881,1947,"/flags/ROM.png"],
 "German Democratic Republic":[1959,1989,"/flags/GDR.svg"],"Free City of Danzig":[1920,1939,"/flags/DANZIG.svg"],
 "Federal Republic of Germany":[1949,2026,"/flags/modern/de.svg"],"Weimar Republic":[1919,1932,"/flags/modern/de.svg"],
 "Union of Soviet Socialist Republics":[1924,1991,"/flags/SOV.svg"],"Second Polish Republic":[1919,1939,"/flags/POL.svg"],
 "Ukraine":[1992,2026,"/flags/modern/ua.svg"],"Russian Federation":[1994,2026,"/flags/modern/ru.svg"],
 "United States of America":[1961,2026,"/flags/modern/us.svg"],"French Third Republic":[1871,1940,"/flags/FRA.svg"],
 "Kingdom of Great Britain":[1801,2026,"/flags/UK.png"],"People's Republic of China":[1950,2026,"/flags/modern/cn.svg"]
};
function campaignIdentity(row,year){
  const raw=row.raw||row.name,roster=year===1936?roster1936[raw]:null,period=flagPeriods[raw];
  let flag=roster?FLAG_ASSETS[roster]:null;
  if(period&&year>=period[0]&&year<=period[1])flag=period[2];
  if(year>=2025&&modernFlagCodes[row.name])flag="/flags/modern/"+modernFlagCodes[row.name]+".svg";
  if(!flag&&flagCatalogue){
    const id=flagCatalogue.countries[raw]||polityIds[raw],rows=flagCatalogue.periods[id]||[];
    const date=String(year).padStart(4,"0")+"-01-01";
    const dated=rows.filter(([start,end])=>(start||end)&&(!start||start<=date)&&(!end||date<end))
      .sort((a,b)=>b[0].localeCompare(a[0]));
    const undated=rows.filter(r=>!r[0]&&!r[1]);
    const match=dated[0]||(!rows.some(r=>r[0]||r[1])&&undated.length===1?undated[0]:null);
    if(match)flag=flagCatalogue.files[match[2]];
  }
  return {flag,roster,standard:false};
}
function commandCards(c,total){
  const locations=detailedCities.filter(city=>cityOwner(city)===c);
  const button=(icon,label,subtitle,action)=>'<button class="gc" onclick="'+action+'">'+uiIcon(icon)+'<small>'+label+'</small><small>'+subtitle+'</small></button>';
  return button("politics","Штаб",escapeCityName(C[c].n),"W=null;S.cityTarget=null;S.dipC=S.pl;render()")+
    button("people","Войска",total+" див.","S.sel=cap(S.pl);S.cityTarget=null;openW('prd')")+
    button("build","Снабжение","Строительство","S.sel=cap(S.pl);S.cityTarget=null;openW('bld')")+
    button("target","Гарнизоны",locations.length+" пункт.","S.dipC=null;S.cityTarget=null;openW('garrisons')");
}
WT.garrisons=["Гарнизоны",()=>detailedCities.filter(city=>cityOwner(city)===S.pl).map(city=>
  '<button class="bz" onclick="inspectGarrison('+city.id+')">'+escapeCityName(city.name)+'</button>').join(" ")];
function inspectGarrison(id){
  const city=detailedCities[id];if(!city)return;
  cam.k=Math.max(2.4,cam.k);cam.tx=innerWidth/2-city.point[0]*cam.k;cam.ty=innerHeight/2-city.point[1]*cam.k;boundCamera();
  W=null;S.dipC=null;S.sel=city.province;S.cityTarget=city;render();
}

const portCatalogue=[["Sint Nicolaas",-69.924,12.438,8],["Campana",-58.951,-34.153,8],["Zarate",-59.005,-34.099,8],["Puerto Belgrano/Bahia Blanca",-62.101,-38.894,8],["Puerto Galvan/Bahia Blanca",-62.301,-38.783,8],["Ingeniero White/Bahia Blanca",-62.26,-38.792,8],["Saint John's",-61.852,17.123,8],["Fremantle",115.738,-32.047,8],["Botany Bay",151.21,-33.973,8],["Rockhampton",151.284,-23.851,8],["Oostende (Ostend)",2.934,51.23,8],["Zeebrugge",3.205,51.336,8],["Burgas",27.458,42.47,8],["Mina Sulman Port",50.608,26.199,8],["Sitrah",50.659,26.159,8],["Saint George",-64.673,32.379,8],["Mucuripe",-38.473,-3.708,8],["Niteroi",-43.125,-22.879,8],["Sao Francisco do Sul",-48.635,-26.238,8],["Chatham",-65.468,47.034,8],["Clarenville",-53.957,48.163,8],["Comox",-124.924,49.671,8],["Esquimalt",-123.434,48.436,8],["Grand Bank",-55.751,47.1,8],["North Sydney",-60.239,46.209,8],["Caraquet",-64.925,47.796,8],["Chicoutimi",-71.053,48.43,8],["Corner Brook",-57.936,48.961,8],["Digby",-65.752,44.625,8],["Harbour Grace",-53.217,47.69,8],["Pictou",-62.704,45.675,8],["Shelburne",-65.318,43.75,8],["Sorel",-73.118,46.041,8],["Springdale",-56.06,49.5,8],["Saint-John's",-52.692,47.563,8],["Coronel",-73.153,-37.028,8],["Lota",-73.158,-37.098,8],["Talcahuano",-73.102,-36.705,8],["San Antonio",-71.618,-33.587,8],["Haimen",121.442,28.69,8],["Qinhuangdao",119.586,39.907,8],["Yantian",114.267,22.574,8],["Yingkou",122.235,40.696,8],["Moin",-83.074,10.006,8],["Banes",-75.703,20.919,8],["Caibarien",-79.469,22.529,8],["Isabela de Sagua",-80.008,22.94,8],["Nuevitas",-77.24,21.563,8],["Famagusta",33.94,35.128,8],["Cuxhaven",8.707,53.865,8],["Eckernforde",9.836,54.474,8],["Nordenham",8.49,53.487,8],["Papenburg",7.369,53.096,8],["Wismar",11.439,53.906,8],["Nyborg",10.807,55.299,8],["Helsingor",12.617,56.034,8],["Odense",10.525,55.466,8],["Nyborg",10.788,55.307,8],["Frederikshavn",10.541,57.438,8],["Haderslev",9.504,55.251,8],["Horsens",9.868,55.854,8],["Kalundborg",11.086,55.669,8],["Kolding",9.493,55.493,8],["Nakskov",11.121,54.832,8],["Nykobing Falster",11.857,54.771,8],["Randers",10.053,56.46,8],["Rudkobing",10.705,54.94,8],["Svendborg",10.617,55.059,8],["Vejle",9.552,55.706,8],["Skagen",10.589,57.719,8],["Puerto Plata",-70.701,19.804,8],["Rio Haina",-70.018,18.42,8],["Mostaganem",0.071,35.934,8],["Damietta",31.759,31.467,8],["Safaga",33.941,26.742,8],["Algeciras",-5.4,36.148,8],["Aviles",-5.92,43.579,8],["Ferrol",-8.251,43.48,8],["Huelva",-6.936,37.193,8],["Pasajes",-1.919,43.323,8],["Rota",-6.335,36.619,8],["Cadiz",-6.259,36.52,8],["Kotka",26.942,60.461,8],["Veitsiluoto",24.617,65.683,8],["Arcachon",-1.142,44.659,8],["Deauville",0.073,49.366,8],["Fecamp",0.369,49.762,8],["La Pallice",-1.224,46.157,8],["Saint-Malo",-2.023,48.644,8],["Sete",3.71,43.405,8],["Greenock",-4.757,55.955,8],["Poole",-1.987,50.714,8],["Falmouth",-5.054,50.153,8],["Leith",-3.172,55.983,8],["Montrose",-2.468,56.704,8],["Newport",-2.985,51.559,8],["Sunderland",-1.356,54.907,8],["Teesport",-1.157,54.608,8],["Poti",41.653,42.155,8],["Piraeus",23.657,37.937,8],["Piraeus",23.634,37.941,8],["Piraeus",23.643,37.934,8],["Saint George's",-61.751,12.047,8],["Cayenne",-52.272,4.853,8],["Bakar",14.541,45.3,8],["Rovinj",13.635,45.081,8],["Sibenik",15.892,43.726,8],["Gonaives",-72.704,19.448,8],["Sorong",131.243,-0.877,8],["Alleppey",76.31,9.492,8],["Kakinada",82.275,16.978,8],["Tuticorin",78.187,8.758,8],["Sligo",-8.471,54.272,8],["Licata",13.938,37.09,8],["Alghero",8.308,40.563,8],["Bagnoli",14.16,40.803,8],["Barletta",16.288,41.326,8],["Brindisi",17.956,40.646,8],["Crotone",17.123,39.086,8],["Gallipoli",17.976,40.056,8],["Imperia",8.027,43.883,8],["La Maddalena",9.409,41.213,8],["La Spezia",9.85,44.087,8],["Marsala",12.435,37.79,8],["Messina",15.559,38.2,8],["Molfetta",16.588,41.208,8],["Monfalcone",13.553,45.789,8],["Monopoli",17.3,40.956,8],["Pesaro",12.902,43.921,8],["Porto Torres",8.392,40.844,8],["Ravenna",12.25,44.462,8],["Siracusa",15.288,37.066,8],["Taranto",17.189,40.488,8],["Torre Annunziata",14.443,40.75,8],["Omura",129.95,32.902,8],["Amagasaki",135.383,34.691,8],["Fushiki",137.108,36.776,8],["Imabari",133.006,34.068,8],["Iwakuni",132.235,34.177,8],["Kainan",135.188,34.153,8],["Kanazawa",136.607,36.617,8],["Kawasaki",139.744,35.506,8],["Kokura",130.874,33.908,8],["Maizuru",135.385,35.482,8],["Matsusaka",136.553,34.608,8],["Miyazu",135.193,35.543,8],["Muroran",140.954,42.336,8],["Niigata",139.125,37.955,8],["Saganoseki",131.869,33.251,8],["Sasebo",129.708,33.157,8],["Shimizu",138.51,35.014,8],["Shimotsu",135.133,34.116,8],["Wakayama",135.127,34.223,8],["Yokosuka",139.654,35.304,8],["Galle",80.225,6.033,8],["Ventspils",21.537,57.403,8],["Frontera",-92.652,18.53,8],["Minatitlan",-94.535,17.976,8],["Pajaritos",-94.401,18.128,8],["Santa Rosalia",-112.258,27.339,8],["Progreso",-89.671,21.314,8],["Tuxpan",-97.371,20.941,8],["Kemaman",103.459,4.249,8],["Den Helder",4.784,52.958,8],["Dordrecht",4.651,51.806,8],["Delfzijl",6.955,53.321,8],["Arendal",8.757,58.454,8],["Drammen",10.225,59.737,8],["Halden",11.375,59.118,8],["Harstad",16.542,68.789,8],["Larvik",10.026,59.045,8],["Moss",10.653,59.432,8],["Sandefjord",10.225,59.124,8],["Tonsberg",10.405,59.265,8],["Lyttelton",172.71,-43.606,8],["Qalhat",59.421,22.657,8],["Sohar",56.738,24.378,8],["Balboa",-79.569,8.956,8],["Cristobal",-79.905,9.35,8],["Pedregal",-82.435,8.365,8],["Callao",-77.142,-12.045,8],["Matarani",-72.104,-16.998,8],["Swinoujscie",14.269,53.905,8],["Leixoes",-8.693,41.185,8],["Setubal",-8.821,38.49,8],["Aveiro",-8.72,40.644,8],["Viana do Castelo",-8.823,41.686,8],["Galati",28.084,45.442,8],["Nakhodka",132.908,42.805,8],["Kandalaksha",32.405,67.135,8],["Kholmsk",142.04,47.051,8],["Korsakov",142.758,46.627,8],["Kronshtadt",29.767,59.987,8],["Nakhodka",132.886,42.8,8],["Novorossiysk",37.804,44.715,8],["Tuapse",39.067,44.092,8],["Jubail",49.671,27.029,8],["Jubail",49.673,27.088,8],["Ras al Khafji",48.522,28.415,8],["Falkenberg",12.476,56.889,8],["Ahus",14.305,55.926,8],["Harnosand",17.939,62.641,8],["Hoganas",12.541,56.199,8],["Karlshamn",14.858,56.163,8],["Karlskrona",15.586,56.16,8],["Nynashamn",17.958,58.913,8],["Oskarshamn",16.471,57.265,8],["Oxelosund",17.108,58.662,8],["Pitea",21.47,65.309,8],["Sodertalje",17.659,59.17,8],["Trelleborg",13.152,55.368,8],["Uddevalla",11.905,58.348,8],["Ystad",13.821,55.421,8],["Bangkok",100.585,13.696,8],["Laem Chabang",100.891,13.074,8],["Sriracha",100.919,13.171,8],["Point Lisas",-61.49,10.388,8],["Mersin",34.641,36.797,8],["Berdyansk",36.773,46.751,8],["Kerch",36.486,45.355,8],["Richmond",-122.359,37.914,8],["Wilmington",-75.52,39.717,8],["Quincy",-70.969,42.241,8],["Nawiliwili",-159.353,21.954,8],["Monterey",-121.889,36.606,8],["Wilmington",-77.953,34.192,8],["Gloucester City",-75.123,39.904,8],["Bayonne",-74.102,40.663,8],["Baltimore",-76.556,39.233,8],["Jacksonville",-81.559,30.381,8],["Newport News",-76.426,36.981,8],["Port Arthur",-93.957,29.843,8],["Portsmouth",-76.288,36.817,8],["Wilmington",-77.953,34.192,8],["Port Arthur",-93.957,29.843,8],["Alexandria",-77.037,38.801,8],["Newport News",-76.426,36.981,8],["Brownsville",-122.609,47.651,8],["Vancouver",-122.704,45.635,8],["Guanta",-64.59,10.249,8],["Keelung",121.726,25.221,8],["Arrecife",-13.624,28.949,8],["St Thomas",-64.928,18.332,8],["Basseterre",-62.75,17.279,8],["New Orleans",-90.056,29.934,8],["Freeport",-78.728,26.538,8],["Trenton",-77.56,44.1,8],["Goderich",-81.73,43.75,8],["Midland",-79.91,44.75,8],["St Joseph",-86.48,42.11,8],["Racine",-87.78,42.73,8],["Menominee",-87.6,45.1,8],["Escanaba",-87.05,45.76,8],["Sacramento",-121.5,38.58,8],["Great Yarmouth",1.73,52.61,8],["Dundee",-2.96,56.46,8],["Portmahomack Harbor",-3.83,57.83,8],["Wick",-3.08,58.43,8],["Oban",-5.46,56.41,8],["Douglas",-4.46,54.15,8],["Londonderry",-7.31,55,8],["Silloth",-3.4,54.86,8],["Ambriz",13.094,-7.833,7],["Cabinda",12.19,-5.55,7],["Soyo",12.32,-6.121,7],["Durres",19.453,41.308,7],["Curacao",-68.918,12.119,7],["Al Fujayrah",56.357,25.178,7],["Caleta Olivia",-67.508,-46.433,7],["Puerto Deseado",-65.904,-47.756,7],["Rio Gallegos",-69.218,-51.612,7],["Rio Grande",-67.702,-53.794,7],["San Julian",-67.719,-49.3,7],["Coffs Harbour",153.141,-30.308,7],["Esperance",121.893,-33.872,7],["Port Augusta",137.757,-32.489,7],["Bowen",148.251,-20.021,7],["Bundaberg",152.388,-24.767,7],["Burketown",139.738,-17.554,7],["Carnarvon",113.643,-24.895,7],["Cooktown",145.244,-15.46,7],["Derby",123.605,-17.292,7],["Eden",149.905,-37.072,7],["George Town",146.82,-41.11,7],["Geraldton",114.601,-28.773,7],["Karumba",140.833,-17.489,7],["Kingscote",137.64,-35.655,7],["Maryborough",152.906,-25.295,7],["Strahan",145.321,-42.158,7],["Mongla",89.586,22.487,7],["Aracaju",-37.04,-10.925,7],["Fortaleza",-38.521,-3.717,7],["Macapa",-51.043,0.032,7],["Navegantes",-48.654,-26.899,7],["Pelotas",-52.324,-31.782,7],["Campbell River",-125.239,50.032,7],["Goose Bay",-60.342,53.384,7],["Masset",-132.141,54.007,7],["Matane",-67.571,48.842,7],["Nanisivik",-84.543,73.069,7],["New Richmond",-65.835,48.139,7],["Port Hardy",-127.484,50.721,7],["Port Hawkesbury",-61.356,45.61,7],["Squamish",-123.167,49.683,7],["Stephenville",-58.541,48.535,7],["Stewart",-129.99,55.929,7],["Tahsis",-126.654,49.917,7],["Sandspit",-131.82,53.255,7],["Tuktoyaktuk",-132.986,69.431,7],["Ancud",-73.826,-41.869,7],["Castro",-73.767,-42.483,7],["Chanaral",-70.634,-26.351,7],["Puerto Natales",-72.509,-51.731,7],["Taltal",-70.485,-25.397,7],["Guangzhou",113.671,22.64,7],["Jiangyin",120.221,31.932,7],["Lianyungang",119.408,34.745,7],["Sanya",109.501,18.24,7],["Zhanjiang",110.406,21.17,7],["Zhoushan",122.103,30.003,7],["San-Pedro",-6.617,4.743,7],["Cartagena",-75.526,10.403,7],["Tolu",-75.585,9.52,7],["Tumaco",-78.76,1.813,7],["Turbo",-76.734,8.088,7],["Baracoa",-74.502,20.353,7],["Nicaro",-75.551,20.713,7],["Nueva Gerona",-82.793,21.903,7],["Helgoland",7.891,54.178,7],["Travemunde",10.868,53.952,7],["Thisted",8.692,56.953,7],["Manta",-80.721,-0.936,7],["Esmeraldas",-79.643,0.989,7],["Corralejo",-13.859,28.741,7],["Ceuta",-5.31,35.89,7],["Melilla",-2.923,35.28,7],["San Sebastian de la Gomera",-17.105,28.088,7],["Santa Cruz de La Palma",-17.767,28.676,7],["Parnu",24.475,58.381,7],["Kuopio",27.69,62.888,7],["Joensuu",29.777,62.604,7],["Varkaus",27.875,62.313,7],["Savusavu",179.309,-16.818,7],["Cherbourg",-1.62,49.646,7],["Caen",-0.326,49.191,7],["Calvi",8.755,42.566,7],["Propriano",8.9,41.677,7],["Quimper",-4.108,47.989,7],["Vannes",-2.756,47.644,7],["Yap",138.119,9.513,7],["Bristol",-2.708,51.499,7],["Hull",-0.285,53.744,7],["Newcastle upon Tyne",-1.591,54.965,7],["Tyne",-1.441,54.994,7],["Rochester",0.686,51.435,7],["Tema",0.007,5.632,7],["Alexandroupolis",25.889,40.841,7],["Kos",27.29,36.894,7],["Paros",25.151,37.088,7],["Samos",26.967,37.754,7],["Nanortalik",-45.238,60.14,7],["Qaanaaq",-69.235,77.467,7],["New Amsterdam",-57.522,6.238,7],["La Ceiba",-86.757,15.794,7],["Tela",-87.456,15.784,7],["Mali Losinj",14.458,44.538,7],["Jacmel",-72.536,18.232,7],["Jeremie",-74.107,18.644,7],["Sorong",131.02,-1.308,7],["Lhokseumawe",97.143,5.167,7],["Nunukan",117.655,4.146,7],["Panjang",105.307,-5.46,7],["Tanjung Priok",106.89,-6.101,7],["Mangalore",74.807,12.927,7],["Porbandar",69.587,21.639,7],["Ratnagiri",73.272,17.002,7],["Bantry",-9.456,51.681,7],["Wexford",-6.456,52.341,7],["Khorramshahr",48.185,30.433,7],["Djupivogur",-14.287,64.661,7],["Faskrudsfjordur",-14.009,64.93,7],["Raufarhofn",-15.941,66.456,7],["Pantelleria",11.938,36.833,7],["Catania",15.091,37.496,7],["Fiumicino",12.235,41.756,7],["Lampedusa",12.602,35.499,7],["Manfredonia",15.925,41.624,7],["Ocho Rios",-77.107,18.41,7],["Port Antonio",-76.452,18.181,7],["Nishinoomote",130.986,30.732,7],["Akita",140.04,39.762,7],["Hachinohe",141.524,40.546,7],["Ishigaki",124.151,24.336,7],["Matsuyama",132.693,33.855,7],["Sakata",139.804,38.939,7],["Takamatsu",134.053,34.355,7],["Wakkanai",141.689,45.411,7],["Tottori",134.188,35.54,7],["Lamu",40.902,-2.268,7],["Gunsan",126.588,35.96,7],["Pohang",129.403,36.02,7],["Samcheok",129.188,37.434,7],["Sokcho",128.592,38.207,7],["Ulsan",129.386,35.488,7],["Tripoli",35.819,34.455,7],["Buchanan",-10.053,5.858,7],["Tripoli",13.194,32.907,7],["Agadir",-9.635,30.424,7],["Al Hoceima",-3.92,35.248,7],["Dakhla",-15.934,23.682,7],["Antalaha",50.276,-14.9,7],["Manakara",48.019,-22.142,7],["Mananjary",48.326,-21.249,7],["Morondava",44.272,-20.289,7],["Toamasina",49.422,-18.157,7],["Loreto",-111.337,26.015,7],["Campeche",-90.59,19.813,7],["Cozumel",-86.957,20.495,7],["La Paz",-110.31,24.169,7],["Playa del Carmen",-87.068,20.624,7],["Puerto Penasco",-113.542,31.306,7],["Puerto Vallarta",-105.241,20.659,7],["Coatzacoalcos",-94.419,18.13,7],["Bassein",94.723,16.78,7],["Nacala",40.667,-14.541,7],["Pemba",40.485,-12.967,7],["Quelimane",36.877,-17.882,7],["Port Louis",57.49,-20.148,7],["Malacca",102.123,2.249,7],["Port Dickson",101.789,2.536,7],["Walvis Bay",14.501,-22.941,7],["Calabar",8.317,4.986,7],["Groningen",6.587,53.218,7],["Alta",23.237,69.968,7],["Andenes",16.124,69.324,7],["Bronnoysund",12.202,65.472,7],["Farsund",6.79,58.089,7],["Floro",5.003,61.598,7],["Kristiansand",7.986,58.142,7],["Namsos",11.49,64.464,7],["Rorvik",11.227,64.861,7],["Sandnessjoen",12.619,66.022,7],["Stokmarknes",14.91,68.568,7],["Stord",5.501,59.78,7],["Picton",174.004,-41.286,7],["Dunedin",170.519,-45.876,7],["Salalah",54.003,16.942,7],["Gwadar",62.339,25.112,7],["Bocas del Toro",-82.238,9.34,7],["La Palma",-78.151,8.414,7],["Chimbote",-78.608,-9.077,7],["Ilo",-71.344,-17.647,7],["Mollendo",-72.01,-17.031,7],["Pisco",-76.222,-13.733,7],["Dumaguete",123.308,9.312,7],["General Santos",125.154,6.086,7],["Buka",154.672,-5.432,7],["Daru",143.207,-9.068,7],["Lae",146.985,-6.741,7],["Madang",145.8,-5.213,7],["Gdansk",18.669,54.393,7],["Gdynia",18.538,54.533,7],["Aguadilla",-67.157,18.429,7],["Arecibo",-66.7,18.481,7],["Mayaguez",-67.157,18.214,7],["Faro",-7.926,37.011,7],["Bora-Bora",-151.75,-16.517,7],["Tulcea",28.817,45.191,7],["Amderma",61.559,69.756,7],["Anadyr",177.539,64.744,7],["Pevek",170.277,69.702,7],["Kaolack",-16.072,14.129,7],["Ziguinchor",-16.268,12.59,7],["Longyearbyen",15.624,78.226,7],["Gizo",156.839,-8.101,7],["Viru Harbour",157.726,-8.5,7],["Kismayu",42.541,-0.374,7],["Karlstad",13.52,59.375,7],["Lidkoping",13.159,58.509,7],["Skelleftea",21.252,64.678,7],["Umea",20.268,63.817,7],["Providenciales",-72.256,21.763,7],["Songkhla",100.57,7.229,7],["Bandirma",27.957,40.354,7],["Samsun",36.34,41.3,7],["Sinop",35.143,42.023,7],["Trabzon",39.737,41.006,7],["Sevastopol",33.541,44.619,7],["Skagway",-135.322,59.451,7],["Valdez",-146.357,61.104,7],["Apalachicola",-84.987,29.727,7],["Annapolis",-76.474,38.965,7],["Cambridge",-76.071,38.574,7],["Portland",-122.784,45.606,7],["Bremerton",-122.638,47.563,7],["Rockland",-69.102,44.103,7],["Santa Cruz",-122.001,36.966,7],["Chesapeake",-76.24,36.722,7],["Cumana",-64.188,10.474,7],["Hai Phong",106.675,20.867,7],["Corfu",19.911,39.622,7],["Alexandria",30.168,31.335,7],["Tangier",-5.825,35.796,7],["Hamilton",-79.85,43.25,7],["Windsor",-83.03,42.31,7],["Rouge River",-83.11,42.28,7],["Owen Sound",-80.93,44.58,7],["Sault Ste Marie",-84.35,46.51,7],["Saginaw",-83.93,43.43,7],["Cheboygan",-84.46,45.65,7],["Sault Ste Marie",-84.35,46.5,7],["Muskegon",-86.26,43.23,7],["Gary",-87.33,41.61,7],["Waukegan",-87.81,42.36,7],["Houghton",-88.56,47.11,7],["Wrangell",-132.38,56.46,7],["Petersburg",-132.95,56.81,7],["Kemi",24.56,65.73,7],["Vaasa",21.58,63.1,7],["Turku",22.23,60.45,7],["Liepaja",21.01,56.51,7],["Europoort",4.11,51.95,7],["Stornoway Harbor",-6.36,58.18,7],["Lisboa",-9.16,38.7,7],["Bonanza",-6.33,36.8,7],["Ibiza",1.45,38.9,7],["Rostov-Na-Donu",39.71,47.16,7],["Tel Aviv Yafo",34.76,32.06,7],["Tunis",10.25,36.8,7],["Bejaia",5.08,36.75,7],["Alger",3.06,36.76,7],["St Louis",-16.51,16.01,7],["Tin Can Island",3.3,6.41,7],["Mocambique",40.73,-15.03,7],["Assab",42.75,13,7],["Massawa",39.46,15.61,7],["Elat",34.95,29.55,7],["Al Kuwayt",47.96,29.38,7],["Bombay",72.83,18.83,7],["Jawaharlal Nehru Port",72.93,18.95,7],["Cochin",76.23,9.96,7],["Madras",80.3,13.1,7],["Calcutta",88.31,22.55,7],["Phuket",98.4,7.83,7],["Pulau Pinang",100.35,5.41,7],["Belawan",98.68,3.78,7],["Semarang",110.41,-6.95,7],["Kupang",123.58,-10.16,7],["Kuching",110.35,1.56,7],["Miri",113.96,4.38,7],["Kota Kinabalu",116.06,5.98,7],["Pelabuhan Sandakan",118.11,5.83,7],["Ujungpandang",119.4,-5.13,7],["Davao",125.61,7.06,7],["Nanjing",118.75,32.08,7],["Hankow",114.28,30.58,7],["Chang Sha",112.98,28.2,7],["Khabarovsk",135.16,48.5,7],["Petropavlovsk",158.65,53.05,7],["Namibe",12.135,-15.194,6],["Bahia Blanca",-62.271,-38.791,6],["La Plata",-57.89,-34.855,6],["Ushuaia",-68.301,-54.809,6],["Puerto Madryn",-65.033,-42.736,6],["Pago Pago",-170.688,-14.274,6],["Mackay",149.224,-21.108,6],["Port Lincoln",135.869,-34.718,6],["Port Pirie",138.007,-33.177,6],["Albany",117.887,-35.032,6],["Barrow Island",115.471,-20.726,6],["Bunbury",115.651,-33.315,6],["Burnie",145.908,-41.053,6],["Geelong",144.387,-38.127,6],["Gladstone",151.252,-23.83,6],["Newcastle",151.769,-32.907,6],["Port Kembla",150.894,-34.462,6],["Portland",141.609,-38.349,6],["Thursday Island",142.219,-10.586,6],["Townsville",146.825,-19.251,6],["Weipa",141.867,-12.67,6],["Whyalla",137.591,-33.038,6],["Wyndham",128.101,-15.451,6],["Brussel (Bruxelles)",4.386,50.886,6],["Gent (Ghent)",3.767,51.114,6],["Ilheus",-39.026,-14.78,6],["Maceio",-35.722,-9.679,6],["Natal",-35.2,-5.783,6],["Rio Grande",-52.076,-32.056,6],["Vitoria",-40.335,-20.323,6],["Ocean Falls",-127.689,52.351,6],["Argentia",-53.987,47.293,6],["Bathurst",-65.65,47.617,6],["Gaspe",-64.437,48.824,6],["Port Alberni",-124.819,49.23,6],["Powell River",-124.525,49.835,6],["Sept-Iles",-66.384,50.206,6],["Sydney",-60.203,46.142,6],["Trois-Rivieres (Three Rivers)",-72.539,46.336,6],["Yarmouth",-66.121,43.836,6],["Rimouski",-68.508,48.478,6],["Riviere-du-Loup",-69.568,47.847,6],["Saint-Anthony",-55.577,51.367,6],["Summerside",-63.787,46.389,6],["Arica",-70.322,-18.473,6],["Tocopilla",-70.206,-22.086,6],["Beihai",109.071,21.459,6],["Jiangmen",113.002,22.503,6],["Wenzhou",120.885,27.998,6],["Yantai",121.389,37.571,6],["Zhuhai",113.584,22.24,6],["Santa Marta",-74.217,11.252,6],["Buenaventura",-77.053,3.883,6],["Praia",-23.503,14.945,6],["Golfito",-83.167,8.638,6],["Cienfuegos",-80.454,22.14,6],["Manzanillo",-77.134,20.337,6],["Matanzas",-81.537,23.051,6],["Santiago de Cuba",-75.857,20.002,6],["Emden",7.193,53.346,6],["Flensburg",9.437,54.803,6],["Wilhelmshaven",8.122,53.53,6],["Esbjerg",8.434,55.466,6],["Odense",10.387,55.417,6],["Sonderborg",9.777,54.907,6],["Ronne",14.688,55.096,6],["Barahona",-71.087,18.212,6],["Cabo Rojo",-71.655,17.925,6],["Oran",-0.637,35.712,6],["A Coruna",-8.388,43.363,6],["Almeria",-2.471,36.832,6],["Gijon",-5.689,43.559,6],["San Sebastian",-1.987,43.323,6],["Santander",-3.805,43.442,6],["Tarragona",1.22,41.096,6],["Oulu",25.455,65.016,6],["Bayonne",-1.494,43.52,6],["Boulogne-sur-Mer",1.576,50.724,6],["Brest",-4.471,48.381,6],["Cannes",7.009,43.548,6],["Cherbourg",-1.618,49.652,6],["Dieppe",1.086,49.926,6],["Granville",-1.601,48.835,6],["La Rochelle",-1.158,46.147,6],["Lorient",-3.352,47.734,6],["Morlaix",-3.835,48.585,6],["Rochefort",-0.953,45.949,6],["Toulon",5.905,43.111,6],["Owendo",9.501,0.288,6],["Aberdeen",-2.075,57.142,6],["Liverpool",-3.007,53.436,6],["Plymouth",-4.154,50.365,6],["Portsmouth",-1.1,50.807,6],["Batumi",41.651,41.649,6],["Kavala",24.402,40.931,6],["Chios",26.138,38.377,6],["Kalamata",22.108,37.023,6],["Patras",21.735,38.254,6],["Volos",22.937,39.353,6],["Uummannaq",-52.119,70.675,6],["Puerto Barrios",-88.604,15.728,6],["Pula",13.835,44.872,6],["Rijeka",14.422,45.328,6],["Split",16.426,43.515,6],["Banjarmasin",114.555,-3.322,6],["Tanjung Pandan",107.627,-2.75,6],["Port Blair",92.724,11.672,6],["Kandla",70.222,23.014,6],["Pondicherry",79.822,11.914,6],["Cork",-8.424,51.901,6],["Galway",-9.044,53.27,6],["Bushehr",50.837,28.985,6],["Ancona",13.492,43.618,6],["Bari",16.855,41.137,6],["Cagliari",9.108,39.204,6],["Olbia",9.518,40.923,6],["Pescara",14.224,42.468,6],["Reggio Calabria",15.644,38.124,6],["Trapani",12.504,38.014,6],["Aomori",140.743,40.831,6],["Hakodate",140.709,41.788,6],["Kagoshima",130.569,31.593,6],["Kochi",133.557,33.524,6],["Kushiro",144.352,42.989,6],["Niihama",133.26,33.971,6],["Oita",131.676,33.272,6],["Shimonoseki",130.901,33.934,6],["Tomakomai",141.653,42.638,6],["Toyama",137.223,36.757,6],["Ube",131.238,33.938,6],["Malindi",40.123,-3.214,6],["Trincomalee",81.204,8.558,6],["Klaipeda",21.134,55.687,6],["Safi",-9.243,32.307,6],["Ensenada",-116.623,31.851,6],["Guaymas",-110.869,27.919,6],["Manzanillo",-104.301,19.071,6],["Salina Cruz",-95.202,16.157,6],["Saipan",145.735,15.226,6],["Nouadhibou",-17.042,20.907,6],["Luderitz",15.154,-26.638,6],["Bluefields",-83.757,12.012,6],["Alesund",6.172,62.472,6],["Batsfjord",29.718,70.634,6],["Bodo",14.373,67.289,6],["Hammerfest",23.671,70.667,6],["Haugesund",5.256,59.412,6],["Kirkenes",30.056,69.728,6],["Kristiansund",7.733,63.115,6],["Mo i Rana",14.124,66.315,6],["Molde",7.157,62.736,6],["Mosjoen",13.187,65.852,6],["Narvik",17.419,68.439,6],["Stavanger",5.737,58.979,6],["Vadso",29.738,70.071,6],["Vardo",31.104,70.373,6],["New Plymouth",174.038,-39.057,6],["Gisborne",178.022,-38.672,6],["Greymouth",171.201,-42.445,6],["Napier",176.918,-39.475,6],["Tauranga",176.174,-37.659,6],["Wanganui",174.99,-39.944,6],["Westport",171.591,-41.75,6],["Whangarei",174.343,-35.751,6],["Timaru",171.254,-44.389,6],["Talara",-81.275,-4.573,6],["Masbate",123.62,12.368,6],["Subic Bay",120.275,14.808,6],["Alotau",150.451,-10.313,6],["Kavieng",150.787,-2.585,6],["Kieta",155.627,-6.215,6],["Rabaul",152.185,-4.241,6],["Vanimo",141.292,-2.684,6],["Ponce",-66.61,17.968,6],["Sines",-8.867,37.943,6],["Horta",-28.622,38.53,6],["Arkhangelsk",40.556,64.543,6],["Murmansk",33.041,68.972,6],["Tiksi",128.873,71.643,6],["Jizan",42.535,16.89,6],["Berbera",45,10.441,6],["Nieuw Nickerie",-57.002,5.952,6],["Malmo",13.002,55.626,6],["Gavle",17.193,60.684,6],["Halmstad",12.85,56.655,6],["Helsingborg",12.688,56.033,6],["Hudiksvall",17.119,61.722,6],["Kalmar",16.369,56.659,6],["Ornskoldsvik",18.726,63.276,6],["Ronneby",15.3,56.175,6],["Soderhamn",17.089,61.308,6],["Vastervik",16.652,57.756,6],["Visby",18.275,57.636,6],["Tekirdag",27.508,40.968,6],["Tanga",39.103,-5.066,6],["Kherson",32.607,46.619,6],["Colonia",-57.842,-34.472,6],["Cordova",-145.756,60.55,6],["Ketchikan",-131.671,55.347,6],["Bangor",-68.77,44.792,6],["Stockton",-121.323,37.951,6],["Bridgeport",-73.176,41.172,6],["New Haven",-72.91,41.286,6],["Port Everglades",-80.109,26.084,6],["Savannah",-81.122,32.111,6],["Portland",-70.24,43.653,6],["Gulfport",-89.088,30.359,6],["Portsmouth",-70.769,43.087,6],["Newark",-74.137,40.7,6],["Astoria",-123.826,46.189,6],["Port Everglades",-80.109,26.084,6],["Corpus Christi",-97.405,27.813,6],["Pascagoula",-88.537,30.351,6],["Tacoma",-122.404,47.267,6],["Beaumont",-94.084,30.078,6],["Olympia",-122.901,47.053,6],["Port Angeles",-123.435,48.131,6],["Port Townsend",-122.753,48.114,6],["Puerto Cabello",-67.993,10.477,6],["Mukalla",49.144,14.522,6],["East London",27.905,-33.025,6],["Mossel Bay",21.418,-34.375,6],["Richards Bay",32.056,-28.805,6],["Erie",-80.1,42.15,6],["Bay City",-83.86,43.6,6],["Milwaukee",-87.88,43.03,6],["Coos Bay",-124.21,43.36,6],["Sitka",-135.33,57.05,6],["Kodiak",-152.4,57.78,6],["Lobito",13.569,-12.337,5],["Abu Dhabi",54.373,24.525,5],["Comodoro Rivadavia",-67.46,-45.856,5],["Mar del Plata",-57.533,-38.043,5],["Cairns",145.776,-16.93,5],["Broome",122.209,-18.003,5],["Devonport",146.368,-41.168,5],["Hobart",147.336,-42.88,5],["Antwerpen",4.294,51.298,5],["Varna",27.889,43.194,5],["Belize City",-88.202,17.48,5],["Hamilton",-64.776,32.291,5],["Belem",-48.485,-1.452,5],["Paranagua",-48.519,-25.501,5],["Porto Alegre",-51.224,-30.017,5],["Recife",-34.869,-8.054,5],["Salvador",-38.505,-12.959,5],["Santos",-46.301,-23.969,5],["Charlottetown",-63.119,46.232,5],["Halifax",-63.574,44.657,5],["Nanaimo",-123.926,49.169,5],["Quebec",-71.209,46.806,5],["Victoria",-123.407,48.431,5],["Prince Rupert",-130.337,54.31,5],["Saint-John",-66.06,45.268,5],["Antofagasta",-70.404,-23.65,5],["Iquique",-70.152,-20.203,5],["Puerto Montt",-72.954,-41.484,5],["Haikou",110.275,20.028,5],["Ningbo",121.553,29.867,5],["Xiamen",118.02,24.45,5],["Abidjan",-3.967,5.233,5],["Douala",9.686,4.055,5],["Pointe Noire",11.827,-4.784,5],["Barranquilla",-74.756,10.967,5],["Moroni",43.243,-11.701,5],["Mariel",-82.756,23.006,5],["Larnaca",33.639,34.924,5],["Limassol",33.018,34.65,5],["Bremen",8.751,53.097,5],["Hamburg",9.958,53.525,5],["Djibouti",43.136,11.602,5],["Aalborg",10.005,57.061,5],["Fredericia",9.741,55.558,5],["Alicante",-0.488,38.335,5],["Bilbao",-3.027,43.343,5],["Valencia",-0.318,39.444,5],["Fox Bay",-60.071,-51.956,5],["Ajaccio",8.739,41.92,5],["Bastia",9.452,42.7,5],["Bordeaux",-0.553,44.865,5],["Calais",1.85,50.966,5],["Dunkerque",2.171,51.022,5],["Honfleur",0.235,49.422,5],["Libreville",9.434,0.401,5],["Port Gentil",8.785,-0.712,5],["Belfast",-5.891,54.621,5],["Dover",1.322,51.121,5],["Inverness",-4.235,57.487,5],["Takoradi",-1.738,4.884,5],["Basse-Terre",-61.727,15.996,5],["Pointe-a-Pitre",-61.538,16.234,5],["Banjul",-16.57,13.444,5],["Bata",9.738,1.824,5],["Iraklion",25.141,35.346,5],["Thessaloniki",22.918,40.635,5],["Cayenne",-52.336,4.935,5],["Kourou",-52.624,5.159,5],["Georgetown",-58.167,6.819,5],["Puerto Cortes",-87.94,15.833,5],["Zadar",15.219,44.117,5],["Surabaya",113.917,-7.617,5],["Manado",124.826,1.482,5],["Senipah",117.217,-1.05,5],["Bhavnagar",72.206,21.77,5],["Visakhapatnam",83.287,17.693,5],["Limerick",-8.633,52.663,5],["Bandar Abbas",56.204,27.141,5],["Reykjavik",-21.838,64.148,5],["Seydisfjordur",-14.004,65.263,5],["Trieste",13.754,45.645,5],["Hiroshima",132.421,34.365,5],["Kobe",135.238,34.684,5],["Nagasaki",129.86,32.74,5],["Otaru",141.017,43.197,5],["Tokyo",139.788,35.625,5],["Monrovia",-10.794,6.346,5],["Colombo",79.85,6.951,5],["Casablanca",-7.6,33.609,5],["Monaco",7.421,43.732,5],["Acapulco",-99.902,16.844,5],["Mazatlan",-106.393,23.192,5],["Tampico",-97.834,22.237,5],["Beira",34.834,-19.819,5],["Maputo",32.557,-25.973,5],["Nouakchott",-16.021,18.035,5],["Plymouth",-62.22,16.703,5],["Fort-de-France",-61.057,14.599,5],["Noumea",166.426,-22.26,5],["Port Harcourt",7.003,4.769,5],["Corinto",-87.169,12.482,5],["Rotterdam",4.293,51.927,5],["Bergen",5.32,60.397,5],["Tromso",18.969,69.656,5],["Trondheim",10.389,63.438,5],["Nelson",173.272,-41.26,5],["Muscat",58.409,23.607,5],["Cebu",123.923,10.306,5],["Zamboanga",122.071,6.903,5],["Port Moresby",147.151,-9.467,5],["Wewak",143.651,-3.57,5],["Porto",-8.619,41.141,5],["Ponta Delgada",-25.659,37.737,5],["Papeete",-149.57,-17.531,5],["Doha",51.556,25.298,5],["Kaliningrad",20.455,54.7,5],["Vladivostok",131.888,43.094,5],["Vyborg",28.726,60.705,5],["Port Sudan",37.222,19.616,5],["Mogadishu",45.341,2.029,5],["Paramaribo",-55.139,5.82,5],["Goteborg",11.87,57.689,5],["Lulea",22.158,65.579,5],["Norrkoping",16.226,58.61,5],["Lome",1.285,6.139,5],["Izmir",27.154,38.444,5],["Kaohsiung",120.307,22.565,5],["Taichung",120.504,24.258,5],["Odessa",30.737,46.501,5],["Montevideo",-56.204,-34.901,5],["Juneau",-134.67,58.379,5],["Nome",-165.425,64.498,5],["Hilo",-155.069,19.733,5],["Bellingham",-122.5,48.741,5],["Houston",-95.202,29.739,5],["Brownsville",-97.385,25.957,5],["Longview",-122.967,46.113,5],["Kingstown",-61.243,13.169,5],["La Guaira",-66.94,10.603,5],["Maracaibo",-71.588,10.684,5],["Da Nang",108.223,16.082,5],["Port Vila",168.306,-17.747,5],["Apia",-171.758,-13.828,5],["Hodeidah",42.935,14.834,5],["Ottawa",-75.7,45.43,5],["Buffalo",-78.88,42.88,5],["Cleveland",-81.71,41.5,5],["Green Bay",-88.01,44.51,5],["Duluth",-92.1,46.76,5],["Eureka",-124.18,40.8,5],["Luanda",13.251,-8.784,4],["Kralendijk, Bonaire",-68.274,12.148,4],["Philipsburg",-63.044,18.014,4],["Adelaide",138.508,-34.799,4],["Brisbane",153.168,-27.383,4],["Port Hedland",118.573,-20.317,4],["Chittagong",91.826,22.269,4],["Bridgetown",-59.624,13.107,4],["Montreal",-73.525,45.544,4],["Punta Arenas",-70.905,-53.168,4],["Valdivia",-73.227,-39.817,4],["Dalian",121.65,38.934,4],["Fuzhou",119.301,26.047,4],["Qingdao",120.317,36.096,4],["Shanghai",121.487,31.222,4],["Shantou",116.704,23.355,4],["Puntarenas",-84.804,9.982,4],["Kiel",10.157,54.331,4],["Roseau",-61.386,15.296,4],["Santo Domingo",-69.876,18.475,4],["Cartagena",-0.986,37.589,4],["Vigo",-8.726,42.242,4],["Santa Cruz de Tenerife",-16.227,28.475,4],["Tallinn",24.691,59.46,4],["Suva",178.421,-18.133,4],["Saint-Tropez",6.633,43.271,4],["Glasgow",-4.303,55.863,4],["Southampton",-1.424,50.903,4],["Gibraltar",-5.357,36.137,4],["Conakry",-13.71,9.516,4],["Bissau",-15.573,11.858,4],["Canea",24.01,35.518,4],["Katakolon",21.319,37.646,4],["San Jose",-90.841,13.916,4],["Hong Kong",114.156,22.321,4],["Port-au-Prince",-72.34,18.566,4],["Surabaya",112.724,-7.206,4],["Dublin",-6.206,53.344,4],["Waterford",-7.119,52.266,4],["Haifa",35.018,32.822,4],["Livorno",10.302,43.556,4],["Ischia",13.938,40.745,4],["Kingston",-76.825,17.982,4],["Kitakyushu",130.854,33.922,4],["Mombasa",39.622,-4.053,4],["Phnom Penh",104.921,11.583,4],["Beirut",35.519,33.905,4],["Male",73.507,4.175,4],["Veracruz",-96.134,19.208,4],["Yangon",96.169,16.766,4],["Wellington",174.79,-41.278,4],["Szczecin",14.586,53.431,4],["Jeddah",39.159,21.459,4],["Dakar",-17.425,14.682,4],["Singapore",103.722,1.293,4],["Freetown",-13.208,8.494,4],["Stockholm",18.109,59.335,4],["Bangkok",100.569,13.607,4],["Canakkale",26.522,40.265,4],["Anchorage",-149.888,61.236,4],["Long Beach",-118.201,33.749,4],["Oakland",-122.301,37.799,4],["Jacksonville",-81.559,30.381,4],["Philadelphia",-75.135,39.895,4],["Charleston",-79.924,32.822,4],["Newport",-71.324,41.483,4],["Ho Chi Minh City",106.722,10.794,4],["Aden",44.99,12.796,4],["Durban",31.023,-29.881,4],["Port Elizabeth",25.635,-33.961,4],["Port Elizabeth",25.635,-33.961,4],["Detroit",-83.03,42.33,4],["Port Of Memphis",-90.16,35.06,4],["Tri-City Port",-90.2,38.71,4],["Helsinki",24.96,60.16,4],["Sankt-Peterburg",30.3,59.93,4],["Oranjestad",-70.039,12.52,3],["Dubai",55.269,25.267,3],["Buenos Aires",-58.37,-34.599,3],["Darwin",130.855,-12.47,3],["Melbourne",144.917,-37.833,3],["Perth",115.855,-31.965,3],["Sydney",151.189,-33.862,3],["Cotonou",2.422,6.347,3],["Nassau",-77.321,25.077,3],["Rio de Janeiro",-43.192,-22.883,3],["Vancouver",-123.071,49.298,3],["Liverpool",-64.704,44.043,3],["Valparaiso",-71.619,-33.035,3],["Guangzhou",113.409,23.094,3],["Tianjin",117.457,39.009,3],["Abidjan",-4.021,5.283,3],["Bremerhaven",8.553,53.564,3],["Rostock",12.118,54.153,3],["Tuborg",12.584,55.726,3],["Guayaquil",-79.902,-2.284,3],["Port Said",32.306,31.253,3],["Barcelona",2.169,41.355,3],["Malaga",-4.418,36.709,3],["Palma de Mallorca",2.625,39.551,3],["Le Havre",0.174,49.467,3],["Marseille",5.341,43.329,3],["Nice",7.286,43.694,3],["London",-0.067,51.503,3],["Gythion",22.568,36.76,3],["Rhodes",28.234,36.444,3],["Dubrovnik",18.076,42.66,3],["Civitavecchia",11.776,42.099,3],["Palermo",13.37,38.131,3],["Savona",8.49,44.312,3],["Marghera",12.241,45.453,3],["Montego Bay",-77.935,18.468,3],["Osaka",135.434,34.636,3],["Yokohama",139.667,35.436,3],["Riga",24.088,57.008,3],["Cabo San Lucas",-109.901,22.884,3],["Marsaxlokk",14.541,35.826,3],["Amsterdam",4.824,52.413,3],["Oslo",10.735,59.897,3],["Auckland",174.769,-36.836,3],["Karachi",66.974,24.835,3],["Colon",-79.885,9.373,3],["Manila",120.943,14.524,3],["San Juan",-66.091,18.436,3],["Istanbul",28.993,41.013,3],["Taipei",121.375,25.152,3],["Dar es Salaam",39.293,-6.834,3],["Mobile",-88.038,30.711,3],["Los Angeles",-118.26,33.732,3],["San Diego",-117.157,32.684,3],["San Francisco",-122.401,37.789,3],["Miami",-80.167,25.775,3],["Tampa",-82.436,27.93,3],["Honolulu",-157.874,21.309,3],["Boston",-71.035,42.364,3],["Baltimore",-76.556,39.233,3],["New York",-74.024,40.688,3],["Galveston",-94.818,29.304,3],["Norfolk",-76.293,36.902,3],["Seattle",-122.36,47.602,3],["Cape Town",18.435,-33.909,3],["Toronto",-79.38,43.61,3],["Chicago",-87.6,41.88,3]];

function attachPorts(year){
  const ports=portCatalogue,ctx=worldLayer.getContext("2d");
  ctx.save();ctx.resetTransform();
  for(const [name,lon,lat,rank] of ports){
    const point=PX(lon,lat),u=lon+180,v=90-lat;
    let nearest=null,best=Infinity;
    for(const city of detailedCities){
      if(city.name.startsWith("Ставка · "))continue;
      const gap=((city.point[0]-point[0])/14.5*Math.cos(lat*Math.PI/180))**2+((city.point[1]-point[1])/22)**2;
      if(gap<best&&gap<.085**2){nearest=city;best=gap}
    }
    if(nearest){nearest.port=true;continue}
    if(year<1800)continue;
    let province=-1;
    // Ports may sit a few kilometres offshore on a generalised coastline.
    for(const radius of [0,.035,.09,.18]){
      for(let j=0;j<(radius?12:1);j++){
        const a=u+radius*Math.cos(j*Math.PI/6),b=v+radius*Math.sin(j*Math.PI/6);
        province=globalCampaign?worldShapes.findIndex(shape=>shape.bounds.some(box=>a>=box.l&&a<=box.r&&b>=box.t&&b<=box.b)&&ctx.isPointInPath(shape.path,a,b,"evenodd")):P.findIndex(p=>pip(p.pts,...worldPoint([a,b])));
        if(province>=0)break;
      }
      if(province>=0)break;
    }
    if(province>=0)detailedCities.push({id:detailedCities.length,province,name,point,population:0,port:true,portRank:rank});
  }
  ctx.restore();
}

function configureCampaign(world){
  if(!world&&!globalCampaign)return;
  globalCampaign=world;worldFocus=null;
  for(const key of Object.keys(C))delete C[key];
  if(!world){Object.assign(C,legacyCountries);P.splice(0,P.length,...legacyProvinces);buildCityDistricts(legacyCityRows);return}
  detailedCities=[];districtMap=[];
  P.splice(0,P.length,...worldPlay.map((r,i)=>{
    const key="W"+i,shape=worldShapes[i],center=worldPoint(r.center);
    C[key]={n:shape.name,col:shape.color,ag:.2,civ:5,mil:3,st:4,oil:2,dv:6};
    Object.assign(C[key],campaignIdentity(menuRows[i],activeMapYear));
    const raw=menuRows[i].raw||"";C[key].raw=raw;
    if(["New France","French India","French Colony of Guiana","French Louisiana","French Algeria","French Africa","French Indochina","French Mandate for Syria and Lebanon","France Antarctique","First French colonial empire"].includes(raw)){
      C[key].administration=raw.includes("Mandate")?"Французская мандатная администрация":"Французская колониальная администрация";
      if(activeMapYear>=1880){C[key].flag=FLAG_ASSETS.FRA;C[key].standard=false}
    }
    const locations=r.cities.length?r.cities:[["Ставка · "+shape.name,...r.center,0]];
    locations.forEach(([name,u,v,population],j)=>detailedCities.push({id:detailedCities.length,province:i,name,point:worldPoint([u,v]),population,primary:j===0}));
    return {n:shape.name,o0:key,c:center,pts:shape.main,nb:r.nb,ar:Math.max(1,r.area*319)};
  }));
}
function chooseWorldCountry(name){
 const option=[...$("#world-country").options].find(o=>o.text===name);
 if(!option)return;showCampaign(true);$("#world-country").value=option.value;$("#world-country").dispatchEvent(new Event("change"));
}
window.addEventListener("world-country-choice",e=>chooseWorldCountry(e.detail));
const worldLayer=document.createElement("canvas");worldLayer.width=2880;worldLayer.height=1440;
let worldFocus=null;
const surfaceImage=new Image();surfaceImage.onload=redraw;surfaceImage.src="/terrain-surface.jpg";
const reliefImage=new Image();
reliefImage.onload=redraw;reliefImage.src="/terrain-relief.webp";
const politicalLayer=document.createElement("canvas");
let politicalKey="";
const overviewCanvas=document.createElement("canvas");
let overviewKey="";
function drawPoliticalBase(){
  if(!worldShapes.length)return;
  const colors=worldShapes.map((item,i)=>globalCampaign?(S.prov[i].o===S.pl&&mode==="pol"?"#c7b47c":fill(i)):item===worldFocus?"#c7b47c":item.color);
  if(cam.k<=1.2){
    const key=[activeMapYear,reliefImage.naturalWidth,surfaceImage.naturalWidth,mode,...colors].join("|");
    if(key!==overviewKey){
      overviewCanvas.width=2160;overviewCanvas.height=1080;
      const g=overviewCanvas.getContext("2d");g.scale(6,6);
      for(const [i,item] of worldShapes.entries()){g.fillStyle=colors[i];g.fill(item.displayPath,"evenodd")}
      if(reliefImage.naturalWidth){g.save();g.globalCompositeOperation="source-atop";g.globalAlpha=.53;g.drawImage(reliefImage,0,0,360,180);g.restore()}
      if(surfaceImage.naturalWidth){g.save();g.globalCompositeOperation="source-atop";g.globalAlpha=mode==="terrain"?.92:.24;g.drawImage(surfaceImage,0,0,360,180);g.restore()}
      g.lineWidth=.22;g.strokeStyle="#5c514f";for(const item of worldShapes)g.stroke(item.displayPath);
      overviewKey=key;
    }
    x.drawImage(overviewCanvas,-2465,-418,5220,3960);return;
  }
  const key=[activeMapYear,cam.k,cam.tx,cam.ty,cv.width,cv.height,reliefImage.naturalWidth,surfaceImage.naturalWidth,mode,...colors].join("|");
  if(key!==politicalKey){
    politicalKey=key;
    if(politicalLayer.width!==cv.width)politicalLayer.width=cv.width;
    if(politicalLayer.height!==cv.height)politicalLayer.height=cv.height;
    const g=politicalLayer.getContext("2d"),dp=devicePixelRatio||1;
    g.resetTransform();g.clearRect(0,0,cv.width,cv.height);
    g.setTransform(dp*cam.k,0,0,dp*cam.k,dp*cam.tx,dp*cam.ty);g.translate(-2465,-418);g.scale(14.5,22);
    g.lineJoin="round";g.lineCap="round";
    const visible=worldShapes.map((item,i)=>({item,i})).filter(({item})=>item.bounds.some(({l,r,t,b})=>
      (r*14.5-2465)*cam.k+cam.tx>=-6&&(l*14.5-2465)*cam.k+cam.tx<=innerWidth+6&&
      (b*22-418)*cam.k+cam.ty>=-6&&(t*22-418)*cam.k+cam.ty<=innerHeight+6));
    for(const {i,item} of visible){g.fillStyle=colors[i];g.fill(item.displayPath,"evenodd")}
    if(reliefImage.naturalWidth){
      g.save();g.globalCompositeOperation="source-atop";g.globalAlpha=.53;g.drawImage(reliefImage,0,0,360,180);g.restore();
    }
    if(surfaceImage.naturalWidth){g.save();g.globalCompositeOperation="source-atop";g.globalAlpha=mode==="terrain"?.92:mode==="pol"?.62:.22;g.drawImage(surfaceImage,0,0,360,180);g.restore()}
    for(const {item} of visible){
      g.strokeStyle="rgba(40,33,47,.68)";g.lineWidth=Math.min(.32,4.8/(18*cam.k));g.stroke(item.displayPath);
      g.strokeStyle="rgba(231,212,171,.66)";g.lineWidth=Math.min(.085,1.05/(18*cam.k));g.stroke(item.displayPath);
    }
  }
  x.save();x.resetTransform();x.drawImage(politicalLayer,0,0);x.restore();
}
function drawWorldLand(){
  drawPoliticalBase();
  x.textAlign="center";x.fillStyle="#a3c1c9";x.font="italic "+14/cam.k+"px Georgia";
  for(const [label,lon,lat] of [["Тихий океан",-145,-4],["Атлантический океан",-35,20],["Индийский океан",77,-26],["Северный Ледовитый океан",63,79],["Южный океан",-15,-60]])x.fillText(label,...PX(lon,lat));

}
function focusWorldCountry(sx,sy){
  const wx=(sx-cam.tx)/cam.k,wy=(sy-cam.ty)/cam.k;
  const u=wx/14.5+170,v=wy/22+19;
  x.save();x.setTransform(1,0,0,1,0,0);
  worldFocus=worldShapes[worldIndex(wx,wy)];
  x.restore();
  if(!worldFocus)return false;
  cam.k=Math.max(.85,cam.k);cam.tx=innerWidth/2-wx*cam.k;cam.ty=innerHeight/2-wy*cam.k;
  boundCamera();
  if(hit(innerWidth/2,innerHeight/2)<0){
    const panel=$("#foreign-country");panel.hidden=false;panel.querySelector("strong").textContent=worldFocus.name;
    const button=panel.querySelector("button"),name=worldFocus.name;
    button.disabled=false;button.textContent="Выбрать для мировой кампании";button.onclick=()=>chooseWorldCountry(name);

  }
  tip.textContent=worldFocus.name;positionMapTip({clientX:innerWidth/2,clientY:innerHeight/2});redraw();return true;
}
const fileCache=new Map();
function readMapFile(url){
  if(!fileCache.has(url))fileCache.set(url,fetch(url).then(response=>{
    if(!response.ok)throw Error(url);return response.json();
  }).catch(error=>{fileCache.delete(url);throw error}));
  return fileCache.get(url);
}
const regionalNames=new Map();
const enNames=new Intl.DisplayNames("en",{type:"region",fallback:"none"});
const ruNames=new Intl.DisplayNames("ru",{type:"region",fallback:"none"});
for(let a=65;a<=90;a++)for(let b=65;b<=90;b++){
  const iso=String.fromCharCode(a,b),english=enNames.of(iso);
  if(english)regionalNames.set(english,ruNames.of(iso));
}
const historicalNames={"Union of Soviet Socialist Republics":"СССР","Second Polish Republic":"Польская Республика","Federal Republic of Germany":"ФРГ","German Democratic Republic":"ГДР","Weimar Republic":"Веймарская республика","Empire of Japan":"Японская империя","United States of America":"США","Kingdom of Great Britain":"Великобритания","French Third Republic":"Третья Французская республика","Russian Federation":"Россия","Republic of Turkey":"Турция","Éire":"Ирландия","Czechoslovakia":"Чехословакия","Yugoslavia":"Югославия","British Raj":"Британская Индия","Ethiopian Empire":"Эфиопская империя","Free City of Danzig":"Вольный город Данциг","People's Republic of China":"Китайская Народная Республика","Kingdom of Italy":"Королевство Италия","German Reich":"Германский рейх"};
function countryName(raw){
  if(raw==="Kingdom of Romania")return "Королевство Румыния";
  if(raw==="Principality of Bulgaria")return "Болгария";
  return historicalNames[raw]||regionalNames.get(raw)||regionalNames.get(raw.replace(/^(?:(?:People's |Socialist |Federal |Islamic |Democratic )?Republic|Kingdom|State|Commonwealth) of /,''))||raw;
}
const yearInput=$("#world-year"),countryList=$("#world-country"),launch=$("#campaign-start"),statusLine=$("#history-status");
let menuRevision=0,menuRows=[],activeMapYear=null,starting=false;
function formatYear(year){return year<0?Math.abs(year)+" до н. э.":String(year)}
async function listCountries(){
  const revision=++menuRevision,previous=countryList.selectedOptions[0]?.text;
  menuRows=[];countryList.replaceChildren();launch.disabled=true;
  const year=yearInput.valueAsNumber;
  if(!yearInput.value||!yearInput.validity.valid||year===0){statusLine.textContent="Выберите год от 3400 до н. э. до 2026 года.";return}
  statusLine.textContent="Загрузка списка стран…";
  try{
    const modern=year>=2025,source=await readMapFile(modern?"/world.json":"/history/index.json");
    if(revision!==menuRevision)return;
    menuRows=modern?source.map(([name])=>({name})):source.filter(r=>r[1]<=year&&year<=r[2]).map(r=>({name:countryName(r[0]),raw:r[0],chunk:r[3],offset:r[4]}));
    const options=menuRows.map((r,i)=>new Option(r.name,"W"+i)).sort((a,b)=>a.text.localeCompare(b.text,"ru"));
    countryList.replaceChildren(...options);
    if(year===1936){
      const group=document.createElement("optgroup");group.label="Европейский сценарий с провинциями";
      for(const key of ["GER","FRA","UK","SOV","ITA","POL"])group.append(new Option(legacyCountries[key].n+" · провинции",key));
      countryList.append(group);
    }
    countryList.selectedIndex=Math.max(0,options.findIndex(o=>o.text===(previous||"СССР")));
    launch.disabled=!options.length;
    statusLine.textContent=formatYear(year)+" · "+options.length+" сторон · "+(modern?"современная карта":"исторические границы Cliopatria");
  }catch{if(revision===menuRevision){
    statusLine.textContent="Не удалось загрузить список. ";
    if(location.hostname==="127.0.0.1"&&["3000","3011"].includes(location.port)){
      const link=document.createElement("a");link.href="http://127.0.0.1:3012/";link.textContent="Открыть обновлённое меню кампаний";statusLine.append(link)
    }
  }}
}
function animateSelection(){
  if(!matchMedia("(prefers-reduced-motion: reduce)").matches)
    countryList.animate([{boxShadow:"0 0 0 2px #dfbb77",backgroundColor:"#39423b"},{boxShadow:"0 0 0 0 transparent",backgroundColor:"#162128"}],{duration:360});
}
countryList.addEventListener("change",animateSelection);
yearInput.addEventListener("input",()=>{listCountries();animateSelection()});
function mapLettering(points){
  let mx=0,my=0;
  for(const [a,b] of points){mx+=a;my+=b}
  mx/=points.length;my/=points.length;
  let xx=0,yy=0,xy=0;
  for(const [a,b] of points){xx+=(a-mx)**2;yy+=(b-my)**2;xy+=(a-mx)*(b-my)}
  const angle=Math.max(-.34,Math.min(.34,.5*Math.atan2(2*xy,xx-yy)));
  const co=Math.cos(angle),si=Math.sin(angle);
  const pts=points.map(([a,b])=>[(a-mx)*co+(b-my)*si,-(a-mx)*si+(b-my)*co]);
  const ys=pts.map(p=>p[1]),lo=Math.min(...ys),hi=Math.max(...ys);
  let best={a:mx,b:my,width:0,angle},score=0;
  for(const f of [.5,.4,.6,.3,.7]){
    const y=lo+(hi-lo)*f,cuts=[];
    for(let j=0,k=pts.length-1;j<pts.length;k=j++){const a=pts[k],b=pts[j];if((a[1]>y)!==(b[1]>y))cuts.push(a[0]+(y-a[1])*(b[0]-a[0])/(b[1]-a[1]))}
    cuts.sort((a,b)=>a-b);
    for(let j=1;j<cuts.length;j+=2){const w=cuts[j]-cuts[j-1],weight=w*(1-Math.abs(f-.5)*.5);if(weight<=score)continue;
      score=weight;const mid=(cuts[j]+cuts[j-1])/2;best={a:mx+mid*co-y*si,b:my+mid*si+y*co,width:w,angle};
    }
  }
  return best;
}
function drawPoliticalNames(){
  if(cam.k>5)return;
  const labels=worldShapes.flatMap((shape,i)=>{
    if(!worldVisible(shape.letter.a,shape.letter.b,40))return [];
    const province=globalCampaign?i:P.findIndex(p=>pip(p.pts,shape.letter.a,shape.letter.b));
    const owner=province<0?null:S.prov[province].o;
    return {shape,owner,name:owner&&(globalCampaign||owner!==P[province].o0)?C[owner].n:shape.name};
  }).sort((a,b)=>Number(b.owner===S.pl)-Number(a.owner===S.pl)||b.shape.letter.width-a.shape.letter.width);
  const occupied=[];
  for(const {shape,name,owner} of labels){
    const {a,b,width,angle}=shape.letter,sx=a*cam.k+cam.tx,sy=b*cam.k+cam.ty;
    if(!worldVisible(a,b,40))continue;
    const caption=name.toLocaleUpperCase("ru"),room=width*cam.k*.87;
    x.save();x.font='650 20px "Segoe UI",sans-serif';
    const natural=x.measureText(caption).width||1,fs=Math.min(40,room*20/natural);
    if(fs<9){x.restore();continue}
    const w=natural*fs/20,h=fs+Math.abs(Math.sin(angle))*w;
    const box={l:sx-w/2,r:sx+w/2,t:sy-h/2-3,b:sy+h/2+3};
    if(occupied.some(o=>o.l<box.r&&box.l<o.r&&o.t<box.b&&box.t<o.b)){x.restore();continue}
    occupied.push(box);x.translate(a,b);x.scale(1/cam.k,1/cam.k);x.rotate(angle);
    x.font='650 '+fs+'px "Segoe UI",sans-serif';x.textAlign="center";x.textBaseline="middle";
    x.lineWidth=Math.max(2,fs*.13);x.strokeStyle="rgba(244,232,202,.84)";x.fillStyle="rgba(42,46,43,.91)";
    x.strokeText(caption,0,0);x.fillText(caption,0,0);
    if(cam.k<.85&&owner&&(owner===S.pl||fs>=14)){const image=globalCampaign?loadStandard(C[owner].flag):flagImages[owner];if(image?.naturalWidth){x.fillStyle="#292a23";x.fillRect(-10,-fs*.6-13,20,13);x.drawImage(image,-9,-fs*.6-12,18,11)}}
    x.restore();
  }
}

function historicDisplayPath(d){
  const path=new Path2D();
  for(const ring of d.match(/M[^Z]+/g)){
    const pts=ring.slice(1).split("L").map(p=>p.trim().split(/\s+/).map(Number));
    if(pts.length>1&&pts[0][0]===pts.at(-1)[0]&&pts[0][1]===pts.at(-1)[1])pts.pop();
    if(pts.length<3)continue;
    pts.forEach(([x,y],j)=>{
      const prev=pts[(j+pts.length-1)%pts.length],next=pts[(j+1)%pts.length];
      const l=Math.hypot(prev[0]-x,prev[1]-y),r=Math.hypot(next[0]-x,next[1]-y);
      const cut=Math.min(.13,l*.38,r*.38);
      const at=[x+(prev[0]-x)*cut/(l||1),y+(prev[1]-y)*cut/(l||1)];
      if(j===0)path.moveTo(...at);else path.lineTo(...at);
      path.quadraticCurveTo(x,y,x+(next[0]-x)*cut/(r||1),y+(next[1]-y)*cut/(r||1));
    });
    path.closePath();
  }
  return path;
}
function parseShape(name,d,i){
  const rings=d.match(/M[^Z]+/g).map(r=>r.slice(1).split("L").map(p=>p.trim().split(/\s+/).map(Number)));
  const bounds=rings.map(points=>{
    const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);
    let area=0;points.forEach(([a,b],j)=>{const next=points[(j+1)%points.length];area+=a*next[1]-b*next[0]});
    return {points,area:Math.abs(area)/2,l:Math.min(...xs),r:Math.max(...xs),t:Math.min(...ys),b:Math.max(...ys)};
  }).sort((a,b)=>b.area-a.area);
  const main=bounds[0].points.map(worldPoint);
  const ink={"СССР":"#8a7185","Польская Республика":"#b28e9f","Югославия":"#7e819b","Чехословакия":"#71a3a3","Болгария":"#769064","Королевство Румыния":"#c7b47c","Турция":"#aaa589"};
  return {name,path:new Path2D(d),bounds,main,letter:mapLettering(main),color:ink[name]||["#849567","#b9ac79","#779caa","#ae858a","#8e87a1","#699986","#b79a81","#8193a5"][i%8]};
}
function historicalPlay(shapes,modern,year,observations){
  const places=year>=1800?modern.flatMap(r=>r.cities):[];
  if(year<1800){
    const unique=new Map();
    for(const [name,u,v,samples] of observations){
      if(year<samples[0][0]||year>samples[samples.length-1][0]+100)continue;
      const sample=samples.reduce((best,row)=>row[0]<=year?row:best,samples[0]);
      unique.set(name+"|"+u+"|"+v,[name,u,v,sample[1]]);
    }
    places.push(...unique.values());
  }
  places.sort((a,b)=>b[3]-a[3]);
  const shared=new Map(),ctx=worldLayer.getContext("2d");ctx.save();ctx.resetTransform();
  const rows=shapes.map((shape,i)=>{
    const main=shape.bounds[0],cities=[];
    for(const city of places){
      const [,u,v]=city;if(shape.bounds.some(b=>b.l<=u&&u<=b.r&&b.t<=v&&v<=b.b)&&ctx.isPointInPath(shape.path,u,v,"evenodd"))cities.push(city);
    }
    for(const ring of shape.bounds)for(const point of ring.points){
      const key=point.join();if(!shared.has(key))shared.set(key,new Set());shared.get(key).add(i);
    }
    let center=cities.find(([,u,v])=>pip(main.points,u,v))?.slice(1,3);
    if(!center){center=main.points[0];outer:for(let j=1;j<12;j++)for(let k=1;k<12;k++){const u=main.l+(main.r-main.l)*k/12,v=main.t+(main.b-main.t)*j/12;if(ctx.isPointInPath(shape.path,u,v,"evenodd")){center=[u,v];break outer}}}
    return {center,cities,area:main.area,nb:new Set()};
  });
  ctx.restore();
  for(const ids of shared.values())for(const i of ids)for(const j of ids)if(i!==j)rows[i].nb.add(j);
  rows.forEach((r,i)=>{if(r.nb.size||rows.length<2)return;let near=-1,d=Infinity;
    rows.forEach((other,j)=>{const gap=Math.hypot(other.center[0]-r.center[0],other.center[1]-r.center[1]);if(i!==j&&gap<d){near=j;d=gap}});
    r.nb.add(near);rows[near].nb.add(i);
  });
  return rows.map(r=>({...r,nb:[...r.nb]}));
}
const SAVE_KEY="europe1936.campaign.v1";
let lastSnapshot=null,canSave=false;
const resetSave=document.createElement("button");
resetSave.type="button";resetSave.textContent="Начать сначала";resetSave.hidden=true;
resumeButton.after(resetSave);
const saveNotice=document.createElement("div");
saveNotice.setAttribute("role","status");
saveNotice.style.cssText="position:fixed;bottom:8px;left:8px;z-index:1000;background:#263434;color:white;padding:8px";
saveNotice.hidden=true;document.body.append(saveNotice);
function notice(text){saveNotice.textContent=text;saveNotice.hidden=!text}
function saveCampaign(){
  if(!canSave||starting||!activeMapYear)return;
  try{
    if(localStorage.getItem(SAVE_KEY)!==lastSnapshot){
      canSave=false;notice("Сохранение изменилось в другой вкладке. Обновите страницу.");return;
    }
    const state={...S,partners:[...S.partners],cityOrders:[...S.cityOrders],cityGarrisons:[...S.cityGarrisons],cityTarget:S.cityTarget?.id??null,log:S.log.filter(Boolean)};
    const snapshot=JSON.stringify({version:1,state,camera:cam,mode,window:W});
    if(snapshot!==lastSnapshot){localStorage.setItem(SAVE_KEY,snapshot);lastSnapshot=snapshot}
    resetSave.hidden=false;notice("");
  }catch{notice("Браузер не смог сохранить партию. Проверьте свободное место и доступ к хранилищу.")}
}
function restoreState(saved){
  const state=saved.state;
  if(state.prov.length!==P.length||!C[state.pl])throw Error("Несовместимая карта");
  state.partners=new Set(state.partners);state.cityGarrisons=new Map(state.cityGarrisons);state.cityOrders=new Map(state.cityOrders);
  state.cityTarget=detailedCities[state.cityTarget]??null;
  for(const [id,order] of state.cityOrders){
    order.city=detailedCities[id];
    if(order.source.city)order.source.city=detailedCities[order.source.city.id];
  }
  S=state;mode=saved.mode||"pol";W=Object.hasOwn(WT,saved.window)?saved.window:null;
  if(saved.camera&&Number.isFinite(saved.camera.k)){cam={...saved.camera};boundCamera()}
  lastCityTick=null;render();
  if(S.pendingEvent!=null)showEvt(EVT[S.pendingEvent],true);
}
resetSave.addEventListener("click",()=>{
  if(starting||!confirm("Удалить сохранённую кампанию и вернуться к выбору страны?"))return;
  try{
    if(localStorage.getItem(SAVE_KEY)!==lastSnapshot){notice("Сохранение изменилось в другой вкладке. Обновите страницу.");return}
    localStorage.removeItem(SAVE_KEY);canSave=false;lastSnapshot=null;location.reload();
  }catch{notice("Не удалось удалить сохранение.")}
});
addEventListener("pagehide",saveCampaign);
document.addEventListener("visibilitychange",()=>{if(document.hidden)saveCampaign()});
async function loadCampaign(){
  let saved;
  try{
    lastSnapshot=localStorage.getItem(SAVE_KEY);
    if(lastSnapshot){
      resetSave.hidden=false;saved=JSON.parse(lastSnapshot);
      if(saved.version!==1||!saved.state)throw Error("Версия сохранения");
      yearInput.value=saved.state.startYear;
    }
    await listCountries();
    if(saved){
      countryList.value=saved.state.pl;
      if(!countryList.value)throw Error("Страна отсутствует");
      await startCampaign(saved);
    }
  }catch{notice("Не удалось восстановить кампанию. Сохранение можно удалить в меню.");await listCountries()}
}

launch.addEventListener("click",()=>{
  if(lastSnapshot&&!confirm("Заменить сохранённую кампанию новой?"))return;
  startCampaign();
});
async function startCampaign(saved){
  if(starting||!menuRows.length||!countryList.value)return;
  const year=yearInput.valueAsNumber,choice=countryList.value,rows=menuRows;
  starting=true;launch.disabled=true;yearInput.disabled=true;countryList.disabled=true;
  statusLine.textContent="Подготовка карты "+formatYear(year)+"…";
  try{
    [leaderCatalogue,polityIds,flagCatalogue,staffCatalogue]=await Promise.all([readMapFile("/history/leaders.json"),readMapFile("/history/polity-ids.json"),readMapFile("/history/flags.json"),readMapFile("/history/staff.json")]);
    if(activeMapYear!==year){
      const modern=await readMapFile("/world-play.json");
      const data=year>=2025?await readMapFile("/world.json"):await Promise.all(rows.map(async r=>[r.name,(await readMapFile("/history/"+r.chunk+".json"))[r.offset]]));
      const shapes=data.map(([name,d],i)=>parseShape(name,d,i));
      const play=year>=2025?modern:historicalPlay(shapes,modern,year,year<1800?await readMapFile("/history/cities.json"):[]);
      const contours=year>=2025?await readMapFile("/history/contours/modern.json"):await Promise.all(rows.map(async r=>(await readMapFile("/history/contours/"+r.chunk+".json"))[r.offset]));
      shapes.forEach((shape,i)=>{shape.displayPath=year>=2025?new Path2D(contours[i]):historicDisplayPath(contours[i])});
      politicalKey="";worldShapes=shapes;worldPlay=play;landOutline=new Path2D();
      for(const shape of shapes)landOutline.addPath(shape.displayPath,new DOMMatrix([14.5,0,0,22,-2465,-418]));
      window.campaignAtlas={year:formatYear(year),data:data.map(([name],i)=>[name,contours[i]])};activeMapYear=year;
    }
    const worldwide=choice.startsWith("W");
    if(!worldwide){
      const ctx=worldLayer.getContext("2d");ctx.setTransform(8,0,0,8,0,0);ctx.clearRect(0,0,360,180);
      for(const shape of worldShapes){ctx.fillStyle=shape.color;ctx.fill(shape.path,"evenodd")}
    }
    if(!worldwide)await legacyCitiesReady;
    configureCampaign(worldwide);if(!worldwide)buildCityDistricts(legacyCityRows);attachPorts(year);await buildCityNetwork(year);fit();init(choice,year);
    const [a,b]=P[cap(choice)].c;cam.k=1.7;cam.tx=innerWidth/2-a*cam.k;cam.ty=innerHeight/2-b*cam.k;boundCamera();
    if(saved)restoreState(saved);else if(innerWidth>=900){S.dipC=null;armyDrawer=true;cam.k=4.5;cam.tx=(innerWidth+Math.min(400,innerWidth*.3))/2-a*cam.k;cam.ty=innerHeight/2-b*cam.k;boundCamera();render()}
    showCampaign(false);canSave=true;redraw();statusLine.textContent=formatYear(year)+" · "+rows.length+" сторон";
  }catch(error){canSave=false;console.error(error);statusLine.textContent="Не удалось открыть карту. Попробуйте начать кампанию ещё раз."}
  finally{starting=false;launch.disabled=false;yearInput.disabled=false;countryList.disabled=false;saveCampaign()}
}

const tacticalColors=["#8eaabf","#b99769","#ad839a","#95a879"];
let armyDrawer=false,planTool="",armySlot=0,groundPattern;
function drawTacticalGround(){
  if(cam.k<3)return;
  if(!groundPattern){
    const tile=document.createElement("canvas");tile.width=tile.height=192;
    const g=tile.getContext("2d");let seed=33;
    const rand=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
    for(let i=0;i<1000;i++){g.fillStyle=i%3?"#263525":"#b6ad86";g.globalAlpha=.1+rand()*.18;g.fillRect(rand()*192,rand()*192,1+rand()*3,1)}
    for(let i=0;i<16;i++){g.save();g.translate(rand()*192,rand()*192);g.rotate(-.4);g.fillStyle=i%2?"#ac9867":"#445338";g.globalAlpha=.14;g.fillRect(0,0,6+rand()*19,4+rand()*8);g.restore()}
    groundPattern=x.createPattern(tile,"repeat");groundPattern.setTransform(new DOMMatrix().scale(.18));
  }
  x.save();x.globalAlpha=.7*cityZoomFade(cam.k,3,8);x.fillStyle=groundPattern;
  x.fillRect(-cam.tx/cam.k,-cam.ty/cam.k,innerWidth/cam.k,innerHeight/cam.k);
  x.beginPath();
  for(const city of citiesInView()){
    if(!worldVisible(...city.point,90))continue;
    for(const id of cityLinks[city.id]||[]){
      if(id<=city.id)continue;
      const [a,b]=city.point,[c,d]=detailedCities[id].point;
      x.moveTo(a,b);x.quadraticCurveTo((a+c)/2+(d-b)*.06,(b+d)/2-(c-a)*.06,c,d);
    }
  }
  x.strokeStyle="#272b27";x.lineWidth=2.5/cam.k;x.stroke();x.strokeStyle="#99927a";x.lineWidth=1/cam.k;x.stroke();
  for(const id of S.frontCities||[]){
    if(!cityRegions[id])continue;
    const city=detailedCities[id];x.save();x.clip(cityLayers[city.province].path,"evenodd");
    x.strokeStyle="#25252c";x.lineWidth=5/cam.k;x.stroke(cityRegions[id]);x.strokeStyle="#e489a7";x.lineWidth=2.5/cam.k;x.stroke(cityRegions[id]);x.restore();
  }
  x.restore();
}
function drawSettlement(city,k){
  const [a,b]=city.point,p=S.prov[city.province];x.save();x.translate(a,b);x.scale(1/k,1/k);x.globalAlpha=cityZoomFade(k,4,8);
  for(let j=0;j<(city.primary?8:4);j++){
    const px=Math.sin(city.id+j*2.4)*10,py=Math.cos(city.id+j*2.4)*6;
    x.fillStyle="#363b37";x.fillRect(px,py,5,4);x.fillStyle="#a59d88";x.beginPath();x.moveTo(px-1,py);x.lineTo(px+2,py-2);x.lineTo(px+6,py);x.closePath();x.fill();
  }
  if(reserveTowns[city.province]===city){
    if(p.fort){x.fillStyle="#343a36";x.fillRect(-19,0,12,6);x.fillStyle="#a19f8b";x.fillRect(-19,0,12,2);x.fillStyle="#101611";x.fillRect(-16,3,5,1)}
    if(p.airfield){x.save();x.translate(20,-2);x.rotate(-.6);x.fillStyle="#414647";x.fillRect(-3,-10,6,20);x.strokeStyle="#ded9bc";x.setLineDash([2,2]);x.beginPath();x.moveTo(0,-9);x.lineTo(0,9);x.stroke();x.restore()}
  }x.restore();
}
function tacticalGroups(){
  const groups=Array.from({length:4},()=>[]);
  for(const i of own(S.pl)){const c=reserveTowns[i];if(c&&S.div[i])groups[i%4].push({city:c,count:S.div[i],source:"p"+i})}
  for(const [id,g] of S.cityGarrisons){const c=detailedCities[id];if(c&&g.owner===S.pl&&g.units)groups[c.province%4].push({city:c,count:g.units,source:"c"+id})}
  return groups;
}
function openArmy(slot){
  armySlot=slot;armyDrawer=true;W=null;S.dipC=null;render();
}
function startMapTool(tool){
  if(tool==="clear"){
    S.armyDraft=null;S.frontCities=[];planTool="";
    for(const [id,order] of [...S.cityOrders]){
      if(order.source.province%4!==armySlot)continue;
      if(order.combat&&order.elapsed>=(order.travel||0)){if(order.operation)order.operation.path=[];continue}
      S.cityOrders.delete(id);returnCityUnits(order.source,order.units);S.eq.a+=order.guns||0;
    }
    render();return;
  }
  const entries=tacticalGroups()[armySlot],entry=entries.find(e=>e.city===S.cityTarget)||entries[0];
  if(!entry){log("Для приказа выберите армию с дивизиями");render();return}
  planTool=planTool===tool?"":tool;
  if(planTool==="route"||planTool==="retreat"){
    S.armyDraft={origin:entry.city.id,path:[entry.city.id],units:entry.count,source:entry.source,commander:armyName(armySlot)};
    cam.k=Math.max(cam.k,7);inspectGarrison(entry.city.id);
  }else render();
}
function applyPlanClick(city){
  if(!planTool)return false;
  if(planTool==="front"){
    if(cityOwner(city)===S.pl){S.frontCities||=[];if(!S.frontCities.includes(city.id))S.frontCities.push(city.id)}
  }else if(planTool==="garrison"){
    if(cityOwner(city)===S.pl){S.cityTarget=city;planTool="";W=null;S.dipC=null}
  }else if(S.armyDraft){
    const d=S.armyDraft,last=d.path.at(-1),owner=cityOwner(city);
    if(cityLinks[last]?.has(city.id)&&!d.path.includes(city.id)&&(owner===S.pl||planTool!=="retreat"&&atWar(S.pl,owner)))d.path.push(city.id);
    else log("Выберите доступный соседний город");
  }else{planTool="";return false}
  render();return true;
}
function nationalStaffChief(){
  const side=C[S.pl],legacy={GER:"de",FRA:"fr",ITA:"it",UK:"gb",FIN:"fi",SWE:"se",NOR:"no",ESP:"es"};
  const iso=modernFlagCodes[side.n]||legacy[S.pl]||({Ukraine:"ua","United States of America":"us","Russian Federation":"ru","Federated Republic of Germany":"de","French Fifth Republic":"fr","Kingdom of Great Britain":"gb","Republic of Italy":"it","Kingdom of Sweden":"se","Republic of Finland":"fi","Kingdom of Norway":"no","Kingdom of Spain":"es",Canada:"ca"})[side.raw];
  const date=String(S.y).padStart(4,"0")+"-"+String(S.m).padStart(2,"0")+"-01";
  const latest=staffCatalogue[iso]?.find(chief=>chief.from<=date);
  return latest&&(!latest.to||date<latest.to)?latest:null;
}
function armyName(slot){return officerNames(C[S.pl].roster||S.pl)?.[slot]||"Штаб · "+(slot+1)+"-я армия"}
function armyPortrait(slot){
  const i=["GER","SOV","FRA","UK","ITA","POL"].indexOf(C[S.pl].roster||S.pl);
  if(i>=0)return '<img src="/officers/'+(i*4+slot)+'.jpg" alt="">';
  return '<span class="staff-bust" aria-label="Штабной офицер"></span>';
}
let miniBase=null,miniShapes=null;
function drawMiniMap(){
  const canvas=$("#mini-map");if(!canvas||!worldShapes.length||!canvas.offsetWidth)return;
  if(miniShapes!==worldShapes){miniShapes=worldShapes;miniBase=document.createElement("canvas");miniBase.width=232;miniBase.height=124;const g=miniBase.getContext("2d");g.fillStyle="#334b55";g.fillRect(0,0,232,124);g.scale(232/360,124/180);for(const shape of worldShapes){g.fillStyle=shape.color||"#787c65";g.fill(shape.displayPath,"evenodd")}}
  const g=canvas.getContext("2d");g.drawImage(miniBase,0,0);g.strokeStyle="#ffe1a4";g.strokeRect((-cam.tx/cam.k+2465)/5220*232,(-cam.ty/cam.k+418)/3960*124,innerWidth/cam.k/5220*232,innerHeight/cam.k/3960*124);
  canvas.onclick=e=>{const r=canvas.getBoundingClientRect();cam.tx=innerWidth/2-((e.clientX-r.left)/r.width*5220-2465)*cam.k;cam.ty=innerHeight/2-((e.clientY-r.top)/r.height*3960-418)*cam.k;boundCamera();redraw()};
}
function renderTacticalHud(){
  const drawer=$("#army-drawer");if(!drawer)return;
  const groups=tacticalGroups(),active=groups.map((g,i)=>g.length?i:-1).filter(i=>i>=0);
  if(!active.includes(armySlot))armySlot=active[0]??0;
  const entries=groups[armySlot],total=g=>g.reduce((n,e)=>n+e.count,0),n=total(entries);
  const portraitButton=i=>'<button class="command-portrait" style="--army:'+tacticalColors[i]+'" onclick="openArmy('+i+')" title="'+armyName(i)+'">'+armyPortrait(i)+'<small>'+armyName(i)+'</small><b>'+total(groups[i])+'/24</b></button>';
  if(active.length)$("#gens").innerHTML=active.map(portraitButton).join("");
  const tools=[["front","target","Линия фронта"],["route","rifle","Наступление"],["garrison","people","Гарнизон"],["retreat","dip","Отход"],["clear","build","Очистить план"]];
  $("#bb").innerHTML=tools.map(([id,icon,name])=>'<button class="'+(id===planTool?"on":"")+'" title="'+name+'" onclick="startMapTool(\''+id+'\')">'+uiIcon(icon)+'<small>'+name+'</small></button>').join("");
  const orders=[...S.cityOrders.values()];
  theaterButton.innerHTML='<b>'+escapeCityName(C[S.pl].n)+' · театр</b><small>'+active.length+' арм. · '+groups.reduce((v,g)=>v+total(g),0)+' див. · боёв '+orders.filter(o=>o.combat).length+'</small>';
  $("#front-list").innerHTML=active.map(i=>'<button style="--army:'+tacticalColors[i]+'" onclick="openArmy('+i+')"><span>'+(i+1)+'-я армия</span><b>'+total(groups[i])+' див.</b></button>').join("");
  theaterButton.onclick=()=>{armyDrawer=!armyDrawer;S.dipC=null;W=null;render()};
  drawer.hidden=!armyDrawer||!!W||!!S.dipC;
  if(!drawer.hidden){
    const exp=entries.reduce((v,e)=>Math.max(v,S.prov[e.city.province].experience||0),0);
    const chief=nationalStaffChief();
    const staffHeader=chief?'<div class="commander national-chief">'+(chief.photo?'<img src="'+chief.photo+'" alt="'+escapeCityName(chief.name)+'" onerror="this.hidden=true">':'')+'<div><small>Высшее военное командование</small><b>'+escapeCityName(chief.name)+'</b><small>На '+String(S.m).padStart(2,"0")+'.'+S.y+'</small></div></div>':'';
    const unit=S.tpl.t?"Танковая":S.tpl.a?"Артиллерийская":"Пехотная";
    drawer.innerHTML='<header><strong>'+ (armySlot+1)+'-я армия</strong><button onclick="armyDrawer=false;render()" aria-label="Закрыть">×</button></header>'+staffHeader+'<div class="commander">'+armyPortrait(armySlot)+'<div><b>'+armyName(armySlot)+'</b><small>Уровень '+(1+Math.floor(exp/5))+' · опыт '+exp+'</small><small>Дивизии '+n+'/24</small></div></div><nav>'+[["route","Атака"],["front","Оборона"]].map(([t,l])=>'<button onclick="startMapTool(\''+t+'\')">'+l+'</button>').join("")+'<select aria-label="Режим армии" onchange="S.stances||={};S.stances[armySlot]=this.value;render()">'+[["balanced","Обычный"],["bold","Решительный"],["guard","Осторожный"]].map(([v,l])=>'<option value="'+v+'" '+(v===(S.stances?.[armySlot]||"balanced")?"selected":"")+'>'+l+'</option>').join("")+'</select></nav>';
    const list=document.createElement("div");list.className="division-list";let num=0;
    for(const e of entries){const i=e.city.province;for(let j=0;j<e.count;j++){
      const b=document.createElement("button");b.innerHTML=uiIcon(S.tpl.t?"steel":"rifle")+'<span><b>'+ (++num)+'-я '+unit.toLowerCase()+' дивизия</b><small>'+escapeCityName(e.city.name)+' · опыт '+(S.prov[i].experience||0)+'</small></span><i style="--org:'+S.org[i]+'%;--hp:'+(S.prov[i].readiness??100)+'%"></i>';b.onclick=()=>inspectGarrison(e.city.id);list.append(b)
    }}drawer.append(list);
  }
  if(!S.armyDraft&&(planTool==="route"||planTool==="retreat"))planTool="";
  if($("#plan-hint"))$("#plan-hint").textContent=({front:"Отметьте свои районы на карте",route:"Укажите маршрут по соседним городам",retreat:"Укажите путь отхода по своим городам",garrison:"Выберите свой город для размещения"})[planTool]||"";
}

fit();
init("GER");
loadCampaign();
addEventListener("resize", fit);




