import express from "express";
import MenuItem from "../models/MenuItem.js";

const router = express.Router();

/* CREATE */
router.post("/", async (req, res) => {
  try {
    const item = new MenuItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* READ ALL */
router.get("/", async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
});

/* READ ONE */
router.get("/:id", async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

/* UPDATE */
router.put("/:id", async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch {
    res.status(400).json({ message: "Invalid data" });
  }
});

/* DELETE */
router.delete("/:id", async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

export default router;
