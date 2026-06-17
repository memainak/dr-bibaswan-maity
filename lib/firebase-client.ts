import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

const COLLECTION = "appointment_requests";

function getClientApp(): FirebaseApp {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDediAcn2xN6jwFzyKO07rvRVyT3CtICQE",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "dr-bibaswan-maity.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "dr-bibaswan-maity",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "dr-bibaswan-maity.firebasestorage.app",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "974790697943",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:974790697943:web:f76532d3450d8ce438e192",
  };

  if (!config.apiKey || !config.projectId) {
    throw new Error("Firebase client config is not configured.");
  }

  return getApps().length
    ? getApps()[0]
    : initializeApp(config);
}

export function isFirebaseClientConfigured(): boolean {
  return Boolean(
    (process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDediAcn2xN6jwFzyKO07rvRVyT3CtICQE") &&
      (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "dr-bibaswan-maity")
  );
}

export async function saveAppointmentRequestClient(data: {
  name: string;
  phone: string;
}) {
  const app = getClientApp();
  const db = getFirestore(app);

  const docRef = await addDoc(collection(db, COLLECTION), {
    name: data.name,
    phone: data.phone,
    phoneDisplay: `+91 ${data.phone}`,
    source: "website",
    status: "new",
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}
