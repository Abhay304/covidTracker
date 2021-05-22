import React, { Suspense, useEffect, useState } from 'react';
import img from '../vacc_img5.jpg';
import Full from './FullLoad';

import {
  Jumbotron,
  Container,
  ListGroupItem,
  Card,
  ListGroup,
} from 'react-bootstrap';
import axios from 'axios';
import { makeApiRequest } from '../Utils';
import Loading from './Loading';

const DataMapping = React.lazy(() => import('./DataMapping'));

function Dashboard() {
  const [chikkaballapur, setchikkaballapur] = useState([]);
  const [kolar, setkolar] = useState([]);
  const [bangaloreUrban, setBangaloreUrban] = useState([]);
  const [bangaloreRural, setBangaloreRural] = useState([]);
  const [bbmp, setBbmp] = useState([]);
  const [vaccineName, setvaccineName] = useState('COVISHIELD');
  const [agelimit, setAgeLimit] = useState(45);
  const [isLoad, setisLoad] = useState(true);

  const bnImg = {
    // backgroundImage: `url(${img})`,
    height: '280px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no - repeat',
    backgroundSize: 'cover',
    position: 'relative',
  };

  /// Kyum here
  useEffect(() => {
    // const callApi = setInterval(() => {
    hideBlankData();
    makeApiRequest()
      .then(
        axios.spread((...responses) => {
          // console.log('Hi in 1st then');
          // console.log(responses[0].data.centers);
          // console.log(responses[1]);
          // console.log(responses[2]);
          // console.log(responses[3]);
          // console.log(responses[4]);
          setchikkaballapur(responses[0].data.centers);
          setkolar(responses[1].data.centers);
          setBangaloreUrban(responses[2].data.centers);
          setBangaloreRural(responses[3].data.centers);
          setBbmp(responses[4].data.centers);
          // console.log(chikkaballapur);
          // console.log(kolar);
          // console.log(bangaloreUrban);
          // console.log(bangaloreRural);
          // console.log(bbmp);
          hideBlankData();
        })
      )
      .then(() => {
        // console.log('Hi in 2nd then');
        hideBlankData();
        isLoad &&
          setTimeout(() => {
            setisLoad(false);
            hideBlankData();
          }, 10000);
      })
      .catch((errors) => {
        // console.log('Hi in catch');
        hideBlankData();
        isLoad &&
          setTimeout(() => {
            setisLoad(false);
            hideBlankData();
          }, 10000);
        console.log('Network Error Occured');
      });

    // setisLoad(false);
    // console.log(isLoad);
    //   }, 3000);

    return () => {
      //   clearInterval(callApi);
      setchikkaballapur([]);
      setkolar([]);
      setBangaloreUrban([]);
      setBangaloreRural([]);
      setBbmp([]);
      hideBlankData();
    };
    // eslint-disable-next-line
  }, [vaccineName, agelimit]);

  const hideBlankData = () => {
    for (
      var i = 0;
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
  // eslint-disable-next-line
  if (isLoad) {
    return <Full />;
  }
  // console.log('Hi in render');
  return (
    <Container>
      <Card>
        <Jumbotron>
          <Card.Img variant="top" style={bnImg} src={img} />
          <Card.Body>
            <Card.Title>
              <h1 className="center-align">Covid Vaccination Data</h1>
            </Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              Please select Vaccine dose and age to know whether vaccine is
              available in your zone!!
            </Card.Text>

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
                <input type="radio" value="COVAXIN" name="vaccine" />
                COVAXIN
              </div>

              <div onChange={setmaxAge}>
                <input type="radio" value="45" name="ageLimit" defaultChecked />
                45+
                <br></br>
                <input type="radio" value="18" name="ageLimit" />
                18+
              </div>
            </div>
          </Card.Body>

          <ListGroup className="list-group-flush">
            <Suspense fallback={<Loading />}>
              <section>
                {/* {bangaloreRural.length > 0 && (
              <> */}
                <ListGroupItem>
                  <h3 className="center-align">Bangalore Rural</h3>
                </ListGroupItem>

                <DataMapping
                  maxage={agelimit}
                  vaccine={vaccineName}
                  district={bangaloreRural}
                  hideMethod={hideBlankData}
                />

                {/* </>
            )} */}
              </section>
            </Suspense>
            {/* <hr></hr> */}
            <Suspense fallback={<Loading />}>
              <section>
                {/* {bangaloreUrban.length > 0 && (
              <> */}
                <ListGroupItem>
                  <h3 className="center-align">Bangalore Urban</h3>
                </ListGroupItem>

                <DataMapping
                  maxage={agelimit}
                  vaccine={vaccineName}
                  district={bangaloreUrban}
                  hideMethod={hideBlankData}
                />

                {/* </>
            )} */}
              </section>
            </Suspense>
            {/* <hr></hr> */}
            <Suspense fallback={<Loading />}>
              <section>
                {/* {bbmp.length > 0 && (
              <> */}
                <ListGroupItem>
                  <h3 className="center-align">BBMP</h3>
                </ListGroupItem>

                <DataMapping
                  maxage={agelimit}
                  vaccine={vaccineName}
                  district={bbmp}
                  hideMethod={hideBlankData}
                />

                {/* </>
            )} */}
              </section>
            </Suspense>
            {/* <hr></hr> */}
            <Suspense fallback={<Loading />}>
              <section>
                {/* {kolar.length > 0 && (
              <> */}
                <ListGroupItem>
                  <h3 className="center-align">kolar</h3>
                </ListGroupItem>

                <DataMapping
                  maxage={agelimit}
                  vaccine={vaccineName}
                  district={kolar}
                  hideMethod={hideBlankData}
                />

                {/* </>
            )} */}
              </section>
            </Suspense>
            {/* <hr></hr> */}
            <Suspense fallback={<Loading />}>
              <section>
                {/* {chikkaballapur.length > 0 && (
              <> */}
                <ListGroupItem>
                  <h3 className="center-align">Chikkaballapur</h3>
                </ListGroupItem>

                {/* <ErrorBoundary> */}

                <DataMapping
                  maxage={agelimit}
                  vaccine={vaccineName}
                  district={chikkaballapur}
                  hideMethod={hideBlankData}
                />

                {/* </ErrorBoundary> */}
                {/* </>
            )} */}
              </section>
            </Suspense>
          </ListGroup>
          {/* {console.log('Hi in render 1')} */}
        </Jumbotron>
      </Card>
    </Container>
  );
}

export default React.memo(Dashboard);
