<template>
  <div
    class="flex flex-col items-center h-screen justify-center w-screen home font-Unison z-0 overflow-hidden"
  >
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="500"
      class="min-w-[360px] absolute right-6 rounded-2xl bottom-6 backdrop-blur-lg bg-white/10 lg:bg-white/5 z-[100] p-8 transition-all transform duration-300 hover:bg-white/10 border border-white/10 hover:border-white/20"
    >
      <div class="flex flex-col items-center space-y-6">
        <div class="text-center space-y-3">
          <h3 class="text-xl font-semibold text-[#00ff00]">Get in touch</h3>
          <div class="space-y-3 text-gray-300 text-md">
            <p class="leading-tight">Got a cook?</p>
            <p class="leading-tight">Want sumthin built?</p>
            <p class="leading-tight">Need emotional support?</p>
          </div>
        </div>
        <a
          href="https://t.me/fullstacktard"
          target="_blank"
          class="group flex items-center space-x-2 bg-[#00ff00] hover:bg-[#00e600] text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-[#00ff00]/30 ring-0 hover:ring-2 hover:ring-[#00ff00]/20"
        >
          <span>Slide in dms</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 transition-transform group-hover:translate-x-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </a>
      </div>
    </div>
    <div id="particles-js"></div>
    <div
      class="w-full h-full absolute left-0 top-0 bg-black bg-opacity-40 z-[1]"
    ></div>
    <div
      class="z-2 flex flex-col items-center h-screen justify-start w-screen font-Unison pt-14 lg:pt-20 relative overflow-y-scroll overflow-x-hidden scrollbar"
    >
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="100"
        class="text-wrapper"
      >
        <h1 class="text">fullstack<span class="tard-flicker">tard</span></h1>
        <span class="text flicker" aria-hidden="true">fullstack</span>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        class="text-white mt-4 lg:mt-8 text-2xl lg:text-4xl"
      >
        I build 😎💩
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="100"
        class="grid grid-cols-3 gap-4 text-white text-2xl lg:text-3xl mt-4 lg:mt-8 z-[2]"
      >
        <a
          target="_blank"
          href="https://x.com/fullstacktard"
          class="col-span-1 hover:text-[#00ff00] transition-colors"
        >
          <font-awesome-icon :icon="['fab', 'x-twitter']" />
        </a>
        <a
          target="_blank"
          href="https://t.me/fullstacktard"
          class="col-span-1 hover:text-[#00ff00] transition-colors"
        >
          <font-awesome-icon :icon="['fab', 'telegram']" />
        </a>
        <a
          target="_blank"
          href="https://github.com/fullstacktard"
          class="col-span-1 hover:text-[#00ff00] transition-colors"
        >
          <font-awesome-icon :icon="['fab', 'github']" class="" />
        </a>
      </div>
      <div class="flex flex-col items-center justify-center rounded-full">
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="500"
          class="text-white mt-4 lg:mt-8 text-3xl lg:text-5xl"
        >
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
                  target="_blank"
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
      data-aos="fade-in"
      data-aos-delay="600"
      data-aos-duration="1500"
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
    async function initParticles() {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 104,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.21306986324071361,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 140,
            color: "#00ff00",
            opacity: 1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 134,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }
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
        pfp: "Schema3.png",
        title: "Schema3",
        titleClass: "text-3xl",
        subtitle: "Co-Founder",
        subtitleClass: "text-xl",
        content:
          "Schema3 provides Launch support, end-to-end development, marketing & everything else in between.<br><br>Book in a call with us below<br><br> <a href='https://schema3.xyz'>schema3.xyz</a>",
        links: [
          { icon: "globe", url: "https://schema3.xyz" },
          { icon: "x-twitter", url: "https://x.com/schema3xyz" },
        ],
      },
      {
        pfp: "fst.png",
        title: "Stacktard Bot",
        titleClass: "text-xl",
        subtitle: "Just For Fun",
        subtitleClass: "text-xl",
        content:
          "The stacktard bot is a telegram token analysis tool. Like a funnier / better version of phanes bot.<br><br>(I am biased)<br><br>Add @stacktard bot to your group and see what it's all about.",
        links: [{ icon: "telegram", url: "https://unitszero.one" }],
      },
    ];

    onMounted(() => {
      initParticles();
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
#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
