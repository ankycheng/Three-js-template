/* eslint-disable no-undef, no-unused-vars */

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Create renderer.
const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create scene.
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x292f33);

// Create camera.
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);
camera.position.z = -3;
camera.lookAt(0, 0, 0);
scene.add(camera);

let control = new OrbitControls(camera, renderer.domElement);



//--
// Your code here!
//--
const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const boxMat = new THREE.MeshBasicMaterial({ color: 0xd4605a });
const boxMesh = new THREE.Mesh(boxGeo, boxMat);
scene.add(boxMesh);

// Animation loop.
const tick = () => {
  control.update();
  boxMesh.rotation.x += 0.01;
  boxMesh.rotation.y += 0.02;

  renderer.render(scene, camera);

  requestAnimationFrame(tick);
};
tick();

// Window resize listener.
window.addEventListener("resize", () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
});
