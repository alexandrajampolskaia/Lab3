<template>
  <div>
    <br />
    <span class="loading" v-if="load">
      <h1>Loading...</h1>
    </span>

    <button
      @click="loadLatest, showLatest(), activeBtn = 'btn1'"
      :class="{active: activeBtn === 'btn1' }"
    >Show latest snippets</button>&nbsp;
    <button
      @click="loadBest, showBest(), activeBtn = 'btn2'"
      :class="{active: activeBtn === 'btn2' }"
    >Show Best snippets</button>&nbsp;
    <button
      @click="loadReported, showReported(), activeBtn = 'btn3'"
      :class="{active: activeBtn === 'btn3' }"
    >Show Reported snippets</button>

    <div v-if="loadLatest">
      <br />
      <p v-for="snippet in getUser" :key="snippet.id">
        <a class="titlecontent">Title:</a>
        {{snippet.title}}
        <br />
        <a class="titlecontent">Content:</a>
        {{snippet.content}}
        <br />
        <br />
        <button
          type="submit"
          @click="deleteSnippet"
          style="font-size:24px"
          class="fa"
          :id="snippet.id"
        >&#xf014;</button>
        &nbsp;
        <button
          type="submit"
          @click="reportSnippet"
          style="font-size:24px"
          class="fa"
          :id="snippet.id"
        >&#xf071;</button>
        &nbsp;
        <button
          type="submit"
          @click="upvoteSnippet"
          style="font-size:24px"
          class="fa"
          :id="snippet.id"
        >&#xf087;</button>
        &nbsp;
        <button
          type="submit"
          @click="downvoteSnippet"
          style="font-size:24px"
          class="fa"
          :id="snippet.id"
        >&#xf088;</button>
        <br />
        <a class="line">----------</a>
      </p>
    </div>

    <div v-if="loadBest">
      <br />
      <p v-for="snippet in getUser" :key="snippet.id">
        <a class="titlecontent">Title:</a>
        {{snippet.title}}
        <br />
        <a class="titlecontent">Content:</a>
        {{snippet.content}}
        <br />
        <a class="titlecontent">Score:</a>
        {{snippet.score}}
        <br />
        <br />
        <button
          type="submit"
          @click="deleteSnippet"
          style="font-size:24px"
          class="fa"
          :id="snippet.id"
        >&#xf014;</button> &nbsp;
        <button
          type="submit"
          @click="reportSnippet"
          style="font-size:24px"
          class="fa"
          :id="snippet.id"
        >&#xf071;</button>
        <br />
        <a class="line">----------</a>
      </p>
    </div>

    <div v-if="loadReported">
      <br />
      <p v-for="snippet in getUser" :key="snippet.id">
        <a class="titlecontent">Title:</a>
        {{snippet.title}}
        <br />
        <a class="titlecontent">Content:</a>
        {{snippet.content}}
        <br />
        <br />
        <button
          type="submit"
          @click="deleteReported"
          style="font-size:24px"
          class="fa"
          :id="snippet.id"
        >&#xf014;</button>&nbsp;
        <button
          type="submit"
          @click="unReport"
          style="font-size:24px"
          class="fa"
          :id="snippet.id"
        >&#xf0e2;</button>
        &nbsp;
        <br />
        <a class="line">----------</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ShowLatest",
  props: {
    msg: String
  },

  data() {
    return {
      snippetId: Number,
      getUser: [],
      loadLatest: true,
      loadBest: true,
      loadReported: true,
      load: false,
      activeBtn: ""
    };
  },

  methods: {
    //DELETE SNIPPET
    deleteSnippet(button) {
      this.snippetId = button.target.id;
      this.$emit("theId", this.snippetId);
      window.location.reload();
    },
    //REPORT SNIPPET
    reportSnippet(button) {
      this.snippetId = button.target.id;
      this.$emit("reportId", this.snippetId);
      window.location.reload();
    },
    //UPVOTE SNIPPET
    upvoteSnippet(button) {
      this.snippetId = button.target.id;
      this.$emit("upvoteId", this.snippetId);
      window.location.reload();
    },
    //DOWNVOTE SNIPPET
    downvoteSnippet(button) {
      this.snippetId = button.target.id;
      this.$emit("downvotevoteId", this.snippetId);
      window.location.reload();
    },
    //UNREPORT SNIPPETS
    unReport(button) {
      this.snippetId = button.target.id;
      this.$emit("reportOnId", this.snippetId);
      window.location.reload();
    },
    //DELETE REPORTED SNIPPETS
    deleteReported(button) {
      this.snippetId = button.target.id;
      this.$emit("deleteReported", this.snippetId);
      window.location.reload();
    },
    //LOAD LATEST SNIPPETS
    showLatest() {
      this.load = true;
      axios
        .get(
          "https://www.forverkliga.se/JavaScript/api/api-snippets.php?latest"
        )
        .then(response => {
          console.log(response.data);
          this.getUser = response.data;
          this.loadLatest = true;
          this.loadBest = false;
          this.loadReported = false;
          this.load = false;
          this.activeBtn;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //LOAD BEST SNIPPETS
    showBest(score) {
      this.load = true;
      this.bestScore = score;
      let getScore = new URLSearchParams();
      getScore.append("score", this.score);

      axios
        .get(
          "https://www.forverkliga.se/JavaScript/api/api-snippets.php?best",
          getScore
        )
        .then(response => {
          console.log(response.data);
          this.getUser = response.data;
          this.loadBest = true;
          this.loadLatest = false;
          this.loadReported = false;
          this.load = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //LOAD REPORTED SNIPPETS
    showReported() {
      this.load = true;
      axios
        .get(
          "https://www.forverkliga.se/JavaScript/api/api-snippets.php?reported"
        )
        .then(response => {
          console.log(response.data);
          this.getUser = response.data;
          this.loadReported = true;
          this.loadLatest = false;
          this.loadBest = false;
          this.load = false;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>



<style scoped>
.titlecontent {
  font-weight: bold;
  margin-right: 25px;
  font-size: 1.5em;
}

.active {
  background-color: black;
  color: white;
}

button {
  padding: 10px;
  font-size: 1em;
  color: black;
  border-radius: 2px;
  background-color: white;
  margin: 70px 10px 20px 10px;
  border: 2px solid black;
}

button:hover {
  background-color: black;
  color: white;
  border: 2px solid black;
}

button:focus {
  outline-width: 3px;
  outline-color: black;
}

.loading {
  color: black;
}

.fa {
  margin: 0 10px 0 10px;
  background-color: white;
  color: black;
  border: 1px solid white;
}

.fa:hover {
  border: 1px solid black;
  color: black;
  background-color: white;
}

.line {
  font-size: 3em;
  color: black;
}
</style>
