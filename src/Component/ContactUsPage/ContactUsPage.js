import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const ContactUsPage = (props) => {
  return (
    <div>
      <div style={{ width: "100%", height: "100vh" }}>
        <Map
          google={props.google}
          zoom={14}
          initialCenter={{
            lat: 28.7041,
            lng: 77.1025,
          }}
          style={{ width: "100%", height: "100%" }}
        ></Map>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "linear-gradient(to right, #0074D9, #8E44AD)",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      ></div>
      <div className="pointer-events-none absolute flex top-0 left-0 items-center justify-center w-full h-full">
        <form className="w-1/2 bg-white px-32 py-14 rounded-lg pointer-events-auto">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <div className="mb-4">
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="mt-1 p-2 w-full border rounded-md"
              rows="4"
              placeholder="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBmVS7bSWN500i09ubYVl3azviF0FV5fEY",
})(ContactUsPage);
