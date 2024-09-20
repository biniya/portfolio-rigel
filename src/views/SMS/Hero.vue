<template>
  <section class="relative flex justify-center h-screen items-center w-full font-lexend overflow-hidden">
    <div class="w-10/12 flex flex-col lg:flex-row items-center justify-between">
      <a
          class="absolute top-5 font-bold flex w-10/12 items-center justify-center space-x-2 hover:scale-105 cursor-pointer"
          href="/"
      >
        <box-icon class="fill-gray-700" name="github" type="logo"></box-icon>
        <span class="text-purple-600 text-[1.1rem]">rigel.</span>studio
      </a>

      <!--    Background color-->
      <svg
          class="absolute -mt-24 h-2/3 opacity-40 w-full -z-20 blur-3xl overflow-hidden"
          fill="none"
          height="100%"
          viewBox="0 0 400 400"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_10_20)">
          <g filter="url(#filter0_f_10_20)">
            <path
                d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                fill="#a855f7"
            ></path>
            <path
                d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                fill="#7C87F8"
            ></path>
            <path
                d="M320 400H400V78.75L106.2 134.75L320 400Z"
                fill="#4C65E4"
            ></path>
            <path
                d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                fill="#22c55e"
            ></path>
          </g>
        </g>
        <defs>
          <filter
              id="filter0_f_10_20"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
              height="720.666"
              width="720.666"
              x="-160.333"
              y="-160.333"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
            ></feBlend>
            <feGaussianBlur
                result="effect1_foregroundBlur_10_20"
                stdDeviation="80.1666"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>

      <!--    Hero section-->
      <div
          class="flex flex-col items-start lg:w-7/12 h-3/5 lg:h-1/2 space-y-10 justify-center lg:space-y-14 text-start"
      >
        <div class="flex space-x-1 items-center justify-center">
          <span class=""> A 360 degree platform</span>
          <box-icon class="fill-purple-500" name="rotate-right"></box-icon>
        </div>

        <div
            class="text-4xl font-bold font-basic text-gray-800 flex flex-col space-y-8 md:text-5xl lg:text-5xl uppercase"
        >
          <span class="font-extrabold text-4xl uppercase lg:text-7xl">
            ትምህርት ቤትዎን ያዘምኑ<br />
          </span>
          <span class="font-semibold leading-[4.5rem]">
            ቀልጣፋ
            <span class="font-extrabold bg-emerald-500 text-white px-2">
              መምህራን</span
            >
            ፣ ንቁ
            <span class="font-extrabold bg-indigo-500 text-white px-2"
            >ቤተሰቦች</span
            >
            ፣ የበለጸጉ
            <span class="font-extrabold bg-violet-500 text-white px-2"
            >ተማሪዎች</span
            >
            !
          </span>
        </div>

        <a
            class="rounded-2xl hover:bg-gradient-to-tr from-purple-500 to-violet-500 p-1 hover:text-white font-medium border-2 border-black hover:border-violet-700 lg:w-fit px-3 lg:py-2 lg:px-4 py-1 text-center"
            href="#contact"
        >
          Request Demo</a
        >
      </div>

      <div class="w-full h-2/6 lg:w-[37%] lg:h-4/5 flex">
        <img
            alt="Hero"
            class="w-full object-cover"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>
