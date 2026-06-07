import Hero from "./Hero";
import AboutPreview from "./AboutPreview";
import CoursesPreview from "./CoursesPreview";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import EventsPreview from "./EventsPreview";
import QuickEnquiry from "./QuickEnquiry";

import FadeIn from "../../components/animations/FadeIn";
import SlideUp from "../../components/animations/SlideUp";
import ScaleIn from "../../components/animations/ScaleIn";

export default function Home() {
  return (
    <>
      <Hero />

      <SlideUp>
        <AboutPreview />
      </SlideUp>

      <SlideUp>
        <CoursesPreview />
      </SlideUp>

      <FadeIn>
        <WhyChooseUs />
      </FadeIn>

      <FadeIn>
        <Testimonials />
      </FadeIn>

      <SlideUp>
        <EventsPreview />
      </SlideUp>

      <ScaleIn>
        <QuickEnquiry />
      </ScaleIn>
    </>
  );
}