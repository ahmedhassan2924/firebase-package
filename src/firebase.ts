// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { FirebaseOptions } from './types';

let firebaseApp: any;
let firestoreDB: any;
let firebaseAuth: any;

/**
 * Initialize Firebase App
 * @param config Firebase configuration object
 */
export const initFirebase = (config: FirebaseOptions) => {
  if (!firebaseApp) {
    firebaseApp = initializeApp(config);
    firestoreDB = getFirestore(firebaseApp);
    firebaseAuth = getAuth(firebaseApp);
  }
};

/**
 * Get Firestore Instance
 */
export const getDB = () => {
  if (!firestoreDB) {
    throw new Error('Firestore has not been initialized. Call initFirebase() first.');
  }
  return firestoreDB;
};

/**
 * Get Auth Instance
 */
export const getAuthInstance = () => {
  if (!firebaseAuth) {
    throw new Error('Auth has not been initialized. Call initFirebase() first.');
  }
  return firebaseAuth;
};
