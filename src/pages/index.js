import { useState } from 'react';
import html2canvas from 'html2canvas';
import fileDownload from 'js-file-download';
import ResolutionSelector from '../components/ResolutionSelector';
import BackgroundColorPicker from '../components/BackgroundColorPicker';
import ImageUploader from '../components/ImageUploader';
import PhoneScreen from '../components/PhoneScreen';

const resolutions = [
  { label: 'iPhone X', width: 1125, height: 2436 },
  { label: 'iPhone 8', width: 750, height: 1334 },
  { label: 'Galaxy S10', width: 1440, height: 3040 },
  // Add other resolutions as needed
];

export default function Home() {
  const [selectedResolution, setSelectedResolution] = useState(resolutions[0]);
  const [bgColor, setBgColor] = useState('#000000');
  const [uploadedImage, setUploadedImage] = useState(null);

  const downloadImage = async () => {
    const phoneScreen = document.querySelector('#phoneScreen');
    const canvas = await html2canvas(phoneScreen, { scale: 2 });

    // Download the cropped image
    canvas.toBlob((blob) => {
      fileDownload(blob, 'phone-background.jpeg');
    }, 'image/jpeg');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-gray-500">
      <div className="container mx-auto p-4">
        <h1 className="text-center text-4xl font-bold mb-8">TwitWppr</h1>
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-8">
            <ResolutionSelector
              resolutions={resolutions}
              selectedResolution={selectedResolution}
              onSelect={(e) => {
                const index = e.target.value;
                setSelectedResolution(resolutions[index]);
              }}
            />
            <BackgroundColorPicker
              bgColor={bgColor}
              onColorChange={(e) => {
                setBgColor(e.target.value);
              }}
            />
            <ImageUploader onUpload={handleFileUpload} />
          </div>
          <PhoneScreen
            selectedResolution={selectedResolution}
            bgColor={bgColor}
            uploadedImage={uploadedImage}
          />
          <button
            onClick={downloadImage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
          >
            Download Image
          </button>
        </div>
      </div>
    </div>
  );
}
