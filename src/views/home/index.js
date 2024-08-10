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

    
    const onhandleSubmit = (e) => {
        e.preventDefault();  // Prevents the default form submission
        try {
            const result = calculator.add(userData.userinput);
            Swal.fire({
                title: `Output : ${result}`,
                icon: result.toString().includes("negative") ? "error" : "success",
                confirmButtonText: 'Want to Try another'
            });
            setuserData({ userinput: '' });
        } catch (error) {
            console.error('Error during form submission:', error);
            Swal.fire({
                title: 'An error occurred',
                text: 'Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    const calculator = new Stringcal();

    return(
        <div className="home-banner">
            <div className="formbanner">
             <form onSubmit={onhandleSubmit}>
        <input type="text" name="userinput" placeholder="Enter the string" required="required" onChange={onhandleChange} value={userData.userinput} />
        <button type="submit" >Calculate</button>
    </form>
            </div>
        </div>
    )
};

export default Home;