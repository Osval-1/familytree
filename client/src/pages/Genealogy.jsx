import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import dTree from "d3-dtree";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { getApi } from "../services/dataApi";
import _ from 'lodash';
import * as d3 from "d3";



const Genealogy = () => {
  // const data = getApi("http://localhost:8000/genealogy/family-tree")
  // console.log(data)
  
  const navigate = useNavigate()

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

    dTree.init(treeData, {target: "#graph", height:800, width: 1200, debug:false,callbacks:{
      nodeClick:(id)=>{
        console.log(id)
        navigate(`/AddParents/${id}`)}
    }});
  },[])



  return<div className="w-screen h-screen absolute">
  <div id="graph">
  </div>
  </div> 
};

export default Genealogy;
