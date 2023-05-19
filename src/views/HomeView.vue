

<template>
  <v-container style="max-width: 90%">
    <v-row style="border-bottom: 2px solid darkgray; text-align: center">
      <v-col>
        <h2>
          Eric Rice
        </h2>
        <h3>
          Prototype Engineer | Fractional CTO | Technology Consultant
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
        <h4>Focus Areas</h4>
        <v-list style="background: transparent">
          <v-list-item lines="two">
            <v-list-item-avatar start>
              <v-icon icon="mdi-code-tags"></v-icon>
            </v-list-item-avatar>
            <v-list-item-header>
              <v-list-item-title>Scalable Solutions</v-list-item-title>
              <v-list-item-subtitle>As a software developer, I have built highly scalable infrastructure capable of supporting hundreds of thousands of concurrent requests. I can offer valuable expertise in designing and implementing scalable solutions that can help businesses grow and expand.
              </v-list-item-subtitle>
            </v-list-item-header>

          </v-list-item>
          <v-list-item lines="two">
            <v-list-item-avatar start>
              <v-icon icon="mdi-code-tags"></v-icon>
            </v-list-item-avatar>
            <v-list-item-header>
              <v-list-item-title>Team Leadership</v-list-item-title>
              <v-list-item-subtitle>My experience as a co-founder and CTO, as well as my role as VP of Engineering and Data, demonstrate my ability to lead and manage development teams. As a fractional CTO, I can provide strategic leadership and guidance to ensure that technology initiatives align with business goals and objectives.
            </v-list-item-subtitle>
            </v-list-item-header>
          </v-list-item>
          <v-list-item lines="two">
            <v-list-item-avatar start>
              <v-icon icon="mdi-code-tags"></v-icon>
            </v-list-item-avatar>
            <v-list-item-header>
              <v-list-item-title>Rapid Prototype Development</v-list-item-title>
              <v-list-item-subtitle> With my experience in rapid prototyping, I can help businesses quickly iterate on product ideas and test new concepts in a cost-effective manner. This can help companies stay ahead of the competition and deliver innovative solutions that meet the needs of their customers.
              </v-list-item-subtitle>
            </v-list-item-header>
          </v-list-item>
          <v-list-item lines="two">
            <v-list-item-avatar start>
              <v-icon icon="mdi-code-tags"></v-icon>
            </v-list-item-avatar>
            <v-list-item-header>
              <v-list-item-title>Diverse Technical Expertise</v-list-item-title>
              <v-list-item-subtitle>With proficiency in a variety of programming languages and frameworks, I can offer valuable expertise in a range of technical areas. This can help businesses stay up-to-date with the latest technologies and leverage the best tools and frameworks for their specific needs.
              </v-list-item-subtitle>
            </v-list-item-header>
          </v-list-item>
          <v-list-item lines="two">
            <v-list-item-avatar start>
              <v-icon icon="mdi-code-tags"></v-icon>
            </v-list-item-avatar>
            <v-list-item-header>
              <v-list-item-title>Process Automation and DevOps</v-list-item-title>
              <v-list-item-subtitle> My experience with DevOps, Docker, Kubernetes, and CI/CD can help businesses streamline their development and deployment processes, reduce downtime, and improve overall efficiency. I can also offer expertise in dynamic automation, which can help companies automate routine tasks and free up developers' time for more complex projects.
              </v-list-item-subtitle>
            </v-list-item-header>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-spacer style="height:15px"></v-spacer>
    <v-row>
      <v-col cols="auto"  class="logocol" justify="self-end">
        <p class="d-flex justify-center">
        <h3>Past Work</h3>
        </p>

        <v-row v-for="(chunk, chunkInd) in rowChunks" :key="chunkInd">
          <v-col v-for="(workImg, imgInd) in chunk" :key="imgInd + `image`" align="center">
              <v-img :src="workImg.image" :title="workImg.title" height="200" width="200" :alt="workImg.title"/>
          </v-col>

        <!-- <v-row>
          <v-col align="center">
              <v-img :src="unfLogo" :alt="'United Nations Foundation'" height="200" width="200"/>
          </v-col>
          <v-col  align="center">
            <v-img :src="techstarsLogo" :alt="'Techstars'" height="200" width="200"/>
          </v-col>
          <v-col  align="center">
            <v-img :src="forbesLogo" :alt="'Forbes 30 Under 30'" height="200" width="200"/>
          </v-col> -->
        </v-row>
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
    </v-row>
    <v-row>

    </v-row>
  </v-container>
</template>
<script lang="ts">
import contactform from "../components/ContactForm.vue";
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  components: {
    contactform,
  },
  setup() {
    useMeta({ title: "",
      // meta: [
      //    {
      //     name: "robots", content : "index, nofollow"
      //    },
      //    {
      //     name: "keywords", title: "keywords", content: "cto, fractional cto, consulting, technical advisor, startup technical advisor, technical board member"
      //    }
      // ]
    });
  },
  computed: {
    rowChunks() {
      var rowBlocks = [];
      var totalCount = this.pastWork.length;
      // var blocks = totalCount/this.imagesPerRow;
      for (let i = 0; i < totalCount; i += this.imagesPerRow) {
        const chunk = this.pastWork.slice(i, i + this.imagesPerRow);
        rowBlocks.push(chunk);
      }
      return rowBlocks;
    },
  },
  mounted() {
    this.unfLogo = new URL("../assets/unflogo.png", import.meta.url).href;
    this.techstarsLogo = new URL(
      "../assets/techstars.png",
      import.meta.url
    ).href;
    this.forbesLogo = new URL("../assets/forbes.png", import.meta.url).href;
    this.gurulogo = new URL("../assets/gurulogo.jpg", import.meta.url).href;
    this.kastlogo = new URL("../assets/kastlogo.png", import.meta.url).href;
    this.gofamerlogo = new URL(
      "../assets/gofamerlogo.jpg",
      import.meta.url
    ).href;
    this.neverthinklogo = new URL(
      "../assets/neverthinklogo.png",
      import.meta.url
    ).href;
    this.powerspikelogo = new URL(
      "../assets/powerspikelogo",
      import.meta.url
    ).href;
  },
  data: () => {
    return {
      unfLogo: "",
      techstarsLogo: "",
      forbesLogo: "",
      gurulogo: "",
      kastlogo: "",
      gofamerlogo: "",
      neverthinklogo: "",
      powerspikelogo: "",
      timeline: [
        {
          title: "Open to new projects",
          start: "July 2022",
          end: "now",
        },
        {
          title: "VP of Engineering and Data at Live Current Media",
          start: "September 2022",
          end: "now",
        },
        {
          title: "Powerspike Acquired by Live Current Media",
          start: "September 2022",
          end: "September 2022",
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
          end: "May 2018",
        },
      ],
      imagesPerRow: 3,
      pastWork: [
        {
          image: new URL("../assets/forbes.png", import.meta.url).href,
          title: "Forbes 30 Under 30 Class of 2021",
        },
        {
          image: new URL("../assets/unflogo.png", import.meta.url).href,
          title: "United Nations Foundation",
        },
        {
          image: new URL("../assets/techstars.png", import.meta.url).href,
          title: "Techstars Atlanta Class of 2018",
        },
        {
          image: new URL("../assets/powerspikelogo.jpg", import.meta.url).href,
          title: "Powerspike",
        },
        {
          image: new URL("../assets/kastlogo.png", import.meta.url).href,
          title: "Kast",
        },
        {
          image: new URL("../assets/neverthinklogo.png", import.meta.url).href,
          title: "Neverthink",
        },
        {
          image: new URL("../assets/gurulogo.jpg", import.meta.url).href,
          title: "Guru Experience",
        },
        {
          image: new URL("../assets/gofamerlogo.jpg", import.meta.url).href,
          title: "GoFamer",
        },
      ],
      form: {
        name: "",
        email: "",
        content: "",
        valid: false,
      },
      formRules: {
        nameRules: [
          (v: any) => !!v || "Name is required",
          // (v:any) => {console.log(v); return true}
          // (v:any) => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        emailRules: [
          (v: any) => !!v || "Email is required",
          (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        contentRules: [(v: any) => !!v || "Content is required"],
      },
    };
  },
});
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
  background-image: url("@/assets/codebackgroundminimal.png");
  /* background-size: contain; */
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  z-index: -1;
  content: "";
}

.logocol .v-img {
  height: 200px;
  width: 200px;
  align-content: center;
  border: 1px solid transparent;
  border-radius: 3px;
}
</style>