import { useParams } from "react-router-dom";
import { useState } from "react";
import { productData } from "../../data/ProductData";
import type { ProductId } from "../../data/ProductData";

// Import các component con
import ContentTableSection from "../../components/ProductPage/ContentTableSection";
import DetailSection from "../../components/ProductPage/DetailSection";
import DimensionSection from "../../components/ProductPage/DimensionSection";
import InstallationSection from "../../components/ProductPage/InstallationSection";
import BlueprintSection from "../../components/ProductPage/BlueprintSection";
import AestheticsModal from "../../components/ProductPage/AestheticsModal";
import Introduction from "../../components/ProductPage/Introduction";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RealGallerySection from "../../components/ProductPage/RealGallerySection";
import FadeInSection from "../../styles/components/common/FadeInSection";
// ✅ Hàm kiểm tra productId có nằm trong keys hay không
function isValidProductId(id: string): id is ProductId {
  return id in productData;
}

export default function ProductTemplatePage() {
  const { productId } = useParams();

  // ✅ State điều khiển mở/đóng modal
  const [isAestheticsOpen, setAestheticsOpen] = useState(false);

  // ✅ Nếu không có productId hợp lệ
  console.log("productId:", productId); // 👈 thêm dòng này

  if (!productId || !isValidProductId(productId)) {
    return <p>Sản phẩm không tồn tại.</p>;
  }

  const product = productData[productId];
  console.log("Đường dẫn:", productId);
  console.log("Các key hợp lệ:", Object.keys(productData));
  return (
    <div>
      <NavBar />
      <div>
        <FadeInSection>
          <Introduction
            title={product.intro.title}
            description={product.intro.description}
            introduction={product.intro.introduction}
            imageUrl={product.intro.heroImage}
          />
        </FadeInSection>
        {product.contentTable && (
          <FadeInSection>
            <ContentTableSection data={product.contentTable} imageUrl="/assets/images/home-lift/hero.jpg" />
          </FadeInSection>
        )}

        {product.detailInfo && product.galleryImages && (
          <FadeInSection>
            <DetailSection
              data={product.detailInfo}
              images={product.galleryImages}
              onOpenAesthetics={() => setAestheticsOpen(true)}
            />
          </FadeInSection>
        )}

        {product.dimensions && (
          <FadeInSection>
            <DimensionSection data={product.dimensions} />
          </FadeInSection>
        )}
        <FadeInSection>
          <RealGallerySection images={product.realGalleryImages ?? []} />
        </FadeInSection>
        {product.installationSteps && product.installationImage && (
          <FadeInSection>
            <InstallationSection steps={product.installationSteps} image={product.installationImage} />
          </FadeInSection>
        )}
        {product.blueprint && (
          <FadeInSection>
            <BlueprintSection blueprint={product.blueprint} />
          </FadeInSection>
        )}

        {/* Modal thẩm mỹ cabin */}
        {product.aestheticsOptions && (
          <AestheticsModal
            data={product.aestheticsOptions}
            open={isAestheticsOpen}
            onClose={() => setAestheticsOpen(false)}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
