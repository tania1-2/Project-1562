AFRAME.registerComponent(
    "bullet",{
        init:function(){
            this.shootBullet()
        },
        shootBullet:function(){
            window.addEventListener("keydown",(e)=>{
                if(e.key==="a"){
                    console.log("shoot")
                    var shot = document.createElement("a-entity")
                    shot.setAttribute("geometry",{
                        primitive:"sphere", radius: 0.1 })
                    shot.setAttribute("material","color","red")  
                    var plane = document.querySelector("#plane_model")
                    pos = plane.getAttribute("position",{
                        x:pos.x, y:pos.y + 1, x:pos.z - 0.2
                    })
                    var camera = document.querySelector("#camera").object3D;
                    var direction = new THREE.Vector3();
                    camera.getWorldDirection(direction);
                    var camera = document.querySelector("#camera").object3D;
                    shoot.setAttribute("velocity", direction.multiplyScalar-50)


                    var seen = document.querySelector("#terrain")
                    shoot.setAttribute("dynamic-body",{
                        shape:"sphere",
                        mass:"50"

                    })
                    seen.appendChild(shoot)
                }

            })
        },
    }
)