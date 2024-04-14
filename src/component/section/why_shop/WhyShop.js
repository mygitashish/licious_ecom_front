import React from 'react';
import Heading from '../../globalHeading/Heading';
import { why_shop_detail } from './why_shop_detail';
import '../category.css';

function WhyShop() {
  let nm = 'Why meet shop';
  return (
    <>
      <Heading text={nm} />
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-lg-8 col-md-12 m-auto">
            <div className="d-flex align-items-center justify-content-between">
              {
                why_shop_detail.map((i,id) => {
                  return (
                    <div className="p-2" key={id}>
                      <div className="shadowImg">
                        <img src={i.icon} width='22px' className="img-fluid" />
                      </div>
                      <div className="text-center mt-2 categoryTxt">{i.text}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default WhyShop;