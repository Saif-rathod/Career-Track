import UserProfile from "@/components/UserProfile";
import Footer from "@/components/Footer";

// Rename the local component to avoid conflict
function ProfilePage({ studentProfiles = [] }) {
  console.log('studentProfiles:', studentProfiles);
  const profile = studentProfiles[0] || {};
  console.log('profile:', profile);

  return (
    <div>
      <UserProfile studentProfiles={studentProfiles} />
      <Footer />
    </div>
  );
}

// getServerSideProps works in Pages Router
export async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:8000/career/student-profiles/');
    
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const studentProfiles = await res.json();
    return { props: { studentProfiles } };
  } catch (error) {
    console.error('Fetch error:', error);
    return { props: { studentProfiles: [] } }; // Ensure studentProfiles is defined
  }
}

export default ProfilePage;
