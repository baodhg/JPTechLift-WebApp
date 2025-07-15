import { useParams } from "react-router-dom";
import { useState } from "react";
import { productData } from "../../data/ProductData";
import type { ProductId } from "../../data/ProductData";

// Import các component con
import ContentTableSection from "../../components/Product/ContentTableSection";
import DetailSection from "../../components/Product/DetailSection";
import DimensionSection from "../../components/Product/DimensionSection";
import InstallationSection from "../../components/Product/InstallationSection";
import BlueprintSection from "../../components/Product/BlueprintSection";
import AestheticsModal from "../../components/Product/AestheticsModal";
import Introduction from "../../components/Product/Introduction";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RealGallerySection from "../../components/Product/RealGallerySection";

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
        <Introduction
          title={product.intro.title}
          description={product.intro.description}
          introduction={product.intro.introduction}
          imageUrl={product.intro.heroImage}
        />
        {product.contentTable && (
          <ContentTableSection
            data={product.contentTable}
            imageUrl="/assets/images/home-lift/hero.jpg"
          />
        )}

        {product.detailInfo && product.galleryImages && (
          <DetailSection
            data={product.detailInfo}
            images={product.galleryImages}
            onOpenAesthetics={() => setAestheticsOpen(true)}
          />
        )}

        {product.dimensions && <DimensionSection data={product.dimensions} />}
        <RealGallerySection images={product.realGalleryImages ?? []} />
        {product.installationSteps && product.installationImage && (
          <InstallationSection
            steps={product.installationSteps}
            image={product.installationImage}
          />
        )}
        {product.blueprint && (
          <BlueprintSection blueprint={product.blueprint} />
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
