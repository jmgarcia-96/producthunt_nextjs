import { useContext, useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import { FirebaseContext } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const [productos, guardarProductos] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerProductos = async () => {
      const querySnapshot = await getDocs(collection(firebase.db, "productos"));
      console.log(querySnapshot);
      const productosDB = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      guardarProductos(productosDB);
      console.log(productos);
    };

    return () => obtenerProductos();
  }, []);

  return (
    <div>
      <Layout>
        <h1>Inicio</h1>
      </Layout>
    </div>
  );
};

export default Home;
