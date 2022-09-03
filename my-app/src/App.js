import React from "react";
import Main from "./components/Main";

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [targetData, setTargetData] = React.useState(data[0]);

  const fetchURL = async () => {
    try {
      const res = await fetch("https://course-api.com/react-tabs-project");
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchURL();
  }, []);

  if (loading === true) {
    return <h1 className="loading">Loading...</h1>;
  }

  function handleData(id) {
    data.map((el) => {
      if (el.id === id) {
        setTargetData(el);
      }
    });
  }

  const dataTitles = data.map((el) => {
    return (
      <h1 className="company-title" onClick={() => handleData(el.id)}>
        {el.company}
      </h1>
    );
  });

  // const dataElements = data.map((el) => {
  //   return <Main key={el.id} data={el} />;
  // });

  return (
    <div className="container">
      <h1 className="title">Experience</h1>
      <div className="section">
        <div className="section-slide">{dataTitles}</div>

        <div className="section-body">
          <Main data={!targetData ? data[0] : targetData} />
        </div>
        {/* <div className="section-body">{dataElements}</div> */}
      </div>
    </div>
  );
}
