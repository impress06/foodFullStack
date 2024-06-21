import React, { useEffect, useState,useContext } from 'react'
import './List.css'
import { url, currency } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';
import useAxios from "../../../service/useAxios";
import { StoreContext } from '../../../Context/StoreContext'

const List = () => {
  const { axiosWithToken } = useAxios();
  const {url} = useContext(StoreContext);

  const [list, setList] = useState([]);

 

  const fetchList = async () => {
    const response = await axiosWithToken.get("/food")
    console.log("response",response)
    if (!response.data.error) {
      setList(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  const removeFood = async (foodId) => {
    const response = await axiosWithToken.delete(`/food/${foodId}`)
    await fetchList();
    if (!response.data.error) {
      toast.success(response.data.message);
    }
    else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={url+"/uploads/foodimage/"+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p className='cursor' onClick={() => removeFood(item._id)}>x</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
