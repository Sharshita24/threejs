import * as THREE from 'three';

//1. Create a scene 
const scene = new THREE.Scene();
scene.background = new THREE.Color ('#000000');

// 2. Create a camera

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. create and add a cube object

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4. Add lightning
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);

// 5. Create a renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
console.log(renderer.domElement); // Check if the canvas is being created
document.body.appendChild(renderer.domElement);


// 6. Animate the scene
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
