<template>
  <a-scene embedded id="scene" background="color: rgb(255, 231, 66);" vr-mode-ui="enabled: false;" renderer="colorManagement: true;" keyboard-shortcuts screenshot device-orientation-permission-ui>
    <a-entity id="rig" position="25 10 0">
      <a-entity id="camera" camera look-controls wasd-controls></a-entity>
    </a-entity>
    <a-assets>
      <a-asset-item id="frontendObj" src="../src/assets/obj/frontend developer.obj"></a-asset-item>
      <a-asset-item id="sharevalueObj" src="../src/assets/obj/sv3.obj"></a-asset-item>
      <a-asset-item id="reactRocketObj" src="../src/assets/obj/react-rocket.obj"></a-asset-item>
      <a-asset-item id="rocketObj" src="../src/assets/obj/10475_Rocket_Ship_v1_L3.obj"></a-asset-item>
      <img id="react-img" src="../assets/img/react-img.png">
    </a-assets>
    <a-entity id="front-end" :position="frontEnd.x + ' ' + frontEnd.y + ' ' + frontEnd.z" rotation="90 0 0" material="color: #000000;" obj-model="obj: #frontendObj;"></a-entity>
    <a-entity id="sharevalue" :position="sharevalue.x + ' ' + sharevalue.y + ' ' + sharevalue.z" rotation="90 0 0" material="color: #000000;" obj-model="obj: #sharevalueObj;"></a-entity>
    <a-entity id="react-rocket" :position="reactRocket.x + ' ' + reactRocket.y + ' ' + reactRocket.z" rotation="90 0 0" material="color: #fff;" obj-model="obj: #reactRocketObj;"></a-entity>
    <a-entity id="rocket" scale="0.002 0.002 0.002" :position="rocket.x + ' ' + rocket.y + ' ' + rocket.z" material="color: #f00;" rotation="-45 90 -90" obj-model="obj: #rocketObj;"></a-entity>
    <a-image id="react" :position="react.x + ' ' + react.y + ' ' + react.z" rotation="0 0 0" src="#react-img"></a-image>
  </a-scene>
</template>

<script lang="ts">
export default {
  data() {
    return {
      scrollPage: false,
      frontEnd: {
        x: 20.5,
        y: 10.7,
        z: -4.6,
      },
      sharevalue: {
        x: 21.7,
        y: 7.2,
        z: -4 ,
      },
      reactRocket: {
        x: 19.75,
        y: 20,
        z: -4.6,
      },
      react: {
        x: 24.95,
        y: 19.5,
        z: -2,
      },
      rocket: {
        x: 10,
        y: -5,
        z: -3,
      }
    }
  },
  emits: ['animationDone'],
  methods: {},
  mounted() {
    let colorR = 255;
    let colorG = 231;
    let colorB = 66;
    let reactR = 97;
    let reactG = 218;
    let reactB = 251;
    let reactPassed = false;
    document.addEventListener('wheel', (e) => {
      if(e.type != 'wheel')
      {
        return;
      }

      if (!this.scrollPage) {
        let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
        delta = delta * (-300);
        
        this.frontEnd.y -= 0.05;
        this.sharevalue.y -= 0.05;
  
        this.rocket.y += 0.05;
        this.rocket.x += 0.05;
  
        if (this.reactRocket.y > 10.7) {
          this.reactRocket.y -= 0.05;
        }
        if (this.react.y > 9.5) {
          this.react.y -= 0.05;
        }
        // If rocket passed, continue to rest of the page
        if (this.rocket.y > 16) {
          this.$emit('animationDone');
        }
        if (!reactPassed) {
          if (colorR !== reactR) {
            colorR -= 1;
          }
          if (colorG !== reactG) {
            colorG -= 1;
          }
          if (colorB !== reactB) {
            colorB += 1;
          }
          if (colorR === reactR
            && colorG === reactG
            && colorB === reactB) {
              reactPassed = true;
            }
            document.getElementById('scene').setAttribute('background', `color: rgb(${colorR}, ${colorG}, ${colorB});`);
        } else {
          console.log("door naar stage 2");
        }
      }
    });
  },
  computed: {
    box_style() {
      return { 
        transform: `
          perspective(${this.perspective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)
        `
      }
    }
  }
}
</script>

<style scoped>
#scene {
  width: 100vw;
  height: 100vh;
}
</style>
