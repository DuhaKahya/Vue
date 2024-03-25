<template>
  <section>
    <div class="container">
      <form ref="form" method="POST">
        <h2 class="mt-3 mt-lg-5">Contact</h2>
        <h5 class="mb-4"></h5>

        <div class="input-group mb-3">
          <span class="input-group-text" style="width: 150px;">Name</span>
          <input type="text" class="form-control" v-model="contact.name" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" style="width: 150px;">Email</span>
          <input type="text" class="form-control" v-model="contact.email" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" style="width: 150px;">Subject</span>
          <input type="text" class="form-control" v-model="contact.subject" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" style="width: 150px;">Message</span>
          <textarea class="form-control" v-model="contact.message">
          </textarea>
        </div>

        <div class="input-group mt-4">
          <button type="button" class="btn btn-primary" @click="sendContactForm">Send!</button>
          <button type="button" class="btn btn-danger mx-3" @click="cancelForm">Cancel</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Axios from 'axios';

export default {
  name: "Contact",
  data() {
    return {
      contact: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    sendContactForm() {
      Axios.post("http://localhost/contact", this.contact)
        .then(result => {
          alert("Contact form has been sent!");
          this.$refs.form.reset();
          this.$router.push("/");
        })
        .catch(error => console.log(error));
    },
    cancelForm() {
      this.$router.push('/contact');
    },
  },
};
</script>

<style>
</style>
