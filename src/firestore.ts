// src/firestore.ts
import { getDB } from './firebase';
import { collection, getDocs, addDoc, doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';

/**
 * Fetch all documents from a collection
 */
export const fetchCollection = async (collectionName: string) => {
  const db = getDB();
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

/**
 * Fetch a single document by ID
 */
export const fetchDocument = async (collectionName: string, docId: string) => {
  const db = getDB();
  const docRef = doc(db, collectionName, docId);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.exists() ? { id: docSnapshot.id, ...docSnapshot.data() } : null;
};

/**
 * Add a document to a collection
 */
export const addDocument = async (collectionName: string, data: any) => {
  const db = getDB();
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef.id;
};

/**
 * Update or set a document
 */
export const setDocument = async (collectionName: string, docId: string, data: any) => {
  const db = getDB();
  await setDoc(doc(db, collectionName, docId), data, { merge: true });
};

/**
 * Delete a document
 */
export const deleteDocument = async (collectionName: string, docId: string) => {
  const db = getDB();
  await deleteDoc(doc(db, collectionName, docId));
};
