<template>
    <!-- <div>
        
    </div> -->
    <v-container style="display:none">
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list nav dense>
                <v-list-item-group @click.stop="toggleDrawer">
                    <v-list-item to="/">
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar flat dense>
            <v-app-bar-nav-icon variant="text" class="hidden-md-and-up" @click.stop="toggleDrawer"></v-app-bar-nav-icon>
            <!-- <v-toolbar-title class="headline">
                <span>Eric </span>
                <span>Rice</span>
            </v-toolbar-title> -->
            <!-- <v-spacer></v-spacer> -->
            <v-toolbar-items style="float:right" class="hidden-sm-and-down">
                <!-- <v-btn to="/">Home</v-btn> -->
            </v-toolbar-items>
        </v-toolbar>
    </v-container>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({

    data() {
        return {
            drawer: false,
            group: null
        }
    },
    methods: {
        toggleDrawer() {
            console.log("clicked")
            this.drawer = !this.drawer
        }
    },
    watch: {
        group() {
            this.drawer = false
        }
    }
})
</script>