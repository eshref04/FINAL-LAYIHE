const StudyModel = require("../models/study.model");

const study_controller = {
  getAll: async (req, res) => {
    try {
      const studys = await StudyModel.find();
      if (studys.length > 0) {
        res.status(200).json({
          message: "success",
          data: studys,
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
      const study = await StudyModel.findById(id);
      if (study) {
        res.status(200).json({
          message: "success",
          data: study,
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
      const response = await StudyModel.findByIdAndDelete(id);
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
      const response = await StudyModel.findByIdAndUpdate(id, req.body, { new: true });
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
      const study = new StudyModel(req.body);
      await study.save();
      res.status(201).json({
        message: "posted",
        data: study,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  }
};

module.exports = study_controller;
