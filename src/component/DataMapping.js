import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
function DataMapping(props) {
  //   console.log(props);

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
                      <span>
                        <b>Vaccine Name :</b> {sessionData.vaccine}
                      </span>
                      <span>
                        <b>Dose Left :</b>
                        {sessionData.available_capacity}
                      </span>
                      <span>
                        <b>Vaccine Date :</b>
                        {sessionData.date}
                      </span>
                      <span>
                        <b>Age Limit :</b>
                        {sessionData.min_age_limit}
                      </span>
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