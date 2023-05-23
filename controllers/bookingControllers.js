const booking = require("../models/Bookingmodel");
const User = require('../models/Usermodel');
const getAllBookings = async (req, res) => {
  try {
    res.json(await booking.find());
  } catch (error) {
    res.json({ message: error });
  }
};

const getBookingById = async (req, res) => {
  try {
    res.json(await booking.findOne({ _id: req.params.bookingId }));
  } catch (error) {
    res.json({ message: error });
  }
};
const postBooking = async (req, res) => {
  try {
    const { customername, cleanername, time, level, date } = req.body;

    // Retrieve the list of cleaners from the database
    const cleaners = await User.find({ isCustomer: false });

    // Find the selected cleaner
    const selectedCleaner = cleaners.find(cleaner => cleaner.name === cleanername);

    if (!selectedCleaner) {
      return res.status(400).json({ message: "Invalid cleaner name" });
    }

    // Check if the selected time slot is already booked
    const existingBooking = await booking.findOne({ cleanername, time, date });

    if (existingBooking) {
      return res.status(409).json({ message: "This time is already booked" });
    }

    // Create the booking
    const createBooking = new booking({
      customername,
      cleanername,
      time,
      level,
      status: false,
      date
    });
    await createBooking.save();

    res.json({ message: "Booking created successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteBooking = async (req, res) => {
  try {
    res.json(await booking.deleteOne({ _id: req.params.bookingId }));
  } catch (error) {
    res.json({ message: error });
  }
};

const updateBooking = async (req, res) => {
  try {
    res.json(
      await booking.updateOne(
        { _id: req.params.bookingId },
        {
          $set: {
            customername: req.body.customername,
            cleanername: req.body.cleanername,
            time: req.body.time,
            level: req.body.level,
            status: req.body.status,
            date: req.body.date,
          },
        }
      )
    );
  } catch {
    res.json({ message: error });
  }
};

module.exports = {
  getAllBookings,
  postBooking,
  getBookingById,
  deleteBooking,
  updateBooking,
};
