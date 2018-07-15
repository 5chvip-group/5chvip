import { Response } from './../entity';
import firebase from './firebase'

export class Firestore {
  static async getResponses(boardId: string, threadId: string): Promise<Response[]> {
    const query = firebase.firestore().collection('boards').doc(boardId).collection('threads').doc(threadId).collection('responses').orderBy('createAt')
    let responses: Response[] = []    
    const snapshot = await query.get()
    snapshot.forEach(doc => {
      responses.push(doc.data() as Response)
    });
    return responses;
  }
}