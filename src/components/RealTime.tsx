import downloadStaticData from "../services/realTimeService";

export const RealTime = () => {
  const handleDownloadClick = async () => {
    const operator = "sl";
    try {
      const data = await downloadStaticData(operator);
    } catch (error) {}
  };

  return (
    <div>
      <h1>Realtidsinformation</h1>
      <button onClick={handleDownloadClick}>Ladda ner GTFS-data</button>
    </div>
  );
};

export default RealTime;
