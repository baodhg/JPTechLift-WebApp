import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
      <h1 className="text-3xl font-bold mb-4">404 - Trang không tồn tại</h1>
      <Link to="/" className="text-blue-500 underline">
        Quay lại trang chủ
      </Link>
    </div>
  );
};

export default NotFound;