import BannerCrousal from "../components/features/banners/banner-crousal";
import ProductCrousal from "../components/features/banners/cards/product-crousal";
import TeamsCard from "../components/features/teams/teams-card";

export default function Home() {
  return (
    <div>
      <BannerCrousal />
      <ProductCrousal title="" />
      <TeamsCard title="Teams" />
    </div>
  );
}
