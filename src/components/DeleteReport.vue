<template>
  <div class="snippetBox">
    <AddSnippet class="addSnippetBox" />
    <ShowSnippets
      class="showSnippetsBox"
      @theId="deleteSnippet($event)"
      @reportId="reportSnippet($event)"
      @upvoteId="upvoteSnippet($event)"
      @downvotevoteId="downvoteSnippet($event)"
      @reportOnId="unReport($event)"
      @deleteReported="deleteReported($event)"
    />
  </div>
</template>

<script>
import axios from "axios";
import AddSnippet from "./AddSnippet.vue";
import ShowSnippets from "./ShowSnippets.vue";

export default {
  name: "DeleteReport",
  components: {
    AddSnippet,
    ShowSnippets
  },
  props: {
    msg: String
  },

  data: () => ({
    snippet: []
  }),

  methods: {
    deleteSnippet(emittedId) {
      this.idToDelete = emittedId;
      console.log(this.idToDelete);

      let delSnippet = new URLSearchParams();
      delSnippet.append("delete", null);
      delSnippet.append("id", this.idToDelete);

      axios({
        method: "post",
        url: "https://www.forverkliga.se/JavaScript/api/api-snippets.php",
        data: delSnippet
      })
        .then(response => {
          console.log(response);
          this.snippet = this.snippet.filter(
            snippet => snippet.id != this.idToDelete
          );
        })
        .catch(error => {
          console.log(error);
        });
    },

    unReport(emittedId) {
      this.idToUnreport = emittedId;
      console.log(this.idToUnreport);

      let unreportSnippet = new URLSearchParams();
      unreportSnippet.append("unreport", null);
      unreportSnippet.append("id", this.idToUnreport);

      axios({
        method: "post",
        url: "https://www.forverkliga.se/JavaScript/api/api-snippets.php",
        data: unreportSnippet
      })
        .then(response => {
          console.log(response);
          this.snippet = this.snippet.filter(
            snippet => snippet.id != this.idToUnreport
          );
        })
        .catch(error => {
          console.log(error);
        });
    },

    deleteReported(emittedId) {
      this.idToDelete = emittedId;
      console.log(this.idToDelete);

      let delSnippet = new URLSearchParams();
      delSnippet.append("delete", null);
      delSnippet.append("id", this.idToDelete);

      axios({
        method: "post",
        url:
          "https://www.forverkliga.se/JavaScript/api/api-snippets.php?reported",
        data: delSnippet
      })
        .then(response => {
          console.log(response);
          this.snippet = this.snippet.filter(
            snippet => snippet.id != this.idToDelete
          );
        })
        .catch(error => {
          console.log(error);
        });
    },
    reportSnippet(emittedId) {
      this.idToReport = emittedId;
      console.log(this.idToReport);

      let repSnippet = new URLSearchParams();
      repSnippet.append("report", null);
      repSnippet.append("id", this.idToReport);

      axios({
        method: "post",
        url: "https://www.forverkliga.se/JavaScript/api/api-snippets.php",
        data: repSnippet
      })
        .then(response => {
          console.log(response);
          this.snippet = this.snippet.filter(
            snippet => snippet.id != this.idToReport
          );
        })
        .catch(error => {
          console.log(error);
        });
    },
    upvoteSnippet(emittedId) {
      this.idToReport = emittedId;
      console.log(this.idToReport);

      let repSnippet = new URLSearchParams();
      repSnippet.append("upvote", null);
      repSnippet.append("id", this.idToReport);

      axios({
        method: "post",
        url: "https://www.forverkliga.se/JavaScript/api/api-snippets.php",
        data: repSnippet
      })
        .then(response => {
          console.log(response);
          this.snippet = this.snippet.filter(
            snippet => snippet.id != this.idToReport
          );
        })
        .catch(error => {
          console.log(error);
        });
    },
    downvoteSnippet(emittedId) {
      this.idToReport = emittedId;
      console.log(this.idToReport);

      let repSnippet = new URLSearchParams();
      repSnippet.append("downvote", null);
      repSnippet.append("id", this.idToReport);

      axios({
        method: "post",
        url: "https://www.forverkliga.se/JavaScript/api/api-snippets.php",
        data: repSnippet
      })
        .then(response => {
          console.log(response);
          this.snippet = this.snippet.filter(
            snippet => snippet.id != this.idToReport
          );
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.snippetBox {
  display: grid;
  grid-template-columns: 2;
  grid-template-rows: 2;
  grid-gap: 10px;
  color: black;
}

.addSnippetBox {
  grid-row: 1/2;
  grid-column: 1/3;
  margin: 20px;
  background-image: url("jung.jpg");
  background-position: top;
  
}

.showSnippetsBox {
  grid-row: 2/3;
  grid-column: 1/3;
  border: 5px solid black;
  margin: 0 20px 0 20px;
}
</style>
