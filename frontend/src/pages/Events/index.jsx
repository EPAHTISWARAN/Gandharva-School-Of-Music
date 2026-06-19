import PageBanner from "../../components/shared/PageBanner";
import EventGallery from "./EventGallery";
import VideoSection from "./VideoSection";

export default function Events() {
  return (
    <>
      <PageBanner
        title="Events"
        subtitle="Concerts, performances and workshops."
      />

      <EventGallery />
      <VideoSection />
    </>
  );
}