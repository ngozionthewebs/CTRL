import React from 'react';
import '../componets/member.css'  // Make sure the path is correct

const Member1 = () => {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-4">
                <div className="member">
                    <div className="photo-1"></div>
                        <div className="text">
                            <h5>Ava Thompson </h5>
                            <h3>Creative Director</h3>
                            <p>Ava is a visionary designer with over seven years of experience in branding and visual storytelling. She leads the creative team at CTRL, guiding the development of compelling brand identities that resonate with clients’ target audiences. Ava is passionate about harnessing the power of design to convey meaningful messages and has a keen eye for detail. She believes that great design can transform ideas into impactful realities.</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Member1;
