import Customer from "@/component/Customer";
import Education from "@/component/Education";
import News from "@/component/News";
import Section1 from "@/component/Section1";
import Section2 from "@/component/Section2";
import Services from "@/component/Services";
import Testimonials from "@/component/Testimonials";


export default function Home() {
  return (
    <div>
      <Section1 />
      <Services />
      <Section2 />
      <Testimonials />
      <Education />
      <News />
      <Customer />
    </div>
  );
}
