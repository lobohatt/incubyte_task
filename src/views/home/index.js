import React from "react";
import Stringcal from '../../components/atoms/func';

const Home = () => {

    const calculator = new Stringcal();

    return(
        <div>
            working
            <p>{(calculator.add('1'))}</p>
        </div>
    )
};

export default Home;