export class Board {
  id: string;
  name: string;
}

export class Thread {
  id: string;
  boardId: string;
  title: string;
}

export class Response {
  threadId: string;
  author: string;
  email: string;
  body: string;
}

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

  getResponsesByThreadId: (state: State) => (id) => {
    return state.responses.filter(response => response.threadId == id)
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const boards: Board[] = await app.$axios.$get('./boards.json')
    commit("setBoards", boards)

    const threads: Thread[] = await app.$axios.$get('./threads.json')
    commit("setThreads", threads)

    const responses: Response[] = await app.$axios.$get('./responses.json')
    commit("setResponses", responses)
  }
}
