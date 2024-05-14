import { products } from "@/utils/products";
import Container from "./components/Container";
import HomeBanner from "./components/nav/HomeBanner";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner/>
        </div>
        <div>
          
        </div>
      </Container>
    </div>
  );
}
