<template>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-2">
    <div class="card product-card h-100">
      <div class="card-body">
        <img :src="product.image" :alt="product.title" :title="product.title" />
        <div class="float-start">
          <p>{{ product.name }}</p>
          <p>
            <small>{{ product.category.name }}</small>
          </p>
        </div>
        <span class="price float-end">{{ product.price }}</span>
      </div>
      <div class="card-footer">
        <button class="btn btn-warning" @click="editProduct(product.id)">
          Edit</button
        >&nbsp;&nbsp;
        <button class="btn btn-danger" @click="deleteProduct(product.id)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "ProductListItem",
  props: {
    product: Object,
  },
  methods: {
    deleteProduct(id) {
      Axios.delete("http://localhost/products/" + id)
        .then((result) => {
          this.$emit("product-deleted", id);
          // refresh page
          this.$router.go();
        })
        .catch((error) => console.log(error));
    },
    editProduct(id) {
      this.$router.push("/editProduct/" + id);
    },
  },
};
</script>



<style>
</style>