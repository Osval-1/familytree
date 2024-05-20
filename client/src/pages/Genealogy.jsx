import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import dTree from "d3-dtree";
import Button from "../components/Button";

// import _ from 'lodash';
// import * as d3 from "d3";

const Genealogy = () => {
  useEffect(()=>{
    let treeData = [{
      name: "Father",
      depthOffset: 1,
      marriages: [{
        spouse: {
          name: "Mother",
        },
        children: [{
          name: "Child",
        },{name:"child2"}]
      }],
      extra: {}
    }];

    dTree.init(treeData, {target: "#graph", height:800, width: 1200, debug:true});
  },[])

  return<>
  <div id="graph">
  </div>
  <Button label={"Add Member"} />
  </> 
};

export default Genealogy;
