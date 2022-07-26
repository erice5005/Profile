<template>
    <v-container>
        <v-row>
            <v-text-field ref="field" v-model="value" :name="name" :label="label" :rules="[isRequired]" :required="true"></v-text-field>

            <!-- <Field v-model="value" :name="name" :rules="isRequired" :placeholder="placeholder" class="formfield" :class="{'error': !valid}"></Field> -->
        </v-row>
        <v-row class="error-row">
            <ErrorMessage :name="name" />
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
import {Field, ErrorMessage} from 'vee-validate';

export default defineComponent({
    name: "FormField",
    components: {
        Field,
        ErrorMessage,
    },
    props: {
        name: {
            type: String,
            default: "",
        },
        label: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        }
    },
    data: () => ({
        value: "",
        valid: false
    }),
    methods: {
        checkRequired(value: Event) {
            console.log(this.$refs.field)
            if (!value) {
                this.valid = false
            }
        },
        isRequired(value: any) {
            console.log(value)
            if (!value) {
                this.valid = false
                return 'this field is required';
            }
            this.valid=true
            return true;
        },
    }
})
</script>
<style>

.error-row {
    margin-top: 5px;
    /* margin-left: 1px; */
    color: red;
    font-size: 10px;
}
.formfield {
    border: 1px solid darkgrey !important;
    border-radius: 5px;
    padding: 5px;
    /* opacity: 0; */
    background: transparent;
}
</style>