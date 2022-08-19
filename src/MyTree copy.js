import React from "react";
import styled from "@emotion/styled";
import { Tree, TreeNode } from "react-organizational-chart";
import { DATASET } from "./treeData";

const StyledNode = styled.button`
  background-color: ${props => props.selected && "red"};
  color: ${props => props.selected && "white"};
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

const Button = styled.button`
 margin: 20px 0px 40px 0px;
`;


const MyTree = () => {
  const [selectedNode, setSelectedNode] = React.useState([]);
  const onNodeClick = (e) => {
    if (e.target.style.backgroundColor === "red") {
      e.target.style.backgroundColor = "white";
      e.target.style.color = "black";
      return;
    }
    setSelectedNode([...selectedNode, document.activeElement.innerText]);
    e.target.style.backgroundColor = "red";
    e.target.style.color = "white";
  }

 const alertMe = () => {
  if(selectedNode.length > 0) {
    alert("You have selected " + selectedNode);
  }
 }

  return (
<>
<Button onClick={()=>{alertMe()}}>Alert Selected Nodes</Button>
<Tree
      lineWidth={"3px"}
      lineColor={"green"}
      label={<StyledNode onClick={(e) => {
        onNodeClick(e)
      }}>Main Node</StyledNode>}
    >
      {DATASET.children.map((node, index) => (
        <TreeNode key={node.name} label={<StyledNode onClick={(e) => {
          onNodeClick(e)
        }}>{node.name}</StyledNode>}>
          {node.children.map((node, index) => (
            <TreeNode key={node.name} label={<StyledNode onClick={(e) => {
              onNodeClick(e)
            }}>{node.name}</StyledNode>}>
              {node.children.map((node, index) => (
                <TreeNode key={node.name} label={<StyledNode onClick={(e) => {
                  onNodeClick(e)
                }}>{node.name}</StyledNode>} />
              ))}
            </TreeNode>
          ))}
        </TreeNode>
      ))}
    </Tree>
</>
  )
};

export default MyTree;
