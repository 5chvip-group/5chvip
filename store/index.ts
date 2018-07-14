import { Board, Thread, Response } from '~/entity'


class State {
  boards: Board[];
  threads: Thread[];
  responses: Response[];
}

export const state = () => (new State())

export const mutations = {
  setBoards(state: State, boards: Board[]) {
    state.boards = boards
  },

  setThreads(state: State, threads: Thread[]) {
    state.threads = threads
  },

  setResponses(state: State, responses: Response[]) {
    state.responses = responses;
  },
}

export const getters = {
  getBoardById: (state: State) => (id) => {
    return state.boards.find(board => board.id == id)
  },

  getThreadsByBoardId: (state: State) => (id) => {
    return state.threads.filter(thread => thread.boardId == id)
  },

  getThreadById: (state: State) => (id) => {
    return state.threads.find(thread => thread.id == id)
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const boards: Board[] = await app.$axios.$get('./boards.json')
    commit('setBoards', boards)

    // TODO: Threads data fetching will be moved to the page in the future.
    const threads: Thread[] = await app.$axios.$get('./threads.json')
    commit('setThreads', threads)
  }
}
