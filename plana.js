//Cria a terra plana no eixo de câmera z

function Sun(radius,textura){

	//Cria uma lista de planetas
	this.planetas = [];
	this.resolution=20;
	//Cria no formato de ciclo a terra
	this.geometry=new THREE.CircleGeometry(radius,this.resolution,this.resolution);
	this.material=new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture(textura)});
	
	this.mesh= new THREE.Mesh(this.geometry,this.material);
	this.mesh.position.x = 0;
	this.mesh.position.y = 0;
	this.mesh.position.z = 0;
	this.mesh.name = "plana";


	this.draw=function(scene){
		scene.add(this.mesh);
	};

	this.addPlaneta=function(planeta){
		this.planetas.push(planeta);
		planeta.draw(this.mesh);

	};
};
