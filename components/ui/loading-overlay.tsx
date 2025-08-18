interface LoadingOverlayProps {
  message?: string;
}

export function LoadingOverlay({
  message = 'Loading...',
}: LoadingOverlayProps) {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <p className="text-gray-700">{message}</p>
        </div>
      </div>
    </div>
  );
}
