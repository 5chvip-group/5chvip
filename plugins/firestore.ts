import { Thread, Response, Board } from '~/entity';
import firebase from './firebase'

export class Firestore {
  static async getBoards(): Promise<Board[]> {
    const query = firebase.firestore().collection('boards')
    const snapshot = await query.get()
    const boards: Board[] = snapshot.docs
                              .map((doc) => {
                                let board = doc.data() as Board
                                board.id = doc.id
                                return board
                              })
    return boards;
  }
  static async getResponses(boardId: string, threadId: string): Promise<Response[]> {
    const query = firebase.firestore().collection('boards').doc(boardId).collection('threads').doc(threadId).collection('responses').orderBy('createAt')
    const snapshot = await query.get()
    const responses: Response[] = snapshot.docs.map(doc => doc.data() as Response)
    return responses;
  }
  static setResponsesRealTime(boardId: string, threadId: string, callback: Function): void {
    const query = firebase.firestore().collection('boards').doc(boardId).collection('threads').doc(threadId).collection('responses').orderBy('createAt')
    query.onSnapshot(querySnapshot => {
      const responses: Response[] = querySnapshot.docs.map(doc => doc.data() as Response)
      callback(responses)
    })
  }
  // threadId だけで取得できるようにしたいがそのためにはデータ構造の変更が必要？
  static async getThread(boardId, threadId): Promise<Thread> {
    const query = firebase.firestore().collection('boards').doc(boardId).collection('threads').doc(threadId)
    const doc = await query.get()
    const thread: Thread = doc.data() as Thread
    return thread;
  }

  static async createRsponse(response: Response, threadId, boardId) {
    const query = firebase.firestore().collection('boards').doc(boardId).collection('threads').doc(threadId).collection('responses')
    // TODO author は board によってデフォルトを変える
    await query.add({
      author: response.author || '名無しさん',
      email: response.email,
      body: response.body,
      createAt: firebase.firestore.FieldValue.serverTimestamp()
    })
  }
}