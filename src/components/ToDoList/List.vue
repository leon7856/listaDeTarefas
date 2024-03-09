<template>
  <div>
    <h1 class="my-5">To do List</h1>
    <div class="row justify-content-center">
      <div class="col-8 px-0">
        <input class="form-control remove-rounded-end" type="text" id="formFile" placeholder="New task"
          v-model="newTask">
      </div>
      <div class="col-1 px-0">
        <div class="d-grid gap-2">
          <button @click="addTesk" class="btn btn-success remove-rounded-start">Insert</button>
        </div>
      </div>
    </div>  
    <h2 class="mt-3">All tasks</h2>
    <div class="row justify-content-center mt-3">
      <div class="col-9 spacing-table">
        <li v-for="(task, index) in tasks" :key="index">
          <div class="row justify-content-center py-2">
            <div class="col-9 px-0">
              <input class="form-control remove-rounded-end" type="text" id="formFile" :value="task" readonly>
            </div>
            <div class="col-2 px-0">
              <div class="d-grid gap-2">
                <button @click="removeTask(index)" class="btn btn-danger remove-rounded-start">Remove</button>
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTesk() {
      this.tasks.push(this.newTask);
      this.newTask = '';
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}

.remove-rounded-start {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.remove-rounded-end {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.spacing-table {
  background: #f5f5f5; 
  height: 600px; 
  overflow: auto;
}
</style>