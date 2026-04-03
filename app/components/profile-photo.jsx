"use client";

import { useMemo, useState } from "react";

const photoCandidates = [
  "/Portfolio-Photo/Portfolio%20Photo.jpg",
  "/profile-photo.jpg",
  "/profile-photo.jpeg",
  "/profile-photo.png",
  "/profile-photo.webp",
  "/profile-photo.svg"
];

export default function ProfilePhoto() {
  const [index, setIndex] = useState(0);
  const src = useMemo(() => photoCandidates[index] ?? "/profile-photo.svg", [index]);

  return (
    <img
      src={src}
      alt="Portrait photo"
      className="profile-photo-image"
      onError={() => {
        if (index < photoCandidates.length - 1) {
          setIndex((current) => current + 1);
        }
      }}
    />
  );
}
