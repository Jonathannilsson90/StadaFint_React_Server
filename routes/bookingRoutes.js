const express = require("express");
const router = express.Router();
const controllers = require("../controllers/bookingControllers");

/// Router that does not handle ID's.
router.get("/allbookings", controllers.getAllBookings);
router.post("/createbooking", controllers.postBooking);
/// Router that handles ID's.
router.get("/specificbooking/:bookingId", controllers.getBookingById);
router.delete("/deletebooking/:bookingId", controllers.deleteBooking);
router.patch("/updatebooking/:bookingId", controllers.updateBooking);

module.exports = router;
