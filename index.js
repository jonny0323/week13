const express = require("express")
// import 하는 것
const session = require('express-session');
const app = express()
//express 열어주는 것

//use는 middleware를 등록할때 사용함.
//express.json()는 middleware 임
app.use(express.json())
// 원래 json 은 원래 통신에서 사용할 수 없다.
// object 자료구조임.
// 통신에서 사용할 수 없는 자료형 or 자료구조는 parser 가 필요함.
// express.json() 을 통해서 보내는 것이 가능하다. 자동으로 변환시켜준다.

app.use(session({
    secret: 'your-secret-key', // 반드시 고유한 비밀키로 변경하세요.
    resave: false, // 세션이 수정되지 않더라도 세션을 다시 저장할지 여부
    saveUninitialized: true, // 초기화되지 않은 세션을 저장할지 여부
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 쿠키 만료 시간 (1일)
    }
}));





app.get("/users/me", (req, res) => {

    //Session 이던 DB던 이런 곳들에게서 가져온 데이터라고 가정
    const userName = "이태준"
    const userEmail = "cono@stageus.co.kr"

    const result = {
        "name": userName,
        "email": userEmail

    }


    res.send(result)
})



//query 로 lang 이 있었다고 가정

// app.get("/articles/:idx/detail", (req, res) => {
//     const articleIdx = req.params.idx
//     const lang = req.query.lang
//     const id = req.body.id
// })
// params 를 받는 방법이다.

// // app.post~~
// // app.delete~~ 모두 서로 다른 api 이다



// //파일을 반환하는 API 만들기
// //req : 프론트엔드에서 백으로 넘어오는 요청
// //res : 백엔드에서 프론트로 응답하는 것
app.get("/index-page", (req, res) => {

    res.sendFile(`${__dirname}/src/page/index.html`)
})

//파일에 직접 접근 하는거를 막아줌
//api를 안만들어 놓은거는 들어올 수가 없다.




const userRouter = require("./src/router/users")
app.use("/users", userRouter)

const articleRouter = require("./src/router/articles")
app.use("/articles", articleRouter)

const commentRouter = require("./src/router/comments")
app.use("/comments", commentRouter)

app.listen(8000, () => {
    console.log("8000번 포트에서 웹 서버 실행")
})
