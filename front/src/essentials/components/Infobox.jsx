import React from 'react';
import logo from '../components/logo.jpg'

const Infobox = ({ inform }) => {
  return (
    <div className="border border-3 border-danger-subtle bg-gradient rounded position-absolute top-50 start-50 translate-middle" style={{ marginTop: '575px', backgroundColor: '#D83F87', padding: '20px', width: '600px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)' }}>

      <h1 style={{ color: 'whitesmoke', fontFamily: 'cursive', fontSize: '40px', fontWeight: 'bold', marginBottom: '20px', paddingLeft: '10px' }}>
        Token Analytics
      </h1>

      <div className="d-flex justify-content-start">

        <div className="bg-gradient" style={{ backgroundColor: 'purple', padding: '10px', marginRight: '6px', borderRadius: '6px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
          <h2 style={{ color: 'whitesmoke', fontFamily: 'cursive', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
            Token Name
          </h2>

          <div className="badge text-wrap" style={{ width: '6rem', alignContent: 'center', padding: '10px', margin: '10px auto', marginLeft: '5px', backgroundColor: '#D83F87' }}>
            PodToken
          </div>
        </div>



        <div className="bg-gradient" style={{ backgroundColor: 'purple', padding: '10px', marginLeft: '20px', borderRadius: '6px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
          <h2 style={{ color: 'whitesmoke', fontFamily: 'cursive', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
            Total Supply
          </h2>
          <div className="badge text-wrap" style={{ width: '6rem', alignContent: 'center', padding: '10px', margin: '10px auto', backgroundColor: '#D83F87', marginLeft: '5px' }}>
            {inform.totalSupply ? <>{inform.totalSupply}</> : "----"}
          </div>
        </div>




        <div className="bg-gradient" style={{ backgroundColor: 'purple', padding: '10px', marginLeft: '20px', borderRadius: '6px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
          <h2 style={{ color: 'whitesmoke', fontFamily: 'cursive', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
            Symbol
          </h2>
          <div className="badge text-wrap" style={{ width: '6rem', alignContent: 'center', padding: '10px', margin: '10px auto', backgroundColor: '#D83F87' }}>
            <img src={logo} className="rounded-circle border border-5 " style={{ width: '60px', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)' }} alt="..." />

          </div>
        </div>



        <div className="bg-gradient" style={{ backgroundColor: 'purple', padding: '10px', marginLeft: '20px', borderRadius: '6px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
          <h2 style={{ color: 'whitesmoke', fontFamily: 'cursive', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
            Left Token
          </h2>
          <div className="badge text-wrap" style={{ width: '6rem', alignContent: 'center', padding: '10px', margin: '10px auto', backgroundColor: '#D83F87' }}>
            {inform.balOfOwner ? <>{inform.balOfOwner}</> : "----"}
          </div>
        </div>


      </div>
    </div>
  );
}

export default Infobox;
