<template>
    <v-form>
        <v-container style="width: 100%">
            <v-text-field ref="field" v-model="name" label="Name" :rules="formRules.nameRules" required placeholder="Your Name"></v-text-field>
            <v-text-field v-model="email" label="Email" :rules="formRules.emailRules" required></v-text-field>
            <v-textarea placeholder="What do you want to discuss?" v-model="content" required
                :rules="formRules.contentRules" auto-grow rows="1" label="Content"></v-textarea>
        </v-container>
    </v-form>
    <v-btn :disabled="!isValid" @click="send">Submit</v-btn>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
import type {ComponentPublicInstance} from 'vue'
import { Form } from 'vee-validate';
import FormField from './FormField.vue';
export default defineComponent({
    setup() {
        const form = ref<ComponentPublicInstance<HTMLFormElement>>();
        onMounted(()=> {
            console.log(form)
        })
        return {
            form
        }
    },
    components: {
      Form,
      FormField,
    },
    methods: {
      isRequired(value: any) {
        if (!value) {
          return 'this field is required';
        }
        
        return true;
      },
      send () {
       fetch("http://localhost:4000/newcontact", {
         method: "POST",
         body: JSON.stringify({
           Name: this.name,
           Email: this.email,
           Content: this.content,
         })
       })
        // if((this.$refs.form as any).validate()){
        //   alert('Form passed')
        // } else {
        //   alert('Incorrent inputs')
        // }
      },
    },
    computed: {
      isValid() {
        if (this.name && this.email && this.content) {
          return true
        }
      }
    },  
    data: () => ({
        name: "",
        email: "",
        content: "",
        valid: false,
        formRules: {
            nameRules: [
                (v: string) => !!v || 'Name is required',
                // (v:any) => {console.log(v); return true}
                // (v:any) => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            emailRules: [
                (v: string) => !!v || 'Email is required',
                (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            contentRules: [
                (v: string) => !!v || 'Content is required',
            ]
        }
    }),
})
</script>

<style>
.v-textarea textarea.v-field__input{
  color: white !important;
}
</style>