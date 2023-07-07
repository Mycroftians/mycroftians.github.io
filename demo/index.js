import * as THREE from "three";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const loader = new GLTFLoader();



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0,3,-3)

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, (window.innerHeight * 0.95));
document.body.appendChild( renderer.domElement );
renderer.setClearColor(0x19497C)
const AmbientLight = new THREE.AmbientLight(0Xffffff)
AmbientLight.intensity = 0.4
scene.add(AmbientLight)
const gridhelper = new THREE.GridHelper(10, 10)
scene.add(gridhelper)
const controls = new OrbitControls(camera, renderer.domElement);

// var stats = new Stats();
// stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
// document.body.appendChild( stats.dom );

loader.load('/demo/burger_low_poly.glb', function ( gltf ) {
	
    			// stats.begin();
				scene.add( gltf.scene );
				function animate() {
					requestAnimationFrame( animate );
					gltf.scene.rotation.x = -0.5;
					gltf.scene.scale.set(1.5,1.5,1.5)
					gltf.scene.rotation.y += 0.07;
					controls.update()
					renderer.render( scene, camera );
				}
				animate()
				
				// stats.end();
				// requestAnimationFrame( animate );
			})

			
camera.position.z = 5;

// Resize
function resizeCanvas() {
	renderer.setSize(window.innerWidth, window.innerHeight * 0.95);
	camera.aspect = window.innerWidth / (window.innerHeight * 0.95);
	camera.updateProjectionMatrix();
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
