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
        panorama = new PANOLENS.ImagePanorama(`../images/${v}`);
        console.log(panorama)
        viewer = new PANOLENS.Viewer({ container: container });
        viewer.add(panorama)
        console.log(found.n_path)
        function onButtonClick(inn) {
            g(inn)

        }
        for (i = 0; i < a.length; i++) {
            console.log(a[i].x, a[i].y, a[i].z)
            ch = new PANOLENS.Infospot(350, "../images/up-arrow.png");
            ch.position.set(a[i].x, a[i].y, a[i].z);
            ch.addHoverText(`${a[i].name}`, 30);
            panorama.add(ch);
            console.log(a[i])
            ch.addEventListener('click', onButtonClick.bind(this, a[i].name));
        }
        ch = new PANOLENS.Infospot(350, "https://cdn-icons-png.flaticon.com/512/10502/10502612.png");
        ch.position.set(a[1].x, a[1].y, a[1].z);
        ch.addHoverText(`${a[1].name}`, 30);
        panorama.add(ch);
        console.log(a[1])
        ch.addEventListener('click', onButtonClick.bind(this, a[1].name));
    }
    console.log(found)

}
k = "C01"
s(k)

async function g(idk) {
    let users = await r(0);
    const found = users.find(id => id.id == idk);
    if (found) {
        v = found.path;
        var a = found.n_path;
        panorama = new PANOLENS.ImagePanorama(`../images/${v}`);
        viewer.add(panorama)
        var i
        function onButtonClick(inn) { g(inn) }
        for (let i = 0; i < a.length; i++) {
            ch = new PANOLENS.Infospot(350, "https://cdn-icons-png.flaticon.com/512/10502/10502612.png");
            ch.position.set(a[i].x, a[i].y, a[i].z);
            ch.addHoverText(`${a[i].name}`, 30);
            panorama.add(ch);
            console.log(a[i])
            ch.addEventListener('click', onButtonClick.bind(this, a[i].name));
        }
        ch = new PANOLENS.Infospot(350, "https://cdn-icons-png.flaticon.com/512/10502/10502612.png");
        ch.position.set(a[1].x, a[1].y, a[1].z);
        ch.addHoverText(`${a[1].name}`, 30);
        panorama.add(ch);
        console.log(a[1])
        ch.addEventListener('click', onButtonClick.bind(this, a[1].name));
    }
    viewer.setPanorama(panorama);
    console.log(found)

}

