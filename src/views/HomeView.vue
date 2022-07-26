

<template>
  <v-container style="max-width: 90%">
    <v-row style="border-bottom: 2px solid darkgray">
      <v-col>
        <h2>
          Eric Rice
        </h2>
        <h3>
          Technology Consultant
        </h3>
      </v-col>
    </v-row>
    <v-spacer style="height: 20px"></v-spacer>
    <v-row class="justify-center">

      <v-col cols="auto">
        <h2>About</h2>
        <!-- <h3>About</h3> -->
        <p>Hello! I'm Eric. I'm a full stack developer, systems architect, and team advisor.</p>
        <p>I'm passionate about creating new solutions to complex problems and finding better ways to do things.</p>
        <p>I've created startups, grown teams, scaled infrastructure, created custom automation solutions and advised
          technical roadmaps.</p>
        <br />
        <h4>Offerings</h4>
        <v-list>
          <v-list-item lines="three">
            <v-list-item-avatar start>
              <v-icon icon="mdi-code-tags"></v-icon>
            </v-list-item-avatar>
            <v-list-item-header>
              <v-list-item-title>Software Development</v-list-item-title>
              <v-list-item-subtitle>Let's make something! Software development exactly as you need it.
              </v-list-item-subtitle>
            </v-list-item-header>

          </v-list-item>
          <v-list-item lines="two">
            <v-list-item-avatar start>
              <v-icon icon="mdi-code-tags"></v-icon>
            </v-list-item-avatar>
            <v-list-item-header>
              <v-list-item-title>Process Automation</v-list-item-title>
              <v-list-item-subtitle>Make the computer do the work. Take a business process and speed it up through
                custom processing tools.</v-list-item-subtitle>
            </v-list-item-header>
          </v-list-item>
          <v-list-item lines="two">
            <v-list-item-avatar start>
              <v-icon icon="mdi-code-tags"></v-icon>
            </v-list-item-avatar>
            <v-list-item-header>
              <v-list-item-title>Technical Advising</v-list-item-title>
              <v-list-item-subtitle>The technical world can get complicated, I can help you navigate.
              </v-list-item-subtitle>
            </v-list-item-header>
          </v-list-item>
          <v-list-item lines="two">
            <v-list-item-avatar start>
              <v-icon icon="mdi-code-tags"></v-icon>
            </v-list-item-avatar>
            <v-list-item-header>
              <v-list-item-title>Custom Contract</v-list-item-title>
              <v-list-item-subtitle>D. None of the above. Not everything fits in a box. Let's chat.
              </v-list-item-subtitle>
            </v-list-item-header>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col>
        <p class="d-flex justify-center">
        <h3>Brief History</h3>
        </p>
        <div class="d-flex justify-space-around">
          <v-timeline side="end" align="start">
            <v-timeline-item v-for="(tx, iter) in timeline" :key="iter">
              <div>
                <h4>{{ tx.title }}</h4>
                <span>{{ tx.start }} to {{ tx.end }}</span>
              </div>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-col>
    </v-row>
    <v-spacer style="height:25px"></v-spacer>
    <v-row>
      <v-col cols="auto" class="flex-grow-1 flex-shrink-0">
        <p style="font-weight: bold;">Got an idea you want to discuss? Lets talk!</p>
        <contactform></contactform>
        <!-- <v-form ref="form" v-model="form.valid">
          <v-container>
            <v-text-field 
            v-model="form.name" 
            label="Name"  
            :rules="formRules.nameRules"
            required
          ></v-text-field>
          <v-text-field 
            v-model="form.email" 
            label="Email" 
            :rules="formRules.emailRules"
            required
          ></v-text-field>
          <v-textarea placeholder="What do you want to discuss?" v-model="form.content" required
            :rules="formRules.contentRules" auto-grow rows="1" label="Content"></v-textarea>
          </v-container>
        </v-form> -->


      </v-col>
       <!-- <v-spacer></v-spacer> -->
      <v-col cols="auto"  class="logocol" justify="self-end">
        <p class="d-flex justify-center">
        <h3>Past Work</h3>
        </p>
        <v-row>
          <v-col align="center">
              <img src="../assets/unflogo.png" />
          </v-col>
          <v-col  align="center">
            <img src="../assets/techstars.png" />
          </v-col>
          <v-col  align="center">
            <img src="../assets/forbes.png" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>

    </v-row>
  </v-container>
</template>
<script lang="ts">
import contactform from '../components/ContactForm.vue'
import { defineComponent } from "vue"
export default defineComponent({
  components: {
    contactform,

  },
  data: () => ({
    timeline: [
      {
        title: "Open to new projects",
        start: "July 2022",
        end: "now"
      },
      {
        title: "Pro-bono consulting for United Nations Foundation",
        start: "September 2021",
        end: "March 2022",
      },
      {
        title: "CTO and Co-Founder of Powerspike",
        start: "November 2016",
        end: "July 2022",
      },
      {
        title: "BS in Computer Engineering from Binghamton University",
        start: "August 2014",
        end: "May 2018"
      }

    ],
    form: {
      name: "",
      email: "",
      content: "",
      valid: false,
    },
    formRules: {
      nameRules: [
        (v: any) => !!v || 'Name is required',
        // (v:any) => {console.log(v); return true}
        // (v:any) => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        (v: any) => !!v || 'Email is required',
        (v: any) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      contentRules: [
        (v: any) => !!v || 'Content is required',
      ]
    }
  }),

})
</script>
<style scoped>
.avatarImage {
  height: 300px;
  width: 300px;
  border: 1px solid transparent;
  border-radius: 5px;
}

.mainbackground {
  position: relative;
  z-index: 1;
  height: 94%;
}

.mainbackground::before {
  background-image: url('@/assets/codebackgroundminimal.png');
  /* background-size: contain; */
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: .4;
  z-index: -1;
  content: "";
}


.logocol img {
  height: 200px;
  width: 200px;
  align-content: center;
  border: 1px solid transparent;
  border-radius: 3px;
}
</style>