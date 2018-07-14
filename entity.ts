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
  author: string;
  email: string;
  body: string;
  createAt: Date;
}

