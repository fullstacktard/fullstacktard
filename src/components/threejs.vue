<template>
  <div ref="threeContainer" class="w-full h-full">
    <!-- Three.js will render here -->
  </div>
</template>

<script>
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

export default {
  props: {
    fileName: {
      type: String,
    },
  },
  mounted() {
    this.initThree();
    window.addEventListener("resize", this.onWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize);
  },
  methods: {
    initThree() {
      // Setup scene
      this.scene = new THREE.Scene();

      // Get container dimensions
      const container = this.$refs.threeContainer;
      const width = container.clientWidth;
      const height = container.clientHeight;

      // Setup camera
      this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);

      // Setup renderer
      this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      this.renderer.setSize(width, height);
      container.appendChild(this.renderer.domElement);

      this.renderer.shadowMap.enabled = true; // Enable shadow maps

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      this.scene.add(ambientLight);

      // Add directional light
      const dirLight = new THREE.DirectionalLight(0xffffff, 3);
      dirLight.position.set(0, 5, 5);
      this.scene.add(dirLight);

      // Load FBX model
      const loader = new FBXLoader();
      loader.load("Situps.fbx", (fbx) => {
        this.model = fbx;

        // Adjust the scale of the model if it's too big.
        this.model.scale.set(0.1, 0.1, 0.1); // Changed from 0.01 to 0.1 (10x larger)

        this.mixer = new THREE.AnimationMixer(this.model);

        const action = this.mixer.clipAction(fbx.animations[0]);
        action.play();

        // Position the model to the left (negative x value) and halfway down the page.
        if (window.innerWidth <= 768) {
          // Assuming 768px as a breakpoint for mobiles
          this.camera.position.z = 10; // Adjusted value for mobile
          this.model.position.set(0, 0, 0); // Adjusted values for mobile
        } else {
          this.camera.position.z = 50;
          this.model.rotation.y = 0.3;
          this.model.position.set(-5, -15, 0);
        }

        this.scene.add(this.model);
      });

      // Also, try adjusting the camera's position if the model still appears too large.
      this.animate();
    },
    onWindowResize() {
      const container = this.$refs.threeContainer;
      const width = container.clientWidth;
      const height = container.clientHeight;

      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    },
    animate() {
      requestAnimationFrame(this.animate);

      // If the mixer has been initialized, update it.
      if (this.mixer) {
        const delta = 0.012; // Assuming 60 fps for now. You could refine this with a proper clock.
        this.mixer.update(delta);
      }

      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>

<style>
canvas {
  pointer-events: none;
}
</style>
