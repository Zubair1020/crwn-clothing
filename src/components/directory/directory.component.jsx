import React from "react";
import DirectoryData from "../../directory-data.json";
import "./directory.style.scss";
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = () => (
  <div className="directory-container">
    {DirectoryData.map((directory) => (
      <DirectoryItem
        key={directory.id}
        directory={directory}
      />
    ))}
  </div>
);

export default Directory;
