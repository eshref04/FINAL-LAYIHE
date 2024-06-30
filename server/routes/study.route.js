const exoress=require("express");
const study_router=exoress.Router();
const controller=require("../controllers/index")



study_router.get("/api/studys",controller.study.getAll)
study_router.get("/api/studys/:id",controller.study.getOne)
study_router.delete("/api/studys/:id",controller.study.delete)
study_router.patch("/api/studys/:id",controller.study.update)
study_router.post("/api/studys",controller.study.post)


module.exports=study_router