const config = require('./nuxt.config.js')
const firebase = require('firebase')

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: config.env.APIKEY,
      authDomain: config.env.AUTHDOMAIN,
      databaseURL: config.env.DATABASEURL,
      projectId: config.env.PROJECTID,
      storageBucket: config.env.STORAGEBUCKET,
      messagingSenderId: config.env.MESSAGINGSENDERID
    }
  )
}

const firestore = firebase.firestore();

const dbSeed = async () => {

  // 板登録
  firestore.collection('boards').add({
    name: 'ニュース速報'
  })
  firestore.collection('boards').add({
    name: 'ニュース速報+'
  })
  const board = await firestore.collection('boards').add({
    name: 'ニュー速VIP'
  })

  const boardId = board.id
  const threads = firestore.collection('boards').doc(boardId).collection('threads')

  // スレ作成
  const thread = await threads.add({
    title: 'おもしろスレ'
  })
  
  threads.add({
    title: '質問ある？'
  })

  const threadId = thread.id

  // スレ書き込み
  const FieldValue = require('firebase').firestore.FieldValue;
  threads.doc(threadId).collection('responses').add({
    author: "NO NAME",
    email: "noname@example.com",
    body: "1",
    createAt: FieldValue.serverTimestamp()
  })
  threads.doc(threadId).collection('responses').add({
    author: "ななしさん",
    email: "noname@example.com",
    body: "2get",
    createAt: FieldValue.serverTimestamp()
  })
  threads.doc(threadId).collection('responses').add({
    author: "xssマン",
    email: "noname@example.com",
    body: "<script>alert('hoge')</script>",
    createAt: FieldValue.serverTimestamp()
  })
  console.log('firestore のコンソールを確認してVIPのおもしろスレにレスが３つついてたらctrl+Cで終了してください')
}

dbSeed()