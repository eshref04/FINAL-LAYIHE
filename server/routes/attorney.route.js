const exoress=require("express");
const attorney_router=exoress.Router();
const controller=require("../controllers/index")



attorney_router.get("/api/attorneys",controller.attorney.getAll)
attorney_router.get("/api/attorneys/:id",controller.attorney.getOne)
attorney_router.delete("/api/attorneys/:id",controller.attorney.delete)
attorney_router.patch("/api/attorneys/:id",controller.attorney.update)
attorney_router.post("/api/attorneys",controller.attorney.post)


module.exports=attorney_router