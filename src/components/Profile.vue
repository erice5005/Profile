<script setup lang="ts">
import headshot from '../assets/Headshot1-crop-small.jpg'
// import VCard, VContainer, VCol from 'vuetify'
</script>

<template>
    <v-container>
        <v-row>
            <!-- <v-col sm="4">
                <v-card>
                    <v-card-media>
                        <v-img :src="headshot" class="prof-img" style=""></v-img>
                    </v-card-media>
                    <v-card-header>
                        <v-card-header-text >Eric Rice</v-card-header-text>
                    </v-card-header>
                    
                </v-card>
            </v-col> -->
            <v-col sm="8">
                <v-card>
                    <v-card-header>
                        <v-card-header-text>Technology Advisor and Automation Specialist</v-card-header-text>
                    </v-card-header>
                </v-card>
            </v-col>
            <v-col sm="4">
                <v-card>
                    <v-card-header></v-card-header>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
// import Vue from 'vue'
export default {
    name: "Profile"
    
}
</script>

<style lang="scss">
.v-img {
    border: 1px solid black;
    border-radius: 50%; 
}
</style>