import React from 'react';
import './../../App.css';
import Footer from '../Footer.js';
import './payroll.css';
import vid from '../Images/payroll/output.mp4';
import epic from '../Images/payroll/Epic-userstory.png';
import epic1 from '../Images/payroll/Epic-1.png';
import epic2 from '../Images/payroll/Epic-2.png';
import epic3 from '../Images/payroll/Epic-3.png';
import epic4 from '../Images/payroll/Epic-4.png';
import epic5 from '../Images/payroll/Epic-5.png';
import s1 from '../Images/payroll/Sprint-1.png';
import s2 from '../Images/payroll/Sprint-2.png';
import s3 from '../Images/payroll/Sprint-3.png';
import s4 from '../Images/payroll/Sprint-4.png';
import s5 from '../Images/payroll/Sprint-5.png';
import usecase from '../Images/payroll/Use Case Diagram.png';
import workflow from '../Images/payroll/Workflow.png';
import er from '../Images/payroll/ER-Diagram.png';
import high_level_domain from '../Images/payroll/High Level Domain Architecture.jpeg';

function Home() {
    return(
        <>
        
        <figure className = 'video-wrapper'>
        <h1 className = 'head1'>Payroll Management System</h1>
            <video  src ={vid} autoPlay muted loop className='video'></video>
		</figure>
		<div className  = 'wrap'>
		<h2>Requirement Analysis</h2>
		<div className = 'epic'>
		<div classsName='img-wrapper'>ER Diagram</div>
			<div className = 'img-wrapper'>
				<img src = {er} ></img>
			</div>
		</div>
		<h2>Epic and User Stories</h2>
		<div className = 'epic-wrap'>
		<div className = 'epic'>
			<div className = 'img-wrapper'>
				<img src = {epic} ></img>
			</div>
		</div>
		<div className = 'epic'>
			<div className = 'img-wrapper'>
				<div classsName='label'>Epic 1</div>
				<img src = {epic1} ></img>
			</div>
			<div className = 'img-wrapper'>
				<img src = {epic2} ></img>
			</div>
			<div className = 'img-wrapper'>
				<img src = {epic3} ></img>
			</div>
			<div className = 'img-wrapper'>
				<img src = {epic4} ></img>
			</div>
			<div className = 'img-wrapper'>
				<img src = {epic5} ></img>
			</div>
			</div>
		</div>
		
		<h2>Sprint Breakdown</h2>
		<div className = 'epic-wrap'>
		<div className = 'epic'>
			<div className = 'img-wrapper'>
				What do they tell!
			</div>
			<div className = 'img-wrapper'>
				<img src = {s1} ></img>
			</div>
		</div>
		<div className = 'epic'>
			<div className = 'img-wrapper'>
				<img src = {s2} ></img>
			</div>
			<div className = 'img-wrapper'>
				<img src = {s3} ></img>
			</div>
			</div>
			<div className = 'epic'>
			<div className = 'img-wrapper'>
				<img src = {s4} ></img>
			</div>
			<div className = 'img-wrapper'>
				<img src = {s5} ></img>
			</div>
			</div>
		<div className = 'epic doc'>
			<div className = 'img-wrapper'>
				<div classsName='label'>Workflow</div>
				<img src = {workflow} ></img>
			</div>
			<div className = 'img-wrapper'>
				<div classsName='label'>Use Case Diagram</div>
				<img src = {usecase} ></img>
			</div>
			<div className = 'img-wrapper'>
				<div classsName='label'>High Level Domain</div>
				<img src = {high_level_domain} ></img>
			</div>
		</div>
		</div> 
		</div> 
            <Footer />
        </>
    );
};

export default Home;
