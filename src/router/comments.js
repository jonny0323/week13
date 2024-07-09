const router = require("express").Router()

// get / articles
router.post("/comments", (req, res) => {
    const content = req.body.content
    const board_idx = req.body.board_idx

    res.status(200).json({
        ok: true
    });
})

router.get("/:boardIdx", (req, res) => {
    const boardIdx = req.params.boardIdx

    res.status(200).json({
        "id": "content",
        "content": "content"
    });
})
// get / articles/:idx/detail

// 얘가 2깊이임
router.put("/:idx", (req, res) => {
    const idx = req.params.idx
    const content = req.body.content


    res.status(200).json({
        ok: true
    });
})


// POST / articles
router.delete("/:idx", (req, res) => {
    const idx = req.params.idx
    res.status(200).json({
        ok: true
    });
})

router.get("/:idx/like", (req, res) => {
    const commentIdx = req.params.commentIdx
    res.status(200).json({
        ok: true
    });
})

module.exports = router


// 명세서 짜본거 모두다 api 로 변환 그리고 1주차때 해온거 모두다 명세서로 옮기자 api에서 값 받아오는 거 까지 다 선언해주라
// reqest respose 까지 채워서 오기
// postman 이라는 프로그램이 있다 사용방법알아오고 api 테스트까지 해오기
// jsp 에서 세션 했었으니 express session 이 있다 npm 으로 설치함.
// 그거까지 쓸수 있다면 써오기 시간남으면
// jsp 에서 마리아디비 연결할때 명령어 패키지로 하기 maridb 패키지 일듯 npm install mariadb 
