import axios from 'axios'
import React from 'react'
import {useState} from 'react'
import Links from './Links';
import { Button } from 'react-bootstrap';

const Detail = ({ search }) => {

    const [hrefs, setHrefs] = useState([]);
    console.log('hrefs',hrefs);
    const clickHandler = async () => {
        console.log('Hello button works!!!');
        const response = await axios.get(search.href)
        setHrefs(response.data);
    }
    return (
      <div>
            {
                hrefs?.map((item) => <Links link={item} key={Math.random().toString()} />)
            }
          <Button onClick={clickHandler} >More</Button>
      </div>

  )
}

export default Detail