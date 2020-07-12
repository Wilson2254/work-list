import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
  },
  mutations: {
    createTask(state, task){
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, {id, description}){
      const tasks = state.tasks.concat()

      const idx = tasks.findIndex (t => t.id === id)
      const task = tasks[idx]

      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))

      tasks[idx] = {...task, description}
    },
    deleteTask(state){
      localStorage.removeItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({commit}, task){
      commit('createTask', task)
    },
    updateTask ({commit}, task){
      commit('updateTask', task)
    },
    deleteTask ({commit}, task){
      commit('deleteTask', task)
    }
  },
  modules: {
  },
  getters:{
    tasks: s => s.tasks,
    taskById: s => id => s.tasks.find(t => t.id === id)
  }
})
