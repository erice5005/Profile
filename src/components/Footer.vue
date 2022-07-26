<template>
    <v-footer style="background:transparent" class="d-flex flex-column">
            <div class="d-flex justify-center">
                 <a class="footer-link" v-for="(lx, itr) in links" :key="itr" :href="lx.link">
                <v-icon  :icon="lx.icon"></v-icon>
            </a>
            </div>
               
           <div class="d-flex justify-center" style="font-size: 10px">
               <p>                 {{ new Date().getFullYear() }} — <strong>Rice Dev Solutions, LLC</strong>
</p>
           </div>
        
 
    </v-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data: () => ({
        links: [
            {
                "name": "LinkedIn",
                "icon": "mdi-linkedin",
                "link": "https://www.linkedin.com/in/eric-rice-14aa82b4/",
            },
            {
                name: "GitHub",
                icon: "mdi-github",
                link: "https://www.github.com/erice5005",
            }
        ]
    })
})
</script>
<style scoped>
.footer-link {
    text-decoration: none;
    color: white;
}
</style>