import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
  {/* landing */}
 <div style={{height:"100vh",backgroundImage:'url("./landing.png")',backgroundSize:'cover',backgroundPosition:"center",
  backgroundAttachment:"fixed"}} className='d-flex justify-content-center align-items-center'>
    <div className='row container-fluid'>
      <div className='col-lg-4'></div>
      <div className='col-lg-4 rounded shadow p-5 text-center text-light' style={{backgroundColor:"rgba(108,102,90,0.5)"}}>
        <h3>Design to get hired.
          Your skills, your story, Your next job - all in one</h3>
         <Link to={'/steps'} className="btn text-light" style={{backgroundColor:"#a38461"}} >Make Your Resume</Link>
      </div>
      <div className='col-lg-4'></div>
    </div>

 </div>


  {/* tools */}
 <section className="py-5" style={{ backgroundColor: "#c0b49e" }}>
      <div className="container">
        
        <h2 className="text-center mb-5 fw-bold" style={{ fontSize: "2.5rem" }}> Tools</h2>

        <div className="row align-items-center justify-content-between">
          
          {/* Left Content */}
          <div className="col-md-5 mx-auto ">

            <div className="mb-4" >
              <h5 className="fw-bold text-dark">Resume</h5>
              <p style={{ color: "#5e412b", fontSize: "15px" }}>
                Create unlimited new resumes and easily edit them afterwards.
              </p>
            </div>

            <div className="mb-4" >
              <h5 className="fw-bold text-dark">Cover Letters</h5>
              <p style={{ color: "#5e412b", fontSize: "15px" }}>
                Easily write professional cover letters.
              </p>
            </div>

            <div className="mb-4" >
              <h5 className="fw-bold text-dark">Jobs</h5>
              <p style={{ color: "#5e412b", fontSize: "15px" }}>
                Automatically receive new and relevant job postings.
              </p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold text-dark">Applications</h5>
              <p style={{ color: "#5e412b", fontSize: "15px" }}>
                Effortlessly manage and track your job applications in an organized manner.
              </p>
            </div>
          </div>
          {/* Right Image */}
          <div className="col-md-5 text-center">
            <img width={'300px'} src="./resume.png" alt="resume" className='img-fluid rounded' />
          </div>
        </div>
      </div>
    </section>
{/* Image */}
  <div style={{height:"80vh" , backgroundImage:'url("https://hello-leaders-au-wp.imgix.net/2022/10/26_10_22_effective_meeting.jpg?auto=format&ar=4%3A3&fit=crop&q=75")',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
       
      </div>
  
      {/* testimony */}
      <div className="container mb-5">
        <h1 className="text-center my-5">Testimony</h1>

        <div className="row align-items-center">

          <div className="col-lg-1"></div>

          <div className="col-lg-5">
            <h5>Trusted by professionals worldwide.</h5>

            <p>
              At LiveCareer, we don’t just help you create résumés — we help you land the job.
              Whether you're a seasoned professional or just starting out, our tools are designed
              to get results.
            </p>

            <p>
              In fact, users who used LiveCareer reported getting hired in an average of 48 days faster.
            </p>

            <p>
              Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.
            </p>
          </div>

          <div className="col-lg-1"></div>

          <div className="col-lg-5">
            <div className="row">

              <div className="col-lg-3">
                <img className="w-100 p-2"
                  src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"
                  alt="user"
                />
              </div>

              <div className="col-lg-3">
                <img className="w-100 p-2"
                  src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"
                  alt="user"
                />
              </div>

              <div className="col-lg-3">
                <img className="w-100 p-2"
                  src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"
                  alt="user"
                />
              </div>

              <div className="col-lg-3">
                <img className="w-100 p-2"
                  src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"
                  alt="user"
                />
              </div>

              <div className="col-lg-3">
                <img className="w-100 p-2"
                  src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"
                  alt="user"
                />
              </div>

              <div className="col-lg-3">
                <img className="w-100 p-2"
                  src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"
                  alt="user"
                />
              </div>

              <div className="col-lg-3">
                <img className="w-100 p-2"
                  src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"
                  alt="user"
                />
              </div>

              <div className="col-lg-3">
                <img className="w-100 p-2"
                  src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"
                  alt="user"
                />
              </div>

              <div className="col-lg-3">
                <img className="w-100 p-2"
                  src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"
                  alt="user"
                />
              </div>

               <div className="col-lg-3">
                <img className="w-100 p-2"
                  src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"
                  alt="user"
                />
              </div>

               <div className="col-lg-3">
                <img className="w-100 p-2"
                  src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"
                  alt="user"
                />
              </div>

               <div className="col-lg-3">
                <img className="w-100 p-2"
                  src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"
                  alt="user"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home