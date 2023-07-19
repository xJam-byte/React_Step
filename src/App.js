import { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import "./App.scss";

function App() {
  const [st, setST] = useState({ x: 0, y: 0 });
  const [info, setInfo] = useState({});
  const click = (e) => {
    setST({
      x: e._sourceEvent.originalEvent.coords[0],
      y: e._sourceEvent.originalEvent.coords[1],
    });

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${st.x}&longitude=${st.y}&current_weather=true`
    )
      .then((resp) => resp.json())
      .then((res) => {
        setInfo({
          ...res.current_weather,
        });
      });
  };
  return (
    <div className="App">
      <YMaps>
        <div style={{ width: "500px", height: "500px", overflow: "hidden" }}>
          <Map
            onClick={click}
            defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
            width={500}
            height={500}
          >
            <div>
              <p>
                temp is{" "}
                <span
                  style={{
                    color:
                      info.temperature < 0 ? "lightblue" : "rgb(228, 215, 102)",
                  }}
                >
                  {info.temperature}°C
                </span>
                <br />
              </p>
              <p>
                windspeed is <span>{info.windspeed} km/h</span> <br />
              </p>
              <p>
                winddirection is <span>{info.winddirection}</span> <br />
              </p>
              <p>
                time is <span>{info.time}</span>
              </p>
            </div>
            <Placemark geometry={[st.x, st.y]}></Placemark>
          </Map>
        </div>
      </YMaps>
      ;
    </div>
  );
}

export default App;
