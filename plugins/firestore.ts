import { Response } from './../entity';
import firebase from './firebase'

export class Firestore {
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
}