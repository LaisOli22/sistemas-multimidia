import * as THREE from "three";
import "./public/style.css";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

//Texturas
const textureLoader = new THREE.TextureLoader();
const normalMapTexture = textureLoader.load('./assets/donut/textures/Bake_metallicRoughness.png');
const baseColorTexture = textureLoader.load('./assets/donut/textures/Bake_baseColor.png');

const normalMapTextureChocolate = textureLoader.load('./assets/chocolate_donut/textures/Material.001_metallicRoughness.png');
const baseColorTextureChocolate = textureLoader.load('./assets/chocolate_donut/textures/Material.001_baseColor.png');
const TextureChocolate = textureLoader.load('./assets/chocolate_donut/textures/Material_specularf0.png');

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

//Donut
let donut = null;
let chocolateDonut = null;
let donutsLoaded = false;

const gltfLoader = new GLTFLoader();
gltfLoader.load("./assets/donut/scene.gltf", (gltf) => {
  donut = gltf.scene;

  donut.traverse((node) => {
    if (node.isMesh) {
      node.material.normalMap = baseColorTexture;
      node.material.normalMap = normalMapTexture;
      node.material.needsUpdate = true; 
    }
  const radius = 6;
  donut.scale.set(radius, radius, radius); 
  scene.add(donut);

  if (donutsLoaded) {
    createDonuts(2);
  } else {
    donutsLoaded = true;
  }
});
});

//Donut de chocolate
gltfLoader.load("./assets/chocolate_donut/scene.gltf", (gltf) => {
  chocolateDonut = gltf.scene;

  chocolateDonut.traverse((node) => {
    if (node.isMesh) {
      node.material.normalMap = baseColorTextureChocolate;
      node.material.normalMap = normalMapTextureChocolate;
      node.material.normalMap = TextureChocolate;
      node.material.needsUpdate = true; 
    }
  const radius = 20;
  chocolateDonut.scale.set(radius, radius, radius); 
  scene.add(chocolateDonut);
});
});

// Função para clonar donuts e espalhá-los pela tela
function createDonuts(count) {
  for (let i = 0; i < count; i++) {
    const isChocolate = Math.random() > 0.5;
    const donutClone = isChocolate ? chocolateDonut.clone() : donut.clone();

    // Posição aleatória
    const x = (Math.random() - 0.5) * 30;
    const y = (Math.random() - 0.5) * 30;
    const z = (Math.random() - 0.5) * 30;
    donutClone.position.set(x, y, z);

    // Rotação aleatória
    donutClone.rotation.x = Math.random() * Math.PI;
    donutClone.rotation.y = Math.random() * Math.PI;
    donutClone.rotation.z = Math.random() * Math.PI;

    scene.add(donutClone);
  }
}

//Luz
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); 
directionalLight.position.set(5, 10, 15); 
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

//câmera
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 30;
scene.add(camera);

//Renderizar
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 2;

const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();

const tl = gsap.timeline({ defaults: { duration: 1 } });
tl.fromTo("nav", { y: "-100%" }, { y: "0%" });
tl.fromTo(".description", { opacity: 0 }, { opacity: 1 },"-=1");
tl.fromTo(".comment", { opacity: 0 }, { opacity: 1 }, "-=1");

