const express = require("express");
const router = express.Router();
const { postBussines, getBussines } = require("src/controllers/bussines");

router.get(`/orq/bussines/v1.0/all`, getBussines);
