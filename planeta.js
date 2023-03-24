//Cria o planeta, no caso a terra
function Planeta(radius,textura,distancia){

	//Cria uma lista de satelites que obitam ao redor dos planetas
	this.satelites = [];
//Resolução
	this.resolution=40;
	this.geometry=new THREE.SphereGeometry(radius,this.resolution,this.resolution);
	this.material=new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture(textura) });
	this.mesh= new THREE.Mesh(this.geometry,this.material);
	this.mesh.position.x = -8;
	this.mesh.position.y = 0;
	this.mesh.position.z = 0;
	this.mesh.name = "Planeta";

//Cria as animações de rotação e translação
	
	this.transformacion=new THREE.Object3D();
	this.transformacion.add(this.mesh);
	
	this.animar=function(step,stepluna){
		this.mesh.rotation.z=step;
		this.transformacion.rotation.z=step;
		for(i=0;i<this.satelites.length;i++){
		this.satelites[i].animar(stepluna);
		}
	};

	//Renderiza a cena
	this.draw=function(scene){
		scene.add(this.transformacion);
	};

	this.addSatelite=function(satelite){
		this.satelites.push(satelite);
		satelite.draw(this.mesh);
	};



};
