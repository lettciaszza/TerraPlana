var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var terra;
var transformacionTerra;
var step=0;
var steplua=0;
var mvlua=true;
var sol;

main();

function renderScene() {

	step+=0.01;
	if(mvlua) steplua+=0.000;
	else steplua-=0.00;
	terra.animar(step,steplua);
	requestAnimationFrame(renderScene);
	renderer.render(scene, camera);
}
function switchLua(){
	mvlua=!mvlua;
}
function main() {

	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMapEnabled = true; //no shadow casting
	renderer.setSize(window.innerWidth, window.innerHeight);

//Adiciona o sol
	sol = new Sun(20,'img/plana.jpg');
	sol.draw(scene);


//Adiciona o planeta
	terra= new Planeta(3,'img/earth.jpg',1);
	sol.addPlaneta(terra);

//Adiciona a lua 
	lua= new Satelite(2,'img/moon.gif',6);
	terra.addSatelite(lua);

//Pontos de luz
var pointLight = new THREE.PointLight( 0xffffff );
scene.add( pointLight );

// Posição da camera principal
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 30;
camera.lookAt(scene.position);


$("#canvas").append(renderer.domElement);

renderScene();
}
