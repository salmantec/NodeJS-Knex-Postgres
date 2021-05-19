const express = require("express");
const router = express.Router();

const queries = require("../db/queries");

// Middlewares - Start

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error("Invalid ID"));
}

function validSticker(sticker) {
  const hasTitle = typeof sticker.title == "string" && sticker.title.trim() != "";
  const hasURL = typeof sticker.url == "string" && sticker.url.trim() != "";
  const hasDescription = typeof sticker.description == "string" && sticker.description.trim() != "";
  const hasRating = !isNaN(sticker.rating);
  return hasTitle && hasURL && hasDescription && hasRating;
}

// Middlewares - End

// Routes - Start

router.get("/", (req, res) => {
  queries.getAll().then((result) => {
    res.json(result);
  });
});

router.get("/:id", isValidId, (req, res, next) => {
  queries.getOne(req.params.id).then((sticker) => {
    if (!sticker) next();
    res.json(sticker);
  });
});

router.post("/", (req, res, next) => {
  if (validSticker(req.body)) {
    queries.create(req.body).then((stickers) => {
      res.json(stickers[0]);
    });
  } else {
    next(new Error("Invalid sticker"));
  }
});

router.put("/:id", (req, res, next) => {
  if (validSticker(req.body)) {
    queries.update(req.params.id, req.body).then((stickers) => {
      res.json(stickers[0]);
    });
  } else {
    next(new Error("Invalid sticker"));
  }
});

router.delete("/:id", isValidId, (req, res, next) => {
  queries.delete(req.params.id).then(() => {
    res.json({ deleted: true });
  });
});

// Routes - End

module.exports = router;
