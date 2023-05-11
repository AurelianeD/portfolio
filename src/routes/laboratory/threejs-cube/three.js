import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let renderer;
let controls;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	typeof window !== 'undefined' ? window.innerWidth / window.innerHeight : 0,
	1,
	1000
);
camera.position.z = 5;

const directionalLight = new THREE.DirectionalLight(0x9090aa);
directionalLight.position.set(-10, 10, -10).normalize();
scene.add(directionalLight);

const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemisphereLight.position.set(1, 1, 1);
scene.add(hemisphereLight);

function addCube(x, y, z) {
	const cube = new THREE.Mesh(geometry, material);
	cube.position.set(x, y, z);
	scene.add(cube);
}
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const intersectionPoint = new THREE.Vector3();
const planeNormal = new THREE.Vector3();
const plane = new THREE.Plane();

function onMouseMove(event) {
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	planeNormal.copy(camera.position).normalize();
	plane.setFromNormalAndCoplanarPoint(planeNormal, scene.position);
	raycaster.setFromCamera(mouse, camera);
	raycaster.ray.intersectPlane(plane, intersectionPoint);
}

function onClick(event) {
	addCube(intersectionPoint.x, intersectionPoint.y, intersectionPoint.z);
}

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({
	color: 0xffffff
});

const animate = () => {
	requestAnimationFrame(animate);
	controls.update();

	raycaster.setFromCamera(mouse, camera);
	const intersects = raycaster.intersectObjects(scene.children);
	if (intersects.length > 0) {
		intersects[0].object.rotation.x += 0.05;
		intersects[0].object.materials.color = 0xff0000;
	}

	renderer.render(scene, camera);
};

const resize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
};

export const createScene = (el) => {
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
	controls = new OrbitControls(
		camera,
		typeof renderer !== 'undefined' ? renderer.domElement : null
	);
	resize();
	animate();
};

export function alignCube() {
	const cubes = scene.children.filter((child) => child.type === 'Mesh');
	cubes.forEach((cube) => {
		cube.position.y = 0;
		cube.position.z = 0;
		cube.rotation.x = 0;
		cube.rotation.y = 0;
		cube.rotation.z = 0;
	});
}

export function clearCubes() {
	const cubes = scene.children.filter((child) => child.type === 'Mesh');
	cubes.forEach((cube) => {
		scene.remove(cube);
	});
}

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('click', onClick);
