<template>
  <div>
    <h3>FrontEnd</h3>
    <ul class="skill-list">
      <li v-for="skillparam in skill.frontend" :key="skillparam['id']">
        <v-progress-circular
                :indeterminate="false"
                :rotate="progress.rotate"
                :size="progress.size"
                :value="skillparam['value'] * progress.load / 100"
                :width="progress.width"
                :color="skillparam['color']"
        >
        </v-progress-circular>
        {{ skillparam['title'] }}
      </li>
    </ul>
    <h3>BackEnd</h3>
    <ul class="skill-list">
      <li v-for="skillparam in skill.backend" :key="skillparam['id']">
        <v-progress-circular
                :indeterminate="false"
                :rotate="progress.rotate"
                :size="progress.size"
                :value="skillparam['value'] * progress.load / 100"
                :width="progress.width"
                :color="skillparam['color']"
        >
        </v-progress-circular>
        {{ skillparam['title'] }}
      </li>
    </ul>
    <h3>Language</h3>
    <ul class="skill-list">
      <li v-for="skillparam in skill.language" :key="skillparam['id']">
        <v-progress-circular
                :indeterminate="false"
                :rotate="progress.rotate"
                :size="progress.size"
                :value="skillparam['value'] * progress.load / 100"
                :width="progress.width"
                :color="skillparam['color']"
        >
        </v-progress-circular>
        {{ skillparam['title'] }}
      </li>
    </ul>
    <h3>Database</h3>
    <ul class="skill-list">
      <li v-for="skillparam in skill.database" :key="skillparam['id']">
        <v-progress-circular
                :indeterminate="false"
                :rotate="progress.rotate"
                :size="progress.size"
                :value="skillparam['value'] * progress.load / 100"
                :width="progress.width"
                :color="skillparam['color']"
        >
        </v-progress-circular>
        {{ skillparam['title'] }}
      </li>
    </ul>
    <h3>Cloud</h3>
    <ul class="skill-list">
      <li v-for="skillparam in skill.cloud" :key="skillparam['id']">
        <v-progress-circular
                :indeterminate="false"
                :rotate="progress.rotate"
                :size="progress.size"
                :value="skillparam['value'] * progress.load / 100"
                :width="progress.width"
                :color="skillparam['color']"
        >
        </v-progress-circular>
        {{ skillparam['title'] }}
      </li>
    </ul>
    <h3>Other</h3>
    <ul class="skill-list">
      <li v-for="skillparam in skill.other" :key="skillparam['id']">
        <v-progress-circular
                :indeterminate="false"
                :rotate="progress.rotate"
                :size="progress.size"
                :value="skillparam['value'] * progress.load / 100"
                :width="progress.width"
                :color="skillparam['color']"
        >
        </v-progress-circular>
        {{ skillparam['title'] }}
      </li>
    </ul>
  </div>
</template>

<script>
  import firebase from "firebase";
    export default {
        name: "skill",
        data(){
            return{
                progress:{
                    width: 3,
                    size: 25,
                    rotate: 270,
                    load: 0,
                    anime: '',
                },
                skill:{
                    frontend: [],
                    backend: [],
                    language: [],
                    cloud: [],
                    database: [],
                    other: [],
                }
            }
        },
        methods:{
          progress_anime(){
              if(this.progress.load === 100){
                  clearInterval(this.progress.anime);
              }
              else{
                  this.progress.load = this.progress.load + 10;
              }
          },
            start_anime(){
                this.progress.anime = setInterval(
                    this.progress_anime,
                    200
                );
            },
        },
        mounted() {
            firebase
                .database()
                .ref("skill/frontend")
                .on("child_added", snapshot => {
                    this.skill.frontend.push(snapshot.val());
                });
            firebase
                .database()
                .ref("skill/backend")
                .on("child_added", snapshot => {
                    this.skill.backend.push(snapshot.val());
                });
            firebase
                .database()
                .ref("skill/cloud")
                .on("child_added", snapshot => {
                    this.skill.cloud.push(snapshot.val());
                });
            firebase
                .database()
                .ref("skill/language")
                .on("child_added", snapshot => {
                    this.skill.language.push(snapshot.val());
                });
            firebase
                .database()
                .ref("skill/database")
                .on("child_added", snapshot => {
                    this.skill.database.push(snapshot.val());
                });
            firebase
                .database()
                .ref("skill/other")
                .on("child_added", snapshot => {
                    this.skill.other.push(snapshot.val());
                });
        },
        updated() {
            this.start_anime();
        }
    }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
  h2{
    text-align: center;
    font-family: 'Noto Sans JP', sans-serif;
  }
  h3{
    text-align: center;
    font-family: 'Poiret One', cursive;
    margin-top: 30px;
  }
  .skill-list{
    text-align: left;
    li{
      font-family: 'Noto Sans JP', sans-serif;
      display: inline-block;
      width: 40%;
      margin: 20px 0 20px 10%;
    }
  }
</style>