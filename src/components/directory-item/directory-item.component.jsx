import { useNavigate } from "react-router-dom";
import {
  DirectoryItemBgImg,
  DirectoryItemBodyCon,
  DirectoryItemCon,
} from "./directory-item.style";

const DirectoryItem = ({ directory }) => {
  const { title, imageUrl, routeName } = directory;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(routeName);

  return (
    <DirectoryItemCon>
      <DirectoryItemBgImg imageUrl={imageUrl} />
      <DirectoryItemBodyCon onClick={onNavigateHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBodyCon>
    </DirectoryItemCon>
  );
};

export default DirectoryItem;
