// Three JS Implementation
const scene = new THREE.Scene();

// Camera Properties
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 1, 2);

//Lights

// 3D Object
let geometry = new THREE.CylinderGeometry(1, 1, 1, 3);
let material = new THREE.MeshBasicMaterial({
  color: 0x102a43,
  transparent: false,
  blending: THREE.AdditiveBlending,
});
let cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

//grid
var gridHelper = new THREE.GridHelper(10, 20);
scene.add(gridHelper);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

let animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
