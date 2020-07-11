<template>
  <div>
    <h1>List</h1>
    <hr />
    <table v-if="tasks.length">
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Descr</th>
                <th>Open</th>
            </tr>
        </thead>
        <tbody>
            <tr 
            v-for="(task, idx) of tasks"
            :key="task.id"
            >
            <td>{{idx+1}}</td>
            <td>{{task.title}}</td>
            <td class="desc__td"><div class="text">{{task.description}}</div></td>
            <td><router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">
                Open
            </router-link>
            </td>
            </tr>
        </tbody>
    </table>
    <p v-else class="no__task">No tasks</p>
  </div>
</template>

<script>
export default {
    computed:{
        tasks(){
            return this.$store.getters.tasks
        }
    }
}
</script>

<style scoped>
.text{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.desc__td{
    max-width: 200px;
}
</style>