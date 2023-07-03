"use client";

import { useState, useEffect } from "react";

export default function CalcPrice() {
  //   const [pieces, setPieces] = useState(1);
  //   const [weight, setWeight] = useState(0.5);
  //   const [length, setLength] = useState(null);
  //   const [width, setWidth] = useState(null);
  //   const [height, setHeight] = useState(null);
  //   const [docs, setDocs] = useState(false);
  //   const [volume, setVolume] = useState(null);
  const [params, setParams] = useState({
    pieces: 1,
    weight: 0.5,
    length: null,
    width: null,
    height: null,
    docs: false,
    volume: 0,
  });
  const { pieces, weight, length, width, height, docs, volume } = params;

  function normalizedWeight(dataWeight) {
    return (Math.ceil(dataWeight * 2) / 2).toFixed(1);
  }

  //   function volumeWeight(length = 0, width = 0, height = 0, devider = 5000) {
  //     const volumeWeight = (length * width * height) / devider;
  //     return setVolume(normalizedWeight(volumeWeight));
  //   }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newValue = { [name]: value };
    setParams((prev) => {
      return { ...prev, ...newValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="pieces"
        value={pieces}
        onChange={handleChange}
      />
      <input
        type="number"
        name="weight"
        value={weight}
        onChange={handleChange}
      />
      <input
        type="number"
        name="length"
        value={length}
        onChange={handleChange}
      />
      <input type="number" name="width" value={width} onChange={handleChange} />
      <input
        type="number"
        name="height"
        value={height}
        onChange={handleChange}
      />
      <input type="checkbox" name="docs" value={docs} onChange={handleChange} />
      <input
        type="number"
        name="volume"
        value={volume}
        onChange={handleChange}
      />
    </form>
  );
}
