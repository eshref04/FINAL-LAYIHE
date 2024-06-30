const AttorneyModel = require("../models/attorney.model");

const attorney_controller = {
  getAll: async (req, res) => {
    try {
      const attorneys = await AttorneyModel.find();
      if (attorneys.length > 0) {
        res.status(200).json({
          message: "success",
          data: attorneys,
        });
      } else {
        res.status(204).json({
          message: "not found",
          data: [],
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const attorney = await AttorneyModel.findById(id);
      if (attorney) {
        res.status(200).json({
          message: "success",
          data: attorney,
        });
      } else {
        res.status(404).json({
          message: "not found",
          data: null,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await AttorneyModel.findByIdAndDelete(id);
      if (response) {
        res.status(200).json({
          message: "deleted",
          data: response,
        });
      } else {
        res.status(404).json({
          message: "not found",
          data: null,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await AttorneyModel.findByIdAndUpdate(id, req.body, { new: true });
      if (response) {
        res.status(200).json({
          message: "updated",
          data: response,
        });
      } else {
        res.status(404).json({
          message: "not found",
          data: null,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },

  post: async (req, res) => {
    try {
      const attorney = new AttorneyModel(req.body);
      await attorney.save();
      res.status(201).json({
        message: "posted",
        data: attorney,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  }
};

module.exports = attorney_controller;
