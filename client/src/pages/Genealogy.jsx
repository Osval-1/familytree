import React, { useState, useEffect, useContext } from "react";
import dTree from "d3-dtree";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { getApi } from "../services/dataApi";
import _ from "lodash";
import * as d3 from "d3";

const Genealogy = () => {
  const [genealogyData, setGenealogyData] = useState("");
  const navigate = useNavigate();

  const parseGenealogyData = () => {
    //dtree-seed only accepts id that are numbers so we convert remove all non-numeric
    // and convert ids to numbers
    const convertId = (id) => {
      if (!id) {
        return null;
      }
      const converted = id.replace(/\D/g, ""); 
      return parseInt(converted);
    };
    // parse data to fit dtree-seed's template
    const parsedGenealogy = genealogyData.map((item) => {
      return {
        id: convertId(item._id),
        name: item.name,
        email: item.email,
        phone: item.phoneNumber,
        placeOfResidence: item.placeOfResidence,
        dateOfBirth: item.dateOfBirth,
        parent1Id: convertId(item.father),
        parent2Id: convertId(item.mother),
      };
    });
    return parsedGenealogy;
  };

  const data = {};
  useEffect(() => {
    const getData = async () => {
      const { response, apiData } = await getApi(
        "http://localhost:8000/genealogy/family-tree"
      );
      setGenealogyData(apiData);
    };
    getData();
  }, []);

  useEffect(() => {
    if (!genealogyData) {
      return;
    }
    const parsedData = parseGenealogyData();
    const targetId = parsedData[0].id;
    const seededData = dSeeder.seed(parsedData, targetId);

    dTree.init(seededData, {
      target: "#graph",
      height: 800,
      width: 1200,
      debug: false,
      callbacks: {
        nodeClick: (id) => {
          console.log(id);
        },
      },
    });
  }, [genealogyData]);

  return (
    <div className="w-screen h-screen absolute">
      <div id="graph"></div>
    </div>
  );
};

export default Genealogy;
