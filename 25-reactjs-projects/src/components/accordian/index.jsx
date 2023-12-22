import { useState } from 'react'
import data from './data'

const Accordian = () => {
    const [selected, setSelected] = useState(null)
    return (
        <>
            <div className="wrapper">
                <div className="accordian w-100 h-100 d-flex align-items-center  ">
                    {
                        data.map((item,index) => (
                                <div className="item" key={index}>
                                    <div className="title">
                                        <h3>{item.question} hi</h3>
                                        <span>+</span>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Accordian