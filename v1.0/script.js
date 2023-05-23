var panorama, viewer, container, infospot=[],v;
        var containerBaseWidth = 700;
        var containerBaseHeight = 400;
        var deltaSize = 100;
        container = document.querySelector('#container');
        

            async function s(idk) {
                let users = await r(0);
                const found = users.find(id => id.id == idk);
                if (found) {
                    v=found.path;
                    var a=found.n_path;
                    panorama = new PANOLENS.ImagePanorama(`../images/${v}`);
                    console.log(panorama)
                    viewer = new PANOLENS.Viewer({ container: container });
                    viewer.add(panorama)
                    console.log(found.n_path)
                    var i
                    function onButtonClick(inn) {
                        g(inn)
            
        }
                    for (let i = 1; i < a.length; i++) {
                        infospot[i] = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
                        infospot[i].position.set(a[i].x, a[i].y, a[i].z);
                        infospot[i].addHoverText(`${a[i].name}`, 30);
                        panorama.add(infospot[i]);
                        console.log(a[i])
                        infospot[i].addEventListener('click', onButtonClick.bind(this, a[i].name));
                    }
                }
                console.log(found)

            }
            k = "C01"
            s(k)
            
            async function g(idk){
            let users = await r(0);
                const found = users.find(id => id.id == idk);
                if (found) {
                    v=found.path;
                    var a=found.n_path;
                    panorama = new PANOLENS.ImagePanorama(`../images/${v}`);
                    viewer.add(panorama)
                    var i
                    function onButtonClick(inn) { g(inn)  }
                    for (let i = 1; i < a.length; i++) {
                        infospot[i] = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
                        infospot[i].position.set(a[i].x, a[i].y, a[i].z);
                        infospot[i].addHoverText(`${a[i].name}`, 30);
                        panorama.add(infospot[i]);
                        console.log(a[i])
                        infospot[i].addEventListener('click', onButtonClick.bind(this, a[i].name));
                    }
                }
                viewer.setPanorama( panorama );
                console.log(found)

            }
      