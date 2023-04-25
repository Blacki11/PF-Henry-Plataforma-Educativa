import React from "react";
import { useState, useEffect } from "react";
import { storage, app, db } from "../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { v4 } from "uuid";
import styles from "./FireStorage.module.css";

const FireStorage = () => {
  const [fileupload, setFileupload] = useState(null);
  const [fileList, setFileList] = useState("");
  const [document, setDocument] = useState([]);
  console.log(document);
  const fileslist = ref(storage, "PDF/");

  const upload = async (e) => {
    setFileupload(e.target.files[0]);
    const archivo = e.target.files[0];
    console.log(archivo);
    if (archivo === null) return;
    console.log("ifnull");
    if (archivo.type === "image/jpeg") {
      console.log("if2");
      const fileRef = ref(storage, `Image/${archivo.name}`);
      const respuesta = await uploadBytes(fileRef, archivo);

      if (respuesta) return console.log("logrado", fileRef);
    }
    if (
      archivo.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const fileRef = ref(storage, `Words/${archivo.name + v4()}`);
      const respuesta = await uploadBytes(fileRef, archivo);
      if (respuesta) return console.log("logrado", fileRef);
    }
    if (archivo.type === "application/pdf") {
      console.log("ifpDF");
      const fileRef = ref(storage, `PDF/${archivo.name + v4()}`);
      const respuesta = await uploadBytes(fileRef, archivo).then(async (snapshot) => {
        await getDownloadURL(snapshot.ref).then(async (url) => {
          setFileList((prev) => [...prev, url]);
        });
      });
      console.log(respuesta, "hechoderecho");
    } else {
      console.log("else");
      console.log(archivo.type);
    }
    console.log("terminatodo");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const nombreArchivo = e.target.nombre.value;
    if (!nombreArchivo) {
      alert("Porfavor, introduza un nombre");
      return;
    }
    const filRef = doc(db, "archivos", nombreArchivo);
    await setDoc(filRef, { nombre: nombreArchivo, url: fileList });
    console.log("User document created in Firestore:", fileupload.name);
  };

  useEffect(() => {
    async function documentos() {
      const documentlist = await getDocs(collection(db, "archivos"));
      console.log(documentlist.docs.map((doc) => doc.data()));
      setDocument(documentlist.docs.map((doc) => doc.data()));
    }
    documentos();
  }, []);

  return (
    <>
      <form onSubmit={submitHandler} className={styles.form}>
        <input type="file" onChange={upload} className={styles.input} />
        <input type="text" name="nombre" placeholder="nombra tu archivo" className={styles.input} />
        <button className={styles.button}>Enviar </button>
      </form>
      <div>
        {document.map((e, index) => {
          console.log(e.nombre);
          return (
            <a
              key={index}
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.documentList}
            >
              {e.nombre !== undefined ? e.nombre : "HOLa"}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default FireStorage;
