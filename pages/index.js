import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
const Index = () => {
  const [data, setData] = useState([]);
  const loadedata = async () => {
    var result = await axios.get(`http://localhost:3001/player/value/1`);
    console.log("result = ", result.data);
    setData(result.data);
  };
  useEffect(() => {
    loadedata();
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Index Page</title>
      </Head>
      {data.map((datas, index) => {
              return (
                <div key={index}>
                  id = {datas.id}
                  <br></br>
                  name = {datas.name}
                  <br></br>
                  num = {datas.num}
                  <br></br>
                  teamid = {datas.teamId}
                  <br></br>
                  team = {datas.team.name}
                </div>
              )
            })}
    </div>
  );
};
export default Index;
