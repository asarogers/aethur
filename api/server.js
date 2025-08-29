/**
 * Mock Motor Control API for RehaGrip Device.
 *
 * Node.js/Express version of the FastAPI mock.
 * Returns dummy values so the React frontend can be tested without hardware.
 *
 * Author: Asa Rogers
 * Date: 2025-08-29
 */

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// ----------------- State -----------------
let state = {
  position: 0.0,   // degrees
  target: 0.0,
  velocity: 50.0,
  load: 0.0,
  moving: false,
  locked: false,
  torque: true,
  emergency: false,
  hand: "right",
  center_tick: 2048,
};

// ----------------- Presets -----------------
let presets = [
  { name: "Neutral", pos: 0 },
  { name: "Open", pos: 45 },
  { name: "Closed", pos: -45 },
];

// ----------------- Endpoints -----------------
app.post("/api/motor/move", (req, res) => {
  if (state.locked || !state.torque || state.emergency) {
    return res.status(400).json({ error: "Cannot move: locked/torque/emergency" });
  }
  const { position, velocity } = req.body;
  state.target = position;
  state.velocity = velocity ?? state.velocity;
  state.position = position; // instantly "moves" in mock
  res.json({ ok: true, position: state.position, velocity: state.velocity });
});

app.post("/api/motor/status", (req, res) => {
  res.json({
    position: state.position,
    center_tick: state.center_tick,
    load: state.load,
    moving: state.moving,
    locked: state.locked,
    torque: state.torque,
    emergency: state.emergency,
    hand: state.hand,
  });
});

app.post("/api/motor/center", (req, res) => {
  state.center_tick = 2000;
  res.json({ ok: true, center_tick: state.center_tick });
});

app.get("/api/motor/presets", (req, res) => {
  res.json({ ok: true, presets, count: presets.length });
});

app.post("/api/motor/presets", (req, res) => {
  presets = req.body.presets || presets;
  res.json({ ok: true, presets });
});

app.post("/api/motor/presets/reload", (req, res) => {
  // Just return current in mock
  res.json({ ok: true, presets });
});

app.post("/api/motor/recenter", (req, res) => {
  state.center_tick = 2048;
  res.json({ ok: true, center_tick: state.center_tick });
});

app.post("/api/motor/hand", (req, res) => {
  const { hand } = req.body;
  if (hand !== "left" && hand !== "right") {
    return res.status(400).json({ error: "hand must be left/right" });
  }
  state.hand = hand;
  res.json({ ok: true, hand: state.hand });
});

app.post("/api/motor/lock", (req, res) => {
  state.locked = req.body.locked;
  res.json({ ok: true, locked: state.locked });
});

app.post("/api/motor/torque", (req, res) => {
  state.torque = req.body.torque;
  res.json({ ok: true, torque: state.torque });
});

app.post("/api/motor/emergency", (req, res) => {
  state.emergency = req.body.stop;
  if (state.emergency) state.torque = false;
  res.json({ ok: true, emergency: state.emergency });
});

// ----------------- Run -----------------
app.listen(PORT, () => {
  console.log(`🚀 Mock RehaGrip server running at http://localhost:${PORT}`);
});
