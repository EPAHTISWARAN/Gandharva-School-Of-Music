import PageBanner from "../../components/shared/PageBanner";
import CourseGrid from "./CourseGrid";
import CourseDetails from "./CourseDetails";

export default function Courses() {
  return (
    <>
      <PageBanner
        title="Our Courses"
        subtitle="Explore music, dance and instrumental programs."
      />

      <CourseGrid />
      <CourseDetails />
    </>
  );
}