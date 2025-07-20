import { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import backgroundImage from "../../assets/images/BannerFooter.jpg";

const ArticleGrid = () => {
  // AOS init
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Sample data
  const articles = Array(9).fill({
    title: 'TP.HCM',
    content: 'Content 1',
    image: backgroundImage
  });

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Filter Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-4">
          {/* Topic Filter Dropdown */}
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 rounded-sm text-gray-700 focus:outline-none focus:border-blue-500 min-w-48">
              <option>Lọc theo chủ đề</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          
          {/* Year Filter Dropdown */}
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 rounded-sm text-gray-700 focus:outline-none focus:border-blue-500 min-w-48">
              <option>Lọc theo năm</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        {/* Reset Filter Link */}
        <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">
          Đặt lại bộ lọc
        </a>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border border-gray-300 bg-white max-w-[350px] w-full mx-auto"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image Placeholder */}
            <div className="bg-gray-200 h-48 flex items-center justify-center">
              <div className="border-2 border-dashed border-gray-400 w-12 h-12 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{article.content}</p>
              
              {/* Read Article Button */}
              <button className="border border-red-500 text-red-500 px-4 py-2 text-sm hover:bg-red-50 transition-colors">
                Đọc bài viết
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Down Arrow */}
      <div className="flex justify-center">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
};

export default ArticleGrid;
