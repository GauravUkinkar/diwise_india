import React from 'react'
import './Whychoose.scss';

function Whychoose() {
    return (
        <>
            <div className=" why-parent parent">
                <div className="why-container container">
                    <h3 className="why-choose-heading">WHY CHOOSE US?</h3>
                    <div className="why-choose-card-box">
                        <div className="why-choose-card">
                            <div className="why-choose-card-text-box">
                                <div className="why-choose-card-img"></div>
                                <h4 className=''>TECHNOLOGY</h4>
                                <p>Technology is a key to leading in any industry. Our technical team leverages it to provide streamlined processes and highly dependable solutions for our clients.</p>
                            </div>

                        </div>
                        <div className="why-choose-card">
                            <div className="why-choose-card-text-box">
                                <div className="why-choose-card-img"></div>
                                <h4 className=''>INTEGRITY</h4>
                                <p>Honesty and fairness are the guidelines by which we measure all our actions. We dedicate ourselves to walking this moral high ground.

</p>
                            </div>

                        </div>
                        <div className="why-choose-card">
                            <div className="why-choose-card-text-box">
                                <div className="why-choose-card-img"></div>
                                <h4 className=''>CONTINUOUS IMPROVEMENT
                                </h4>
                                <p>Excellence is a continuous process. Keeping up with the latest industrial trends and being up to date with newer technologies is reinforced within the team.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Whychoose