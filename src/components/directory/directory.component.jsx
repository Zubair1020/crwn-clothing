import DirectoryData from "./directory-data.json";
import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryCon } from "./directory.style";

const Directory = () => (
  <DirectoryCon>
    {DirectoryData.map((directory) => (
      <DirectoryItem
        key={directory.id}
        directory={directory}
      />
    ))}
  </DirectoryCon>
);

export default Directory;
