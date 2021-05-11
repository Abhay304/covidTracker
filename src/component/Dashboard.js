import React, { useEffect, useState } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import axios from 'axios';
import { makeApiRequest } from '../Utils';
import DataMapping from './DataMapping';
function Dashboard() {
  const [chikkaballapur, setchikkaballapur] = useState([]);
  const [kolar, setkolar] = useState([]);
  const [bangaloreUrban, setBangaloreUrban] = useState([]);
  const [bangaloreRural, setBangaloreRural] = useState([]);
  const [bbmp, setBbmp] = useState([]);
  const [vaccineName, setvaccineName] = useState('COVISHIELD');
  const [agelimit, setAgeLimit] = useState(45);
  /// Kyum here
  useEffect(() => {
    // const callApi = setInterval(() => {
    makeApiRequest()
      .then(
        axios.spread((...responses) => {
          console.log(responses[0]);
          console.log(responses[1]);
          console.log(responses[2]);
          console.log(responses[3]);
          console.log(responses[4]);
          setchikkaballapur(responses[0].data.centers);
          setkolar(responses[1].data.centers);
          setBangaloreUrban(responses[2].data.centers);
          setBangaloreRural(responses[3].data.centers);
          setBbmp(responses[4].data.centers);
        })
      )
      .then(() => {
        // setTimeout(hideBlankData, 500);
        hideBlankData();
      })
      .catch((errors) => {
        console.log('Network Error Occured');
      });
    //   }, 3000);

    return () => {
      //   clearInterval(callApi);
      setchikkaballapur([]);
      setkolar([]);
      setBangaloreUrban([]);
      setBangaloreRural([]);
      setBbmp([]);
    };
  }, [vaccineName]);

  const hideBlankData = () => {
    for (
      let i = 0;
      i < document.querySelectorAll('.card-inner-body').length;
      i++
    ) {
      if (document.querySelectorAll('.card-inner-body')[i].innerText === '') {
        document.querySelectorAll('.card-inner-body')[
          i
        ].parentElement.parentElement.style.display = 'none';
      }
    }
  };

  const setVaccineName = (e) => {
    setvaccineName(e.target.value);
  };

  const setmaxAge = (e) => {
    setAgeLimit(parseInt(e.target.value));
  };

  return (
    <Container>
      <Jumbotron>
        <h1 className="center-align">Covid Vaccination Data</h1>
        <div className="filters">
          <div onChange={setVaccineName}>
            <input
              type="radio"
              value="COVISHIELD"
              name="vaccine"
              defaultChecked
            />
            COVISHIELD
            <br></br>
            <input type="radio" value="COVAXIN" name="vaccine" /> COVAXIN
          </div>

          <div onChange={setmaxAge}>
            <input type="radio" value="45" name="ageLimit" defaultChecked />
            45+
            <br></br>
            <input type="radio" value="18" name="ageLimit" /> 18+
          </div>
        </div>
        <section>
          {bangaloreRural.length > 0 && (
            <>
              <h3 className="center-align">Bangalore Rural</h3>
              <DataMapping
                maxage={agelimit}
                vaccine={vaccineName}
                district={bangaloreRural}
              />
            </>
          )}
        </section>
        <hr></hr>
        <section>
          {bangaloreUrban.length > 0 && (
            <>
              <h3 className="center-align">Bangalore Urban</h3>
              <DataMapping
                maxage={agelimit}
                vaccine={vaccineName}
                district={bangaloreUrban}
              />
            </>
          )}
        </section>
        <hr></hr>
        <section>
          {bbmp.length > 0 && (
            <>
              <h3 className="center-align">BBMP</h3>
              <DataMapping
                maxage={agelimit}
                vaccine={vaccineName}
                district={bbmp}
              />
            </>
          )}
        </section>
        <hr></hr>
        <section>
          {kolar.length > 0 && (
            <>
              <h3 className="center-align">kolar</h3>
              <DataMapping
                maxage={agelimit}
                vaccine={vaccineName}
                district={kolar}
              />
            </>
          )}
        </section>
        <hr></hr>
        <section>
          {chikkaballapur.length > 0 && (
            <>
              <h3 className="center-align">Chikkaballapur</h3>
              <DataMapping
                maxage={agelimit}
                vaccine={vaccineName}
                district={chikkaballapur}
              />
            </>
          )}
        </section>
      </Jumbotron>
    </Container>
  );
}

export default React.memo(Dashboard);
