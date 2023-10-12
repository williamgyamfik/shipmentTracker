import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import CardTable from "./CardTable";

const MainPage = () => {
  const [shipmentData, setShipmentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(" http://localhost:5173/Shipments.txt");

      setShipmentData(res.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <CardTable shipmentData={shipmentData} />
    </div>
  );
};

export default MainPage;
