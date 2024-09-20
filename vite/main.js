import { render } from 'next/dist/server/render';
import * as THREE from 'three';

const canvas = document.getElementById('canvas');

const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z =5;

const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'});
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry= new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshLambertMaterial({color:'#B4B4B3', emissive: '#B4B4B3'});
const box = new THREE.Mesh(boxGeometry, material);

scene.add(dodecahedron);
scene.add(box);

const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1,1,1);
scene.add(light);

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

function animate() {
  requestAnimationFrame(animate);
  // Add any object transformations here, e.g., rotation
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}
animate();
