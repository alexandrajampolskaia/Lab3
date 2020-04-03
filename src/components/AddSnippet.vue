<template>
  <div>
    <form>
      <div class="component">
        <br><h1>/ADD SNIPPET/</h1><br>

        <div class="form-group">
          <label>Name</label> &nbsp; 
          <input class="name" type="text" size="50" v-model="title" />
        </div>

        <br><div class="form-group">
          <label>Message</label> &nbsp;
          <textarea class="message" type="text" rows="4" cols="4" v-model="content" />
        </div>
      </div>

      <br><button type="submit" method="POST" @click="addToAPI">Submit</button>
    </form><br>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddSnippet",
  props: {
    msg: String,
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
h1{
	color: white;
	background-color: black;
}
input{
	padding: 10px;
	outline: none;
	margin-right: 130px;
	font-size: 1em;
}

label{
	color: white;
	font-size: 1.3em;
	margin-right: 50px;
}

.name{
	width: 150px;
}

.message{
	width: 350px;
	padding: 10px;
	outline: none;
	margin-right: 130px;
	font-size: 1em;
}

button{
padding: 10px;
font-size: 1em;
color: white;
border-radius: 2px;
background-color: black;
border: none;
}

button:hover{
background-color: white;
color: black;

}

button:focus {
  outline-width: 3px;
  outline-color: hotpink;
}


</style>
