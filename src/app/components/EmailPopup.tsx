"use client";

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailPopup({ isOpen, onClose }: EmailPopupProps) {
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("seoulbutter@gmail.com");
      alert("이메일 주소가 클립보드에 복사되었습니다!");
    } catch (err) {
      console.error("클립보드 복사 실패:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-orange-400 rounded-lg p-8 max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">이메일 주소</h3>
          <p className="text-orange-400 text-lg font-mono mb-4 break-all">
            seoulbutter@gmail.com
          </p>
          <p className="text-gray-400 text-sm mb-6">
            위 이메일 주소로 연락해 주세요!
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-600 transition-colors text-sm"
            >
              복사하기
            </button>
            {/* <a
              href="mailto:seoulbutter@gmail.com"
              className="px-4 py-2 border border-orange-400 text-orange-400 rounded hover:bg-orange-400/10 transition-colors text-sm"
            >
              메일 보내기
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
