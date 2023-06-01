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
            ch = new PANOLENS.Infospot(350, "../files/images/up-arrow.png");
            ch.position.set(a[i].x, a[i].y, a[i].z);
            ch.addHoverText(`${a[i].name}`, 30);
            panorama.add(ch);
            console.log(a[i])
            ch.addEventListener('click', onButtonClick.bind(this, a[i].name));
        }
        ch = new PANOLENS.Infospot(350, "../files/images/up-arrow.png");
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
const db = new polybase.Polybase({
    defaultNamespace: "pk/0x26b7b24287218ea9427e03112e34fb29e6603d1421903bedf5b825296f2d4f32831d76d700f243fbb768d935937675735ca28568f8604b10a33ac636a81fd9d2/vr2",
  })
  const col = db.collection("ImageData");
async function g(idk,a) {
    if(a==1){
    window.location.hash = '';

    window.location.hash = '#div3';}

    var f = await col.record(idk).get();
    if (f.data) {
        var found=f.data;
        v = found.path;
        var n_x = found.n_x;
        var n_y = found.n_y;
        var n_z = found.n_z;
        var n_name = found.n_name;
        panorama = new PANOLENS.ImagePanorama(`../files/images/${v}`);
        viewer.add(panorama)
        function onButtonClick(inn) { 
            console.log(inn)
            gs(inn,0) }
        for (let i = 0; i < n_x.length; i++) {
            ch = new PANOLENS.Infospot(350, "../files/images/up-arrow.png");
            ch.position.set(n_x.pop(), n_y.pop(), n_z.pop());
            var g=n_name.pop()
            ch.addHoverText(`${g}`, 30);
            panorama.add(ch);
            ch.addEventListener('click', onButtonClick.bind(this, g));
        }
        
    }
    viewer.setPanorama(panorama);
    

}

function gs(a,b)
{
    g(a,b)
}
