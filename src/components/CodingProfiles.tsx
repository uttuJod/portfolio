import React from "react";

import "../assets/styles/CodingProfiles.scss";

const GITHUB_USERNAME = "uttuJod";
const LEETCODE_USERNAME = "AkoZ9ucmUQ";

const GITHUB_PROFILE_URL =
  `https://github.com/${GITHUB_USERNAME}`;

const LEETCODE_PROFILE_URL =
  `https://leetcode.com/u/${LEETCODE_USERNAME}/`;

const GITHUB_HEATMAP_URL =
  `https://ghchart.rshah.org/39d353/${GITHUB_USERNAME}`;

const LEETCODE_HEATMAP_URL =
  `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}` +
  `?theme=dark` +
  `&font=Inter` +
  `&ext=heatmap` +
  `&border=0` +
  `&radius=8` +
  `&animation=false`;

function CodingProfiles() {
  return (
    <section
      className="coding-profiles-section"
      id="coding-profiles"
    >
      <div className="coding-profiles-inner">
        <h1>Coding Activity</h1>

        <div className="heatmap-container">
          <div className="heatmap-card leetcode-card">
            <h2>LeetCode</h2>

            <a
              href={LEETCODE_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Utkarsh Tiwari's LeetCode profile"
            >
              <img
                src={LEETCODE_HEATMAP_URL}
                alt="Utkarsh Tiwari LeetCode activity heatmap"
                className="leetcode-heatmap"
                loading="lazy"
              />
            </a>
          </div>

          <div className="heatmap-card github-card">
            <h2>GitHub</h2>

            <div className="github-image-wrapper">
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Utkarsh Tiwari's GitHub profile"
              >
                <img
                  src={GITHUB_HEATMAP_URL}
                  alt="Utkarsh Tiwari GitHub contribution heatmap"
                  className="github-heatmap"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodingProfiles;