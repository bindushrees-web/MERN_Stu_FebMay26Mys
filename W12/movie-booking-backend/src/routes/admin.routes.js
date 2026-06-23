const express = require("express");


const router = express.Router();


const adminController = require("../controllers/admin.controller");


const { protect } = require("../middleware/auth.middleware");


const { authorize } = require("../middleware/role.middleware");


/*
-----------------------------------------
ADMIN DASHBOARD
-----------------------------------------
*/


router.get(
  "/dashboard",
  protect,
  authorize("admin"),
  adminController.getDashboardStats,
);


module.exports = router;
