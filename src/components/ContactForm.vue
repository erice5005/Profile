<template>
    <v-form v-model="valid" ref="form">
        <v-container style="width: 100%; padding-bottom: 0px;">
            <v-text-field ref="field" v-model="name" label="Name" :rules="formRules.nameRules" required placeholder="Your Name"></v-text-field>
            <v-text-field v-model="email" label="Email" :rules="formRules.emailRules" required></v-text-field>
            <v-textarea placeholder="What do you want to discuss?" v-model="content" required
                :rules="formRules.contentRules" auto-grow rows="1" label="Content"></v-textarea>
            <v-btn :disabled="!isValid" :loading="sending" @click="send">Submit</v-btn>
        </v-container>
        
    </v-form>
    <v-snackbar
      v-model="showError"
      timeout="5000"
    >
      <p style="color:white">Something went wrong, please try again later</p>
       <template v-slot:actions>
        <v-btn
          color="red"
          variant="text"
          @click="showError = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
        this.sending = true
       fetch("https://apis.ericrice.dev/contact/newcontact", {
         method: "POST",
         body: JSON.stringify({
           Name: this.name,
           Email: this.email,
           Content: this.content,
         })
       }).then((r: any) => {
         this.name = "";
         this.email = "";
         this.content = "";
         this.sending = false;
          (this.$refs.form as HTMLFormElement).reset()
       }).catch((err: any) => {
          (this.$refs.form as HTMLFormElement).reset()
          this.sending = false
          this.showError = true
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
        return this.valid
        // if (this.name && this.email && this.content) {
        //   return true
        // }
      }
    },  
    data: () => ({
        name: "",
        email: "",
        content: "",
        valid: false,
        sending: false,
        showError: false,
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