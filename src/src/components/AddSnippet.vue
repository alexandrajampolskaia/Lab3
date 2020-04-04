<template>
  <div>
    <form>
      <div>
        <br />
        <h1>/ADD SNIPPET/</h1>
        <br />

        <div>
          <label>Name</label> &nbsp;
          <input class="name" type="text" size="50" v-model="title" />
        </div>

        <br />
        <div>
          <label>Message</label> &nbsp;
          <textarea class="message" type="text" rows="4" cols="4" v-model="content" />
        </div>
      </div>

      <br />
      <button @click="addToAPI">Submit</button>
    </form>
    <br />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddSnippet",
  props: {
    msg: String
  },
  data: () => ({
    title: "",
    content: ""
  }),

  methods: {
    //ADD SNIPPET
    addToAPI() {
      let newSnippet = new URLSearchParams();
      newSnippet.append("add", null);
      newSnippet.append("title", this.title);
      newSnippet.append("content", this.content);
      newSnippet.append("tags", null);

      axios({
        method: "post",
        url: "https://www.forverkliga.se/JavaScript/api/api-snippets.php",
        data: newSnippet
      })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>


<style scoped>
h1 {
  color: black;
  background-color: white;
}
input {
  padding: 10px;
  outline: none;
  margin-right: 130px;
  font-size: 1em;
}

label {
  color: white;
  font-size: 1.3em;
  margin-right: 50px;
}

.name {
  width: 150px;
}

.message {
  width: 350px;
  padding: 10px;
  outline: none;
  margin-right: 130px;
  font-size: 1em;
}

button {
  padding: 10px;
  font-size: 1em;
  color: white;
  border-radius: 2px;
  background-color: black;
  border: 2px solid white;
}

button:hover {
  background-color: white;
  color: black;
}

button:focus {
  outline-width: 3px;
  outline-color: gray;
}

@media (max-width: 800px) {
input {
  margin-right: 10px;
}

label {
  margin-right: 10px;
}

.message {
  width: 300px;
  margin-right: 0;
}
}
</style>
