import CardGroup from "./sub-components/CardGroup/CardGroup";
import SearchBar from "./sub-components/SearchBar/SearchBar";
import Title from "./sub-components/Title/Title";
import "./ResourceManager.css";
import { useContext } from "react";
import { MediaQueryContext } from "../../App";

const ResourceManager = () => {

  const matches = useContext(MediaQueryContext);

  return (
    <div
      className={`ResourceManager ${matches ? "ResourceManagerDesktop" : ""}`}
    >
      <Title />
      <SearchBar></SearchBar>
      <CardGroup></CardGroup>
      <CardGroup></CardGroup>
    </div>
  );
};

export default ResourceManager;
