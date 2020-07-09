<template>
  <div class="create">
    <h1>Create task</h1>
    <form @submit.prevent="submitHandler">
      <div class="group">
        <input type="text" required v-model="title"/>
        <span class="bar"></span>
        <label>Task</label>
        <textarea v-model="description" placeholder="Type..."></textarea>
        <p>{{description.length}}/2048</p>
        <button class="btn" type="submit">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    description: "",
    title: ""
  }),
  methods: {
    submitHandler () {
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: 'active'
      }
      this.$store.dispatch('createTask', task)
      this.$router.push('/list')
    }
  },
  destroyed(){

  }
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
}

.group {
  position: relative;
  margin-bottom: 30px;
}

input {
  font-size: 16px;
  padding: 10px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #ccc;
}
input:focus {
  outline: none;
}
label {
  color: #999;
  font-size: 18px;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 15px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -15px;
  font-size: 14px;
  color: #5264ae;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 320px;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 0;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}
textarea {
  margin-top: 20px;
  width: 280px;
  display: block;
  padding: 0 20px;
  margin-bottom: 10px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
  resize: none;
}
</style>