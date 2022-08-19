import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Tree, TreeNode } from "react-organizational-chart";
import { DATASET } from "./treeData";

const StyledNode = styled.button`
  background-color: green
  color: white;
  padding: 5px;
  display: inline-block;
  border: 1px solid red;
`;

const Button = styled.button`
 margin: 20px 0px 40px 0px;
`;


const MyTree = () => {
  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false)

  const [selectedNode, setSelectedNode] = React.useState([]);
  const onNodeClick = (e) => {
    if (e.target.style.backgroundColor === "red") {
      e.target.style.backgroundColor = "red";
      e.target.style.color = "white";
      return;
    }
    setSelectedNode([...selectedNode, document.activeElement.innerText]);
    setColor(e)
  }

  const setColor = (e) => {
    e.target.style.backgroundColor = "red";
    e.target.style.color = "white";
  }

  useEffect(() => {
  }, [one, two, three, four])

  const alertMe = () => {
    if (selectedNode.length > 0) {
      alert("You have selected " + selectedNode);
    }
  }

  return (
    <>
      <Button onClick={() => { alertMe() }}>Alert Selected Nodes</Button>
      <Tree
        lineWidth={"3px"}
        lineColor={"green"}
        label={<StyledNode style={{backgroundColor: (one===true)&&'red'}} onClick={(e) => {
          onNodeClick(e)
          setOne(true)
        }}>Main Node</StyledNode>}
      >
        {DATASET.children.map((node, index) => (
          <TreeNode key={node.name} label={<StyledNode style={{backgroundColor: (one===true)&&'red'}} onClick={(e) => {
            onNodeClick(e)
            setTwo(true)
          }}>{node.name}</StyledNode>}>
            {node.children.map((node, index) => (
              <TreeNode key={node.name} label={<StyledNode style={{backgroundColor: ((two)===true)&&'green'}} onClick={(e) => {
                onNodeClick(e)
                setThree(true)
              }}>{node.name}</StyledNode>}>
                {node.children.map((node, index) => (
                  <TreeNode key={node.name} label={<StyledNode style={{backgroundColor: ((three)===true)&&'brown'}} onClick={(e) => {
                    onNodeClick(e)
                    setFour(true)
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
