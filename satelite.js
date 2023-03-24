function Satelite(radius,textura,distancia){
	this.resolution=25;
	this.geometry=new THREE.SphereGeometry(radius,this.resolution,this.resolution);
	this.material=new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture(textura) });
	this.mesh= new THREE.Mesh(this.geometry,this.material);
	this.mesh.position.x = 10;
	this.mesh.position.y = 0;
	this.mesh.position.z = 0;
	this.mesh.name = "Satelite";

	//Faz a animação da lua
	this.transformacion=new THREE.Object3D();
	this.transformacion.add(this.mesh);

	this.animar=function(steplua){
		 this.transformacion.rotation.z=steplua;
	};

	this.draw=function(scene){
		scene.add(this.transformacion);
	};

};
