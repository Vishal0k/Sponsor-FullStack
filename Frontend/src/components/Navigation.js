import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #6a1b9a, #8e24aa)",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderBottom: "2px solid #9c27b0",
      }}
    >
      <Link
        to="/"
        style={{
          margin: "0 15px",
          textDecoration: "none",
          color: "#ffffff",
          fontSize: "18px",
          fontWeight: "bold",
          transition: "color 0.3s, background-color 0.3s, transform 0.3s",
          padding: "10px 15px",
          borderRadius: "5px",
          backgroundColor: "#ab47bc",
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "#ffffff";
          e.target.style.backgroundColor = "#d81b60";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#ffffff";
          e.target.style.backgroundColor = "#ab47bc";
          e.target.style.transform = "scale(1)";
        }}
      >
        Home
      </Link>
      <Link
        to="/Post"
        style={{
          margin: "0 15px",
          textDecoration: "none",
          color: "#ffffff",
          fontSize: "18px",
          fontWeight: "bold",
          transition: "color 0.3s, background-color 0.3s, transform 0.3s",
          padding: "10px 15px",
          borderRadius: "5px",
          backgroundColor: "#ab47bc",
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "#ffffff";
          e.target.style.backgroundColor = "#d81b60";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#ffffff";
          e.target.style.backgroundColor = "#ab47bc";
          e.target.style.transform = "scale(1)";
        }}
      >
        Add Payment
      </Link>
      <Link
        to="/q2"
        style={{
          margin: "0 15px",
          textDecoration: "none",
          color: "#ffffff",
          fontSize: "18px",
          fontWeight: "bold",
          transition: "color 0.3s, background-color 0.3s, transform 0.3s",
          padding: "10px 15px",
          borderRadius: "5px",
          backgroundColor: "#ab47bc",
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "#ffffff";
          e.target.style.backgroundColor = "#d81b60";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#ffffff";
          e.target.style.backgroundColor = "#ab47bc";
          e.target.style.transform = "scale(1)";
        }}
      >
        Question 2
      </Link>
      <Link
        to="/q3"
        style={{
          margin: "0 15px",
          textDecoration: "none",
          color: "#ffffff",
          fontSize: "18px",
          fontWeight: "bold",
          transition: "color 0.3s, background-color 0.3s, transform 0.3s",
          padding: "10px 15px",
          borderRadius: "5px",
          backgroundColor: "#ab47bc",
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "#ffffff";
          e.target.style.backgroundColor = "#d81b60";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#ffffff";
          e.target.style.backgroundColor = "#ab47bc";
          e.target.style.transform = "scale(1)";
        }}
      >
        Question 3
      </Link>
      <Link
        to="/q4"
        style={{
          margin: "0 15px",
          textDecoration: "none",
          color: "#ffffff",
          fontSize: "18px",
          fontWeight: "bold",
          transition: "color 0.3s, background-color 0.3s, transform 0.3s",
          padding: "10px 15px",
          borderRadius: "5px",
          backgroundColor: "#ab47bc",
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "#ffffff";
          e.target.style.backgroundColor = "#d81b60";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#ffffff";
          e.target.style.backgroundColor = "#ab47bc";
          e.target.style.transform = "scale(1)";
        }}
      >
        Question 4
      </Link>
    </nav>
  );
}
