import React from "react";

export default function Mode(props) {
  // yaa chai property call gareko xxu
  return (
    <div>
      <nav className={`kush ${props.mode}`}>
        {/* yaa chai initial mode call gareko xu*/}
        <div className={`ok ${props.mode === "light"}?'dark':'light'`}>
          {/* yo step maa chai mode light vaya dark garaaune natra light vanera lekheko xu  */}
          <input
            onClick={props.toggleMode}
            //  yaa chai mode maa click haanda togglemode function call hunxa
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" Htmlfor="flexSwitchCheckDefault">
            Mode
          </label>
        </div>
      </nav>
    </div>
  );
}
