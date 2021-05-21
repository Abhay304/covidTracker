import React from 'react';
import { Card } from 'react-bootstrap';
function DataMapping(props) {
  // useEffect(() => {
  //   console.log(props.vaccine);
  // }, [props.vaccine]);

  return (
    <>
      {props.district.map((data) => (
        <Card key={data.center_id}>
          <Card.Body>
            <h6>{data.name}</h6>
            <div className="card-inner-body">
              {data.sessions.map(
                (sessionData) =>
                  sessionData.vaccine === props.vaccine &&
                  sessionData.available_capacity > 0 && (
                    <div
                      key={sessionData.session_id}
                      className="card-data-body"
                    >
                      {sessionData.min_age_limit === props.maxage ? (
                        <>
                          <span>
                            <b style={{ color: '#872320' }}>Vaccine Name :</b>
                            <span
                              style={{ color: '#0a7022', fontWeight: 'bold' }}
                            >
                              {' '}
                              {sessionData.vaccine}
                            </span>
                          </span>
                          <span>
                            <b style={{ color: 'orange' }}>Dose Left :</b>
                            <span
                              style={{ color: 'green', fontWeight: 'bold' }}
                            >
                              {' '}
                              {sessionData.available_capacity}
                            </span>
                          </span>
                          <span>
                            <b style={{ color: 'blue' }}>Vaccine Date :</b>
                            <span
                              style={{ color: 'purple', fontWeight: 'bold' }}
                            >
                              {' '}
                              {sessionData.date}
                            </span>
                          </span>
                          <span>
                            <b style={{ color: 'grey' }}>Age Limit :</b>
                            <span
                              style={{ color: '#876c20', fontWeight: 'bold' }}
                            >
                              {' '}
                              {sessionData.min_age_limit}
                            </span>
                          </span>
                        </>
                      ) : (
                        <p style={{ color: '#0a3370', fontWeight: 'bold' }}>
                          No Slots Available
                        </p>
                      )}
                    </div>
                  )
              )}
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default React.memo(DataMapping);
