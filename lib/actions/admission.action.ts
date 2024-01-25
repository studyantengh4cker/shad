"use server";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function getAdmissions() {
  const admissionsCollection = collection(db, "admissions");
  const admissionsSnapshot = await getDocs(admissionsCollection);

  const admissions: any[] = [];
  admissionsSnapshot.forEach((doc) => {
    admissions.push(doc.data());
  });

  return admissions;
}
