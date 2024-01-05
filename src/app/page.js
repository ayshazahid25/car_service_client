"use client";

import LoginForm from "./components/LoginForm";
import Card from "./components/Card";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <LoginForm />
      <Card />
    </div>
  );
}
