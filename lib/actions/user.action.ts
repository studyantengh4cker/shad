"use server";

import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function fetchUser(id: string) {
  try {
    const usersCollection = collection(db, "users");
    // Create a reference to the specific user document using the provided id
    const userDocRef = doc(usersCollection, id);
    // Retrieve the user document snapshot
    const userDocSnapshot = await getDoc(userDocRef);
    // Check if the document exists
    if (userDocSnapshot.exists()) {
      // Return the user data
      const userData = userDocSnapshot.data();
      console.log("User data:", userData);
      return userData;
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user: ", error);
    // Rethrow the error or handle it as needed
    throw error;
  }
}

export async function createUser(
  id: string,
  {
    role,
    school_id,
    course,
    id_image,
  }: {
    role: string;
    school_id: string;
    course: string;
    id_image: string;
  }
) {
  await addDoc(collection(db, "users"), {
    id,
    role,
    school_id,
    course,
    id_image,
  });
  console.log("Done");
}
