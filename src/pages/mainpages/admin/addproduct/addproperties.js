import React, { useState } from 'react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';
import './addproduct.scss';
import ProductOptions from './productoptions/productoptions';
import ProductUpload from './productupload/productupload';
import { Trash } from 'react-bootstrap-icons';
// import NewNavbar from '../../../../shared/components/newNavbar/newnavbar';

const AddProperties = () => {
  const [optionarray, setOptionArray] = useState([]);

  const deleteVariation = (index, item) => {
    let arr = [...optionarray];

    arr[index].values.splice(
      arr[index].values.findIndex(i => i === item),
      1,
    );
    setOptionArray([...arr]);
  };
  return (
    <main className="w100">
      <>
        {/* <NewNavbar title={'Add product'} subtitle="Add new product to store" /> */}
        <div className="row w100" style={{ marginTop: '30px' }}>
          <div className="col-lg-3 order-md-12">
            <ProductUpload />
          </div>

          <div className="col-lg-9 order-md-1">
            <div className="wrapper  add_product px-3">
              <div className="input-wrapper prod my-2">
                <label className="my-2">Product Title</label>
                <input type={'text'} placeholder="Your Product Title Here" />
              </div>
              <div className="input-wrapper prod my-2">
                <label className="my-2">Short Description</label>
                <textarea placeholder="Describe your product here" />
              </div>
              <div className="input-wrapper prod my-2">
                <label className="my-2">Product Details</label>
                <FroalaEditorComponent tag="textarea" config={{}} />
              </div>
            </div>
            <div className="wrapper my-5 add_product">
              <div className="tp_name">Product Price & Stock Quantity</div>
              <div className="row px-3">
                <div className="col-lg-4 p-0">
                  <div className="input-wrapper prod stock_wrapper my-2">
                    <label className="my-2">Price</label>
                    <div className="d-flex input_with_icon">
                      <div className="symbol">₦</div>
                      <input placeholder="Standard price" type={'number'} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 p-0">
                  <div className="input-wrapper prod stock_wrapper my-2">
                    <label className="my-2">Discounted Price</label>
                    <div className="d-flex input_with_icon">
                      <div className="symbol">₦</div>
                      <input placeholder="Standard price" type={'number'} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 p-0">
                  <div className="input-wrapper prod stock_wrapper my-2">
                    <label className="my-2">Cost Price</label>
                    <div className="d-flex input_with_icon">
                      <div className="symbol">₦</div>
                      <input placeholder="Standard price" type={'number'} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row px-3">
                <div className="col-lg-3 p-0">
                  <div className="input-wrapper prod stock_wrapper my-2">
                    <label className="my-2">Stock count</label>
                    <input type={'number'} placeholder="Your Product Title Here" />
                  </div>
                </div>
                <div className="col-lg-3 p-0">
                  <div className="input-wrapper prod stock_wrapper  my-2">
                    <label className="my-2">Select Item unit</label>
                    <input type={'text'} placeholder="Your Product Title Here" />
                  </div>
                </div>
                <div className="col-lg-3 p-0">
                  <div className="input-wrapper prod stock_wrapper  my-2">
                    <label className="my-2">Stock Keeping Unit</label>
                    <input type={'number'} placeholder="Your Product Title Here" />
                  </div>
                </div>
                <div className="col-lg-3 p-0">
                  <div className="input-wrapper prod stock_wrapper  my-2">
                    <label className="my-2">Product Type</label>
                    <input type={'text'} placeholder="Your Product Title Here" />
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper my-5 add_product">
              <div className="tp_name">Product Images</div>
              <div className="row px-3">
                <div className="col-lg-4 p-0">
                  <div className="input-wrapper prod stock_wrapper my-2">
                    <label className="my-2">Price</label>
                    <div className="d-flex input_with_icon">
                      <div className="symbol">₦</div>
                      <input placeholder="Standard price" type={'number'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper my-5 add_product">
              <div className="tp_name">Product Option</div>
              <ProductOptions setOptionArray={setOptionArray} optionarray={optionarray} />
            </div>
            <div className="wrapper my-5 add_product">
              <div className="tp_name">Product Variations</div>
              {optionarray.map((i, k) => (
                <React.Fragment key={k}>
                  {i.values.length > 0 && <h5 className="m-3">{i.optionname}</h5>}
                  <div key={k}>
                    {i.values.map((inner, k0) => (
                      <div className="row m-3 product_variation" key={k0}>
                        <div className="trash-icon" onClick={() => deleteVariation(k, inner)}>
                          <Trash size={15} />
                        </div>
                        <div className="col-md-4">
                          <input disabled value={inner} />
                        </div>
                        <div className="col-md-4 my-2 my-md-0">
                          <input type={'number'} placeholder="price" />
                        </div>
                        <div className="col-md-4 ">
                          <input type={'number'} placeholder="stock quantity" />
                        </div>
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </>
    </main>
  );
};

export default AddProperties;
