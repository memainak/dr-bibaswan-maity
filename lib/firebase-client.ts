import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

const COLLECTION = "appointment_requests";

function getClientApp(): FirebaseApp {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
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
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
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
