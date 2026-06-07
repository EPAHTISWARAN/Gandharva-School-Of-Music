import Container from "../../components/shared/Container";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
            About Us
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Over Two Decades Of Musical Excellence
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Gandharva School has been nurturing talent through
            professional training in vocal music, instrumental music,
            and dance. We provide both online and offline learning
            experiences for students of all age groups.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-block rounded-xl bg-[var(--primary)] px-6 py-3 text-white"
          >
            Learn More
          </Link>
        </div>
      </Container>
    </section>
  );
}