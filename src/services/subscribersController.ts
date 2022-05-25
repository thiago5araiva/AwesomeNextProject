import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import error from "next/error";
import app from "./config";

const DB = getFirestore(app);

interface Props {
  name: string;
  email: string;
  phone: string;
}

export async function subscribeLeads(data: Props) {
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
