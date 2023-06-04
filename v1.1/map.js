let details = navigator.userAgent;
      let regexp = /android|iphone|kindle|ipad/i;
      let isMobileDevice = regexp.test(details);
      if (isMobileDevice) {
         alert("Use Desktop For a Better Experiance");
      }
     


setTimeout(function(){window.location.hash = '#second';},2000);

map=document.getElementById("mapimg")
document.getElementById("h").innerHTML=`${map.height},${map.width}`
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('white-theme');
});

async function r(i) {
    let url = '../data/data_c.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

 




function ab()
{
    document.getElementById("mapimg").innerHTML=`<map name="image-map">
    <area href="##" alt="lib" title="lib" onClick="cha('L01')" coords="${l(590)},${b(503)},${l(463)},${b(635)}" shape="rect">
    <area href="##" alt="Boys Hostel" title="Boys Hostel" onClick="cha('bh')" coords="${l(1072)},${b(670)},${l(1309)},${b(804)})}" shape="rect">
    <area href="##" alt="C-Block" title="C-Block" onClick="cha('C01')" coords="${l(388)},${b(859)},${l(617)},${b(998)})}" shape="rect">
    <area href="##" alt="F-Block" title="F-Block" onClick="cha('F01')" coords="${l(475)},${b(839)},${l(329)},${b(668)}" shape="rect">
    <area href="##" alt="R&amp;D" title="R&amp;D" onClick="cha('R01')" coords="${l(833)},${b(929)},${l(911)},${b(924)},${l(902)},${b(882)},${l(897)},${b(836)},${l(940)},${b(832)},${l(960)},${b(804)},${l(970)},${b(771)},${l(980)},${b(738)},${l(980)},${b(697)},${l(811)},${b(710)}" shape="poly">
    <area href="##" alt="M-Block" title="M-Block" onClick="cha('MO1')" coords="${l(622)},${b(803)},${l(638)},${b(891)},${l(692)},${b(940)},${l(743)},${b(942)},${l(814)},${b(932)},${l(818)},${b(910)},${l(700)},${b(908)},${l(675)},${b(805)}" shape="poly">
    <area href="##" alt="Open Air Theatre" title="Open Air Theatre" onClick="cha('O01')" coords="${l(716)},${b(731)},${l(802)},${b(856)}" shape="rect">
    <area href="##" alt="C Boys Hostel" title="C Boys Hostel" onClick="cha('nbh')" coords="${l(1761)},${b(607)},${l(1917)},${b(932)}" shape="rect">
    <area href="##" alt="G Hostel 1" title="G Hostel 1" onClick="cha('gh1')" coords="${l(146)},${b(427)},${l(312)},${b(248)}" shape="rect">
    <area href="##" alt="G Hostel 2" title="G Hostel 2" onClick="cha('gh2')" coords="${l(27)},${b(140)},${l(183)},${b(26)}" shape="rect">
    <area href="##" alt="S-Block" title="S-Block" onClick="cha('S01')" coords="${l(156)},${b(190)},${l(178)},${b(233)},${l(387)},${b(214)},${l(410)},${b(175)},${l(373)},${b(131)},${l(168)},${b(158)}" shape="poly">
    <area href="##" alt="bbbb" title="bbbb" onClick="cha('bbb')" coords="${l(641)},${b(678)},${l(753)},${b(674)},${l(750)},${b(610)},${l(712)},${b(610)},${l(704)},${b(549)},${l(746)},${b(539)},${l(743)},${b(515)},${l(631)},${b(528)}" shape="poly">
    <area href="##" alt="Indoor " title="Indoor " onClick="cha('I01')" coords="${l(611)},${b(413)},${l(719)},${b(309)}" shape="rect">
    <area href="##" alt="Ground" title="Ground" onClick="cha('G01')" coords="${l(1013)},${b(109)},${l(924)},${b(199)},${l(926)},${b(319)},${l(929)},${b(460)},${l(1018)},${b(504)},${l(1099)},${b(474)},${l(1136)},${b(345)},${l(1131)},${b(190)},${l(1086)},${b(131)},${l(1052)},${b(111)}" shape="poly">
    
    </map>`
}

ab()



function l(a)
{
    const x=1920,y=1080;
    var l=map.width/x
    return a*l

}
function b(a)
{
    const x=1920,y=1080;
    var l=map.height/y
    return a*l

}

function cha(a)
{
    if(a=='gh1' || a=='gh2' || a=='bh' || a=='nbh')
    {
        g('bh',1)
    }
    g(a,1)
    console.log("hi")
}

