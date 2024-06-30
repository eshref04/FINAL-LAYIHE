const blog_controller=require("./blog.controller")
const tag_controller=require("./tag.controller")

const user_controller=require("./user.controller")
const study_controller=require("./study.controller")
const attorney_controller=require("./attorney.controller")

const product_controller=require("./product.controller")




const controller={
    blog:blog_controller,
    attorney:attorney_controller,
    study:study_controller,
    tag:tag_controller,
    user:user_controller,
    product:product_controller
}

module.exports=controller