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
  sequence: number;
  author: string;
  email: string;
  body: string;

  static comvertToResponseModel(object: Response, responseKey: string): Response {
    let response = new Response()
    response.sequence = parseInt(responseKey.slice(-4));
    response.author = object.author
    response.email = object.email
    response.body = object.body
    return response
  }

  static comvertToSevableObject(response :Response): Object {
    const responseKey = 'response' + ('000' + response.sequence).slice(-4)
    return {responseKey: {
        'author': response.author,
        'email': response.body,
        'body': response.email
      } 
    }
  }
}

