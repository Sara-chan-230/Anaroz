import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
import Button from "@mui/material/Button";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useNavigate } from "react-router-dom";

const getDegreeColor = (degree) => {
  switch (degree) {
    case "high":
      return "error";
    case "medium":
      return "warning";
    case "low":
      return "info";
    default:
      return "default";
  }
};

const HelpCallMap = ({ locations }) => {
  const [center, setCenter] = useState([34.020882, -6.84165]);
  const [zoom, setZoom] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (locations.length > 0) {
      const firstLocation = locations[0];
      setCenter([firstLocation.lat, firstLocation.lng]);
    }
  }, [locations]);

  return (
    <div style={{ position: "relative" }}>
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.lat, location.lng]}
            icon={
              new L.Icon({
                iconUrl: "/alarm.png",
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32],
              })
            }
          >
           <Popup className="[&_.leaflet-popup-content-wrapper]:rounded-2xl [&_.leaflet-popup-content-wrapper]:shadow-xl [&_.leaflet-popup-content-wrapper]:shadow-gray-200/70 [&_.leaflet-popup-content-wrapper]:border-0 [&_.leaflet-popup-content-wrapper]:overflow-hidden [&_.leaflet-popup-content]:m-0 [&_.leaflet-popup-tip]:shadow-[0_3px_14px_rgba(0,0,0,0.08)]">
  <div className="w-72 bg-white relative font-sans">
    {/* Urgency indicator bar */}
    <div
      className={`absolute top-0 left-0 h-1.5 w-full ${
        location.degree === "high"
          ? "bg-gradient-to-r from-rose-500 via-rose-600 to-red-600"
          : location.degree === "medium"
          ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"
          : "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
      }`}
    ></div>

    {/* Header with icon */}
    <div className="flex items-start justify-start p-5 pb-3 mb-2">
      <div
        className={`p-2.5 rounded-xl mr-3 shadow-sm ${
          location.degree === "high"
            ? "bg-rose-50"
            : location.degree === "medium"
            ? "bg-amber-50"
            : "bg-blue-50"
        }`}
      >
        <img
          className="w-8 h-8"
          src={require("../../Assets/alarm (1).png")}
          alt="Help call"
        />
      </div>
      <div className="pt-1">
        <h3 className="text-lg font-bold text-gray-900 mb-1.5">
          Assistance Request
        </h3>
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
            location.degree === "high"
              ? "bg-rose-100 text-rose-800"
              : location.degree === "medium"
              ? "bg-amber-100 text-amber-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {location.degree === "high"
            ? "❗ Emergency Situation"
            : location.degree === "medium"
            ? "⚠️ Urgent Help Needed"
            : "ℹ️ Assistance Request"}
        </div>
      </div>
    </div>

    {/* Content area */}
    <div className="px-5 pb-4">
      {/* Problem description */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <div
            className={`w-1.5 h-4 rounded-full mr-2 ${
              location.degree === "high"
                ? "bg-rose-500"
                : location.degree === "medium"
                ? "bg-amber-500"
                : "bg-blue-500"
            }`}
          ></div>
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Situation Details
          </h4>
        </div>
        <p className="text-sm text-gray-700 pl-3.5 leading-relaxed">
          {location.description}
        </p>
      </div>

      {/* Required help */}
      {location.requiredHelp && (
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div
              className={`w-1.5 h-4 rounded-full mr-2 ${
                location.degree === "high"
                  ? "bg-rose-500"
                  : location.degree === "medium"
                  ? "bg-amber-500"
                  : "bg-blue-500"
              }`}
            ></div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Required Assistance
            </h4>
          </div>
          <p className="text-sm text-gray-700 pl-3.5 leading-relaxed">
            {location.requiredHelp}
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center pt-3 mt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500 flex items-center">
          <svg
            className="w-3 h-3 mr-1.5 opacity-80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {new Date(location.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
        <div className="text-xs text-gray-500 font-medium">
          ID: #{Math.floor(Math.random() * 9000) + 1000}
        </div>
      </div>
    </div>
  </div>
</Popup>          </Marker>
        ))}
      </MapContainer>

      <Button
        variant="contained"
        color="primary"
        startIcon={<HomeRoundedIcon />}
        onClick={() => navigate("/")}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 1000,
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
        }}
      >
        Home
      </Button>
    </div>
  );
};

export default HelpCallMap;
