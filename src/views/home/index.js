import React,{useState,useEffect} from "react";
import './index.css';
import Stringcal from '../../components/atoms/func';
import Swal from 'sweetalert2'

const Home = () => {

   
    const [userData,setuserData] = useState({
        userinput : ''
    });

    const onhandleChange = (e) => {
        setuserData({...userData,[e.target.name]: e.target.value})
    };

    
     const onhandleSubmit = (e) =>{
        e.preventDefault();
        console.log(calculator.add(`${userData.userinput}`));
        console.log(userData.userinput)
        Swal.fire({
            title: `Output : ${calculator.add(`${userData.userinput}`)}`,
            icon: 'success',
            confirmButtonText: 'Want to Try another'
          })
          setuserData({userinput:''})
     };

    const calculator = new Stringcal();

    return(
        <div className="home-banner">
            <div className="formbanner">
             <form method="post">
        <input type="text" name="userinput" placeholder="Enter the string" required="required" onChange={onhandleChange} value={userData.userinput} />
        <button type="button" onClick={onhandleSubmit}>Calculate</button>
    </form>
            </div>
        </div>
    )
};

export default Home;