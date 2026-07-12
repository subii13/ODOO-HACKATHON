import { useState } from "react";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
  auth,
  email,
  password
);

await setDoc(doc(db, "users", userCredential.user.uid), {
  uid: userCredential.user.uid,
  email: userCredential.user.email,
  createdAt: new Date().toISOString(),
});

navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={signup}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}