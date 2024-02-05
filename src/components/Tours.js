import React from "react";
import Card from "./Card";
function Tours({tours,removeTour}) {
  return (<div className='container'>
    <div>
    <h2 className='title'>Travel in India With Anmol Bijalwan</h2>
    </div>
    <div className='cards'>
        {
            tours.map( (tour)=> {
                return (
                    <Card {...tour} removeTours={removeTour}></Card>
                )
            })
        }
    </div>
  </div>);
}
export default Tours;
