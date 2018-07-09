export const state = () => ({
  people: [],
  threads: []
})

export const mutations = {
  setPeople(state, people) {
    state.people = people
  },

  setThreads(state, threads) {
    state.threads = threads
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const people = await app.$axios.$get(
      "./random-data.json"
    )
    commit("setPeople", people.slice(0, 2))

    const threads = await app.$axios.$get(
      "./threads.json"
    )
    commit("setThreads", threads)
  }
}
