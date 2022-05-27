import { getDocs, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import error from "next/error";
import app from "./config";

const DB = getFirestore(app);

interface Props {
  name: string;
  email: string;
  phone: string;
}

export async function addSubscribeLeads(data: Props) {
  try {
    const docRef = await addDoc(collection(DB, "leads"), {
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
    return docRef;
  } catch (e) {
    throw error;
  }
}

export async function getSubscribersLeads() {
  let subscribers: object[] = [];
  const querySnapshot = await getDocs(collection(DB, "leads"));
  querySnapshot.forEach((doc) => {
    subscribers.push(doc.data());
  });
  return subscribers;
}
