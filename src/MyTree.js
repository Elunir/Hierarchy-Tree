import React from "react";
import styled from "@emotion/styled";
import { Tree, TreeNode } from "react-organizational-chart";
import { DATASET } from "./treeData";
const StyledNode = styled.button`
  padding: 5px;
  display: inline-block;
  border: 1px solid red;
  &:focus {
    border: 3px solid red;
  }
  &:hover {
    border: 3px solid red;
  }
`;


const MyTree = () => {
  const [selectedNode, setSelectedNode] = React.useState([]);
  const onNodeClick = (e) => {
    if (e.target.style.backgroundColor === "red") {
      e.target.style.backgroundColor = "white";
      e.target.style.color = "black";
      return;
    }
    alert(selectedNode>0 ?  "You have selected " + selectedNode  : "You have selected " + document.activeElement.innerText);
    setSelectedNode([...selectedNode, document.activeElement.innerText]);
    e.target.style.backgroundColor = "red";
    e.target.style.color = "white";
  }

  return (
    <Tree
      lineWidth={"3px"}
      lineColor={"green"}
      label={<StyledNode onClick={(e) => { onNodeClick(e) }}>Main Node</StyledNode>}
    >
      {DATASET.children.map((node, index) => (
        <TreeNode key={node.name} label={<StyledNode onClick={(e) => { onNodeClick(e) }}>{node.name}</StyledNode>}>
          {node.children.map((node, index) => (
            <TreeNode key={node.name} label={<StyledNode onClick={(e) => { onNodeClick(e) }}>{node.name}</StyledNode>}>
              {node.children.map((node, index) => (
                <TreeNode key={node.name} label={<StyledNode onClick={(e) => { onNodeClick(e) }}>{node.name}</StyledNode>} />
              ))}
            </TreeNode>
          ))}
        </TreeNode>
      ))}
    </Tree>
  )
};

export default MyTree;
