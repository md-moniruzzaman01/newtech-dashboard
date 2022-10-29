import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const ProductTable = ({product , DeleteProduct}) => {
  console.log(product);
    return (
        <>
        
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Product Name</th>
                            <th>Unit</th>
                            <th>Brand</th>
                            <th>functions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            product && product.map((prodict, index) => <tr key={prodict._id}>
                                <th>{index + 1}</th>
                                <td>{prodict.Product}</td>
                                <td>{prodict.Unit}</td>
                                <td>{prodict.Brand}</td>

                                <td className=''>
                                    <div className='w-20'>
                                        <button className="btn btn-sm btn-success text-base-100 rounded-sm">Edit</button>
                                        <button onClick={() => DeleteProduct(prodict._id)} className="btn btn-sm btn-error text-base-100 rounded-sm">Delete</button>
                                    </div>
                                </td>

                            </tr>)
                        }
                    </tbody>


                </table>
            </div>

           
        </>
    );
};

export default ProductTable;