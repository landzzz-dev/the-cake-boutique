<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col cols="12">
          <v-img eager cover class="image-top-shadow" :src="MainBanner">
          </v-img>
          <div class="d-flex text-white align-center justify-space-between pa-10" style="width: 100%; position: absolute; top: 0; z-index: 9999;">
            <div style="height: 60px; margin-right: 180px;">
              <v-img style="position: absolute; height: 60px; width: 150px;" :src="Logo"></v-img>
            </div>
              <div v-if="$vuetify.display.mdAndUp" v-for="(nav, index) in navDrawers" :key="index">
                <p class="px-4" :style="$vuetify.display.lgAndUp ? 'font-size: 1rem' : 'font-size: 0.8rem'">{{ nav.title.toUpperCase() }}</p>
              </div>
              <div class="d-flex align-center ga-6">
                <v-icon><SearchIcon></SearchIcon></v-icon>
                <v-icon><AccountIcon></AccountIcon></v-icon>
                <v-icon><CartIcon></CartIcon></v-icon>
              </div>
            </div>
        </v-col>
      </v-row>
      <v-row style="padding: 4rem;">
        <v-col
         :cols="$vuetify.display.xs ? 12 : 4"
         :style="$vuetify.display.xs ? 'height: 450px;' : $vuetify.display.xlAndUp ? 'height: 700px' : ''"
          class="justify-center"
          v-for="(item, index) in secondPart" :key="index"
        >
          
          <v-img eager cover class="image-bottom-shadow" style="height: 100%;" :lazy-src="item.path" :src="item.path">
            <p style="position: absolute; width: 100%; height: 100%; z-index: 10; align-content: end; text-align: center; padding-bottom: 2.5rem; color: silver; font-family: CromlinDemoRegular;" :style="$vuetify.display.xlAndUp ? 'font-size: 3rem;' : 'font-size: 2rem;'">{{ item.title }}</p>
          </v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="bg-black" style="padding: 6.5rem;" cols="12">
          <p style="font-size: 4rem; font-family: RRollieRegular; line-height: 3rem; color: #BDBDBD
;">About the <br> Cake Boutique</p>
          <p style="margin-top: 3rem; line-height: 3rem; font-size: small; color: gray;">
            The Cake Boutique combines craftsmanship and complexity into original cake design where delicious flavor and art are synonymous, bringing
  
            beauty into the most ordinary days. The Cake Boutique is Dubai’s first and only exclusively-online cake shop. Innovative and advanced beyond
  
            the cake design industry today, award-winning Cake Artist, Beth’s designs, are one-of-a-kind, featuring digitally sketched illustrations that are
  
            unique to the Waldorf Astoria DIFC.
          </p>
        </v-col>
      </v-row>
      <v-row style="margin-left: 2px; margin-right: 2px;"> 
        <v-col 
          style="height: 400px; margin-top: 2px; margin-bottom: 2px;"
          class="justify-center pa-0"
          :cols="$vuetify.display.xs ? 12 : $vuetify.display.mdAndDown ? 6 : 3"
          v-for="(item, index) in fourthPart" :key="index"
        >
          <v-img eager cover style="height: 100%; margin-right: 2px; margin-left: 2px;" :lazy-src="item.path" :src="item.path"></v-img>
        </v-col>
      </v-row>
      <v-row class="bg-black pa-16">
        <v-col>
          <p>Newsletter</p>
          <v-text-field label="Email Address"></v-text-field>
          <v-text-field label="First Name"></v-text-field>
          <v-text-field label="Phone Number"></v-text-field>
          <p>Marketing Permissions</p>
          <div class="pl-6">
            <div class="d-flex ga-2"> 
              <input type="checkbox">
              <span>Email</span>
            </div>
            <div class="d-flex ga-2">
              <input type="checkbox">
              <span>SMS</span>
            </div>
          </div>
          <br>
          <p style="font-size: 11px;">By signing up you are agreeing to recieve the latest news and exclusive offers from our restaurants.</p>
          <br>
          <v-btn>Subscribe</v-btn>
        </v-col>
        <v-col style="display: grid; justify-content: space-around;">
          <p>Signature Cakes</p>
          <p>Bespoke Cakes</p>
          <p>Weedding Cakes</p>
          <p>Cakesicles</p>
          <p>Chocolates</p>
          <p>Master Classes</p>
        </v-col>
        <v-col style="display: grid; justify-content: space-around;">
          <p>Payment And Delivery</p>
          <p>Help Center</p>
          <p>FAQs</p>
          <p>Contact Us</p>
          <div class="d-flex ga-6">
            <v-btn icon size="small">
              <v-icon><TiktokIcon></TiktokIcon></v-icon>
            </v-btn>
            <v-btn icon size="small">
              <v-icon><YoutubeIcon></YoutubeIcon></v-icon>
            </v-btn>
            <v-btn icon size="small">
              <v-icon><FacebookIcon></FacebookIcon></v-icon>
            </v-btn>
            <v-btn icon size="small">
              <v-icon><InstagramIcon></InstagramIcon></v-icon>
            </v-btn>
          </div>
          <v-btn style="display: flex; align-content: center;">
            <div v-for="(item, index) in paymentMethods" :key="index">
              <v-img eager cover :style="[`height: ${item.height}; width: ${item.width}`]" :src="item.path"></v-img>
            </div>
          </v-btn>
        </v-col>
        <v-col cols="12" class="mt-6 text-center" style="font-size: small;">
          © 2023 The Cake Boutique. All rights reserved.
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup>
import Logo from '@/assets/logo.svg';
import MainBanner from '@/assets/banner.jpg';
import SearchIcon from '@/components/icons/SearchIcon.vue'
import AccountIcon from './components/icons/AccountIcon.vue';
import CartIcon from './components/icons/CartIcon.vue';

import BirthdayCake from '@/assets/birthdaycake.jpg';
import WeddingCake from '@/assets/weddingcake.jpg';
import ChristmasCake from '@/assets/christmascake.jpg';

import { ref } from 'vue';

const secondPart = ref([
  { title: 'Birthday Cakes', path: BirthdayCake },
  { title: 'Wedding Cakes', path: WeddingCake },
  { title: 'Christmas Cakes', path: ChristmasCake },
]);

import Cake1 from '@/assets/cake1.jpg'
import Cake2 from '@/assets/cake2.jpg'
import Cake3 from '@/assets/cake3.jpg'
import Cake4 from '@/assets/cake4.jpg'
import Cake5 from '@/assets/cake5.jpg'
import Cake6 from '@/assets/cake6.jpg'
import Cake7 from '@/assets/cake7.jpg'
import Cake8 from '@/assets/cake8.jpg'

const fourthPart = ref([
  { path: Cake1 },
  { path: Cake2 },
  { path: Cake3 },
  { path: Cake4 },
  { path: Cake5 },
  { path: Cake6 },
  { path: Cake7 },
  { path: Cake8 },
]);

const navDrawers = ref([
  { title: 'Signature Cakes' },
  { title: 'Bespoke Cakes' },
  { title: 'Wedding Cakes' },
  { title: 'Cakesicles Cakes' },
  { title: 'Chocolates Cakes' },
  { title: 'Master Classes' },
])

import TiktokIcon from '@/components/icons/TiktokIcon.vue';
import YoutubeIcon from '@/components/icons/YoutubeIcon.vue';
import FacebookIcon from '@/components/icons/FacebookIcon.vue';
import InstagramIcon from '@/components/icons/InstagramIcon.vue';

import Visa from '@/assets/visa.png'
import MasterCard from '@/assets/mastercard.png'
import AmericanExpress from '@/assets/american-express.png'
import Paypal from '@/assets/paypal.png'

const paymentMethods = ref([
  { height: '44px', width: '44px', path: Visa },
  { height: '24px', width: '34px', path: MasterCard },
  { height: '24px', width: '34px', path: AmericanExpress },
  { height: '50px', width: '50px', path: Paypal },
])
</script>

<style scoped>
/* .v-application,
.v-application--wrap,
.v-app-bar,
.v-main {
  position: relative;
  z-index: 1;
} */

</style>
