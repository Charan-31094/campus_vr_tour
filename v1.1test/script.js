
var panorama, viewer, container, ch, v,i;
var containerBaseWidth = 700;
var containerBaseHeight = 400;
var deltaSize = 100;
container = document.querySelector('#container');
async function s(idk) {
    let users = await r(0);
    const found = users.find(id => id.id == idk);
    if (found) {
        v = found.path;
        var a = found.n_path;
        panorama = new PANOLENS.ImagePanorama(`../files/images/${v}`);
        console.log(panorama)
        viewer = new PANOLENS.Viewer({ container: container });
        viewer.add(panorama)
        console.log(found.n_path)
        function onButtonClick(inn) {
            g(inn,0)

        }
        for (i = 0; i < a.length; i++) {
            console.log(a[i].x, a[i].y, a[i].z)
            k=`../files/images/${p_word}`
            ch = new PANOLENS.Infospot(350,k );
            ch.position.set(a[i].x, a[i].y, a[i].z);
            ch.addHoverText(`${a[i].name}`, 30);
            panorama.add(ch);
            console.log(a[i])
            ch.addEventListener('click', onButtonClick.bind(this, a[i].name));
        }
        
    }
    console.log(found)

}
k = "C01"
s(k)

async function g(idk,a) {
    if(a==1){
    window.location.hash = '';

    window.location.hash = '#div3';}
    document.getElementById("overlay").style.display = "block";

    
    let users = await r(0);
    const found = users.find(id => id.id == idk);
    if (found) {
        v = found.path;
        var a = found.n_path;
        panorama = new PANOLENS.ImagePanorama(`../files/images/${v}`);
        viewer.add(panorama)
        var i
        function onButtonClick(inn) { g(inn,0) }
        for (let i = 0; i < a.length; i++) {
            ch = new PANOLENS.Infospot(350, "../files/images/up-arrow.png");
            ch.position.set(a[i].x, a[i].y, a[i].z);
            ch.addHoverText(`${a[i].name}`, 30);
            panorama.add(ch);
            console.log(a[i])
            ch.addEventListener('click', onButtonClick.bind(this, a[i].name));
        }
        
    }
    viewer.setPanorama(panorama);

    document.getElementById("overlay").style.display = "none";

    console.log(found)

}

