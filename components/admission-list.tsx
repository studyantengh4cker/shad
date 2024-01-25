import { getAdmissions } from "@/lib/actions/admission.action";

export async function AdmissionList() {
  const admissions: any[] = await getAdmissions();
  return (
    <section>
      {admissions.map((admission) => (
        <div key={admission.id}>
          <h1>{admission.firstname}</h1>
        </div>
      ))}
    </section>
  );
}
