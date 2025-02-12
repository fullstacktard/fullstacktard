<template>
  <div
    id="vanta-bg"
    class="flex flex-col items-center h-screen justify-center w-screen home font-Unison z-0 overflow-hidden"
  >
    <div
      class="w-full h-full absolute left-0 top-0 bg-black bg-opacity-40 z-[1]"
    ></div>
    <div
      class="z-2 flex flex-col items-center h-screen justify-start w-screen font-Unison pt-14 lg:pt-20 relative overflow-y-scroll overflow-x-hidden scrollbar"
    >
      <div class="text-wrapper">
        <h1 class="text">fullstack<span class="tard-flicker">tard</span></h1>
        <span class="text flicker" aria-hidden="true">fullstack</span>
      </div>
      <div class="text-white mt-4 lg:mt-8 text-2xl lg:text-4xl">
        I build 😎💩
      </div>
      <div
        class="grid grid-cols-3 gap-4 text-white text-2xl lg:text-3xl mt-4 lg:mt-8 z-[2]"
      >
        <a
          href="https://x.com/fullstacktard"
          class="col-span-1 hover:text-[#00ff00] transition-colors"
        >
          <font-awesome-icon :icon="['fab', 'x-twitter']" />
        </a>
        <a
          href="https://t.me/fullstacktard"
          class="col-span-1 hover:text-[#00ff00] transition-colors"
        >
          <font-awesome-icon :icon="['fab', 'telegram']" />
        </a>
        <a
          href="https://github.com/fullstacktard"
          class="col-span-1 hover:text-[#00ff00] transition-colors"
        >
          <font-awesome-icon :icon="['fab', 'github']" class="" />
        </a>
      </div>
      <div class="flex flex-col items-center justify-center rounded-full">
        <div class="text-white mt-4 lg:mt-8 text-3xl lg:text-5xl">
          À la carte
        </div>

        <three-column class="mb-20 z-30" :items="items">
          <template #item="{ index }">
            <div
              class="flex flex-col items-center text-white w-full h-full px-4 z-30"
            >
              <div class="flex justify-center w-full items-center">
                <img
                  :src="items[index].pfp"
                  class="w-24 h-24 rounded-full mr-4 mt-1"
                  alt="Profile Picture"
                />
                <div>
                  <h2 :class="['font-bold', items[index].titleClass]">
                    {{ items[index].title }}
                  </h2>
                  <h3 :class="['text-gray-300', items[index].subtitleClass]">
                    {{ items[index].subtitle }}
                  </h3>
                </div>
              </div>
              <p
                class="text-center w-full mt-4 font-FiraMono"
                v-html="items[index].content"
              ></p>
              <div class="flex gap-4 mt-4 text-xl z-30">
                <a
                  v-for="(link, i) in items[index].links"
                  :key="i"
                  :href="link.url"
                  class="hover:text-[#00ff00] transition-colors z-30"
                >
                  <font-awesome-icon
                    class="z-30"
                    :icon="[link.icon === 'globe' ? 'fas' : 'fab', link.icon]"
                  />
                </a>
              </div>
            </div>
          </template>
        </three-column>
      </div>
    </div>

    <div
      class="hidden lg:block absolute bottom-10 left-10 z-[3] w-[550px] h-[550px]"
    >
      <threejs />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { onMounted, onBeforeUnmount } from "vue";
import threejs from "../components/threejs.vue";
import ThreeColumn from "../components/ThreeColumn.vue";

export default {
  components: { threejs, ThreeColumn },
  setup() {
    let vantaEffect = null;

    const items = [
      {
        pfp: "unit1new.png",
        title: "UNIT-01",
        titleClass: "text-3xl",
        subtitle: "Co-Founder",
        subtitleClass: "text-xl",
        content:
          "UNIT-01 provides state of the art tooling for solana degens to maximise their trading potential.<br><br>Currently providing tools to a private collective.<br><br>Definitely don't apply.",
        links: [
          { icon: "globe", url: "https://unitzero.one" },
          { icon: "x-twitter", url: "https://x.com/unit01trading" },
        ],
      },
      {
        pfp: "fst.png",
        title: "Stacktard Bot",
        titleClass: "text-xl",
        subtitle: "Just For Fun",
        subtitleClass: "text-xl",
        content:
          "The stacktard bot is a telegram token analysis tool. Like a funnier / better version of phanes bot.<br><br>(I am biased)<br><br>CAdd @stacktard bot to your group and see what it's all about.",
        links: [{ icon: "telegram", url: "https://unitszero.one" }],
      },
    ];

    onMounted(() => {
      // Load Vanta.js scripts dynamically
      const threeScript = document.createElement("script");
      threeScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
      document.head.appendChild(threeScript);

      const vantaScript = document.createElement("script");
      vantaScript.src =
        "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js";
      vantaScript.onload = () => {
        vantaEffect = VANTA.NET({
          el: "#vanta-bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 100.0,
          minWidth: 1000,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff00,
          backgroundColor: 0x0000,
          points: 17.0,
        });
      };
      document.head.appendChild(vantaScript);
    });

    onBeforeUnmount(() => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    });

    return { items };
  },
};
</script>

<style>
.home {
  background: linear-gradient(45deg, #2d2d2d 9%, #000 100%);
}

.text-wrapper {
  position: relative;
}

h1 {
  color: white;
}
.text {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1ch;
  font-size: 6vw;
  line-height: 1;
  margin: 0;
}
@screen lg {
  .text {
    text-transform: uppercase;
    letter-spacing: 0.1ch;
    font-size: 5vw;
    line-height: 1;
    margin: 0;
  }
}

.flicker {
  position: absolute;
  color: #00ff00;
  left: 0;
  top: 0;
  z-index: 1;
}

@keyframes periodicFlicker {
  0%,
  70% {
    opacity: 1;
  }
  71%,
  72% {
    opacity: 0;
  }
  73%,
  74% {
    opacity: 1;
  }
  75%,
  76% {
    opacity: 0;
  }
  77%,
  100% {
    opacity: 1;
  }
}

#vanta-bg {
  position: relative;
}

#vanta-bg > canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.text-wrapper,
.text-white {
  position: relative;
  z-index: 1;
}

.tard-flicker {
  animation: tardFlicker 5s infinite;
}

@keyframes tardFlicker {
  0%,
  70% {
    color: white;
  }
  71%,
  72% {
    color: #00ff00;
  }
  73%,
  74% {
    color: white;
  }
  75%,
  76% {
    color: #00ff00;
  }
  77%,
  100% {
    color: white;
  }
}

.scrollbar::-webkit-scrollbar {
  width: 8px;
}

.scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color: #00ff00;
  border-radius: 4px;
}

.scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #00ff00 transparent;
}
</style>
